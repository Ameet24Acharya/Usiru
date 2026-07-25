import { Reveal } from './Reveal'

const AMENITIES = [
  {
    title: 'Thoughtful spaces',
    body: 'Wide, step-free verandahs, shaded gardens and rooms full of daylight — designed for easy movement and quiet company alike.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Health & wellness',
    body: 'On-site licensed nurses, physiotherapy, medication management and doctor visits — care that is present without ever feeling clinical.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
      </svg>
    ),
  },
  {
    title: 'Enrichment & joy',
    body: 'Music mornings, garden clubs, festivals, film evenings and lifelong-learning sessions — a calendar that keeps the mind and spirit awake.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
]

export function Living() {
  return (
    <section className="living" id="living">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Life at Usiru</span>
          <h2>Living built around you</h2>
          <p>Spaces, meals and days shaped to each resident's preferences — designed to support independence, connection and ease.</p>
        </Reveal>
        <div className="amen-grid">
          {AMENITIES.map((amenity) => (
            <Reveal as="div" className="amen" key={amenity.title}>
              <div className="ico" aria-hidden="true">{amenity.icon}</div>
              <h3>{amenity.title}</h3>
              <p>{amenity.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
