import Link from "next/link"

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-accent-cyan/20" />
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
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-glass-border">
          <p className="text-sm text-text-muted text-center">
            {new Date().getFullYear()} i-solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
