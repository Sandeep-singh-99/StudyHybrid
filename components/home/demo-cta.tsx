import { GridPattern } from "@/components/ui/grid-pattern"
import { ShineBorder } from "@/components/ui/shine-border"

export function DemoCta() {
  return (
    <section className="wrap section final-cta" aria-labelledby="cta-title">
      <GridPattern className="cta-grid stroke-[#c4b3ff39]" />
      <ShineBorder aria-hidden="true" duration={4.5} className="[animation-iteration-count:1]" shineColor={["#7656e9", "#b2a1ff"]} />
      <h2 id="cta-title">Try a lecture in StudyHybrid.</h2>
      <p>Start with a sample lesson on how memory works.</p>
      <a className="action primary" href="#preview">Open the interactive demo</a>
    </section>
  )
}
