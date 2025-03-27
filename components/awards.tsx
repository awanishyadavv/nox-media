"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Award, Star, Medal } from "lucide-react"
import Image from "next/image"
import type { JSX } from "react"

interface AwardProps {
  id: number
  title: string
  organization: string
  year: string
  description: string
  image: string
  icon: JSX.Element
}

export default function Awards() {
  const [activeAward, setActiveAward] = useState<number | null>(null)

  // Reduced to 4 awards
  const awards: AwardProps[] = [
    {
      id: 1,
      title: "Best Digital Agency",
      organization: "Digital Excellence Awards",
      year: "2024",
      description: "Recognized for outstanding achievement in digital marketing and web development.",
      image:
        "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/Gold_Bold_Elegance_Leadership_Award_Certificate.png",
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
    },
    {
      id: 2,
      title: "Innovation in Web Design",
      organization: "Web Design Global Summit",
      year: "2023",
      description: "Awarded for innovative approaches to responsive and accessible web design.",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/Cream_Bordered_Appreciation_Certificate.png",
      icon: <Star className="h-6 w-6 text-yellow-400" />,
    },
    {
      id: 3,
      title: "Top SEO Performance",
      organization: "Search Marketing Association",
      year: "2023",
      description: "Recognized for exceptional results in search engine optimization campaigns.",
      image:
        "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/Gold_and_White_Elegant_Appreciation_Certificate.png",
      icon: <Medal className="h-6 w-6 text-yellow-400" />,
    },
    {
      id: 4,
      title: "Excellence in Mobile UX",
      organization: "Mobile Experience Awards",
      year: "2022",
      description: "Honored for creating outstanding mobile user experiences across platforms.",
      image:
        "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/Gold_and_Brown_Elegant_Professional_Certificate_of_Appreciation_Certificate.png",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition of our commitment to excellence and innovation in the digital space
          </p>
        </motion.div>

        {/* Changed from grid to flex layout for inline display */}
        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="relative group w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm"
              onMouseEnter={() => setActiveAward(award.id)}
              onMouseLeave={() => setActiveAward(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <motion.div
                    className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full"
                    animate={{
                      rotate: activeAward === award.id ? [0, 15, -15, 0] : 0,
                      scale: activeAward === award.id ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.5, repeat: activeAward === award.id ? 1 : 0 }}
                  >
                    {award.icon}
                  </motion.div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 mr-2">
                      {award.year}
                    </span>
                    <h3 className="text-lg font-bold text-white truncate">{award.title}</h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-3">{award.organization}</p>
                  <p className="text-sm text-gray-500 flex-grow">{award.description}</p>

                  <motion.div
                    className="mt-4 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 italic">
            "Excellence is not a destination; it's a continuous journey that never ends."
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl"></div>
    </section>
  )
}

