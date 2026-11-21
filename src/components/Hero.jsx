import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero">
      {/* Hero card visual fixes — scoped here so no other file is touched */}
      <style>{`
        .hero .polaroid img {
          border: 2px solid #121210;
        }
        .hero .terminal {
          bottom: -46px;
          left: 70px;
          background: #111211;
          box-shadow: 10px 10px 0 #000;
        }
        .hero .terminal-bar {
          border-bottom-color: #2b2c2a;
        }
        /* brighter accents sampled from the reference terminal */
        .hero .mac-dots i:nth-child(1) { background: #ff6a34; }
        .hero .mac-dots i:nth-child(2) { background: #ffd33e; }
        .hero .mac-dots i:nth-child(3) { background: #3cdd97; }
        .hero .terminal-title { color: #6e6c68; }
        .hero .prompt { color: #3cdd97; }
        .hero .cmd { color: #fdd13d; }
        .hero .out { color: #b7b3a9; }
        .hero .val { color: #fef6ea; }
        .hero .cursor { background: #3cdd97; }
        .hero .tape {
          top: -18px;
          width: 148px;
          height: 30px;
          /* translucent, so the polaroid's black border shows through it */
          background: rgba(255, 210, 66, .86);
        }
        .hero .tape::after {
          display: none;
        }
      `}</style>

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
              <p className="out">leetcode: <span className="val">{profile.leetcode}</span></p>
              <p className="out">projects: <span className="val">{profile.projectsCount}</span></p>
              <p className="gap"><span className="prompt">→</span> <span className="cursor"></span></p>
            </div>
          </div>

          <p className="script terminal-note">yes, I like<br />dark terminals<br /><span>↓</span></p>
        </div>
      </div>
    </section>
  )
}
