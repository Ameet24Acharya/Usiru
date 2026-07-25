import { Reveal } from './Reveal'

export function Story() {
  return (
    <section id="story">
      <div className="wrap founder-grid">
        <Reveal
          className="founder-panel"
          aria-label="Illustration representing Usiru's founding"
        >
          <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <circle cx="200" cy="150" r="70" opacity=".7" />
            <path d="M120 400 C120 300 140 240 200 230 C260 240 280 300 280 400" opacity=".7" />
            <path d="M60 360 Q200 320 340 360" opacity=".5" />
          </svg>
          <div className="cap">Founded in Bengaluru, 2024</div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">Our story</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', margin: '1.1rem 0 1.2rem' }}>
            Born of a simple, personal need
          </h2>
          <p style={{ color: '#4a4438', marginBottom: '1.1rem' }}>
            Usiru began the way many good things do — with a daughter looking for somewhere
            she'd be proud to bring her own mother. She found plenty of places that could manage
            care, and very few that felt like a home worth living in.
          </p>
          <p style={{ color: '#4a4438', marginBottom: '1.6rem' }}>
            So Usiru was built to hold both at once: real medical expertise and genuine warmth,
            research-led programmes and afternoon chai on the verandah. A place designed so that
            ageing feels less like an ending and more like another good chapter — lived with
            ease. <em>Usiru</em>, after all, means breath.
          </p>
          <a href="/#visit" className="btn btn-ghost">Meet the team</a>
        </Reveal>
      </div>
    </section>
  )
}
