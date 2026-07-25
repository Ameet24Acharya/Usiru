import { Helmet } from 'react-helmet-async'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'
import { BlogList } from '../components/BlogList'
import { FaqAccordion } from '../components/FaqAccordion'
import { POSTS } from '../data/posts'
import { FAQS } from '../data/faqs'

export function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog — Usiru Senior Assisted Living</title>
        <meta
          name="description"
          content="Notes on ageing well, caregiving, and life at Usiru — a senior assisted-living community in Bengaluru."
        />
      </Helmet>

      <Nav />
      <span id="top"></span>
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">From Usiru</span>
            <h2>Notes on ageing well</h2>
            <p>
              Short, practical notes for families navigating care decisions — written by the
              Usiru team.
            </p>
          </Reveal>
          <BlogList posts={POSTS} />
        </div>
      </section>
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Good to know</span>
            <h2>Frequently asked questions</h2>
          </Reveal>
          <FaqAccordion items={FAQS} />
        </div>
      </section>
      <Footer />
    </>
  )
}
