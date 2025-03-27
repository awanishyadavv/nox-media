"use client"

import { useEffect, useState } from "react"
import { detectBrowser, applyBrowserFixes } from "@/lib/browser-compatibility"

export default function PerformanceOptimizer() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [browserInfo, setBrowserInfo] = useState<ReturnType<typeof detectBrowser> | null>(null)

  useEffect(() => {
    // Apply browser-specific fixes
    applyBrowserFixes()

    // Detect browser information
    setBrowserInfo(detectBrowser())

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Load non-critical CSS
      const nonCriticalCSS = document.querySelectorAll('link[data-lazy="true"]')
      nonCriticalCSS.forEach((link) => {
        link.setAttribute("rel", "stylesheet")
        link.removeAttribute("data-lazy")
      })

      // Load non-critical scripts
      const nonCriticalScripts = document.querySelectorAll('script[data-lazy="true"]')
      nonCriticalScripts.forEach((script) => {
        const newScript = document.createElement("script")
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== "data-lazy") {
            newScript.setAttribute(attr.name, attr.value)
          }
        })
        newScript.textContent = script.textContent
        script.parentNode?.replaceChild(newScript, script)
      })

      setIsLoaded(true)
    }

    // Use requestIdleCallback if available, otherwise use setTimeout
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(lazyLoadResources)
    } else {
      setTimeout(lazyLoadResources, 200)
    }

    // Optimize images by loading them only when needed
    const lazyLoadImages = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              if (img.dataset.src) {
                img.src = img.dataset.src
                img.removeAttribute("data-src")
              }
              imageObserver.unobserve(img)
            }
          })
        })

        const images = document.querySelectorAll("img[data-src]")
        images.forEach((img) => imageObserver.observe(img))
      }
    }

    // Run image optimization after initial load
    if (document.readyState === "complete") {
      lazyLoadImages()
    } else {
      window.addEventListener("load", lazyLoadImages)
      return () => window.removeEventListener("load", lazyLoadImages)
    }
  }, [])

  // Add browser-specific warning for outdated browsers
  if (browserInfo?.browser === "ie") {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black p-4 z-50">
        <div className="container mx-auto">
          <p className="font-medium">
            You're using an outdated browser that may not display this website correctly. Please consider upgrading to a
            modern browser for the best experience.
          </p>
        </div>
      </div>
    )
  }

  return null // This component doesn't render anything visible by default
}

