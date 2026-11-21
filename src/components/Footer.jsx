import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, HelpIcon, CodeIcon, ArrowUpRightIcon, ChaiIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <style>{`
        .footer-credit .chai-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: -4px;
          margin-left: 2px;
          color: #121210;
        }
      `}</style>
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
            <a className="icon-btn" href="https://github.com/deepak3128" target="_blank" rel="noopener" aria-label="GitHub"><GithubIcon /></a>
            <a className="icon-btn" href="https://linkedin.com/deepak3218x" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a className="icon-btn" href="#contact" aria-label="About"><HelpIcon /></a>
            <a className="icon-btn" href="#projects" aria-label="Source code"><CodeIcon /></a>
          </div>
          <p className="footer-credit">
            built by hand with too much chai <ChaiIcon />
          </p>
          <p className="footer-copy">{profile.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
