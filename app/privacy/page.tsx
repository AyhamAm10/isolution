"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/section-reveal"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <SectionReveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-text-muted">
              Last updated: January 24, 2026
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-10">
          <SectionReveal delay={0.1}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  request a quote, contact us, or otherwise communicate with us.
                </p>
                <p>
                  This information may include: name, email address, phone number, company name, 
                  project details, and any other information you choose to provide.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. How We Use Your Information
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Communicate about products, services, and events</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Information Sharing
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  We do not share, sell, or otherwise disclose your personal information for purposes 
                  other than those outlined in this Privacy Policy. We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                  <li>Authorities when required by law or to protect our rights</li>
                </ul>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Data Security
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, 
                  misuse, unauthorized access, disclosure, alteration, and destruction. All data 
                  transmission is encrypted using industry-standard SSL/TLS protocols.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Your Rights
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.35}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Contact Us
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-accent-cyan">
                  privacy@i-solution.io
                </p>
              </div>
            </section>
          </SectionReveal>
        </div>
      </div>
    </div>
  )
}
