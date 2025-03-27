"use client"

import { Button } from "@/components/ui/button"
import { SparklesCore } from "@/components/sparkles"
import Logo from "@/components/logo"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah has over 15 years of experience in digital marketing and web development. She founded NOX Media with a vision to help businesses thrive in the digital landscape.",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael leads our technical team with expertise in cutting-edge web technologies. He ensures our clients receive the most innovative and effective technical solutions.",
    },
    {
      name: "Emily Rodriguez",
      position: "Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Emily brings her artistic vision and design expertise to every project. She leads our creative team in developing stunning visual identities for our clients.",
    },
    {
      name: "David Kim",
      position: "SEO Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David is an expert in search engine optimization with a proven track record of improving rankings and driving organic traffic for our clients.",
    },
  ]

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
            <Logo />
          </Link>
          <Link href="/">
            <Button variant="outline" className="text-white border-white/20">
              Back to Home
            </Button>
          </Link>
        </header>

        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">About NOX Media</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're a team of passionate digital experts dedicated to helping businesses succeed online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2015, NOX Media began with a simple mission: to help businesses navigate the increasingly
                  complex digital landscape and achieve meaningful results.
                </p>
                <p>
                  What started as a small team of passionate digital marketers has grown into a full-service digital
                  agency with expertise in web development, SEO, content creation, and social media marketing.
                </p>
                <p>
                  Over the years, we've had the privilege of working with hundreds of clients across various industries,
                  from startups to established enterprises. Our approach combines creativity, technical expertise, and
                  data-driven strategies to deliver solutions that drive real business growth.
                </p>
                <p>
                  Today, we continue to evolve and adapt to the ever-changing digital landscape, staying at the
                  forefront of industry trends and technologies to provide our clients with cutting-edge solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image src="/placeholder.svg?height=800&width=600" alt="NOX Media Team" fill className="object-cover" />
            </motion.div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These core principles guide everything we do at NOX Media.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              >
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-400">
                  We strive for excellence in everything we do, from the quality of our work to the service we provide
                  our clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              >
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400">
                  We embrace innovation and continuously explore new technologies and strategies to keep our clients
                  ahead of the curve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              >
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-400">
                  We believe in the power of collaboration, both within our team and with our clients, to achieve the
                  best possible results.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet the talented individuals who make NOX Media exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 mb-4">{member.position}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business achieve its digital goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

