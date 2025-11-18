// components/RecentTransactions.tsx
import { Transaction } from '@/type'
import React from 'react'
import { Package, Calendar, DollarSign, FileText, User } from 'lucide-react'
import Image from 'next/image'

interface RecentTransactionsProps {
    tx: Transaction
    showBorder?: boolean
    variant?: 'default' | 'compact'
    className?: string
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ 
    tx, 
    showBorder = true,
    variant = 'default',
    className = ''
}) => {
    // ✅ Empêche toute erreur si tx est undefined
    if (!tx) return null

    // Fonction pour obtenir la couleur du statut
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'PAID': return 'bg-green-100 text-green-800 border-green-200'
            case 'UNPAID': return 'bg-red-100 text-red-800 border-red-200'
            case 'PENDING': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            default: return 'bg-gray-100 text-gray-800 border-gray-200'
        }
    }

    // Fonction pour obtenir le texte du statut
    const getStatusText = (status: string) => {
        switch (status) {
            case 'PAID': return 'Payée'
            case 'UNPAID': return 'Impayée'
            case 'PENDING': return 'En attente'
            default: return 'Sans facture'
        }
    }

    // Fonction pour obtenir la couleur du type de transaction
    const getTypeColor = (type: string) => {
        switch (type) {
            case 'PURCHASE': return 'bg-blue-100 text-blue-800 border-blue-200'
            case 'SALE': return 'bg-green-100 text-green-800 border-green-200'
            case 'RETURN': return 'bg-orange-100 text-orange-800 border-orange-200'
            default: return 'bg-gray-100 text-gray-800 border-gray-200'
        }
    }

    // Fonction pour obtenir le texte du type de transaction
    const getTypeText = (type: string) => {
        switch (type) {
            case 'PURCHASE': return 'Achat'
            case 'SALE': return 'Vente'
            case 'RETURN': return 'Retour'
            default: return type
        }
    }

    // Formatage de la date
    const formatDate = (date?: Date) => {
        if (!date) return 'Non spécifiée'
        return new Date(date).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    // Version compacte
    if (variant === 'compact') {
        return (
            <div className={`flex items-center justify-between p-3 bg-base-100 rounded-lg ${showBorder ? 'border-b border-base-200' : ''} ${className}`}>
                <div className="flex items-center gap-3 min-w-0 flex-1">
                    {tx.imageUrl ? (
                        <Image 
                            src={tx.imageUrl} 
                            alt={tx.productName || 'Produit'}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                    ) : (
                        <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center flex-shrink-0">
                            <Package size={16} className="text-base-400" />
                        </div>
                    )}
                    
                    <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-sm truncate">{tx.productName || 'Produit inconnu'}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-1 rounded text-xs ${getTypeColor(tx.type || '')}`}>
                                {getTypeText(tx.type || '')}
                            </span>
                            <span className="text-xs text-base-content/60">
                                {tx.quantity ?? 0} {tx.unit || ''}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="text-right flex-shrink-0 ml-3">
                    <div className="font-semibold text-sm">{tx.subtotal ?? 0} CFA</div>
                    <div className="text-xs text-base-content/60">
                        {formatDate(tx.createdAt)}
                    </div>
                </div>
            </div>
        )
    }

    // Version par défaut
    return (
        <div className={`card bg-base-100 shadow hover:shadow-md transition-shadow duration-200 ${showBorder ? 'border-b border-base-200 pb-4' : ''} ${className}`}>
            <div className="card-body p-4">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                    {/* Informations principales */}
                    <div className="flex-1 space-y-3">
                        {/* En-tête avec produit et type */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-3">
                                {tx.imageUrl ? (
                                    <Image 
                                        src={tx.imageUrl} 
                                        alt={tx.productName || 'Produit'}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-lg object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center">
                                        <Package size={20} className="text-base-400" />
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-semibold text-lg">{tx.productName || 'Produit inconnu'}</h3>
                                    <p className="text-sm text-base-500">{tx.categoryName || 'Non catégorisé'}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(tx.type || '')}`}>
                                    {getTypeText(tx.type || '')}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(tx.invoice?.status || 'NO_INVOICE')}`}>
                                    {getStatusText(tx.invoice?.status || 'NO_INVOICE')}
                                </span>
                            </div>
                        </div>

                        {/* Détails de la transaction */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Package size={16} className="text-base-400" />
                                <span className="font-medium">Quantité:</span>
                                <span>{tx.quantity ?? 0} {tx.unit || ''}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} className="text-base-400" />
                                <span className="font-medium">Prix unitaire:</span>
                                <span>{tx.price ?? 0} CFA</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} className="text-base-400" />
                                <span className="font-medium">Total:</span>
                                <span className="font-semibold">{tx.subtotal ?? 0} CFA</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-base-400" />
                                <span className="font-medium">Date:</span>
                                <span>{formatDate(tx.createdAt)}</span>
                            </div>
                        </div>

                        {/* Informations de facture si disponible */}
                        {tx.invoice && (
                            <div className="mt-3 p-3 bg-base-50 rounded-lg border">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText size={16} className="text-primary" />
                                    <span className="font-semibold text-sm">Informations de la facture</span>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="font-medium">Numéro:</span>
                                        <span className="ml-2 font-mono">{tx.invoice.invoiceNumber || 'N/A'}</span>
                                    </div>
                                    
                                    <div>
                                        <span className="font-medium">Statut:</span>
                                        <span className={`ml-2 px-2 py-1 rounded text-xs ${getStatusColor(tx.invoice.status || '')}`}>
                                            {getStatusText(tx.invoice.status || '')}
                                        </span>
                                    </div>
                                    
                                    {tx.invoice.client && (
                                        <div className="sm:col-span-2 flex items-center gap-2">
                                            <User size={14} className="text-base-400" />
                                            <span className="font-medium">Client:</span>
                                            <span>{tx.invoice.client.name || 'Inconnu'}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Destination si disponible */}
                        {tx.destination && (
                            <div className="mt-2">
                                <span className="text-sm text-base-500">
                                    Destination: {tx.destination.name || 'Non précisée'}
                                    {tx.destination.description && ` - ${tx.destination.description}`}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer avec informations supplémentaires */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-3 border-t border-base-200">
                    <div className="text-xs text-base-500">
                        ID: {tx.id || 'N/A'}
                    </div>
                    
                    <div className="text-xs text-base-500">
                        {tx.invoice ? 'Transaction facturée' : 'Transaction directe'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentTransactions