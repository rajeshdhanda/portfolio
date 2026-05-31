'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] z-50">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between h-14">
        <Link href="/" className="font-[family-name:var(--font-display)] text-[17px] text-[var(--text)]">
          Rajesh <span className="text-[var(--accent)]">Dhanda</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link href="#experience" className="text-[var(--muted)] text-[13px] hover:text-[var(--text)] transition-colors">Experience</Link>
          <Link href="#contact" className="text-[var(--muted)] text-[13px] hover:text-[var(--text)] transition-colors">Contact</Link>
          <a
            href="https://drive.google.com/file/d/1rKgBAFzYi0WNvGAGq2fDO7Rn3BI-jsYL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] text-[12px] font-medium border border-[var(--border-hover)] px-4 py-1.5 rounded-md hover:border-[var(--accent)] hover:bg-[rgba(200,169,110,0.06)] transition-all"
          >
            Résumé ↗
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[var(--muted)] p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-[1.5px] bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-8 py-4 space-y-3">
          <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="block text-[var(--muted)] text-sm hover:text-[var(--text)]">Experience</Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[var(--muted)] text-sm hover:text-[var(--text)]">Contact</Link>
          <a href="https://drive.google.com/file/d/1rKgBAFzYi0WNvGAGq2fDO7Rn3BI-jsYL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-[var(--text)] text-sm">Résumé ↗</a>
        </div>
      )}
    </nav>
  )
}
