"use client"

import { Product } from '@/type'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState, useCallback } from 'react'
import { readProducts, replenishStockWithTransaction } from '../actions'
import ProductComponent from './ProductComponent'
import { toast } from 'react-toastify'
import { Plus, Package, Search, RotateCcw } from 'lucide-react'

interface StockProps {
    onClose?: () => void;
}

const Stock: React.FC<StockProps> = ({ onClose }) => {
    const { user } = useUser()
    const email = user?.primaryEmailAddress?.emailAddress as string
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [selectedProductId, setSelectedProductId] = useState<string>("")
    const [quantity, setQuantity] = useState<number>(0)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [showLowStock, setShowLowStock] = useState(false)
    const [price, setPrice] = useState<number | ''>('')

    const fetchProducts = useCallback(async () => {
        try {
            if (email) {
                console.log("📥 Chargement des produits...")
                const result = await readProducts(email, { limit: 1000 })
                if (result && result.products) {
                    setProducts(result.products)
                    setFilteredProducts(result.products)
                    console.log(`✅ ${result.products.length} produits chargés`)
                }
            }
        } catch (error) {
            console.error("❌ Erreur chargement produits:", error)
            toast.error("Erreur lors du chargement des produits")
        }
    }, [email])

    useEffect(() => {
        if (email) {
            fetchProducts()
        }
    }, [email, fetchProducts])

    // Filtrage des produits
    useEffect(() => {
        let filtered = products

        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.reference?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.categoryName?.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (showLowStock) {
            filtered = filtered.filter(product => product.quantity <= 10)
        }

        setFilteredProducts(filtered)
    }, [products, searchTerm, showLowStock])

    const handleProductChange = (productId: string) => {
        console.log("🎯 Produit sélectionné:", productId)
        const product = products.find((p) => p.id === productId)
        setSelectedProduct(product || null)
        setSelectedProductId(productId)
        setPrice(product?.price || '')
        
        if (product) {
            console.log("📊 Produit sélectionné - Stock:", product.quantity, "Prix:", product.price)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        console.log("🔄 Début réapprovisionnement...")
        console.log("Produit ID:", selectedProductId)
        console.log("Quantité:", quantity)
        console.log("Prix:", price)
        console.log("Email:", email)

        if (!selectedProductId || quantity <= 0) {
            toast.error("Veuillez sélectionner un produit et entrer une quantité valide.")
            return
        }

        if (price !== '' && price < 0) {
            toast.error("Le prix ne peut pas être négatif.")
            return
        }

        // Vérification supplémentaire : s'assurer que la quantité est positive
        if (quantity < 1) {
            toast.error("La quantité doit être supérieure à 0.")
            return
        }

        setIsLoading(true)
        try {
            if (email) {
                console.log("📤 Appel API replenishStockWithTransaction...")
                const result = await replenishStockWithTransaction(
                    selectedProductId, 
                    quantity, 
                    email,
                    price !== '' ? price : undefined
                )
                console.log("✅ Réponse API:", result)
                
                toast.success("✅ Stock réapprovisionné avec succès !")
                
                // Réinitialiser le formulaire
                setSelectedProductId('')
                setQuantity(0)
                setSelectedProduct(null)
                setPrice('')
                
                // Recharger les produits
                await fetchProducts()
                
            }
        } catch (error) {
            console.error("❌ Erreur complète:", error)
            const errorMessage = error instanceof Error ? error.message : "Erreur inconnue"
            toast.error(`❌ Erreur lors du réapprovisionnement: ${errorMessage}`)
        } finally {
            setIsLoading(false)
        }
    }

    const resetFilters = () => {
        setSearchTerm("")
        setShowLowStock(false)
    }

    // Fonction pour gérer le changement de quantité avec validation
    const handleQuantityChange = (value: number) => {
        // Empêcher les valeurs négatives
        if (value < 0) {
            setQuantity(0)
            return
        }
        
        // Limiter la quantité si nécessaire (optionnel)
        if (value > 10000) {
            toast.warning("Quantité trop élevée")
            return
        }
        
        setQuantity(value)
    }

    // Vérifier si le formulaire peut être soumis
    const canSubmit = () => {
        return !isLoading && 
               selectedProductId && 
               quantity > 0 && 
               (price === '' || price >= 0)
    }

    // Statistiques rapides
    const getStockStats = () => {
        const totalProducts = products.length
        const lowStockProducts = products.filter(p => p.quantity <= 10).length
        const outOfStockProducts = products.filter(p => p.quantity === 0).length
        const totalValue = products.reduce((sum, p) => sum + (p.quantity * p.price), 0)

        return { totalProducts, lowStockProducts, outOfStockProducts, totalValue }
    }

    const stats = getStockStats()

    return (
        <div className="space-y-6 p-1">
            {/* En-tête avec statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="stat bg-base-100 rounded-lg shadow">
                    <div className="stat-figure text-primary">
                        <Package className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Total Produits</div>
                    <div className="stat-value text-lg">{stats.totalProducts}</div>
                </div>
                
                <div className="stat bg-base-100 rounded-lg shadow">
                    <div className="stat-figure text-warning">
                        <Package className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Stock Faible</div>
                    <div className="stat-value text-lg">{stats.lowStockProducts}</div>
                </div>
                
                <div className="stat bg-base-100 rounded-lg shadow">
                    <div className="stat-figure text-error">
                        <Package className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Rupture</div>
                    <div className="stat-value text-lg">{stats.outOfStockProducts}</div>
                </div>
                
                <div className="stat bg-base-100 rounded-lg shadow">
                    <div className="stat-figure text-success">
                        <Package className="w-8 h-8" />
                    </div>
                    <div className="stat-title">Valeur Stock</div>
                    <div className="stat-value text-lg">{stats.totalValue.toFixed(0)}CFA</div>
                </div>
            </div>

            {/* Contrôles de filtrage */}
            <div className="card bg-base-100 shadow">
                <div className="card-body">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rechercher un produit</span>
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-4 h-4 text-base-content/40" />
                                <input
                                    type="text"
                                    placeholder="Nom, référence ou catégorie..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="input input-bordered w-full pl-10"
                                />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label cursor-pointer gap-2">
                                <input
                                    type="checkbox"
                                    checked={showLowStock}
                                    onChange={(e) => setShowLowStock(e.target.checked)}
                                    className="checkbox checkbox-sm"
                                />
                                <span className="label-text">Stock faible uniquement</span>
                            </label>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={resetFilters}
                                className="btn btn-outline btn-sm"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Réinitialiser
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulaire de réapprovisionnement */}
            <div className="card bg-base-100 shadow">
                <div className="card-body">
                    <h3 className="card-title">Réapprovisionner le stock</h3>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Sélection du produit */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Produit à réapprovisionner</span>
                            </label>
                            <select
                                value={selectedProductId}
                                className="select select-bordered w-full"
                                required
                                onChange={(e) => handleProductChange(e.target.value)}
                                disabled={isLoading}
                            >
                                <option value="">Sélectionner un produit...</option>
                                {products.map((product) => (
                                    <option key={product.id} value={product.id}>
                                        {product.name} - Stock: {product.quantity} {product.unit}
                                        {product.reference && ` (${product.reference})`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Aperçu du produit sélectionné */}
                        {selectedProduct && (
                            <div className="bg-base-200 rounded-2xl p-4">
                                <ProductComponent product={selectedProduct} />
                            </div>
                        )}

                        {/* Quantité et prix */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Quantité à ajouter</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Quantité"
                                    value={quantity || ''}
                                    required
                                    min="1"
                                    step="1"
                                    onChange={(e) => handleQuantityChange(Number(e.target.value))}
                                    className="input input-bordered w-full"
                                    disabled={isLoading}
                                />
                                <label className="label">
                                    <span className="label-text-alt">
                                        Stock actuel: {selectedProduct?.quantity || 0} {selectedProduct?.unit}
                                    </span>
                                    <span className="label-text-alt text-success">
                                        Nouveau stock: {(selectedProduct?.quantity || 0) + quantity}
                                    </span>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">
                                        Prix achat (optionnel)
                                    </span>
                                    <span className="label-text-alt text-base-content/60">
                                        Laisser vide pour garder le prix actuel
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Prix unitaire"
                                    value={price}
                                    min="0"
                                    step="0.01"
                                    onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="input input-bordered w-full"
                                    disabled={isLoading}
                                />
                                <label className="label">
                                    <span className="label-text-alt">
                                        Prix actuel: {selectedProduct?.price || 0} CFA
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Résumé de l'opération */}
                        {quantity > 0 && (
                            <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                                <h4 className="font-semibold text-primary mb-2">Résumé de l&opération</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>Quantité ajoutée:</div>
                                    <div className="font-semibold">{quantity} {selectedProduct?.unit}</div>
                                    
                                    <div>Prix unitaire:</div>
                                    <div className="font-semibold">
                                        {price !== '' ? `${price} XOF` : `${selectedProduct?.price || 0} CFA`}
                                    </div>
                                    
                                    <div>Coût total:</div>
                                    <div className="font-semibold text-success">
                                        {((price !== '' ? price : selectedProduct?.price || 0) * quantity).toFixed(2)} CFA
                                    </div>
                                    
                                    <div>Nouveau stock:</div>
                                    <div className="font-semibold">
                                        {(selectedProduct?.quantity || 0) + quantity} {selectedProduct?.unit}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Message d'information */}
                        <div className="alert alert-info">
                            <div className="flex items-center gap-2">
                                <Package className="w-4 h-4" />
                                <span className="text-sm">
                                    <strong>Information :</strong> Le stock ne peut jamais être négatif. 
                                    Le système empêche automatiquement les valeurs invalides.
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-4">
                            {onClose && (
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={onClose}
                                    disabled={isLoading}
                                >
                                    Fermer
                                </button>
                            )}
                            <button 
                                type="submit" 
                                className="btn btn-primary flex-1"
                                disabled={!canSubmit()}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        Traitement...
                                    </>
                                ) : (
                                    <>
                                        <Plus className="w-4 h-4" />
                                        Réapprovisionner le stock
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Liste des produits */}
            <div className="card bg-base-100 shadow">
                <div className="card-body">
                    <h3 className="card-title">Tous les produits ({filteredProducts.length})</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="cursor-pointer" onClick={() => handleProductChange(product.id)}>
                                <ProductComponent 
                                    product={product} 
                                    showStock={true}
                                    showPrice={true}
                                />
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12 text-base-content/60">
                            <Package className="w-16 h-16 mx-auto mb-4 opacity-40" />
                            <p className="text-lg font-medium">Aucun produit trouvé</p>
                            <p className="text-sm">Ajustez vos filtres ou ajoutez de nouveaux produits</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Stock