'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import Image from "next/image"

type Post = {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  link: string
}

type BlogContentProps = {
  initialPosts: Post[]
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  useEffect(() => {
    // Load blog posts from localStorage if available
    if (typeof window !== "undefined") {
      const savedPosts = localStorage.getItem("blogPosts")
      if (savedPosts) {
        try {
          const parsedPosts = JSON.parse(savedPosts)
          // Transform the posts to match the expected format
          const formattedPosts = parsedPosts.map((post: any) => ({
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
            image: post.image,
            category: post.category,
            link: `/blog/${post.slug || post.title.toLowerCase().replace(/\s+/g, "-")}`,
          }))
          setPosts(formattedPosts)
        } catch (error) {
          console.error("Error parsing blog posts:", error)
        }
      }
    }
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">NOX Media Blog</h1>
        <p className="text-gray-400 text-lg">
          Insights, strategies, and trends in web development, digital marketing, and creative design.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-16">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search articles..."
            className="bg-black/50 border-white/10 text-white pl-10 focus-visible:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
                <Link href={post.link} className="relative h-48 block">
                  <div className="relative w-full h-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized={post.image.startsWith("data:")}
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <Link href={post.link}>
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 mb-4 flex-1">{post.excerpt}</p>
                  <Link href={post.link} className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Load More Articles</Button>
      </div>
    </main>
  )
}