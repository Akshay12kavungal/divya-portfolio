import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

// Floating back-to-top button whose ring fills as the page is read.
export default function BackToTop() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a href="#top" className={`to-top${progress > 0.08 ? ' to-top--show' : ''}`} aria-label="Back to top">
      <svg className="to-top__progress" viewBox="0 0 52 52" aria-hidden="true">
        <circle className="to-top__track" cx="26" cy="26" r="24" />
        <circle
          className="to-top__ring"
          cx="26"
          cy="26"
          r="24"
          pathLength="1"
          style={{ strokeDashoffset: 1 - progress }}
        />
      </svg>
      <Icon name="arrowUp" size={20} className="to-top__arrow" />
    </a>
  )
}
