"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState, useCallback } from "react"
import {
  createInvoice,
  readInvoices,
  updateInvoiceStatus,
  deleteInvoice,
  getInvoiceStats,
  generateInvoiceNumber,
  readClients,
  readProducts,
  readInvoiceById,
} from "../actions"
import { toast } from "react-toastify"
import { Plus, Search, FileText } from "lucide-react"

import type { Invoice, InvoiceStats as InvoiceStatsType, Client, Product, InvoiceWithDetails } from "@/type"
import InvoiceList from "../components/InvoiceList"
import InvoiceForm from "../components/InvoiceForm"
import InvoiceStats from "../components/InvoiceStats"
import Wrapper from "../components/Wrapper"

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

const InvoicesPage = () => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [loading, setLoading] = useState(false)
  const [stats, setStats] = useState<InvoiceStatsType>({
    totalInvoices: 0,
    paidInvoices: 0,
    unpaidInvoices: 0,
    pendingInvoices: 0,
    totalRevenue: 0,
    paymentRate: 0,
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PAID" | "UNPAID" | "PENDING">("ALL")
  const [showModal, setShowModal] = useState(false)
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null)
  const [clients, setClients] = useState<Client[]>([])
  const [products, setProducts] = useState<Product[]>([])

  const fetchInvoices = useCallback(async () => {
    if (!email) return

    try {
      setLoading(true)
      const filters = {
        status: statusFilter === "ALL" ? undefined : statusFilter,
        limit: 50,
      }
      const invoicesData = await readInvoices(email, filters)
      setInvoices(invoicesData.invoices || [])

      const invoiceStats = await getInvoiceStats(email)
      setStats(invoiceStats)
    } catch (error) {
      console.error("Erreur chargement factures:", error)
      toast.error("Erreur lors du chargement des factures")
    } finally {
      setLoading(false)
    }
  }, [email, statusFilter])

  const fetchClientsAndProducts = useCallback(async () => {
    if (!email) return

    try {
      const [clientsData, productsData] = await Promise.all([readClients(email), readProducts(email, { limit: 1000 })])
      setClients(clientsData || [])
      setProducts(productsData.products || [])
    } catch (error) {
      console.error("Erreur chargement données:", error)
      toast.error("Erreur lors du chargement des clients et produits")
    }
  }, [email])

  // AJOUT: Fonction pour visualiser une facture
  const handleViewInvoice = useCallback(
    async (invoiceId: string): Promise<InvoiceWithDetails | null> => {
      if (!email) return null

      try {
        const invoiceDetails = await readInvoiceById(invoiceId, email)
        if (invoiceDetails) {
          toast.success("Facture chargée avec succès")
          return invoiceDetails
        }
        return null
      } catch (error) {
        console.error("Erreur chargement détails facture:", error)
        toast.error("Erreur lors du chargement des détails de la facture")
        return null
      }
    },
    [email],
  )

  useEffect(() => {
    fetchInvoices()
    fetchClientsAndProducts()
  }, [email, fetchInvoices, fetchClientsAndProducts])

  const handleSubmit = async (formData: InvoiceFormData) => {
    if (!email) return

    try {
      if (editingInvoice) {
        await updateInvoiceStatus(editingInvoice.id, formData.status, email)
        toast.success("Facture mise à jour avec succès")
      } else {
        await createInvoice(
          {
            ...formData,
            tva: formData.tvaEnabled ? formData.tva : 0,
          },
          email,
        )
        toast.success("Facture créée avec succès")
      }

      setShowModal(false)
      resetForm()
      fetchInvoices()
    } catch (error: unknown) {
      console.error("Erreur:", error)
      const errorMessage = error instanceof Error ? error.message : "Erreur lors de la sauvegarde de la facture"
      toast.error(errorMessage)
    }
  }

  const handleDelete = async (invoiceId: string) => {
    if (!email || !confirm("Êtes-vous sûr de vouloir supprimer cette facture ?")) return

    try {
      await deleteInvoice(invoiceId, email)
      toast.success("Facture supprimée avec succès")
      fetchInvoices()
    } catch (error: unknown) {
      console.error("Erreur suppression:", error)
      const errorMessage = error instanceof Error ? error.message : "Erreur lors de la suppression de la facture"
      toast.error(errorMessage)
    }
  }

  const handleStatusUpdate = async (invoiceId: string, status: "PAID" | "UNPAID" | "PENDING") => {
    if (!email) return

    try {
      await updateInvoiceStatus(invoiceId, status, email)
      toast.success("Statut de la facture mis à jour")
      fetchInvoices()
    } catch (error: unknown) {
      console.error("Erreur mise à jour statut:", error)
      toast.error("Erreur lors de la mise à jour du statut")
    }
  }

  const resetForm = () => {
    setEditingInvoice(null)
  }

  const handleNewInvoice = async () => {
    try {
      // Supprimé la variable invoiceNumber inutilisée
      await generateInvoiceNumber(email)
      setEditingInvoice(null)
      setShowModal(true)
    } catch (error) {
      console.error("Erreur génération numéro:", error)
      toast.error("Erreur lors de la génération du numéro de facture")
    }
  }

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.client?.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Wrapper>
      <div className="space-y-6 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 text-primary">
                <FileText className="w-full h-full" />
              </div>
              Gestion des Factures
            </h1>
            <p className="text-base-content/60 mt-2 text-sm sm:text-base">Gérez vos factures et suivre les paiements</p>
          </div>
          <button onClick={handleNewInvoice} className="btn btn-primary gap-2 w-full sm:w-auto">
            <div className="flex items-center justify-center w-4 h-4">
              <Plus className="w-full h-full" />
            </div>
            Nouvelle Facture
          </button>
        </div>

        <InvoiceStats stats={stats} />

        <div className="card bg-base-100 shadow-sm border border-base-300">
          <div className="card-body p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
              <div className="form-control flex-1 w-full">
                <label className="label pb-2">
                  <span className="label-text font-medium">Rechercher une facture</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 flex items-center justify-center w-4 h-4 text-base-content/40">
                    <Search className="w-full h-full" />
                  </div>
                  <input
                    type="text"
                    placeholder="Numéro, client, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full pl-10 input-sm sm:input-md"
                  />
                </div>
              </div>

              <div className="form-control w-full lg:w-48">
                <label className="label pb-2">
                  <span className="label-text font-medium">Statut</span>
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as "ALL" | "PAID" | "UNPAID" | "PENDING")}
                  className="select select-bordered select-sm sm:select-md"
                >
                  <option value="ALL">Tous les statuts</option>
                  <option value="PAID">Payée</option>
                  <option value="UNPAID">Impayée</option>
                  <option value="PENDING">En attente</option>
                </select>
              </div>

              <div className="flex gap-2 w-full lg:w-auto">
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setStatusFilter("ALL")
                  }}
                  className="btn btn-outline btn-sm w-full lg:w-auto"
                  disabled={!searchTerm && statusFilter === "ALL"}
                >
                  Effacer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AJOUT: Passez la fonction handleViewInvoice à InvoiceList */}
        <InvoiceList
          invoices={filteredInvoices}
          loading={loading}
          onEdit={(invoice) => {
            setEditingInvoice(invoice)
            setShowModal(true)
          }}
          onDelete={handleDelete}
          onStatusUpdate={handleStatusUpdate}
          searchTerm={searchTerm}
          onViewInvoice={handleViewInvoice} // ← ICI
        />

        {showModal && (
          <InvoiceForm
            invoice={editingInvoice}
            clients={clients}
            products={products}
            onClose={() => {
              setShowModal(false)
              resetForm()
            }}
            onSubmit={handleSubmit}
            onGenerateInvoiceNumber={() => generateInvoiceNumber(email)}
          />
        )}
      </div>
    </Wrapper>
  )
}

export default InvoicesPage