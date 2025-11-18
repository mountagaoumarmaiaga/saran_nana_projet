import Image from 'next/image'
import React, { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'

interface ProductImageProps {
    src: string;
    alt: string;
    heightClass?: string;
    widthClass?: string;
    className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
    src,
    alt,
    heightClass = 'h-24',
    widthClass = 'w-24',
    className = ''
}) => {
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // URL de base corrigée avec le bon bucket "image"
    const baseURL = 'https://falctcisjrcijtumhrku.supabase.co/storage/v1/object/public/image/'

    const getImageUrl = () => {
        if (!src || src.trim() === '') {
            return null
        }

        // Si c'est déjà une URL complète (blob ou http)
        if (src.startsWith('http') || src.startsWith('blob:')) {
            return src
        }

        // Si le chemin contient déjà 'products/', on l'utilise tel quel
        if (src.includes('products/')) {
            return `${baseURL}${src}`
        }

        // Sinon, on ajoute le dossier products/
        return `${baseURL}products/${src}`
    }

    const imageUrl = getImageUrl()

    const handleLoad = () => {
        setIsLoading(false)
    }

    const handleError = () => {
        console.error('❌ Erreur chargement image:', imageUrl)
        setHasError(true)
        setIsLoading(false)
    }

    // États spéciaux - image manquante ou erreur
    if (!imageUrl || hasError) {
        return (
            <div className={`${heightClass} ${widthClass} bg-base-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-base-300 ${className}`}>
                <div className="text-center text-base-content/40">
                    <ImageIcon className="w-8 h-8 mx-auto mb-1" />
                    <span className="text-xs">Aucune image</span>
                </div>
            </div>
        )
    }

    return (
        <div className={`relative ${heightClass} ${widthClass} bg-base-200 rounded-2xl overflow-hidden ${className}`}>
            {/* Loading spinner */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-200">
                    <div className="loading loading-spinner loading-sm text-primary"></div>
                </div>
            )}
            
            {/* Image Next.js optimisée */}
            <Image
                src={imageUrl}
                alt={alt}
                fill
                className={`object-cover transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={handleLoad}
                onError={handleError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
            />
        </div>
    )
}

export default ProductImage