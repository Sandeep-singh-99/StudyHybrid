import { ArrowUpRight } from "lucide-react"
import { Brand } from "./brand"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-brand">
            <Brand />
            <p>Turn lecture transcripts into notes, flashcards, and quizzes.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div>
              <h2>Product</h2>
              <ul>
                <li><a href="#features">Features</a></li>
                <li>
                  <a className="footer-demo" href="#preview">
                    Interactive demo <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Resources</h2>
              <ul>
                <li><a href="#workflow">How it works</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
