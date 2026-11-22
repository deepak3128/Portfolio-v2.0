import { useMemo } from 'react'
import { skillGroups, github } from '../data.js'
import { GithubIcon, HandArrowUp } from './Icons.jsx'

/* Deterministic pseudo-random contribution graph (same pattern every load) */
function useContributionCells() {
  return useMemo(() => {
    let seed = 2024
    const rand = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    return Array.from({ length: 259 }, () => {
      const r = rand()
      let level = 0
      if (r > 0.84) level = 4
      else if (r > 0.68) level = 3
      else if (r > 0.5) level = 2
      else if (r > 0.34) level = 1
      return `l${level}`
    })
  }, [])
}

export default function Skills() {
  const cells = useContributionCells()

  return (
    <section className="skills section" id="skills">
      <style>{`
        .skills-right .skill-note { font-size: 25px; }
        .skills-right .skill-arrow { width: 20px; height: 26px; vertical-align: -6px; margin-right: 6px; }
      `}</style>
      <div className="container skills-inner">
        <div className="skills-left reveal">
          <h2 className="section-title">Skills</h2>
          <p className="script script-orange">my everyday toolbox</p>

          <div className="github-card">
            <div className="github-head">
              <span><GithubIcon /> {github.label}</span>
              <small>{github.commits}</small>
            </div>
            <div className="graph" aria-label="GitHub contribution graph">
              {cells.map((level, i) => <i className={level} key={i}></i>)}
            </div>
            <div className="graph-legend">
              less <i className="l0"></i><i className="l1"></i><i className="l2"></i><i className="l3"></i><i className="l4"></i> more
            </div>
          </div>
        </div>

        <div className="skills-right reveal">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <p className="group-label">{group.label}</p>
              <div className="skill-pills">
                {group.pills.map((pill) => (
                  <span className={`skill-pill${pill.hl ? ` ${pill.hl}` : ''}`} key={pill.name}>
                    {pill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="script skill-note"><HandArrowUp /> highlighted ones = what I use daily</p>
        </div>
      </div>
    </section>
  )
}
