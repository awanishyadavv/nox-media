"use client"

import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug

  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load blog posts from localStorage
    if (typeof window !== "undefined" && slug) {
      const savedPosts = localStorage.getItem("blogPosts")
      if (savedPosts) {
        try {
          const parsedPosts = JSON.parse(savedPosts)
          // Find the post with matching slug
          const foundPost = parsedPosts.find(
            (p: any) => (p.slug && p.slug === slug) || p.title.toLowerCase().replace(/\s+/g, "-") === slug,
          )

          if (foundPost) {
            setPost(foundPost)
          } else {
            // If not found in localStorage, check default posts
            const defaultPosts = [
              {
                title: "10 SEO Strategies That Actually Work in 2025",
                content:
                  "In the ever-evolving world of search engine optimization, staying ahead of the curve is essential for maintaining visibility and driving organic traffic. Here are 10 strategies that are proven to work in 2025:\n\n1. AI-Powered Content Optimization\n2. Core Web Vitals Optimization\n3. Voice Search Optimization\n4. Semantic Search and Entity Optimization\n5. Mobile-First Indexing\n6. Video SEO\n7. E-A-T Principles Implementation\n8. User Intent Optimization\n9. Local SEO Enhancement\n10. Technical SEO Automation",
                date: "Mar 10, 2025",
                image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/7484896.jpg",
                category: "SEO",
                slug: "seo-strategies",
              },
              {
                title: "The Future of Web Design: Trends to Watch",
                content:
                  "Web design is constantly evolving, with new technologies and user preferences shaping the digital landscape. In 2025, we're seeing several exciting trends emerge that are redefining how websites look, feel, and function.\n\n1. Immersive 3D Experiences\n2. AI-Powered Personalization\n3. Neomorphic Design Elements\n4. Voice User Interfaces (VUI)\n5. Responsible Design\n6. Micro-interactions\n7. Dark Mode Standardization\n8. Augmented Reality Integration\n9. Scrollytelling\n10. Accessibility-First Design",
                date: "Mar 5, 2025",
                image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/high-tech-view-futuristic-earth.png",
                category: "Web Design",
                slug: "web-design-trends",
              },
              {
                title: "How to Create a Social Media Strategy That Converts",
                content:
                  "A successful social media strategy requires more than just posting content regularly. It needs to be strategic, targeted, and conversion-focused. Here's how to create a social media strategy that actually converts followers into customers:\n\n1. Define Clear Conversion Goals\n2. Understand Your Audience Deeply\n3. Conduct Competitive Analysis\n4. Create Platform-Specific Content\n5. Implement a Content Calendar\n6. Use Data-Driven Decision Making\n7. Leverage User-Generated Content\n8. Incorporate Social Selling Techniques\n9. Optimize Posting Times and Frequency\n10. Continuously Test and Refine",
                date: "Feb 28, 2025",
                image:
                  "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/social-media-marketing-concept-marketing-with-applications.jpg",
                category: "Social Media",
                slug: "social-media-strategy",
              },
            ]

            const defaultPost = defaultPosts.find((p) => p.slug === slug)
            if (defaultPost) {
              setPost(defaultPost)
            } else {
              setError("Blog post not found")
            }
          }
        } catch (error) {
          console.error("Error parsing blog posts:", error)
          setError("Error loading blog post")
        }
      } else {
        setError("No blog posts found")
      }
      setLoading(false)
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Blog Post Not Found</h2>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <Header />

      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
                <span className="mx-2">•</span>
                <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">{post.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
            </div>

            <div className="relative w-full h-[50vh] mb-12 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg?height=600&width=1200"}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized={post.image && post.image.startsWith("data:")}
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/blog">
                <Button variant="outline" className="text-white border-white/20">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

