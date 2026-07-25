import { Helmet } from 'react-helmet-async'
import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { CareChoices } from '../components/CareChoices'
import { Living } from '../components/Living'
import { Story } from '../components/Story'
import { Testimonials } from '../components/Testimonials'
import { BandCta } from '../components/BandCta'
import { Faq } from '../components/Faq'
import { Enquiry } from '../components/Enquiry'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Usiru — Senior Assisted Living, Bengaluru</title>
        <meta
          name="description"
          content="Usiru is a senior assisted-living community in Bengaluru. Warm, dignified care — independent living, assisted living, memory care and short stays — so life can be lived with ease."
        />
      </Helmet>

      <Nav />
      <span id="top"></span>
      <Hero />
      <Intro />
      <CareChoices />
      <Living />
      <Story />
      <Testimonials />
      <BandCta />
      <Faq />
      <Enquiry />
      <Footer />
    </>
  )
}
