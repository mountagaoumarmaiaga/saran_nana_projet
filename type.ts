// types/index.ts

// =============================================
// TYPES DE BASE
// =============================================

export interface FormDataType {
  id?: string;
  name: string;
  description: string;
  imageUrl?: string;
  categoryId: string;
  subCategoryId?: string;
  unit: string;
  reference?: string;
  price: number;
  quantity?: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price?: number;
}

// =============================================
// TYPES POUR LES PRODUITS
// =============================================

export interface Product {
  id: string;
  reference?: string | null;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  price: number;
  purchasePrice?: number
  imageUrl: string;
  categoryId: string;
  subCategoryId?: string | null;
  entrepriseId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  categoryName?: string;
  subCategoryName?: string;
  category?: {
    id: string;
    name: string;
    description?: string | null;
  } | null;
  subCategory?: {
    id: string;
    name: string;
    description?: string | null;
  } | null;
}

// =============================================
// TYPES POUR LES CATÉGORIES
// =============================================

export interface CategoryWithSub {
  id: string;
  name: string;
  description?: string | null;
  entrepriseId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  subCategories: {
    id: string;
    name: string;
    description?: string | null;
    categoryId: string;
    entrepriseId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: {
      products: number;
    };
  }[];
  _count: {
    products: number;
  };
}

export interface SubCategoryWithCount {
  id: string;
  name: string;
  description?: string | null;
  categoryId: string;
  entrepriseId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    products: number;
  };
  category?: {   // ✅ RENDUE OPTIONNELLE
    id: string;
    name: string;
    description?: string | null;
  };
}


// =============================================
// TYPES POUR LES TRANSACTIONS
// =============================================

export interface Transaction {
  id: string;
  type: 'SALE' | 'PURCHASE' | 'RETURN';
  quantity: number;
  price: number;
  subtotal: number;
  productId: string;
  entrepriseId?: string | null;
  destinationId?: string | null;
  invoiceId?: string | null;
  createdAt: Date;
  categoryName?: string;
  purchasePrice?: number
  productName?: string;
  imageUrl?: string;
  unit?: string;
  destination?: {
    id: string;
    name: string;
    description?: string | null;
    entrepriseId?: string | null;
  } | null;
  product?: {
    id: string;
    name: string;
    imageUrl: string;
    unit: string;
    category: {
      name: string;
    };
  } | null;
  invoice?: {
    id: string;
    invoiceNumber: string;
    status: 'PAID' | 'UNPAID' | 'PENDING';
    client?: {
      name: string;
    };
  } | null;
}

// Type spécial pour les transactions dans les détails de facture
export interface InvoiceTransaction {
  id: string;
  type: 'SALE' | 'PURCHASE' | 'RETURN';
  quantity: number;
  price: number;
  subtotal: number;
  productId: string;
  product: {
    id: string;
    name: string;
    reference?: string | null;
    unit: string;
    category: {
      name: string;
    };
    subCategory?: {
      name: string;
    } | null;
  };
}

// =============================================
// TYPES POUR LES FACTURES
// =============================================

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  subtotal: number;
  tva: number;
  tvaEnabled: boolean;
  totalAmount: number;
  status: 'PAID' | 'UNPAID' | 'PENDING';
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  transactionCount: number;
  client?: {
    id: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    address: string;
  };
  transactions?: Transaction[];
}

export interface InvoiceWithDetails {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  subtotal: number;
  tva: number;
  tvaEnabled: boolean;
  totalAmount: number;
  status: 'PAID' | 'UNPAID' | 'PENDING';
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  transactionCount: number;
  clientEmail?: string | null;
  clientAddress: string;
  clientPhone?: string | null;
  client?: {
    id: string;
    name: string;
    email?: string | null;
    phone?: string | null;
    address: string;
  };
  transactions: InvoiceTransaction[];
  entreprise?: {
    id: string;
    name: string;
    email: string | null;
    address: string | null;
    tvaRate: number;
  } | null;
}

export interface InvoiceFormData {
  invoiceNumber: string;
  clientId: string;
  subtotal: number;
  tva: number;
  tvaEnabled: boolean;
  totalAmount: number;
  status: 'PAID' | 'UNPAID' | 'PENDING';
  transactions: Array<{
    productId: string;
    quantity: number;
    price: number;
    type: 'SALE';
  }>;
}

export interface InvoiceStats {
  totalInvoices: number;
  paidInvoices: number;
  unpaidInvoices: number;
  pendingInvoices: number;
  totalRevenue: number;
  paymentRate: number;
}

export interface InvoicesResponse {
  invoices: Invoice[];
  totalCount: number;
  totalPages: number;
}

// =============================================
// TYPES POUR LES RÉPONSES DES ACTIONS
// =============================================

export interface ProductsResponse {
  products: Product[];
  totalCount: number;
  totalPages: number;
}

export interface DeductStockResponse {
  success: boolean;
  message?: string;
}

export interface ReplenishStockResponse {
  product: Product;
  transaction: Transaction;
}

// =============================================
// TYPES POUR LES FILTRES
// =============================================

export interface ProductFilters {
  searchName?: string;
  categoryId?: string;
  subCategoryId?: string;
  reference?: string;
  limit?: number;
  offset?: number;
}

export interface TransactionFilters {
  productId?: string;
  dateFrom?: Date;
  dateTo?: Date;
  type?: 'SALE' | 'PURCHASE' | 'RETURN';
  limit?: number;
  invoiceStatus?: 'PAID' | 'UNPAID' | 'PENDING' | 'NO_INVOICE';
}

export interface InvoiceFilters {
  status?: 'PAID' | 'UNPAID' | 'PENDING';
  clientId?: string;
  dateFrom?: Date;
  dateTo?: Date;
  limit?: number;
  offset?: number;
}

// =============================================
// TYPES POUR LES STATISTIQUES
// =============================================

export interface ProductOverviewStats {
  totalProducts: number;
  totalCategories: number;
  totalTransactions: number;
  totalPrice: number;
}

export interface StockSummary {
  inStockCount: number;
  lowStockCount: number;
  outOfStockCount: number;
  criticalProducts: CriticalProduct[];
}

export interface CriticalProduct {
  id: string;
  name: string;
  quantity: number;
  categoryName: string;
  subCategoryName: string;
  imageUrl: string;
  reference: string;
  price: number;
}

export interface CategoryDistribution {
  name: string;
  value: number;
  subCategories: Array<{
    name: string;
    value: number;
  }>;
}

// =============================================
// TYPES POUR LES CLIENTS ET DESTINATIONS
// =============================================

export interface Client {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  address: string;
  entrepriseId: string;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    invoices: number;
  };
  invoices?: Invoice[];
}

export interface ClientStats {
  totalClients: number;
  clientsWithEmail: number;
  clientsWithPhone: number;
  clientsWithInvoices: number;
}

export interface Destination {
  id: string;
  name: string;
  description?: string | null;
  entrepriseId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// =============================================
// TYPES POUR L'ENTREPRISE
// =============================================

export interface Entreprise {
  id: string;
  name: string;
  email?: string | null;
  address?: string | null;
  tvaRate: number;
  createdAt: Date;
  updatedAt: Date;
}