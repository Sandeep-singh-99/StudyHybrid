import { Cloud, Cpu, Fingerprint } from "lucide-react"

export function HybridSection() {
  return (
    <section className="wrap section hybrid-panel" aria-labelledby="hybrid-title">
      <div>
        <Fingerprint className="hybrid-icon" size={28} aria-hidden="true" />
        <h2 id="hybrid-title">On-device when possible.</h2>
        <p>StudyHybrid is designed to show where your study materials are processed. A local-only mode is planned for people who prefer to keep their material on their device.</p>
      </div>
      <div className="processing">
        <div><Cpu size={22} aria-hidden="true" /><span><strong>On-device</strong>On compatible devices</span></div>
        <div><Cloud size={22} aria-hidden="true" /><span><strong>Cloud fallback</strong>When local processing is unavailable</span></div>
      </div>
    </section>
  )
}
