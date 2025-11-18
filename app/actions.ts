"use server"

import prisma from "@/lib/prisma"
import { 
    CategoryWithSub, 
    FormDataType, 
    OrderItem, 
    Product, 
    ProductOverviewStats, 
    StockSummary, 
    SubCategoryWithCount, 
    Transaction, 
    Invoice, 
    InvoiceWithDetails, 
    InvoiceStats,
    ProductsResponse,
    InvoicesResponse,
    DeductStockResponse,
    ReplenishStockResponse,
    ProductFilters,
    TransactionFilters,
    InvoiceFilters,
    CategoryDistribution,
    CriticalProduct,
    Client,
    Destination,
    Entreprise,
    ClientStats,
    
} from "@/type"
import { Category, Prisma, SubCategory } from "@prisma/client"
import {
  convertClient,
  convertEntreprise,
  convertProduct,
  convertTransaction,
  convertInvoice,
  convertInvoiceWithDetails
} from "@/lib/type-utils"

// =============================================
// FONCTIONS POUR L'ENTREPRISE
// =============================================

export async function checkAndAddEntreprise(email: string, name: string): Promise<void> {
    if (!email) return
    try {
        const existingEntreprise = await prisma.entreprise.findUnique({
            where: { email }
        })
        if (!existingEntreprise && name) {
            await prisma.entreprise.create({
                data: { email, name }
            })
        }
    } catch (error) {
        console.error("Erreur création entreprise:", error)
        throw error
    }
}

export async function getEntreprise(email: string): Promise<Entreprise | null> {
    if (!email) return null
    try {
        const entreprise = await prisma.entreprise.findUnique({
            where: { email }
        })
        return convertEntreprise(entreprise)
    } catch (error) {
        console.error("Erreur récupération entreprise:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES CATÉGORIES
// =============================================

export async function createCategory(name: string, email: string, description?: string): Promise<Category> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.category.create({
            data: {
                name,
                description: description || null,
                entrepriseId: entreprise.id
            }
        })
    } catch (error) {
        console.error("Erreur création catégorie:", error)
        throw error
    }
}

export async function updateCategory(id: string, email: string, name: string, description?: string): Promise<Category> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.category.update({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            },
            data: { 
                name, 
                description: description || null 
            }
        })
    } catch (error) {
        console.error("Erreur mise à jour catégorie:", error)
        throw error
    }
}

export async function deleteCategory(id: string, email: string): Promise<Category> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.category.delete({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            }
        })
    } catch (error) {
        console.error("Erreur suppression catégorie:", error)
        throw error
    }
}

export async function readCategories(email: string): Promise<Category[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.category.findMany({
            where: { entrepriseId: entreprise.id },
            orderBy: { name: 'asc' }
        })
    } catch (error) {
        console.error("Erreur lecture catégories:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES SOUS-CATÉGORIES
// =============================================

export async function createSubCategory(name: string, categoryId: string, email: string, description?: string): Promise<SubCategory> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.subCategory.create({
            data: {
                name,
                description: description || null,
                categoryId,
                entrepriseId: entreprise.id
            }
        })
    } catch (error) {
        console.error("Erreur création sous-catégorie:", error)
        throw error
    }
}

export async function updateSubCategory(id: string, email: string, name: string, description?: string): Promise<SubCategory> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.subCategory.update({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            },
            data: { 
                name, 
                description: description || null 
            }
        })
    } catch (error) {
        console.error("Erreur mise à jour sous-catégorie:", error)
        throw error
    }
}

export async function deleteSubCategory(id: string, email: string): Promise<SubCategory> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.subCategory.delete({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            }
        })
    } catch (error) {
        console.error("Erreur suppression sous-catégorie:", error)
        throw error
    }
}

export async function readSubCategories(email: string, categoryId?: string): Promise<SubCategory[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const where: Prisma.SubCategoryWhereInput = {
            entrepriseId: entreprise.id,
            ...(categoryId && { categoryId })
        }

        return await prisma.subCategory.findMany({
            where,
            orderBy: { name: 'asc' },
            include: { category: true }
        })
    } catch (error) {
        console.error("Erreur lecture sous-catégories:", error)
        throw error
    }
}

export async function readCategoriesWithSub(email: string): Promise<CategoryWithSub[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const categories = await prisma.category.findMany({
            where: { entrepriseId: entreprise.id },
            include: {
                subCategories: {
                    include: {
                        _count: { select: { products: true } }
                    }
                },
                _count: { select: { products: true } }
            },
            orderBy: { name: 'asc' }
        })

        return categories.map(category => ({
            ...category,
            subCategories: category.subCategories.map(subCat => ({
                ...subCat,
                _count: subCat._count
            }))
        }))
    } catch (error) {
        console.error("Erreur lecture catégories:", error)
        throw error
    }
}

export async function readSubCategoriesWithCount(
    email: string, 
    categoryId?: string
): Promise<SubCategoryWithCount[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const where: Prisma.SubCategoryWhereInput = {
            entrepriseId: entreprise.id,
            ...(categoryId && { categoryId })
        }

        const subCategories = await prisma.subCategory.findMany({
            where,
            include: {
                _count: { select: { products: true } },
                category: true
            },
            orderBy: { name: 'asc' }
        })

        return subCategories.map(subCat => ({
            ...subCat,
            _count: subCat._count,
            category: subCat.category
        }))
    } catch (error) {
        console.error("Erreur lecture sous-catégories:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES PRODUITS
// =============================================

export async function createProduct(formData: FormDataType, email: string): Promise<Product> {
    try {
        const { name, description, imageUrl, categoryId, subCategoryId, unit, reference, price } = formData
        if (!name || !categoryId) throw new Error("Nom et catégorie requis")

        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const product = await prisma.product.create({
            data: {
                name,
                description,
                imageUrl: imageUrl || "",
                categoryId,
                subCategoryId: subCategoryId || null,
                unit: unit || "",
                reference: reference || null,
                price: price || 0,
                entrepriseId: entreprise.id,
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                },
                subCategory: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                }
            }
        })

        return convertProduct({
            ...product,
            categoryName: product.category?.name,
            subCategoryName: product.subCategory?.name,
            category: product.category,
            subCategory: product.subCategory
        })
    } catch (error) {
        console.error("Erreur création produit:", error)
        throw error
    }
}

export async function updateProduct(formData: FormDataType, email: string): Promise<Product> {
    try {
        const { id, name, description, imageUrl, subCategoryId, reference, price } = formData
        if (!id || !name) throw new Error("ID et nom requis")

        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const product = await prisma.product.update({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            },
            data: { 
                name,
                description,
                imageUrl,
                subCategoryId: subCategoryId || null,
                reference: reference || null,
                price: price || 0
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                },
                subCategory: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                }
            }
        })

        return convertProduct({
            ...product,
            categoryName: product.category?.name,
            subCategoryName: product.subCategory?.name,
            category: product.category,
            subCategory: product.subCategory
        })
    } catch (error) {
        console.error("Erreur mise à jour produit:", error)
        throw error
    }
}

export async function deleteProduct(id: string, email: string): Promise<Product> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const product = await prisma.product.delete({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            },
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                },
                subCategory: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                }
            }
        })

        return convertProduct({
            ...product,
            categoryName: product.category?.name,
            subCategoryName: product.subCategory?.name,
            category: product.category,
            subCategory: product.subCategory
        })
    } catch (error) {
        console.error("Erreur suppression produit:", error)
        throw error
    }
}

export async function readProducts(
    email: string,
    filters?: ProductFilters
): Promise<ProductsResponse> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const where: Prisma.ProductWhereInput = {
            entrepriseId: entreprise.id,
        }

        if (filters?.searchName) {
            where.OR = [
                { name: { contains: filters.searchName } },
                { reference: { contains: filters.searchName } }
            ]
        }

        if (filters?.categoryId) {
            where.categoryId = filters.categoryId
        }

        if (filters?.subCategoryId) {
            where.subCategoryId = filters.subCategoryId
        }

        if (filters?.reference) {
            where.reference = { contains: filters.reference }
        }

        const totalCount = await prisma.product.count({ where })

        const limit = filters?.limit !== undefined ? filters.limit : 10
        const totalPages = Math.ceil(totalCount / limit)

        const products = await prisma.product.findMany({
            where,
            include: { 
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                },
                subCategory: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                }
            },
            orderBy: { name: 'asc' },
            take: limit,
            skip: filters?.offset || 0
        })

        const formattedProducts: Product[] = products.map(product => 
            convertProduct({
                ...product,
                categoryName: product.category?.name || 'Non catégorisé',
                subCategoryName: product.subCategory?.name || 'Non spécifiée',
                category: product.category,
                subCategory: product.subCategory
            })
        )

        return {
            products: formattedProducts,
            totalCount,
            totalPages
        }
    } catch (error) {
        console.error("Erreur lecture produits:", error)
        throw error
    }
}

export async function readProductById(productId: string, email: string): Promise<Product | null> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const product = await prisma.product.findUnique({
            where: { 
                id: productId, 
                entrepriseId: entreprise.id 
            },
            include: { 
                category: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                },
                subCategory: {
                    select: {
                        id: true,
                        name: true,
                        description: true
                    }
                }
            }
        })

        return product ? convertProduct({
            ...product,
            categoryName: product.category?.name,
            subCategoryName: product.subCategory?.name,
            category: product.category,
            subCategory: product.subCategory
        }) : null
    } catch (error) {
        console.error("Erreur lecture produit:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES TRANSACTIONS
// =============================================

export async function replenishStockWithTransaction(
    productId: string, 
    quantity: number, 
    email: string, 
    price?: number
): Promise<ReplenishStockResponse> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const product = await prisma.product.findUnique({
            where: { 
                id: productId, 
                entrepriseId: entreprise.id 
            }
        })

        if (!product) throw new Error("Produit non trouvé")

        const transactionPrice = price || product.price
        const subtotal = quantity * transactionPrice

        const result = await prisma.$transaction(async (tx) => {
            const updatedProduct = await tx.product.update({
                where: { 
                    id: productId, 
                    entrepriseId: entreprise.id 
                },
                data: { quantity: { increment: quantity } },
                include: {
                    category: {
                        select: {
                            id: true,
                            name: true,
                            description: true
                        }
                    },
                    subCategory: {
                        select: {
                            id: true,
                            name: true,
                            description: true
                        }
                    }
                }
            })

            const transaction = await tx.transaction.create({
                data: {
                    type: "PURCHASE",
                    quantity,
                    price: transactionPrice,
                    subtotal,
                    productId,
                    entrepriseId: entreprise.id
                },
                include: {
                    product: {
                        select: {
                            id: true,
                            name: true,
                            imageUrl: true,
                            unit: true,
                            category: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    destination: true,
                    invoice: {
                        include: {
                            client: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })

            return { updatedProduct, transaction }
        })

        const { updatedProduct, transaction } = result

        const formattedProduct: Product = convertProduct({
            ...updatedProduct,
            categoryName: updatedProduct.category?.name,
            subCategoryName: updatedProduct.subCategory?.name,
            category: updatedProduct.category,
            subCategory: updatedProduct.subCategory
        })

        const formattedTransaction: Transaction = convertTransaction({
            id: transaction.id,
            type: transaction.type as 'SALE' | 'PURCHASE' | 'RETURN',
            quantity: transaction.quantity,
            price: transaction.price,
            subtotal: transaction.subtotal,
            productId: transaction.productId,
            entrepriseId: transaction.entrepriseId,
            destinationId: transaction.destinationId,
            invoiceId: transaction.invoiceId,
            createdAt: transaction.createdAt,
            categoryName: transaction.product.category.name,
            productName: transaction.product.name,
            imageUrl: transaction.product.imageUrl,
            unit: transaction.product.unit,
            destination: transaction.destination,
            product: transaction.product,
            invoice: transaction.invoice ? {
                id: transaction.invoice.id,
                invoiceNumber: transaction.invoice.invoiceNumber,
                status: transaction.invoice.status as 'PAID' | 'UNPAID' | 'PENDING',
                client: transaction.invoice.client ? {
                    name: transaction.invoice.client.name
                } : undefined
            } : null
        })

        return {
            product: formattedProduct,
            transaction: formattedTransaction
        }
    } catch (error) {
        console.error("Erreur réapprovisionnement:", error)
        throw error
    }
}

export async function deductStockWithTransaction(
    orderItems: OrderItem[], 
    email: string,
    destinationId?: string
): Promise<DeductStockResponse> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.$transaction(async (tx) => {
            for (const item of orderItems) {
                const product = await tx.product.findUnique({
                    where: { 
                        id: item.productId, 
                        entrepriseId: entreprise.id 
                    }
                })

                if (!product) {
                    throw new Error(`Produit ${item.productId} non trouvé`)
                }

                if (product.quantity < item.quantity) {
                    throw new Error(`Stock insuffisant pour ${product.name}. Disponible: ${product.quantity}, Demandé: ${item.quantity}`)
                }

                const subtotal = item.quantity * product.price

                await tx.product.update({
                    where: { 
                        id: item.productId, 
                        entrepriseId: entreprise.id 
                    },
                    data: { quantity: { decrement: item.quantity } }
                })

                await tx.transaction.create({
                    data: {
                        type: "SALE",
                        quantity: item.quantity,
                        price: product.price,
                        subtotal,
                        productId: item.productId,
                        entrepriseId: entreprise.id,
                        ...(destinationId && { destinationId })
                    }
                })
            }
            return { success: true }
        })
    } catch (error) {
        console.error("Erreur déduction stock:", error)
        return { 
            success: false, 
            message: error instanceof Error ? error.message : "Erreur inconnue" 
        }
    }
}

export async function getTransactions(
    email: string, 
    options?: {
        limit?: number
        filters?: TransactionFilters
    }
): Promise<Transaction[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const where: Prisma.TransactionWhereInput = {
            entrepriseId: entreprise.id,
        }

        if (options?.filters?.productId) {
            where.productId = options.filters.productId
        }

        if (options?.filters?.dateFrom) {
            where.createdAt = { gte: options.filters.dateFrom }
        }

        if (options?.filters?.dateTo) {
            where.createdAt = { lte: options.filters.dateTo }
        }

        if (options?.filters?.type) {
            where.type = options.filters.type
        }

        if (options?.filters?.invoiceStatus) {
            if (options.filters.invoiceStatus === 'NO_INVOICE') {
                where.invoiceId = null
            } else {
                where.invoice = {
                    status: options.filters.invoiceStatus
                }
            }
        }

        const transactions = await prisma.transaction.findMany({
            where,
            orderBy: { createdAt: "desc" },
            take: options?.limit,
            include: {
                product: { 
                    select: {
                        id: true,
                        name: true,
                        imageUrl: true,
                        unit: true,
                        category: { select: { name: true } }
                    }
                },
                destination: true,
                invoice: {
                    include: {
                        client: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        return transactions.map(tx => convertTransaction({
            id: tx.id,
            type: tx.type as 'SALE' | 'PURCHASE' | 'RETURN',
            quantity: tx.quantity,
            price: tx.price,
            subtotal: tx.subtotal,
            productId: tx.productId,
            entrepriseId: tx.entrepriseId,
            destinationId: tx.destinationId,
            invoiceId: tx.invoiceId,
            createdAt: tx.createdAt,
            categoryName: tx.product.category.name,
            productName: tx.product.name,
            imageUrl: tx.product.imageUrl,
            unit: tx.product.unit,
            destination: tx.destination,
            product: tx.product,
            invoice: tx.invoice ? {
                id: tx.invoice.id,
                invoiceNumber: tx.invoice.invoiceNumber,
                status: tx.invoice.status as 'PAID' | 'UNPAID' | 'PENDING',
                client: tx.invoice.client ? {
                    name: tx.invoice.client.name
                } : undefined
            } : null
        }))
    } catch (error) {
        console.error("Erreur récupération transactions:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES DESTINATIONS
// =============================================

export async function createDestination(name: string, email: string, description?: string): Promise<Destination> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.destination.create({
            data: {
                name,
                description: description || null,
                entrepriseId: entreprise.id
            }
        })
    } catch (error) {
        console.error("Erreur création destination:", error)
        throw error
    }
}

export async function readDestinations(email: string): Promise<Destination[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.destination.findMany({
            where: { entrepriseId: entreprise.id },
            orderBy: { name: 'asc' }
        })
    } catch (error) {
        console.error("Erreur lecture destinations:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES CLIENTS
// =============================================

export async function createClient(data: {
    name: string;
    email?: string;
    phone?: string;
    address: string;
}, email: string): Promise<Client> {
    try {
        console.log("🔄 Création client:", data)
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        if (!data.name.trim()) {
            throw new Error("Le nom du client est requis")
        }
        if (!data.address.trim()) {
            throw new Error("L'adresse du client est requise")
        }

        const client = await prisma.client.create({
            data: {
                name: data.name.trim(),
                email: data.email?.trim() || null,
                phone: data.phone?.trim() || null,
                address: data.address.trim(),
                entrepriseId: entreprise.id
            },
            include: {
                _count: {
                    select: {
                        invoices: true
                    }
                }
            }
        })

        console.log("✅ Client créé:", client.id)
        return convertClient(client) as Client
    } catch (error) {
        console.error("❌ Erreur création client:", error)
        throw error
    }
}

export async function updateClient(
    id: string, 
    data: {
        name: string;
        email?: string;
        phone?: string;
        address: string;
    }, 
    email: string
): Promise<Client> {
    try {
        console.log("🔄 Mise à jour client:", id, data)
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        if (!data.name.trim()) {
            throw new Error("Le nom du client est requis")
        }
        if (!data.address.trim()) {
            throw new Error("L'adresse du client est requise")
        }

        const existingClient = await prisma.client.findFirst({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            }
        })

        if (!existingClient) {
            throw new Error("Client non trouvé")
        }

        const client = await prisma.client.update({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            },
            data: {
                name: data.name.trim(),
                email: data.email?.trim() || null,
                phone: data.phone?.trim() || null,
                address: data.address.trim()
            },
            include: {
                _count: {
                    select: {
                        invoices: true
                    }
                }
            }
        })

        console.log("✅ Client mis à jour:", client.id)
        return convertClient(client) as Client
    } catch (error) {
        console.error("❌ Erreur mise à jour client:", error)
        throw error
    }
}

export async function deleteClient(id: string, email: string): Promise<Client> {
    try {
        console.log("🔄 Suppression client:", id)
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const clientInvoices = await prisma.invoice.count({
            where: { 
                clientId: id,
                entrepriseId: entreprise.id 
            }
        })

        if (clientInvoices > 0) {
            throw new Error("Impossible de supprimer ce client car il a des factures associées")
        }

        const client = await prisma.client.delete({
            where: { 
                id, 
                entrepriseId: entreprise.id 
            }
        })

        console.log("✅ Client supprimé:", client.id)
        return convertClient(client) as Client
    } catch (error) {
        console.error("❌ Erreur suppression client:", error)
        throw error
    }
}

export async function readClients(email: string): Promise<Client[]> {
    try {
        console.log("📥 Lecture clients pour:", email)
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const clients = await prisma.client.findMany({
            where: { entrepriseId: entreprise.id },
            orderBy: { name: 'asc' },
            include: {
                _count: {
                    select: {
                        invoices: true
                    }
                }
            }
        })

        console.log(`✅ ${clients.length} clients chargés`)
        return clients.map(convertClient) as Client[]
    } catch (error) {
        console.error("❌ Erreur lecture clients:", error)
        throw error
    }
}

export async function readClientById(clientId: string, email: string): Promise<Client | null> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const client = await prisma.client.findUnique({
            where: { 
                id: clientId, 
                entrepriseId: entreprise.id 
            },
            include: {
                _count: {
                    select: {
                        invoices: true
                    }
                }
            }
        })

        return client ? convertClient(client) as Client : null
    } catch (error) {
        console.error("Erreur lecture client:", error)
        throw error
    }
}

export async function getClientStats(email: string): Promise<ClientStats> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const clients = await prisma.client.findMany({
            where: { entrepriseId: entreprise.id },
            include: {
                _count: {
                    select: {
                        invoices: true
                    }
                }
            }
        })

        const stats: ClientStats = {
            totalClients: clients.length,
            clientsWithEmail: clients.filter(c => c.email && c.email.trim() !== '').length,
            clientsWithPhone: clients.filter(c => c.phone && c.phone.trim() !== '').length,
            clientsWithInvoices: clients.filter(c => (c._count?.invoices || 0) > 0).length
        }

        console.log("📊 Stats clients:", stats)
        return stats
    } catch (error) {
        console.error("❌ Erreur stats clients:", error)
        return {
            totalClients: 0,
            clientsWithEmail: 0,
            clientsWithPhone: 0,
            clientsWithInvoices: 0
        }
    }
}

export async function searchClients(
    email: string, 
    searchTerm: string,
    options?: { limit?: number }
): Promise<Client[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const clients = await prisma.client.findMany({
            where: {
                entrepriseId: entreprise.id,
                OR: [
                    { name: { contains: searchTerm } },
                    { email: { contains: searchTerm } },
                    { phone: { contains: searchTerm } },
                    { address: { contains: searchTerm } }
                ]
            },
            orderBy: { name: 'asc' },
            take: options?.limit || 50,
            include: {
                _count: {
                    select: {
                        invoices: true
                    }
                }
            }
        })

        return clients.map(convertClient) as Client[]
    } catch (error) {
        console.error("Erreur recherche clients:", error)
        throw error
    }
}

// =============================================
// FONCTIONS POUR LES FACTURES (CORRIGÉES)
// =============================================

export async function createInvoice(data: {
    invoiceNumber: string;
    clientId: string;
    subtotal: number;
    tva?: number;
    totalAmount: number;
    status?: 'PAID' | 'UNPAID' | 'PENDING';
    transactions?: {
        productId: string;
        quantity: number;
        price: number;
        type: 'SALE';
    }[];
}, email: string): Promise<Invoice> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        // ✅ VÉRIFICATION PRÉALABLE DES STOCKS
        if (data.transactions && data.transactions.length > 0) {
            console.log("🔍 Vérification des stocks avant création de facture...")
            
            const stockVerifications = await Promise.all(
                data.transactions.map(async (transactionData) => {
                    const product = await prisma.product.findUnique({
                        where: { 
                            id: transactionData.productId,
                            entrepriseId: entreprise.id
                        },
                        select: { 
                            id: true,
                            name: true, 
                            quantity: true,
                            unit: true
                        }
                    })
                    
                    return {
                        product,
                        transactionData,
                        isValid: product && product.quantity >= transactionData.quantity && transactionData.quantity > 0,
                        available: product?.quantity || 0,
                        requested: transactionData.quantity
                    }
                })
            )

            const stockErrors = stockVerifications.filter(v => !v.isValid)
            if (stockErrors.length > 0) {
                const errorMessages = stockErrors.map(se => 
                    `• "${se.product?.name || 'Produit inconnu'}": Disponible ${se.available} ${se.product?.unit || 'unité'}, Demandé ${se.requested}`
                )
                throw new Error(`STOCKS INSUFFISANTS:\n${errorMessages.join('\n')}`)
            }

            console.log("✅ Tous les stocks sont suffisants")
        }

        return await prisma.$transaction(async (tx) => {
            // ✅ DOUBLE VÉRIFICATION DANS LA TRANSACTION
            if (data.transactions && data.transactions.length > 0) {
                console.log("🔍 Double vérification des stocks dans la transaction...")
                
                for (const transactionData of data.transactions) {
                    const product = await tx.product.findUnique({
                        where: { 
                            id: transactionData.productId,
                            entrepriseId: entreprise.id
                        }
                    })

                    if (!product) {
                        throw new Error(`Produit "${transactionData.productId}" non trouvé`)
                    }

                    if (product.quantity < transactionData.quantity) {
                        throw new Error(
                            `Stock insuffisant pour "${product.name}". ` +
                            `Disponible: ${product.quantity} ${product.unit}, Demandé: ${transactionData.quantity}`
                        )
                    }

                    if (transactionData.quantity <= 0) {
                        throw new Error(`Quantité invalide pour "${product.name}": ${transactionData.quantity}`)
                    }
                }
            }

            // ✅ CRÉATION DE LA FACTURE
            console.log("📝 Création de la facture...")
            const invoice = await tx.invoice.create({
                data: {
                    invoiceNumber: data.invoiceNumber,
                    clientId: data.clientId,
                    subtotal: data.subtotal,
                    tva: data.tva || entreprise.tvaRate || 20,
                    totalAmount: data.totalAmount,
                    status: data.status || 'UNPAID',
                    entrepriseId: entreprise.id,
                    date: new Date()
                },
                include: {
                    client: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                            address: true
                        }
                    },
                    transactions: {
                        include: {
                            product: {
                                select: {
                                    name: true,
                                    reference: true,
                                    unit: true
                                }
                            }
                        }
                    }
                }
            })

            // ✅ CRÉATION DES TRANSACTIONS ET DÉDUCTION DES STOCKS
            if (data.transactions && data.transactions.length > 0) {
                console.log("🔄 Création des transactions et déduction des stocks...")
                
                for (const transactionData of data.transactions) {
                    // Créer la transaction
                    const transaction = await tx.transaction.create({
                        data: {
                            type: transactionData.type,
                            quantity: transactionData.quantity,
                            price: transactionData.price,
                            subtotal: transactionData.quantity * transactionData.price,
                            productId: transactionData.productId,
                            entrepriseId: entreprise.id,
                            invoiceId: invoice.id
                        }
                    })

                    console.log(`📦 Transaction créée: ${transaction.id}`)

                    // DÉDUIRE LE STOCK
                    const updatedProduct = await tx.product.update({
                        where: { 
                            id: transactionData.productId,
                            entrepriseId: entreprise.id
                        },
                        data: {
                            quantity: { decrement: transactionData.quantity }
                        },
                        select: {
                            id: true,
                            name: true,
                            quantity: true,
                            unit: true
                        }
                    })

                    console.log(`📊 Stock mis à jour: ${updatedProduct.name} → ${updatedProduct.quantity} ${updatedProduct.unit}`)

                    // ✅ VÉRIFICATION FINALE POUR ÉVITER LES STOCKS NÉGATIFS
                    if (updatedProduct.quantity < 0) {
                        throw new Error(`Stock négatif détecté pour "${updatedProduct.name}" après déduction`)
                    }
                }
            }

            console.log("✅ Facture créée avec succès:", invoice.invoiceNumber)
            
            return convertInvoice({
                ...invoice,
                clientName: invoice.client.name,
                transactionCount: invoice.transactions.length,
                client: invoice.client,
                transactions: invoice.transactions,
                tvaEnabled: invoice.tva > 0
            }) as Invoice
        })
    } catch (error) {
        console.error("❌ Erreur création facture:", error)
        
        // Messages d'erreur améliorés
        if (error instanceof Error) {
            if (error.message.includes('STOCKS INSUFFISANTS')) {
                throw new Error(`❌ ${error.message}`)
            }
            if (error.message.includes('Stock insuffisant')) {
                throw new Error(`❌ ${error.message}`)
            }
            if (error.message.includes('Produit non trouvé')) {
                throw new Error(`❌ ${error.message}`)
            }
            if (error.message.includes('Quantité invalide')) {
                throw new Error(`❌ ${error.message}`)
            }
            if (error.message.includes('Stock négatif')) {
                throw new Error(`❌ ${error.message}`)
            }
        }
        
        throw new Error("❌ Erreur lors de la création de la facture. Vérifiez les données et réessayez.")
    }
}

export async function updateInvoiceStatus(
    invoiceId: string, 
    status: 'PAID' | 'UNPAID' | 'PENDING', 
    email: string
): Promise<Invoice> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const invoice = await prisma.invoice.update({
            where: { 
                id: invoiceId, 
                entrepriseId: entreprise.id 
            },
            data: { status },
            include: {
                client: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        address: true
                    }
                },
                transactions: {
                    include: {
                        product: {
                            select: {
                                name: true,
                                reference: true,
                                unit: true
                            }
                        }
                    }
                }
            }
        })

        return convertInvoice({
            ...invoice,
            clientName: invoice.client.name,
            transactionCount: invoice.transactions.length,
            client: invoice.client,
            transactions: invoice.transactions,
            tvaEnabled: invoice.tva > 0
        }) as Invoice
    } catch (error) {
        console.error("Erreur mise à jour statut facture:", error)
        throw error
    }
}

export async function deleteInvoice(invoiceId: string, email: string): Promise<Invoice> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.$transaction(async (tx) => {
            const transactions = await tx.transaction.findMany({
                where: { 
                    invoiceId,
                    entrepriseId: entreprise.id 
                }
            })

            for (const transaction of transactions) {
                if (transaction.type === 'SALE') {
                    await tx.product.update({
                        where: { 
                            id: transaction.productId,
                            entrepriseId: entreprise.id
                        },
                        data: {
                            quantity: { increment: transaction.quantity }
                        }
                    })
                }
            }

            await tx.transaction.deleteMany({
                where: { 
                    invoiceId,
                    entrepriseId: entreprise.id 
                }
            })

            const invoice = await tx.invoice.delete({
                where: { 
                    id: invoiceId, 
                    entrepriseId: entreprise.id 
                },
                include: {
                    client: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            phone: true,
                            address: true
                        }
                    }
                }
            })

            return convertInvoice({
                ...invoice,
                clientName: invoice.client.name,
                transactionCount: 0,
                client: invoice.client,
                tvaEnabled: invoice.tva > 0
            }) as Invoice
        })
    } catch (error) {
        console.error("Erreur suppression facture:", error)
        throw error
    }
}

export async function readInvoices(
    email: string,
    filters?: InvoiceFilters
): Promise<InvoicesResponse> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const where: Prisma.InvoiceWhereInput = {
            entrepriseId: entreprise.id,
        }

        if (filters?.status) {
            where.status = filters.status
        }

        if (filters?.clientId) {
            where.clientId = filters.clientId
        }

        if (filters?.dateFrom) {
            where.date = { gte: filters.dateFrom }
        }

        if (filters?.dateTo) {
            where.date = { lte: filters.dateTo }
        }

        const totalCount = await prisma.invoice.count({ where })
        const limit = filters?.limit || 10
        const totalPages = Math.ceil(totalCount / limit)

        const invoices = await prisma.invoice.findMany({
            where,
            include: {
                client: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        address: true
                    }
                },
                transactions: {
                    include: {
                        product: {
                            select: {
                                name: true,
                                reference: true,
                                unit: true
                            }
                        }
                    }
                }
            },
            orderBy: { date: 'desc' },
            take: limit,
            skip: filters?.offset || 0
        })

        const formattedInvoices: Invoice[] = invoices.map(invoice => 
            convertInvoice({
                ...invoice,
                clientName: invoice.client.name,
                transactionCount: invoice.transactions.length,
                client: invoice.client,
                transactions: invoice.transactions,
                tvaEnabled: invoice.tva > 0
            })
        )

        return {
            invoices: formattedInvoices,
            totalCount,
            totalPages
        }
    } catch (error) {
        console.error("Erreur lecture factures:", error)
        throw error
    }
}

export async function readInvoiceById(invoiceId: string, email: string): Promise<InvoiceWithDetails | null> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const invoice = await prisma.invoice.findUnique({
            where: { 
                id: invoiceId, 
                entrepriseId: entreprise.id 
            },
            include: {
                client: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        phone: true,
                        address: true
                    }
                },
                transactions: {
                    include: {
                        product: {
                            include: {
                                category: {
                                    select: {
                                        name: true
                                    }
                                },
                                subCategory: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                },
                entreprise: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        address: true,
                        tvaRate: true
                    }
                }
            }
        })

        if (!invoice) return null

        return convertInvoiceWithDetails({
            ...invoice,
            clientName: invoice.client.name,
            transactionCount: invoice.transactions.length,
            tvaEnabled: invoice.tva > 0
        }) as InvoiceWithDetails
    } catch (error) {
        console.error("Erreur lecture facture:", error)
        throw error
    }
}

export async function addTransactionToInvoice(
    invoiceId: string,
    transactionData: {
        productId: string;
        quantity: number;
        price: number;
        type: 'SALE';
    },
    email: string
): Promise<Transaction> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        return await prisma.$transaction(async (tx) => {
            const invoice = await tx.invoice.findUnique({
                where: { 
                    id: invoiceId, 
                    entrepriseId: entreprise.id 
                }
            })

            if (!invoice) throw new Error("Facture non trouvée")

            const product = await tx.product.findUnique({
                where: { 
                    id: transactionData.productId,
                    entrepriseId: entreprise.id
                }
            })

            if (!product) throw new Error("Produit non trouvé")
            if (product.quantity < transactionData.quantity) {
                throw new Error(`Stock insuffisant pour ${product.name}. Disponible: ${product.quantity}, Demandé: ${transactionData.quantity}`)
            }

            const subtotal = transactionData.quantity * transactionData.price

            const transaction = await tx.transaction.create({
                data: {
                    type: transactionData.type,
                    quantity: transactionData.quantity,
                    price: transactionData.price,
                    subtotal,
                    productId: transactionData.productId,
                    entrepriseId: entreprise.id,
                    invoiceId: invoice.id
                },
                include: {
                    product: {
                        select: {
                            id: true,
                            name: true,
                            imageUrl: true,
                            unit: true,
                            category: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    destination: true,
                    invoice: {
                        include: {
                            client: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })

            await tx.product.update({
                where: { 
                    id: transactionData.productId,
                    entrepriseId: entreprise.id
                },
                data: {
                    quantity: { decrement: transactionData.quantity }
                }
            })

            const invoiceTransactions = await tx.transaction.findMany({
                where: { invoiceId: invoice.id }
            })

            const newSubtotal = invoiceTransactions.reduce((sum, tx) => sum + tx.subtotal, 0)
            const newTotalAmount = newSubtotal * (1 + (invoice.tva / 100))

            await tx.invoice.update({
                where: { 
                    id: invoice.id,
                    entrepriseId: entreprise.id
                },
                data: {
                    subtotal: newSubtotal,
                    totalAmount: newTotalAmount
                }
            })

            return convertTransaction({
                id: transaction.id,
                type: transaction.type as 'SALE' | 'PURCHASE' | 'RETURN',
                quantity: transaction.quantity,
                price: transaction.price,
                subtotal: transaction.subtotal,
                productId: transaction.productId,
                entrepriseId: transaction.entrepriseId,
                destinationId: transaction.destinationId,
                invoiceId: transaction.invoiceId,
                createdAt: transaction.createdAt,
                categoryName: transaction.product.category.name,
                productName: transaction.product.name,
                imageUrl: transaction.product.imageUrl,
                unit: transaction.product.unit,
                destination: transaction.destination,
                product: transaction.product,
                invoice: transaction.invoice ? {
                    id: transaction.invoice.id,
                    invoiceNumber: transaction.invoice.invoiceNumber,
                    status: transaction.invoice.status as 'PAID' | 'UNPAID' | 'PENDING',
                    client: transaction.invoice.client ? {
                        name: transaction.invoice.client.name
                    } : undefined
                } : null
            }) as Transaction
        })
    } catch (error) {
        console.error("Erreur ajout transaction à facture:", error)
        throw error
    }
}

export async function generateInvoiceNumber(email: string): Promise<string> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const lastInvoice = await prisma.invoice.findFirst({
            where: { entrepriseId: entreprise.id },
            orderBy: { createdAt: 'desc' },
            select: { invoiceNumber: true }
        })

        const now = new Date()
        const year = now.getFullYear()
        const month = String(now.getMonth() + 1).padStart(2, '0')

        if (!lastInvoice) {
            return `FACT-${year}${month}-001`
        }

        const lastNumber = parseInt(lastInvoice.invoiceNumber.split('-').pop() || '0')
        const newNumber = String(lastNumber + 1).padStart(3, '0')

        return `FACT-${year}${month}-${newNumber}`
    } catch (error) {
        console.error("Erreur génération numéro facture:", error)
        throw error
    }
}

export async function getInvoiceStats(email: string): Promise<InvoiceStats> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const [totalInvoices, paidInvoices, unpaidInvoices, totalRevenue] = await Promise.all([
            prisma.invoice.count({ where: { entrepriseId: entreprise.id } }),
            prisma.invoice.count({ 
                where: { 
                    entrepriseId: entreprise.id,
                    status: 'PAID' 
                } 
            }),
            prisma.invoice.count({ 
                where: { 
                    entrepriseId: entreprise.id,
                    status: 'UNPAID' 
                } 
            }),
            prisma.invoice.aggregate({
                where: { 
                    entrepriseId: entreprise.id,
                    status: 'PAID' 
                },
                _sum: { totalAmount: true }
            })
        ])

        return {
            totalInvoices,
            paidInvoices,
            unpaidInvoices,
            pendingInvoices: totalInvoices - paidInvoices - unpaidInvoices,
            totalRevenue: totalRevenue._sum.totalAmount || 0,
            paymentRate: totalInvoices > 0 ? (paidInvoices / totalInvoices) * 100 : 0
        }
    } catch (error) {
        console.error("Erreur stats factures:", error)
        return {
            totalInvoices: 0,
            paidInvoices: 0,
            unpaidInvoices: 0,
            pendingInvoices: 0,
            totalRevenue: 0,
            paymentRate: 0
        }
    }
}

// =============================================
// FONCTIONS POUR LES STATISTIQUES
// =============================================

export async function getProductOverviewStats(email: string): Promise<ProductOverviewStats> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const [totalProducts, totalCategories, totalTransactions, totalPriceResult] = await Promise.all([
            prisma.product.count({ where: { entrepriseId: entreprise.id } }),
            prisma.category.count({ where: { entrepriseId: entreprise.id } }),
            prisma.transaction.count({ where: { entrepriseId: entreprise.id } }),
            prisma.product.aggregate({
                where: { entrepriseId: entreprise.id },
                _sum: { price: true }
            })
        ])

        return {
            totalProducts,
            totalCategories,
            totalTransactions,
            totalPrice: totalPriceResult._sum.price || 0
        }
    } catch (error) {
        console.error("Erreur stats overview:", error)
        return {
            totalProducts: 0,
            totalCategories: 0,
            totalTransactions: 0,
            totalPrice: 0
        }
    }
}

export async function getProductCategoryDistribution(email: string): Promise<CategoryDistribution[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const categories = await prisma.category.findMany({
            where: { entrepriseId: entreprise.id },
            include: { 
                _count: { select: { products: true } },
                subCategories: {
                    include: {
                        _count: { select: { products: true } }
                    }
                }
            },
            orderBy: { name: 'asc' }
        })

        return categories.map(category => ({
            name: category.name,
            value: category._count.products,
            subCategories: category.subCategories.map(subCat => ({
                name: subCat.name,
                value: subCat._count.products
            }))
        }))
    } catch (error) {
        console.error("Erreur distribution catégories:", error)
        throw error
    }
}

export async function getStockSummary(email: string): Promise<StockSummary> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const products = await prisma.product.findMany({
            where: { entrepriseId: entreprise.id },
            include: { 
                category: {
                    select: {
                        name: true
                    }
                },
                subCategory: {
                    select: {
                        name: true
                    }
                }
            }
        })

        const IN_STOCK_MIN = 20
        const inStock = products.filter(p => p.quantity > IN_STOCK_MIN)
        const lowStock = products.filter(p => p.quantity > 0 && p.quantity <= IN_STOCK_MIN)
        const outOfStock = products.filter(p => p.quantity === 0)

        const criticalProducts: CriticalProduct[] = [...lowStock, ...outOfStock].map(p => ({
            id: p.id,
            name: p.name,
            quantity: p.quantity,
            categoryName: p.category?.name || "Non catégorisé",
            subCategoryName: p.subCategory?.name || "Non spécifiée",
            imageUrl: p.imageUrl,
            reference: p.reference || "N/A",
            price: p.price
        }))

        return {
            inStockCount: inStock.length,
            lowStockCount: lowStock.length,
            outOfStockCount: outOfStock.length,
            criticalProducts
        }
    } catch (error) {
        console.error("Erreur summary stock:", error)
        return {
            inStockCount: 0,
            lowStockCount: 0,
            outOfStockCount: 0,
            criticalProducts: []
        }
    }
}

// =============================================
// FONCTIONS POUR LES FACTURES DANS LES TRANSACTIONS
// =============================================

export async function getTransactionInvoiceStatus(
    transactionId: string, 
    email: string
): Promise<{ status: 'PAID' | 'UNPAID' | 'PENDING' | 'NO_INVOICE'; invoiceNumber?: string }> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const transaction = await prisma.transaction.findUnique({
            where: { 
                id: transactionId, 
                entrepriseId: entreprise.id 
            },
            include: {
                invoice: {
                    select: {
                        status: true,
                        invoiceNumber: true
                    }
                }
            }
        })

        if (!transaction) {
            throw new Error("Transaction non trouvée")
        }

        if (!transaction.invoice) {
            return { status: 'NO_INVOICE' }
        }

        return {
            status: transaction.invoice.status as 'PAID' | 'UNPAID' | 'PENDING',
            invoiceNumber: transaction.invoice.invoiceNumber
        }
    } catch (error) {
        console.error("Erreur récupération statut facture:", error)
        throw error
    }
}

export async function getTransactionsByInvoiceStatus(
    email: string,
    invoiceStatus: 'PAID' | 'UNPAID' | 'PENDING',
    options?: {
        limit?: number
    }
): Promise<Transaction[]> {
    try {
        const entreprise = await getEntreprise(email)
        if (!entreprise) throw new Error("Entreprise non trouvée")

        const transactions = await prisma.transaction.findMany({
            where: {
                entrepriseId: entreprise.id,
                invoice: {
                    status: invoiceStatus
                }
            },
            orderBy: { createdAt: "desc" },
            take: options?.limit,
            include: {
                product: { 
                    select: {
                        id: true,
                        name: true,
                        imageUrl: true,
                        unit: true,
                        category: { select: { name: true } }
                    }
                },
                destination: true,
                invoice: {
                    include: {
                        client: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        return transactions.map(tx => convertTransaction({
            id: tx.id,
            type: tx.type as 'SALE' | 'PURCHASE' | 'RETURN',
            quantity: tx.quantity,
            price: tx.price,
            subtotal: tx.subtotal,
            productId: tx.productId,
            entrepriseId: tx.entrepriseId,
            destinationId: tx.destinationId,
            invoiceId: tx.invoiceId,
            createdAt: tx.createdAt,
            categoryName: tx.product.category.name,
            productName: tx.product.name,
            imageUrl: tx.product.imageUrl,
            unit: tx.product.unit,
            destination: tx.destination,
            product: tx.product,
            invoice: tx.invoice ? {
                id: tx.invoice.id,
                invoiceNumber: tx.invoice.invoiceNumber,
                status: tx.invoice.status as 'PAID' | 'UNPAID' | 'PENDING',
                client: tx.invoice.client ? {
                    name: tx.invoice.client.name
                } : undefined
            } : null
        })) as Transaction[]
    } catch (error) {
        console.error("Erreur récupération transactions par statut facture:", error)
        throw error
    }
}

export async function updateInvoice(
  invoiceId: string,
  data: {
    invoiceNumber: string;
    clientId: string;
    subtotal: number;
    tva: number;
    totalAmount: number;
    status: "PAID" | "UNPAID" | "PENDING";
    transactions: Array<{
      productId: string;
      quantity: number;
      price: number;
      type: "SALE";
    }>;
  },
  email: string
): Promise<Invoice> {
  try {
    console.log("🔄 Mise à jour facture:", invoiceId, data);
    
    const entreprise = await getEntreprise(email);
    if (!entreprise) throw new Error("Entreprise non trouvée");

    // Vérifier que la facture existe et appartient à l'entreprise
    const existingInvoice = await prisma.invoice.findFirst({
      where: {
        id: invoiceId,
        entrepriseId: entreprise.id,
      },
      include: {
        transactions: {
          include: {
            product: true
          }
        },
      },
    });

    if (!existingInvoice) {
      throw new Error("Facture non trouvée");
    }

    // Commencer une transaction pour garantir l'intégrité des données
    return await prisma.$transaction(async (tx) => {
      // 1. Calculer la différence de stock pour chaque produit
      const stockChanges: { [productId: string]: number } = {};

      // Initialiser avec les anciennes transactions (on va restaurer ce stock)
      for (const oldTransaction of existingInvoice.transactions) {
        if (oldTransaction.type === "SALE") {
          stockChanges[oldTransaction.productId] = 
            (stockChanges[oldTransaction.productId] || 0) + oldTransaction.quantity;
        }
      }

      // Soustraire les nouvelles transactions (on va déduire ce stock)
      for (const newTransaction of data.transactions) {
        stockChanges[newTransaction.productId] = 
          (stockChanges[newTransaction.productId] || 0) - newTransaction.quantity;
      }

      // 2. Vérifier le stock disponible pour chaque produit
      for (const [productId, netChange] of Object.entries(stockChanges)) {
        if (netChange < 0) { // Si on doit déduire du stock
          const product = await tx.product.findUnique({
            where: {
              id: productId,
              entrepriseId: entreprise.id,
            },
          });

          if (!product) {
            throw new Error(`Produit ${productId} non trouvé`);
          }

          const availableStock = product.quantity;
          const requiredStock = Math.abs(netChange);
          
          if (availableStock < requiredStock) {
            throw new Error(
              `Stock insuffisant pour ${product.name}. Disponible: ${availableStock}, Demandé: ${requiredStock}`
            );
          }
        }
      }

      // 3. Mettre à jour les stocks
      for (const [productId, netChange] of Object.entries(stockChanges)) {
        if (netChange !== 0) {
          await tx.product.update({
            where: {
              id: productId,
              entrepriseId: entreprise.id,
            },
            data: {
              quantity: {
                increment: netChange // netChange peut être positif (ajout) ou négatif (déduction)
              },
            },
          });
        }
      }

      // 4. Supprimer les anciennes transactions
      await tx.transaction.deleteMany({
        where: {
          invoiceId: invoiceId,
        },
      });

      // 5. Mettre à jour la facture
      const updatedInvoice = await tx.invoice.update({
        where: {
          id: invoiceId,
        },
        data: {
          invoiceNumber: data.invoiceNumber,
          clientId: data.clientId,
          subtotal: data.subtotal,
          tva: data.tva,
          totalAmount: data.totalAmount,
          status: data.status,
          updatedAt: new Date(),
        },
      });

      // 6. Créer les nouvelles transactions
      for (const transactionData of data.transactions) {
        await tx.transaction.create({
          data: {
            invoiceId: invoiceId,
            productId: transactionData.productId,
            quantity: transactionData.quantity,
            price: transactionData.price,
            type: transactionData.type,
            subtotal: transactionData.quantity * transactionData.price,
            entrepriseId: entreprise.id,
          },
        });
      }

      // 7. Récupérer la facture complète avec toutes les relations après mise à jour
      const completeInvoice = await tx.invoice.findUnique({
        where: {
          id: invoiceId,
        },
        include: {
          client: {
            select: {
              id: true,
              name: true,
              email: true,
              phone: true,
              address: true,
            },
          },
          transactions: {
            include: {
              product: {
                include: {
                  category: {
                    select: {
                      name: true,
                    },
                  },
                  subCategory: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
          entreprise: {
            select: {
              id: true,
              name: true,
              email: true,
              address: true,
              tvaRate: true,
            },
          },
        },
      });

      if (!completeInvoice) {
        throw new Error("Erreur lors de la récupération de la facture mise à jour");
      }

      console.log("✅ Facture mise à jour avec succès:", invoiceId);
      
      return convertInvoice({
        ...completeInvoice,
        clientName: completeInvoice.client.name,
        transactionCount: completeInvoice.transactions.length,
        client: completeInvoice.client,
        transactions: completeInvoice.transactions,
        tvaEnabled: completeInvoice.tva > 0,
      }) as Invoice;
    });
  } catch (error) {
    console.error("❌ Erreur mise à jour facture:", error);
    
    if (error instanceof Error) {
      throw new Error(`Échec de la mise à jour de la facture: ${error.message}`);
    }
    
    throw new Error("Échec de la mise à jour de la facture: erreur inconnue");
  }
}