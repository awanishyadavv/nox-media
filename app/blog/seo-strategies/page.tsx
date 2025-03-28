"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import OptimizedImage from "@/components/optimized-image"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BlogPostSchema } from "@/lib/schema"

// Helper to format a date for schema markup
const formatISODate = (dateStr: string) => {
  try {
    const date = new Date(dateStr);
    return date.toISOString();
  } catch (e) {
    return new Date().toISOString();
  }
};

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug

  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // SEO data
  const [seoData, setSeoData] = useState({
    title: "Blog Post | NOX Media",
    description: "Latest insights from NOX Media's blog.",
    canonicalUrl: `https://www.noxmedia.in/blog/${slug}`,
    imageUrl: "/placeholder.svg",
    publishDate: new Date().toISOString(),
    author: "NOX Media Team"
  });

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

            // Update SEO data
            setSeoData({
              title: `${foundPost.title} | NOX Media Blog`,
              description: foundPost.excerpt || foundPost.content?.substring(0, 160) || "Read our latest blog post on NOX Media.",
              canonicalUrl: `https://www.noxmedia.in/blog/${slug}`,
              imageUrl: foundPost.image || "/placeholder.svg",
              publishDate: formatISODate(foundPost.date || new Date().toISOString()),
              author: foundPost.author || "NOX Media Team"
            });
          } else {
            // Check default posts...
            setError("Blog post not found")
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
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={`${post.category}, blog, digital marketing, web design, nox media`} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.imageUrl} />
        <meta property="article:published_time" content={seoData.publishDate} />
        <meta property="article:author" content={seoData.author} />
        <meta property="article:section" content={post.category} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.canonicalUrl} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.imageUrl} />
      </Head>

      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
        <Header />

        {/* Schema.org structured data */}
        <BlogPostSchema
          title={post.title}
          description={post.excerpt || post.content?.substring(0, 160) || ""}
          slug={String(slug)}
          date={seoData.publishDate}
          image={post.image || "/placeholder.svg"}
          authorName={post.author || "NOX Media Team"}
        />

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
                {post.author && (
                  <div className="text-gray-400 text-sm mb-4">
                    By <span className="text-purple-400">{post.author}</span>
                  </div>
                )}
              </div>

              <div className="relative w-full h-[50vh] mb-12 rounded-lg overflow-hidden">
                {/* Remove the description prop which isn't supported */}
                <OptimizedImage
                  src={post.image || "/placeholder.svg?height=600&width=1200"}
                  alt={`Featured image for ${post.title}`}
                  title={post.title}
                  fill
                  className="object-cover"
                  priority={true}
                  unoptimized={post.image && post.image.startsWith("data:")}
                />
              </div>

              <article className="prose prose-lg prose-invert max-w-none">
                {post.content.split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>

              {/* Social sharing buttons */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-white text-lg mb-4">Share this article</h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(seoData.canonicalUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md hover:bg-[#1a91da] transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(seoData.canonicalUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4267B2] text-white px-4 py-2 rounded-md hover:bg-[#365899] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(seoData.canonicalUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077b5] text-white px-4 py-2 rounded-md hover:bg-[#006699] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
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
    </>
  )
}