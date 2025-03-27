"use server"

import { getServerClient } from "@/lib/supabase"
import { z } from "zod"
import { revalidatePath } from "next/cache"

export interface BlogPost {
  id?: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  image: string
  date?: string
  author?: string
}

// Define a schema for blog post validation
const blogPostSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters" }),
  content: z.string().min(50, { message: "Content must be at least 50 characters" }),
  category: z.string().min(2, { message: "Category must be at least 2 characters" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
})

export async function getBlogPosts() {
  try {
    const supabase = getServerClient()

    const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching blog posts:", error)
      return { success: false, error: error.message }
    }

    // Format the date for each post
    const formattedPosts = data.map((post) => ({
      ...post,
      date: new Date(post.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }))

    return { success: true, data: formattedPosts }
  } catch (error) {
    console.error("Error in getBlogPosts:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const supabase = getServerClient()

    const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).single()

    if (error) {
      console.error("Error fetching blog post:", error)
      return { success: false, error: error.message }
    }

    // Format the date
    const formattedPost = {
      ...data,
      date: new Date(data.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }

    return { success: true, data: formattedPost }
  } catch (error) {
    console.error("Error in getBlogPostBySlug:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function createBlogPost(post: BlogPost) {
  try {
    // Validate the blog post data
    try {
      blogPostSchema.parse(post)
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        const errorMessage = validationError.errors.map((err) => `${err.path}: ${err.message}`).join(", ")
        return { success: false, error: errorMessage }
      }
      throw validationError
    }

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

    // Check if slug already exists
    const { data: existingPost } = await supabase.from("blog_posts").select("slug").eq("slug", post.slug).single()

    if (existingPost) {
      return { success: false, error: "A post with this slug already exists" }
    }

    // Insert the blog post
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          image: post.image,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          author: post.author || "Admin",
        },
      ])
      .select()

    if (error) {
      console.error("Error creating blog post:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the blog pages
    revalidatePath("/blog")

    return { success: true, data: data[0] }
  } catch (error) {
    console.error("Error in createBlogPost:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function updateBlogPost(id: number, post: Partial<BlogPost>) {
  try {
    const supabase = getServerClient()

    // Update the blog post
    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        ...post,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()

    if (error) {
      console.error("Error updating blog post:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the blog pages
    revalidatePath("/blog")
    revalidatePath(`/blog/${post.slug}`)

    return { success: true, data: data[0] }
  } catch (error) {
    console.error("Error in updateBlogPost:", error)
    return { success: false, error: (error as Error).message }
  }
}

export async function deleteBlogPost(id: number) {
  try {
    const supabase = getServerClient()

    // Get the post slug before deleting
    const { data: post } = await supabase.from("blog_posts").select("slug").eq("id", id).single()

    // Delete the blog post
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (error) {
      console.error("Error deleting blog post:", error)
      return { success: false, error: error.message }
    }

    // Revalidate the blog pages
    revalidatePath("/blog")
    if (post?.slug) {
      revalidatePath(`/blog/${post.slug}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Error in deleteBlogPost:", error)
    return { success: false, error: (error as Error).message }
  }
}

