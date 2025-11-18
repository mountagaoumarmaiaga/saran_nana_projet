"use client"

import { OrderItem, Product, Destination, Client } from '@/type'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState, useCallback } from 'react'
import { 
  deductStockWithTransaction, 
  readProducts, 
  readClients, 
  createInvoice, 
  generateInvoiceNumber,
  readDestinations,
  createDestination 
} from '../actions'
import Wrapper from '../components/Wrapper'
import ProductComponent from '../components/ProductComponent'
import EmptyState from '../components/EmptyState'
import ProductImage from '../components/ProductImage'
import { Trash, Plus, X, ChevronLeft, ChevronRight, Search,  FileText, AlertTriangle } from 'lucide-react'
import { toast } from 'react-toastify'

const DESTINATIONS_PER_PAGE = 5;
const PRODUCTS_PER_PAGE = 10;

type DeductStockResponse = {
    success: boolean;
    message?: string;
    transactionIds?: string[];
};

// Étendre localement le type OrderItem pour ce composant
interface ExtendedOrderItem extends OrderItem {
  imageUrl?: string;
  name?: string;
  unit?: string;
  availableQuantity?: number;
  price?: number;
}

const Page = () => {
    const { user } = useUser()
    const email = user?.primaryEmailAddress?.emailAddress as string

    // États produits
    const [allProducts, setAllProducts] = useState<Product[]>([])
    const [order, setOrder] = useState<ExtendedOrderItem[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedProductIds, setSelectedProductIds] = useState<string[]>([])
    const [currentProductPage, setCurrentProductPage] = useState(1)
    const [totalProductPages, setTotalProductPages] = useState(1)
    const [isLoadingProducts, setIsLoadingProducts] = useState(false)
    const [totalProductsCount, setTotalProductsCount] = useState(0)

    // États destinations
    const [destinations, setDestinations] = useState<Destination[]>([])
    const [selectedDestinationId, setSelectedDestinationId] = useState("")
    const [manualDestination, setManualDestination] = useState("")
    const [destinationSearch, setDestinationSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    // États création destination
    const [newDestinationName, setNewDestinationName] = useState("")
    const [newDestinationDesc, setNewDestinationDesc] = useState("")
    const [showAddDestination, setShowAddDestination] = useState(false)

    // États facturation
    const [clients, setClients] = useState<Client[]>([])
    const [showInvoiceOptions, setShowInvoiceOptions] = useState(false)
    const [selectedClientId, setSelectedClientId] = useState("")
    const [createInvoiceAfterOutput, setCreateInvoiceAfterOutput] = useState(false)
  
    const [isLoading, setIsLoading] = useState(false)
    const [processingProducts, setProcessingProducts] = useState<Set<string>>(new Set())

    // Chargement des données
    const fetchData = useCallback(async (productPage = 1) => {
        try {
            if (!email) return;

            setIsLoadingProducts(true);

            const offset = (productPage - 1) * PRODUCTS_PER_PAGE;

            const [productsRes, destinationsRes, clientsRes] = await Promise.all([
                readProducts(email, {
                    limit: PRODUCTS_PER_PAGE,
                    offset: offset
                }),
                readDestinations(email),
                readClients(email)
            ]);

            if (productsRes && productsRes.products) {
                setAllProducts(productsRes.products);
                setTotalProductPages(productsRes.totalPages);
                setTotalProductsCount(productsRes.totalCount);
            }
            
            if (destinationsRes && Array.isArray(destinationsRes)) {
                setDestinations(destinationsRes);
            }

            if (clientsRes && Array.isArray(clientsRes)) {
                setClients(clientsRes);
            }
        } catch (error) {
            console.error("Erreur de chargement des données:", error);
            toast.error("Erreur de chargement des données");
        } finally {
            setIsLoadingProducts(false);
        }
    }, [email]);

    // Chargement initial
    useEffect(() => {
        fetchData(1);
    }, [fetchData]);

    // Recharger les produits quand la page change
    useEffect(() => {
        fetchData(currentProductPage);
    }, [currentProductPage, fetchData]);

    // FONCTIONS DE VALIDATION AMÉLIORÉES
    const validateStockBeforeSubmit = (products: Product[]): string[] => {
        const errors: string[] = [];
        
        order.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            if (!product) {
                errors.push(`Produit non trouvé: ${item.productId}`);
            } else if (item.quantity <= 0) {
                errors.push(`${product.name}: Quantité invalide (${item.quantity})`);
            } else if (product.quantity < item.quantity) {
                errors.push(
                    `${product.name}: Stock insuffisant! ` +
                    `Disponible: ${product.quantity}, Demandé: ${item.quantity}`
                );
            }
        });
        
        return errors;
    };

    const hasInsufficientStock = (): boolean => {
        return order.some(item => {
            const product = allProducts.find(p => p.id === item.productId);
            return product && item.quantity > product.quantity;
        });
    };

    // Fonctions de gestion des produits
    const handleAddToCart = (product: Product) => {
        // Vérifier le stock avant d'ajouter
        if (product.quantity <= 0) {
            toast.error(`❌ ${product.name} est en rupture de stock`);
            return;
        }

        setOrder(prev => {
            const existing = prev.find(item => item.productId === product.id);
            
            // Vérifier si la nouvelle quantité totale dépasse le stock
            const newQuantity = existing ? existing.quantity + 1 : 1;
            if (newQuantity > product.quantity) {
                toast.error(`❌ Stock insuffisant pour ${product.name}. Disponible: ${product.quantity}`);
                return prev;
            }
            
            return existing
                ? prev.map(item =>
                    item.productId === product.id
                        ? { ...item, quantity: newQuantity }
                        : item
                )
                : [
                    ...prev,
                    {
                        productId: product.id,
                        quantity: 1,
                        unit: product.unit,
                        imageUrl: product.imageUrl,
                        name: product.name,
                        availableQuantity: product.quantity,
                        price: product.price
                    }
                ];
        });
        setSelectedProductIds(prev =>
            prev.includes(product.id) ? prev : [...prev, product.id]
        );
    };

    const handleQuantityChange = (productId: string, quantity: number | '') => {
        if (quantity === '') {
            setOrder(prev => prev.map(item =>
                item.productId === productId
                    ? { ...item, quantity: 0 }
                    : item
            ));
        } else {
            const product = allProducts.find(p => p.id === productId);
            const maxQuantity = product ? product.quantity : 0;
            const newQuantity = Math.max(1, Math.min(quantity, maxQuantity));
            
            setOrder(prev => prev.map(item =>
                item.productId === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            ));
        }
    };

    const handleRemoveFromCart = (productId: string) => {
        setOrder(prev => prev.filter(item => item.productId !== productId));
        setSelectedProductIds(prev => prev.filter(id => id !== productId));
    };

    // Fonctions de gestion des destinations
    const handleAddDestination = async () => {
        if (!newDestinationName.trim()) {
            toast.error("Le nom est obligatoire");
            return;
        }

        try {
            const newDest = await createDestination(
                newDestinationName,
                email,
                newDestinationDesc
            );
            
            setDestinations(prev => [...prev, newDest]);
            setSelectedDestinationId(newDest.id);
            setNewDestinationName("");
            setNewDestinationDesc("");
            setShowAddDestination(false);
            toast.success("Destination créée");
        } catch (error) {
            console.error(error);
            toast.error(error instanceof Error ? error.message : "Erreur de création");
        }
    };

    // Créer une facture après la sortie
    const handleCreateInvoice = async () => {
        if (!selectedClientId) {
            toast.error("Veuillez sélectionner un client");
            return;
        }

        try {
            const invoiceNumber = await generateInvoiceNumber(email);
            
            // Calculer les totaux
            const subtotal = order.reduce((sum, item) => {
                const product = allProducts.find(p => p.id === item.productId);
                return sum + (item.quantity * (product?.price || 0));
            }, 0);

            const tvaRate = 20;
            const totalAmount = subtotal * (1 + tvaRate / 100);

            // Créer la facture avec les transactions
            await createInvoice({
                invoiceNumber,
                clientId: selectedClientId,
                subtotal,
                tva: tvaRate,
                totalAmount,
                status: 'UNPAID',
                transactions: order.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price || allProducts.find(p => p.id === item.productId)?.price || 0,
                    type: 'SALE' as const
                }))
            }, email);

            toast.success(`✅ Facture ${invoiceNumber} créée avec succès`);
            setShowInvoiceOptions(false);
            setCreateInvoiceAfterOutput(false);
            setSelectedClientId("");

            // Réinitialiser le panier
            setOrder([]);
            setSelectedProductIds([]);
            setSelectedDestinationId("");
            setManualDestination("");
            fetchData(currentProductPage);

        } catch (error) {
            console.error("Erreur création facture:", error);
            toast.error("❌ Erreur lors de la création de la facture");
        }
    };

    // Soumission de la commande - VERSION CORRIGÉE
    const handleSubmit = async () => {
        // Empêcher les doublons
        const productIds = order.map(item => item.productId);
        if (productIds.some(id => processingProducts.has(id))) {
            toast.error("⏳ Opération déjà en cours sur certains produits");
            return;
        }

        // Ajouter aux produits en traitement
        setProcessingProducts(prev => new Set([...prev, ...productIds]));
        setIsLoading(true);

        try {
            if (order.length === 0) {
                toast.error("❌ Ajoutez des produits");
                return;
            }

            // 1. Recharger les produits POUR AVOIR LES STOCKS ACTUALISÉS
            console.log("🔄 Rechargement des stocks avant validation...");
            const freshProductsResult = await readProducts(email, { limit: 1000 });
            if (!freshProductsResult || !freshProductsResult.products) {
                throw new Error("Erreur lors du rechargement des produits");
            }

            const freshProducts = freshProductsResult.products;
            setAllProducts(freshProducts); // Mettre à jour l'état local

            // 2. Validation avec les données fraîches
            const validationErrors = validateStockBeforeSubmit(freshProducts);
            if (validationErrors.length > 0) {
                validationErrors.forEach(error => toast.error(error));
                return;
            }

            // 3. Vérification finale des stocks
            if (hasInsufficientStock()) {
                toast.error("❌ Certains produits n'ont pas assez de stock après vérification");
                return;
            }

            // 4. Vérification destination
            let finalDestinationId = selectedDestinationId;
            if (!finalDestinationId && manualDestination) {
                const newDest = await createDestination(
                    manualDestination,
                    email
                );
                finalDestinationId = newDest.id;
                setDestinations(prev => [...prev, newDest]);
            }

            if (!finalDestinationId) {
                toast.error("❌ Sélectionnez ou saisissez une destination");
                return;
            }

            // 5. Appel à l'API
            console.log("📤 Appel à deductStockWithTransaction...");
            const response = await deductStockWithTransaction(
                order,
                email,
                finalDestinationId
            ) as DeductStockResponse;

            if (response?.success) {
                toast.success("✅ Sortie enregistrée avec succès!");
                
                // Si l'utilisateur veut créer une facture
                if (createInvoiceAfterOutput) {
                    setShowInvoiceOptions(true);
                } else {
                    // Réinitialiser le panier
                    setOrder([]);
                    setSelectedProductIds([]);
                    setSelectedDestinationId("");
                    setManualDestination("");
                    fetchData(currentProductPage);
                }
            } else {
                throw new Error(response?.message ?? "Erreur lors de la sortie du stock");
            }
        } catch (error) {
            console.error("❌ Erreur complète:", error);
            toast.error(`❌ ${error instanceof Error ? error.message : "Erreur inconnue"}`);
        } finally {
            setIsLoading(false);
            // Retirer des produits en traitement
            setProcessingProducts(prev => {
                const newSet = new Set(prev);
                productIds.forEach(id => newSet.delete(id));
                return newSet;
            });
        }
    };

    // Filtres
    const filteredProducts = allProducts
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(p => !selectedProductIds.includes(p.id));

    const filteredDestinations = destinations
        .filter(d =>
            d.name.toLowerCase().includes(destinationSearch.toLowerCase()) ||
            (d.description && d.description.toLowerCase().includes(destinationSearch.toLowerCase()))
        );

    // Pagination des destinations
    const paginatedDestinations = filteredDestinations.slice(
        (currentPage - 1) * DESTINATIONS_PER_PAGE,
        currentPage * DESTINATIONS_PER_PAGE
    );

    return (
        <Wrapper>
            <div className='flex md:flex-row flex-col-reverse gap-4'>
                {/* Colonne produits */}
                <div className='md:w-1/3'>
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder='Rechercher un produit...'
                            className='input input-bordered w-full pl-10'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Info sur le nombre de produits */}
                    <div className="text-sm text-gray-500 mb-2">
                        {totalProductsCount} produits au total • Page {currentProductPage}/{totalProductPages}
                    </div>

                    <div className='space-y-4 mb-4 max-h-[calc(100vh-250px)] overflow-y-auto'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductComponent
                                    key={product.id}
                                    product={product}
                                    add={true}
                                    handleAddToCart={handleAddToCart}
                                />
                            ))
                        ) : (
                            <EmptyState
                                message='Aucun produit disponible'
                                IconComponent='PackageSearch'
                            />
                        )}

                        {isLoadingProducts && (
                            <div className="flex justify-center py-4">
                                <span className="loading loading-spinner loading-md"></span>
                            </div>
                        )}
                    </div>

                    {/* PAGINATION VISIBLE */}
                    {(totalProductPages > 1 || totalProductsCount > PRODUCTS_PER_PAGE) && (
                        <div className="bg-base-200 p-4 rounded-lg mt-4">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="text-sm font-medium">
                                    {totalProductsCount} produits • Page {currentProductPage} sur {totalProductPages}
                                </div>

                                {totalProductPages > 1 && (
                                    <div className="flex justify-center mt-4">
                                        <div className="join">
                                            {/* Première page */}
                                            <button
                                                className="join-item btn btn-sm"
                                                onClick={() => setCurrentProductPage(1)}
                                                disabled={currentProductPage === 1 || isLoadingProducts}
                                            >
                                                «
                                            </button>

                                            {/* Précédent */}
                                            <button
                                                className="join-item btn btn-sm"
                                                onClick={() => setCurrentProductPage((p) => Math.max(1, p - 1))}
                                                disabled={currentProductPage === 1 || isLoadingProducts}
                                            >
                                                <ChevronLeft size={16} />
                                            </button>

                                            {/* Numéro de page actif */}
                                            <button className="join-item btn btn-sm btn-primary">
                                                {currentProductPage} / {totalProductPages}
                                            </button>

                                            {/* Suivant */}
                                            <button
                                                className="join-item btn btn-sm"
                                                onClick={() => setCurrentProductPage((p) => Math.min(totalProductPages, p + 1))}
                                                disabled={currentProductPage === totalProductPages || isLoadingProducts}
                                            >
                                                <ChevronRight size={16} />
                                            </button>

                                            {/* Dernière page */}
                                            <button
                                                className="join-item btn btn-sm"
                                                onClick={() => setCurrentProductPage(totalProductPages)}
                                                disabled={currentProductPage === totalProductPages || isLoadingProducts}
                                            >
                                                »
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {totalProductPages === 1 && totalProductsCount > PRODUCTS_PER_PAGE && (
                                    <div className="text-warning text-sm">
                                        ⚠️ Tous les produits sont affichés sur une seule page
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Colonne commande */}
                <div className='md:w-2/3 p-4 h-fit border-2 border-base-200 rounded-3xl'>
                    {order.length > 0 ? (
                        <>
                            <h2 className="text-xl font-bold mb-4">Sortie de stock</h2>

                            {/* VÉRIFICATION DES STOCKS EN TEMPS RÉEL */}
                            <div className="bg-base-200 p-4 rounded-lg mb-4">
                                <h4 className="font-bold mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Vérification des stocks
                                </h4>
                                {order.map(item => {
                                    const product = allProducts.find(p => p.id === item.productId);
                                    const isOk = product && product.quantity >= item.quantity;
                                    const isLow = product && product.quantity < item.quantity * 1.5;
                                    
                                    return (
                                        <div key={item.productId} className={`flex justify-between items-center p-2 rounded mb-1 ${isOk ? isLow ? 'bg-warning/20' : 'bg-success/20' : 'bg-error/20'}`}>
                                            <span className="font-medium">{product?.name || 'Produit'}</span>
                                            <span className={isOk ? isLow ? 'text-warning' : 'text-success' : 'text-error'}>
                                                {product ? `${item.quantity} / ${product.quantity}` : 'Produit non trouvé'}
                                                {!isOk && product && ` (déficit: ${item.quantity - product.quantity})`}
                                                {isLow && isOk && ' ⚠️'}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Sélection destination */}
                            <div className="mb-6 space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            placeholder="Rechercher une destination..."
                                            className="input input-bordered pl-10 w-full"
                                            value={destinationSearch}
                                            onChange={(e) => {
                                                setDestinationSearch(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                        />
                                    </div>
                                    <button
                                        onClick={() => setShowAddDestination(!showAddDestination)}
                                        className="btn btn-square"
                                    >
                                        {showAddDestination ? <X size={20} /> : <Plus size={20} />}
                                    </button>
                                </div>

                                {showAddDestination && (
                                    <div className="bg-base-200 p-4 rounded-lg">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Nouvelle destination</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Nom*"
                                                className="input input-bordered"
                                                value={newDestinationName}
                                                onChange={(e) => setNewDestinationName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="form-control mt-2">
                                            <input
                                                type="text"
                                                placeholder="Description"
                                                className="input input-bordered"
                                                value={newDestinationDesc}
                                                onChange={(e) => setNewDestinationDesc(e.target.value)}
                                            />
                                        </div>
                                        <button
                                            onClick={handleAddDestination}
                                            className="btn btn-primary mt-2 w-full"
                                        >
                                            Ajouter
                                        </button>
                                    </div>
                                )}

                                <select
                                    className="select select-bordered w-full"
                                    value={selectedDestinationId}
                                    onChange={(e) => {
                                        setSelectedDestinationId(e.target.value)
                                        setManualDestination("")
                                    }}
                                >
                                    <option value="">Sélectionnez une destination</option>
                                    {paginatedDestinations.map((dest) => (
                                        <option key={dest.id} value={dest.id}>
                                            {dest.name} {dest.description && `(${dest.description})`}
                                        </option>
                                    ))}
                                </select>

                                {filteredDestinations.length > DESTINATIONS_PER_PAGE && (
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="btn btn-sm"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <span className="flex items-center px-4">
                                            Page {currentPage} sur {Math.ceil(filteredDestinations.length / DESTINATIONS_PER_PAGE)}
                                        </span>
                                        <button
                                            onClick={() => setCurrentPage(p =>
                                                Math.min(
                                                    Math.ceil(filteredDestinations.length / DESTINATIONS_PER_PAGE),
                                                    p + 1
                                                )
                                            )}
                                            disabled={currentPage * DESTINATIONS_PER_PAGE >= filteredDestinations.length}
                                            className="btn btn-sm"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                )}

                                <div className="divider">OU</div>

                                <div className="form-control">
                                    <input
                                        type="text"
                                        placeholder="Saisir une destination manuellement"
                                        className="input input-bordered"
                                        value={manualDestination}
                                        onChange={(e) => {
                                            setManualDestination(e.target.value)
                                            setSelectedDestinationId("")
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Options de facturation */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 border border-blue-200 dark:border-blue-800">
                                <div className="form-control">
                                    <label className="cursor-pointer label justify-start gap-3">
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                            checked={createInvoiceAfterOutput}
                                            onChange={(e) => setCreateInvoiceAfterOutput(e.target.checked)}
                                        />
                                        <span className="label-text font-semibold">
                                            <FileText className="inline w-4 h-4 mr-2" />
                                            Créer une facture après cette sortie
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Tableau des produits */}
                            <div className="overflow-x-auto">
                                <table className='table w-full'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Produit</th>
                                            <th>Quantité</th>
                                            <th>Unité</th>
                                            <th>Prix Unitaire</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.map((item) => {
                                            const product = allProducts.find(p => p.id === item.productId);
                                            const availableStock = product?.quantity || 0;
                                            const isOutOfStock = availableStock < item.quantity;
                                            const isLowStock = availableStock < item.quantity * 1.5;
                                            const price = item.price || product?.price || 0;
                                            const total = item.quantity * price;

                                            return (
                                                <tr key={item.productId} className={
                                                    isOutOfStock ? "bg-error/20" : 
                                                    isLowStock ? "bg-warning/20" : ""
                                                }>
                                                    <td>
                                                        <ProductImage
                                                            src={item.imageUrl || ''}
                                                            alt={item.name || 'Produit'}
                                                            heightClass='h-12'
                                                            widthClass='w-12'
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="font-medium">{item.name || 'Produit'}</div>
                                                        {isOutOfStock ? (
                                                            <div className="text-error text-sm font-semibold flex items-center gap-1">
                                                                <AlertTriangle size={14} />
                                                                Stock insuffisant
                                                            </div>
                                                        ) : isLowStock ? (
                                                            <div className="text-warning text-sm flex items-center gap-1">
                                                                <AlertTriangle size={14} />
                                                                Stock faible
                                                            </div>
                                                        ) : null}
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="number"
                                                            value={item.quantity === 0 ? '' : item.quantity}
                                                            min="1"
                                                            max={availableStock}
                                                            className={`input input-bordered w-20 ${
                                                                isOutOfStock ? "input-error" : 
                                                                isLowStock ? "input-warning" : ""
                                                            }`}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                const newQuantity = value === '' ? 0 : Math.min(Number(value), availableStock);
                                                                handleQuantityChange(item.productId, newQuantity);
                                                            }}
                                                            onBlur={(e) => {
                                                                if (!e.target.value || parseInt(e.target.value) < 1) {
                                                                    handleQuantityChange(item.productId, 1);
                                                                }
                                                            }}
                                                        />
                                                        <div className={`text-sm mt-1 ${
                                                            isOutOfStock ? "text-error" : 
                                                            isLowStock ? "text-warning" : "text-gray-500"
                                                        }`}>
                                                            Stock: {availableStock}
                                                            {isOutOfStock && ` (déficit: ${item.quantity - availableStock})`}
                                                        </div>
                                                    </td>
                                                    <td className='capitalize'>{item.unit || 'unité'}</td>
                                                    <td className='font-mono'>{price.toFixed(2)} CFA</td>
                                                    <td className='font-mono font-bold'>{total.toFixed(2)} CFA</td>
                                                    <td>
                                                        <button
                                                            className='btn btn-sm btn-error'
                                                            onClick={() => handleRemoveFromCart(item.productId)}
                                                            disabled={processingProducts.has(item.productId)}
                                                        >
                                                            <Trash size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            {/* Total de la commande */}
                            <div className="bg-base-200 dark:bg-base-300 p-4 rounded-lg mt-4">
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span>Total de la commande:</span>
                                    <span className="text-primary">
                                        {order.reduce((sum, item) => {
                                            const product = allProducts.find(p => p.id === item.productId);
                                            const price = item.price || product?.price || 0;
                                            return sum + (item.quantity * price);
                                        }, 0).toFixed(2)} CFA
                                    </span>
                                </div>
                            </div>

                            {/* Bouton de soumission */}
                            <button
                                onClick={handleSubmit}
                                className='btn btn-primary mt-4 w-full'
                                disabled={
                                    (!selectedDestinationId && !manualDestination) || 
                                    isLoading || 
                                    hasInsufficientStock() ||
                                    order.some(item => item.quantity <= 0)
                                }
                            >
                                {isLoading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : hasInsufficientStock() ? (
                                    "❌ Stocks insuffisants"
                                ) : (
                                    `✅ Confirmer la sortie ${selectedDestinationId
                                        ? `vers ${destinations.find(d => d.id === selectedDestinationId)?.name}`
                                        : manualDestination
                                            ? `vers ${manualDestination}`
                                            : ''}`
                                )}
                            </button>
                        </>
                    ) : (
                        <EmptyState
                            message='Aucun produit dans le panier'
                            IconComponent='HandHeart'
                        />
                    )}

                    {/* Modal pour création de facture */}
                    {showInvoiceOptions && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 p-4">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-xl border border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                                    Créer une facture
                                </h3>
                                
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text text-gray-700 dark:text-gray-300">Sélectionnez un client</span>
                                    </label>
                                    <select
                                        className="select select-bordered w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                                        value={selectedClientId}
                                        onChange={(e) => setSelectedClientId(e.target.value)}
                                    >
                                        <option value="" className="text-gray-500 dark:text-gray-400">Choisir un client</option>
                                        {clients.map((client) => (
                                            <option key={client.id} value={client.id} className="text-gray-900 dark:text-white">
                                                {client.name} {client.email && `(${client.email})`}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Résumé de la facture */}
                                <div className="bg-base-200 dark:bg-gray-700 p-4 rounded-lg mb-4">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Résumé de la facture</h4>
                                    <div className="space-y-1 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">Sous-total:</span>
                                            <span className="text-gray-900 dark:text-white font-mono">
                                                {order.reduce((sum, item) => {
                                                    const product = allProducts.find(p => p.id === item.productId);
                                                    const price = item.price || product?.price || 0;
                                                    return sum + (item.quantity * price);
                                                }, 0).toFixed(2)} CFA
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-400">TVA (20%):</span>
                                            <span className="text-gray-900 dark:text-white font-mono">
                                                {(order.reduce((sum, item) => {
                                                    const product = allProducts.find(p => p.id === item.productId);
                                                    const price = item.price || product?.price || 0;
                                                    return sum + (item.quantity * price);
                                                }, 0) * 0.2).toFixed(2)} CFA
                                            </span>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-1">
                                            <span className="text-gray-900 dark:text-white font-semibold">Total:</span>
                                            <span className="text-primary font-mono font-bold">
                                                {(order.reduce((sum, item) => {
                                                    const product = allProducts.find(p => p.id === item.productId);
                                                    const price = item.price || product?.price || 0;
                                                    return sum + (item.quantity * price);
                                                }, 0) * 1.2).toFixed(2)} CFA
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-end">
                                    <button
                                        onClick={() => {
                                            setShowInvoiceOptions(false);
                                            setOrder([]);
                                            setSelectedProductIds([]);
                                            setSelectedDestinationId("");
                                            setManualDestination("");
                                            fetchData(currentProductPage);
                                        }}
                                        className="btn btn-ghost text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    >
                                        Ignorer
                                    </button>
                                    <button
                                        onClick={handleCreateInvoice}
                                        className="btn btn-primary"
                                        disabled={!selectedClientId}
                                    >
                                        Créer la facture
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default Page