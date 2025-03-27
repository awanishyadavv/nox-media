"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, ExternalLink } from "lucide-react"

interface CertificateStatus {
  valid: boolean
  issuer?: string
  expiryDate?: Date
  domain?: string
  error?: string
}

export default function SecurityCertificateValidator() {
  const [certificateStatus, setCertificateStatus] = useState<CertificateStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [referrer, setReferrer] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Check if we're in a preview/sandbox environment
    const hostname = window.location.hostname
    const isPreviewEnvironment =
      hostname.includes("vercel.app") ||
      hostname.includes("vusercontent.net") ||
      hostname.includes("localhost") ||
      hostname.includes("127.0.0.1")

    // Don't run certificate checks in preview environments
    if (isPreviewEnvironment) {
      setLoading(false)
      return
    }

    try {
      // Get referrer information safely
      setReferrer(document.referrer || null)

      // Simulate certificate check (in a real app, this would be a server-side check)
      setTimeout(() => {
        // Check if coming from Instagram
        const isFromInstagram =
          document.referrer.includes("instagram.com") || document.referrer.includes("l.instagram.com")

        if (isFromInstagram) {
          // Provide specific guidance for Instagram links
          setCertificateStatus({
            valid: false,
            domain: window.location.hostname,
            error: "Instagram link redirection issue detected",
          })
          setShowModal(true)
        } else {
          // Normal certificate validation
          setCertificateStatus({
            valid: true,
            issuer: "Let's Encrypt Authority X3",
            expiryDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
            domain: window.location.hostname,
          })
        }
        setLoading(false)
      }, 1000)
    } catch (error) {
      // Handle any errors gracefully
      console.error("Certificate validation error:", error)
      setLoading(false)
    }
  }, [])

  // Safe navigation function that won't cause cross-origin errors
  const navigateToDirectSite = () => {
    try {
      // Only navigate the current window, never try to navigate parent frames
      window.location.href = "https://noxmedia.in"
    } catch (error) {
      console.error("Navigation error:", error)
      // Fallback - open in new tab
      window.open("https://noxmedia.in", "_blank")
    }
  }

  // If no certificate issues or not showing modal, don't render anything
  if (!showModal || !certificateStatus || certificateStatus.valid) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 animate-in fade-in duration-300">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Checking security certificate...</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-amber-500" />
            </div>
            <h2 className="text-xl font-bold text-center mb-4">Instagram Link Issue Detected</h2>
            <p className="text-gray-700 mb-4">
              We've detected you're coming from Instagram. Some Instagram links may show security warnings due to their
              link wrapping system.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
              <p className="text-sm text-amber-800">
                <strong>Solution:</strong> Please visit our website directly by typing <strong>noxmedia.in</strong> in
                your browser, or use the direct link below.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <button
                onClick={navigateToDirectSite}
                className="bg-primary hover:bg-primary/90 text-white text-center font-medium py-2 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                Visit Direct Link <ExternalLink className="ml-2 w-4 h-4" />
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-md transition-colors"
              >
                Continue Anyway
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

