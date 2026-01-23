"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Heart, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem } from "@/lib/motion"

const values = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Speed Without Shortcuts",
    description: "We move fast, but never at the expense of quality. Every line of code is written to last."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Design-First Thinking",
    description: "Great products start with great design. We obsess over UX before writing a single line of code."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Outcome-Focused",
    description: "We measure success by your success. Our goal is to ship products that drive real business results."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Transparent Partnership",
    description: "No black boxes. You'll always know what we're working on, what's next, and how we're tracking."
  }
]

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Mobile", items: ["React Native", "Expo", "iOS", "Android"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "Supabase"] },
  { category: "Infrastructure", items: ["Vercel", "AWS", "Docker", "GitHub Actions"] }
]

const milestones = [
  { year: "2022", title: "Studio Founded", description: "Started with a mission to help startups ship faster." },
  { year: "2023", title: "First Major Client", description: "Delivered a fintech dashboard that scaled to 100K users." },
  { year: "2024", title: "50+ Projects", description: "Hit the milestone of 50 successful product launches." },
  { year: "2025", title: "Growing Team", description: "Expanded our network of specialized collaborators." }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-4 md:px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Small Team with <span className="text-accent-cyan text-glow-cyan">Big Impact</span>
          </motion.h1>
          <motion.p
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We&apos;re a two-person studio that punches above our weight. Combining years of 
            production experience with startup agility, we help founders ship exceptional products—fast.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 md:px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="glass-card rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    We&apos;ve been on both sides—working in large tech companies shipping products to millions, 
                    and building scrappy MVPs in the trenches of early-stage startups.
                  </p>
                  <p>
                    What we learned: the best products come from small, focused teams that move with intention. 
                    Big teams bring complexity. We bring clarity.
                  </p>
                  <p>
                    i-solution was born from a simple belief: founders deserve better than bloated agencies 
                    and unreliable freelancers. They deserve partners who care as much about the outcome as they do.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20" />
                  <div className="absolute inset-0 rounded-3xl border border-glass-border flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-accent-cyan mb-2">2</div>
                      <div className="text-text-muted">Person Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 md:px-6 mb-24 bg-surface/30 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Our values shape everything we do—from how we communicate to how we code.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="glass-card rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 md:px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Tech Stack
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Modern tools for modern products. We choose technologies that help us ship faster and scale better.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((stack) => (
              <motion.div
                key={stack.category}
                variants={staggerItem}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-white/5 text-sm text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 md:px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
          </motion.div>

          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={staggerItem}
                className={`relative flex items-center gap-6 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-cyan -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-accent-cyan font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{milestone.title}</h3>
                  <p className="text-text-muted text-sm mt-1">{milestone.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card rounded-3xl p-8 md:p-12 text-center glow-cyan"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              We&apos;re always looking for exciting projects and great people to work with. Get in touch!
            </p>
            <Button asChild className="bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl px-8">
              <Link href="/contact">
                Start a Conversation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
