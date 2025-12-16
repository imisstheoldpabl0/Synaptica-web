import { Link } from 'react-router-dom'

function LineIcon({ children }) {
  return (
    <span className="icon-circle" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {children}
      </svg>
    </span>
  )
}

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-ambient" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Ontario-incorporated software company</p>
            <h1>We build, operate, and support software products</h1>
            <p className="hero-description">
              Synaptica is a registered business name of 1001420084 Ontario Inc. We build and
              maintain web and mobile applications end-to-end with monitored releases and responsive
              support. Current work includes StudyPro, an iOS and Android app for structured study
              plans (in development).
            </p>
            <div className="pill-row">
              <span className="pill">Web + mobile applications</span>
              <span className="pill">Release management</span>
              <span className="pill">Support & compliance</span>
            </div>
            <div className="hero-actions">
              <Link to="/about" className="button">
                Company Overview
              </Link>
              <Link to="/contact" className="button ghost">
                Contact & Support
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-heading">
              <LineIcon>
                <path d="M12 15c3.866 0 7-1.567 7-3.5S15.866 8 12 8 5 9.567 5 11.5 8.134 15 12 15Z" />
                <path d="M7 12.5v3c0 1.105 2.239 2 5 2s5-.895 5-2v-3" />
                <path d="M9.5 10.8a2.5 2.5 0 0 1 5 0" />
              </LineIcon>
              <div>
                <span className="label">Primary contact</span>
                <a className="panel-email" href="mailto:admin@synaptica.dev">
                  admin@synaptica.dev
                </a>
              </div>
            </div>
            <ul className="panel-list">
              <li>Legal entity: 1001420084 Ontario Inc. (operating as Synaptica)</li>
              <li>Products: Web and mobile applications for learners and teams</li>
              <li>Support hours: Monday–Friday, 9:00–17:00 Eastern Time</li>
              <li>Location: New Hamburg, Ontario, Canada</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What We Do</p>
            <h2>Product delivery and operations</h2>
            <p className="section-lead">
              Synaptica designs, builds, and operates software with predictable release cycles,
              documented procedures, and a single support channel.
            </p>
          </div>
          <div className="section-grid">
            <div className="card">
              <LineIcon>
                <path d="M12 3.5V6" />
                <path d="M12 18v2.5" />
                <rect x="6" y="8" width="12" height="8" rx="2" />
                <path d="M9 12h6" />
              </LineIcon>
              <h3>Product Delivery</h3>
              <p>Architecture, implementation, QA, and release management for web and mobile apps.</p>
              <p className="card-meta">Versioned builds with change logs and rollback plans.</p>
            </div>
            <div className="card">
              <LineIcon>
                <path d="M5 11a7 7 0 0 1 14 0" />
                <path d="M5 13a7 7 0 0 0 14 0" />
                <path d="M12 6v12" />
              </LineIcon>
              <h3>Operations & Maintenance</h3>
              <p>Monitoring, dependency upgrades, platform updates, and incident response.</p>
              <p className="card-meta">Quarterly maintenance windows with tracked outcomes.</p>
            </div>
            <div className="card">
              <LineIcon>
                <path d="M6 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" />
                <path d="M9 10h6" />
                <path d="M9 14h3" />
              </LineIcon>
              <h3>Support & Documentation</h3>
              <p>Single email channel for incidents, account assistance, and data requests.</p>
              <p className="card-meta">Responses targeted within one business day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt fade-in">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Products</p>
            <h2>Current releases and in-progress work</h2>
            <p className="section-lead">
              We maintain focused products with clear ownership, lifecycle plans, and ongoing support.
            </p>
          </div>
          <div className="section-grid product-grid">
            <div className="card product-card">
              <div className="product-top">
                <div className="badge">Mobile</div>
                <span className="status-pill">In development</span>
              </div>
              <LineIcon>
                <path d="M8 4h8a2 2 0 0 1 2 2v12l-3-2-3 2-3-2-3 2V6a2 2 0 0 1 2-2Z" />
                <path d="M9 9h6" />
                <path d="M9 12h3" />
              </LineIcon>
              <h3>StudyPro</h3>
              <p>
                iOS and Android app for structured study plans, offline-first notes, and deadline tracking.
                Currently in staged releases following internal pilots.
              </p>
              <ul className="list">
                <li>Platforms: iOS, Android</li>
                <li>Release cadence: Versioned builds with test flights</li>
                <li>Owner: Synaptica product team</li>
              </ul>
            </div>
            <div className="card product-card">
              <div className="product-top">
                <div className="badge">Web</div>
                <span className="status-pill neutral">Pilot</span>
              </div>
              <LineIcon>
                <path d="M4 7h16" />
                <path d="M4 12h10" />
                <path d="M4 17h6" />
                <rect x="3" y="5" width="18" height="14" rx="3" />
              </LineIcon>
              <h3>Workspace Tools</h3>
              <p>
                Browser-based utilities for documenting workflows and recurring tasks with reliable uptime
                and audit trails.
              </p>
              <ul className="list">
                <li>Technology: React, Vite, and Postgres-backed APIs</li>
                <li>Maintenance: Quarterly platform updates</li>
                <li>Support: Email with tracked resolutions</li>
              </ul>
            </div>
            <div className="card product-card">
              <div className="product-top">
                <div className="badge">Platform</div>
                <span className="status-pill success">Active</span>
              </div>
              <LineIcon>
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="9" />
              </LineIcon>
              <h3>Shared Services</h3>
              <p>
                Authentication, notification, and observability components that support all Synaptica products
                with consistent controls.
              </p>
              <ul className="list">
                <li>Centralized identity and access policies</li>
                <li>Versioned APIs with rollback procedures</li>
                <li>Monitoring with alerting on error budgets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">How we work</p>
            <h2>Design, build, support</h2>
            <p className="section-lead">
              A simple path from requirements to release with the same team maintaining each product.
            </p>
          </div>
          <div className="section-grid">
            <div className="card step-card">
              <LineIcon>
                <path d="M12 6v12" />
                <path d="M6 12h12" />
                <circle cx="12" cy="12" r="8" />
              </LineIcon>
              <h3>Design</h3>
              <p>Requirements, interface plans, and technical design are documented and reviewed before build.</p>
            </div>
            <div className="card step-card">
              <LineIcon>
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <rect x="5" y="3" width="14" height="12" rx="2" />
                <path d="M9 7h6" />
              </LineIcon>
              <h3>Build</h3>
              <p>Implementation with versioned releases, QA checks, and rollback paths for each build.</p>
            </div>
            <div className="card step-card">
              <LineIcon>
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01" />
                <path d="M15 9h.01" />
                <circle cx="12" cy="12" r="9" />
              </LineIcon>
              <h3>Support</h3>
              <p>Single email channel for incidents, access requests, and compliance follow-ups with tracked responses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Operations & Assurance</p>
            <h2>How we run our products</h2>
            <p className="section-lead">
              Clear procedures for release, support, and data stewardship to meet platform review needs.
            </p>
          </div>
          <div className="snapshot">
            <div className="snapshot-item">
              <span className="label">Release process</span>
              <p>Versioned builds with change logs, QA steps, and documented rollback paths.</p>
            </div>
            <div className="snapshot-item">
              <span className="label">Maintenance</span>
              <p>Quarterly dependency reviews, mobile SDK updates, and platform monitoring.</p>
            </div>
            <div className="snapshot-item">
              <span className="label">Support</span>
              <p>
                Email support via <a href="mailto:admin@synaptica.dev">admin@synaptica.dev</a> with tracked
                response targets.
              </p>
            </div>
            <div className="snapshot-item">
              <span className="label">Data requests</span>
              <p>Single channel for privacy, removal, or export requests routed to Synaptica staff.</p>
            </div>
            <div className="snapshot-item">
              <span className="label">Company</span>
              <p>1001420084 Ontario Inc. (operating as Synaptica), incorporated in Ontario, Canada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cta fade-in">
        <div className="container">
          <div className="cta-content">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Need support or verification?</h2>
              <p>Contact the Synaptica team for product questions, incident reports, or corporate details.</p>
            </div>
            <div className="cta-actions">
              <Link className="button" to="/contact">
                Contact & Support
              </Link>
              <a className="button ghost" href="mailto:admin@synaptica.dev">
                Email Synaptica
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
