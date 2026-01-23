"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-4 mt-4 md:mx-6 md:mt-6">
        <div className="glass-card rounded-2xl px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-accent-cyan/20 group-hover:bg-accent-cyan/30 transition-colors" />
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 relative z-10"
                  fill="none"
                >
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" className="text-accent-cyan" />
                  <circle cx="16" cy="16" r="4" fill="currentColor" className="text-accent-cyan" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-foreground">i-solution</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-foreground bg-white/10"
                      : "text-text-muted hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:block">
              <Button asChild className="bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl px-6">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2"
            >
              <div className="glass-card rounded-2xl p-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                        pathname === link.href
                          ? "text-foreground bg-white/10"
                          : "text-text-muted hover:text-foreground hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-2 mt-2 border-t border-glass-border">
                    <Button asChild className="w-full bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
