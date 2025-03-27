"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "Flipkart",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "TCS",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "Myntra",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "Infosys",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "Shopify",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "Reliance",
      logo: "/placeholder.svg?height=80&width=160",
    },
    {
      name: "Tata",
      logo: "/placeholder.svg?height=80&width=160",
    },
  ]

  return (
    <section id="partners" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders across various sectors to deliver exceptional digital
            solutions.
          </p>
        </motion.div>

        <div className="overflow-hidden relative py-10">
          <div className="relative w-full">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex items-center space-x-16 whitespace-nowrap"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 w-40 h-32 flex items-center justify-center hover:border-purple-500 transition-colors">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="max-w-full max-h-full opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

