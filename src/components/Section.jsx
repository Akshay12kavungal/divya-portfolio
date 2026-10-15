export default function Section({ id, index, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section__head reveal">
          <div>
            <span className="label">{eyebrow}</span>
            <h2>{title}</h2>
            {intro && <p className="section__intro">{intro}</p>}
          </div>
          {index && (
            <span className="section__index" aria-hidden="true">
              {index}
            </span>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
