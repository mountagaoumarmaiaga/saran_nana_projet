"use client"

import { use } from 'react'
import { readProductById, updateProduct, readCategoriesWithSub, readSubCategoriesWithCount } from '@/app/actions'
import ProductImage from '@/app/components/ProductImage'
import Wrapper from '@/app/components/Wrapper'
import { FormDataType, Product, CategoryWithSub, SubCategoryWithCount } from '@/type'
import { useUser } from '@clerk/nextjs'
import { FileImage } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState, useCallback } from 'react'
import { toast } from 'react-toastify'

const Page = ({ params }: { params: Promise<{ productId: string }> }) => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string
  const { productId } = use(params)

  const [product, setProduct] = useState<Product | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [categories, setCategories] = useState<CategoryWithSub[]>([])
  const [subCategories, setSubCategories] = useState<SubCategoryWithCount[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormDataType>({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    categoryId: "",
    subCategoryId: "",
    unit: "",
    reference: "",
    price: 0
  })

  const router = useRouter()

  // Charger les données initiales
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      
      // Charger les catégories
      const categoriesData = await readCategoriesWithSub(email)
      setCategories(categoriesData)

      // Charger le produit
      const fetchedProduct = await readProductById(productId, email)
      if (fetchedProduct) {
        setProduct(fetchedProduct)
        setFormData({
          id: fetchedProduct.id,
          name: fetchedProduct.name,
          description: fetchedProduct.description,
          imageUrl: fetchedProduct.imageUrl,
          categoryId: fetchedProduct.categoryId,
          subCategoryId: fetchedProduct.subCategoryId || "",
          unit: fetchedProduct.unit || "",
          reference: fetchedProduct.reference || "",
          price: fetchedProduct.price || 0
        })

        // Charger les sous-catégories si une catégorie est sélectionnée
        if (fetchedProduct.categoryId) {
          const subs = await readSubCategoriesWithCount(email, fetchedProduct.categoryId)
          setSubCategories(subs)
        }
      }
    } catch (error) {
      console.error(error)
      toast.error("Échec du chargement des données")
    } finally {
      setIsLoading(false)
    }
  }, [email, productId])

  useEffect(() => {
    if (email) {
      fetchData()
    }
  }, [email, fetchData])

  // Gérer le changement de catégorie
  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!formData.categoryId) {
        setSubCategories([])
        setFormData(prev => ({ ...prev, subCategoryId: "" }))
        return
      }

      try {
        const data = await readSubCategoriesWithCount(email, formData.categoryId)
        setSubCategories(data)
      } catch (error) {
        console.error("Erreur lors du chargement des sous-catégories", error)
        toast.error("Erreur lors du chargement des sous-catégories")
      }
    }

    if (formData.categoryId && email) {
      fetchSubCategories()
    }
  }, [formData.categoryId, email])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'price' ? parseFloat(value) || 0 : value 
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile))
    } else {
      setPreviewUrl(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setIsSubmitting(true)
      let imageUrl = formData.imageUrl

      // Gestion de l'image
      if (file) {
        // Supprimer l'ancienne image si elle existe
        if (formData.imageUrl) {
          const resDelete = await fetch("/api/upload", {
            method: "DELETE",
            body: JSON.stringify({ path: formData.imageUrl }),
            headers: { 'Content-Type': 'application/json' }
          })
          const dataDelete = await resDelete.json()
          if (!dataDelete.success) {
            console.warn("Erreur lors de la suppression de l'ancienne image")
          }
        }

        // Uploader la nouvelle image
        const imageData = new FormData()
        imageData.append("file", file)
        const res = await fetch("/api/upload", {
          method: "POST",
          body: imageData
        })

        const data = await res.json()
        if (!data.success) {
          throw new Error("Erreur lors de l'upload de la nouvelle image")
        }

        imageUrl = data.path
      }

      // Préparer les données à mettre à jour
      const updatedData: FormDataType = {
        ...formData,
        imageUrl,
        subCategoryId: formData.subCategoryId || undefined,
        reference: formData.reference || undefined,
        price: formData.price || 0
      }

      await updateProduct(updatedData, email)
      toast.success("Produit mis à jour avec succès !")
      router.push("/products")
      router.refresh()
    } catch (error: unknown) {
      console.error(error)
      const message = error instanceof Error ? error.message : "Une erreur inconnue est survenue"
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const removeImage = () => {
    setFile(null)
    setPreviewUrl(null)
    setFormData(prev => ({ ...prev, imageUrl: "" }))
  }

  if (isLoading) {
    return (
      <Wrapper>
        <div className='flex justify-center items-center w-full h-64'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </Wrapper>
    )
  }

  if (!product) {
    return (
      <Wrapper>
        <div className='flex justify-center items-center w-full h-64'>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Produit non trouvé</p>
            <button 
              onClick={() => router.push('/products')}
              className="btn btn-primary"
            >
              Retour aux produits
            </button>
          </div>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className='text-2xl font-bold'>Modifier le produit</h1>
          <button 
            onClick={() => router.push('/products')}
            className="btn btn-outline"
          >
            Retour
          </button>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Formulaire */}
          <form onSubmit={handleSubmit} className='flex-1 space-y-6'>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Informations générales</h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Nom du produit*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className='input input-bordered w-full'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nom du produit"
                    />
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Référence</span>
                    </label>
                    <input
                      type="text"
                      name="reference"
                      className='input input-bordered w-full'
                      value={formData.reference || ""}
                      onChange={handleInputChange}
                      placeholder="Référence unique"
                    />
                  </div>
                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Description*</span>
                  </label>
                  <textarea
                    name="description"
                    className='textarea textarea-bordered w-full'
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    required
                    placeholder="Description détaillée du produit"
                  />
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Catégorisation</h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Catégorie*</span>
                    </label>
                    <select
                      name="categoryId"
                      className='select select-bordered w-full'
                      value={formData.categoryId}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionner une catégorie</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Sous-catégorie</span>
                    </label>
                    <select
                      name="subCategoryId"
                      className='select select-bordered w-full'
                      value={formData.subCategoryId || ""}
                      onChange={handleInputChange}
                      disabled={!formData.categoryId}
                    >
                      <option value="">Sélectionner une sous-catégorie</option>
                      {subCategories.map(subCategory => (
                        <option key={subCategory.id} value={subCategory.id}>
                          {subCategory.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Détails du produit</h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Unité de mesure*</span>
                    </label>
                    <select
                      name="unit"
                      className='select select-bordered w-full'
                      value={formData.unit}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Sélectionner une unité</option>
                      <option value="kg">Kilogramme (kg)</option>
                      <option value="g">Gramme (g)</option>
                      <option value="L">Litre (L)</option>
                      <option value="ml">Millilitre (ml)</option>
                      <option value="m">Mètre (m)</option>
                      <option value="cm">Centimètre (cm)</option>
                      <option value="pcs">Pièce (pcs)</option>
                      <option value="unité">Unité</option>
                      <option value="paquet">Paquet</option>
                      <option value="carton">Carton</option>
                    </select>
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Prix unitaire (CFA)*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      step="0.01"
                      min="0"
                      className='input input-bordered w-full'
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      placeholder="0.00"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Image du produit</h2>
                
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Nouvelle image</span>
                  </label>
                  <input
                    type="file"
                    accept='image/*'
                    className='file-input file-input-bordered w-full'
                    onChange={handleFileChange}
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      Formats supportés: JPG, PNG, WEBP. Taille max: 5MB
                    </span>
                  </label>
                </div>

                {(formData.imageUrl || previewUrl) && (
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-base-content/60">
                      {file ? "Nouvelle image sélectionnée" : "Image actuelle"}
                    </span>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="btn btn-sm btn-error"
                    >
                      Supprimer l&apos;image
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button 
                type='button'
                onClick={() => router.push('/products')}
                className='btn btn-outline flex-1'
                disabled={isSubmitting}
              >
                Annuler
              </button>
              <button 
                type='submit' 
                className='btn btn-primary flex-1'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Enregistrement...
                  </>
                ) : (
                  'Mettre à jour le produit'
                )}
              </button>
            </div>
          </form>

          {/* Prévisualisation */}
          <div className='lg:w-80 space-y-4'>
            <div className="card bg-base-100 shadow sticky top-4">
              <div className="card-body">
                <h3 className="card-title">Aperçu du produit</h3>
                
                <div className='flex flex-col items-center justify-center p-4 border-2 border-dashed border-primary rounded-2xl min-h-[200px]'>
                  {previewUrl ? (
                    <div className="text-center">
                      <ProductImage
                        src={previewUrl}
                        alt="Prévisualisation"
                        heightClass='h-32'
                        widthClass='w-32'
                        className="mx-auto mb-2"
                      />
                      <p className="text-sm text-success">Nouvelle image</p>
                    </div>
                  ) : formData.imageUrl ? (
                    <div className="text-center">
                      <ProductImage
                        src={formData.imageUrl}
                        alt={formData.name}
                        heightClass='h-32'
                        widthClass='w-32'
                        className="mx-auto mb-2"
                      />
                      <p className="text-sm text-base-content/60">Image actuelle</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <FileImage strokeWidth={1} className='h-16 w-16 text-primary mx-auto mb-2' />
                      <p className="text-sm text-base-content/60">Aucune image</p>
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Nom:</span>
                    <span>{formData.name || "Non renseigné"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Référence:</span>
                    <span>{formData.reference || "Non renseigné"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Prix:</span>
                    <span>{formData.price ? `${formData.price} CFA` : "Non renseigné"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Unité:</span>
                    <span>{formData.unit || "Non renseigné"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Page