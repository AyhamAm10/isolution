"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/section-reveal"

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <SectionReveal>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
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
                1. Agreement to Terms
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  By accessing or using our services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Services Description
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  i-solution provides software development services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web application development and MVP creation</li>
                  <li>Mobile application development for iOS and Android</li>
                  <li>Admin dashboard and internal tool development</li>
                  <li>API development and integration services</li>
                  <li>Technical consulting and architecture design</li>
                </ul>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Project Engagement
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  All project engagements are subject to a separate Statement of Work (SOW) that outlines:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Project scope, deliverables, and timeline</li>
                  <li>Payment terms and milestones</li>
                  <li>Intellectual property ownership</li>
                  <li>Confidentiality obligations</li>
                  <li>Change request procedures</li>
                </ul>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.25}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Payment Terms
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Payment terms are specified in each project agreement. Standard terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Initial deposit required before project commencement</li>
                  <li>Milestone-based payments as defined in the SOW</li>
                  <li>Final payment due upon project delivery</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Intellectual Property
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Upon full payment, clients receive full ownership of custom code developed specifically 
                  for their project. We retain the right to use general-purpose code, frameworks, and 
                  methodologies in future projects.
                </p>
                <p>
                  Third-party libraries and open-source components remain subject to their respective licenses.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.35}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  To the maximum extent permitted by law, i-solution shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
                <p>
                  Our total liability shall not exceed the amounts paid by you for the specific services 
                  giving rise to the claim.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Termination
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Either party may terminate a project engagement as specified in the project agreement. 
                  Upon termination, the client shall pay for all work completed up to the termination date.
                </p>
              </div>
            </section>
          </SectionReveal>

          <SectionReveal delay={0.45}>
            <section className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                8. Contact Information
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-accent-cyan">
                  legal@i-solution.io
                </p>
              </div>
            </section>
          </SectionReveal>
        </div>
      </div>
    </div>
  )
}
