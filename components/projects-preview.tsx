"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem, hoverLift } from "@/lib/motion"

const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "Admin Dashboard",
    description: "Real-time financial analytics platform with custom reporting and role-based access.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    outcome: "40% increase in operational efficiency"
  },
  {
    id: 2,
    title: "HealthSync Mobile",
    category: "Mobile App",
    description: "Cross-platform health tracking app with wearable device integration.",
    stack: ["React Native", "Node.js", "MongoDB", "Apple HealthKit"],
    outcome: "50K+ downloads in first month"
  },
  {
    id: 3,
    title: "ShopFlow MVP",
    category: "Web MVP",
    description: "E-commerce platform MVP with inventory management and multi-vendor support.",
    stack: ["Next.js", "Prisma", "Stripe", "AWS"],
    outcome: "Launched in 38 days, $200K GMV in Q1"
  }
]

export function ProjectsPreview() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6">
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
            Selected <span className="text-accent-cyan">Work</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto">
            A glimpse of projects we&apos;ve brought to life. Each one built with precision and care.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              whileHover={hoverLift}
              className="group glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:glow-cyan"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium mb-4">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-white/5 text-xs text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-glass-border">
                <p className="text-sm">
                  <span className="text-text-muted">Outcome: </span>
                  <span className="text-foreground font-medium">{project.outcome}</span>
                </p>
              </div>

              {/* Hover indicator */}
              <div className="mt-4 flex items-center text-accent-cyan text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View Case Study <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button asChild variant="outline" className="rounded-xl px-6 border-glass-border hover:bg-white/5 hover:border-accent-cyan/50 bg-transparent">
            <Link href="/work">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
