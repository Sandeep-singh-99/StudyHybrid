import { BookOpen, Clock3, Layers3, ListChecks, RotateCcw } from "lucide-react"

const features = [
  { icon: BookOpen, title: "Notes you can navigate", description: "Break a long transcript into key ideas and definitions, each linked to the moment it was explained.", example: <><Clock3 size={16} /> <span>04:32</span> Working memory</> },
  { icon: Layers3, title: "Flashcards for active recall", description: "Try explaining a concept in your own words, then flip the card to check your understanding.", example: <>What is working memory?</> },
  { icon: ListChecks, title: "Quizzes that guide review", description: "Test what you remember and return to the relevant chapter when you miss an answer.", example: <><RotateCcw size={16} /> Review the explanation</> },
]

export function FeaturesSection() {
  return (
    <section className="wrap section" id="features" aria-labelledby="features-title">
      <div className="section-heading">
        <h2 id="features-title">One lecture.<br />Three ways to learn.</h2>
        <p>Start with the big ideas, practice recalling them, and revisit the parts that need another look.</p>
      </div>
      <div className="feature-grid">
        {features.map(({ icon: Icon, title, description, example }) => (
          <article className="feature-card" key={title}>
            <span className="tool-icon"><Icon size={23} aria-hidden="true" /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="feature-example" aria-hidden="true"><span>{example}</span></div>
          </article>
        ))}
      </div>
    </section>
  )
}
