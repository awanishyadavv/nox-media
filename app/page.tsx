"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import Pricing from "@/components/pricing"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { SparklesCore } from "@/components/sparkles"
import { ScrollProgress } from "@/components/scroll-progress"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Loading } from "@/components/loading"
import Marquee from "@/components/marquee"
import Timeline from "@/components/timeline"
import Values from "@/components/values"
import Awards from "@/components/awards"
import SecurityEnforcer from "@/components/security-enforcer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(210,20%,98%)] dark:bg-black/[0.96] antialiased bg-grid-black/[0.02] dark:bg-grid-white/[0.02] relative overflow-hidden">
      <SecurityEnforcer />
      <Loading />
      <ScrollProgress />

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
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Timeline />
        <Partners />
        <Values />
        <Awards />
        <Marquee />
        <Contact />
        <Blog />
        <Footer />
      </div>

      <WhatsAppButton />
    </main>
  )
}

