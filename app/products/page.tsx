"use client"
import React, { useEffect, useState, useCallback } from 'react'
import Wrapper from '../components/Wrapper'
import { useUser } from '@clerk/nextjs'
import { Product } from '@/type'
import { deleteProduct, readProducts } from '../actions'
import EmptyState from '../components/EmptyState'
import ProductImage from '../components/ProductImage'
import Link from 'next/link'
import { Trash, Search, PackageSearch } from 'lucide-react'
import { toast } from 'react-toastify'

const ProductsPage = () => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  
  // États pour la pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const productsPerPage = 10

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true)
      if (!email) return

      const offset = (currentPage - 1) * productsPerPage
      
      const result = await readProducts(email, {
        searchName: searchTerm,
        categoryId: categoryFilter,
        limit: productsPerPage,
        offset: offset
      })

      if (result) {
        setProducts(result.products)
        setTotalPages(result.totalPages)
        setTotalProducts(result.totalCount)
      }
    } catch (error) {
      console.error('Failed to fetch products:', error)
      toast.error('Échec du chargement des produits')
    } finally {
      setIsLoading(false)
    }
  }, [email, searchTerm, categoryFilter, currentPage, productsPerPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, categoryFilter])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const handleDelete = async (product: Product) => {
    if (!confirm('Voulez-vous vraiment supprimer ce produit ?')) return

    try {
      // Supprimer l'image si elle existe
      if (product.imageUrl && !product.imageUrl.startsWith('/uploads/')) {
        const res = await fetch('/api/upload', {
          method: 'DELETE',
          body: JSON.stringify({ path: product.imageUrl }),
          headers: { 'Content-Type': 'application/json' }
        })

        if (!res.ok) throw new Error('Erreur lors de la suppression de l\'image.')
      }

      if (email) {
        await deleteProduct(product.id, email)
        toast.success('Produit supprimé avec succès')
        
        // Gérer la pagination après suppression
        if (products.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1)
        } else {
          await fetchProducts()
        }
      }
    } catch (error) {
      console.error('Échec de la suppression:', error)
      toast.error('Échec de la suppression du produit')
    }
  }

  // Extraire les catégories uniques des produits
  const categories = Array.from(new Set(products
    .map(p => p.categoryName)
    .filter(Boolean) as string[]
  ))

  return (
    <Wrapper>
      {/* En-tête avec statistiques */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Produits</h1>
            <p className="text-base-content/70">
              Gestion de votre inventaire - {totalProducts} produit(s) au total
            </p>
          </div>
          <Link 
            href="/new-product" 
            className="btn btn-primary gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <PackageSearch className="w-5 h-5" />
            Nouveau Produit
          </Link>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="mb-6 bg-base-200 rounded-2xl p-4 border border-base-300">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-base-content/50" />
            </div>
            <input
              type="text"
              placeholder="Rechercher par nom ou référence..."
              className="input input-bordered w-full pl-10 bg-base-100 focus:bg-base-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="select select-bordered w-full md:w-64 bg-base-100"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">Toutes les catégories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Bouton de réinitialisation */}
          {(searchTerm || categoryFilter) && (
            <button
              onClick={() => {
                setSearchTerm('')
                setCategoryFilter('')
              }}
              className="btn btn-outline btn-sm"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </div>

      {/* Tableau des produits */}
      <div className='bg-base-100 rounded-2xl shadow-sm border border-base-300 overflow-hidden'>
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : products.length === 0 ? (
          <div className="py-12">
            <EmptyState
              IconComponent="PackageSearch"
              message={searchTerm || categoryFilter ? 'Aucun produit trouvé avec ces critères' : 'Aucun produit disponible'}
            />
            <div className="flex justify-center mt-6">
              {searchTerm || categoryFilter ? (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setCategoryFilter('')
                  }}
                  className="btn btn-primary"
                >
                  Voir tous les produits
                </button>
              ) : (
                <Link href="/new-product" className="btn btn-primary">
                  Créer un produit
                </Link>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className='table table-zebra'>
                <thead className="bg-base-200">
                  <tr>
                    <th className="font-bold text-base-content">#</th>
                    <th className="font-bold text-base-content">Image</th>
                    <th className="font-bold text-base-content">Nom</th>
                    <th className="font-bold text-base-content">Référence</th>
                    <th className="font-bold text-base-content">Description</th>
                    <th className="font-bold text-base-content">Stock</th>
                    <th className="font-bold text-base-content">Prix</th>
                    <th className="font-bold text-base-content">Catégorie</th>
                    <th className="font-bold text-base-content">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id} className="hover:bg-base-200 transition-colors">
                      <td className="font-medium">
                        {(currentPage - 1) * productsPerPage + index + 1}
                      </td>
                      <td>
                        <ProductImage
                          src={product.imageUrl}
                          alt={product.name}
                          heightClass='h-12'
                          widthClass='w-12'
                          className="rounded-lg border border-base-300"
                        />
                      </td>
                      <td>
                        <div className="font-semibold text-base-content">{product.name}</div>
                      </td>
                      <td>
                        <span className="badge badge-outline badge-sm">
                          {product.reference || '—'}
                        </span>
                      </td>
                      <td className="max-w-xs">
                        <div className="truncate text-sm text-base-content/70" title={product.description}>
                          {product.description || '—'}
                        </div>
                      </td>
                      <td>
                        <div className={`font-bold ${
                          product.quantity === 0 
                            ? 'text-error' 
                            : product.quantity < 20 
                            ? 'text-warning' 
                            : 'text-success'
                        }`}>
                          {product.quantity} 
                          <span className="text-xs font-normal text-base-content/60 ml-1">
                            {product.unit}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="font-bold text-primary">
                          {product.price ? `${product.price} CFA` : '—'}
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium">{product.categoryName || 'Non catégorisé'}</span>
                          {product.subCategoryName && (
                            <span className="text-xs text-base-content/60">
                              {product.subCategoryName}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className='flex gap-2'>
                          <Link 
                            href={`/update-product/${product.id}`}
                            className='btn btn-xs btn-primary btn-outline'
                          >
                            Modifier
                          </Link>
                          <button 
                            onClick={() => handleDelete(product)}
                            className='btn btn-xs btn-error btn-outline hover:bg-error hover:text-error-content'
                            title="Supprimer le produit"
                          >
                            <Trash className='w-3 h-3' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col md:flex-row justify-between items-center p-6 border-t border-base-300 gap-4">
                <div className="text-sm text-base-content/70">
                  Affichage de {(currentPage - 1) * productsPerPage + 1} à {Math.min(currentPage * productsPerPage, totalProducts)} sur {totalProducts} produits
                </div>
                
                <div className="join">
                  <button
                    className="join-item btn btn-outline"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1 || isLoading}
                  >
                    «
                  </button>
                  <button className="join-item btn btn-outline pointer-events-none">
                    Page {currentPage} sur {totalPages}
                  </button>
                  <button
                    className="join-item btn btn-outline"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages || isLoading}
                  >
                    »
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Wrapper>
  )
}

export default ProductsPage