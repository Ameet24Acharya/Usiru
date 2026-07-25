import { useState, type FormEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Reveal } from '../components/Reveal'
import { EMAIL_MAILTO } from '../data/contact'

const CARE_INTEREST_OPTIONS = [
  'Independent Living',
  'Assisted Living',
  'Memory Care',
  'Short Stay',
  'Not sure yet',
]

export function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [careInterest, setCareInterest] = useState(CARE_INTEREST_OPTIONS[0])
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = `Enquiry from ${name || 'website visitor'}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interested in: ${careInterest}`,
      '',
      message || '(no message)',
    ].join('\n')
    const [mailto, existingQuery] = EMAIL_MAILTO.split('?')
    const params = new URLSearchParams(existingQuery)
    params.set('subject', subject)
    params.set('body', body)
    window.location.href = `${mailto}?${params.toString()}`
  }

  return (
    <>
      <Helmet>
        <title>Contact Us — Usiru Senior Assisted Living</title>
        <meta
          name="description"
          content="Get in touch with Usiru — share a few details and a family advisor will contact you about senior assisted living in Bengaluru."
        />
      </Helmet>

      <Nav />
      <span id="top"></span>
      <section>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Get in touch</span>
            <h2>Have a family advisor contact you</h2>
            <p>
              Share a few details below and a family advisor will get back to you — by phone,
              WhatsApp or email, whichever is easiest.
            </p>
          </Reveal>

          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="cf-name">Full name</label>
              <input
                id="cf-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cf-phone">Phone</label>
              <input
                id="cf-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cf-care">Which type of care are you exploring?</label>
              <select
                id="cf-care"
                value={careInterest}
                onChange={(e) => setCareInterest(e.target.value)}
              >
                {CARE_INTEREST_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="cf-message">
                Message <span className="optional">(optional)</span>
              </label>
              <textarea
                id="cf-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a little about your needs"
              />
            </div>
            <button type="submit" className="btn btn-primary">Send enquiry</button>
            <p className="form-note">
              This opens your email app with your details filled in, addressed to our team.
            </p>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  )
}
