import { useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="bento">
          <div className="tile tile--primary contact-main s-8 reveal">
            <span className="label label--light">06 · Contact</span>
            <h2>Let’s work together.</h2>
            <p>
              Open to teaching, clinical instruction and mental health nursing opportunities.
              References are available on request.
            </p>
            <div className="contact-main__email">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button className="icon-btn icon-btn--light" onClick={copyEmail} aria-label="Copy email address">
                <Icon name={copied ? 'check' : 'copy'} size={17} />
              </button>
            </div>
            <span className="contact-main__copied" role="status">
              {copied ? 'Email copied to clipboard' : ''}
            </span>
          </div>

          <a href={profile.phoneHref} className="tile tile--inverse contact-mini s-4 reveal">
            <span className="contact-mini__top">
              <span className="contact-mini__icon">
                <Icon name="phone" size={20} />
              </span>
              <Icon name="arrowUpRight" size={20} />
            </span>
            <span className="kicker">Call</span>
            <strong>{profile.phone}</strong>
          </a>

          <div className="tile contact-mini s-4 reveal">
            <span className="contact-mini__top">
              <span className="contact-mini__icon">
                <Icon name="pin" size={20} />
              </span>
            </span>
            <span className="kicker">Address</span>
            <strong className="contact-mini__address">{profile.location}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
