import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { coreSkills, personalSkills, languages } from '../data/profile.js'

export default function Skills() {
  return (
    <Section id="skills" index="05" eyebrow="Skills" title="What I bring">
      <div className="bento">
        {coreSkills.map((s, i) => (
          <article
            key={s.name}
            className={`tile skill skill--${s.area} s-4 reveal`}
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <span className="skill__icon">
              <Icon name={s.icon} size={22} />
            </span>
            <span className={`badge skill__area${s.area === 'clinical' ? ' badge--alt' : ''}`}>
              {s.area === 'clinical' ? 'Clinical' : 'Teaching'}
            </span>
            <h3>{s.name}</h3>
            <p>{s.note}</p>
          </article>
        ))}

        <div className="tile tile--inverse s-6 reveal">
          <span className="kicker">Personal strengths</span>
          <div className="chips chips--lg">
            {personalSkills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="tile s-6 reveal">
          <span className="kicker">Languages</span>
          <ul className="langs">
            {languages.map((l) => {
              const filled = Math.round(l.value / 20)
              return (
                <li key={l.name}>
                  <span className="langs__name">{l.name}</span>
                  <span className="dots" aria-label={`${l.level}, ${filled} of 5`}>
                    {[1, 2, 3, 4, 5].map((d) => (
                      <i key={d} className={d <= filled ? 'on' : undefined} />
                    ))}
                  </span>
                  <span className="langs__level">{l.level}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
