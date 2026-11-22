import { useState } from 'react'
import { navLinks, profile } from '../data.js'
import { DownloadIcon } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav" id="top">
      <div className="container nav-inner">
        <a className="logo" href="#top">
          {profile.domain.split('.')[0]}<span>.dev</span>
        </a>

        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-yellow btn-resume" href="/assets/Deepak_Katiyar_Resume.jpg" download>
            Resume
            <DownloadIcon />
          </a>
          <button
            className="menu-btn"
            id="menuBtn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
