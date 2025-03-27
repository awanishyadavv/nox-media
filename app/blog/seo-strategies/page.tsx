"use client"

import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>10 SEO Strategies That Actually Work in 2025 | Nox Media</title>
        <meta
          name="description"
          content="Discover 10 proven SEO strategies for 2025 to boost your website traffic and search rankings. Stay ahead with AI, voice search, and Core Web Vitals optimization."
        />
        <meta
          name="keywords"
          content="SEO strategies, AI SEO, voice search optimization, Core Web Vitals, mobile-first indexing, content optimization, semantic search, Google ranking"
        />
        <meta property="og:title" content="10 SEO Strategies That Actually Work in 2025" />
        <meta
          property="og:description"
          content="Explore the top SEO techniques to dominate search rankings in 2025, including AI-powered content, voice search optimization, and Core Web Vitals improvements."
        />
        <meta
          property="og:image"
          content="https://cdn.shopify.com/s/files/1/0733/5270/8348/files/1690.jpg?v=1741874090"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://cdn.shopify.com/s/files/1/0733/5270/8348/files/7484896.jpg?v=1741874204"
        />
      </Head>

      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
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
          <header className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10">
            <Link href="/">
              <div className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
                  NOX
                </span>
                <span className="text-white ml-1 font-light">Media</span>
              </div>
            </Link>
            <Link href="/#blog">
              <Button variant="outline" className="text-white border-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </header>

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
                  Mar 10, 2025
                  <span className="mx-2">•</span>
                  <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">SEO</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  10 SEO Strategies That Actually Work in 2025
                </h1>
                <p className="text-gray-400 text-xl">
                  Discover the most effective SEO strategies that are driving results in today's competitive digital
                  landscape.
                </p>
              </div>

              {/* Updated Image Section */}
              <div className="relative w-full h-[50vh] mb-12 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0733/5270/8348/files/1690.jpg?v=1741874090" // Updated image URL
                  alt="SEO Strategies"
                  fill
                  className="object-cover"
                  priority // Optional: Ensures the image loads quickly
                />
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  In the ever-evolving world of search engine optimization, staying ahead of the curve is essential for
                  maintaining visibility and driving organic traffic.
                </p>

                <h2>1. AI-Powered Content Optimization</h2>
                <p>
                  AI-driven tools analyze top-ranking content, helping to refine and enhance your SEO strategy for
                  better visibility.
                </p>

                <h2>2. Core Web Vitals Optimization</h2>
                <p>Optimize your site's speed, interactivity, and visual stability to rank higher in search results.</p>

                <h2>3. Voice Search Optimization</h2>
                <p>Target long-tail, conversational keywords and optimize for featured snippets.</p>

                <h2>4. Semantic Search and Entity Optimization</h2>
                <p>Use structured data, topic clusters, and authoritative backlinks to improve search rankings.</p>

                <h2>5. Mobile-First Indexing</h2>
                <p>Ensure your website provides a seamless mobile experience for users.</p>
              </div>

              <div className="my-12 p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Need help implementing these strategies?</h3>
                <p className="text-gray-300 mb-6">
                  Our SEO experts can help you develop and implement a customized SEO strategy tailored to your business
                  goals.
                </p>
                <Link href="/#contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Contact Us Today</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

