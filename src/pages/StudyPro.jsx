import { Link } from 'react-router-dom'

const screenshots = [
  {
    src: '/assets/studypro/sheet-upload.png',
    alt: 'Course list with syllabus upload sheet',
    title: 'Course setup and syllabus upload',
    description:
      'Upload a syllabus file (PDF, DOC, or DOCX) to extract key dates. Supported file types and size limits are displayed before import.',
  },
  {
    src: '/assets/studypro/sheet-upload-2.png',
    alt: 'Course list with syllabus upload sheet option 2',
    title: 'Guided import flow',
    description:
      'Students can review course details and confirm uploads through a guided, single-sheet flow to reduce errors.',
  },
  {
    src: '/assets/studypro/sheet-upload-3.png',
    alt: 'Course list with syllabus upload confirmation',
    title: 'Upload confirmation',
    description:
      'Progress and validations are shown during uploads to keep the process predictable and transparent.',
  },
  {
    src: '/assets/studypro/school-select.png',
    alt: 'School selection list',
    title: 'School selection',
    description:
      'Searchable school list with campus context to align due dates and calendars with the correct institution.',
  },
  {
    src: '/assets/studypro/school-select-2.png',
    alt: 'School selection with campus tag',
    title: 'Campus details',
    description:
      'Each school entry shows campus details and location so students can pick the right program variant.',
  },
  {
    src: '/assets/studypro/schedule-view.png',
    alt: 'Schedule view',
    title: 'Schedule overview',
    description:
      'Consolidated schedule view to see upcoming coursework, deadlines, and timelines once courses are added.',
  },
  {
    src: '/assets/studypro/schedule-view-2.png',
    alt: 'Schedule view variant',
    title: 'Schedule variant',
    description:
      'Alternate view of the schedule with the same layout to validate consistency across workflows.',
  },
]

function StudyPro() {
  return (
    <div className="page product-page">
      <div className="product-hero">
        <div className="product-hero-details">
          <p className="eyebrow">StudyPro · In development</p>
          <h1 className="page-title">Structured study plans with clear timelines</h1>
          <p className="page-subtitle">
            StudyPro is an iOS and Android app from Synaptica designed to help students capture syllabi,
            track coursework, and keep assignment deadlines visible. Releases are in development with
            staged pilots.
          </p>
          <div className="pill-row">
            <span className="pill">Platforms: iOS, Android</span>
            <span className="pill">Status: In development</span>
            <span className="pill">Owner: Synaptica</span>
          </div>
          <div className="hero-actions">
            <a className="button" href="mailto:admin@synaptica.dev">
              Contact for updates
            </a>
            <Link to="/contact" className="button ghost">
              Support channel
            </Link>
            <Link to="/studypro-privacy-policy" className="button ghost">
              StudyPro Privacy Policy
            </Link>
            <Link to="/studypro-terms-of-service" className="button ghost">
              StudyPro Terms of Service
            </Link>
          </div>
        </div>
        <div className="product-hero-icon">
          <div className="icon-card">
            <img src="/assets/studypro/icon-light.png" alt="StudyPro app icon light" />
            <img src="/assets/studypro/icon-dark.png" alt="StudyPro app icon dark" />
          </div>
          <p className="icon-note">Icons displayed for light and dark modes.</p>
        </div>
      </div>

      <div className="page-content">
        <div className="section-header">
          <p className="eyebrow">Product overview</p>
          <h2>What StudyPro supports</h2>
          <p className="section-lead">
            StudyPro focuses on structured planning: importing syllabi, aligning course schedules, and
            keeping deadlines visible. These screenshots reflect the current build in development.
          </p>
        </div>

        <div className="screenshot-grid">
          {screenshots.map((shot) => (
            <div className="screenshot-card" key={shot.src}>
              <div className="screenshot-image">
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </div>
              <div className="screenshot-copy">
                <h3>{shot.title}</h3>
                <p>{shot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudyPro
