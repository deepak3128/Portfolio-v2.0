import { certificates } from '../data.js'
import { ArrowUpRightIcon } from './Icons.jsx'

export default function Certifications() {
  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <h2 className="section-title">Certifications</h2>
            <p className="script script-orange" style={{ fontStyle: 'italic', fontSize: '30px', letterSpacing: '.01em' }}>learning beyond the syllabus</p>
          </div>
          <p className="head-note" style={{ fontSize: '17px' }}>6 certificates <span>·</span> all verifiable</p>
        </div>

        <div className="cert-card reveal">
          {certificates.map((cert) => (
            <div className="cert-row" key={cert.id}>
              <div className={`cert-icon ${cert.icon}`}>{cert.mark}</div>
              <div className="cert-info">
                <h3>
                  {cert.title}
                  {cert.badge && <span className="gold-badge">{cert.badge}</span>}
                </h3>
                <p>{cert.org}</p>
              </div>
              <div className="cert-id">{cert.id}</div>
              <div className="cert-date">{cert.date}</div>
              {cert.verify ? (
                <a className="cert-link" href={cert.verify} target="_blank" rel="noopener" aria-label={`Verify ${cert.title}`}>
                  <ArrowUpRightIcon />
                </a>
              ) : (
                <span className="cert-link" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
