import type React from "react"
import type { InvoiceStats as InvoiceStatsType } from "@/type"
import { FileText, DollarSign, CheckCircle, Clock, XCircle } from "lucide-react"

interface InvoiceStatsProps {
  stats: InvoiceStatsType
}

const InvoiceStats: React.FC<InvoiceStatsProps> = ({ stats }) => {
  const statCards = [
    {
      label: "Total Factures",
      value: stats.totalInvoices,
      icon: FileText,
      color: "primary",
    },
    {
      label: "Payées",
      value: stats.paidInvoices,
      icon: CheckCircle,
      color: "success",
    },
    {
      label: "Impayées",
      value: stats.unpaidInvoices,
      color: "error",
      icon: XCircle,
    },
    {
      label: "En Attente",
      value: stats.pendingInvoices,
      color: "warning",
      icon: Clock,
    },
    {
      label: "Revenu Total",
      value: `CFA${stats.totalRevenue.toLocaleString()}`,
      color: "info",
      icon: DollarSign,
    },
    {
      label: "Taux de Paiement",
      value: `${stats.paymentRate.toFixed(1)}%`,
      color: "secondary",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
      {statCards.map((stat, index) => (
        <div key={index} className="stat bg-base-100 rounded-lg shadow-sm border border-base-300">
          <div className={`stat-figure text-${stat.color}`}>
            <div className="flex items-center justify-center w-6 h-6">
              <stat.icon className="w-full h-full" />
            </div>
          </div>
          <div className="stat-title text-xs">{stat.label}</div>
          <div className="stat-value text-lg">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}

export default InvoiceStats
