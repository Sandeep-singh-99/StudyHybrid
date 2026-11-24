import { Cloud, Cpu, Fingerprint } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"

export function HybridSection() {
  return (
    <section className="wrap section hybrid-panel" aria-labelledby="hybrid-title">
      <DotPattern width={18} height={18} className="panel-dots text-[#c4b3ff39]" />
      <div>
        <Fingerprint className="hybrid-icon" size={28} aria-hidden="true" />
        <h2 id="hybrid-title">On-device when possible.</h2>
        <p>StudyHybrid is designed to show where each result was processed, with a local-only option for users who prefer to keep study material on their device.</p>
      </div>
      <div className="processing">
        <div><Cpu size={22} aria-hidden="true" /><span><strong>On-device</strong>On compatible devices</span></div>
        <div><Cloud size={22} aria-hidden="true" /><span><strong>Cloud fallback</strong>When local processing is unavailable</span></div>
      </div>
    </section>
  )
}
