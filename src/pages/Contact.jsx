function Contact() {
  return (
    <div className="page">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Contact & Support</h1>
      <p className="page-subtitle">
        Synaptica (1001420084 Ontario Inc.) provides direct support for our web and mobile
        products. Email is the primary contact channel for all inquiries, including incidents,
        access requests, and compliance questions.
      </p>

      <div className="page-content">
        <div className="card-stack">
          <div className="info-card">
            <h2>Support Channel</h2>
            <ul className="list">
              <li>
                Email: <a href="mailto:admin@synaptica.dev">admin@synaptica.dev</a>
              </li>
              <li>Hours: Monday–Friday, 9:00–17:00 Eastern Time</li>
              <li>Target response: within one business day</li>
              <li>Language: English</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>What to Include</h2>
            <ul className="list">
              <li>Your name and preferred contact details</li>
              <li>Product name and platform (iOS, Android, or web)</li>
              <li>Issue description and relevant version or device details</li>
              <li>Any screenshots or error messages, if available</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>When to Contact Us</h2>
            <ul className="list">
              <li>Account or access issues</li>
              <li>Bug reports or incident notifications</li>
              <li>Privacy, removal, or data export requests</li>
              <li>Partnership or compliance inquiries</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>Mailing Address</h2>
            <p className="address">
              1001420084 Ontario Inc.<br />
              Operating as Synaptica<br />
              222 Laschinger Blvd<br />
              New Hamburg, Ontario, N3A 2G9<br />
              Canada
            </p>
          </div>
        </div>

        <div className="contact-cta">
          <p>
            We log support requests to track resolution steps and product improvements. Please
            use the primary email channel so we can respond consistently and maintain records.
          </p>
          <a className="button" href="mailto:admin@synaptica.dev">
            Email Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
