import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleCloseMenus = () => {
    setIsMenuOpen(false)
    setIsProductsOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/assets/SynapticaLogo.png" alt="" className="logo-mark" aria-hidden="true" />
          <span className="logo-text">Synaptica</span>
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
          <div
            className={`nav-item has-dropdown ${isProductsOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              className="nav-link dropdown-toggle"
              aria-expanded={isProductsOpen}
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products
            </button>
            <div className="dropdown-menu">
              <Link
                to="/studypro"
                className={`dropdown-link ${isActive('/studypro') ? 'active' : ''}`}
                onClick={handleCloseMenus}
              >
                StudyPro
              </Link>
            </div>
          </div>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={handleCloseMenus}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={handleCloseMenus}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={handleCloseMenus}
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className={`nav-link ${isActive('/privacy-policy') ? 'active' : ''}`}
            onClick={handleCloseMenus}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className={`nav-link ${isActive('/terms-of-service') ? 'active' : ''}`}
            onClick={handleCloseMenus}
          >
            Terms of Service
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
