import Link from "next/link"
import { Brand } from "./brand"

export function Navbar() {
  return (
    <header className="site-header wrap">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#workflow">How it works</a>
        <a href="#faq">FAQ</a>
      </nav>
      <Link className="action small header-action" href="/sign-in">Sign in</Link>
    </header>
  )
}
