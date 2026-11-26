import Link from "next/link"
import { PreviewSection } from "@/components/home/preview-section"

export default function DashboardPage() {
  return (
    <main className="landing flex-1 py-10">
      <div className="wrap max-w-4xl">
        <Link href="/" className="action small">Back to home</Link>
        <h1 className="mt-6 mb-5 text-3xl font-semibold">Dashboard</h1>
        <PreviewSection />
      </div>
    </main>
  )
}
