import { ArrowUpRight } from "lucide-react"

export function DemoCta() {
  return (
    <section className="wrap section final-cta" aria-labelledby="cta-title">
      <div>
        <h2 id="cta-title">Give it a practice run.</h2>
        <p>Start with a sample lesson on how memory works.</p>
      </div>
      <a className="action primary" href="#preview">Open the interactive demo <ArrowUpRight size={18} aria-hidden="true" /></a>
    </section>
  )
}
