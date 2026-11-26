import { BrainCircuit, Link2, Repeat2 } from "lucide-react"

const workflow = [
  { icon: Link2, title: "Start with a lecture", description: "Try our sample lecture on memory. Support for using your own YouTube link and transcript is planned." },
  { icon: BrainCircuit, title: "Practice what you learned", description: "Read the notes, reveal flashcard answers, then test your recall." },
  { icon: Repeat2, title: "Review and retry", description: "Use timestamps to revisit the explanation and focus your next quiz on missed topics." },
]

export function WorkflowSection() {
  return (
    <section className="section workflow-section" id="workflow" aria-labelledby="workflow-title">
      <div className="wrap">
        <h2 id="workflow-title">From lecture to review.</h2>
        <ol className="workflow" role="list">
          {workflow.map(({ icon: Icon, title, description }) => (
            <li key={title}><Icon size={23} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
