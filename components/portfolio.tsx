"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import OptimizedImage from "./optimized-image"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Portfolio() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  const projects = [
    {
      title: "E-Commerce Redesign",
      category: "Web Development",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/5809368.jpg",
      description: "Complete redesign of an e-commerce platform resulting in 40% increase in conversions.",
      link: "/case-studies/e-commerce-redesign",
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/7038058.jpg",
      description: "Strategic social media campaign that increased brand engagement by 75%.",
      link: "/case-studies/social-media-campaign",
    },
    {
      title: "Mobile App Development",
      category: "App Development",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/2727507.jpg",
      description: "Custom mobile application with over 100,000 downloads in the first month.",
      link: "/case-studies/mobile-app-development",
    },
    {
      title: "SEO Optimization",
      category: "SEO",
      image: "https://cdn.shopify.com/s/files/1/0733/5270/8348/files/1690.jpg",
      description: "Comprehensive SEO strategy that improved search rankings by 200%.",
      link: "/case-studies/seo-optimization",
    },
  ]

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {isMobile ? (
                // Mobile layout - stacked content
                <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      fallbackSrc="/placeholder.svg?height=400&width=600"
                    />
                    <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <Link href={project.link}>
                      <Button
                        variant="ghost"
                        className="text-white w-fit p-0 hover:bg-transparent hover:text-purple-400"
                      >
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                // Desktop layout - overlay content
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video relative">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      fallbackSrc="/placeholder.svg?height=400&width=600"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <span className="text-purple-400 text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <Link href={project.link}>
                      <Button
                        variant="ghost"
                        className="text-white w-fit p-0 hover:bg-transparent hover:text-purple-400"
                      >
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">View All Projects</Button>
        </motion.div>
      </div>
    </section>
  )
}

