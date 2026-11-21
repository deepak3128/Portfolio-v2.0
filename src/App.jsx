import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Certifications from './components/Certifications.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

function useScrollEffects() {
  useEffect(() => {
    /* Reveal sections as they scroll into view */
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    revealEls.forEach((el) => observer.observe(el))

    /* Highlight the nav link for the section in view */
    const sections = document.querySelectorAll('section[id]')
    const navAnchors = document.querySelectorAll('.nav-links a')
    const highlightNav = () => {
      let current = ''
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 140) current = section.id
      })
      navAnchors.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`)
      })
    }
    window.addEventListener('scroll', highlightNav, { passive: true })
    highlightNav()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', highlightNav)
    }
  }, [])
}

export default function App() {
  useScrollEffects()

  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Achievements />
      <Certifications />
      <Skills />
      <Footer />
      <div className="maker-strip">
        <div className="container maker-inner">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-2v-6h4M4 14h4v6H6a2 2 0 0 1-2-2v-4Z" /></svg>
            Made with UX Pilot
          </span>
          <span>uxpilot.ai</span>
        </div>
      </div>
    </>
  )
}
