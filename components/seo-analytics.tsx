"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { initGA4, trackPageView, trackSEOMetrics, trackScrollDepth } from "@/lib/seo-analytics"

export function SEOAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Google Analytics
    initGA4()
    
    // Track initial page view
    trackPageView(pathname || '')
    
    // Setup SEO metrics tracking
    trackSEOMetrics()
    
    // Track scroll depth
    const cleanup = trackScrollDepth()
    
    return () => {
      if (cleanup) cleanup()
    }
  }, [pathname])

  // Track page changes
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))
    }
  }, [pathname, searchParams])

  return null
}