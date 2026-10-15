import { profile, about, languages, specialties } from '../data/profile.js'
import Icon from './Icon.jsx'
import CountUp from './CountUp.jsx'

const [firstName, ...restName] = profile.name.split(' ')
const initials = profile.name
  .split(' ')
  .map((p) => p[0])
  .join('')

export default function Hero() {
  const focus = [...specialties, ...specialties]

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="bento">
          <div className="tile tile--intro s-8">
            <span className="status">
              <span className="status__dot" />
              Available for teaching &amp; clinical roles
            </span>
            <h1>
              <mark>{firstName}</mark> {restName.join(' ')}
            </h1>
            <p className="hero__role">{profile.title}</p>
            <p className="hero__tagline">{profile.tagline}</p>
            <div className="actions">
              <a href="#contact" className="btn btn--primary">
                Get in touch <Icon name="arrowRight" size={16} />
              </a>
              <a href="#experience" className="btn btn--ghost">
                View experience
              </a>
            </div>
          </div>

          <div className="tile tile--photo s-4">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="tile--photo__initials" aria-hidden="true">
                {initials}
              </div>
            )}
            <span className="tile--photo__label">
              <Icon name="cap" size={16} /> M.Sc. Mental Health Nursing
            </span>
          </div>

          <div className="tile tile--inverse tile--stat s-4">
            <span className="kicker">Experience</span>
            <div className="tile--stat__row">
              <CountUp value={about.stats[0].value} className="big-num" />
              <span>years</span>
            </div>
            <p>Across classrooms and ICUs in India, Saudi Arabia &amp; the UAE.</p>
          </div>

          <div className="tile tile--accent tile--focus s-5">
            <span className="kicker">Focus areas</span>
            <p className="tile--focus__text">From psychiatric wards to the ICU and the lecture hall.</p>
            <div className="marquee" aria-label={specialties.join(', ')}>
              <div className="marquee__track" aria-hidden="true">
                {focus.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="tile tile--where s-3">
            <span className="kicker">Based in</span>
            <strong>
              <Icon name="pin" size={18} /> {profile.region}
            </strong>
            <span className="muted">{languages.length} languages spoken</span>
          </div>
        </div>
      </div>
    </section>
  )
}
