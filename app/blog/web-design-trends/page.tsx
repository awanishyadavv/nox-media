"use client"

import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function BlogPost() {
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
                Mar 5, 2025
                <span className="mx-2">•</span>
                <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">Web Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Future of Web Design: Trends to Watch
              </h1>
              <p className="text-gray-400 text-xl">
                Explore the emerging web design trends that are shaping the future of digital experiences.
              </p>
            </div>

            <div className="relative w-full h-[50vh] mb-12 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Web Design Trends"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Web design is constantly evolving, with new technologies and user preferences shaping the digital
                landscape. In 2025, we're seeing several exciting trends emerge that are redefining how websites look,
                feel, and function. Let's explore the most influential web design trends that are setting the stage for
                the future.
              </p>

              <h2>1. Immersive 3D Experiences</h2>
              <p>
                With advancements in browser capabilities and WebGL, immersive 3D experiences are becoming increasingly
                common on websites. These interactive elements not only captivate visitors but also provide new ways to
                showcase products and services.
              </p>
              <p>
                Leading brands are implementing 3D elements that users can interact with, rotate, and explore, creating
                memorable experiences that significantly improve engagement and conversion rates.
              </p>

              <h2>2. AI-Powered Personalization</h2>
              <p>
                AI and machine learning are revolutionizing web personalization, enabling websites to adapt dynamically
                to individual users in real-time. In 2025, we're seeing sophisticated AI algorithms that analyze user
                behavior and preferences to deliver tailored content, product recommendations, and even customized
                layouts.
              </p>
              <p>
                This level of personalization creates more relevant experiences for users, leading to longer session
                durations and higher conversion rates.
              </p>

              <h2>3. Neomorphic Design Elements</h2>
              <p>
                Neomorphism, a design approach that combines elements of skeuomorphism and flat design, is gaining
                significant traction. This style creates soft, extruded plastic-like interfaces with subtle shadows that
                appear connected to the background.
              </p>
              <p>
                Neomorphic elements provide a tactile quality to digital interfaces, making them feel more physical and
                intuitive. This design style is particularly effective for interactive elements like buttons, sliders,
                and toggles.
              </p>

              <h2>4. Voice User Interfaces (VUI)</h2>
              <p>
                As voice technology becomes more sophisticated, voice user interfaces are increasingly being integrated
                into websites. In 2025, more sites are offering voice navigation options, voice search functionality,
                and even voice-activated checkout processes.
              </p>
              <p>
                This trend is making websites more accessible and providing alternative ways for users to interact with
                digital content, especially in situations where hands-free navigation is preferable.
              </p>

              <h2>5. Responsible Design</h2>
              <p>
                With growing awareness of digital ethics, responsible design has emerged as a crucial trend. This
                approach encompasses:
              </p>
              <ul>
                <li>Sustainable web design practices that minimize environmental impact</li>
                <li>Inclusive design that ensures accessibility for all users</li>
                <li>Ethical data collection and transparent privacy practices</li>
                <li>Reduction of dark patterns that manipulate user behavior</li>
              </ul>
              <p>
                In 2025, users are increasingly favoring brands that demonstrate a commitment to responsible design
                principles.
              </p>

              <h2>Conclusion</h2>
              <p>
                As we look toward the future of web design, it's clear that the most successful websites will be those
                that effectively balance innovative visual elements with exceptional functionality and user experience.
                By staying ahead of these trends and thoughtfully implementing them, businesses can create digital
                experiences that not only captivate visitors but also drive meaningful engagement and conversion.
              </p>
            </div>

            <div className="my-12 p-6 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                Ready to update your website with these modern design trends?
              </h3>
              <p className="text-gray-300 mb-6">
                Our design team can help you implement these cutting-edge trends while maintaining focus on user
                experience and conversion optimization.
              </p>
              <Link href="/#contact">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Discuss Your Project</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

