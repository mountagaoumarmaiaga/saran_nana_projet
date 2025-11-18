"use client"

import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { 
  getProductOverviewStats, 
  getStockSummary, 
  getProductCategoryDistribution,
  getInvoiceStats,
  getClientStats
} from '../actions'
import type { 
  ProductOverviewStats, 
  StockSummary, 
  CategoryDistribution,
  InvoiceStats,
  ClientStats
} from '@/type'
import Wrapper from '../components/Wrapper'
import { 
  Package, 
  TrendingUp, 
  Users, 
  FileText, 
  AlertTriangle, 
  ShoppingCart,
  BarChart3,
  DollarSign,
  PieChart
} from 'lucide-react'

const AnalyticsPage = () => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string

  const [productStats, setProductStats] = useState<ProductOverviewStats | null>(null)
  const [stockSummary, setStockSummary] = useState<StockSummary | null>(null)
  const [categoryDistribution, setCategoryDistribution] = useState<CategoryDistribution[]>([])
  const [invoiceStats, setInvoiceStats] = useState<InvoiceStats | null>(null)
  const [clientStats, setClientStats] = useState<ClientStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!email) return

      try {
        setLoading(true)
        const [
          productData,
          stockData,
          categoryData,
          invoiceData,
          clientData
        ] = await Promise.all([
          getProductOverviewStats(email),
          getStockSummary(email),
          getProductCategoryDistribution(email),
          getInvoiceStats(email),
          getClientStats(email)
        ])

        setProductStats(productData)
        setStockSummary(stockData)
        setCategoryDistribution(categoryData)
        setInvoiceStats(invoiceData)
        setClientStats(clientData)
      } catch (error) {
        console.error('Erreur chargement analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [email])

  if (loading) {
    return (
      <Wrapper>
        <div className="flex justify-center items-center min-h-96">
          <div className="text-center">
            <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
            <p className="text-base-content/60">Chargement des analyses...</p>
          </div>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="space-y-6 p-6">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 text-primary">
                <BarChart3 className="w-full h-full" />
              </div>
              Tableau de Bord Analytics
            </h1>
            <p className="text-base-content/60 mt-2 text-sm sm:text-base">
              Analyse complète de votre activité et performances
            </p>
          </div>
        </div>

        {/* Cartes de statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Produits */}
          <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-base-content/60">Total Produits</p>
                  <p className="text-2xl font-bold text-primary mt-1">
                    {productStats?.totalProducts || 0}
                  </p>
                </div>
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Package className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-xs text-base-content/60 mt-2">
                {productStats?.totalCategories || 0} catégories
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-base-content/60">Transactions</p>
                  <p className="text-2xl font-bold text-info mt-1">
                    {productStats?.totalTransactions || 0}
                  </p>
                </div>
                <div className="p-3 bg-info/20 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-info" />
                </div>
              </div>
              <div className="text-xs text-base-content/60 mt-2">
                Activité commerciale
              </div>
            </div>
          </div>

          {/* Factures */}
          <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-base-content/60">Factures</p>
                  <p className="text-2xl font-bold text-success mt-1">
                    {invoiceStats?.totalInvoices || 0}
                  </p>
                </div>
                <div className="p-3 bg-success/20 rounded-lg">
                  <FileText className="w-6 h-6 text-success" />
                </div>
              </div>
              <div className="text-xs text-base-content/60 mt-2">
                Taux de paiement: {invoiceStats?.paymentRate?.toFixed(1) || 0}%
              </div>
            </div>
          </div>

          {/* Clients */}
          <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-base-content/60">Clients</p>
                  <p className="text-2xl font-bold text-warning mt-1">
                    {clientStats?.totalClients || 0}
                  </p>
                </div>
                <div className="p-3 bg-warning/20 rounded-lg">
                  <Users className="w-6 h-6 text-warning" />
                </div>
              </div>
              <div className="text-xs text-base-content/60 mt-2">
                {clientStats?.clientsWithInvoices || 0} avec factures
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Résumé du stock */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Résumé du Stock
              </h3>
              <div className="space-y-4 mt-4">
                <div className="flex justify-between items-center p-3 bg-success/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="font-medium">Stock Normal</span>
                  </div>
                  <span className="text-lg font-bold text-success">
                    {stockSummary?.inStockCount || 0}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-warning/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span className="font-medium">Stock Faible</span>
                  </div>
                  <span className="text-lg font-bold text-warning">
                    {stockSummary?.lowStockCount || 0}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-error/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-error rounded-full"></div>
                    <span className="font-medium">Rupture</span>
                  </div>
                  <span className="text-lg font-bold text-error">
                    {stockSummary?.outOfStockCount || 0}
                  </span>
                </div>
              </div>

              {stockSummary && stockSummary.criticalProducts.length > 0 && (
                <div className="mt-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-center gap-2 text-warning mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-medium">Produits Critiques</span>
                  </div>
                  <p className="text-sm text-base-content/60">
                    {stockSummary.criticalProducts.length} produits nécessitent attention
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Répartition par catégorie */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <PieChart className="w-5 h-5 text-info" />
                Répartition par Catégorie
              </h3>
              <div className="space-y-3 mt-4">
                {categoryDistribution.slice(0, 5).map((category, index) => (
                  <div key={category.name} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: [
                            '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'
                          ][index % 5]
                        }}
                      ></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base-content">{category.value}</span>
                      <span className="text-sm text-base-content/60">produits</span>
                    </div>
                  </div>
                ))}

                {categoryDistribution.length > 5 && (
                  <div className="text-center pt-2 border-t border-base-300">
                    <span className="text-sm text-base-content/60">
                      +{categoryDistribution.length - 5} autres catégories
                    </span>
                  </div>
                )}

                {categoryDistribution.length === 0 && (
                  <div className="text-center py-8 text-base-content/60">
                    Aucune donnée de catégorie disponible
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques financières */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenus */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-success" />
                Revenus Totaux
              </h3>
              <div className="text-center py-6">
                <p className="text-3xl font-bold text-success">
                  {(invoiceStats?.totalRevenue || 0).toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'XOF'
                  })}
                </p>
                <p className="text-sm text-base-content/60 mt-2">Depuis le début</p>
              </div>
            </div>
          </div>

          {/* Statut des factures */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <FileText className="w-5 h-5 text-info" />
                Statut des Factures
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-success font-medium">Payées</span>
                  <span className="font-bold text-success">{invoiceStats?.paidInvoices || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-error font-medium">Impayées</span>
                  <span className="font-bold text-error">{invoiceStats?.unpaidInvoices || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-warning font-medium">En attente</span>
                  <span className="font-bold text-warning">{invoiceStats?.pendingInvoices || 0}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance clients */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <Users className="w-5 h-5 text-warning" />
                Base Clients
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Avec email</span>
                  <span className="font-bold text-info">{clientStats?.clientsWithEmail || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Avec téléphone</span>
                  <span className="font-bold text-info">{clientStats?.clientsWithPhone || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Avec factures</span>
                  <span className="font-bold text-success">{clientStats?.clientsWithInvoices || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateurs de performance */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body">
            <h3 className="card-title flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Indicateurs de Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div className="text-center p-4 bg-base-200 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">
                  {invoiceStats?.paymentRate?.toFixed(1) || 0}%
                </div>
                <div className="text-sm text-base-content/60">Taux de Paiement</div>
              </div>

              <div className="text-center p-4 bg-base-200 rounded-lg">
                <div className="text-2xl font-bold text-info mb-2">
                  {clientStats?.totalClients ? Math.round((clientStats.clientsWithInvoices / clientStats.totalClients) * 100) : 0}%
                </div>
                <div className="text-sm text-base-content/60">Clients Actifs</div>
              </div>

              <div className="text-center p-4 bg-base-200 rounded-lg">
                <div className="text-2xl font-bold text-success mb-2">
                  {stockSummary ? Math.round(((stockSummary.inStockCount || 0) / ((stockSummary.inStockCount || 0) + (stockSummary.lowStockCount || 0) + (stockSummary.outOfStockCount || 0))) * 100) : 0}%
                </div>
                <div className="text-sm text-base-content/60">Stock Optimal</div>
              </div>

              <div className="text-center p-4 bg-base-200 rounded-lg">
                <div className="text-2xl font-bold text-warning mb-2">
                  {productStats?.totalProducts ? Math.round((productStats.totalTransactions / productStats.totalProducts) * 100) : 0}%
                </div>
                <div className="text-sm text-base-content/60">Taux de Rotation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AnalyticsPage