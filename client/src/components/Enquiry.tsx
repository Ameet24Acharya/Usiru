import { Reveal } from './Reveal'
import { WHATSAPP_URL, PHONE_TEL, EMAIL_MAILTO } from '../data/contact'

export function Enquiry() {
  return (
    <section className="enquiry" id="visit">
      <div className="wrap enq-grid">
        <Reveal>
          <span className="eyebrow">Book a visit</span>
          <h2>Come see it for yourself</h2>
          <p>
            The best way to understand Usiru is to walk the gardens and meet the people. Reach
            us any way that's easiest — a family advisor will take it from there.
          </p>
        </Reveal>
        <Reveal className="enq-actions">
          <a
            className="enq-card"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
          >
            <span className="ic" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <div>
              <div className="t">WhatsApp us</div>
              <div className="d">Fastest reply, usually within the hour</div>
            </div>
          </a>
          <a className="enq-card" href={PHONE_TEL}>
            <span className="ic" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7A2 2 0 0 1 22 16.9z" />
              </svg>
            </span>
            <div>
              <div className="t">Call us</div>
              <div className="d">Speak to a family advisor directly</div>
            </div>
          </a>
          <a className="enq-card" href={EMAIL_MAILTO}>
            <span className="ic" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 6 10 7L22 6" />
              </svg>
            </span>
            <div>
              <div className="t">Email an enquiry</div>
              <div className="d">Tell us a little about your needs</div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
