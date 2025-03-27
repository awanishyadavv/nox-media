// components/core-web-vitals-optimizer.tsx
"use client"

import { useEffect } from "react"
import Script from "next/script"

interface CoreWebVitalsOptimizerProps {
  children: React.ReactNode
}

export function CoreWebVitalsOptimizer({ children }: CoreWebVitalsOptimizerProps) {
  useEffect(() => {
    // Prevent CLS (Cumulative Layout Shift) by pre-computing space for dynamic elements
    const precomputeHeights = () => {
      document.querySelectorAll('[data-dynamic-height]').forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.minHeight = `${el.scrollHeight}px`
        }
      })
    }

    // Optimize LCP (Largest Contentful Paint) by preloading critical resources
    const preloadCriticalImages = () => {
      const criticalImages = document.querySelectorAll('img[data-critical="true"]')
      criticalImages.forEach((img) => {
        if (img instanceof HTMLImageElement && img.src) {
          const preloadLink = document.createElement('link')
          preloadLink.rel = 'preload'
          preloadLink.as = 'image'
          preloadLink.href = img.src
          document.head.appendChild(preloadLink)
        }
      })
    }

    // Optimize FID (First Input Delay) by deferring non-critical JavaScript
    const deferNonCriticalJS = () => {
      document.querySelectorAll('script[data-priority="low"]').forEach((script) => {
        if (script instanceof HTMLScriptElement) {
          script.setAttribute('defer', '')
        }
      })
    }

    // Execute optimizations
    if (typeof window !== 'undefined') {
      // Run after initial paint
      requestIdleCallback(() => {
        precomputeHeights()
        preloadCriticalImages()
        deferNonCriticalJS()
      })

      // Recompute heights on resize
      window.addEventListener('resize', precomputeHeights)
      
      return () => {
        window.removeEventListener('resize', precomputeHeights)
      }
    }
  }, [])

  return (
    <>
      {children}
      {/* Web Vitals measurement script */}
      <Script
        id="web-vitals"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Web Vitals reporting
            function sendToAnalytics(metric) {
              const body = JSON.stringify({
                name: metric.name,
                value: metric.value,
                id: metric.id
              });
              
              // Replace with your analytics endpoint
              navigator.sendBeacon('/api/vitals', body);
            }

            // Load web-vitals library
            import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
              getCLS(sendToAnalytics);
              getFID(sendToAnalytics);
              getLCP(sendToAnalytics);
              getFCP(sendToAnalytics);
              getTTFB(sendToAnalytics);
            });
          `,
        }}
      />
    </>
  )
}