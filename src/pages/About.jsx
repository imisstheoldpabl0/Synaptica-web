function About() {
  return (
    <div className="page">
      <h1 className="page-title">About Synaptica</h1>
      <div className="page-content">
        <div className="about-section">
          <p>
            Synaptica operates as a registered business name of 1001420084 Ontario Inc.,
            an Ontario-incorporated company providing software and digital solutions.
          </p>
          <p>
            We specialize in building modern, reliable digital products that help
            businesses and individuals achieve their goals through technology.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Focus</h2>
          <p>
            At Synaptica, we are committed to delivering high-quality software solutions
            that are built with care, attention to detail, and a deep understanding of
            our clients' needs.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            For inquiries, please reach out to us at{' '}
            <a href="mailto:admin@synaptica.dev">admin@synaptica.dev</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
