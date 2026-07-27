'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAssetPath } from '../utils/assets'

type Theme = 'dark' | 'light'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null
      const initialTheme: Theme = storedTheme ?? 'dark'
      setTheme(initialTheme)
      document.documentElement.setAttribute('data-theme', initialTheme)
    } catch {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  const themeButtonLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <nav className="fixed top-0 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] z-50">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between h-14">
        <Link href="/" className="font-[family-name:var(--font-display)] text-[17px] text-[var(--text)]">
          Rajesh <span className="text-[var(--accent)]">Dhanda</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link href={getAssetPath('/recognition')} className="inline-flex items-center rounded-md border border-[var(--border-hover)] px-4 py-1.5 text-[13px] font-semibold text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)] hover:bg-[rgba(200,169,110,0.06)] transition-all">What Leadership Says</Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeButtonLabel}
            title={themeButtonLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-hover)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--accent)] hover:bg-[rgba(200,169,110,0.06)] transition-all"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M21 14.2A9 9 0 1 1 9.8 3a7 7 0 1 0 11.2 11.2Z" />
              </svg>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeButtonLabel}
            title={themeButtonLabel}
            className="text-[var(--muted)] p-2"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M21 14.2A9 9 0 1 1 9.8 3a7 7 0 1 0 11.2 11.2Z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[var(--muted)] p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-[1.5px] bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-8 py-4 space-y-3">
          <Link href={getAssetPath('/recognition')} onClick={() => setIsMenuOpen(false)} className="block text-[var(--muted)] text-sm font-semibold hover:text-[var(--text)]">What Leadership Says</Link>
        </div>
      )}
    </nav>
  )
}
