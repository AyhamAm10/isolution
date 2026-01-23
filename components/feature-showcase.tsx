"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Rocket, LayoutDashboard, Smartphone, Cog, TrendingUp, Users, FileCode, Zap } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Build MVP Fast",
    description: "Go from idea to production in 30-45 days. We focus on core features that matter, delivering a polished product your users will love.",
    icon: <Rocket className="w-8 h-8" />,
    direction: "left",
    microUI: {
      type: "timeline",
      data: ["Week 1-2: Design", "Week 3-4: Build", "Week 5-6: Polish"]
    }
  },
  {
    id: 2,
    title: "Scalable Dashboards",
    description: "Admin panels that grow with your business. Real-time analytics, role-based access, and custom reports built for enterprise needs.",
    icon: <LayoutDashboard className="w-8 h-8" />,
    direction: "right",
    microUI: {
      type: "metrics",
      data: [
        { label: "Active Users", value: "2.4K", trend: "+12%" },
        { label: "Revenue", value: "$128K", trend: "+8%" }
      ]
    }
  },
  {
    id: 3,
    title: "Mobile Experiences",
    description: "Native-feeling apps for iOS and Android. Smooth animations, offline support, and store-ready deployment pipelines.",
    icon: <Smartphone className="w-8 h-8" />,
    direction: "left",
    microUI: {
      type: "code",
      data: "// Cross-platform\nconst app = create({\n  ios: true,\n  android: true\n});"
    }
  },
  {
    id: 4,
    title: "Automation & Integrations",
    description: "Connect your tools and automate workflows. From payment processing to CRM sync, we make your stack work together.",
    icon: <Cog className="w-8 h-8" />,
    direction: "right",
    microUI: {
      type: "integrations",
      data: ["Stripe", "Slack", "Zapier", "GitHub"]
    }
  }
]

function MicroUI({ type, data }: { type: string; data: unknown }) {
  if (type === "timeline") {
    return (
      <div className="space-y-2">
        {(data as string[]).map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-xs text-text-muted">{item}</span>
          </div>
        ))}
      </div>
    )
  }
  
  if (type === "metrics") {
    return (
      <div className="space-y-2">
        {(data as { label: string; value: string; trend: string }[]).map((metric, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-xs text-text-muted">{metric.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">{metric.value}</span>
              <span className="text-xs text-green-400 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                {metric.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  if (type === "code") {
    return (
      <div className="font-mono text-xs text-text-muted bg-black/20 rounded-lg p-3">
        <pre className="whitespace-pre-wrap">{data as string}</pre>
      </div>
    )
  }
  
  if (type === "integrations") {
    return (
      <div className="flex flex-wrap gap-2">
        {(data as string[]).map((integration, i) => (
          <div key={i} className="px-2 py-1 rounded-md bg-white/5 text-xs text-text-muted">
            {integration}
          </div>
        ))}
      </div>
    )
  }
  
  return null
}

export function FeatureShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ height: `${features.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-6">
          {features.map((feature, index) => {
            const segmentStart = index / features.length
            const segmentEnd = (index + 1) / features.length
            const segmentMid = (segmentStart + segmentEnd) / 2
            
            return (
              <FeatureCard
                key={feature.id}
                feature={feature}
                progress={scrollYProgress}
                segmentStart={segmentStart}
                segmentMid={segmentMid}
                segmentEnd={segmentEnd}
                prefersReducedMotion={prefersReducedMotion}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  progress,
  segmentStart,
  segmentMid,
  segmentEnd,
  prefersReducedMotion
}: {
  feature: typeof features[0]
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  segmentStart: number
  segmentMid: number
  segmentEnd: number
  prefersReducedMotion: boolean
}) {
  const isFromLeft = feature.direction === "left"
  const startX = isFromLeft ? -100 : 100
  
  // Opacity: 0 -> 1 -> 1 -> 0
  const opacity = useTransform(
    progress,
    [segmentStart, segmentStart + 0.05, segmentEnd - 0.05, segmentEnd],
    [0, 1, 1, 0]
  )
  
  // X position: side -> center -> slight side
  const x = useTransform(
    progress,
    [segmentStart, segmentMid - 0.05, segmentMid + 0.05, segmentEnd],
    [startX, 0, 0, startX * 0.3]
  )
  
  // Blur on enter/exit (only if not reduced motion)
  const blur = useTransform(
    progress,
    [segmentStart, segmentStart + 0.03, segmentEnd - 0.03, segmentEnd],
    prefersReducedMotion ? [0, 0, 0, 0] : [8, 0, 0, 8]
  )

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ opacity }}
    >
      <motion.div
        className="glass-card rounded-3xl p-6 md:p-10 max-w-2xl w-full mx-4 pointer-events-auto"
        style={{ 
          x,
          filter: useTransform(blur, (b) => `blur(${b}px)`)
        }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            {feature.icon}
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
              {feature.description}
            </p>
            
            {/* Micro UI */}
            <div className="bg-white/[0.03] rounded-xl p-4 border border-glass-border">
              <MicroUI type={feature.microUI.type} data={feature.microUI.data} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
