"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Blog() {
  const [posts, setPosts] = useState([
    {
      title: "10 SEO Strategies That Actually Work in 2025",
      excerpt:
        "Discover the most effective SEO strategies that are driving results in today's competitive digital landscape.",
      date: "Mar 10, 2025",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/7484896.jpg",
      category: "SEO",
      link: "/blog/seo-strategies",
    },
    {
      title: "The Future of Web Design: Trends to Watch",
      excerpt: "Explore the emerging web design trends that are shaping the future of digital experiences.",
      date: "Mar 5, 2025",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/high-tech-view-futuristic-earth.png",
      category: "Web Design",
      link: "/blog/web-design-trends",
    },
    {
      title: "How to Create a Social Media Strategy That Converts",
      excerpt:
        "Learn how to develop a social media strategy that drives engagement and converts followers into customers.",
      date: "Feb 28, 2025",
      image:
        "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/social-media-marketing-concept-marketing-with-applications.jpg",
      category: "Social Media",
      link: "/blog/social-media-strategy",
    },
  ])

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

  // Display only the 3 most recent posts
  const recentPosts = posts.slice(0, 3)

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
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
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">View All Articles</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

