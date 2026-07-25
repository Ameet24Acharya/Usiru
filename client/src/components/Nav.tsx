import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" aria-label="Usiru home">
          <span className="mark">
            Usiru<span style={{ color: 'var(--brass)' }}>.</span>
          </span>
          <span className="sub">Senior Assisted Living</span>
        </Link>
        <nav className={`links${open ? ' open' : ''}`} id="menu">
          <a href="/#care" onClick={() => setOpen(false)}>Our Care</a>
          <a href="/#living" onClick={() => setOpen(false)}>Life at Usiru</a>
          <a href="/#story" onClick={() => setOpen(false)}>Our Story</a>
          <a href="/#faq" onClick={() => setOpen(false)}>Good to Know</a>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact us</Link>
          <a href="/#visit" className="btn btn-primary btn-book" onClick={() => setOpen(false)}>Book a Visit</a>
        </nav>
        <button
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
