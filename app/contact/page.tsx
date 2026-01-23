"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle, Calendar, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const projectTypes = [
  { value: "web-mvp", label: "Web MVP" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "dashboard", label: "Admin Dashboard" },
  { value: "other", label: "Something Else" }
]

const budgetRanges = [
  { value: "5k-10k", label: "$5K - $10K" },
  { value: "10k-25k", label: "$10K - $25K" },
  { value: "25k-50k", label: "$25K - $50K" },
  { value: "50k+", label: "$50K+" }
]

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.projectType) newErrors.projectType = "Please select a project type"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setFormState("submitting")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate success
    setFormState("success")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

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
            Let&apos;s Build <span className="text-accent-cyan text-glow-cyan">Something Great</span>
          </motion.h1>
          <motion.p
            className="text-text-muted text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours. 
            No sales pitch—just a genuine conversation about what you&apos;re building.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-3xl p-6 md:p-10">
                {formState === "success" ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h2>
                    <p className="text-text-muted mb-8">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setFormState("idle")
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          projectType: "",
                          budget: "",
                          message: ""
                        })
                      }}
                      variant="outline"
                      className="rounded-xl border-glass-border"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="John Doe"
                          className={`bg-white/5 border-glass-border rounded-xl text-foreground placeholder:text-text-muted focus:border-accent-cyan ${
                            errors.name ? "border-red-400" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          className={`bg-white/5 border-glass-border rounded-xl text-foreground placeholder:text-text-muted focus:border-accent-cyan ${
                            errors.email ? "border-red-400" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Acme Inc. (optional)"
                        className="bg-white/5 border-glass-border rounded-xl text-foreground placeholder:text-text-muted focus:border-accent-cyan"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div className="space-y-2">
                        <Label className="text-foreground">Project Type *</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleInputChange("projectType", value)}
                        >
                          <SelectTrigger className={`bg-white/5 border-glass-border rounded-xl text-foreground ${
                            errors.projectType ? "border-red-400" : ""
                          }`}>
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                          <SelectContent className="bg-surface border-glass-border">
                            {projectTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value} className="text-foreground focus:bg-white/10">
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.projectType && (
                          <p className="text-red-400 text-xs flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.projectType}
                          </p>
                        )}
                      </div>

                      {/* Budget */}
                      <div className="space-y-2">
                        <Label className="text-foreground">Budget Range</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleInputChange("budget", value)}
                        >
                          <SelectTrigger className="bg-white/5 border-glass-border rounded-xl text-foreground">
                            <SelectValue placeholder="Select a range (optional)" />
                          </SelectTrigger>
                          <SelectContent className="bg-surface border-glass-border">
                            {budgetRanges.map((range) => (
                              <SelectItem key={range.value} value={range.value} className="text-foreground focus:bg-white/10">
                                {range.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Tell us about your project *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="What are you building? What's the timeline? Any specific requirements?"
                        rows={5}
                        className={`bg-white/5 border-glass-border rounded-xl text-foreground placeholder:text-text-muted focus:border-accent-cyan resize-none ${
                          errors.message ? "border-red-400" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full bg-accent-cyan text-primary-foreground hover:bg-accent-cyan/90 rounded-xl py-6 text-base font-semibold glow-cyan disabled:opacity-50"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* WhatsApp */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-text-muted text-sm">Quick chat preferred?</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full rounded-xl border-glass-border hover:bg-white/5 hover:border-green-400/50 bg-transparent">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    Start a Chat
                  </a>
                </Button>
              </div>

              {/* Calendar */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Book a Call</h3>
                    <p className="text-text-muted text-sm">Schedule a 30-min intro</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-xl border-glass-border hover:bg-white/5 hover:border-accent-cyan/50 bg-transparent">
                  View Calendar
                </Button>
              </div>

              {/* Response time */}
              <div className="text-center text-text-muted text-sm">
                <p>We typically respond within</p>
                <p className="text-accent-cyan font-semibold text-lg">24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
