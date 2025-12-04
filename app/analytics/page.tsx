"use client"

import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useUser } from '@clerk/nextjs'
import { 
  getProductOverviewStats, 
  getStockSummary, 
  getProductCategoryDistribution,
  getInvoiceStats,
  getClientStats,
  getDailySales,
  getDailyFinancialSummary
} from '../actions'
import type { 
  ProductOverviewStats, 
  StockSummary, 
  CategoryDistribution,
  InvoiceStats,
  ClientStats,
  DailySales,
  DailyFinancialSummary
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
  PieChart,
  Calendar,
  TrendingUp as TrendingUpIcon,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter
} from 'lucide-react'

// Import pour Recharts
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell
} from 'recharts'

const AnalyticsPage = () => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string

  const [productStats, setProductStats] = useState<ProductOverviewStats | null>(null)
  const [stockSummary, setStockSummary] = useState<StockSummary | null>(null)
  const [categoryDistribution, setCategoryDistribution] = useState<CategoryDistribution[]>([])
  const [invoiceStats, setInvoiceStats] = useState<InvoiceStats | null>(null)
  const [clientStats, setClientStats] = useState<ClientStats | null>(null)
  const [dailySales, setDailySales] = useState<DailySales[]>([])
  const [financialSummary, setFinancialSummary] = useState<DailyFinancialSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState<'7jours' | '30jours' | '90jours'>('30jours')

  // Données formatées pour Recharts
  const chartData = useMemo(() => {
    if (!dailySales.length) return []
    
    // Trier par date (plus ancien au plus récent) et prendre les 14 derniers jours
    const sortedSales = [...dailySales]
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-14)
    
    return sortedSales.map(day => ({
      date: new Date(day.date).toLocaleDateString('fr-FR', { 
        weekday: 'short', 
        day: 'numeric' 
      }),
      fullDate: new Date(day.date).toLocaleDateString('fr-FR', { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      ventes: day.totalAmount,
      transactions: day.transactionCount,
      rawDate: day.date
    }))
  }, [dailySales])

  // Calculs pour les statistiques
  const calculations = useMemo(() => {
    if (!dailySales.length) {
      return {
        periodSales: 0,
        salesGrowth: 0,
        bestDay: null as DailySales | null,
        worstDay: null as DailySales | null,
        averageDailySales: 0,
        daysWithSales: 0
      }
    }

    // Calculer les ventes pour la période sélectionnée
    const periodMap = {
      '7jours': 7,
      '30jours': 30,
      '90jours': 90
    }
    
    const periodDays = Math.min(periodMap[selectedPeriod], dailySales.length)
    const sortedSales = [...dailySales].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const periodSales = sortedSales.slice(0, periodDays).reduce((sum, day) => sum + day.totalAmount, 0)

    // Calculer la croissance
    let salesGrowth = 0
    if (dailySales.length >= periodDays * 2) {
      const lastPeriod = sortedSales.slice(0, periodDays)
      const previousPeriod = sortedSales.slice(periodDays, periodDays * 2)
      
      const lastPeriodTotal = lastPeriod.reduce((sum, day) => sum + day.totalAmount, 0)
      const previousPeriodTotal = previousPeriod.reduce((sum, day) => sum + day.totalAmount, 0)
      
      if (previousPeriodTotal > 0) {
        salesGrowth = ((lastPeriodTotal - previousPeriodTotal) / previousPeriodTotal) * 100
      } else if (lastPeriodTotal > 0) {
        salesGrowth = 100
      }
    }

    // Meilleur jour
    const daysWithSales = dailySales.filter(day => day.totalAmount > 0)
    const bestDay = daysWithSales.length > 0 
      ? daysWithSales.reduce((max, day) => 
          day.totalAmount > max.totalAmount ? day : max, daysWithSales[0]
        )
      : null

    // Pire jour (avec ventes)
    const worstDay = daysWithSales.length > 0 
      ? daysWithSales.reduce((min, day) => 
          day.totalAmount < min.totalAmount ? day : min, daysWithSales[0]
        )
      : null

    // Moyenne quotidienne
    const totalSales = dailySales.reduce((sum, day) => sum + day.totalAmount, 0)
    const averageDailySales = dailySales.length > 0 ? totalSales / dailySales.length : 0

    // Jours avec ventes
    const daysWithSalesCount = daysWithSales.length

    return {
      periodSales,
      salesGrowth,
      bestDay,
      worstDay,
      averageDailySales,
      daysWithSales: daysWithSalesCount
    }
  }, [dailySales, selectedPeriod])

  // Fonction de formatage pour l'axe Y
  const formatYAxis = useCallback((value: number) => {
    return value.toLocaleString('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  }, [])

  // Fonction de formatage pour le tooltip
  const formatTooltip = useCallback((value: number) => {
    return [
      value.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }),
      'Ventes'
    ]
  }, [])

  // Définir les couleurs vertes pour le graphique
  const getBarColor = useCallback((value: number) => {
    if (value > 0) {
      // Gradient vert clair à vert foncé basé sur la valeur
      const intensity = Math.min(value / 100000, 1) // Ajustez 100000 selon vos données max
      const hue = 120 // Vert
      const saturation = 70 + (intensity * 20) // 70% à 90%
      const lightness = 70 - (intensity * 20) // 70% à 50%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    }
    return '#e5e7eb' // Gris pour les valeurs nulles
  }, [])

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
          clientData,
          dailySalesData,
          financialSummaryData
        ] = await Promise.all([
          getProductOverviewStats(email),
          getStockSummary(email),
          getProductCategoryDistribution(email),
          getInvoiceStats(email),
          getClientStats(email),
          getDailySales(email),
          getDailyFinancialSummary(email, 30)
        ])

        console.log('📊 Données récupérées:', {
          productStats: productData,
          stockSummary: stockData,
          categoryDistribution: categoryData?.length,
          invoiceStats: invoiceData,
          clientStats: clientData,
          dailySales: dailySalesData?.length,
          financialSummary: financialSummaryData?.length
        })

        setProductStats(productData)
        setStockSummary(stockData)
        setCategoryDistribution(categoryData || [])
        setInvoiceStats(invoiceData)
        setClientStats(clientData)
        setDailySales(dailySalesData || [])
        setFinancialSummary(financialSummaryData || [])
      } catch (error) {
        console.error('Erreur chargement analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [email]) // Seulement 'email' en dépendance

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
          
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-sm btn-outline flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Période
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                <li><button onClick={() => setSelectedPeriod('7jours')} className={selectedPeriod === '7jours' ? 'active' : ''}>7 derniers jours</button></li>
                <li><button onClick={() => setSelectedPeriod('30jours')} className={selectedPeriod === '30jours' ? 'active' : ''}>30 derniers jours</button></li>
                <li><button onClick={() => setSelectedPeriod('90jours')} className={selectedPeriod === '90jours' ? 'active' : ''}>90 derniers jours</button></li>
              </ul>
            </div>
            
            <button className="btn btn-sm btn-primary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exporter
            </button>
          </div>
        </div>

        {/* Cartes de statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Ventes période */}
          <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-base-content/60">
                    Ventes {selectedPeriod === '7jours' ? '7j' : selectedPeriod === '30jours' ? '30j' : '90j'}
                  </p>
                  <p className="text-2xl font-bold text-success mt-1">
                    {calculations.periodSales.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'XOF',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    })}
                  </p>
                </div>
                <div className="p-3 bg-success/20 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-success" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs mt-2">
                {calculations.salesGrowth >= 0 ? (
                  <>
                    <ArrowUpRight className="w-3 h-3 text-success" />
                    <span className="text-success">+{calculations.salesGrowth.toFixed(1)}%</span>
                  </>
                ) : (
                  <>
                    <ArrowDownRight className="w-3 h-3 text-error" />
                    <span className="text-error">{calculations.salesGrowth.toFixed(1)}%</span>
                  </>
                )}
                <span className="text-base-content/60 ml-1">vs période précédente</span>
              </div>
            </div>
          </div>

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

          {/* Factures */}
          <div className="card bg-base-100 shadow-sm border border-base-300 hover:shadow-md transition-shadow">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-base-content/60">Factures</p>
                  <p className="text-2xl font-bold text-info mt-1">
                    {invoiceStats?.totalInvoices || 0}
                  </p>
                </div>
                <div className="p-3 bg-info/20 rounded-lg">
                  <FileText className="w-6 h-6 text-info" />
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

        {/* Section: Bilan financier quotidien */}
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h3 className="card-title flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Bilan Financier Quotidien
              </h3>
              
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span>Ventes</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <span>Achats</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Résultat net</span>
                </div>
              </div>
            </div>

            {financialSummary.length > 0 ? (
              <>
                {/* Tableau du bilan */}
                <div className="overflow-x-auto">
                  <table className="table table-zebra w-full">
                    <thead>
                      <tr className="bg-base-200">
                        <th className="font-semibold">Date</th>
                        <th className="text-center font-semibold">Ventes</th>
                        <th className="text-center font-semibold">Achats</th>
                        <th className="text-center font-semibold">Résultat net</th>
                        <th className="text-center font-semibold">Transactions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {financialSummary.slice(0, 10).map((day) => (
                        <tr key={day.date} className="hover:bg-base-200/50">
                          <td className="font-medium">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${
                                day.netAmount > 0 ? 'bg-success' : 
                                day.netAmount < 0 ? 'bg-error' : 'bg-base-300'
                              }`}></div>
                              {day.formattedDate}
                            </div>
                          </td>
                          <td className="text-center">
                            <span className={`font-bold ${day.totalSales > 0 ? 'text-success' : 'text-base-content/60'}`}>
                              {day.formattedSales}
                            </span>
                            <div className="text-xs text-base-content/60">
                              {day.salesCount} vente{day.salesCount !== 1 ? 's' : ''}
                            </div>
                          </td>
                          <td className="text-center">
                            <span className={`font-bold ${day.totalPurchases > 0 ? 'text-error' : 'text-base-content/60'}`}>
                              {day.formattedPurchases}
                            </span>
                            <div className="text-xs text-base-content/60">
                              {day.purchasesCount} achat{day.purchasesCount !== 1 ? 's' : ''}
                            </div>
                          </td>
                          <td className="text-center">
                            <span className={`font-bold ${
                              day.netAmount > 0 ? 'text-success' : 
                              day.netAmount < 0 ? 'text-error' : 'text-base-content/60'
                            }`}>
                              {day.formattedNet}
                            </span>
                          </td>
                          <td className="text-center">
                            <div className="badge badge-outline">
                              {day.transactionCount} opérations
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Résumé du bilan */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-base-300">
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-sm text-base-content/60 mb-1">Ventes totales</div>
                    <div className="text-2xl font-bold text-success">
                      {financialSummary.reduce((sum, day) => sum + day.totalSales, 0).toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'XOF',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      })}
                    </div>
                    <div className="text-xs text-base-content/60 mt-1">
                      {financialSummary.reduce((sum, day) => sum + day.salesCount, 0)} ventes
                    </div>
                  </div>

                  <div className="text-center p-4 bg-error/10 rounded-lg">
                    <div className="text-sm text-base-content/60 mb-1">Achats totaux</div>
                    <div className="text-2xl font-bold text-error">
                      {financialSummary.reduce((sum, day) => sum + day.totalPurchases, 0).toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'XOF',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      })}
                    </div>
                    <div className="text-xs text-base-content/60 mt-1">
                      {financialSummary.reduce((sum, day) => sum + day.purchasesCount, 0)} achats
                    </div>
                  </div>

                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-sm text-base-content/60 mb-1">Résultat net total</div>
                    <div className={`text-2xl font-bold ${
                      financialSummary.reduce((sum, day) => sum + day.netAmount, 0) > 0 ? 'text-success' :
                      financialSummary.reduce((sum, day) => sum + day.netAmount, 0) < 0 ? 'text-error' : 'text-primary'
                    }`}>
                      {financialSummary.reduce((sum, day) => sum + day.netAmount, 0).toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'XOF',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      })}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-base-200 rounded-lg">
                    <div className="text-sm text-base-content/60 mb-1">Jours d&apos;activité</div>
                    <div className="text-2xl font-bold text-primary">
                      {financialSummary.filter(day => day.transactionCount > 0).length}/{financialSummary.length}
                    </div>
                    <div className="text-xs text-base-content/60 mt-1">
                      Jours avec transactions
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-base-content/60">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-40" />
                <p>Aucun bilan financier disponible</p>
                <p className="text-sm mt-2">Les données du bilan apparaîtront ici</p>
              </div>
            )}
          </div>
        </div>

        {/* Section: Graphique des ventes avec Recharts - VERSION VERTE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Graphique des ventes */}
          <div className="card bg-base-100 shadow-sm border border-base-300 lg:col-span-2">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <TrendingUpIcon className="w-5 h-5 text-success" />
                Évolution des Ventes Quotidiennes (14 derniers jours)
              </h3>
              
              {chartData.length > 0 ? (
                <>
                  <div className="mt-4" style={{ height: '300px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid 
                          strokeDasharray="3 3" 
                          stroke="#e5e7eb"
                          vertical={false}
                        />
                        <XAxis 
                          dataKey="date" 
                          stroke="#6b7280"
                          fontSize={12}
                          tickLine={false}
                          axisLine={{ stroke: '#d1d5db' }}
                        />
                        <YAxis 
                          stroke="#6b7280"
                          fontSize={12}
                          tickFormatter={formatYAxis}
                          tickLine={false}
                          axisLine={{ stroke: '#d1d5db' }}
                        />
                        <Tooltip 
                          formatter={(value) => formatTooltip(value as number)}
                          labelFormatter={(label) => {
                            const item = chartData.find(d => d.date === label)
                            return item ? item.fullDate : label
                          }}
                          contentStyle={{
                            backgroundColor: '#ffffff',
                            borderColor: '#10b981',
                            borderRadius: '8px',
                            color: '#111827',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            borderWidth: '1px'
                          }}
                          itemStyle={{
                            color: '#111827',
                            fontWeight: '500'
                          }}
                        />
                        <Bar 
                          dataKey="ventes" 
                          name="Ventes"
                          radius={[8, 8, 0, 0]}
                          barSize={32}
                        >
                          {chartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`}
                              fill={getBarColor(entry.ventes)}
                              stroke={entry.ventes > 0 ? '#059669' : '#d1d5db'}
                              strokeWidth={1}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-base-300">
                    <div>
                      <p className="text-sm text-base-content/60">Meilleur jour</p>
                      {calculations.bestDay && (
                        <>
                          <p className="text-lg font-bold text-success">
                            {calculations.bestDay.totalAmount.toLocaleString('fr-FR', {
                              style: 'currency',
                              currency: 'XOF',
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0
                            })}
                          </p>
                          <p className="text-xs text-base-content/60">
                            {new Date(calculations.bestDay.date).toLocaleDateString('fr-FR', { 
                              weekday: 'long', 
                              day: 'numeric', 
                              month: 'long' 
                            })}
                          </p>
                        </>
                      )}
                    </div>
                    
                    <div>
                      <p className="text-sm text-base-content/60">Moyenne quotidienne</p>
                      <p className="text-lg font-bold text-primary">
                        {calculations.averageDailySales.toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'XOF',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </p>
                      <p className="text-xs text-base-content/60">
                        {calculations.daysWithSales}/{dailySales.length} jours avec ventes
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-base-content/60">
                  <TrendingUpIcon className="w-12 h-12 mx-auto mb-4 opacity-40" />
                  <p>Aucune donnée de vente disponible</p>
                  <p className="text-sm mt-2">
                    {dailySales.length === 0 
                      ? 'Aucune donnée trouvée pour les 30 derniers jours' 
                      : 'Les données sont disponibles mais ne peuvent pas être affichées'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Statistiques des ventes */}
          <div className="card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-info" />
                Statistiques Ventes
              </h3>
              
              <div className="space-y-4 mt-4">
                <div className="p-4 bg-success/10 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total 30 jours</span>
                    <span className="font-bold text-success">
                      {dailySales.reduce((sum, day) => sum + day.totalAmount, 0).toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'XOF',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      })}
                    </span>
                  </div>
                  <div className="text-sm text-base-content/60 mt-1">
                    {dailySales.reduce((sum, day) => sum + day.transactionCount, 0)} transactions
                  </div>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Moyenne par vente</span>
                    <span className="font-bold text-primary">
                      {dailySales.length > 0 ? (
                        (dailySales.reduce((sum, day) => sum + day.totalAmount, 0) / 
                          Math.max(dailySales.reduce((sum, day) => sum + day.transactionCount, 0), 1)
                        ).toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'XOF',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })
                      ) : '0 FCFA'}
                    </span>
                  </div>
                  <div className="text-sm text-base-content/60 mt-1">
                    Panier moyen
                  </div>
                </div>

                <div className="p-4 bg-warning/10 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Jours actifs</span>
                    <span className="font-bold text-warning">
                      {calculations.daysWithSales}/{dailySales.length}
                    </span>
                  </div>
                  <div className="text-sm text-base-content/60 mt-1">
                    {dailySales.length > 0 ? ((calculations.daysWithSales / dailySales.length) * 100).toFixed(1) : 0}% d&apos;activité
                  </div>
                </div>

                {calculations.worstDay && (
                  <div className="p-4 bg-base-200 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Jour le plus bas</span>
                      <span className="font-bold text-base-content">
                        {calculations.worstDay.totalAmount.toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'XOF',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </span>
                    </div>
                    <div className="text-sm text-base-content/60 mt-1">
                      {new Date(calculations.worstDay.date).toLocaleDateString('fr-FR', { 
                        weekday: 'short', 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section: Résumé du stock et catégories */}
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
                            '#3b82f6', // Bleu
                            '#10b981', // Vert
                            '#f59e0b', // Orange
                            '#ef4444', // Rouge
                            '#8b5cf6'  // Violet
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

        {/* Section: Statistiques financières */}
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
                    currency: 'XOF',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
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

        {/* Section: Indicateurs de performance */}
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