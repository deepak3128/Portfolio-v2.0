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

    /* Watch for elements React adds/removes later (e.g. filtered project
       cards) so newly mounted .reveal nodes get revealed too */
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => {
        observer.observe(el)
      })
    })
    mutationObserver.observe(document.getElementById('root'), {
      childList: true,
      subtree: true,
    })

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
      mutationObserver.disconnect()
      window.removeEventListener('scroll', highlightNav)
    }
  }, [])
}

export default function App() {
  useScrollEffects()

  return (
    <>
      <style>{`
        /* Desktop/laptop: render at the equivalent of 125% browser zoom
           so content fills the screen instead of leaving wide side margins.
           Mobile/tablet layout is intentionally untouched. */
        @media (min-width: 1200px) {
          html { zoom: 1.16; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Achievements />
      <Certifications />
      <Skills />
      <Footer />
    </>
  )
}
