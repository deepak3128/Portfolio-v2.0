import { award, timeline } from '../data.js'

export default function Achievements() {
  return (
    <section className="achievements section" id="achievements">
      <div className="container ach-inner">
        <div className="ach-left reveal">
          <h2 className="section-title section-title-light">Achievements</h2>
          <p className="script script-yellow" style={{ fontSize: '27px', margin: '6px 0 0' }}>the proud-mom list</p>

          <div className="award-card" style={{ marginBottom: '42px' }}>
            <span className="trophy">🏆</span>
            <span className="award-date">{award.date}</span>
            <h3>{award.title[0]}<br />{award.title[1]}</h3>
            <p>{award.description}</p>
          </div>

          <div className="stat-grid">
            {award.stats.map((stat) => (
              <div className="stat-box" key={stat.label}>
                <strong className={stat.pink ? 'pink' : undefined}>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline reveal">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.date + item.title}>
              <span className={`tl-dot ${item.dot}`}></span>
              <span className="tl-date">{item.date}</span>
              <h3>
                {item.title}
                {item.badge && <span className="mini-badge">{item.badge}</span>}
              </h3>
              <p>{item.description}</p>
              {item.link && <a className="paper-link" href="#achievements">{item.link}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
