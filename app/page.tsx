import { HeroSticky } from "@/components/hero-sticky"
import { OverviewReveal } from "@/components/overview-reveal"
import { FeatureShowcase } from "@/components/feature-showcase"
import { ProjectsPreview } from "@/components/projects-preview"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero with sticky scroll */}
      <HeroSticky />
      
      {/* Overview section with reveal animation */}
      <OverviewReveal />
      
      {/* Feature showcase with pinned scrolling */}
      <FeatureShowcase />
      
      {/* Projects preview */}
      <ProjectsPreview />
      
      {/* Process steps */}
      <ProcessSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Final CTA */}
      <CTASection />
    </div>
  )
}
