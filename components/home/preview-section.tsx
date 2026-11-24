import { AudioLines } from "lucide-react"
import { ShineBorder } from "@/components/ui/shine-border"
import { StudyPreview } from "./study-preview"

export function PreviewSection() {
  return (
    <section className="preview wrap" id="preview" aria-labelledby="preview-title">
      <ShineBorder aria-hidden="true" duration={4.5} className="[animation-iteration-count:1]" shineColor={["#7a62f2", "#bca6ff", "#4bafe8"]} />
      <div className="preview-bar">
        <h2 id="preview-title"><AudioLines size={18} aria-hidden="true" /> StudyHybrid workspace</h2>
        <span className="demo-label">Interactive demo</span>
      </div>
      <StudyPreview />
    </section>
  )
}
