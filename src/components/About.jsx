import Section from './Section.jsx'
import CountUp from './CountUp.jsx'
import { about, profile, interests } from '../data/profile.js'

const details = [
  { label: 'Based in', value: profile.region },
  { label: 'Specialisation', value: 'Mental Health Nursing' },
  { label: 'Worked in', value: 'India · Saudi Arabia · UAE' },
]

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Bridging the classroom and the bedside">
      <div className="bento">
        <div className="tile tile--story s-7 reveal">
          {about.summary.map((p, i) => (
            <p key={i} className={i === 0 ? 'lead' : undefined}>
              {p}
            </p>
          ))}
        </div>

        <div className="tile tile--details s-5 reveal">
          <dl className="details">
            {details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
          <span className="kicker">Away from work</span>
          <div className="chips">
            {interests.map((i) => (
              <span key={i} className="chip">
                {i}
              </span>
            ))}
          </div>
        </div>

        {about.stats.map((s, i) => (
          <div key={s.label} className={`tile tile--num s-3 reveal${i === 0 ? ' tile--primary' : ''}`}>
            <CountUp value={s.value} className="big-num" />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
