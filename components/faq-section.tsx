"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build an MVP?",
    answer: "Most MVPs are delivered in 30-45 days, depending on complexity. We'll give you an exact timeline after our discovery call. No vague estimates—just clear milestones."
  },
  {
    question: "What's included in the 30-day support after launch?",
    answer: "Bug fixes, minor adjustments, and technical support. We're available via Slack or email to address any issues that come up post-launch. It's our way of ensuring you're set up for success."
  },
  {
    question: "Do you work with existing codebases?",
    answer: "Yes, we can work with your existing code. We'll do a quick audit first to understand the architecture and provide an honest assessment of what's possible within your timeline."
  },
  {
    question: "What technologies do you use?",
    answer: "We primarily work with Next.js, React Native, TypeScript, PostgreSQL, and modern cloud infrastructure (Vercel, AWS). We choose the best tools for each project, not just what's trendy."
  },
  {
    question: "How do payments work?",
    answer: "We typically work with 50% upfront and 50% on delivery. For larger projects, we can structure milestone-based payments. Everything is outlined clearly in our proposal."
  },
  {
    question: "Can you help with design as well?",
    answer: "Absolutely. Every project includes thoughtful UI/UX design. We believe great products need great design—it's not an add-on, it's core to what we deliver."
  }
]

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-accent-cyan">Questions</span>
          </h2>
          <p className="text-text-muted text-base md:text-lg">
            Quick answers to common questions. Still curious? Let&apos;s talk.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-0 data-[state=open]:glow-cyan transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent-cyan transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
