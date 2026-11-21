/* =========================================================
   Arjun Mehta — Portfolio interactions
   ========================================================= */

/* ---------- Tech marquee ---------- */
const techs = ['React', 'Node.js', 'Python', 'TensorFlow', 'C++', 'Kotlin', 'MongoDB', 'AWS', 'Docker'];
const marqueeTrack = document.getElementById('marqueeTrack');

if (marqueeTrack) {
  const set = techs.map(t => `<div class="marquee-item"><span>${t}</span><i>✱</i></div>`).join('');
  // two identical sets so the -50% keyframe loops seamlessly
  marqueeTrack.innerHTML = set + set;
}

/* ---------- GitHub-style contribution graph ---------- */
const graph = document.getElementById('githubGraph');

if (graph) {
  // deterministic pseudo-random pattern so the graph looks the same on every load
  let seed = 2024;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 259; i++) { // 37 weeks x 7 days
    const cell = document.createElement('i');
    const r = rand();
    let level = 0;
    if (r > 0.84) level = 4;
    else if (r > 0.68) level = 3;
    else if (r > 0.5) level = 2;
    else if (r > 0.34) level = 1;
    cell.className = 'l' + level;
    frag.appendChild(cell);
  }
  graph.appendChild(frag);
}

/* ---------- Project filters ---------- */
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('[data-category]');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    projects.forEach(project => {
      const show = selected === 'all' || project.dataset.category === selected;
      project.classList.toggle('is-hidden', !show);
    });
  });
});

/* ---------- Mobile menu ---------- */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in-view'));
}

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const highlightNav = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();
