"use client"

import React from "react"
import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer"
import type { InvoiceWithDetails } from "@/type"

// ==========================
//  ENREGISTREMENT DES POLICES
// ==========================
// Utiliser Times-Roman qui est plus fiable et supporte mieux les styles
Font.register({
  family: "Times-Roman",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/timesnewroman/v15/rnCoui-wZRfNZfbbKliDvS5P3HA.ttf",
      fontWeight: "normal",
    },
    {
      src: "https://fonts.gstatic.com/s/timesnewroman/v15/rnCti-wZRfNZfbbKliDvS5P3HA8_A8A.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/timesnewroman/v15/rnCsi-wZRfNZfbbKliDvS5P3HA8_YYA.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/timesnewroman/v15/rnCsi-wZRfNZfbbKliDvS5P3HA8_ecY.ttf",
      fontWeight: "bold",
      fontStyle: "italic",
    },
  ],
});

// Police de secours
Font.register({
  family: "Helvetica",
  src: "https://fonts.gstatic.com/s/helvetica/v15/09Bc2zCk4UJu-2E5O5LZLxQ.ttf",
});

// ==========================
//      STYLES PDF
// ==========================
const styles = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
    fontSize: 10,
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
    lineHeight: 1.3,
  },

  // Title
  titleContainer: {
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  logo: {
    width: 100,
    height: 80,
  },

  // Header top
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "green",
    paddingBottom: 10,
  },

  headerCenterInfo: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 9,
  },

  headerRightInfo: {
    textAlign: "right",
  },

  titleInHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "green",
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerLeft: {
    width: "65%",
  },
  headerRight: {
    width: "35%",
    textAlign: "right",
  },

  metaLabel: {
    fontWeight: "bold",
  },

  block: {
    marginBottom: 10,
  },

  // TABLE (gardé en noir) - Correction: retirer display: "table"
  table: {
    width: "auto",
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 10,
  },

  tableRow: {
    flexDirection: "row",
  },

  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
  },

  tableCell: {
    padding: 6,
    borderRightWidth: 1,
    borderColor: "#000",
    fontSize: 10,
  },

  colQty: { width: "10%" },
  colDesc: { width: "50%" },
  colPU: { width: "20%", textAlign: "right" },
  colTotal: { width: "20%", textAlign: "right", borderRightWidth: 0 },

  bodyCell: {
    padding: 6,
    borderRightWidth: 1,
    borderColor: "#000",
    fontSize: 10,
  },

  noRightBorder: {
    borderRightWidth: 0,
  },

  // TOTALS
  totals: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  totalsBox: {
    width: "50%",
    paddingTop: 6,
  },

  totalsLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  totalLabel: {
    fontSize: 11,
    textAlign: "right",
  },

  totalValue: {
    fontSize: 11,
    textAlign: "right",
    fontWeight: "bold",
  },

  totalFinal: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "right",
    color: "green",
    borderTopWidth: 1,
    borderColor: "green",
    paddingTop: 4,
    marginTop: 4,
  },

  amountInWords: {
    marginTop: 15,
    padding: 8,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "green",
  },

  // SIGNATURE
  signatureBlock: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  signature: {
    width: "40%",
    textAlign: "center",
  },

  signatureLine: {
    marginTop: 0,        
    paddingTop: 2,       
    borderTopWidth: 2,
    borderTopStyle: "solid",
    borderColor: "green",
    width: "80%",
    alignSelf: "center",
    textAlign: "center"
  },

  // FOOTER
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: "center",
    borderTopWidth: 1,
    borderColor: "green",
    paddingTop: 5,
    fontSize: 9,
  },

  small: {
    fontSize: 9,
  },

  // Style pour le numéro de facture en vert
  invoiceNumber: {
    fontSize: 10,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 6,
    color: "green",
  },

  // Style pour les labels en vert
  metaLabelGreen: {
    fontWeight: "bold",
    color: "green",
  },

  // Style pour le texte en lettres en vert
  amountWordsText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "green",
  },

  amountWordsValue: {
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 3,
    color: "green",
  },

  // Style général pour le texte vert
  greenText: {
    color: "green",
  },

  boldText: {
    fontWeight: "bold",
  },
})

// ==========================
//      INFO PHARMACIE
// ==========================
const pharmacy = {
  name: "Société d'importation et de vente en gros",
  description: "Produits consommables pharmaceutiques, parapharmaceutiques, matériels médical, réactifs et divers produits",
  address: "Kalahan-coura au sud de la station soleil",
  city: "Bamako, Mali",
  phone: "70 38 22 35 / 62 13 44 00 / 70 52 03 88",
  email: "contact@saranmedical.ml",
  rccm: "MA.BKO.2017.A4236",
  bankAccount: "Compte Bancaire : BMS SA N° ML102010016885000200152",
}

// ==========================
//   FORMATAGE MONTANTS
// ==========================
const formatCurrency = (n: number) => {
  return n.toString() + " FCFA"
}

const numberToWords = (num: number): string => {
  if (num === 0) return "zéro"

  const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"]
  const teens = [
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf",
  ]
  const tens = [
    "",
    "",
    "vingt",
    "trente",
    "quarante",
    "cinquante",
    "soixante",
    "soixante",
    "quatre-vingt",
    "quatre-vingt",
  ]

  const convertHundreds = (n: number): string => {
    let result = ""

    const hundred = Math.floor(n / 100)
    const remainder = n % 100

    if (hundred > 0) {
      if (hundred === 1) {
        result += "cent"
      } else {
        result += units[hundred] + " cent"
      }
      if (remainder === 0) {
        result += "s"
      }
    }

    if (remainder > 0) {
      if (result) result += " "

      if (remainder < 10) {
        result += units[remainder]
      } else if (remainder < 20) {
        result += teens[remainder - 10]
      } else {
        const ten = Math.floor(remainder / 10)
        const unit = remainder % 10

        if (ten === 7 || ten === 9) {
          const baseTen = ten === 7 ? 6 : 8
          const addUnit = ten === 7 ? remainder - 60 : remainder - 80
          if (addUnit < 10) {
            result += tens[baseTen] + "-" + units[addUnit]
          } else {
            result += tens[baseTen] + "-" + teens[addUnit - 10]
          }
        } else {
          result += tens[ten]
          if (unit === 1 && ten !== 8) {
            result += " et un"
          } else if (unit > 0) {
            result += "-" + units[unit]
          } else if (ten === 8) {
            result += "s"
          }
        }
      }
    }

    return result
  }

  const convertThousands = (n: number): string => {
    if (n === 0) return ""
    if (n === 1) return "mille"
    return convertHundreds(n) + " mille"
  }

  const convertMillions = (n: number): string => {
    if (n === 0) return ""
    if (n === 1) return "un million"
    return convertHundreds(n) + " millions"
  }

  let result = ""
  const millions = Math.floor(num / 1000000)
  const thousands = Math.floor((num % 1000000) / 1000)
  const hundreds = num % 1000

  if (millions > 0) {
    result += convertMillions(millions)
  }

  if (thousands > 0) {
    if (result) result += " "
    result += convertThousands(thousands)
  }

  if (hundreds > 0) {
    if (result) result += " "
    result += convertHundreds(hundreds)
  }

  return result
}

// ==========================
//       MAIN PDF
// ==========================
export default function InvoicePDF({ invoice }: { invoice: InvoiceWithDetails }) {
  // Calcul des montants TVA
  const subtotal = invoice.subtotal || invoice.transactions.reduce(
    (sum, t) => sum + (t.price ?? 0) * (t.quantity ?? 0),
    0
  )
  
  const tvaRate = invoice.tva || 0
  const tvaAmount = tvaRate > 0 ? (subtotal * tvaRate) / 100 : 0
  const totalAmount = invoice.totalAmount || subtotal + tvaAmount

  const amountInWords = numberToWords(totalAmount)

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Modification du header pour 3 colonnes: logo, infos entreprise, numéro facture */}
        <View style={styles.headerTop}>
          <View>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              style={styles.logo}
              src="/logo.jpeg"
            />
          </View>

          <View style={styles.headerCenterInfo}>
            <Text style={[styles.boldText, styles.greenText, { fontSize: 10 }]}>{pharmacy.name}</Text>
            <Text style={[styles.greenText, { fontSize: 8 }]}>{pharmacy.description}</Text>
            <Text style={styles.greenText}>{pharmacy.address}</Text>
            <Text style={styles.greenText}>{pharmacy.city}</Text>
            <Text style={styles.greenText}>Tél : {pharmacy.phone}</Text>
            <Text style={styles.greenText}>Email : {pharmacy.email}</Text>
          </View>

          <View style={styles.headerRightInfo}>
            <Text style={styles.titleInHeader}>FACTURE</Text>
            <Text style={styles.invoiceNumber}>
              N° : {invoice.invoiceNumber}
            </Text>

            <Text style={[styles.greenText, { fontSize: 11, marginTop: 5 }]}>
              Date: {new Date(invoice.date).toLocaleDateString("fr-FR")}
            </Text>
          </View>
        </View>

        {/* CLIENT */}
        <View style={styles.block}>
          <Text>
            <Text style={styles.metaLabelGreen}>Client : </Text>
            <Text style={styles.greenText}>{invoice.clientName}</Text>
          </Text>

          {invoice.client?.address && (
            <Text>
              <Text style={styles.metaLabelGreen}>Adresse : </Text>
              <Text style={styles.greenText}>{invoice.client.address}</Text>
            </Text>
          )}

          {invoice.client?.phone && (
            <Text>
              <Text style={styles.metaLabelGreen}>Téléphone : </Text>
              <Text style={styles.greenText}>{invoice.client.phone}</Text>
            </Text>
          )}

          {invoice.client?.email && (
            <Text>
              <Text style={styles.metaLabelGreen}>Email : </Text>
              <Text style={styles.greenText}>{invoice.client.email}</Text>
            </Text>
          )}
        </View>

        {/* TABLE (gardé en noir mais avec Times-Roman) */}
        <View style={styles.table}>
          {/* HEADER */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.colDesc]}>DESCRIPTION</Text>
            <Text style={[styles.tableCell, styles.colQty]}>QTÉ.</Text>
            <Text style={[styles.tableCell, styles.colPU]}>Prix.U</Text>
            <Text style={[styles.tableCell, styles.colTotal]}>Montant</Text>
          </View>

          {/* ROWS */}
          {invoice.transactions.map((t, idx) => {
            const qty = t.quantity ?? 0
            const pu = t.price ?? 0
            const total = qty * pu
            return (
              <View style={styles.tableRow} key={idx}>
                <Text style={[styles.bodyCell, styles.colDesc]}>
                  {t.product?.name}
                  {t.product?.reference && ` (Ref: ${t.product.reference})`}
                </Text>
                <Text style={[styles.bodyCell, styles.colQty]}>{qty}</Text>
                <Text style={[styles.bodyCell, styles.colPU]}>{formatCurrency(pu)}</Text>
                <Text style={[styles.bodyCell, styles.colTotal, styles.noRightBorder]}>
                  {formatCurrency(total)}
                </Text>
              </View>
            )
          })}
        </View>

        {/* TOTALS - CORRECTION ICI */}
        <View style={styles.totals}>
          <View style={styles.totalsBox}>
            {/* Sous-total HT */}
            <View style={styles.totalsLine}>
              <Text style={styles.totalLabel}>Sous-total HT:</Text>
              <Text style={styles.totalValue}>{formatCurrency(subtotal)}</Text>
            </View>

            {/* TVA (seulement si > 0) */}
            {tvaRate > 0 && (
              <View style={styles.totalsLine}>
                <Text style={styles.totalLabel}>TVA ({tvaRate}%):</Text>
                <Text style={styles.totalValue}>{formatCurrency(tvaAmount)}</Text>
              </View>
            )}

            {/* Total TTC */}
            <View style={styles.totalsLine}>
              <Text style={styles.totalFinal}>MONTANT TOTAL TTC:</Text>
              <Text style={styles.totalFinal}>{formatCurrency(totalAmount)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.amountInWords}>
          <Text style={styles.amountWordsText}>
            Arrêté la présente facture à la somme de :{" "}
          </Text>
          <Text style={styles.amountWordsValue}>
            {amountInWords.charAt(0).toUpperCase() + amountInWords.slice(1)} francs CFA
          </Text>
        </View>

        {/* SIGNATURE */}
        <View style={styles.signatureBlock}>
          <View style={styles.signature}>
            <Text style={styles.greenText}>POUR ACCORD LE PRESTATAIRE</Text>
            <Text style={styles.signatureLine}></Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={[styles.boldText, styles.greenText]}>{pharmacy.name}</Text>
          <Text style={[styles.small, styles.greenText]}>
            {pharmacy.address} - {pharmacy.city}
          </Text>
          <Text style={[styles.small, styles.greenText]}>
            Tél : {pharmacy.phone} - Email : {pharmacy.email}
          </Text>
          <Text style={[styles.small, styles.greenText]}>
            {pharmacy.rccm} - {pharmacy.bankAccount}
          </Text>
        </View>
      </Page>
    </Document>
  )
}