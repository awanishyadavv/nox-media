"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, TrendingUp, Award, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"

const timelineEvents = [
  {
    year: 2021,
    title: "NOX Media Founded",
    description: "Established with a vision to bridge the gap between web development and digital marketing.",
    details:
      "Founded by tech and marketing experts, NOX Media started as a boutique agency focused on delivering integrated digital solutions for growing brands.",
    icon: <Users className="h-5 w-5" />,
    highlight: "Early clients received exclusive lifetime support packages",
  },
  {
    year: 2021,
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered a comprehensive digital transformation.",
    details:
      "Our work with a leading e-commerce brand set the standard for our approach to combining technical excellence with strategic marketing.",
    icon: <TrendingUp className="h-5 w-5" />,
    highlight: "Achieved 215% ROI for our first major client",
  },
  {
    year: 2022,
    title: "Team Expansion",
    description: "Grew our team of developers, designers, and marketing specialists to meet increasing demand.",
    details:
      "Expanded our capabilities by bringing on board specialized talent in React, Node.js, and influencer relationship management.",
    icon: <Users className="h-5 w-5" />,
    highlight: "Limited partnership opportunities opened",
  },
  {
    year: 2022,
    title: "Influencer Platform Launch",
    description: "Developed our proprietary platform for managing influencer campaigns and analytics.",
    details:
      "Our custom-built platform revolutionized how we track, measure, and optimize influencer marketing campaigns for our clients.",
    icon: <TrendingUp className="h-5 w-5" />,
    highlight: "Beta access offered to select clients",
  },
  {
    year: 2023,
    title: "International Expansion",
    description: "Extended our services to clients across Europe and Asia.",
    details:
      "Our global reach allowed us to work with diverse brands and influencers, bringing international perspectives to our campaigns.",
    icon: <TrendingUp className="h-5 w-5" />,
    highlight: "Special rates for international early adopters",
  },
  {
    year: 2023,
    title: "Industry Recognition",
    description: "Received multiple awards for our innovative approach to digital marketing.",
    details:
      "Our unique methodology combining technical expertise with marketing strategy earned us recognition at several industry events and publications.",
    icon: <Award className="h-5 w-5" />,
    highlight: "Limited spots available for award-winning strategies",
  },
]

const FlowerIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 6.47715 2 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Calculate time remaining for limited offer
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 3) // 3 days from now
  const timeRemaining = endDate.getTime() - new Date().getTime()
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  const flowerY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const flowerProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  return (
    <section ref={containerRef} className="py-12 overflow-hidden relative" id="journey">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30 px-3 py-1">
              Our Story
            </Badge>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Our Journey to Excellence</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            From humble beginnings to industry recognition, see how we've evolved to deliver exceptional results
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 border border-purple-500/30 px-4 py-2 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">
              Limited time offer ends in: {daysRemaining}d {hoursRemaining}h
            </span>
          </div>
        </motion.div>

        {isMobile ? (
          // Mobile timeline view
          <div className="space-y-3">
            {timelineEvents.map((event, index) => (
              <MobileTimelineEvent
                key={index}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
              />
            ))}
          </div>
        ) : (
          // Desktop timeline view
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-500/20"
              style={{ scaleY: scaleX }}
            />

            {/* Flower icon */}
            <motion.div
              className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-purple-500"
              style={{ y: flowerY }}
            >
              <FlowerIcon progress={flowerProgress as any} />
            </motion.div>

            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={index}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
              />
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 max-w-2xl mx-auto mb-4">
            <h3 className="text-xl font-bold text-white mb-2">Don't Miss Out!</h3>
            <p className="text-gray-300 mb-4">
              Join our success story and benefit from our years of experience. Limited spots available for new clients
              this month.
            </p>
            <Link href="#contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Mobile-optimized timeline event component
function MobileTimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors overflow-hidden"
    >
      <div className="p-3 flex items-center justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            {event.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-medium">{event.year}</span>
              <span className="text-white font-semibold">{event.title}</span>
            </div>
          </div>
        </div>
        <ChevronDown className={`h-5 w-5 text-purple-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 border-t border-white/5">
          <p className="text-gray-300 mb-3">{event.description}</p>

          {event.highlight && (
            <div className="bg-purple-500/10 border border-purple-500/30 rounded px-3 py-2 text-sm text-purple-400 mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <p>{event.highlight}</p>
            </div>
          )}

          <p className="text-gray-400 text-sm">{event.details}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Desktop timeline event component
function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full">
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-black/50 backdrop-blur-sm rounded-lg shadow-xl border border-white/10 hover:border-purple-500/30 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-purple-400">{event.year}</span>
            <div className="bg-purple-500/10 p-2 rounded-full">{event.icon}</div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
          <p className="text-gray-300 mb-2 text-sm">{event.description}</p>

          {event.highlight && (
            <div className="bg-purple-500/10 border border-purple-500/30 rounded px-2 py-1 text-xs text-purple-400 mb-2 flex items-center gap-1">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <p>{event.highlight}</p>
            </div>
          )}

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-400">{event.details}</p>
          </motion.div>

          <button className="mt-3 text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center">
            {isExpanded ? "Show less" : "Read more"}
            <ArrowRight className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

