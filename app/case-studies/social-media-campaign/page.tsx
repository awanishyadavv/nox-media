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
              <span className="text-purple-400 text-sm font-medium">Digital Marketing</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Social Media Campaign</h1>
              <p className="text-gray-400 text-xl">
                Strategic social media campaign that increased brand engagement by 75%.
              </p>
            </div>

            <div className="relative w-full h-[60vh] mb-12 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Social Media Campaign"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Client</h3>
                <p className="text-gray-400">Green Earth Organics</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Timeframe</h3>
                <p className="text-gray-400">3 Months</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <p className="text-gray-400">Social Media Strategy, Content Creation, Paid Advertising</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p>
                  Green Earth Organics, a sustainable organic food brand, was struggling to gain traction in a
                  competitive market. Despite having quality products, their social media presence was minimal, with low
                  engagement rates and a small follower base.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
                <p>
                  We developed a comprehensive social media strategy focused on showcasing the brand's commitment to
                  sustainability, organic farming practices, and community involvement. Our approach included:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Content calendar development for consistent posting</li>
                  <li>High-quality visual content creation</li>
                  <li>Influencer partnerships with sustainability advocates</li>
                  <li>Community engagement through contests and user-generated content</li>
                  <li>Targeted paid advertising campaigns</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 my-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Instagram post example"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Facebook campaign"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Influencer collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
                <p>
                  Over the three-month campaign period, Green Earth Organics experienced significant growth across all
                  social media platforms:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>75% increase in overall engagement rate</li>
                  <li>120% growth in follower count</li>
                  <li>60% increase in website traffic from social media</li>
                  <li>35% increase in online sales attributed to social media</li>
                  <li>15 successful influencer partnerships</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Client Testimonial</h2>
                <blockquote className="bg-black/50 backdrop-blur-sm border-l-4 border-purple-500 p-6 italic">
                  "NOX Media transformed our social media presence from practically non-existent to a thriving community
                  of engaged followers. Their strategic approach and creative content have significantly boosted our
                  brand awareness and directly impacted our sales. We couldn't be happier with the results."
                  <footer className="mt-2 text-purple-400 not-italic">
                    — Anjali Reddy, Marketing Director at Green Earth Organics
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

