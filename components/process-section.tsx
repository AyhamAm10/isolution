"use client"

import { motion } from "framer-motion"
import { Phone, Target, Palette, Code, Rocket } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/motion"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your vision, goals, and constraints. No fluff, just meaningful conversation.",
    icon: <Phone className="w-5 h-5" />
  },
  {
    number: "02",
    title: "Scope & Plan",
    description: "Clear deliverables, timeline, and pricing. You know exactly what you're getting and when.",
    icon: <Target className="w-5 h-5" />
  },
  {
    number: "03",
    title: "Design Phase",
    description: "UI/UX designs that balance beauty and function. Review, iterate, approve.",
    icon: <Palette className="w-5 h-5" />
  },
  {
    number: "04",
    title: "Build Sprint",
    description: "Rapid development with weekly updates. Watch your product come to life.",
    icon: <Code className="w-5 h-5" />
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Deployment, handoff, and 30 days of support. We don't disappear after delivery.",
    icon: <Rocket className="w-5 h-5" />
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            How We <span className="text-accent-cyan">Work</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto">
            A proven process that delivers results. No surprises, just steady progress toward launch.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative group"
              >
                {/* Step card */}
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:glow-cyan">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-accent-cyan/30">{step.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-2 w-4 h-4 border-t-2 border-r-2 border-glass-border rotate-45 -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
