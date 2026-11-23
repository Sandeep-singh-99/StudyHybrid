import { ChevronDown } from "lucide-react"

const questions = [
  { question: "What can I try in the demo?", answer: "Explore three chapters from a sample lecture on memory, reveal a flashcard answer, and take a short quiz. A missed answer links back to the relevant chapter notes." },
  { question: "What do I need to study my own lecture?", answer: "The planned workflow starts with a YouTube link and a transcript. The interactive preview on this page uses a sample lecture." },
  { question: "What does hybrid AI mean?", answer: "The project is designed to process study materials on compatible devices when possible, with cloud processing as a fallback. A local-only privacy option is planned." },
]

export function FaqSection() {
  return (
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
  )
}
