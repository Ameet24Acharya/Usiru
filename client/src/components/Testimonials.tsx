import { Reveal } from './Reveal'

const QUOTES = [
  {
    text: "For the first time since Amma moved, I sleep through the night. I know she's looked after, and I can just be her daughter again.",
    who: 'Ananya R.',
    role: 'Daughter of a resident',
  },
  {
    text: 'I was afraid I’d lose my independence. Instead I found a garden, a card table, and about a dozen new friends.',
    who: 'Col. Prakash M.',
    role: 'Independent living resident',
  },
  {
    text: "The nurses know my father by name and by story. That kind of attention is rare, and it's changed how our whole family feels.",
    who: 'Sunil & Deepa K.',
    role: 'Family of a memory-care resident',
  },
]

export function Testimonials() {
  return (
    <section className="testi">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">In their words</span>
          <h2>They came for the care. They stayed for the company.</h2>
        </Reveal>
        <div className="testi-grid">
          {QUOTES.map((q) => (
            <Reveal as="div" className="quote" key={q.who}>
              <div className="mark">&ldquo;</div>
              <p>{q.text}</p>
              <div className="who">{q.who}<span>{q.role}</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
