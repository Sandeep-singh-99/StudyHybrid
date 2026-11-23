import type { ReactNode } from "react"
import {
  AudioLines, BookOpen, BrainCircuit, Check, ChevronDown, Clock3, Cloud,
  Cpu, Fingerprint, Layers3, Link2, Repeat2, Sparkles,
} from "lucide-react"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { MagicCard } from "@/components/ui/magic-card"
import { DotPattern } from "@/components/ui/dot-pattern"
import { GridPattern } from "@/components/ui/grid-pattern"
import { ShineBorder } from "@/components/ui/shine-border"
import { StudyPreview } from "./study-preview"

const workflow = [
  { icon: Link2, title: "Bring a lecture", description: "Start with a YouTube link and its transcript." },
  { icon: BrainCircuit, title: "Practice what you learned", description: "Read the notes, reveal flashcard answers, then test your recall." },
  { icon: Repeat2, title: "Review and retry", description: "Use timestamps to revisit the explanation and focus your next quiz on missed topics." },
]

const questions = [
  { question: "What can I try in the demo?", answer: "Explore three chapters from a sample lecture on memory, reveal a flashcard answer, and take a short quiz. A missed answer links back to the relevant chapter notes." },
  { question: "What do I need to study my own lecture?", answer: "The planned workflow starts with a YouTube link and a transcript. The interactive preview on this page uses a sample lecture." },
  { question: "What does hybrid AI mean?", answer: "The project is designed to process study materials on compatible devices when possible, with cloud processing as a fallback. A local-only privacy option is planned." },
]

function Brand() {
  return <a href="#top" className="brand"><span><AudioLines size={20} aria-hidden="true" /></span>studyHybrid</a>
}

function FeatureCard({ name, description, background, wide }: {
  name: string
  description: string
  background: ReactNode
  wide?: boolean
}) {
  return (
    <article className={wide ? "bento-card bento-wide" : "bento-card"}>
      <MagicCard className="feature-card-effect" gradientColor="#433569" gradientOpacity={0.45}>
        <div className="bento-art" aria-hidden="true">{background}</div>
        <div className="bento-copy">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </MagicCard>
    </article>
  )
}

export default function Home() {
  return (
    <div className="landing" id="top">
      <header className="site-header wrap">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="action small header-action" href="#preview">Try the demo</a>
      </header>
      <main>
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
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orbit" />
              <div className="hero-orbit orbit-inner" />
              <div className="orbit-core"><BrainCircuit size={56} strokeWidth={1.25} /></div>
              <div className="orbit-label orbit-notes"><BookOpen size={17} /> Notes</div>
              <div className="orbit-label orbit-cards"><Layers3 size={17} /> Flashcards</div>
              <div className="orbit-label orbit-review"><Clock3 size={17} /> Timestamped review</div>
            </div>
          </div>
          <section className="preview wrap" id="preview" aria-labelledby="preview-title">
            <ShineBorder aria-hidden="true" duration={4.5} className="[animation-iteration-count:1]" shineColor={["#7a62f2", "#bca6ff", "#4bafe8"]} />
            <div className="preview-bar">
              <h2 id="preview-title"><AudioLines size={18} aria-hidden="true" /> studyHybrid workspace</h2>
              <span className="demo-label">Interactive demo</span>
            </div>
            <StudyPreview />
          </section>
        </section>

        <section className="wrap section" id="features" aria-labelledby="features-title">
          <h2 id="features-title">Your lecture, ready to study.</h2>
          <div className="bento-grid">
            <FeatureCard wide name="Structured, timestamped notes" description="Break a long transcript into sections with key points and definitions."
              background={<div className="sample-note"><span><Clock3 size={15} /> 04:32</span><strong>Working memory</strong><div /><div /></div>} />
            <FeatureCard name="Flashcards" description="Use active recall and spaced repetition to revisit key ideas."
              background={<div className="sample-flashcard"><Layers3 size={24} /><strong>What is working memory?</strong></div>} />
            <FeatureCard name="Practice quizzes" description="Practice with multiple-choice and short-answer questions at your chosen difficulty."
              background={<div className="sample-quiz"><span><Check size={16} /> Working memory</span><span>Long-term memory</span></div>} />
            <FeatureCard wide name="Review the right moment" description="Find the exact explanation for a missed answer, then practice the topics you found hardest."
              background={<div className="sample-review"><span><Clock3 size={18} /> 04:32</span><span><Repeat2 size={18} /> Retry weak topics</span></div>} />
          </div>
        </section>

        <section className="wrap section workflow-section" id="workflow" aria-labelledby="workflow-title">
          <h2 id="workflow-title">From lecture to review.</h2>
          <ol className="workflow">
            {workflow.map(({ icon: Icon, title, description }) => (
              <li key={title}><Icon size={23} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
        </section>

        <section className="wrap section hybrid-panel" aria-labelledby="hybrid-title">
          <DotPattern width={18} height={18} className="panel-dots text-[#c4b3ff39]" />
          <div>
            <Fingerprint className="hybrid-icon" size={28} aria-hidden="true" />
            <h2 id="hybrid-title">On-device when possible.</h2>
            <p>studyHybrid is designed to show where each result was processed, with a local-only option for users who prefer to keep study material on their device.</p>
          </div>
          <div className="processing">
            <div><Cpu size={22} aria-hidden="true" /><span><strong>On-device</strong>On compatible devices</span></div>
            <div><Cloud size={22} aria-hidden="true" /><span><strong>Cloud fallback</strong>When local processing is unavailable</span></div>
          </div>
        </section>

        <section className="wrap section faq-section" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">Frequently asked questions</h2>
          <div className="faq-list">
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<ChevronDown size={18} aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="wrap section final-cta" aria-labelledby="cta-title">
          <GridPattern className="cta-grid stroke-[#c4b3ff39]" />
          <ShineBorder aria-hidden="true" duration={4.5} className="[animation-iteration-count:1]" shineColor={["#7656e9", "#b2a1ff"]} />
          <h2 id="cta-title">Try a lecture in studyHybrid.</h2>
          <p>Start with a sample lesson on how memory works.</p>
          <a className="action primary" href="#preview">Open the interactive demo</a>
        </section>
      </main>
      <footer className="site-footer wrap">
        <Brand />
        <a className="action small" href="#top">Back to top</a>
      </footer>
    </div>
  )
}
