import { Product } from '@/type'
import React from 'react'
import ProductImage from './ProductImage'
import { Plus, Package, Tag, Scale, Euro, TrendingUp } from 'lucide-react'

interface ProductComponentProps {
    product?: Product | null
    add?: boolean
    handleAddToCart?: (product: Product) => void
    variant?: 'default' | 'compact' | 'detailed'
    showPrice?: boolean
    showStock?: boolean
    showPurchasePrice?: boolean
    className?: string
}

const ProductComponent: React.FC<ProductComponentProps> = ({ 
    product, 
    add, 
    handleAddToCart,
    variant = 'default',
    showPrice = true,
    showStock = true,
    showPurchasePrice = false,
    className = ''
}) => {
    if (!product) {
        return (
            <div className={`border-2 border-dashed border-base-300 p-6 rounded-3xl w-full flex items-center justify-center bg-base-100 ${className}`}>
                <div className="text-center text-base-content/60">
                    <Package className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Sélectionnez un produit</p>
                </div>
            </div>
        )
    }

    // Configuration des variants
    const variantConfig = {
        default: {
            container: 'p-4',
            image: 'h-24 w-24',
            content: 'space-y-2'
        },
        compact: {
            container: 'p-3',
            image: 'h-16 w-16',
            content: 'space-y-1'
        },
        detailed: {
            container: 'p-6',
            image: 'h-32 w-32',
            content: 'space-y-3'
        }
    }

    const currentVariant = variantConfig[variant]

    const getStockStatus = (quantity: number) => {
        if (quantity === 0) return { text: 'Rupture', class: 'badge-error' }
        if (quantity <= 10) return { text: 'Stock faible', class: 'badge-warning' }
        return { text: 'En stock', class: 'badge-success' }
    }

    const stockStatus = getStockStatus(product.quantity)

    // Calculer la marge si les deux prix sont disponibles
    const margin = product.purchasePrice && product.price 
        ? product.price - product.purchasePrice 
        : null;
    
    const marginPercentage = product.purchasePrice && margin 
        ? (margin / product.purchasePrice) * 100 
        : null;

    return (
        <div className={`border-2 border-base-200 bg-base-100 rounded-3xl w-full flex items-center transition-all hover:shadow-md ${currentVariant.container} ${className}`}>
            {/* Image du produit - CORRECTION: shrink-0 au lieu de flex-shrink-0 */}
            <div className="shrink-0">
                <ProductImage
                    src={product.imageUrl}
                    alt={product.name}
                    heightClass={currentVariant.image.split(' ')[0]}
                    widthClass={currentVariant.image.split(' ')[1]}
                    className="rounded-2xl"
                />
            </div>

            {/* Contenu */}
            <div className={`ml-4 flex-1 min-w-0 ${currentVariant.content}`}>
                {/* En-tête avec nom et prix */}
                <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0 flex-1">
                        <h2 className={`font-bold text-base-content truncate ${
                            variant === 'compact' ? 'text-base' : 'text-lg'
                        }`}>
                            {product.name}
                        </h2>
                        
                        {/* Prix d'achat */}
                        {showPurchasePrice && product.purchasePrice && (
                            <div className="flex items-center gap-1 mt-1">
                                <TrendingUp className="w-3 h-3 text-warning" />
                                <span className="text-warning font-semibold text-sm">
                                    Coût: {product.purchasePrice.toFixed(2)} CFA
                                </span>
                            </div>
                        )}
                        
                        {/* Prix de vente */}
                        {showPrice && product.price > 0 && (
                            <div className="flex items-center gap-1 mt-1">
                                <Euro className="w-3 h-3 text-success" />
                                <span className="text-success font-semibold">
                                    {product.price.toFixed(2)} CFA
                                </span>
                            </div>
                        )}
                        
                        {/* Marge */}
                        {showPurchasePrice && margin !== null && (
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-success font-semibold text-sm">
                                    Marge: {margin.toFixed(2)} CFA
                                    {marginPercentage && (
                                        <span className="text-xs ml-1">
                                            ({marginPercentage.toFixed(1)}%)
                                        </span>
                                    )}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Bouton d'ajout */}
                    {add && handleAddToCart && (
                        <button
                            onClick={() => handleAddToCart(product)}
                            className={`btn btn-primary shrink-0 ${
                                variant === 'compact' ? 'btn-sm btn-circle' : 'btn-sm'
                            }`}
                            title="Ajouter au panier"
                        >
                            <Plus className="w-4 h-4" />
                            {variant !== 'compact' && <span>Ajouter</span>}
                        </button>
                    )}
                </div>

                {/* Informations détaillées */}
                <div className="flex flex-wrap gap-2">
                    {/* Catégorie */}
                    <div className="badge badge-outline gap-1">
                        <Tag className="w-3 h-3" />
                        {product.categoryName || 'Non catégorisé'}
                    </div>

                    {/* Unité */}
                    <div className="badge badge-outline gap-1">
                        <Scale className="w-3 h-3" />
                        {product.unit}
                    </div>

                    {/* Stock */}
                    {showStock && (
                        <div className={`badge gap-1 ${stockStatus.class}`}>
                            <Package className="w-3 h-3" />
                            {product.quantity} {product.unit}
                            {variant === 'detailed' && (
                                <span className="ml-1">({stockStatus.text})</span>
                            )}
                        </div>
                    )}

                    {/* Référence */}
                    {variant === 'detailed' && product.reference && (
                        <div className="badge badge-ghost">
                            Ref: {product.reference}
                        </div>
                    )}
                </div>

                {/* Description (uniquement en mode détaillé) */}
                {variant === 'detailed' && product.description && (
                    <p className="text-sm text-base-content/70 line-clamp-2">
                        {product.description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductComponent