"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setEmail("")
        toast({
          title: "Success",
          description: data.message,
        })
      } else {
        setError(data.message)
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message,
        })
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setError("An unexpected error occurred. Please try again.")
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-gray-400 mb-4">Get the latest updates, tips, and exclusive offers directly to your inbox.</p>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 flex items-start gap-3"
        >
          <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Subscribed successfully!</p>
            <p className="text-sm mt-1">Thank you for subscribing to our newsletter.</p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 flex items-start gap-2 text-sm">
              <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/50 border-white/10 text-white"
            />
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </form>
      )}
    </div>
  )
}

