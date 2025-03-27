"use client"

import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function CaseStudyDetail() {
  return (
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">NOX</span>
              <span className="text-white ml-1 font-light">Media</span>
            </div>
          </Link>
          <Link href="/#portfolio">
            <Button variant="outline" className="text-white border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </header>

        <div className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <span className="text-purple-400 text-sm font-medium">SEO</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">SEO Optimization</h1>
              <p className="text-gray-400 text-xl">Comprehensive SEO strategy that improved search rankings by 200%.</p>
            </div>

            <div className="relative w-full h-[60vh] mb-12 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="SEO Optimization"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Client</h3>
                <p className="text-gray-400">Ayurveda Wellness Center</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Timeframe</h3>
                <p className="text-gray-400">6 Months</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <p className="text-gray-400">SEO Audit, On-Page SEO, Content Strategy, Backlink Building</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p>
                  Ayurveda Wellness Center, a holistic health practice, was struggling to gain visibility in search
                  engine results. Despite offering unique services and having a strong client base, their website was
                  buried on page 5+ of Google search results for relevant keywords.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
                <p>We conducted a comprehensive SEO audit and developed a multi-faceted strategy:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Technical SEO: Fixed crawlability issues, improved site structure and speed</li>
                  <li>Keyword research: Identified high-intent, low competition keywords in the Ayurveda space</li>
                  <li>On-page optimization: Enhanced meta titles, descriptions, headings, and content</li>
                  <li>Content strategy: Created an authoritative blog with in-depth articles on Ayurvedic practices</li>
                  <li>Local SEO: Optimized Google Business Profile and local citations</li>
                  <li>Backlink building: Secured quality backlinks from health and wellness websites</li>
                </ul>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden my-8">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="SEO growth chart"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
                <p>
                  After implementing our SEO strategy over a six-month period, Ayurveda Wellness Center saw significant
                  improvements:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>200% improvement in search rankings for target keywords</li>
                  <li>Top 3 positions for 15 high-value keywords</li>
                  <li>180% increase in organic traffic</li>
                  <li>65% increase in online appointment bookings</li>
                  <li>45% reduction in bounce rate</li>
                  <li>3.5x ROI on SEO investment</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Client Testimonial</h2>
                <blockquote className="bg-black/50 backdrop-blur-sm border-l-4 border-purple-500 p-6 italic">
                  "NOX Media has transformed our online presence completely. Our center is now visible to people
                  actively searching for Ayurvedic treatments, and we've welcomed many new clients who found us through
                  Google. The ROI has been exceptional."
                  <footer className="mt-2 text-purple-400 not-italic">
                    — Dr. Priya Sharma, Founder of Ayurveda Wellness Center
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/#contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Start Your Project</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

