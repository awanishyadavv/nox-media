"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Rocket } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElements count={8} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Elevate Your Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Presence With AI
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            We craft stunning websites and powerful digital marketing strategies that drive results and transform your
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none"
              onClick={() => scrollToSection("pricing")}
            >
              See Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">100+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-white font-medium">100%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-medium">2+ Years</p>
                <p className="text-gray-400 text-sm">Industry Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

