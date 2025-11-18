"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { 
  readInvoiceById, 
  updateInvoice, 
  readClients, 
  readProducts
} from '@/app/actions'
import { toast } from 'react-toastify'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import type { InvoiceWithDetails, Client, Product } from '@/type'

interface TransactionForm {
  productId: string
  quantity: number
  price: number
  type: "SALE"
}

interface InvoiceFormData {
  invoiceNumber: string
  clientId: string
  subtotal: number
  tva: number
  tvaEnabled: boolean
  totalAmount: number
  status: "PAID" | "UNPAID" | "PENDING"
  transactions: TransactionForm[]
}

function UpdateInvoicePage() {
  const router = useRouter()
  const params = useParams()
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [invoice, setInvoice] = useState<InvoiceWithDetails | null>(null)
  const [clients, setClients] = useState<Client[]>([])
  const [products, setProducts] = useState<Product[]>([])
  
  const [formData, setFormData] = useState<InvoiceFormData>({
    invoiceNumber: '',
    clientId: '',
    subtotal: 0,
    tva: 20,
    tvaEnabled: true,
    totalAmount: 0,
    status: 'UNPAID',
    transactions: []
  })

  const [selectedProduct, setSelectedProduct] = useState('')
  const [quantity, setQuantity] = useState(1)

  const invoiceId = params.id as string

  // CORRECTION : Déplacer loadData dans un useCallback
  const loadData = useCallback(async () => {
    try {
      console.log("📥 Chargement des données pour la facture:", invoiceId)
      setLoading(true)
      
      const [invoiceData, clientsData, productsData] = await Promise.all([
        readInvoiceById(invoiceId, email),
        readClients(email),
        readProducts(email, { limit: 1000 })
      ])

      console.log("📋 Données facture chargées:", invoiceData)
      console.log("👥 Clients chargés:", clientsData?.length)
      console.log("📦 Produits chargés:", productsData?.products?.length)

      if (!invoiceData) {
        console.error("❌ Facture non trouvée avec ID:", invoiceId)
        toast.error('Facture non trouvée')
        router.push('/invoice')
        return
      }

      setInvoice(invoiceData)
      setClients(clientsData || [])
      setProducts(productsData.products || [])

      // Pré-remplir le formulaire avec les données de la facture
      setFormData({
        invoiceNumber: invoiceData.invoiceNumber,
        clientId: invoiceData.clientId,
        subtotal: invoiceData.subtotal,
        tva: invoiceData.tva,
        tvaEnabled: invoiceData.tva > 0,
        totalAmount: invoiceData.totalAmount,
        status: invoiceData.status,
        transactions: invoiceData.transactions.map(t => ({
          productId: t.productId,
          quantity: t.quantity,
          price: t.price,
          type: 'SALE' as const
        }))
      })

      console.log("✅ Formulaire pré-rempli avec succès")

    } catch (error) {
      console.error('❌ Erreur chargement données:', error)
      toast.error('Erreur lors du chargement des données')
    } finally {
      setLoading(false)
    }
  }, [email, invoiceId, router]) // ✅ Ajouter toutes les dépendances

  // CORRECTION : useEffect avec toutes les dépendances
  useEffect(() => {
    console.log("🔄 useEffect déclenché - ID:", invoiceId, "Email:", email)
    if (email && invoiceId) {
      if (invoiceId === 'lidl') {
        console.error("❌ ID invalide détecté:", invoiceId)
        toast.error("ID de facture invalide")
        router.push('/invoice')
        return
      }
      loadData()
    } else {
      console.warn("⚠️ Email ou ID manquant - Email:", email, "ID:", invoiceId)
    }
  }, [email, invoiceId, router, loadData]) // ✅ Ajouter loadData dans les dépendances

  const addTransaction = () => {
    if (!selectedProduct || quantity <= 0) {
      toast.error('Veuillez sélectionner un produit et une quantité valide')
      return
    }

    const product = products.find(p => p.id === selectedProduct)
    if (!product) return

    const price = product.price
    const subtotal = quantity * price

    const newTransaction: TransactionForm = {
      productId: selectedProduct,
      quantity,
      price,
      type: "SALE"
    }

    const newTransactions = [...formData.transactions, newTransaction]
    const newSubtotal = formData.subtotal + subtotal
    const tvaRate = formData.tvaEnabled ? formData.tva : 0
    const newTotalAmount = newSubtotal * (1 + tvaRate / 100)

    setFormData({
      ...formData,
      transactions: newTransactions,
      subtotal: newSubtotal,
      totalAmount: newTotalAmount
    })

    setSelectedProduct('')
    setQuantity(1)
  }

  const removeTransaction = (index: number) => {
    const transaction = formData.transactions[index]
    const subtotalToRemove = transaction.quantity * transaction.price

    const newTransactions = formData.transactions.filter((_, i) => i !== index)
    const newSubtotal = formData.subtotal - subtotalToRemove
    const tvaRate = formData.tvaEnabled ? formData.tva : 0
    const newTotalAmount = newSubtotal * (1 + tvaRate / 100)

    setFormData({
      ...formData,
      transactions: newTransactions,
      subtotal: newSubtotal,
      totalAmount: newTotalAmount
    })
  }

  const handleTvaToggle = (enabled: boolean) => {
    const tvaRate = enabled ? (formData.tva > 0 ? formData.tva : 20) : 0
    const newTotalAmount = formData.subtotal * (1 + tvaRate / 100)

    setFormData({
      ...formData,
      tvaEnabled: enabled,
      tva: tvaRate,
      totalAmount: newTotalAmount
    })
  }

  const handleTvaRateChange = (rate: number) => {
    const newTotalAmount = formData.subtotal * (1 + rate / 100)
    
    setFormData({
      ...formData,
      tva: rate,
      totalAmount: newTotalAmount
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.clientId || formData.transactions.length === 0) {
      toast.error('Veuillez sélectionner un client et ajouter au moins une transaction')
      return
    }

    try {
      console.log("🔄 Début de la mise à jour de la facture:", invoiceId)
      setSaving(true)

      await updateInvoice(
        invoiceId,
        {
          invoiceNumber: formData.invoiceNumber,
          clientId: formData.clientId,
          subtotal: formData.subtotal,
          tva: formData.tvaEnabled ? formData.tva : 0,
          totalAmount: formData.totalAmount,
          status: formData.status,
          transactions: formData.transactions
        },
        email
      )

      console.log("✅ Facture mise à jour avec succès")
      toast.success('Facture mise à jour avec succès')
      router.push('/invoice')
      
    } catch (error: unknown) {
      console.error('❌ Erreur mise à jour facture:', error)
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de la mise à jour de la facture'
      toast.error(errorMessage)
    } finally {
      setSaving(false)
    }
  }

  const getProductName = (productId: string) => {
    return products.find(p => p.id === productId)?.name || 'Produit inconnu'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Chargement de la facture...</span>
        </div>
      </div>
    )
  }

  if (!invoice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-error">Facture non trouvée</h2>
          <p className="text-base-content/60 mb-4">ID: {invoiceId}</p>
          <button 
            onClick={() => router.push('/invoice')}
            className="btn btn-primary mt-4"
          >
            Retour aux factures
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => router.push('/invoice')}
            className="btn btn-ghost btn-circle"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold">Modifier la facture</h1>
            <p className="text-base-content/60">Numéro: {invoice.invoiceNumber}</p>
            <p className="text-xs text-base-content/40">ID: {invoice.id}</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Informations générales</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Numéro de facture</span>
                  </label>
                  <input
                    type="text"
                    value={formData.invoiceNumber}
                    onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Client *</span>
                  </label>
                  <select
                    value={formData.clientId}
                    onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}
                    className="select select-bordered"
                    required
                  >
                    <option value="">Sélectionner un client</option>
                    {clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name} - {client.email}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">TVA</span>
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={formData.tvaEnabled}
                      onChange={(e) => handleTvaToggle(e.target.checked)}
                      className="toggle toggle-primary"
                    />
                    <span className={formData.tvaEnabled ? "text-success font-medium" : "text-base-content/60"}>
                      {formData.tvaEnabled ? "TVA Activée" : "TVA Désactivée"}
                    </span>
                  </div>
                </div>

                {formData.tvaEnabled && (
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Taux TVA (%)</span>
                    </label>
                    <input
                      type="number"
                      value={formData.tva}
                      onChange={(e) => handleTvaRateChange(Number.parseFloat(e.target.value) || 0)}
                      className="input input-bordered"
                      min="0"
                      max="100"
                      step="0.1"
                      placeholder="20"
                    />
                  </div>
                )}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Statut</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as "PAID" | "UNPAID" | "PENDING" })}
                    className="select select-bordered"
                  >
                    <option value="UNPAID">Impayée</option>
                    <option value="PAID">Payée</option>
                    <option value="PENDING">En attente</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Produits</h2>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-4">Ajouter des produits</h3>
                <div className="flex gap-2 mb-4 flex-col sm:flex-row">
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="select select-bordered flex-1"
                  >
                    <option value="">Sélectionner un produit</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name} - {product.price}CFA (Stock: {product.quantity})
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    className="input input-bordered w-20"
                    min="1"
                  />
                  <button
                    type="button"
                    onClick={addTransaction}
                    className="btn btn-primary gap-2"
                    disabled={!selectedProduct}
                  >
                    Ajouter
                  </button>
                </div>

                {formData.transactions.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium">Produits ajoutés:</h4>
                    {formData.transactions.map((transaction, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-base-300 rounded">
                        <div>
                          <span className="font-medium">{getProductName(transaction.productId)}</span>
                          <span className="text-sm text-base-content/60 ml-2">
                            {transaction.quantity} x {transaction.price}CFA = {transaction.quantity * transaction.price}CFA
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeTransaction(index)}
                          className="btn btn-ghost btn-sm text-error"
                        >
                          Supprimer
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="card bg-base-200 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Récapitulatif</h2>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Sous-total:</span>
                  <span className="font-bold">{formData.subtotal.toFixed(2)}CFA</span>
                </div>

                {formData.tvaEnabled && formData.tva > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span>TVA ({formData.tva}%):</span>
                    <span>{((formData.subtotal * formData.tva) / 100).toFixed(2)}CFA</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                  <span>Total:</span>
                  <span>{formData.totalAmount.toFixed(2)}CFA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-end">
            <button 
              type="button" 
              onClick={() => router.push('/invoice')}
              className="btn btn-outline"
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="btn btn-primary gap-2"
              disabled={saving}
            >
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? 'Mise à jour...' : 'Mettre à jour'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateInvoicePage