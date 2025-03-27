"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import NewsletterForm from "./newsletter-form"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/90 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400 mt-4">
              Elevating digital experiences with cutting-edge web development, design, and marketing solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  E-commerce Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} NOX Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

