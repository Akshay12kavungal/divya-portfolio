import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import Icon from './Icon.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
]

function readTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable; fall back to the system preference
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = [...links, { href: '#contact' }]
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // ignore
    }
  }

  const close = () => setOpen(false)

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`}>
      <nav className="nav__pill" aria-label="Main">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__mark" aria-hidden="true">
            {profile.name.charAt(0)}
          </span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'is-active' : undefined}
                aria-current={active === l.href ? 'true' : undefined}
                onClick={close}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="nav__mobile-only">
            <a href="#contact" onClick={close}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>
          <a href="#contact" className="btn btn--ink btn--sm nav__cta" onClick={close}>
            Contact <Icon name="arrowUpRight" size={15} />
          </a>
          <button
            className="icon-btn nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}
