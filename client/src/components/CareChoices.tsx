import { Reveal } from './Reveal'

const CARE_OPTIONS = [
  {
    num: '01',
    title: 'Independent Living',
    body: 'Full days of friends, fitness and good food, with the quiet reassurance that support is there the moment your needs change.',
  },
  {
    num: '02',
    title: 'Assisted Living',
    body: 'Live at your own pace with the people and pastimes you love, while a licensed nurse and personalised care stay on hand around the clock.',
  },
  {
    num: '03',
    title: 'Memory Care',
    body: 'A calm, secure setting where familiar rhythms and gentle, structured days help preserve cognition, confidence and dignity.',
  },
  {
    num: '04',
    title: 'Short Stay',
    body: 'Temporary care during recovery or a family break, with the same warmth, meals and amenities as every long-term resident enjoys.',
  },
]

export function CareChoices() {
  return (
    <section id="care">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Your care choices</span>
          <h2>One community. Four ways to be cared for.</h2>
          <p>As needs change over the years, no one has to move away or start over. Usiru holds the full continuum of care in one place.</p>
        </Reveal>
        <div className="care-grid">
          {CARE_OPTIONS.map((option) => (
            <Reveal as="div" className="care-card" key={option.num}>
              <div className="num">{option.num}</div>
              <h3>{option.title}</h3>
              <p>{option.body}</p>
              <a href="/#visit" className="explore">Explore →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
