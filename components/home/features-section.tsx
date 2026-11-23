import type { ReactNode } from "react"
import { Check, Clock3, Layers3, Repeat2 } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"

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

export function FeaturesSection() {
  return (
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
  )
}
