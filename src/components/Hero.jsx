import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="status-pill"><span className="status-dot"></span> {profile.status}</span>

          <p className="script hero-script">hey there, I'm</p>
          <h1 className="hero-title">
            {profile.name.split(' ')[0]}<br />
            {profile.name.split(' ')[1]}<span className="title-dot">.</span>
          </h1>

          <p className="hero-desc">
            {profile.year} <mark>CSE student</mark> at {profile.college}. I build full-stack apps,
            mess around with ML models and solve LeetCode problems way past midnight.
          </p>

          <div className="hero-actions">
            <a className="btn btn-dark" href="#projects">
              See my work
              <ArrowDownIcon />
            </a>
            <a className="icon-btn" href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a className="icon-btn" href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="polaroid">
            <div className="tape"></div>
            <img src="/assets/hero-photo.png" alt={`Portrait of ${profile.name}`} />
            <span className="polaroid-caption">tugging</span>
          </div>

          <div className="cgpa-badge">
            <strong>{profile.cgpa}</strong>
            <span>CGPA</span>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="mac-dots"><i></i><i></i><i></i></span>
              <span className="terminal-title">{profile.terminalTitle}</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">→</span> <span className="cmd">whoami</span></p>
              <p className="out">{profile.terminalUser}</p>
              <p className="gap"><span className="prompt">→</span> <span className="cmd">cat stats.txt</span></p>
              <p className="out">leetcode: {profile.leetcode}</p>
              <p className="out">projects: {profile.projectsCount}</p>
              <p className="gap"><span className="prompt">→</span> <span className="cursor"></span></p>
            </div>
          </div>

          <p className="script terminal-note">yes, I like<br />dark terminals<br /><span>↓</span></p>
        </div>
      </div>
    </section>
  )
}
