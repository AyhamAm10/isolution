"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden glow-cyan-intense"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent-violet/10 rounded-full blur-[60px] translate-y-1/2" />
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Ready to Build <span className="text-accent-cyan text-glow-cyan">Something Great?</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-8 text-pretty">
              Let&apos;s discuss your project. No sales pitch—just a genuine conversation about what you&apos;re building.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl px-8 py-6 text-base font-semibold glow-cyan">
                <Link href="/contact">
                  Start a Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl px-8 py-6 text-base border-glass-border hover:bg-white/5 hover:border-accent-cyan/50 bg-transparent">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-3xl border border-accent-cyan/20" />
        </motion.div>
      </div>
    </section>
  )
}
