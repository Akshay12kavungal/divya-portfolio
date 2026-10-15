import { profile } from '../data/profile.js'

const links = ['About', 'Experience', 'Education', 'Research', 'Skills', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <ul className="footer__links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
