"use client"

import React, { useEffect, useState, useCallback } from 'react'
import { getStockSummary } from '../actions'
import ProductImage from './ProductImage'
import EmptyState from './EmptyState'
import { AlertCircle, Package, TrendingDown, AlertTriangle } from 'lucide-react'

// Types
interface CriticalProduct {
  id: string
  name: string
  quantity: number
  categoryName: string
  subCategoryName: string
  imageUrl: string
  reference: string
  price: number
}

interface StockSummary {
  inStockCount: number
  lowStockCount: number
  outOfStockCount: number
  criticalProducts: CriticalProduct[]
}

const StockSummaryTable = ({ email }: { email: string }) => {
  const [data, setData] = useState<StockSummary | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchSummary = useCallback(async () => {
    try {
      setLoading(true)
      if (email) {
        const summaryData = await getStockSummary(email)
        setData(summaryData)
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du stock:", error)
    } finally {
      setLoading(false)
    }
  }, [email])

  useEffect(() => {
    if (email) fetchSummary()
  }, [email, fetchSummary])

  // 🔄 État de chargement
  if (loading) {
    return (
      <div className='flex justify-center items-center w-full h-64'>
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  // 🚫 Aucun produit
  if (!data) {
    return (
      <EmptyState
        message='Aucun produit disponible'
        IconComponent='PackageSearch'
      />
    )
  }

  // ✅ Affichage principal
  return (
    <div className='w-full space-y-6'>

      {/* Section résumé du stock */}
      <div className='bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm'>
        <h2 className='text-xl font-bold text-base-content mb-6 flex items-center gap-2'>
          <Package size={22} className='text-primary' />
          Résumé du Stock
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stock normal */}
          <div className="bg-success/20 border border-success/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-success">Stock Normal</p>
                <p className="text-2xl font-bold text-success mt-1">{data.inStockCount}</p>
                <p className="text-xs text-success/70 mt-1">{'>'} 20 unités</p>
              </div>
              <div className="p-2 bg-success/20 rounded-lg flex items-center justify-center">
                <Package size={20} className="text-success" />
              </div>
            </div>
          </div>

          {/* Stock faible */}
          <div className="bg-warning/20 border border-warning/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-warning">Stock Faible</p>
                <p className="text-2xl font-bold text-warning mt-1">{data.lowStockCount}</p>
                <p className="text-xs text-warning/70 mt-1">≤ 20 unités</p>
              </div>
              <div className="p-2 bg-warning/20 rounded-lg flex items-center justify-center">
                <AlertTriangle size={20} className="text-warning" />
              </div>
            </div>
          </div>

          {/* Rupture de stock */}
          <div className="bg-error/20 border border-error/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-error">Rupture</p>
                <p className="text-2xl font-bold text-error mt-1">{data.outOfStockCount}</p>
                <p className="text-xs text-error/70 mt-1">0 unité</p>
              </div>
              <div className="p-2 bg-error/20 rounded-lg flex items-center justify-center">
                <TrendingDown size={20} className="text-error" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section des produits critiques */}
      <div className='bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm'>
        <h2 className='text-xl font-bold text-base-content mb-6 flex items-center gap-2'>
          <AlertCircle size={22} className='text-error' />
          Produits Critiques
          <span className="badge badge-error badge-lg ml-2">
            {data.criticalProducts.length}
          </span>
        </h2>

        {data.criticalProducts.length > 0 ? (
          <div className='overflow-x-auto overflow-y-hidden rounded-xl'>
            <table className='table table-zebra'>
              <thead>
                <tr className='bg-base-200'>
                  <th className='text-base-content font-bold text-center'>#</th>
                  <th className='text-base-content font-bold text-center'>Image</th>
                  <th className='text-base-content font-bold'>Nom</th>
                  <th className='text-base-content font-bold'>Référence</th>
                  <th className='text-base-content font-bold'>Catégorie</th>
                  <th className='text-base-content font-bold text-center'>Quantité</th>
                  <th className='text-base-content font-bold text-center'>Statut</th>
                </tr>
              </thead>

              <tbody>
                {data.criticalProducts.map((product, index) => (
                  <tr key={product.id} className='hover:bg-base-200 transition-colors'>
                    <td className='font-medium text-base-content text-center'>{index + 1}</td>

                    <td className='flex justify-center'>
                      <ProductImage
                        src={product.imageUrl || ''}
                        alt={product.name}
                        heightClass='h-12'
                        widthClass='w-12'
                        className='rounded-lg object-cover'
                      />
                    </td>

                    <td className='font-semibold text-base-content'>{product.name}</td>
                    <td className='text-base-content/70 font-mono'>{product.reference}</td>
                    <td className='text-base-content/70'>{product.categoryName}</td>

                    <td className='text-center'>
                      <span
                        className={`font-bold text-lg ${
                          product.quantity === 0 ? 'text-error' : 'text-warning'
                        }`}
                      >
                        {product.quantity}
                      </span>
                    </td>

                    <td className='text-center'>
                      {product.quantity === 0 ? (
                        <span className="badge badge-error badge-lg flex items-center gap-1.5 p-1">
                          <TrendingDown size={16} />
                          Rupture
                        </span>
                      ) : (
                        <span className="badge badge-warning badge-lg flex items-center gap-1.5 p-1">
                          <AlertTriangle size={16} />
                          Faible
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="p-4 bg-success/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Package size={28} className="text-success" />
            </div>
            <p className="text-base-content text-lg font-semibold mb-2">Aucun produit critique</p>
            <p className="text-base-content/70">Tous vos produits ont un stock suffisant</p>
          </div>
        )}
      </div>

      {/* Indicateurs visuels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2 text-warning">
          <AlertTriangle size={16} />
          <span>Stock faible : ≤ 20 unités</span>
        </div>
        <div className="flex items-center gap-2 text-error">
          <TrendingDown size={16} />
          <span>Rupture de stock : 0 unité</span>
        </div>
      </div>
    </div>
  )
}

export default StockSummaryTable
