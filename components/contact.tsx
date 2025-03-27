"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { submitContactForm } from "@/app/actions/contact"
import { toast } from "@/components/ui/use-toast"
import CountryCodeDropdown from "./country-code-dropdown"
import { countries } from "./country-code-dropdown"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    budget: "",
  })

  // Calculate time remaining for limited offer
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 7) // 7 days from now
  const timeRemaining = endDate.getTime() - new Date().getTime()
  const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))

  // Validate Indian phone number
  const validateIndianPhone = (phone: string) => {
    if (!phone) return true // Optional field

    // Indian phone numbers: 10 digits starting with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/
    return phoneRegex.test(phone.replace(/\s+/g, "").replace(/-/g, "").replace(/\+91/g, ""))
  }

  const [selectedCountry, setSelectedCountry] = useState(countries.find((c) => c.code === "IN") || countries[0])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    // Clear phone error when user types in phone field
    if (name === "phone") {
      setPhoneError(null)
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)
    setPhoneError(null)

    // Validate phone number if provided
    if (formData.phone) {
      // Different validation based on country
      let isValid = true

      // For India (+91), validate 10 digits starting with 6-9
      if (selectedCountry.code === "IN" && !/^[6-9]\d{9}$/.test(formData.phone.replace(/\s+/g, ""))) {
        isValid = false
      }

      // For other countries, just check if it's numeric and reasonable length
      else if (!/^\d{4,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
        isValid = false
      }

      if (!isValid) {
        setPhoneError(`Please enter a valid phone number for ${selectedCountry.name}`)
        setIsSubmitting(false)
        return
      }
    }

    try {
      // Format the phone with country code
      const phoneWithCode = formData.phone ? `${selectedCountry.dial_code}${formData.phone.replace(/\s+/g, "")}` : ""

      // Update the form data with the formatted phone
      const updatedFormData = {
        ...formData,
        phone: phoneWithCode,
      }

      const result = await submitContactForm(updatedFormData)

      if (result.success) {
        setFormSubmitted(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
          budget: "",
        })
        toast({
          title: "Success",
          description: result.message,
        })
      } else {
        setFormError(result.message)
        toast({
          variant: "destructive",
          title: "Error",
          description: result.message,
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormError("An unexpected error occurred. Please try again.")
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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30 px-3 py-1">
              Limited Time Offer
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Contact us today to discuss your project and receive a{" "}
            <span className="text-purple-400 font-semibold">free consultation</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-purple-400" />
                <span className="text-white font-medium">
                  Limited offer ends in: <span className="text-purple-400">{daysRemaining} days</span>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

              {formSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">Our team will contact you within 24 hours to discuss your project.</p>
                  </div>
                </div>
              ) : formError ? (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 flex items-start gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Something went wrong</p>
                    <p className="text-sm mt-1">{formError}</p>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-black/50 border-white/10 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-black/50 border-white/10 text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Mobile Number (Optional)
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <CountryCodeDropdown
                        selectedCountry={selectedCountry}
                        onSelect={(country) => {
                          setSelectedCountry(country)
                          // Clear any phone error when changing country
                          setPhoneError(null)
                        }}
                      />
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className={`bg-black/50 border-white/10 text-white pl-24 ${phoneError ? "border-red-500" : ""}`}
                    />
                  </div>
                  {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="bg-black/50 border-white/10 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project... (minimum 10 characters)"
                    className="bg-black/50 border-white/10 text-white min-h-[150px]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a budget range</option>
                    <option value="less-5k">Less than ₹50,000</option>
                    <option value="5k-10k">₹50,000 - ₹1,00,000</option>
                    <option value="10k-25k">₹1,00,000 - ₹2,50,000</option>
                    <option value="25k-50k">₹2,50,000 - ₹5,00,000</option>
                    <option value="more-50k">More than ₹5,00,000</option>
                  </select>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-sm text-purple-400">
                  <p className="font-medium">🎁 Special Offer</p>
                  <p className="mt-1">
                    Contact us now and get a free website audit worth ₹25,000. Limited spots available!
                  </p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Have questions or want to discuss your project? Reach out to us using the contact information below or
                fill out the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <p className="text-gray-400">info@noxmedia.in</p>
                    <p className="text-gray-400">support@noxmedia.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Visit Us</h4>
                    <p className="text-gray-400">
                      123 Tech Park, Whitefield
                      <br />
                      Bengaluru, Karnataka 560066
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-medium mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Expert team with 10+ years of industry experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Tailored solutions for your specific business needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Proven track record with 95% client satisfaction rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

