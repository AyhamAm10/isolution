"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X, ChevronRight } from "lucide-react"
import { staggerContainer, staggerItem, hoverLift } from "@/lib/motion"
import { Button } from "@/components/ui/button"

type Category = "all" | "mvp" | "mobile" | "dashboards"

interface Project {
  id: number
  title: string
  category: Category
  categoryLabel: string
  thumbnail: string
  description: string
  problem: string
  solution: string
  role: string
  stack: string[]
  outcome: string
  screenshots: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "dashboards",
    categoryLabel: "Admin Dashboard",
    thumbnail: "/placeholder-project.jpg",
    description: "Real-time financial analytics platform with custom reporting and role-based access control.",
    problem: "A fintech startup needed a comprehensive dashboard for their operations team to monitor transactions, manage users, and generate compliance reports. Their existing tools were fragmented and slow.",
    solution: "We built a unified dashboard with real-time data streaming, customizable widgets, and automated report generation. The role-based access system ensures data security across different team levels.",
    role: "Full-stack development, UI/UX design, DevOps",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Vercel"],
    outcome: "40% increase in operational efficiency, reduced report generation time from hours to minutes.",
    screenshots: ["/placeholder-screenshot.jpg", "/placeholder-screenshot-2.jpg"]
  },
  {
    id: 2,
    title: "HealthSync Mobile",
    category: "mobile",
    categoryLabel: "Mobile App",
    thumbnail: "/placeholder-project.jpg",
    description: "Cross-platform health tracking app with wearable device integration and personalized insights.",
    problem: "A health-tech company wanted to create a mobile app that could integrate with various wearable devices and provide users with actionable health insights.",
    solution: "We developed a React Native app with seamless wearable integration, offline data sync, and AI-powered health recommendations. The app maintains a consistent experience across iOS and Android.",
    role: "Mobile development, API integration, UX design",
    stack: ["React Native", "Node.js", "MongoDB", "Apple HealthKit", "Google Fit"],
    outcome: "50K+ downloads in first month, 4.8-star average rating on app stores.",
    screenshots: ["/placeholder-screenshot.jpg", "/placeholder-screenshot-2.jpg"]
  },
  {
    id: 3,
    title: "ShopFlow MVP",
    category: "mvp",
    categoryLabel: "Web MVP",
    thumbnail: "/placeholder-project.jpg",
    description: "E-commerce platform MVP with inventory management and multi-vendor support.",
    problem: "A retail entrepreneur needed to quickly validate their multi-vendor marketplace concept. They had limited runway and needed to launch fast without sacrificing quality.",
    solution: "We delivered a fully functional marketplace in 38 days, featuring vendor onboarding, inventory management, payment processing, and a polished customer-facing storefront.",
    role: "Product strategy, full-stack development, launch support",
    stack: ["Next.js", "Prisma", "Stripe", "AWS S3", "Vercel"],
    outcome: "Launched in 38 days, achieved $200K GMV in first quarter.",
    screenshots: ["/placeholder-screenshot.jpg", "/placeholder-screenshot-2.jpg"]
  },
  {
    id: 4,
    title: "TaskMaster Pro",
    category: "dashboards",
    categoryLabel: "Admin Dashboard",
    thumbnail: "/placeholder-project.jpg",
    description: "Project management dashboard with team collaboration and resource allocation features.",
    problem: "A growing agency was struggling to manage multiple client projects across distributed teams. They needed better visibility into workloads and deadlines.",
    solution: "We created a custom project management tool with Gantt charts, resource allocation views, time tracking, and client-facing project portals.",
    role: "Full-stack development, UX research, training",
    stack: ["Next.js", "TypeScript", "Supabase", "React Query"],
    outcome: "30% improvement in project delivery times, adopted by 5 agency departments.",
    screenshots: ["/placeholder-screenshot.jpg", "/placeholder-screenshot-2.jpg"]
  },
  {
    id: 5,
    title: "FitCoach App",
    category: "mobile",
    categoryLabel: "Mobile App",
    thumbnail: "/placeholder-project.jpg",
    description: "Personal training app with workout plans, progress tracking, and video demonstrations.",
    problem: "A fitness influencer wanted to scale their personal training business through a mobile app that could deliver personalized workout experiences.",
    solution: "We built an app featuring custom workout builders, video exercise libraries, progress tracking with before/after photos, and subscription-based monetization.",
    role: "Mobile development, content management system, payments",
    stack: ["React Native", "Firebase", "Stripe", "Cloudinary"],
    outcome: "10K subscribers in 6 months, 90% retention rate.",
    screenshots: ["/placeholder-screenshot.jpg", "/placeholder-screenshot-2.jpg"]
  },
  {
    id: 6,
    title: "LaunchPad SaaS",
    category: "mvp",
    categoryLabel: "Web MVP",
    thumbnail: "/placeholder-project.jpg",
    description: "SaaS boilerplate with authentication, billing, team management, and analytics built-in.",
    problem: "Founders were repeatedly spending weeks building the same foundational features for each new SaaS project. They needed a reusable starting point.",
    solution: "We created a production-ready SaaS template with auth, multi-tenancy, subscription billing, admin panels, and analytics—everything needed to start building unique features immediately.",
    role: "Architecture, full-stack development, documentation",
    stack: ["Next.js", "Prisma", "Stripe", "NextAuth", "Vercel"],
    outcome: "Used to launch 3 successful SaaS products, saving months of development time.",
    screenshots: ["/placeholder-screenshot.jpg", "/placeholder-screenshot-2.jpg"]
  }
]

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mvp", label: "MVP" },
  { value: "mobile", label: "Mobile" },
  { value: "dashboards", label: "Dashboards" }
]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="px-4 md:px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-accent-cyan text-glow-cyan">Work</span>
          </motion.h1>
          <motion.p
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A selection of projects we&apos;ve built for startups, scale-ups, and enterprises. 
            Each one crafted with care and delivered on time.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 md:px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-accent-cyan text-primary-foreground"
                    : "glass-card text-text-muted hover:text-foreground hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={activeFilter}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={hoverLift}
                  onClick={() => setSelectedProject(project)}
                  className="group glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:glow-cyan"
                >
                  {/* Thumbnail */}
                  <div className="aspect-video bg-surface relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/10">{project.id}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium mb-3">
                      {project.categoryLabel}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center text-accent-cyan text-sm font-medium">
                      View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative glass-card rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-foreground hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="aspect-video bg-surface relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/30 to-accent-violet/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/10">{selectedProject.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium mb-4">
                  {selectedProject.categoryLabel}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-text-muted mb-8">
                  {selectedProject.description}
                </p>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">The Problem</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Our Role</h3>
                    <p className="text-text-muted text-sm">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 text-sm text-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-glass-border">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Outcome</h3>
                    <p className="text-accent-cyan font-medium">{selectedProject.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
