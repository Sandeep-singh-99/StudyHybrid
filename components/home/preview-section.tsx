import { BookOpen } from "lucide-react"
import { StudyPreview } from "./study-preview"

export function PreviewSection() {
  return (
    <section className="preview" id="preview" aria-labelledby="preview-title" tabIndex={-1}>
      <div className="preview-bar">
        <h2 id="preview-title"><BookOpen size={16} aria-hidden="true" /> Study workspace</h2>
        <span className="demo-label"><span /> Interactive demo</span>
      </div>
      <StudyPreview />
    </section>
  )
}
