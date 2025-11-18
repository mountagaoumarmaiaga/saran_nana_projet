"use client"

import { Product, Transaction } from '@/type'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState, useCallback } from 'react'
import Wrapper from '../components/Wrapper'
import { getTransactions, readProducts, getTransactionsByInvoiceStatus } from '../actions'
import EmptyState from '../components/EmptyState'
import TransactionComponent from '../components/TransactionComponent'
import { RotateCcw, Filter, Download } from 'lucide-react'

const ITEMS_PER_PAGE = 10

const Page = () => {
    const { user } = useUser()
    const email = user?.primaryEmailAddress?.emailAddress as string
    const [products, setProducts] = useState<Product[]>([])
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [dateFrom, setDateFrom] = useState<string>("")
    const [dateTo, setDateTo] = useState<string>("")
    const [invoiceStatusFilter, setInvoiceStatusFilter] = useState<'PAID' | 'UNPAID' | 'PENDING' | 'NO_INVOICE' | "">("")
    const [transactionTypeFilter, setTransactionTypeFilter] = useState<'SALE' | 'PURCHASE' | 'RETURN' | "">("")
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isLoading, setIsLoading] = useState(false)
    const [showFilters, setShowFilters] = useState(false)

    const fetchData = useCallback(async () => {
        if (!email) return
        
        setIsLoading(true)
        try {
            let transactionsData: Transaction[] = []
            
            // Si un filtre de statut de facture est sélectionné, utiliser la fonction spécialisée
            if (invoiceStatusFilter && invoiceStatusFilter !== 'NO_INVOICE') {
                transactionsData = await getTransactionsByInvoiceStatus(
                    email, 
                    invoiceStatusFilter,
                    { limit: 1000 }
                )
            } else {
                // Sinon, récupérer toutes les transactions avec filtres
                const filters = {
                    ...(transactionTypeFilter && { type: transactionTypeFilter }),
                    ...(invoiceStatusFilter && { invoiceStatus: invoiceStatusFilter })
                }
                
                // Vérifier si des filtres sont définis
                const hasFilters = Object.keys(filters).length > 0
                
                transactionsData = await getTransactions(email, { 
                    limit: 1000,
                    filters: hasFilters ? filters : undefined
                })
            }

            const productsResult = await readProducts(email, { limit: 1000 })
            
            if (productsResult && productsResult.products) {
                setProducts(productsResult.products)
            }
            if (transactionsData) {
                setTransactions(transactionsData)
            }
        } catch (error) {
            console.error("Error fetching data:", error)
        } finally {
            setIsLoading(false)
        }
    }, [email, invoiceStatusFilter, transactionTypeFilter])

    useEffect(() => {
        if (email) fetchData()
    }, [email, fetchData])

    useEffect(() => {
        let filtered = transactions

        // Filtre par produit
        if (selectedProduct) {
            filtered = filtered.filter(tx => tx.productId === selectedProduct.id)
        }

        // Filtre par date
        if (dateFrom) {
            filtered = filtered.filter(tx => new Date(tx.createdAt) >= new Date(dateFrom))
        }
        if (dateTo) {
            const endDate = new Date(dateTo)
            endDate.setHours(23, 59, 59, 999) // Inclure toute la journée
            filtered = filtered.filter(tx => new Date(tx.createdAt) <= endDate)
        }

        // Filtre par type de transaction (si pas déjà filtré par l'API)
        if (transactionTypeFilter && !invoiceStatusFilter) {
            filtered = filtered.filter(tx => tx.type === transactionTypeFilter)
        }

        // Filtre par statut de facture (si pas déjà filtré par l'API)
        if (invoiceStatusFilter === 'NO_INVOICE' && !invoiceStatusFilter) {
            filtered = filtered.filter(tx => !tx.invoice)
        }

        setFilteredTransactions(filtered)
        setCurrentPage(1)
    }, [selectedProduct, dateFrom, dateTo, transactionTypeFilter, invoiceStatusFilter, transactions])

    const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentTransactions = filteredTransactions.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    const resetFilters = () => {
        setSelectedProduct(null)
        setDateFrom("")
        setDateTo("")
        setInvoiceStatusFilter("")
        setTransactionTypeFilter("")
    }

    const exportToCSV = () => {
        const headers = ['Date', 'Produit', 'Type', 'Quantité', 'Prix unitaire', 'Total', 'Statut facture', 'Numéro facture', 'Client']
        const csvData = filteredTransactions.map(tx => [
            new Date(tx.createdAt).toLocaleDateString('fr-FR'),
            tx.productName || 'N/A',
            tx.type,
            tx.quantity,
            `${tx.price} CFA`,
            `${tx.subtotal} CFA`,
            tx.invoice?.status ? getStatusText(tx.invoice.status) : 'Sans facture',
            tx.invoice?.invoiceNumber || 'N/A',
            tx.invoice?.client?.name || 'N/A'
        ])

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.join(','))
        ].join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', `transactions_${new Date().toISOString().split('T')[0]}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'PAID': return 'Payée'
            case 'UNPAID': return 'Impayée'
            case 'PENDING': return 'En attente'
            default: return status
        }
    }

    const getTotalStats = () => {
        const totalAmount = filteredTransactions.reduce((sum, tx) => sum + tx.subtotal, 0)
        const purchaseAmount = filteredTransactions
            .filter(tx => tx.type === 'PURCHASE')
            .reduce((sum, tx) => sum + tx.subtotal, 0)
        const saleAmount = filteredTransactions
            .filter(tx => tx.type === 'SALE')
            .reduce((sum, tx) => sum + tx.subtotal, 0)

        return { totalAmount, purchaseAmount, saleAmount }
    }

    const stats = getTotalStats()

    return (
        <Wrapper>
            <div className="space-y-6">
                {/* En-tête */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">Historique des Transactions</h1>
                        <p className="text-base-content/60 mt-1">
                            {filteredTransactions.length} transaction(s) trouvée(s)
                        </p>
                    </div>
                    
                    <div className="flex gap-2">
                        <button 
                            onClick={exportToCSV}
                            className="btn btn-outline"
                            disabled={isLoading || filteredTransactions.length === 0}
                        >
                            <Download size={18} />
                            Exporter CSV
                        </button>
                        <button 
                            onClick={() => setShowFilters(!showFilters)}
                            className="btn btn-outline"
                        >
                            <Filter size={18} />
                            Filtres
                        </button>
                        <button 
                            onClick={fetchData}
                            className="btn btn-primary"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Chargement...' : 'Rafraîchir'}
                        </button>
                    </div>
                </div>

                {/* Statistiques rapides */}
                {filteredTransactions.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="stat bg-base-100 rounded-lg shadow">
                            <div className="stat-title">Total Transactions</div>
                            <div className="stat-value text-lg">{stats.totalAmount.toFixed(2)} CFA</div>
                        </div>
                        <div className="stat bg-base-100 rounded-lg shadow">
                            <div className="stat-title">Total Achats</div>
                            <div className="stat-value text-lg text-blue-600">{stats.purchaseAmount.toFixed(2)} CFA</div>
                        </div>
                        <div className="stat bg-base-100 rounded-lg shadow">
                            <div className="stat-title">Total Ventes</div>
                            <div className="stat-value text-lg text-green-600">{stats.saleAmount.toFixed(2)} CFA</div>
                        </div>
                    </div>
                )}

                {/* Filtres */}
                {showFilters && (
                    <div className="card bg-base-100 shadow">
                        <div className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Filtre produit */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Produit</span>
                                    </label>
                                    <select
                                        className="select select-bordered"
                                        value={selectedProduct?.id || ""}
                                        onChange={(e) => {
                                            const product = products.find(p => p.id === e.target.value) || null
                                            setSelectedProduct(product)
                                        }}
                                        disabled={isLoading}
                                    >
                                        <option value="">Tous les produits</option>
                                        {products.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Filtre type de transaction */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Type de transaction</span>
                                    </label>
                                    <select
                                        className="select select-bordered"
                                        value={transactionTypeFilter}
                                        onChange={(e) => setTransactionTypeFilter(e.target.value as 'SALE' | 'PURCHASE' | 'RETURN' | "")}
                                        disabled={isLoading}
                                    >
                                        <option value="">Tous les types</option>
                                        <option value="PURCHASE">Achats</option>
                                        <option value="SALE">Ventes</option>
                                        <option value="RETURN">Retours</option>
                                    </select>
                                </div>

                                {/* Filtre statut facture */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Statut facture</span>
                                    </label>
                                    <select
                                        className="select select-bordered"
                                        value={invoiceStatusFilter}
                                        onChange={(e) => setInvoiceStatusFilter(e.target.value as 'PAID' | 'UNPAID' | 'PENDING' | 'NO_INVOICE' | "")}
                                        disabled={isLoading}
                                    >
                                        <option value="">Tous les statuts</option>
                                        <option value="PAID">Factures payées</option>
                                        <option value="UNPAID">Factures impayées</option>
                                        <option value="PENDING">Factures en attente</option>
                                        <option value="NO_INVOICE">Sans facture</option>
                                    </select>
                                </div>

                                {/* Bouton reset */}
                                <div className="form-control justify-end">
                                    <button
                                        className="btn btn-outline"
                                        onClick={resetFilters}
                                        disabled={isLoading}
                                    >
                                        <RotateCcw size={18} />
                                        Réinitialiser
                                    </button>
                                </div>
                            </div>

                            {/* Période */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date de début</span>
                                    </label>
                                    <input
                                        type="date"
                                        className="input input-bordered"
                                        value={dateFrom}
                                        onChange={(e) => setDateFrom(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date de fin</span>
                                    </label>
                                    <input
                                        type="date"
                                        className="input input-bordered"
                                        value={dateTo}
                                        onChange={(e) => setDateTo(e.target.value)}
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Liste des transactions */}
                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ) : filteredTransactions.length === 0 ? (
                    <EmptyState
                        message={transactions.length === 0 
                            ? "Aucune transaction trouvée. Les transactions apparaîtront ici lorsque vous effectuerez des achats ou des ventes." 
                            : "Aucune transaction ne correspond aux critères de filtrage."}
                        IconComponent="ListTodo"
                    />
                ) : (
                    <div className="space-y-4">
                        {/* En-tête de liste */}
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-base-content/60">
                                Affichage de {startIndex + 1} à {Math.min(startIndex + ITEMS_PER_PAGE, filteredTransactions.length)} sur {filteredTransactions.length} transaction(s)
                            </p>
                        </div>

                        {/* Transactions */}
                        {currentTransactions.map((tx) => (
                            <TransactionComponent key={tx.id} tx={tx} />
                        ))}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-8">
                                <div className="join">
                                    <button
                                        className="join-item btn"
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1 || isLoading}
                                    >
                                        «
                                    </button>
                                    <button className="join-item btn">
                                        Page {currentPage} sur {totalPages}
                                    </button>
                                    <button
                                        className="join-item btn"
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages || isLoading}
                                    >
                                        »
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Wrapper>
    )
}

export default Page