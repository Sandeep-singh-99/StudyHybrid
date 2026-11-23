import { BrainCircuit, Link2, Repeat2 } from "lucide-react"

const workflow = [
  { icon: Link2, title: "Bring a lecture", description: "Start with a YouTube link and its transcript." },
  { icon: BrainCircuit, title: "Practice what you learned", description: "Read the notes, reveal flashcard answers, then test your recall." },
  { icon: Repeat2, title: "Review and retry", description: "Use timestamps to revisit the explanation and focus your next quiz on missed topics." },
]

export function WorkflowSection() {
  return (
    <section className="wrap section workflow-section" id="workflow" aria-labelledby="workflow-title">
      <h2 id="workflow-title">From lecture to review.</h2>
      <ol className="workflow">
        {workflow.map(({ icon: Icon, title, description }) => (
          <li key={title}><Icon size={23} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></li>
        ))}
      </ol>
    </section>
  )
}
