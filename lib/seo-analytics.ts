// lib/seo-analytics.ts
/**
 * SEO Analytics & Monitoring Configuration
 * 
 * This file contains utilities for tracking and monitoring SEO performance
 * and integrating with Google Analytics 4, Google Search Console, and 
 * other analytics tools.
 */

// Google Analytics 4 setup
export const initGA4 = () => {
    // Load GA4 tracking script dynamically
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)
  
    // Initialize GA4
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
      debug_mode: process.env.NODE_ENV !== 'production',
    })
  }
  
  // Track page views
  export const trackPageView = (url: string) => {
    if (!window.gtag) return
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
  
  // Track events
  export const trackEvent = ({
    action,
    category,
    label,
    value,
  }: {
    action: string
    category: string
    label?: string
    value?: number
  }) => {
    if (!window.gtag) return
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  
  // SEO performance monitoring
  export const trackSEOMetrics = () => {
    // Track Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
        getCLS((metric) => {
          console.log('CLS:', metric.value)
          trackEvent({
            action: 'web_vitals',
            category: 'Web Vitals',
            label: 'CLS',
            value: Math.round(metric.value * 100),
          })
        })
        getFID((metric) => {
          console.log('FID:', metric.value)
          trackEvent({
            action: 'web_vitals',
            category: 'Web Vitals',
            label: 'FID',
            value: Math.round(metric.value),
          })
        })
        getLCP((metric) => {
          console.log('LCP:', metric.value)
          trackEvent({
            action: 'web_vitals',
            category: 'Web Vitals',
            label: 'LCP',
            value: Math.round(metric.value),
          })
        })
        getFCP((metric) => {
          console.log('FCP:', metric.value)
          trackEvent({
            action: 'web_vitals',
            category: 'Web Vitals',
            label: 'FCP',
            value: Math.round(metric.value),
          })
        })
        getTTFB((metric) => {
          console.log('TTFB:', metric.value)
          trackEvent({
            action: 'web_vitals',
            category: 'Web Vitals',
            label: 'TTFB',
            value: Math.round(metric.value),
          })
        })
      })
    }
  }
  
  // Track scroll depth
  export const trackScrollDepth = () => {
    let scrolled25 = false
    let scrolled50 = false
    let scrolled75 = false
    let scrolled100 = false
  
    const trackScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
  
      if (scrollPercent >= 25 && !scrolled25) {
        trackEvent({
          action: 'scroll_depth',
          category: 'Engagement',
          label: '25%',
        })
        scrolled25 = true
      }
  
      if (scrollPercent >= 50 && !scrolled50) {
        trackEvent({
          action: 'scroll_depth',
          category: 'Engagement',
          label: '50%',
        })
        scrolled50 = true
      }
  
      if (scrollPercent >= 75 && !scrolled75) {
        trackEvent({
          action: 'scroll_depth',
          category: 'Engagement',
          label: '75%',
        })
        scrolled75 = true
      }
  
      if (scrollPercent >= 90 && !scrolled100) {
        trackEvent({
          action: 'scroll_depth',
          category: 'Engagement',
          label: '100%',
        })
        scrolled100 = true
      }
    }
  
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', trackScroll)
      return () => window.removeEventListener('scroll', trackScroll)
    }
  }
  
  // SEO Analytics component
  // components/seo-analytics.tsx
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
      trackPageView(pathname)
      
      // Setup SEO metrics tracking
      trackSEOMetrics()
      
      // Track scroll depth
      const cleanup = trackScrollDepth()
      
      return () => {
        if (cleanup) cleanup()
      }
    }, [])
  
    // Track page changes
    useEffect(() => {
      if (pathname) {
        trackPageView(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))
      }
    }, [pathname, searchParams])
  
    return null
  }