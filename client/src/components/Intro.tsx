import { Reveal } from './Reveal'

export function Intro() {
  return (
    <section className="intro" id="about">
      <div className="wrap intro-grid">
        <Reveal>
          <span className="eyebrow">A community of choice</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.1rem)', margin: '1.1rem 0 1.2rem' }}>
            In every sense, a place that feels like your own
          </h2>
          <p style={{ fontSize: '1.12rem', color: '#4a4438', marginBottom: '1.2rem' }}>
            Homes here are designed to hold a whole life, not manage one. Evidence-informed
            care, engaging days and generous comforts sit under one roof, tailored to what each
            resident prefers.
          </p>
          <p style={{ color: '#4a4438' }}>
            Even couples with different needs can go on sharing a life, side by side, with the
            right support quietly in place for each of them.
          </p>
        </Reveal>
        <Reveal
          className="intro-panel"
          aria-label="Illustration of the Usiru garden courtyard"
        >
          <svg viewBox="0 0 400 500" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <path d="M0 380 Q100 340 200 370 T400 360" opacity=".6" />
            <path d="M0 420 Q120 390 200 410 T400 405" opacity=".4" />
            <circle cx="300" cy="110" r="46" opacity=".7" />
            <path d="M120 500 C120 420 110 360 150 320 M120 420 C90 400 70 385 45 392 M120 380 C150 360 165 345 162 322" />
            <path d="M280 500 C280 430 285 380 255 348 M280 430 C305 415 320 405 342 412" />
          </svg>
          <div className="tagband">
            <span className="kan">ಉಸಿರು</span>
            <span>Breath · Life · Ease</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
