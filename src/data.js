/* =========================================================
   Site content — edit here to update the portfolio
   ========================================================= */

export const profile = {
  name: 'Deepak Katiyar',
  domain: 'deepak.dev',
  status: "Looking for Full time opportunites",
  year: '4rd-year',
  college: 'MPGI Kanpur',
  email: '@email.com',
  cgpa: '7.2',
  terminalTitle: '~/deepak',
  terminalUser: "btech cse '27 · mpgi kanpur",
  leetcode: '200+',
  projectsCount: '8+ shipped',
  copyright: '© 2026 Deepak Katiyar',
}

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
]

export const techs = ['React', 'Node.js', 'Python', 'Express',  'Typescript', 'C++', 'JavaScript', 'MongoDB', 'AWS', 'Docker']

export const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Extensions', value: 'extension' },
  { label: 'Android', value: 'android' },
]

export const featuredProject = {
  ribbon: "🏆 SIH '25 Finalist",
  number: '#01',
  label: 'Featured',
  year: '2025',
  title: 'Sabarmati',
  subtitle: 'Riverfront & Urban Water Bodies Monitoring App',
  description: "Cross-platform mobile application for real-time visualization of river conditions, flood alerts, and environmental data from IoT sensors deployed along the Sabarmati River.",
  highlights: [
    '97% recognition accuracy with a fine-tuned FaceNet model',
    'Works on cheap webcams, results in under 3 seconds',
  ],
  tags: ['React Native', 'Raspberry Pi', 'Rest APIs', 'IOT (LoRa, ESP32)'],
  image: '/assets/project-facetrack.png',
  imageAlt: 'FaceTrack smart attendance dashboard on a laptop',
  // 👇 put your links here
  github: 'https://github.com/deepak3128/Sabarmati-Smart-RiverWatch',
  live: 'https://your-live-demo-link.com',
}

/* ------------------------------------------------------------------
   PROJECT LINKS — add all your URLs here, one place for every card.

     github     : source-code repository URL
     live       : deployed demo / store URL
     liveLabel  : (optional) button text — defaults to "Live"
     play       : (optional) true shows the ▶ icon instead of ↗

   Leave a value empty ('') to hide that button on the card.
   ------------------------------------------------------------------ */
export const projects = [
  {
    number: '#02',
    category: 'web',
    label: 'Web',
    year: '2024',
    title: 'OPD System(UrbanMed-Sync)',
    description: 'Full-stack OPD system to make operations paperless with real-time patient queue and bed availability tracking.',
    tech: ['React', 'Flask', 'SQLAlchemy', 'Tailwind CSS','Socket.io'],
    visual: 'visual-blue',
    image: '/assets/project-campuskart.png',
    imageAlt: 'CampusKart marketplace homepage',
    github: 'https://github.com/deepak3128/UrbanMed-Sync',
    live: 'https://your-live-demo-link.com',
  },
  {
    number: '#03',
    category: 'web',
    label: 'Web',
    year: '2026',
    title: 'Hair-Reviver',
    description: "Manages clients, appointments, patch inventory, billing, staff roles and reports, with automatic maintenance reminders and WhatsApp deep links for reminders and invoice follow-up.",
    tech: ['Python', 'spaCy', 'HuggingFace', 'Streamlit'],
    visual: 'visual-green',
    image: '/assets/project-resumelens.png',
    imageAlt: 'ResumeLens resume analysis dashboard',
    github: 'https://github.com/deepak3128/hair-reviver',
    live: 'https://your-live-demo-link.com',
  },
  {
    number: '#04',
    category: 'web',
    label: 'Web',
    year: '2026',
    title: 'RMS',
    description: 'Splits trip and hostel expenses between friends, with UPI settle-up. I made it after one too many Goa trips. 5k+ downloads.',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    visual: 'visual-pink',
    image: '/assets/project-splitease.png',
    imageAlt: 'SplitEase expense splitting app on two phones',
    github: 'https://github.com/deepak3128/rms',
    live: 'https://your-live-demo-link.com',
    liveLabel: 'Play Store',
    play: true,
  },
  {
    number: '#05',
    category: 'extension',
    label: 'Extension',
    year: '2026',
    title: 'Youtube Shorts Blocker',
    description: 'A production-ready cross-browser extension that blocks YouTube Shorts using vanilla JavaScript with zero external dependencies.',
    tech: ['JavaScript', 'Chrome Extensions API', 'DOM Manipulation', 'CSS'],
    visual: 'visual-pink',
    image: '/assets/project-splitease.png',
    imageAlt: 'SplitEase expense splitting app on two phones',
    github: 'https://github.com/deepak3128/Shorts-Blocker-Extension',
    live: 'https://chromewebstore.google.com/your-extension',
    liveLabel: 'Chrome Store',
  },
  {
    number: '#06',
    category: 'extension',
    label: 'Extension',
    year: '2026',
    title: 'Whatsapp-Restrictor',
    description: 'A Chrome extension that helps you stop compulsively checking WhatsApp Web while studying, by limiting how long you can use it and locking it for a cooldown period once your time is up.',
    tech: ['JavaScript', 'Chrome Extensions API', 'DOM Manipulation', 'CSS'],
    visual: 'visual-blue',
    image: '/assets/project-splitease.png',
    imageAlt: 'SplitEase expense splitting app on two phones',
    github: 'https://github.com/deepak3128/WhatsApp-Restrictor-Extension',
    live: 'https://chromewebstore.google.com/your-extension',
    liveLabel: 'Chrome Store',
  },
]
  
export const award = {
  date: 'DEC 2025',
  title: ['Smart India Hackathon', 'National Finalist'],
  description: 'Top 5 out of 500+ teams. We pitched FaceTrack to the Ministry of Gujrat Gujarat Council on Science & Technology (GUJCOST),Dept of Science & Technology.',
  stats: [
    { value: '1912', label: 'LeetCode · Knight' },
    { value: '4★', label: 'CodeChef · 1850', pink: true },
  ],
}

export const timeline = [
  {
    dot: 'dot-yellow',
    date: 'MAR 2024',
    title: 'Won HackVIT 2024',
    badge: '1st place',
    description: "36 hours, 3 energy drinks per person and one working demo. We built CampusKart's first version here and took home ₹50,000.",
  },
  {
    dot: 'dot-blue',
    date: 'JUL 2024',
    title: 'Published at IEEE ICCCNT 2024',
    description: '"Lightweight Face Recognition for Low-Resource Classroom Attendance Systems". My first research paper, co-authored with Dr. R. Iyer.',
    link: 'Read paper →',
  },
  {
    dot: 'dot-green',
    date: '2024 — 2026',
    title: 'Campus Head, GeeksforGeeks',
    description: 'Ran 14 workshops on web dev and Google Cloud for 800+ students, and mentor juniors for their first hackathons.',
  },
  {
    dot: 'dot-pink',
    date: '2023 — PRESENT',
    title: '400+ DSA problems solved',
    description: 'LeetCode and GeeksforGeeks, 100-day streak',
  },
  {
    dot: 'dot-orange',
    date: '2023',
    title: "Dean's Merit Scholarship",
    description: 'Awarded to the top 1% of the CSE batch for academic performance.',
  },
]

export const certificates = [
  { icon: 'icon-aws', mark: 'aws', title: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', id: 'ID AWS-CCP-8F21K', date: "JAN '25" },
  { icon: 'icon-dsa', mark: '🎓', title: 'Data Structures & Algorithms', badge: 'ELITE + GOLD', org: 'NPTEL · IIT Kharagpur · Top 2%', id: 'ID NPTEL24CS41', date: "APR '24" },
  { icon: 'icon-meta', mark: 'IBM', title: 'Python', org: 'IBM · Coursera Professional Certificate', id: 'ID META-FE-72JD', date: "DEC '23" },
  { icon: 'icon-google', mark: 'G', title: 'Google Cloud Arcade, Trooper Tier', org: 'Google Cloud Skills Boost · 42 badges', id: 'PROFILE /arjunn', date: "OCT '23" },
  { icon: 'icon-oracle', mark: '☕', title: 'Oracle Certified Associate, Java SE 8', org: 'Oracle University', id: 'ID KWZZ9SZXNDSA', date: "JUN '23" },
  { icon: 'icon-google', mark: 'G', title: 'Tools of the Trade: Linux and SQL', org: 'Google  · Coursera', id: 'ID 88L5F96532XL', date: "Nov '23 " },
  { icon: 'icon-google', mark: 'G', title: 'Network Security', org: 'Google  · Coursera', id: 'ID ML-QX93LP', date: "Nov '23 " },
]

export const skillGroups = [
  { label: '// languages', pills: [{ name: 'C++', hl: 'hl-yellow' }, { name: 'Python', hl: 'hl-yellow' }, { name: 'Java' }, { name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'SQL' }] },
  { label: '// frameworks & libraries', pills: [{ name: 'React', hl: 'hl-blue' }, { name: 'Node / Express', hl: 'hl-blue' }, { name: 'Next.js' }, { name: 'Flask' }, { name: 'SQLAlchemy  ' }, { name: 'Tailwind' }] },
  { label: '// tools & cloud', pills: [{ name: 'Git', hl: 'hl-green' }, { name: 'AWS', hl: 'hl-green' }, { name: 'Docker' }, { name: 'Firebase' }, { name: 'MongoDB' }, { name: 'PostgreSQL' }] },
]

export const github = { label: 'GitHub activity', commits: '100+ commits · 2026' }
