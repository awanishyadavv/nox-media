"use client"

import { motion } from "framer-motion"
import { Lightbulb, Handshake, ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Values() {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from the quality of our work to the service we provide our clients.",
      icon: <Award className="h-8 w-8 text-purple-400" />,
      color: "from-purple-600 to-pink-500",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation and continuously explore new technologies and strategies to keep our clients ahead of the curve.",
      icon: <Lightbulb className="h-8 w-8 text-purple-400" />,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of collaboration, both within our team and with our clients, to achieve the best possible results.",
      icon: <Handshake className="h-8 w-8 text-purple-400" />,
      color: "from-pink-500 to-orange-400",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide our work and define our approach to client success
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] max-w-sm text-center"
            >
              <motion.div
                className={`h-16 w-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 mx-auto`}
                whileHover={{ scale: 1.1 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve its digital goals
          </p>
          <Link href="#contact">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

