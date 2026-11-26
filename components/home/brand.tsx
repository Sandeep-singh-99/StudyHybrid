import { BookOpen } from "lucide-react"
import Link from "next/link"

export function Brand({ href = "#top" }: { href?: string }) {
  return <Link href={href} className="brand"><span><BookOpen size={18} aria-hidden="true" /></span>StudyHybrid</Link>
}
