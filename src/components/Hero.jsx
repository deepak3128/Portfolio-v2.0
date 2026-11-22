import { profile } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="hero">
      {/* Hero card visual fixes — scoped here so no other file is touched */}
      <style>{`
        .hero { padding-bottom: 104px; }
        /* status pill: monospace label + clean green dot, per reference */
        .hero .status-pill {
          font-family: "JetBrains Mono", monospace;
          font-weight: 500;
          font-size: 13px;
          box-shadow: none;
        }
        .hero .status-dot {
          width: 10px;
          height: 10px;
          border: 1.5px solid #121210;
          box-shadow: none;
        }
        /* See my work button — less rounded, like the reference */
        .hero .btn-dark { border-radius: 13px; }
        .marquee-wrap .marquee {
          padding: 15px 0;
          border-top: 2px solid #121210;
          border-bottom: 2px solid #121210;
        }
        .marquee-wrap .marquee-item span { font-size: 22px; }
        .marquee-wrap .marquee-item i { font-size: 28px; }
        .marquee-wrap:hover .marquee-track { animation-play-state: running; }
        .hero .polaroid img {
          border: 2px solid #121210;
        }
        .hero .terminal {
          bottom: -46px;
          left: 70px;
          background: #050505;
          box-shadow: 10px 10px 0 #000;
        }
        .hero .terminal-bar {
          border-bottom-color: #2b2c2a;
        }
        /* vivid accents */
        .hero .mac-dots i:nth-child(1) { background: #ff5b2e; }
        .hero .mac-dots i:nth-child(2) { background: #ffdb3d; }
        .hero .mac-dots i:nth-child(3) { background: #2bff9c; }
        .hero .terminal-title { color: #6e6c68; }
        .hero .prompt { color: #2bff9c; text-shadow: 0 0 10px rgba(43,255,156,.45); }
        .hero .cmd { color: #ffe23d; font-weight: 700; text-shadow: 0 0 10px rgba(255,226,61,.35); }
        .hero .out { color: #d6d2c8; }
        .hero .val { color: #ffffff; }
        .hero .cursor { background: #2bff9c; box-shadow: 0 0 8px rgba(43,255,156,.55); }
        /* handwritten note under the photo card */
        .hero .terminal-note {
          right: -18px;
          bottom: -34px;
          font-size: 27px;
          line-height: .95;
          color: #5c5c55;
        }
        .hero .note-arrow {
          display: block;
          width: 32px;
          height: 40px;
          margin: 2px 6px 0 auto;
          color: #5c5c55;
        }
        .hero .tape {
          top: -18px;
          width: 162px;
          height: 36px;
          transform: translateX(-50%) rotate(8deg);
          border: 0;
          box-shadow: none;
          /* same yellow as before — only the texture/shape comes from your PNG */
          background: rgba(255, 210, 66, .86);
          -webkit-mask-image: url(/assets/paint_brush_mask.png);
          mask-image: url(/assets/paint_brush_mask.png);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
        .hero .tape::after {
          display: none;
        }
        @media (max-width: 760px) {
          .hero .terminal { left: 0; bottom: 0; }
          .hero .terminal-note { right: 0; }
        }
        @media (max-width: 430px) {
          .hero .polaroid { right: 0; }
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
            <a className="icon-btn" href="https://github.com/deepak3128" target="_blank" rel="noopener" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a className="icon-btn" href="https://linkedin.com/in/deepak3128" target="_blank" rel="noopener" aria-label="LinkedIn">
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
            <span className="polaroid-caption">hugging</span>
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

          <p className="script terminal-note">
            yes, I like<br />
            dark terminals<br />
            <svg className="note-arrow" viewBox="0 0 44 64" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 12 C20 7 27 12 27 23 L27 47" />
              <path d="M27 47 L16 37 M27 47 L38 37" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  )
}
