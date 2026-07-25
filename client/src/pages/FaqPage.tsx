import { Helmet } from 'react-helmet-async'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'
import { FaqAccordion } from '../components/FaqAccordion'
import { FAQS } from '../data/faqs'

export function FaqPage() {
  return (
    <>
      <Helmet>
        <title>FAQ — Usiru Senior Assisted Living</title>
        <meta
          name="description"
          content="Answers to common questions about Usiru's senior assisted-living community in Bengaluru — care levels, visits, couples, and everyday life."
        />
      </Helmet>

      <Nav />
      <span id="top"></span>
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Good to know</span>
            <h2>Frequently asked questions</h2>
            <p>
              Everything families usually ask before their first visit. Don't see your question
              here? <a href="/#visit">Reach out</a> and a family advisor will help.
            </p>
          </Reveal>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
      <Footer />
    </>
  )
}
