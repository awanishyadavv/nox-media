"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { BarChart, Users, FileText, Home, LogOut, X, ImageIcon, Loader2 } from "lucide-react"
import AdminHeader from "@/components/admin-header"
import Image from "next/image"
import { createBlogPost, deleteBlogPost, getBlogPosts, type BlogPost } from "@/app/actions/blog"
import { uploadImage } from "@/app/actions/storage"
import { toast } from "@/components/ui/use-toast"

// Currency formatter for Indian Rupees
const formatCurrency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
})

export default function AdminDashboard() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPosts, setIsLoadingPosts] = useState(true)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  // New blog post form state with validation
  const [newPost, setNewPost] = useState<BlogPost>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
  })

  const [formErrors, setFormErrors] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
    slug: "",
  })

  // Homepage content state
  const [homepageContent, setHomepageContent] = useState({
    heroTitle: "Elevate Your Digital Presence",
    heroSubtitle:
      "We craft stunning websites and powerful digital marketing strategies that drive results and transform your business.",
    aboutText:
      "NOX Media is a leading digital agency specializing in web development, SEO, and digital marketing. With over 10 years of experience, we've helped hundreds of businesses achieve their online goals.",
  })

  useEffect(() => {
    setIsClient(true)
    checkAuth()
    fetchBlogPosts()
  }, [])

  const fetchBlogPosts = async () => {
    setIsLoadingPosts(true)
    try {
      const result = await getBlogPosts()
      if (result.success && result.data) {
        setBlogPosts(result.data)
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error)
    } finally {
      setIsLoadingPosts(false)
    }
  }

  const checkAuth = () => {
    // Add your authentication logic here
    const isAuthenticated = localStorage.getItem("adminToken")
    if (!isAuthenticated) {
      router.push("/signin")
    }
  }

  const validateForm = () => {
    const errors = {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      image: "",
      slug: "",
    }
    let isValid = true

    if (!newPost.title.trim()) {
      errors.title = "Title is required"
      isValid = false
    }

    if (!newPost.slug.trim()) {
      // Generate slug from title
      const slug = newPost.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      setNewPost((prev) => ({ ...prev, slug }))
    }

    if (!newPost.excerpt.trim()) {
      errors.excerpt = "Excerpt is required"
      isValid = false
    }
    if (!newPost.content.trim()) {
      errors.content = "Content is required"
      isValid = false
    }
    if (!newPost.category.trim()) {
      errors.category = "Category is required"
      isValid = false
    }
    if (!newPost.image) {
      errors.image = "Featured image is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleNewPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // If title is changed, generate a slug
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      setNewPost((prev) => ({
        ...prev,
        [name]: value,
        slug,
      }))
    } else {
      setNewPost((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    setFormErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors((prev) => ({ ...prev, image: "Image size should be less than 5MB" }))
        return
      }

      setIsLoading(true)

      try {
        // For demo purposes, we'll use a FileReader to create a data URL
        const reader = new FileReader()
        reader.onloadend = () => {
          const imageUrl = reader.result as string
          setNewPost((prev) => ({
            ...prev,
            image: imageUrl,
          }))
          setFormErrors((prev) => ({ ...prev, image: "" }))
          setIsLoading(false)
        }
        reader.readAsDataURL(file)
      } catch (error) {
        console.error("Error processing image:", error)
        setFormErrors((prev) => ({ ...prev, image: "Failed to process image" }))
        setIsLoading(false)
      }
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setNewPost((prev) => ({
      ...prev,
      image: "",
    }))
  }

  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      // Upload image to Supabase Storage if it's a base64 string
      let imageUrl = newPost.image
      if (newPost.image.startsWith("data:")) {
        const uploadResult = await uploadImage(newPost.image)
        if (uploadResult.success && uploadResult.url) {
          imageUrl = uploadResult.url
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: uploadResult.error || "Failed to upload image",
          })
          setIsLoading(false)
          return
        }
      }

      // Create blog post in Supabase
      const result = await createBlogPost({
        ...newPost,
        image: imageUrl,
      })

      if (result.success) {
        // Refresh the blog posts list
        await fetchBlogPosts()

        // Reset form
        setNewPost({
          title: "",
          slug: "",
          excerpt: "",
          content: "",
          category: "",
          image: "",
        })

        // Show success message
        toast({
          title: "Success",
          description: "Blog post published successfully!",
        })
      } else {
        // Show detailed error message
        toast({
          variant: "destructive",
          title: "Error Publishing Post",
          description: result.error || "Failed to publish blog post. Please check your database connection.",
        })

        // If it's a Supabase URL error, show a more helpful message
        if (result.error?.includes("Supabase URL")) {
          toast({
            variant: "destructive",
            title: "Database Configuration Error",
            description: "The Supabase URL is missing. Please check your environment variables.",
          })
        }
      }
    } catch (error) {
      console.error("Error adding post:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: (error as Error).message || "An unexpected error occurred",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeletePost = async (postId: number) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return

    setIsLoading(true)
    try {
      const result = await deleteBlogPost(postId)

      if (result.success) {
        // Refresh the blog posts list
        await fetchBlogPosts()

        // Show success message
        alert("Blog post deleted successfully!")
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (error) {
      console.error("Error deleting post:", error)
      alert(`Error: ${(error as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveHomepageContent = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // In a real app, you would save this to your backend
      localStorage.setItem("homepageContent", JSON.stringify(homepageContent))
      alert("Homepage content saved successfully!")
    } catch (error) {
      console.error("Error saving homepage content:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/signin")
  }

  if (!isClient) {
    return null // Prevent rendering on server to avoid hydration issues
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <AdminHeader onLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#dashboard">
                      <BarChart className="mr-2 h-4 w-4" />
                      Dashboard
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#blog-posts">
                      <FileText className="mr-2 h-4 w-4" />
                      Blog Posts
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#homepage">
                      <Home className="mr-2 h-4 w-4" />
                      Homepage
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="#users">
                      <Users className="mr-2 h-4 w-4" />
                      Users
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <Tabs defaultValue="dashboard">
              <TabsList className="mb-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="homepage">Homepage</TabsTrigger>
              </TabsList>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" id="dashboard">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome to the Admin Dashboard</CardTitle>
                    <CardDescription>Manage your website content, blog posts, and more.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Total Blog Posts</p>
                              <p className="text-2xl font-bold">{blogPosts.length}</p>
                            </div>
                            <FileText className="h-8 w-8 text-purple-500" />
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Total Revenue</p>
                              <p className="text-2xl font-bold">{formatCurrency.format(250000)}</p>
                            </div>
                            <BarChart className="h-8 w-8 text-purple-500" />
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">Active Users</p>
                              <p className="text-2xl font-bold">12</p>
                            </div>
                            <Users className="h-8 w-8 text-purple-500" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Blog Posts Tab */}
              <TabsContent value="blog" id="blog-posts">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Add New Blog Post</CardTitle>
                    <CardDescription>Create a new blog post to publish on your website.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddPost} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          name="title"
                          value={newPost.title}
                          onChange={handleNewPostChange}
                          placeholder="Enter post title"
                          className={formErrors.title ? "border-red-500" : ""}
                        />
                        {formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="slug">Slug (URL)</Label>
                        <Input
                          id="slug"
                          name="slug"
                          value={newPost.slug}
                          onChange={handleNewPostChange}
                          placeholder="post-url-slug"
                          className={formErrors.slug ? "border-red-500" : ""}
                        />
                        <p className="text-xs text-gray-500">Auto-generated from title, but you can customize it</p>
                        {formErrors.slug && <p className="text-red-500 text-sm">{formErrors.slug}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input
                          id="category"
                          name="category"
                          value={newPost.category}
                          onChange={handleNewPostChange}
                          placeholder="Enter post category"
                          className={formErrors.category ? "border-red-500" : ""}
                        />
                        {formErrors.category && <p className="text-red-500 text-sm">{formErrors.category}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                          id="excerpt"
                          name="excerpt"
                          value={newPost.excerpt}
                          onChange={handleNewPostChange}
                          placeholder="Brief summary of the post"
                          className={`min-h-[100px] ${formErrors.excerpt ? "border-red-500" : ""}`}
                        />
                        {formErrors.excerpt && <p className="text-red-500 text-sm">{formErrors.excerpt}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                          id="content"
                          name="content"
                          value={newPost.content}
                          onChange={handleNewPostChange}
                          placeholder="Full blog post content"
                          className={`min-h-[200px] ${formErrors.content ? "border-red-500" : ""}`}
                        />
                        {formErrors.content && <p className="text-red-500 text-sm">{formErrors.content}</p>}
                      </div>

                      {/* Image Upload Section */}
                      <div className="space-y-2">
                        <Label htmlFor="image" className="flex items-center gap-2">
                          <span>Featured Image</span>
                          {formErrors.image && <span className="text-red-500 text-xs">({formErrors.image})</span>}
                        </Label>
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />

                        {newPost.image ? (
                          <div className="relative mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
                            <div className="relative h-48 w-full">
                              <Image
                                src={newPost.image || "/placeholder.svg"}
                                alt="Featured image preview"
                                fill
                                className="object-cover"
                                unoptimized={newPost.image.startsWith("data:")}
                              />
                            </div>
                            <div className="absolute top-2 right-2 flex gap-2">
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="rounded-full w-8 h-8 p-0"
                                onClick={removeImage}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="bg-black/50 backdrop-blur-sm p-2 absolute bottom-0 left-0 right-0">
                              <p className="text-white text-xs truncate">Featured image</p>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                              formErrors.image ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                            }`}
                            onClick={triggerFileInput}
                          >
                            <div className="flex flex-col items-center justify-center gap-2">
                              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                                <ImageIcon className="h-8 w-8 text-purple-500" />
                              </div>
                              <div>
                                <p className="mt-2 text-sm font-medium">Click to upload featured image</p>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                  PNG, JPG or WEBP (max. 5MB)
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {newPost.id ? "Updating..." : "Publishing..."}
                          </>
                        ) : newPost.id ? (
                          "Update Post"
                        ) : (
                          "Publish Post"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Manage Blog Posts</CardTitle>
                    <CardDescription>Edit or delete existing blog posts.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isLoadingPosts ? (
                      <div className="flex justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {blogPosts.length === 0 ? (
                          <p className="text-center py-8 text-gray-500">No blog posts found</p>
                        ) : (
                          blogPosts.map((post) => (
                            <Card key={post.id} className="overflow-hidden">
                              <CardContent className="p-0">
                                <div className="grid grid-cols-1 md:grid-cols-4">
                                  {post.image && (
                                    <div className="relative h-40 md:h-full">
                                      <Image
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        unoptimized={post.image.startsWith("data:")}
                                      />
                                    </div>
                                  )}
                                  <div className={post.image ? "md:col-span-3 p-6" : "col-span-full p-6"}>
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <h3 className="font-semibold text-lg">{post.title}</h3>
                                        <div className="flex items-center text-sm text-gray-500 mt-1">
                                          <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-0.5 rounded text-xs">
                                            {post.category}
                                          </span>
                                          <span className="mx-2">•</span>
                                          <span>{post.date}</span>
                                        </div>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                                      </div>
                                      <div className="flex space-x-2">
                                        <Button variant="outline" size="sm">
                                          Edit
                                        </Button>
                                        <Button
                                          variant="destructive"
                                          size="sm"
                                          onClick={() => post.id && handleDeletePost(post.id)}
                                          disabled={isLoading}
                                        >
                                          Delete
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Homepage Content Tab */}
              <TabsContent value="homepage" id="homepage">
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Homepage Content</CardTitle>
                    <CardDescription>Update the content displayed on your homepage.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveHomepageContent} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="heroTitle">Hero Title</Label>
                        <Input
                          id="heroTitle"
                          name="heroTitle"
                          value={homepageContent.heroTitle}
                          onChange={(e) => setHomepageContent((prev) => ({ ...prev, heroTitle: e.target.value }))}
                          placeholder="Main headline for your homepage"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
                        <Textarea
                          id="heroSubtitle"
                          name="heroSubtitle"
                          value={homepageContent.heroSubtitle}
                          onChange={(e) => setHomepageContent((prev) => ({ ...prev, heroSubtitle: e.target.value }))}
                          placeholder="Supporting text for your headline"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="aboutText">About Text</Label>
                        <Textarea
                          id="aboutText"
                          name="aboutText"
                          value={homepageContent.aboutText}
                          onChange={(e) => setHomepageContent((prev) => ({ ...prev, aboutText: e.target.value }))}
                          placeholder="Text for the about section"
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving Changes...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

