"use client"

import { motion } from "framer-motion"
import { Check, X, Rocket, Code, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function WebDevelopmentPricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      description: "Personal Blogs, Portfolio",
      features: [
        { text: "1-3 Pages", included: true },
        { text: "Template-Based Design", included: false },
        { text: "Responsive Design", included: true },
        { text: "CMS Integration", included: false },
        { text: "E-Commerce (Online Store)", included: false },
        { text: "Basic SEO Optimization", included: true },
        { text: "Speed Optimization", included: true },
        { text: "Contact Form", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Maintenance Support", included: false },
        { text: "3 Days Delivery", included: true },
        { text: "1 Revision", included: true },
        { text: "50% Advance, 50% Before Handover", included: true },
      ],
      icon: <Code className="h-6 w-6 text-[#C056FF]" />,
      color: "#C056FF", // Neon Purple
    },
    {
      name: "Business",
      price: "₹14,999",
      popular: true,
      description: "Small Businesses, Startups",
      features: [
        { text: "Up to 7 Pages", included: true },
        { text: "Custom UI/UX Design", included: true },
        { text: "Responsive Design", included: true },
        { text: "CMS Integration (WordPress/Shopify)", included: false },
        { text: "E-Commerce (Online Store)", included: true },
        { text: "Advanced SEO Optimization", included: true },
        { text: "Speed Optimization", included: true },
        { text: "Contact Form", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "SSL Certificate", included: true },
        { text: "1 Month Maintenance Support", included: true },
        { text: "7 Days Delivery", included: true },
        { text: "2 Revisions", included: true },
        { text: "40% Advance, 30% Mid-Work, 30% Before Handover", included: true },
      ],
      icon: <Rocket className="h-6 w-6 text-[#FF40A1]" />,
      color: "#FF40A1", // Neon Pink
    },
    {
      name: "Ultimate",
      price: "₹29,999",
      description: "E-Commerce, Enterprises",
      features: [
        { text: "Up to 15 Pages", included: true },
        { text: "Advanced UI/UX + Animations", included: true },
        { text: "Optimized for Mobile", included: true },
        { text: "CMS Integration", included: true },
        { text: "E-Commerce (Online Store)", included: true },
        { text: "Premium SEO Optimization", included: true },
        { text: "Super Fast Speed Optimization", included: true },
        { text: "Contact Form", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "SSL Certificate", included: true },
        { text: "3 Months Maintenance Support", included: true },
        { text: "12 Days Delivery", included: true },
        { text: "5 Revisions", included: true },
        { text: "30% Advance, 40% Mid-Work, 30% Before Handover", included: true },
      ],
      icon: <ShoppingCart className="h-6 w-6 text-[#7F56FF]" />,
      color: "#7F56FF", // Deep Neon Blue
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-[#0A0A0A] relative text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#C056FF] text-sm font-mono tracking-wider">DEVELOPMENT SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Web Development Pricing Plans</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project needs with our transparent pricing structure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${hoveredPlan === index ? "z-10" : "z-0"}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div
                className={`h-full rounded-2xl overflow-hidden transition-all duration-300 bg-[#151515] shadow-lg ${
                  hoveredPlan === index
                    ? "scale-105 border border-[#C056FF] shadow-[0_0_30px_rgba(192,86,255,0.5)]"
                    : "border border-gray-700"
                }`}
              >
                <div className="p-8 flex flex-col h-full">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#FF40A1] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-opacity-20"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold ml-4">{plan.name}</h3>
                  </div>

                  <div className="mb-6">
                    <span className="block text-4xl font-bold mb-1">{plan.price}</span>
                    <span className="block text-gray-400 text-sm">{plan.description}</span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#C056FF] mr-2 mt-0.5 shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 shrink-0" />
                        )}
                        <span className="text-gray-300 text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 rounded-xl font-medium text-black transition-all duration-300 bg-gradient-to-r from-[#C056FF] to-[#FF40A1] hover:from-[#FF40A1] hover:to-[#7F56FF]`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Need a custom website solution for your business?</p>
          <Button className="bg-gradient-to-r from-[#FF40A1] to-[#7F56FF] text-black px-8 py-6 rounded-xl">
            Contact for Custom Development
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

