"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Logo from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#testimonials">Testimonials</NavLink>
        <NavLink href="#blog">Blog</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <ThemeToggle />
        <Button variant="ghost" className="text-white hover:text-purple-400">
          Sign In
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="#blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="text-white hover:text-purple-400 w-full">
                Sign In
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors py-2 block border-b border-white/10"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

