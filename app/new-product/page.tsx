"use client"
import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'
import { useUser } from '@clerk/nextjs'
import { Category, SubCategory } from '@prisma/client'
import { FormDataType } from '@/type'
import { createProduct, readCategories, readSubCategories } from '../actions'
import { FileImage } from 'lucide-react'
import ProductImage from '../components/ProductImage'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { user } = useUser()
  const email = user?.primaryEmailAddress?.emailAddress as string
  const router = useRouter()

  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [subCategories, setSubCategories] = useState<SubCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    description: "",
    categoryId: "",
    subCategoryId: "",
    unit: "",
    reference: "",
    price: 0,
    imageUrl: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'price' ? parseFloat(value) || 0 : value 
    }))
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        if (email) {
          const data = await readCategories(email)
          if (data) setCategories(data)
        }
      } catch (error) {
        console.error("Erreur lors du chargement des catégories", error)
        toast.error("Erreur lors du chargement des catégories")
      }
    }
    fetchCategories()
  }, [email])

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!formData.categoryId) {
        setSubCategories([])
        return
      }

      try {
        const data = await readSubCategories(email, formData.categoryId)
        if (data) setSubCategories(data)
      } catch (error) {
        console.error("Erreur lors du chargement des sous-catégories", error)
        toast.error("Erreur lors du chargement des sous-catégories")
      }
    }

    if (formData.categoryId && email) {
      fetchSubCategories()
    }
  }, [formData.categoryId, email])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile))
    } else {
      setPreviewUrl(null)
    }
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.description || !formData.categoryId || !formData.unit || !formData.price) {
      toast.error("Veuillez remplir tous les champs obligatoires")
      return
    }

    if (!file) {
      toast.error("Veuillez sélectionner une image")
      return
    }

    setLoading(true)

    try {
      // Upload de l&apos;image
      const imageData = new FormData()
      imageData.append("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: imageData
      })

      if (!res.ok) {
        throw new Error("Erreur lors de l&apos;upload de l&apos;image")
      }

      const data = await res.json()

      if (!data.success) {
        throw new Error("Erreur lors de l&apos;upload de l&apos;image")
      }

      // Création du produit avec les données formatées
      const productData: FormDataType = {
        name: formData.name,
        description: formData.description,
        categoryId: formData.categoryId,
        subCategoryId: formData.subCategoryId || undefined,
        unit: formData.unit,
        reference: formData.reference || undefined,
        price: formData.price,
        imageUrl: data.path
      }

      await createProduct(productData, email)

      toast.success("Produit créé avec succès")
      router.push("/products")
      
    } catch (error) {
      console.error("Erreur création produit:", error)
      toast.error(error instanceof Error ? error.message : "Une erreur est survenue lors de la création du produit")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      {/* Contenu principal - SEULEMENT le formulaire */}
      <div className='flex justify-center items-center min-h-screen bg-base-100'>
        <div className='w-full max-w-6xl'>
          {/* En-tête simplifié */}
          <div className='text-center mb-12'>
            <div className='bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl px-8 py-6 border border-primary/20 shadow-sm'>
              <h1 className='text-3xl font-bold text-primary mb-2'>
                Créer un Nouveau Produit
              </h1>
              <p className='text-base-content/70 text-lg'>
                Ajoutez un nouveau produit à votre catalogue
              </p>
            </div>
          </div>

          <section className='flex flex-col xl:flex-row gap-8'>
            {/* Formulaire */}
            <div className='flex-1'>
              <div className='bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8 space-y-6'>
                {/* Nom du produit */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text font-semibold text-base'>Nom du produit *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom du produit"
                    className='input input-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Référence */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text font-semibold text-base'>Référence</span>
                  </label>
                  <input
                    type="text"
                    name="reference"
                    placeholder="Référence du produit"
                    className='input input-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200'
                    value={formData.reference}
                    onChange={handleChange}
                  />
                </div>

                {/* Description */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text font-semibold text-base'>Description *</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Description du produit"
                    className='textarea textarea-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200 h-32 resize-none'
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Catégorie et Sous-catégorie */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text font-semibold text-base'>Catégorie *</span>
                    </label>
                    <select
                      className='select select-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200'
                      value={formData.categoryId}
                      onChange={handleChange}
                      name='categoryId'
                      required
                    >
                      <option value="">Sélectionner une catégorie</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text font-semibold text-base'>Sous-catégorie</span>
                    </label>
                    <select
                      className='select select-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200 disabled:bg-base-300'
                      value={formData.subCategoryId}
                      onChange={handleChange}
                      name='subCategoryId'
                      disabled={!formData.categoryId || subCategories.length === 0}
                    >
                      <option value="">Sélectionner une sous-catégorie</option>
                      {subCategories.map((subCat) => (
                        <option key={subCat.id} value={subCat.id}>{subCat.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Unité et Prix */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text font-semibold text-base'>Unité *</span>
                    </label>
                    <select
                      className='select select-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200'
                      value={formData.unit}
                      onChange={handleChange}
                      name='unit'
                      required
                    >
                      <option value="">Sélectionner une unité</option>
                      <option value="kg">Kilogramme (kg)</option>
                      <option value="g">Gramme (g)</option>
                      <option value="m">Mètre (m)</option>
                      <option value="cm">Centimètre (cm)</option>
                      <option value="L">Litre (L)</option>
                      <option value="pcs">Pièce (pcs)</option>
                      <option value="unité">Unité</option>
                      <option value="carton">Carton</option>
                      <option value="paquet">Paquet</option>
                    </select>
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text font-semibold text-base'>Prix (CFA) *</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className='input input-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200'
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Image */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text font-semibold text-base'>Image du produit *</span>
                  </label>
                  <input
                    type="file"
                    accept='image/*'
                    className='file-input file-input-bordered w-full bg-base-200 focus:bg-base-100 transition-colors duration-200'
                    onChange={handleFileChange}
                    required
                  />
                  <label className='label'>
                    <span className='label-text-alt text-base-content/60'>
                      Formats acceptés: JPG, PNG, WebP
                    </span>
                  </label>
                </div>

                {/* Boutons d&apos;action */}
                <div className='flex gap-4 pt-6'>
                  <button 
                    onClick={() => router.back()} 
                    className='btn btn-outline flex-1 hover:bg-base-300 transition-colors duration-200'
                    type='button'
                    disabled={loading}
                  >
                    Annuler
                  </button>
                  <button 
                    onClick={handleSubmit} 
                    className='btn btn-primary flex-1 hover:bg-primary-focus transition-colors duration-200 shadow-sm hover:shadow-md'
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Création...
                      </>
                    ) : (
                      'Créer le produit'
                    )}
                  </button>
                </div>
              </div>

              {/* Informations sur les champs obligatoires */}
              <div className='mt-6 p-4 bg-base-200 rounded-lg border border-base-300'>
                <p className='text-sm text-base-content/70'>
                  <span className='text-error font-semibold'>*</span> Champs obligatoires
                </p>
              </div>
            </div>

            {/* Aperçu de l&apos;image */}
            <div className='xl:w-96'>
              <div className='bg-base-100 rounded-2xl shadow-sm border border-base-300 p-6 sticky top-6'>
                <h2 className='text-lg font-semibold text-center mb-6 text-base-content'>
                  Aperçu de l&apos;image
                </h2>
                
                <div className='border-2 border-dashed border-base-300 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px] bg-base-200 transition-all duration-300 hover:border-primary/50'>
                  {previewUrl ? (
                    <div className='text-center space-y-4'>
                      <ProductImage
                        src={previewUrl}
                        alt="Aperçu du produit"
                        heightClass='h-48'
                        widthClass='w-48'
                        className='mx-auto rounded-lg shadow-sm border border-base-300'
                      />
                      <div className='space-y-1'>
                        <p className='text-sm font-medium text-base-content'>
                          Image sélectionnée
                        </p>
                        <p className='text-xs text-base-content/60'>
                          {file?.name}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='text-center space-y-3'>
                      <FileImage strokeWidth={1} className='h-16 w-16 text-base-content/40 mx-auto' />
                      <div className='space-y-1'>
                        <p className='text-base font-medium text-base-content/70'>
                          Aperçu de l&apos;image
                        </p>
                        <p className='text-sm text-base-content/50'>
                          L&apos;image sélectionnée apparaîtra ici
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Résumé du produit */}
                {(formData.name || formData.price > 0) && (
                  <div className='mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10'>
                    <h3 className='font-semibold text-primary mb-3 text-sm'>Résumé du produit</h3>
                    <div className='space-y-2 text-sm'>
                      {formData.name && (
                        <div className='flex justify-between'>
                          <span className='text-base-content/70'>Nom:</span>
                          <span className='font-medium'>{formData.name}</span>
                        </div>
                      )}
                      {formData.reference && (
                        <div className='flex justify-between'>
                          <span className='text-base-content/70'>Référence:</span>
                          <span className='font-medium'>{formData.reference}</span>
                        </div>
                      )}
                      {formData.price > 0 && (
                        <div className='flex justify-between'>
                          <span className='text-base-content/70'>Prix:</span>
                          <span className='font-medium text-primary'>{formData.price} CFA</span>
                        </div>
                      )}
                      {formData.unit && (
                        <div className='flex justify-between'>
                          <span className='text-base-content/70'>Unité:</span>
                          <span className='font-medium'>{formData.unit}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

export default Page