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

export default function TechMarquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          <TechSet />
          <TechSet />
        </div>
      </div>
    </div>
  )
}
