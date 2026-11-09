"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Rocket, Clock, Award } from "lucide-react"

const stats = [
  { icon: <Rocket className="w-5 h-5" />, value: "50+", label: "Projects Delivered" },
  { icon: <Clock className="w-5 h-5" />, value: "30-45", label: "Days to MVP" },
  { icon: <Award className="w-5 h-5" />, value: "100%", label: "Production Experience" },
]

const values = [
  {
    title: "Design-First Approach",
    description: "Every project starts with thoughtful design that prioritizes user experience and business goals."
  },
  {
    title: "Production-Ready Code",
    description: "No prototypes. We deliver scalable, maintainable code that's ready for real users from day one."
  },
  {
    title: "Fast & Transparent",
    description: "Clear timelines, regular updates, and no surprises. Your MVP launches when we say it will."
  }
]

export function OverviewReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Tie the mapping to the section's top aligning with the viewport top so
    // progress begins increasing on the very first pixel of page scroll.
    offset: ["start start", "end start"]
  })

  // Expand from center to full width using scale
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.85, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [28, 0])
  // Use the full 0-1 progress so opacity responds from the very first pixel
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="relative py-24 md:py-32">
      <motion.div
        className="relative mx-auto glass-card overflow-hidden"
        style={{
          scaleX,
          borderRadius,
          opacity,
          maxWidth: "92vw",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Headline */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Ship Faster. <span className="text-accent-cyan">Scale Smarter.</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto text-pretty">
              We&apos;re a two-person studio that moves fast without cutting corners. 
              Production experience meets startup agility.
            </p>
          </motion.div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-2xl bg-white/[0.03] border border-glass-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-accent-cyan">{stat.icon}</span>
                  <span className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</span>
                </div>
                <span className="text-text-muted text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
      </motion.div>
    </section>
  )
}
