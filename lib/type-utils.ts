// lib/type-utils.ts

/**
 * Utilitaires pour la conversion des types entre Prisma et l'application
 */

// Conversion de null vers undefined pour les champs optionnels
export function nullToUndefined<T>(value: T | null): T | undefined {
  return value === null ? undefined : value;
}

// Conversion de undefined vers null pour Prisma
export function undefinedToNull<T>(value: T | undefined): T | null {
  return value === undefined ? null : value;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

// Conversion d'un client Prisma vers le type Client de l'application
export function convertClient(client: any): any {
  if (!client) return client;
  
  return {
    ...client,
    email: client.email || undefined,
    phone: client.phone || undefined
  };
}

// Conversion d'une entreprise Prisma vers le type Entreprise de l'application
export function convertEntreprise(entreprise: any): any {
  if (!entreprise) return entreprise;
  
  return {
    ...entreprise,
    email: entreprise.email || undefined,
    address: entreprise.address || undefined
  };
}

// Conversion d'un produit Prisma vers le type Product de l'application
export function convertProduct(product: any): any {
  if (!product) return product;
  
  return {
    ...product,
    reference: product.reference || undefined,
    subCategoryId: product.subCategoryId || undefined,
    entrepriseId: product.entrepriseId || undefined,
    category: product.category ? {
      ...product.category,
      description: product.category.description || undefined
    } : undefined,
    subCategory: product.subCategory ? {
      ...product.subCategory,
      description: product.subCategory.description || undefined
    } : undefined
  };
}

// Conversion d'une transaction Prisma vers le type Transaction de l'application
export function convertTransaction(transaction: any): any {
  if (!transaction) return transaction;
  
  return {
    ...transaction,
    entrepriseId: transaction.entrepriseId || undefined,
    destinationId: transaction.destinationId || undefined,
    invoiceId: transaction.invoiceId || undefined,
    destination: transaction.destination ? {
      ...transaction.destination,
      description: transaction.destination.description || undefined,
      entrepriseId: transaction.destination.entrepriseId || undefined
    } : undefined,
    product: transaction.product ? {
      ...transaction.product
    } : undefined,
    invoice: transaction.invoice ? {
      ...transaction.invoice
    } : undefined
  };
}

// Conversion d'une facture Prisma vers le type Invoice de l'application
export function convertInvoice(invoice: any): any {
  if (!invoice) return invoice;
  
  return {
    ...invoice,
    client: invoice.client ? {
      ...invoice.client,
      email: invoice.client.email || undefined,
      phone: invoice.client.phone || undefined
    } : undefined,
    transactions: invoice.transactions?.map(convertTransaction) || []
  };
}

// Conversion d'une facture détaillée Prisma vers InvoiceWithDetails
export function convertInvoiceWithDetails(invoice: any): any {
  if (!invoice) return invoice;
  
  return {
    ...invoice,
    clientEmail: invoice.client?.email || null,
    clientPhone: invoice.client?.phone || null,
    client: invoice.client ? {
      ...invoice.client,
      email: invoice.client.email || null,
      phone: invoice.client.phone || null
    } : undefined,
    entreprise: invoice.entreprise ? {
      ...invoice.entreprise,
      email: invoice.entreprise.email || null,
      address: invoice.entreprise.address || null
    } : null,
    transactions: invoice.transactions?.map((tx: any) => ({
      ...tx,
      product: {
        ...tx.product,
        reference: tx.product.reference || null,
        subCategory: tx.product.subCategory ? {
          name: tx.product.subCategory.name
        } : null
      }
    })) || []
  };
}

/* eslint-enable @typescript-eslint/no-explicit-any */
