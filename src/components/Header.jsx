import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Synaptica
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/privacy-policy"
            className={`nav-link ${isActive('/privacy-policy') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className={`nav-link ${isActive('/terms-of-service') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
