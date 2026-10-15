import { useState } from 'react'
import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { experience } from '../data/profile.js'

const filters = ['All', 'Teaching', 'Clinical', 'Administration']
const typeIcons = { Teaching: 'cap', Clinical: 'stethoscope', Administration: 'clipboard' }
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const isCurrent = (label) => label === 'Present'

function toIndex(label) {
  if (isCurrent(label)) {
    const now = new Date()
    return now.getFullYear() * 12 + now.getMonth()
  }
  const [m, y] = label.split(' ')
  return Number(y) * 12 + months.indexOf(m)
}

function duration(start, end) {
  const total = toIndex(end) - toIndex(start) + 1
  const y = Math.floor(total / 12)
  const m = total % 12
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ')
}

function years(start, end) {
  const a = start.split(' ')[1]
  if (isCurrent(end)) return `${a}–Now`
  const b = end.split(' ')[1]
  return a === b ? a : `${a}–${b.slice(2)}`
}

export default function Experience() {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? experience : experience.filter((e) => e.type === filter)
  const count = (f) => (f === 'All' ? experience.length : experience.filter((e) => e.type === f).length)

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Teaching & clinical career"
      intro="Alternating between lecture halls and intensive care units — each role sharpening the other."
    >
      <div className="segmented reveal" role="tablist" aria-label="Filter experience">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            className={filter === f ? 'is-active' : undefined}
            onClick={() => setFilter(f)}
          >
            {f}
            <span>{count(f)}</span>
          </button>
        ))}
      </div>

      <ol className="log tile reveal">
        {items.map((e, i) => (
          <li
            key={`${e.org}-${e.start}`}
            className={`log__row${isCurrent(e.end) ? ' log__row--current' : ''}`}
            style={{ animationDelay: `${i * 45}ms` }}
          >
            <span className="log__years">{years(e.start, e.end)}</span>
            <div className="log__main">
              <h3>
                {e.role}
                {isCurrent(e.end) && <span className="log__now">Current</span>}
              </h3>
              <p>
                {e.org}
                {e.place && <> · {e.place}</>}
              </p>
            </div>
            <div className="log__meta">
              <span className="log__dates">
                {e.start} – {e.end}
              </span>
              <span className="log__dur">{duration(e.start, e.end)}</span>
            </div>
            <span className={`type type--${e.type.toLowerCase()}`}>
              <Icon name={typeIcons[e.type]} size={14} />
              {e.type}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
