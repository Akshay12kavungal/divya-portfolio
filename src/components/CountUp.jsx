import { useEffect, useRef, useState } from 'react'

// Animates the numeric part of a value like "10+" when it scrolls into view.
export default function CountUp({ value, className }) {
  const ref = useRef(null)
  const match = String(value).match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : 0
  const suffix = match ? match[2] : ''
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [n, setN] = useState(reduced || !match ? target : 0)

  useEffect(() => {
    if (reduced || !match) return
    let raf
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, reduced, !!match])

  if (!match) return <span className={className}>{value}</span>
  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  )
}
