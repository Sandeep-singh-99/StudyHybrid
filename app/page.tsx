import { DemoCta } from "@/components/home/demo-cta"
import { FaqSection } from "@/components/home/faq-section"
import { FeaturesSection } from "@/components/home/features-section"
import { HeroSection } from "@/components/home/hero-section"
import { HybridSection } from "@/components/home/hybrid-section"
import { Footer } from "@/components/home/footer"
import { Navbar } from "@/components/home/navbar"
import { WorkflowSection } from "@/components/home/workflow-section"

export default function Home() {
  return (
    <div className="landing" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <HybridSection />
        <FaqSection />
        <DemoCta />
      </main>
      <Footer />
    </div>
  )
}
