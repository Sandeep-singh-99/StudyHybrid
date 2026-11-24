import { GoogleSignIn } from "@/components/google-sign-in"

export function Navbar() {
  return (
    <header className="site-header wrap">
      <nav aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#workflow">How it works</a>
        <a href="#faq">FAQ</a>
      </nav>
      <GoogleSignIn />
    </header>
  )
}
