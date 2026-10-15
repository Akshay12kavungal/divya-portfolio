import { useState } from 'react'
import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { research } from '../data/profile.js'

export default function Research() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="research" index="04" eyebrow="Research" title="Projects & studies">
      <div className="acc">
        {research.map((r, i) => {
          const isOpen = open === i
          return (
            <article key={r.title} className={`tile acc__item reveal${isOpen ? ' is-open' : ''}`}>
              <h3>
                <button
                  className="acc__head"
                  aria-expanded={isOpen}
                  aria-controls={`study-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="acc__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="acc__title">
                    <span className="acc__tags">
                      <span className="badge">{r.kind}</span>
                      <span className="badge badge--alt">{r.setting}</span>
                    </span>
                    <span className="acc__text">{r.title}</span>
                  </span>
                  <span className="acc__icon">
                    <Icon name="plus" size={18} />
                  </span>
                </button>
              </h3>
              <div className="acc__panel" id={`study-${i}`}>
                <div>
                  <ul>
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
