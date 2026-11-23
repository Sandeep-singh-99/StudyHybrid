import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sign in | studyHybrid",
}

export default function SignInPage() {
  return (
    <main className="landing grid min-h-dvh place-items-center">
      <section className="wrap final-cta max-w-lg" aria-labelledby="sign-in-title">
        <h1 id="sign-in-title" className="text-3xl font-semibold">Sign in</h1>
        <p>Account sign-in is currently unavailable.</p>
        <Link className="action" href="/">Back to home</Link>
      </section>
    </main>
  )
}
