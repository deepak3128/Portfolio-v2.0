import { useEffect, useState } from 'react'
import { filters, featuredProject, projects } from '../data.js'
import { GithubIcon, HandArrowDown, PlayIcon, ExternalIcon } from './Icons.jsx'

function FeaturedCard() {
  const p = featuredProject
  return (
    <article className="featured-card reveal" data-category="ai">
      <span className="ribbon">{p.ribbon}</span>
      <div className="featured-visual" style={{ border: '1px solid #121210' }}>
        <img src={p.image} alt={p.imageAlt} />
      </div>
      <div className="featured-body">
        <div className="card-meta">
          <span className="num-tag">{p.number}</span> {p.label} <span className="dot-sep">·</span> {p.year}
        </div>
        <h3>{p.title}</h3>
        <h4>{p.subtitle}</h4>
        <p>{p.description}</p>
        <ul className="check-list">
          {p.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="tag-row">
          {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        <div className="btn-row">
          {p.github && (
            <a className="btn btn-dark btn-sm" href={p.github} target="_blank" rel="noopener">
              <GithubIcon /> View code
            </a>
          )}
          {p.live && (
            <a className="btn btn-white btn-sm" href={p.live} target="_blank" rel="noopener">
              <PlayIcon /> Watch demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal" data-category={project.category}>
      <div className={`project-visual ${project.visual}`}>
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <div className="project-body">
        <div className="card-meta">
          <span>{project.number}</span> <span className="dot-sep">·</span> {project.label}
          <span className="year">{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="tech-line">
          {project.tech.map((tech, i) => (
            <span key={tech}>
              {i > 0 && <span> · </span>}{tech}
            </span>
          ))}
        </p>
        <div className="card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener"><GithubIcon /> Code</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener">
              {project.play ? <PlayIcon /> : <ExternalIcon />}
              {project.liveLabel || 'Live'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  /* Filtered cards are freshly mounted, so make sure the reveal animation
     doesn't leave them invisible after a filter change */
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.querySelectorAll('#projects .reveal').forEach((el) => el.classList.add('in-view'))
    })
    return () => cancelAnimationFrame(id)
  }, [active])

  const visible = (category) => active === 'all' || category === active

  /* Keep the default section compact: show only the first few cards.
     Clicking a category filter reveals every project in that category. */
  const matching = projects.filter((project) => visible(project.category))
  const shown = active === 'all' ? matching.slice(0, 3) : matching

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <h2 className="section-title">Projects</h2>
            <p className="script script-orange">stuff I actually shipped <HandArrowDown /></p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`filter${active === filter.value ? ' active' : ''}`}
                data-filter={filter.value}
                onClick={() => setActive(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {visible('ai') && <FeaturedCard />}

        <div className="project-grid">
          {shown.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>

        <div className="more-link reveal">
          <a href="https://github.com/deepak3128" target="_blank" rel="noopener">
            <GithubIcon />
            8 more on GitHub <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
