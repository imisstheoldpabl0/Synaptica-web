function About() {
  return (
    <div className="page">
      <p className="eyebrow">Company Background</p>
      <h1 className="page-title">About Synaptica</h1>
      <p className="page-subtitle">
        Synaptica is a software company operating as a registered business name of 1001420084
        Ontario Inc. Incorporated in Ontario, Canada, we design, build, and maintain software
        products with clear accountability and documented support.
      </p>

      <div className="page-content">
        <div className="fact-grid">
          <div className="fact-item">
            <strong>Founded</strong>
            <span>2025</span>
          </div>
          <div className="fact-item">
            <strong>Founders</strong>
            <span>Pablo Rubio Villarroel and Ethan Batte</span>
          </div>
          <div className="fact-item">
            <strong>Legal Entity</strong>
            <span>1001420084 Ontario Inc. (operating as Synaptica)</span>
          </div>
          <div className="fact-item">
            <strong>Location</strong>
            <span>New Hamburg, Ontario, Canada</span>
          </div>
          <div className="fact-item">
            <strong>Primary contact</strong>
            <span>
              <a href="mailto:admin@synaptica.dev">admin@synaptica.dev</a>
            </span>
          </div>
        </div>

        <div className="about-section">
          <h2>Mission</h2>
          <p>
            Deliver practical software that helps learners and teams manage important work
            without unnecessary complexity. We ship only what we can support long term with
            dependable maintenance and support procedures.
          </p>
        </div>

        <div className="two-column about-section">
          <div>
            <h2>Founders & Leadership</h2>
            <p>
              Synaptica was co-founded by Pablo Rubio Villarroel and Ethan Batte, engineers with
              experience in mobile application development, backend systems, and product
              delivery. They oversee architecture decisions, security practices, and support
              responses across all products.
            </p>
          </div>
          <div>
            <h2>Focus Areas</h2>
            <ul className="value-list">
              <li>Web and mobile application development with tracked releases</li>
              <li>Operational monitoring, dependency updates, and uptime reviews</li>
              <li>Single-channel support with documented responses and follow-ups</li>
              <li>Privacy and data stewardship through controlled access patterns</li>
            </ul>
          </div>
        </div>

        <div className="two-column about-section">
          <div>
            <h2>How We Operate</h2>
            <p>
              Each product has a release cadence, change log, and rollback plan. Maintenance
              windows are scheduled and tracked. Issues and incidents are routed through the
              support channel and resolved with clear ownership.
            </p>
          </div>
          <div>
            <h2>Governance & Compliance</h2>
            <ul className="value-list">
              <li>Documented access controls for shared services and environments</li>
              <li>Quarterly reviews of dependency, SDK, and platform updates</li>
              <li>Data requests processed via the primary contact within stated timelines</li>
              <li>Legal entity: 1001420084 Ontario Inc., Ontario, Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
