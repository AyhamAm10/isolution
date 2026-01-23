"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Monitor, Smartphone, LayoutDashboard, Palette, Megaphone, Gamepad2, Check, Clock, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem } from "@/lib/motion"

const primaryServices = [
  {
    id: "web",
    title: "Web MVP",
    icon: <Monitor className="w-8 h-8" />,
    description: "Launch your product fast with a polished, production-ready web application.",
    timeline: "4-6 weeks",
    features: [
      "Custom landing pages with conversion optimization",
      "User authentication & dashboard",
      "Payment integration (Stripe, etc.)",
      "Admin panel for content management",
      "API integrations",
      "Responsive design for all devices"
    ],
    deliverables: [
      "Production-deployed application",
      "Source code ownership",
      "Technical documentation",
      "30 days post-launch support"
    ]
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Cross-platform mobile experiences that feel native on iOS and Android.",
    timeline: "6-8 weeks",
    features: [
      "React Native cross-platform development",
      "Smooth animations & gestures",
      "Offline-first architecture",
      "Push notifications",
      "Device feature integration",
      "App store deployment pipeline"
    ],
    deliverables: [
      "iOS & Android builds",
      "App store submission assistance",
      "Source code ownership",
      "30 days post-launch support"
    ]
  },
  {
    id: "dashboards",
    title: "Admin Dashboards",
    icon: <LayoutDashboard className="w-8 h-8" />,
    description: "Powerful internal tools that scale with your business operations.",
    timeline: "4-8 weeks",
    features: [
      "Real-time data visualization",
      "Role-based access control",
      "Custom reporting & exports",
      "Workflow automation",
      "Audit logs & compliance",
      "Third-party integrations"
    ],
    deliverables: [
      "Fully functional dashboard",
      "User management system",
      "Source code ownership",
      "30 days post-launch support"
    ]
  }
]

const addOnServices = [
  {
    id: "design",
    title: "UI/UX Design",
    icon: <Palette className="w-6 h-6" />,
    description: "Comprehensive design services from wireframes to pixel-perfect mockups."
  },
  {
    id: "marketing",
    title: "Marketing Creatives",
    icon: <Megaphone className="w-6 h-6" />,
    description: "Social media assets, email templates, and promotional materials."
  },
  {
    id: "unity",
    title: "Unity / 3D",
    icon: <Gamepad2 className="w-6 h-6" />,
    description: "Interactive 3D experiences, product configurators, and simple games."
  }
]

const processSteps = [
  { title: "Discovery", description: "Understand your vision and define scope" },
  { title: "Design", description: "Create UI/UX that delights users" },
  { title: "Build", description: "Rapid, iterative development" },
  { title: "Launch", description: "Deploy and support your product" }
]

export default function ServicesPage() {
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
            Services Built for <span className="text-accent-cyan text-glow-cyan">Speed & Scale</span>
          </motion.h1>
          <motion.p
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From concept to launch in weeks, not months. We specialize in building 
            production-ready digital products that your users will love.
          </motion.p>
        </div>
      </section>

      {/* Primary Services */}
      <section className="px-4 md:px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {primaryServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="glass-card rounded-3xl p-6 md:p-10 transition-all duration-300 hover:glow-cyan"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                        <div className="flex items-center gap-2 text-text-muted text-sm mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-text-muted text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">What You Get</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                            <Check className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Deliverables */}
                  <div className="bg-white/[0.03] rounded-2xl p-6 border border-glass-border">
                    <div className="flex items-center gap-2 mb-6">
                      <Package className="w-5 h-5 text-accent-cyan" />
                      <h3 className="text-lg font-semibold text-foreground">Deliverables</h3>
                    </div>
                    <ul className="space-y-4">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-glass-border">
                      <Button asChild className="w-full bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl">
                        <Link href="/contact">
                          Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-on Services */}
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
              Additional Services
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Complement your project with these specialized services.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {addOnServices.map((service) => (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="glass-card rounded-2xl p-6 hover:glow-cyan transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center text-accent-violet mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Summary */}
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
              Our Process
            </h2>
            <p className="text-text-muted">
              Simple, transparent, and effective.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan font-bold">
                  {index + 1}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{step.title}</div>
                  <div className="text-text-muted text-sm">{step.description}</div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-glass-border" />
                )}
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
              Let&apos;s Build Together
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto">
              Ready to turn your idea into reality? Book a free discovery call and let&apos;s discuss your project.
            </p>
            <Button asChild className="bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl px-8">
              <Link href="/contact">
                Start a Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
