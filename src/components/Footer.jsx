import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, HelpIcon, CodeIcon, ArrowUpRightIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top reveal">
          <p className="script footer-script">got an internship or a cool project?</p>
          <a className="footer-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <span className="email-arrow"><ArrowUpRightIcon /></span>
          </a>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-socials">
            <a className="icon-btn" href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub"><GithubIcon /></a>
            <a className="icon-btn" href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a className="icon-btn" href="#contact" aria-label="About"><HelpIcon /></a>
            <a className="icon-btn" href="#projects" aria-label="Source code"><CodeIcon /></a>
          </div>
          <p className="footer-credit">built by hand with too much chai ☕</p>
          <p className="footer-copy">{profile.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
