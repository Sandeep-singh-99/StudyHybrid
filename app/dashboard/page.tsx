import type { Metadata } from "next"
import { Dashboard } from "@/components/dashboard/dashboard"

export const metadata: Metadata = { title: "Dashboard | StudyHybrid" }

export default function DashboardPage() {
  return <Dashboard />
}
