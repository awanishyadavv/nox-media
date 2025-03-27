"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Logo from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50"
    >
      <div className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="#services" onClick={(e) => scrollToSection(e, "services")}>
          Services
        </NavLink>
        <NavLink href="#portfolio" onClick={(e) => scrollToSection(e, "portfolio")}>
          Portfolio
        </NavLink>
        <NavLink href="#testimonials" onClick={(e) => scrollToSection(e, "testimonials")}>
          Testimonials
        </NavLink>
        <NavLink href="#partners" onClick={(e) => scrollToSection(e, "partners")}>
          Partners
        </NavLink>
        <NavLink href="#blog" onClick={(e) => scrollToSection(e, "blog")}>
          Blog
        </NavLink>
        <NavLink href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
          Pricing
        </NavLink>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <ThemeToggle />
        <Link href="/signin">
          <Button variant="ghost" className="text-white hover:text-purple-400">
            Sign In
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
        </Link>
      </div>

      <div className="md:hidden flex items-center space-x-2">
        <Link href="/signin">
          <Button variant="ghost" size="sm" className="text-white hover:text-purple-400">
            Sign In
          </Button>
        </Link>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#services" onClick={(e) => scrollToSection(e, "services")}>
              Services
            </MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={(e) => scrollToSection(e, "portfolio")}>
              Portfolio
            </MobileNavLink>
            <MobileNavLink href="#testimonials" onClick={(e) => scrollToSection(e, "testimonials")}>
              Testimonials
            </MobileNavLink>
            <MobileNavLink href="#partners" onClick={(e) => scrollToSection(e, "partners")}>
              Partners
            </MobileNavLink>
            <MobileNavLink href="#blog" onClick={(e) => scrollToSection(e, "blog")}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="#pricing" onClick={(e) => scrollToSection(e, "pricing")}>
              Pricing
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </MobileNavLink>
            <div className="pt-4 flex flex-col space-y-2">
              <Link href="/contact" className="w-full">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}

function NavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </a>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors py-2 block border-b border-white/10"
      onClick={onClick}
    >
      {children}
    </a>
  )
}

