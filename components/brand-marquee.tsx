"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BrandMarquee() {
  const brands = [
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
  ]

  return (
    <div className="bg-black/50 backdrop-blur-sm border-y border-white/10 py-10 overflow-hidden">
      <div className="flex items-center justify-center">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-16 items-center"
        >
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={brand || "/placeholder.svg"}
                alt={`Brand ${i + 1}`}
                width={120}
                height={60}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

