"use client"

import { useEffect, useState } from "react"
import SecurityCertificateValidator from "./security-certificate-validator"

export default function SecurityEnforcer() {
  const [isInIframe, setIsInIframe] = useState(false)
  const [isPreviewEnvironment, setIsPreviewEnvironment] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Check if we're in an iframe
    try {
      setIsInIframe(window.self !== window.top)
    } catch (e) {
      // If we can't access window.top due to security restrictions,
      // we're definitely in a cross-origin iframe
      setIsInIframe(true)
    }

    // Check if we're in a preview/sandbox environment
    const hostname = window.location.hostname
    setIsPreviewEnvironment(
      hostname.includes("vercel.app") ||
        hostname.includes("vusercontent.net") ||
        hostname.includes("localhost") ||
        hostname.includes("127.0.0.1"),
    )

    // Add security headers via meta tags (only if not in preview)
    if (!isPreviewEnvironment) {
      const addSecurityMeta = (name: string, content: string) => {
        if (!document.querySelector(`meta[name="${name}"]`)) {
          const meta = document.createElement("meta")
          meta.setAttribute("name", name)
          meta.setAttribute("content", content)
          document.head.appendChild(meta)
        }
      }

      // Add Content Security Policy
      addSecurityMeta(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
      )

      // Add X-Content-Type-Options
      addSecurityMeta("X-Content-Type-Options", "nosniff")

      // Add Referrer-Policy
      addSecurityMeta("Referrer-Policy", "strict-origin-when-cross-origin")

      // Add Permissions-Policy
      addSecurityMeta("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
    }
  }, [isPreviewEnvironment])

  // In preview environments or iframes, don't show warnings or try to redirect
  if (isPreviewEnvironment || isInIframe) {
    return null
  }

  return <SecurityCertificateValidator />
}

