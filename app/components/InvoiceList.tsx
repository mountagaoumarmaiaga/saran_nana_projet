"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Invoice, InvoiceWithDetails } from "@/type"
import { Eye, Edit, Trash2,  Calendar, User, DollarSign, FileText } from "lucide-react"
import InvoiceView from "./InvoiceView"
import { toast } from "react-toastify"

interface InvoiceListProps {
  invoices: Invoice[]
  loading: boolean
  onEdit: (invoice: Invoice) => void
  onDelete: (invoiceId: string) => void
  onStatusUpdate: (invoiceId: string, status: "PAID" | "UNPAID" | "PENDING") => void
  searchTerm: string
  onViewInvoice?: (invoiceId: string) => Promise<InvoiceWithDetails | null>
}

const InvoiceList: React.FC<InvoiceListProps> = ({
  invoices,
  loading,
  
  onDelete,
  onStatusUpdate,
  searchTerm,
  onViewInvoice,
}) => {
  const router = useRouter()
  const [selectedInvoice, setSelectedInvoice] = useState<InvoiceWithDetails | null>(null)
  const [viewLoading, setViewLoading] = useState(false)

  // Debug: Afficher les factures chargées
  console.log("📦 Factures chargées dans InvoiceList:", invoices)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PAID":
        return "badge-success"
      case "UNPAID":
        return "badge-error"
      case "PENDING":
        return "badge-warning"
      default:
        return "badge-neutral"
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleViewInvoice = async (invoice: Invoice) => {
    if (!onViewInvoice) {
      console.warn("Fonction onViewInvoice non fournie")
      return
    }

    try {
      setViewLoading(true)
      const invoiceDetails = await onViewInvoice(invoice.id)
      if (invoiceDetails) {
        setSelectedInvoice(invoiceDetails)
      }
    } catch (error) {
      console.error("Erreur lors du chargement des détails de la facture:", error)
    } finally {
      setViewLoading(false)
    }
  }

  // Fonction pour gérer l'édition avec validation
  const handleEdit = (invoice: Invoice) => {
    console.log("🔄 Tentative de modification facture:", invoice)
    console.log("📋 ID de la facture:", invoice.id)
    console.log("🔢 Numéro de facture:", invoice.invoiceNumber)

    // Validation de l'ID
    if (!invoice.id) {
      console.error("❌ ID de facture manquant")
      toast.error("ID de facture manquant - impossible de modifier")
      return
    }

    if (invoice.id === 'lidl' || invoice.id === 'undefined' || invoice.id === 'null') {
      console.error("❌ ID de facture invalide:", invoice.id)
      toast.error("ID de facture invalide - veuillez recharger la page")
      return
    }

    // Vérifier que l'ID semble être un UUID valide
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    if (!uuidRegex.test(invoice.id)) {
      console.warn("⚠️ ID ne ressemble pas à un UUID:", invoice.id)
      // On continue quand même car l'ID peut être valide même sans format UUID
    }

    // Utiliser la navigation directe
    console.log("📍 Navigation vers:", `/invoices/update/${invoice.id}`)
    router.push(`/invoices/update/${invoice.id}`)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    console.log("Téléchargement PDF pour:", selectedInvoice?.invoiceNumber)
  }

  const handleSendEmail = () => {
    console.log("Envoi par email pour:", selectedInvoice?.invoiceNumber)
    if (selectedInvoice?.clientEmail) {
      const subject = `Facture ${selectedInvoice.invoiceNumber}`
      const body = `Bonjour,\n\nVeuillez trouver ci-joint votre facture ${selectedInvoice.invoiceNumber}.\n\nCordialement`
      window.open(
        `mailto:${selectedInvoice.clientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      )
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="flex flex-col items-center gap-3">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/60 text-sm">Chargement des factures...</p>
        </div>
      </div>
    )
  }

  if (invoices.length === 0) {
    return (
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body">
          <div className="text-center py-12">
            <FileText className="w-16 h-16 mx-auto mb-4 text-base-content/40" />
            <h3 className="text-lg font-medium mb-2">{searchTerm ? "Aucune facture trouvée" : "Aucune facture"}</h3>
            <p className="text-base-content/60 mb-6 max-w-md mx-auto text-sm">
              {searchTerm
                ? "Aucune facture ne correspond à votre recherche. Essayez avec d'autres termes."
                : "Commencez par créer votre première facture pour gérer vos ventes."}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="card bg-base-100 shadow-sm border border-base-300">
        <div className="card-body p-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Numéro</th>
                  <th>Client</th>
                  <th>Date</th>
                  <th>Montant</th>
                  <th>Statut</th>
                  <th>Transactions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover">
                    <td>
                      <div className="font-mono font-bold text-sm">{invoice.invoiceNumber}</div>
                      <div className="text-xs text-base-content/40">ID: {invoice.id.substring(0, 8)}...</div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        <div>
                          <div className="font-medium">{invoice.clientName}</div>
                          {invoice.client?.email && (
                            <div className="text-xs text-base-content/60">{invoice.client.email}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-info" />
                        <span className="text-sm">{formatDate(invoice.date)}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-success" />
                        <span className="font-bold">{invoice.totalAmount.toFixed(2)}CFA</span>
                        {invoice.tva > 0 && <span className="text-xs text-base-content/60">(TVA {invoice.tva}%)</span>}
                      </div>
                    </td>
                    <td>
                      <select
                        value={invoice.status}
                        onChange={(e) => onStatusUpdate(invoice.id, e.target.value as "PAID" | "UNPAID" | "PENDING")}
                        className={`select select-bordered select-xs ${getStatusColor(invoice.status)}`}
                      >
                        <option value="PAID">Payée</option>
                        <option value="UNPAID">Impayée</option>
                        <option value="PENDING">En attente</option>
                      </select>
                    </td>
                    <td>
                      <span className="badge badge-neutral">{invoice.transactionCount} transaction(s)</span>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleViewInvoice(invoice)}
                          className="btn btn-ghost btn-sm btn-square text-primary"
                          title="Voir la facture"
                          disabled={viewLoading || !onViewInvoice}
                        >
                          {viewLoading ? (
                            <span className="loading loading-spinner loading-xs"></span>
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            console.log("🖱️ Clic sur modifier - ID:", invoice.id)
                            handleEdit(invoice)
                          }}
                          className="btn btn-ghost btn-sm btn-square"
                          title="Modifier"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDelete(invoice.id)}
                          className="btn btn-ghost btn-sm btn-square text-error"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                          className="btn btn-ghost btn-sm btn-square text-info"
                          title="Télécharger PDF"
                          onClick={handleDownloadPDF}
                        >
                          
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de visualisation de facture */}
      {selectedInvoice && (
        <InvoiceView
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
          onPrint={handlePrint}
          onSendEmail={handleSendEmail}
        />
      )}
    </>
  )
}

export default InvoiceList