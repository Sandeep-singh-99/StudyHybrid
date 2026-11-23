import { BookOpen, BrainCircuit, Clock3, Layers3, Sparkles } from "lucide-react"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { GridPattern } from "@/components/ui/grid-pattern"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { PreviewSection } from "./preview-section"

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <GridPattern width={48} height={48} className="hero-grid stroke-[#bfabff20]" />
      <div className="hero-layout wrap">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} aria-hidden="true" /> AI lecture study workspace</p>
          <h1 id="hero-title">Study smarter.<br /><AnimatedGradientText colorFrom="#dfc6ff" colorTo="#9eaaff" className="motion-reduce:animate-none [animation-iteration-count:1]">Remember more.</AnimatedGradientText></h1>
          <p className="hero-description">Turn lecture transcripts into notes, flashcards, and quizzes. If you miss a question, go straight back to the part that explains it.</p>
          <div className="hero-actions">
            <a className="action primary" href="#preview">Try the study demo</a>
            <a className="action" href="#workflow">See how it works</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit-stage" aria-hidden="true">
            <div className="hero-orbit" />
            <div className="orbit-track" />
            <div className="orbit-core"><BrainCircuit size={56} strokeWidth={1.25} /></div>
            <OrbitingCircles className="hero-orbit-item" duration={18} path={false}>
              <div className="orbit-label"><Clock3 size={17} /> Timestamped review</div>
              <div className="orbit-label"><BookOpen size={17} /> Notes</div>
              <div className="orbit-label"><Layers3 size={17} /> Flashcards</div>
            </OrbitingCircles>
          </div>
        </div>
      </div>
      <PreviewSection />
    </section>
  )
}
