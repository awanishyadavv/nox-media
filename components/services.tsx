"use client"
import { motion } from "framer-motion"
import { Code, Globe, Smartphone, PenTool, BarChart3, Layers } from "lucide-react"
import "./flip-card.css"

export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Web Dev",
      description: "Custom websites built with cutting-edge technologies that drive conversions.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Social Media",
      description: "Engaging social campaigns that build brand awareness and connect with your audience.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications with seamless user experiences.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-purple-500" />,
      title: "UI/UX Design",
      description: "User-centered design creating intuitive, engaging interfaces for digital products.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "E-Commerce",
      description: "End-to-end online store development with secure payment and inventory systems.",
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      title: "Content",
      description: "Strategic content planning and creation that resonates with your target audience.",
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </motion.div>

        {/* Fixed grid layout for better desktop display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="flip-card w-full max-w-[160px] h-[160px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="flex flex-col items-center justify-center h-full p-3 md:p-4">
                      <motion.div
                        className="mb-2 md:mb-3"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <p className="title text-sm font-bold mb-1 text-center whitespace-nowrap">{service.title}</p>
                      <p className="text-xs text-center">Tap for details</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="p-3 md:p-4 flex flex-col items-center justify-center h-full">
                      <p className="title text-sm font-bold mb-1 md:mb-2 text-center">{service.title}</p>
                      <p className="text-xs text-center line-clamp-4">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

