export function Hero() {
  return (
    <section className="hero">
      <div className="hero-branch" aria-hidden="true">
        <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M200 400 C200 300 200 200 200 40" />
          <path d="M200 300 C150 270 110 250 70 260 M200 300 C160 250 150 220 155 190" />
          <path d="M200 230 C250 200 290 180 330 190 M200 230 C240 185 250 155 246 128" />
          <path d="M200 160 C160 135 130 118 95 128 M200 160 C235 125 244 96 240 70" />
          <circle cx="70" cy="260" r="8" />
          <circle cx="330" cy="190" r="8" />
          <circle cx="95" cy="128" r="8" />
          <circle cx="246" cy="128" r="8" />
          <circle cx="155" cy="190" r="8" />
          <circle cx="240" cy="70" r="8" />
        </svg>
      </div>
      <div className="wrap">
        <span className="eyebrow">
          <span className="kan">ಉಸಿರು</span> · Senior Assisted Living
        </span>
        <h1>
          Care that lets you
          <br />
          <em>breathe easy.</em>
        </h1>
        <p className="lead">
          Usiru is a senior living community in Bengaluru where days are unhurried, care is
          quietly attentive, and every space is built around the person, not the routine.
        </p>
        <div className="cta-row">
          <a href="/#visit" className="btn btn-primary btn-book">Book a visit</a>
          <a href="/#care" className="btn btn-ghost">Explore our care</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="n">24/7</div>
            <div className="l">Licensed nurse on-site</div>
          </div>
          <div className="stat">
            <div className="n">4 ways</div>
            <div className="l">To live, from independent to memory care</div>
          </div>
          <div className="stat">
            <div className="n">1 acre</div>
            <div className="l">Of gardens, verandahs and quiet corners</div>
          </div>
        </div>
      </div>
    </section>
  )
}
