"use client"

import { useRef } from "react"
import { Download, Printer, Mail, X } from "lucide-react"
import Image from "next/image"
import { PDFDownloadLink } from "@react-pdf/renderer"
import InvoicePDF from "./pdf/InvoicePDF"
import type { InvoiceWithDetails } from "@/type"

interface InvoiceViewProps {
  invoice: InvoiceWithDetails
  onClose: () => void
  onPrint?: () => void
  onSendEmail?: () => void
}

export default function InvoiceView({ invoice, onClose, onPrint, onSendEmail }: InvoiceViewProps) {

  const invoiceRef = useRef<HTMLDivElement>(null)

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount) + " FCFA"

  const calculateLineTotal = (qty: number, price: number) => qty * price

  // Calculer les montants TVA
  const tvaAmount = invoice.tva ? (invoice.subtotal * invoice.tva) / 100 : 0
  const totalTTC = invoice.totalAmount // ou invoice.subtotal + tvaAmount

  /** Badge clair et lisible */
  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyle = (status: string) => {
      switch (status) {
        case "PAID":
          return {
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #155724"
          }
        case "UNPAID":
          return {
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #721c24"
          }
        case "PENDING":
          return {
            backgroundColor: "#ffe5b4",
            color: "#8a5200",
            border: "1px solid #8a5200"
          }
        default:
          return {
            backgroundColor: "#e9ecef",
            color: "#495057",
            border: "1px solid #495057"
          }
      }
    }

    const labels: Record<string, string> = {
      PAID: "FACTURE PAYÉE",
      UNPAID: "FACTURE IMPAYÉE",
      PENDING: "EN ATTENTE",
    }

    const style = getStatusStyle(status)

    return (
      <span
        className="status-badge px-3 py-1 rounded-full text-xs font-semibold"
        style={style}
      >
        {labels[status] || status}
      </span>
    )
  }

  const pharmacy = {
    name: "Pharmacie Saran Nana Medical SARL",
    address: "Kalabancoura ACI, Près du Grand Terrain",
    city: "Bamako, Mali",
    phone: "+223 20 21 22 23",
    email: "contact@saranmedical.ml",
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl h-[95vh] rounded-lg shadow-xl flex flex-col overflow-hidden">

        {/* BUTTON BAR */}
        <div className="flex justify-between items-center p-4 border-b bg-white">
          <h2 className="text-lg font-semibold">Aperçu de la facture</h2>

          <div className="flex gap-2">

            <button 
              onClick={onSendEmail} 
              className="p-2 border rounded hover:bg-gray-100 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Envoyer</span>
            </button>

            <button 
              onClick={onPrint} 
              className="p-2 border rounded hover:bg-gray-100 flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span className="text-sm">Imprimer</span>
            </button>

            <PDFDownloadLink
              document={<InvoicePDF invoice={invoice} />}
              fileName={`Facture-${invoice.invoiceNumber}.pdf`}
            >
              {({ loading }) => (
                <button className="p-2 border rounded hover:bg-gray-100 flex items-center gap-2">
                  {loading ? (
                    <div className="w-4 h-4 animate-spin border-2 border-blue-500 border-t-transparent rounded-full" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                  <span className="text-sm">PDF</span>
                </button>
              )}
            </PDFDownloadLink>

            <button 
              onClick={onClose} 
              className="p-2 border rounded hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </button>

          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          <div ref={invoiceRef} className="invoice-view max-w-3xl mx-auto text-[15px] leading-relaxed">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-8">

              <div className="flex items-center">
                <Image
                  src="/logo.jpg"
                  width={65}
                  height={65}
                  alt="Logo"
                  className="border p-1 border-gray-300"
                />

                <div className="ml-3">
                  <p className="font-bold text-[16px]">{pharmacy.name}</p>
                  <p>{pharmacy.address}</p>
                  <p>{pharmacy.city}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">FACTURE N°: {invoice.invoiceNumber}</p>
                <p className="mt-1"><strong>Date :</strong> {formatDate(invoice.date)}</p>
                <div className="mt-2">
                  <StatusBadge status={invoice.status} />
                </div>
              </div>
            </div>

            {/* CLIENT */}
            <div className="border rounded p-4 bg-gray-50 mb-6">
              <p className="font-bold mb-2">INFORMATIONS CLIENT</p>
              <p><strong>Nom :</strong> {invoice.clientName}</p>
              {invoice.clientAddress && <p><strong>Adresse :</strong> {invoice.clientAddress}</p>}
              {invoice.client?.phone && <p><strong>Téléphone :</strong> {invoice.client.phone}</p>}
              {invoice.client?.email && <p><strong>Email :</strong> {invoice.client.email}</p>}
            </div>

            {/* TABLEAU */}
            <table className="w-full border-collapse text-[15px]">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left w-12">QTÉ</th>
                  <th className="p-2 text-left">Désignation</th>
                  <th className="p-2 text-right w-28">Prix.U</th>
                  <th className="p-2 text-right w-28">Montant</th>
                </tr>
              </thead>

              <tbody>
                {invoice.transactions.map((t) => (
                  <tr key={t.id} className="border-b">
                    <td className="p-2">{t.quantity}</td>
                    <td className="p-2">
                      {t.product.name}
                      {t.product.reference && (
                        <div className="reference text-xs text-gray-500">Réf : {t.product.reference}</div>
                      )}
                    </td>
                    <td className="p-2 text-right">{formatCurrency(t.price)}</td>
                    <td className="p-2 text-right">{formatCurrency(calculateLineTotal(t.quantity, t.price))}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* TOTAL - CORRECTION ICI */}
            <div className="flex justify-end mt-4">
              <div className="w-64 text-right space-y-2 border-t pt-2">
                <div className="flex justify-between">
                  <span>Sous-total HT:</span>
                  <span>{formatCurrency(invoice.subtotal)}</span>
                </div>
                
                {/* Afficher la TVA seulement si elle est > 0 */}
                {invoice.tva > 0 && (
                  <div className="flex justify-between">
                    <span>TVA ({invoice.tva}%):</span>
                    <span>{formatCurrency(tvaAmount)}</span>
                  </div>
                )}
                
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>MONTANT TOTAL TTC:</span>
                  <span>{formatCurrency(totalTTC)}</span>
                </div>
              </div>
            </div>

            {/* SIGNATURE */}
            <div className="mt-12 flex justify-end">
              <div className="text-center">
                <p className="font-semibold">POUR ACCORD LE PRESTATAIRE</p>
                <div className="border-t border-black mt-10 w-40"></div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="text-center text-sm mt-10 border-t pt-3">
              <p className="font-semibold">{pharmacy.name}</p>
              <p>{pharmacy.address} — {pharmacy.city}</p>
              <p>Tél : {pharmacy.phone} — Email : {pharmacy.email}</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}