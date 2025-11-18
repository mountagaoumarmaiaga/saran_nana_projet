import { ProductOverviewStats } from '@/type'
import React, { useEffect, useState, useCallback } from 'react'
import { getProductOverviewStats } from '../actions'
import { Box, ShoppingCart, Tag, Currency } from 'lucide-react'

const ProductOverview = ({ email }: { email: string }) => {
    const [stats, setStats] = useState<ProductOverviewStats | null>(null)

    const fetchStats = useCallback(async () => {
        try {
            if (email) {
                const result = await getProductOverviewStats(email)
                if (result) {
                    setStats(result)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }, [email])

    useEffect(() => {
        if (email) {
            fetchStats()
        }
    }, [email, fetchStats])

    // Fonction pour formater le prix en XOF
    const formatPrice = (price: number | undefined) => {
        if (price === undefined || price === null) return '0'
        return price.toLocaleString('fr-FR')
    }

    return (
        <div>
            {stats ? (
                <div className='grid grid-cols-2 gap-4'>
                    {/* Ligne 1 */}
                    <div className='grid grid-cols-2 gap-4 col-span-2'>
                        {/* Produits en stock */}
                        <div className='border-2 p-6 border-base-200 rounded-3xl bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30'>
                            <p className='stat-title text-base-content/70 mb-3 font-medium'>Produits en stock</p>
                            <div className='flex justify-between items-center'>
                                <div className='stat-value text-3xl font-bold text-primary'>{stats.totalProducts}</div>
                                <div className='bg-primary/20 p-3 rounded-2xl'>
                                    <Box className='w-6 h-6 text-primary' />
                                </div>
                            </div>
                            <div className='mt-2 text-xs text-base-content/50'>
                                Articles disponibles
                            </div>
                        </div>

                        {/* Nombre de catégories */}
                        <div className='border-2 p-6 border-base-200 rounded-3xl bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30'>
                            <p className='stat-title text-base-content/70 mb-3 font-medium'>Catégories</p>
                            <div className='flex justify-between items-center'>
                                <div className='stat-value text-3xl font-bold text-secondary'>{stats.totalCategories}</div>
                                <div className='bg-secondary/20 p-3 rounded-2xl'>
                                    <Tag className='w-6 h-6 text-secondary' />
                                </div>
                            </div>
                            <div className='mt-2 text-xs text-base-content/50'>
                                Catégories actives
                            </div>
                        </div>
                    </div>

                    {/* Ligne 2 */}
                    <div className='grid grid-cols-2 gap-4 col-span-2'>
                        {/* Total des transactions */}
                        <div className='border-2 p-6 border-base-200 rounded-3xl bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30'>
                            <p className='stat-title text-base-content/70 mb-3 font-medium'>Transactions</p>
                            <div className='flex justify-between items-center'>
                                <div className='stat-value text-3xl font-bold text-accent'>{stats.totalTransactions}</div>
                                <div className='bg-accent/20 p-3 rounded-2xl'>
                                    <ShoppingCart className='w-6 h-6 text-accent' />
                                </div>
                            </div>
                            <div className='mt-2 text-xs text-base-content/50'>
                                Opérations totales
                            </div>
                        </div>

                        {/* Total des Prix */}
                        <div className='border-2 p-6 border-base-200 rounded-3xl bg-base-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30'>
                            <p className='stat-title text-base-content/70 mb-3 font-medium'>Valeur Stock</p>
                            <div className='flex justify-between items-center'>
                                <div className='stat-value text-3xl font-bold text-success'>{formatPrice(stats.totalPrice)} XOF</div>
                                <div className='bg-success/20 p-3 rounded-2xl'>
                                    <Currency className='w-6 h-6 text-success' />
                                </div>
                            </div>
                            <div className='mt-2 text-xs text-base-content/50'>
                                Valeur totale
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center w-full py-12'>
                    <div className='text-center'>
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                        <p className='mt-3 text-base-content/60'>Chargement des statistiques...</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductOverview