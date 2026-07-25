import { Reveal } from './Reveal'
import { FaqAccordion } from './FaqAccordion'
import { FAQS } from '../data/faqs'

export function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Good to know</span>
          <h2>Before you visit</h2>
        </Reveal>
        <FaqAccordion items={FAQS} />
      </div>
    </section>
  )
}
