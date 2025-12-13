import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-legal">
          Synaptica is a registered business name of 1001420084 Ontario Inc.
        </p>
        <p className="footer-copyright">
          &copy; 2025 1001420084 Ontario Inc. All rights reserved.
        </p>
        <p className="footer-contact">
          Contact: <a href="mailto:admin@synaptica.dev">admin@synaptica.dev</a>
        </p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
