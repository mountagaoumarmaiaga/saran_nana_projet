import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import crypto from 'crypto'

const BUCKET_NAME = 'image' // Nom exact du bucket Supabase

// ✅ Upload d'image (POST)
export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'Aucun fichier reçu.' },
        { status: 400 }
      )
    }

    // 🔁 Convertir le fichier en Buffer (nécessaire côté serveur)
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // 🧩 Nom unique et chemin du fichier
    const ext = file.name.split('.').pop()
    const uniqueName = `${crypto.randomUUID()}.${ext}`
    const filePath = `products/${uniqueName}`

    // 🚀 Upload vers Supabase
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false,
      })

    if (uploadError) {
      console.error('Erreur upload Supabase:', uploadError)
      throw uploadError
    }

    // 🌐 Récupérer l’URL publique
    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath)

    return NextResponse.json(
      {
        success: true,
        url: data.publicUrl,
        path: filePath,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur POST serveur:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'upload du fichier.' },
      { status: 500 }
    )
  }
}

// ❌ Suppression d'image (DELETE)
export async function DELETE(request: Request) {
  try {
    const body = await request.json()
    const filePath = body.path

    if (!filePath) {
      return NextResponse.json(
        { success: false, message: 'Chemin du fichier manquant.' },
        { status: 400 }
      )
    }

    // 🗑️ Suppression depuis le bucket Supabase
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath])

    if (error) {
      console.error('Erreur Supabase:', error)
      return NextResponse.json(
        { success: false, message: 'Erreur lors de la suppression du fichier.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Erreur DELETE serveur:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur.' },
      { status: 500 }
    )
  }
}
