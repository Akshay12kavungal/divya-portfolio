import Section from './Section.jsx'
import Icon from './Icon.jsx'
import { education } from '../data/profile.js'

export default function Education() {
  const [featured, ...rest] = [...education].sort((a, b) => Number(!!b.highlight) - Number(!!a.highlight))

  return (
    <Section id="education" index="03" eyebrow="Education" title="Qualifications">
      <div className="bento">
        <article className="tile tile--primary edu-feature s-12 reveal">
          <span className="edu-feature__icon">
            <Icon name="cap" size={26} />
          </span>
          <div>
            <span className="kicker">Latest · {featured.year}</span>
            <h3>{featured.degree}</h3>
            <p>
              {featured.school}
              {featured.board && <> · {featured.board}</>}
            </p>
          </div>
        </article>

        {rest.map((e) => (
          <article key={e.degree} className="tile edu-card s-4 reveal">
            <span className="edu-card__year">{e.year}</span>
            <h3>{e.degree}</h3>
            <p className="muted">
              {e.school}
              {e.board && <> · {e.board}</>}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
