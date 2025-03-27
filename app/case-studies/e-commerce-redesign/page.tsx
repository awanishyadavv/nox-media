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
              <span className="text-purple-400 text-sm font-medium">Web Development</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">E-Commerce Redesign</h1>
              <p className="text-gray-400 text-xl">
                Complete redesign of an e-commerce platform resulting in 40% increase in conversions.
              </p>
            </div>

            <div className="relative w-full h-[60vh] mb-12 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="E-Commerce Redesign"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Client</h3>
                <p className="text-gray-400">FashionHub India</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Timeframe</h3>
                <p className="text-gray-400">8 Weeks</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <p className="text-gray-400">UX/UI Design, Web Development, SEO</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p>
                  FashionHub, a leading online fashion retailer in India, was struggling with an outdated website that
                  resulted in high bounce rates and low conversion rates. Their existing platform was slow, difficult to
                  navigate, and not optimized for mobile devices, which make up over 70% of their traffic.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
                <p>
                  We began with a comprehensive audit of the existing platform, identifying pain points in the user
                  journey and technical issues affecting performance. Our team conducted user interviews and analyzed
                  competitor websites to understand industry best practices.
                </p>
                <p className="mt-4">
                  Based on our findings, we designed a completely new user experience that prioritized:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Simplified navigation and search functionality</li>
                  <li>Streamlined checkout process</li>
                  <li>Mobile-first design approach</li>
                  <li>Improved product visualization</li>
                  <li>Performance optimization for faster load times</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Before redesign"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                    <p className="text-white text-center text-sm">Before</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="After redesign"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
                    <p className="text-white text-center text-sm">After</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
                <p>
                  The redesigned e-commerce platform was launched after 8 weeks of development, and the results were
                  immediate:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>40% increase in conversion rate</li>
                  <li>35% reduction in bounce rate</li>
                  <li>50% increase in mobile transactions</li>
                  <li>25% increase in average order value</li>
                  <li>60% improvement in page load speed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Client Testimonial</h2>
                <blockquote className="bg-black/50 backdrop-blur-sm border-l-4 border-purple-500 p-6 italic">
                  "The NOX Media team completely transformed our online store. The new design not only looks fantastic
                  but has significantly improved our sales and customer satisfaction. Their attention to detail and
                  understanding of e-commerce best practices made all the difference."
                  <footer className="mt-2 text-purple-400 not-italic">— Vikram Sharma, CEO of FashionHub</footer>
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

