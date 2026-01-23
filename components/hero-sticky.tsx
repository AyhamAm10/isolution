"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { Monitor, Smartphone, LayoutDashboard, Rocket, Zap, Shield, Code, BarChart3, Settings, Globe } from "lucide-react"

type ServiceKey = "web" | "mobile" | "dashboards"

interface ServiceData {
  label: string
  icon: React.ReactNode
  floatingElements: {
    content: string
    icon?: React.ReactNode
    position: { x: number; y: number }
    delay: number
  }[]
  deviceContent: {
    title: string
    subtitle: string
  }
}

const services: Record<ServiceKey, ServiceData> = {
  web: {
    label: "Web MVP",
    icon: <Monitor className="w-5 h-5" />,
    floatingElements: [
      { content: "MVP in 30-45 Days", icon: <Rocket className="w-4 h-4" />, position: { x: 180, y: -120 }, delay: 0 },
      { content: "Landing + Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, position: { x: -200, y: 80 }, delay: 0.5 },
      { content: "API Integrations", icon: <Code className="w-4 h-4" />, position: { x: 200, y: 140 }, delay: 1 },
      { content: "Production-ready", icon: <Shield className="w-4 h-4" />, position: { x: -180, y: -80 }, delay: 1.5 },
      { content: "Scalable Architecture", icon: <Settings className="w-4 h-4" />, position: { x: 160, y: 20 }, delay: 2 },
    ],
    deviceContent: { title: "Dashboard Overview", subtitle: "Real-time analytics" }
  },
  mobile: {
    label: "Mobile Apps",
    icon: <Smartphone className="w-5 h-5" />,
    floatingElements: [
      { content: "iOS/Android-ready", icon: <Smartphone className="w-4 h-4" />, position: { x: 180, y: -100 }, delay: 0 },
      { content: "Performance UI", icon: <Zap className="w-4 h-4" />, position: { x: -190, y: 60 }, delay: 0.5 },
      { content: "Store-ready Pipeline", icon: <Globe className="w-4 h-4" />, position: { x: 190, y: 120 }, delay: 1 },
      { content: "Native Experience", icon: <Shield className="w-4 h-4" />, position: { x: -170, y: -90 }, delay: 1.5 },
    ],
    deviceContent: { title: "Mobile App", subtitle: "Cross-platform ready" }
  },
  dashboards: {
    label: "Admin Dashboards",
    icon: <LayoutDashboard className="w-5 h-5" />,
    floatingElements: [
      { content: "Advanced Analytics", icon: <BarChart3 className="w-4 h-4" />, position: { x: 170, y: -110 }, delay: 0 },
      { content: "Roles & Permissions", icon: <Shield className="w-4 h-4" />, position: { x: -200, y: 70 }, delay: 0.5 },
      { content: "Reports & Exports", icon: <Code className="w-4 h-4" />, position: { x: 185, y: 130 }, delay: 1 },
      { content: "Real-time Data", icon: <Zap className="w-4 h-4" />, position: { x: -175, y: -85 }, delay: 1.5 },
      { content: "Custom Widgets", icon: <Settings className="w-4 h-4" />, position: { x: 155, y: 15 }, delay: 2 },
    ],
    deviceContent: { title: "Admin Panel", subtitle: "Full control center" }
  }
}

export function HeroSticky() {
  const [activeService, setActiveService] = useState<ServiceKey>("web")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Mouse parallax tracking
  useEffect(() => {
    if (prefersReducedMotion) return
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth spring for scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Scroll-driven transforms
  const deviceScale = useTransform(smoothProgress, [0, 0.3, 0.7], [1, 1, 0.86])
  const deviceY = useTransform(smoothProgress, [0, 0.3, 0.7], [0, 0, -120])
  const floatingSpread = useTransform(smoothProgress, [0, 0.3, 0.7], [1, 1, 1.8])
  const floatingOpacity = useTransform(smoothProgress, [0.3, 0.7], [1, 0.35])
  const contentOpacity = useTransform(smoothProgress, [0.7, 1], [1, 0])
  const contentY = useTransform(smoothProgress, [0.7, 1], [0, -40])

  // Mouse parallax spring
  const mouseX = useSpring(mousePosition.x, { stiffness: 150, damping: 20 })
  const mouseY = useSpring(mousePosition.y, { stiffness: 150, damping: 20 })

  // Parallax transforms for different layers
  const bgParallaxX = useTransform(mouseX, [-0.5, 0.5], [-5, 5])
  const bgParallaxY = useTransform(mouseY, [-0.5, 0.5], [-5, 5])
  const deviceParallaxX = useTransform(mouseX, [-0.5, 0.5], [-10, 10])
  const deviceParallaxY = useTransform(mouseY, [-0.5, 0.5], [-10, 10])
  const floatingParallaxX = useTransform(mouseX, [-0.5, 0.5], [-16, 16])
  const floatingParallaxY = useTransform(mouseY, [-0.5, 0.5], [-16, 16])

  const currentService = services[activeService]

  const floatingElementsTransforms = currentService.floatingElements.map((element) => ({
    x: useTransform(
      floatingSpread,
      (spread) => element.position.x * spread + (prefersReducedMotion ? 0 : floatingParallaxX.get())
    ),
    y: useTransform(
      floatingSpread,
      (spread) => element.position.y * spread + (prefersReducedMotion ? 0 : floatingParallaxY.get())
    ),
    opacity: floatingOpacity
  }))

  return (
    <div ref={containerRef} className="relative" style={{ height: "180vh" }}>
      {/* Sticky container */}
      <div ref={heroRef} className="sticky top-0 h-screen overflow-hidden">
        {/* Animated Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1.02, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1, filter: "blur(10px)" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{
              x: prefersReducedMotion ? 0 : bgParallaxX,
              y: prefersReducedMotion ? 0 : bgParallaxY,
            }}
          >
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(110, 231, 255, 0.5) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(110, 231, 255, 0.5) 1px, transparent 1px)`,
                backgroundSize: "60px 60px"
              }}
            />
            
            {/* Gradient fog layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-violet/5 rounded-full blur-[80px]" />
            
            {/* Noise overlay */}
            <div className="absolute inset-0 noise-overlay" />
          </motion.div>
        </AnimatePresence>

        {/* Main content */}
        <motion.div 
          className="relative h-full flex items-center justify-center px-4"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="max-w-7xl w-full mx-auto pt-24">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              
              {/* Service Selector (Left) */}
              <div className="flex lg:flex-col gap-2 lg:gap-3">
                {(Object.keys(services) as ServiceKey[]).map((key) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className={`relative px-4 py-3 lg:px-5 lg:py-4 rounded-2xl text-left transition-all duration-300 ${
                      activeService === key
                        ? "glass-card glow-cyan"
                        : "hover:bg-white/5"
                    }`}
                    whileHover={prefersReducedMotion ? {} : { y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={activeService === key ? "text-accent-cyan" : "text-text-muted"}>
                        {services[key].icon}
                      </span>
                      <span className={`font-medium text-sm lg:text-base whitespace-nowrap ${
                        activeService === key ? "text-foreground" : "text-text-muted"
                      }`}>
                        {services[key].label}
                      </span>
                    </div>
                    {activeService === key && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent-cyan rounded-full hidden lg:block"
                        style={{ left: -4 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Device & Floating Elements (Center/Right) */}
              <div className="relative flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
                
                {/* Floating Elements */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 pointer-events-none hidden md:block"
                  >
                    {currentService.floatingElements.map((element, index) => (
                      <motion.div
                        key={index}
                        className="absolute left-1/2 top-1/2 glass-card px-4 py-2 rounded-xl flex items-center gap-2"
                        initial={{ 
                          opacity: 0, 
                          x: element.position.x * 0.5, 
                          y: element.position.y * 0.5,
                          filter: "blur(4px)"
                        }}
                        animate={{ 
                          opacity: 1, 
                          x: element.position.x, 
                          y: element.position.y,
                          filter: "blur(0px)"
                        }}
                        transition={{ 
                          delay: element.delay * 0.1, 
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        style={{
                          x: floatingElementsTransforms[index].x,
                          y: floatingElementsTransforms[index].y,
                          opacity: floatingElementsTransforms[index].opacity
                        }}
                      >
                        {/* Idle float animation */}
                        <motion.div
                          className="flex items-center gap-2"
                          animate={prefersReducedMotion ? {} : {
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 6 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        >
                          <span className="text-accent-cyan">{element.icon}</span>
                          <span className="text-xs lg:text-sm font-medium text-foreground whitespace-nowrap">
                            {element.content}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Device Mockup */}
                <motion.div
                  className="relative z-10"
                  style={{
                    scale: deviceScale,
                    y: deviceY,
                    x: prefersReducedMotion ? 0 : deviceParallaxX,
                  }}
                >
                  <motion.div
                    style={{ y: prefersReducedMotion ? 0 : deviceParallaxY }}
                  >
                    {/* Device Frame */}
                    <div className="relative w-[320px] md:w-[480px] lg:w-[560px]">
                      {/* Glow behind device */}
                      <div className="absolute -inset-4 bg-accent-cyan/10 rounded-3xl blur-2xl" />
                      
                      {/* Laptop frame */}
                      <div className="relative glass-card rounded-2xl p-2 glow-cyan">
                        {/* Screen */}
                        <div className="bg-surface rounded-xl overflow-hidden">
                          {/* Browser bar */}
                          <div className="flex items-center gap-2 px-4 py-2 border-b border-glass-border">
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                            </div>
                            <div className="flex-1 mx-4">
                              <div className="bg-white/5 rounded-md px-3 py-1 text-xs text-text-muted max-w-[200px]">
                                app.i-solution.io
                              </div>
                            </div>
                          </div>
                          
                          {/* Dashboard Content */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeService}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="p-4 md:p-6 min-h-[200px] md:min-h-[280px]"
                            >
                              {/* Header */}
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                                    {currentService.deviceContent.title}
                                  </h3>
                                  <p className="text-xs text-text-muted">
                                    {currentService.deviceContent.subtitle}
                                  </p>
                                </div>
                                <div className="flex gap-2">
                                  <div className="w-6 h-6 rounded bg-accent-cyan/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Stats Row */}
                              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4">
                                {[
                                  { label: "Users", value: "12.5K" },
                                  { label: "Revenue", value: "$48K" },
                                  { label: "Growth", value: "+24%" }
                                ].map((stat, i) => (
                                  <div key={i} className="bg-white/5 rounded-lg p-2 md:p-3">
                                    <div className="text-[10px] md:text-xs text-text-muted">{stat.label}</div>
                                    <div className="text-sm md:text-lg font-semibold text-foreground">{stat.value}</div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Chart placeholder */}
                              <div className="bg-white/5 rounded-lg p-3 md:p-4">
                                <div className="flex items-end gap-1 h-16 md:h-24">
                                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                                    <motion.div
                                      key={i}
                                      className="flex-1 bg-accent-cyan/40 rounded-t"
                                      initial={{ height: 0 }}
                                      animate={{ height: `${h}%` }}
                                      transition={{ delay: i * 0.05, duration: 0.4 }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                      
                      {/* Laptop base */}
                      <div className="h-3 bg-gradient-to-b from-glass-border to-transparent rounded-b-xl mx-8" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Hero headline */}
            <motion.div 
              className="text-center mt-8 lg:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Your <span className="text-accent-cyan text-glow-cyan">Digital Command Center</span>
              </h1>
              <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto text-pretty">
                Production-ready web MVPs, mobile apps, and admin dashboards delivered in 30-45 days. 
                Built for scale, designed for impact.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
