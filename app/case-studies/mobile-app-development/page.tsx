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
              <span className="text-purple-400 text-sm font-medium">App Development</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Mobile App Development</h1>
              <p className="text-gray-400 text-xl">
                Custom mobile application with over 100,000 downloads in the first month.
              </p>
            </div>

            <div className="relative w-full h-[60vh] mb-12 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Mobile App Development"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Client</h3>
                <p className="text-gray-400">QuickServe</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Timeframe</h3>
                <p className="text-gray-400">6 Months</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-2">Services</h3>
                <p className="text-gray-400">UI/UX Design, Mobile App Development, Backend Infrastructure</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p>
                  QuickServe, a food delivery startup, needed a robust mobile application to disrupt the competitive
                  food delivery market in India. The app needed to handle complex logistics, real-time tracking, and
                  provide a seamless user experience for customers, restaurants, and delivery partners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
                <p>
                  We adopted an agile development methodology, breaking the project into manageable sprints and focusing
                  on delivering core functionality first. Our team worked on:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Intuitive user interface design for three distinct user types (customers, restaurants, delivery
                    partners)
                  </li>
                  <li>Robust backend architecture for handling thousands of concurrent orders</li>
                  <li>Real-time GPS tracking and notifications system</li>
                  <li>Secure payment gateway integration</li>
                  <li>Advanced search and filtering options</li>
                  <li>Performance optimization for various network conditions</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 my-8">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="App screenshot 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="App screenshot 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="App screenshot 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
                <p>The QuickServe app launched to overwhelming success:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Over 100,000 downloads in the first month</li>
                  <li>4.8/5 average rating on app stores</li>
                  <li>25,000+ restaurants onboarded within three months</li>
                  <li>98.5% successful order completion rate</li>
                  <li>Featured as "App of the Day" on Apple App Store</li>
                  <li>Series A funding secured based on initial app performance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Client Testimonial</h2>
                <blockquote className="bg-black/50 backdrop-blur-sm border-l-4 border-purple-500 p-6 italic">
                  "NOX Media delivered beyond our expectations. Not only did they build a technically sound application,
                  but they also contributed valuable insights that improved our business model. The app's success has
                  been instrumental in our rapid growth and funding."
                  <footer className="mt-2 text-purple-400 not-italic">
                    — Rajiv Mehta, Founder & CEO of QuickServe
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

