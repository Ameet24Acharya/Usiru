import { Link } from 'react-router-dom'
import { WHATSAPP_URL, PHONE_TEL, EMAIL_MAILTO } from '../data/contact'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="mark">
              Usiru<span className="kan">ಉಸಿರು</span>
            </div>
            <p>A senior assisted-living community in Bengaluru. Care that lets you breathe easy.</p>
          </div>
          <div className="foot-col">
            <h4>Care</h4>
            <a href="/#care">Independent Living</a>
            <a href="/#care">Assisted Living</a>
            <a href="/#care">Memory Care</a>
            <a href="/#care">Short Stay</a>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <a href="/#living">Life at Usiru</a>
            <a href="/#story">Our Story</a>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <a href="/#visit">Book a Visit</a>
          </div>
          <div className="foot-col">
            <h4>Connect</h4>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">WhatsApp</a>
            <a href={PHONE_TEL}>Call us</a>
            <a href={EMAIL_MAILTO}>Email</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Usiru Senior Living. All rights reserved.</span>
          <span>Bengaluru, Karnataka</span>
        </div>
      </div>
    </footer>
  )
}
