"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Partners() {
  const partners = [
    {
      name: "WooCommerce",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngwing.com-8hwoU5jgksbwytGj8MQ1A56UkAWCD5.png",
    },
    {
      name: "WordPress",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngwing.com%20%281%29-8MKQ9LXFqJI3xKlFcXrfVs0d1SeMBU.png",
    },
    {
      name: "Razorpay",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/razorpay-seeklogo-cjBmFSUMelIuNnkbl4FUyA0HxSzh9n.png",
    },
    {
      name: "Shopify",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shopify-seeklogo-lVBxUC9btSsUdjho0IUO2jLhH8rvO2.png",
    },
    {
      name: "Meta Business Partner",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/meta-business-partner-seeklogo-xWSuo4GwePhNbAd04j6ph2BbfHZHZe.png",
    },
    {
      name: "Google Analytics",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google_analytics-ar21-RHAoW3aTNgTanaBieHc61t14w1v9Jr.svg",
    },
    {
      name: "DataRobot",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/datarobot-ai-cloud-seeklogo-MxjYZH9mhxx3idxjOss7LC5vrfDMMY.png",
    },
    {
      name: "Google Ads",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google_AdWords_%281%29-8MeR0tBJpQfaNK2OXVUV2XodWmJOig.png",
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
                  duration: 5,
                  ease: "linear",
                },
              }}
              className="flex items-center space-x-16 whitespace-nowrap"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 w-48 h-32 flex items-center justify-center hover:bg-white transition-colors">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={160}
                      height={80}
                      className="max-w-[140px] h-auto object-contain"
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

