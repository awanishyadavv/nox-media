"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesCore } from "@/components/sparkles"
import Logo from "@/components/logo"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
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
        <header className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/">
            <Button variant="outline" className="text-white border-white/20">
              Back to Home
            </Button>
          </Link>
        </header>

        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get Started with NOX Media</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Fill out the form below and one of our experts will get back to
              you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Tell us about your project and how we can help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Your Name
                      </Label>
                      <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-black/50 border-white/10 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="bg-black/50 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="bg-black/50 border-white/10 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="bg-black/50 border-white/10 text-white min-h-[150px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-white">
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      className="w-full bg-black/50 border border-white/10 text-white rounded-md px-3 py-2"
                    >
                      <option value="">Select a budget range</option>
                      <option value="less-5k">Less than $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="more-50k">More than $50,000</option>
                    </select>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Email Us</h4>
                        <p className="text-gray-400">info@noxmedia.com</p>
                        <p className="text-gray-400">support@noxmedia.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Call Us</h4>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-400">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Visit Us</h4>
                        <p className="text-gray-400">
                          123 Digital Avenue, Suite 200
                          <br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-white text-sm font-medium">
                        1
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Initial Consultation</h4>
                        <p className="text-gray-400 text-sm">We'll discuss your goals, requirements, and timeline.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-white text-sm font-medium">
                        2
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Proposal & Strategy</h4>
                        <p className="text-gray-400 text-sm">
                          We'll create a tailored proposal and strategy for your project.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-white text-sm font-medium">
                        3
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Design & Development</h4>
                        <p className="text-gray-400 text-sm">
                          Our team will bring your vision to life with cutting-edge design and development.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center mr-3 text-white text-sm font-medium">
                        4
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Launch & Support</h4>
                        <p className="text-gray-400 text-sm">
                          We'll launch your project and provide ongoing support and optimization.
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

