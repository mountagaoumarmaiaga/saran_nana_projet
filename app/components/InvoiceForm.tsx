"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { Invoice, Client, Product } from "@/type"
import { X, Plus, Trash2, AlertTriangle, Package } from "lucide-react"
import { toast } from "react-toastify"

interface InvoiceFormData {
  invoiceNumber: string
  clientId: string
  subtotal: number
  tva: number
  tvaEnabled: boolean
  totalAmount: number
  status: "PAID" | "UNPAID" | "PENDING"
  transactions: Array<{
    productId: string
    quantity: number
    price: number
    type: "SALE"
  }>
}

interface InvoiceFormProps {
  invoice?: Invoice | null
  clients: Client[]
  products: Product[]
  onClose: () => void
  onSubmit: (data: InvoiceFormData) => void
  onGenerateInvoiceNumber: () => Promise<string>
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({
  invoice,
  clients,
  products,
  onClose,
  onSubmit,
  onGenerateInvoiceNumber,
}) => {
  const [formData, setFormData] = useState<InvoiceFormData>({
    invoiceNumber: "",
    clientId: "",
    subtotal: 0,
    tva: 20,
    tvaEnabled: true,
    totalAmount: 0,
    status: "UNPAID",
    transactions: [],
  })

  const [selectedProduct, setSelectedProduct] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [stockErrors, setStockErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (invoice) {
      setFormData({
        invoiceNumber: invoice.invoiceNumber,
        clientId: invoice.clientId,
        subtotal: invoice.subtotal,
        tva: invoice.tva,
        tvaEnabled: invoice.tva > 0,
        totalAmount: invoice.totalAmount,
        status: invoice.status,
        transactions:
          invoice.transactions?.map((tx) => ({
            productId: tx.productId,
            quantity: tx.quantity,
            price: tx.price,
            type: "SALE" as const,
          })) || [],
      })
    } else {
      onGenerateInvoiceNumber().then((number) => {
        setFormData((prev) => ({ ...prev, invoiceNumber: number }))
      })
    }
  }, [invoice, onGenerateInvoiceNumber])

  useEffect(() => {
    const tvaRate = formData.tvaEnabled ? formData.tva : 0
    const newTotalAmount = formData.subtotal * (1 + tvaRate / 100)

    setFormData((prev) => ({
      ...prev,
      totalAmount: newTotalAmount,
      tva: tvaRate,
    }))
  }, [formData.subtotal, formData.tvaEnabled, formData.tva])

  // VÉRIFICATION DES STOCKS
  const checkStockAvailability = (productId: string, quantity: number): boolean => {
    const product = products.find(p => p.id === productId)
    if (!product) {
      toast.error(`❌ Produit non trouvé`)
      return false
    }

    if (product.quantity < quantity) {
      const errorMessage = `Stock insuffisant pour ${product.name}. Disponible: ${product.quantity} ${product.unit}, Demandé: ${quantity}`
      setStockErrors(prev => ({ ...prev, [productId]: errorMessage }))
      toast.error(`❌ ${errorMessage}`)
      return false
    }

    if (quantity <= 0) {
      toast.error("❌ La quantité doit être supérieure à 0")
      return false
    }

    // Retirer l'erreur si le stock est maintenant suffisant
    setStockErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[productId]
      return newErrors
    })

    return true
  }

  const checkAllStocks = (): boolean => {
    const errors: {[key: string]: string} = {}
    let hasErrors = false

    formData.transactions.forEach(transaction => {
      const product = products.find(p => p.id === transaction.productId)
      if (!product) {
        errors[transaction.productId] = `Produit non trouvé`
        hasErrors = true
      } else if (product.quantity < transaction.quantity) {
        errors[transaction.productId] = 
          `Stock insuffisant. Disponible: ${product.quantity} ${product.unit}, Demandé: ${transaction.quantity}`
        hasErrors = true
      } else if (transaction.quantity <= 0) {
        errors[transaction.productId] = `Quantité invalide: ${transaction.quantity}`
        hasErrors = true
      }
    })

    setStockErrors(errors)
    
    if (hasErrors) {
      toast.error("❌ Problèmes détectés avec certains produits")
      return false
    }

    return true
  }

  const addTransaction = () => {
    if (!selectedProduct || quantity <= 0) {
      toast.error("❌ Veuillez sélectionner un produit et entrer une quantité valide.")
      return
    }

    // VÉRIFIER LE STOCK AVANT D'AJOUTER
    if (!checkStockAvailability(selectedProduct, quantity)) {
      return
    }

    const product = products.find((p) => p.id === selectedProduct)
    if (!product) return

    const price = product.price
    const subtotal = quantity * price

    const newTransaction = {
      productId: selectedProduct,
      quantity,
      price,
      type: "SALE" as const,
    }

    const newTransactions = [...formData.transactions, newTransaction]
    const newSubtotal = formData.subtotal + subtotal

    setFormData({
      ...formData,
      transactions: newTransactions,
      subtotal: newSubtotal,
    })

    setSelectedProduct("")
    setQuantity(1)
  }

  const removeTransaction = (index: number) => {
    const transaction = formData.transactions[index]
    const subtotalToRemove = transaction.quantity * transaction.price

    const newTransactions = formData.transactions.filter((_, i) => i !== index)
    const newSubtotal = formData.subtotal - subtotalToRemove

    // Retirer l'erreur de stock si elle existe
    setStockErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[transaction.productId]
      return newErrors
    })

    setFormData({
      ...formData,
      transactions: newTransactions,
      subtotal: newSubtotal,
    })
  }

  const handleTvaToggle = (enabled: boolean) => {
    setFormData((prev) => ({
      ...prev,
      tvaEnabled: enabled,
      tva: enabled ? (prev.tva > 0 ? prev.tva : 20) : 0,
    }))
  }

  const handleTvaRateChange = (rate: number) => {
    setFormData((prev) => ({
      ...prev,
      tva: rate,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.clientId) {
      toast.error("❌ Veuillez sélectionner un client")
      return
    }

    if (formData.transactions.length === 0) {
      toast.error("❌ Veuillez ajouter au moins une transaction")
      return
    }

    // VÉRIFIER TOUS LES STOCKS AVANT SOUMISSION
    if (!checkAllStocks()) {
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      toast.success("✅ Facture créée avec succès !")
    } catch (error) {
      console.error("Erreur soumission facture:", error)
      // L'erreur est déjà gérée par le parent
    } finally {
      setIsSubmitting(false)
    }
  }

  const getProductName = (productId: string) => {
    return products.find((p) => p.id === productId)?.name || "Produit inconnu"
  }

  const getAvailableStock = (productId: string) => {
    const product = products.find(p => p.id === productId)
    return {
      quantity: product?.quantity || 0,
      unit: product?.unit || 'unité'
    }
  }

  const hasStockErrors = Object.keys(stockErrors).length > 0
  const canSubmit = !hasStockErrors && formData.clientId && formData.transactions.length > 0 && !isSubmitting

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-base-300">
        <div className="flex justify-between items-center p-6 border-b border-base-300 bg-base-200">
          <h2 className="text-xl font-bold">{invoice ? "Modifier la facture" : "Nouvelle facture"}</h2>
          <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle" disabled={isSubmitting}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ALERTE STOCK INSUFFISANT */}
            {hasStockErrors && (
              <div className="alert alert-error">
                <AlertTriangle className="w-5 h-5" />
                <div>
                  <h3 className="font-bold">Problèmes de stock détectés</h3>
                  <div className="text-xs mt-1">
                    {Object.values(stockErrors).map((error, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {error}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Numéro de facture</span>
                </label>
                <input
                  type="text"
                  value={formData.invoiceNumber}
                  readOnly
                  className="input input-bordered bg-base-200"
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
                  disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
                >
                  <option value="UNPAID">Impayée</option>
                  <option value="PAID">Payée</option>
                  <option value="PENDING">En attente</option>
                </select>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Ajouter des produits</h3>
              <div className="flex gap-2 mb-4 flex-col sm:flex-row">
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="select select-bordered flex-1"
                  disabled={isSubmitting}
                >
                  <option value="">Sélectionner un produit</option>
                  {products.map((product) => {
                    const isOutOfStock = product.quantity <= 0
                    const isLowStock = product.quantity > 0 && product.quantity < 10
                    
                    return (
                      <option 
                        key={product.id} 
                        value={product.id}
                        disabled={isOutOfStock}
                        className={isOutOfStock ? "text-error" : isLowStock ? "text-warning" : ""}
                      >
                        {product.name} - {product.price}CFA 
                        {isOutOfStock 
                          ? " (RUPTURE DE STOCK)" 
                          : ` (Stock: ${product.quantity} ${product.unit})`
                        }
                        {isLowStock && !isOutOfStock && " ⚠️"}
                      </option>
                    )
                  })}
                </select>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const newQuantity = Number.parseInt(e.target.value) || 1
                    // Limiter la quantité au stock disponible
                    if (selectedProduct) {
                      const availableStock = getAvailableStock(selectedProduct)
                      setQuantity(Math.min(newQuantity, availableStock.quantity))
                    } else {
                      setQuantity(newQuantity)
                    }
                  }}
                  className="input input-bordered w-20"
                  min="1"
                  max={selectedProduct ? getAvailableStock(selectedProduct).quantity : undefined}
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={addTransaction}
                  className="btn btn-primary gap-2"
                  disabled={!selectedProduct || quantity <= 0 || isSubmitting}
                >
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>

              {formData.transactions.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium">Produits ajoutés ({formData.transactions.length})</h4>
                  {formData.transactions.map((transaction, index) => {
                    const product = products.find(p => p.id === transaction.productId)
                    const availableStock = product?.quantity || 0
                    const isOutOfStock = availableStock < transaction.quantity
                    const isLowStock = availableStock < transaction.quantity * 1.5
                    
                    return (
                      <div 
                        key={index} 
                        className={`flex items-center justify-between p-3 rounded border ${
                          isOutOfStock 
                            ? "bg-error/20 border-error/50" 
                            : isLowStock 
                            ? "bg-warning/20 border-warning/50"
                            : "bg-base-200 border-base-300"
                        }`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Package className="w-4 h-4 text-base-content/60" />
                            <span className="font-medium">{getProductName(transaction.productId)}</span>
                            {isOutOfStock ? (
                              <span className="badge badge-error badge-sm gap-1">
                                <AlertTriangle className="w-3 h-3" />
                                Stock insuffisant
                              </span>
                            ) : isLowStock ? (
                              <span className="badge badge-warning badge-sm gap-1">
                                <AlertTriangle className="w-3 h-3" />
                                Stock faible
                              </span>
                            ) : (
                              <span className="badge badge-success badge-sm gap-1">
                                ✓ Stock OK
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-base-content/60">
                            {transaction.quantity} × {transaction.price}CFA = <strong>{transaction.quantity * transaction.price}CFA</strong>
                          </div>
                          <div className={`text-xs mt-1 ${
                            isOutOfStock ? "text-error" : isLowStock ? "text-warning" : "text-base-content/50"
                          }`}>
                            Stock disponible: {availableStock} {product?.unit}
                            {isOutOfStock && ` (déficit: ${transaction.quantity - availableStock})`}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeTransaction(index)}
                          className="btn btn-ghost btn-sm text-error"
                          disabled={isSubmitting}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

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
                <span className="text-primary">{formData.totalAmount.toFixed(2)}CFA</span>
              </div>
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <button 
                type="button" 
                onClick={onClose} 
                className="btn btn-outline"
                disabled={isSubmitting}
              >
                Annuler
              </button>
              <button 
                type="submit" 
                className="btn btn-primary gap-2"
                disabled={!canSubmit}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Création...
                  </>
                ) : (
                  <>
                    {invoice ? "Modifier la facture" : "Créer la facture"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InvoiceForm