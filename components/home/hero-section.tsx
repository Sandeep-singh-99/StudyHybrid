import { ArrowDown, ArrowRight, BookOpen, Layers3, ListChecks } from "lucide-react"
import { PreviewSection } from "./preview-section"

const tools = [
  { icon: BookOpen, name: "Timestamped notes", detail: "Find the exact moment that matters." },
  { icon: Layers3, name: "Flashcards", detail: "Put your memory to work." },
  { icon: ListChecks, name: "Practice quizzes", detail: "See what stuck and what to revisit." },
]

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-layout wrap">
        <div>
          <p className="eyebrow"><span /> AI STUDY WORKSPACE</p>
          <h1 id="hero-title">Make the<br className="hero-break" /> lecture <em>stick.</em></h1>
          <p className="hero-description">Turn lecture transcripts into timestamped notes, flashcards, and practice quizzes. When you miss an answer, go straight back to the part that explains it.</p>
          <div className="hero-actions flex flex-wrap items-center gap-2 sm:gap-3">
            <a className="action primary" href="#preview">Try the study demo <ArrowRight size={17} aria-hidden="true" /></a>
            <a className="action secondary" href="#workflow">How it works <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <p className="demo-hint">No sign-in required for the demo.</p>
        </div>
        <PreviewSection />
      </div>
      <ul className="tool-strip wrap" role="list" aria-label="Study tools">
        {tools.map(({ icon: Icon, name, detail }) => (
          <li key={name}>
            <span className="tool-icon"><Icon size={21} aria-hidden="true" /></span>
            <div><strong>{name}</strong><p>{detail}</p></div>
          </li>
        ))}
      </ul>
    </section>
  )
}
