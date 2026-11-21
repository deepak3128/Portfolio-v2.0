import { Fragment } from 'react'
import { techs } from '../data.js'

function TechSet() {
  return (
    <div className="marquee-item">
      {techs.map((tech) => (
        <Fragment key={tech}>
          <span>{tech}</span>
          <i>✱</i>
        </Fragment>
      ))}
    </div>
  )
}

function TechGroup() {
  return (
    <div className="marquee-group">
      <TechSet />
      <TechSet />
    </div>
  )
}

export default function TechMarquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <style>{`
        .marquee-wrap .marquee-track { will-change: auto; }
        .marquee-wrap .marquee-group { display: flex; flex-shrink: 0; }
      `}</style>
      <div className="marquee">
        <div className="marquee-track">
          <TechGroup />
          <TechGroup />
        </div>
      </div>
    </div>
  )
}
