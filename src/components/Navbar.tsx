'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  // Homepage is self-contained; no top nav there.
  if (pathname === '/') return null

  return (
    <nav className="ed-nav">
      <div className="nav-inner">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="nav-mono">Rajesh Dhanda</div>
          <div className="nav-role">Senior Machine Learning Engineer</div>
        </Link>
        <Link className="nav-cta" href="/recognition">
          What Leadership Says →
        </Link>
      </div>
    </nav>
  )
}
