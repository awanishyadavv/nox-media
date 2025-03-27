"use server"

import { getServerClient } from "@/lib/supabase"

export async function uploadImage(base64Image: string) {
  try {
    // Get the Supabase client with error handling
    let supabase
    try {
      supabase = getServerClient()
    } catch (error) {
      console.error("Error initializing Supabase client:", error)
      return {
        success: false,
        error: "Database connection error. Please check your environment configuration.",
      }
    }

    // Extract the file type from the base64 string
    const matches = base64Image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

    if (!matches || matches.length !== 3) {
      throw new Error("Invalid base64 image format")
    }

    const type = matches[1]
    const data = matches[2]
    const buffer = Buffer.from(data, "base64")

    // Determine file extension based on mime type
    let extension = "jpg"
    if (type.includes("png")) extension = "png"
    if (type.includes("gif")) extension = "gif"
    if (type.includes("webp")) extension = "webp"

    // Generate a unique filename
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${extension}`
    const filePath = `blog-images/${filename}`

    // Upload the image to Supabase Storage
    const { error: uploadError } = await supabase.storage.from("public").upload(filePath, buffer, {
      contentType: type,
      upsert: false,
    })

    if (uploadError) {
      console.error("Error uploading image:", uploadError)
      throw new Error(`Failed to upload image: ${uploadError.message}`)
    }

    // Get the public URL for the uploaded image
    const { data: publicUrlData } = supabase.storage.from("public").getPublicUrl(filePath)

    return {
      success: true,
      url: publicUrlData.publicUrl,
      path: filePath,
    }
  } catch (error) {
    console.error("Error in uploadImage:", error)
    return {
      success: false,
      error: (error as Error).message || "Failed to upload image",
    }
  }
}

