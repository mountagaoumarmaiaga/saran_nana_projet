"use client"

import type React from "react"
import type { InvoiceWithDetails } from "@/type"
import { Download, Printer, Mail, X } from "lucide-react"

interface InvoiceDetailsProps {
  invoice: InvoiceWithDetails
  onClose: () => void
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoice, onClose }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden border border-base-300">
        <div className="flex justify-between items-center p-6 border-b border-base-300 bg-base-200">
          <h2 className="text-xl font-bold">Détails de la facture</h2>
          <div className="flex gap-2">
            <button className="btn btn-ghost btn-sm gap-2">
              <Mail className="w-4 h-4" />
              Envoyer
            </button>
            <button className="btn btn-ghost btn-sm gap-2">
              <Printer className="w-4 h-4" />
              Imprimer
            </button>
            <button className="btn btn-ghost btn-sm gap-2">
              <Download className="w-4 h-4" />
              PDF
            </button>
            <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">{invoice.entreprise?.name || "Entreprise"}</h3>
              <p className="text-base-content/60">{invoice.entreprise?.address || "Adresse non spécifiée"}</p>
              <p className="text-base-content/60">{invoice.entreprise?.email || "Email non spécifié"}</p>
            </div>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-primary mb-2">FACTURE</h1>
              <p className="text-lg font-mono">{invoice.invoiceNumber}</p>
              <p className="text-base-content/60">Date: {formatDate(invoice.date)}</p>
              <p
                className={`font-bold ${
                  invoice.status === "PAID"
                    ? "text-success"
                    : invoice.status === "UNPAID"
                      ? "text-error"
                      : "text-warning"
                }`}
              >
                {invoice.status === "PAID" ? "Payée" : invoice.status === "UNPAID" ? "Impayée" : "En attente"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-2">Facturé à:</h4>
              <p className="font-medium">{invoice.clientName}</p>
              <p>{invoice.clientAddress}</p>
              {invoice.clientEmail && <p>{invoice.clientEmail}</p>}
              {invoice.clientPhone && <p>{invoice.clientPhone}</p>}
            </div>
          </div>

          <div className="mb-8">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Référence</th>
                  <th>Quantité</th>
                  <th>Prix unitaire</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>
                      <div>
                        <div className="font-medium">{transaction.product.name}</div>
                        <div className="text-sm text-base-content/60">
                          {transaction.product.category.name}
                          {transaction.product.subCategory && ` / ${transaction.product.subCategory.name}`}
                        </div>
                      </div>
                    </td>
                    <td>{transaction.product.reference || "N/A"}</td>
                    <td>
                      {transaction.quantity} {transaction.product.unit}
                    </td>
                    <td>{transaction.price.toFixed(2)}CFA</td>
                    <td className="font-bold">{transaction.subtotal.toFixed(2)}CFA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between">
                <span>Sous-total:</span>
                <span>{invoice.subtotal.toFixed(2)}CFA</span>
              </div>
              {invoice.tvaEnabled && invoice.tva > 0 && (
                <div className="flex justify-between">
                  <span>TVA ({invoice.tva}%):</span>
                  <span>{((invoice.subtotal * invoice.tva) / 100).toFixed(2)}CFA</span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total:</span>
                <span>{invoice.totalAmount.toFixed(2)}CFA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceDetails
