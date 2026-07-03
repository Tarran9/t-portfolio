import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Menu,
  X,
  Terminal,
} from 'lucide-react';

const skillGroups = [
  {
    tag: '01',
    title: 'Programming',
    items: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS'],
  },
  {
    tag: '02',
    title: 'Mobile Dev',
    items: ['Android Studio', 'XML', 'Basic Android App Dev'],
  },
  {
    tag: '03',
    title: 'Database & Backend',
    items: ['Firebase (Basic)'],
  },
  {
    tag: '04',
    title: 'Graphic Design',
    items: ['Photoshop', 'Canva', 'Posters & Banners', 'Social Creatives'],
  },
  {
    tag: '05',
    title: 'Video Editing',
    items: ['CapCut', 'Premiere Pro (Basic)', 'Reels & Shorts'],
  },
  {
    tag: '06',
    title: 'Tools & Platforms',
    items: ['VS Code', 'Git', 'GitHub', 'Windows OS'],
  },
];

const projects = [
  {
    cmd: 'python analyzer.py',
    lang: 'PYTHON',
    title: 'GitHub Portfolio Analyzer',
    desc: 'Fetches and analyzes a GitHub profile via the REST API — repo count, top languages, star counts and contribution activity in one structured report.',
    tags: ['API Integration', 'JSON Parsing', 'Data Presentation'],
  },
  {
    cmd: 'java LeagueTracker',
    lang: 'JAVA',
    title: 'Football League Tracker',
    desc: 'Console app managing a football league: teams, results, goals and standings, with points-table calculation and top-scorer tracking.',
    tags: ['OOP', 'Collections', 'Encapsulation'],
  },
  {
    cmd: 'python morse.py',
    lang: 'PYTHON',
    title: 'Morse Code Detector',
    desc: 'Encodes plain text to Morse and decodes it back, covering the full alphabet, digits and punctuation via dictionary-based mapping.',
    tags: ['String Logic', 'Dictionaries'],
  },
  {
    cmd: 'java StudentManager',
    lang: 'JAVA',
    title: 'Student Management System',
    desc: 'Console-based CRUD application for student records — add, update, delete and search, built on solid OOP foundations.',
    tags: ['CRUD', 'OOP'],
  },
  {
    cmd: 'studio run app.apk',
    lang: 'ANDROID',
    title: 'Basic Android Application',
    desc: 'A functional Android app with clean UI and smooth screen navigation — first pass through the Android development lifecycle.',
    tags: ['Android Studio', 'XML', 'UI/UX'],
  },
];

const certifications = [
  'Basics of Java Programming',
  'Python Programming — Self-Learning',
  'Graphic Designing — Self-Learning / Workshop',
  'Video Editing for Social Media Content',
  'Android App Development — Beginner Level',
];

const softSkills = [
  'Creative Thinking',
  'Problem-Solving',
  'Strong Communication',
  'Team Collaboration',
  'Adaptability',
  'Quick Learner',
];

function useOnScreen(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="portfolio">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .portfolio {
          --ink: #15161B;
          --ink-soft: #1D1F27;
          --paper: #ECE7DA;
          --paper-dim: #DFD8C4;
          --coral: #FF5B33;
          --coral-dark: #D8431F;
          --pine: #46603F;
          --pine-light: #8CA678;
          --line-on-paper: rgba(21,22,27,0.16);
          --line-on-ink: rgba(236,231,218,0.16);
          --font-display: 'Anton', sans-serif;
          --font-body: 'Space Grotesk', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;

          font-family: var(--font-body);
          background: var(--paper);
          color: var(--ink);
          width: 100%;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .portfolio * { box-sizing: border-box; margin: 0; padding: 0; }
        .portfolio a { color: inherit; text-decoration: none; }
        .portfolio ul { list-style: none; }
        .portfolio section { position: relative; }

        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding-left: 28px;
          padding-right: 28px;
        }

        .reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s ease; }
        .reveal-in { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(21,22,27,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line-on-ink);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          padding-bottom: 16px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--paper);
          font-family: var(--font-mono);
          font-weight: 700;
          letter-spacing: 0.04em;
        }
        .logo-mark {
          width: 34px;
          height: 34px;
          border: 1.5px solid var(--coral);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 14px;
          color: var(--coral);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 34px;
        }
        .nav-links a {
          color: var(--paper);
          opacity: 0.75;
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: opacity .2s ease, color .2s ease;
          position: relative;
        }
        .nav-links a:hover { opacity: 1; color: var(--coral); }
        .nav-links a:focus-visible, .portfolio a:focus-visible, .portfolio button:focus-visible {
          outline: 2px solid var(--coral);
          outline-offset: 3px;
        }
        .status-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--pine-light);
          border: 1px solid rgba(140,166,120,0.45);
          padding: 6px 12px;
          border-radius: 999px;
        }
        .status-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--pine-light);
          box-shadow: 0 0 0 0 rgba(140,166,120,0.6);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(140,166,120,0.55); }
          70% { box-shadow: 0 0 0 7px rgba(140,166,120,0); }
          100% { box-shadow: 0 0 0 0 rgba(140,166,120,0); }
        }
        .nav-toggle { display: none; background: none; border: none; color: var(--paper); cursor: pointer; }
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: var(--ink);
          border-bottom: 1px solid var(--line-on-ink);
          padding: 8px 28px 20px;
        }
        .mobile-menu a {
          color: var(--paper);
          font-family: var(--font-mono);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 12px 0;
          border-bottom: 1px solid var(--line-on-ink);
        }

        .hero {
          background: var(--ink);
          color: var(--paper);
          padding-top: 88px;
          padding-bottom: 96px;
          position: relative;
        }
        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(236,231,218,0.05) 1px, transparent 1px);
          background-size: 3px 3px;
          pointer-events: none;
          opacity: 0.5;
        }
        .hero-inner {
          display: block;
          max-width: 740px;
          position: relative;
        }
        .eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--coral);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }
        .eyebrow::before {
          content: "";
          width: 26px; height: 1px;
          background: var(--coral);
        }
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(58px, 9vw, 108px);
          line-height: 0.88;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        .hero-name span { display: block; }
        .hero-name .outline {
          -webkit-text-stroke: 1.5px var(--paper);
          color: transparent;
        }
        .hero-role {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 19px;
          margin-top: 26px;
          color: var(--paper);
          opacity: 0.92;
          max-width: 46ch;
        }
        .hero-pitch {
          font-family: var(--font-body);
          font-size: 15.5px;
          line-height: 1.7;
          color: var(--paper);
          opacity: 0.62;
          margin-top: 18px;
          max-width: 52ch;
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }
        .btn {
          font-family: var(--font-mono);
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 22px;
          border-radius: 3px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: transform .18s ease, background .18s ease, color .18s ease, border-color .18s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-solid { background: var(--coral); color: var(--ink); }
        .btn-solid:hover { background: var(--paper); }
        .btn-outline { border-color: var(--line-on-ink); color: var(--paper); }
        .btn-outline:hover { border-color: var(--paper); }

        .hero-meta {
          display: flex;
          gap: 22px;
          margin-top: 40px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--paper);
          opacity: 0.55;
          flex-wrap: wrap;
        }
        .hero-meta span { display: flex; align-items: center; gap: 6px; }

        .sec-head {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 44px;
        }
        .sec-num {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--coral);
        }
        .sec-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 4.5vw, 46px);
          text-transform: uppercase;
          letter-spacing: 0.01em;
        }
        .sec-title.on-ink { color: var(--paper); }
        .sec-rule {
          flex: 1;
          height: 1px;
          background: var(--line-on-paper);
        }
        .sec-rule.on-ink { background: var(--line-on-ink); }

        .about { padding: 100px 0; }
        .about-grid { max-width: 680px; }
        .about-bio p {
          font-size: 17px;
          line-height: 1.8;
          opacity: 0.85;
          max-width: 62ch;
        }
        .about-bio p + p { margin-top: 18px; }
        .fact-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px 28px;
          border-top: 1px solid var(--line-on-paper);
          padding-top: 28px;
        }
        .fact-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.5;
          margin-bottom: 6px;
        }
        .fact-value { font-weight: 600; font-size: 15px; }
        .softskills { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 34px; }
        .soft-chip {
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: 0.03em;
          padding: 8px 14px;
          border: 1px solid var(--line-on-paper);
          border-radius: 999px;
          opacity: 0.75;
        }

        .skills { background: var(--ink); color: var(--paper); padding: 100px 0; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line-on-ink);
          border: 1px solid var(--line-on-ink);
        }
        .skill-card {
          background: var(--ink);
          padding: 32px 28px;
          transition: background .25s ease;
        }
        .skill-card:hover { background: var(--ink-soft); }
        .skill-card-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--coral);
          letter-spacing: 0.08em;
        }
        .skill-card-title {
          font-family: var(--font-display);
          font-size: 22px;
          text-transform: uppercase;
          margin-top: 10px;
          margin-bottom: 18px;
          letter-spacing: 0.01em;
        }
        .skill-card-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          font-family: var(--font-mono);
          font-size: 11.5px;
          padding: 6px 11px;
          border: 1px solid var(--line-on-ink);
          border-radius: 3px;
          opacity: 0.75;
        }

        .projects { padding: 100px 0; }
        .project-list { display: flex; flex-direction: column; border-top: 1px solid var(--line-on-paper); }
        .project-row {
          display: grid;
          grid-template-columns: 220px 1fr 200px;
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid var(--line-on-paper);
          align-items: start;
          transition: padding-left .25s ease;
        }
        .project-row:hover { padding-left: 10px; }
        .project-cmd {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--coral-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .project-cmd::before { content: '$ '; opacity: 0.6; }
        .project-title {
          font-family: var(--font-display);
          font-size: 24px;
          text-transform: uppercase;
          margin-bottom: 10px;
          letter-spacing: 0.005em;
        }
        .project-desc {
          font-size: 14.5px;
          line-height: 1.7;
          opacity: 0.7;
          max-width: 58ch;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .project-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          opacity: 0.55;
          border: 1px solid var(--line-on-paper);
          padding: 4px 9px;
          border-radius: 999px;
        }
        .project-lang {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-align: right;
          opacity: 0.45;
          justify-self: end;
        }

        .certs { background: var(--ink); color: var(--paper); padding: 80px 0; }
        .cert-row { display: flex; flex-wrap: wrap; gap: 16px; }
        .cert-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          padding: 14px 18px;
          border: 1px solid var(--line-on-ink);
          border-radius: 4px;
          background: var(--ink-soft);
        }
        .cert-chip .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--coral);
          flex-shrink: 0;
        }

        .contact {
          background: var(--coral);
          color: var(--ink);
          padding: 110px 0 90px;
          text-align: center;
        }
        .contact-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 20px;
          opacity: 0.75;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(42px, 7vw, 84px);
          text-transform: uppercase;
          line-height: 0.95;
        }
        .contact-sub {
          font-size: 17px;
          max-width: 46ch;
          margin: 22px auto 0;
          opacity: 0.85;
          line-height: 1.6;
        }
        .contact-links {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .contact-btn {
          font-family: var(--font-mono);
          font-size: 13.5px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid var(--ink);
          color: var(--ink);
          padding: 16px 26px;
          border-radius: 3px;
          transition: transform .18s ease, background .18s ease, color .18s ease;
        }
        .contact-btn:hover { transform: translateY(-2px); background: var(--ink); color: var(--paper); }

        .footer {
          background: var(--ink);
          color: var(--paper);
          padding: 34px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          opacity: 0.5;
          letter-spacing: 0.03em;
        }
        .footer-inner a:hover { opacity: 1; color: var(--coral); }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-toggle { display: block; }
          .mobile-menu.open { display: flex; }
          .fact-grid { grid-template-columns: 1fr 1fr; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
          .project-row { grid-template-columns: 1fr; gap: 8px; }
          .project-lang { text-align: left; justify-self: start; }
        }
        @media (max-width: 540px) {
          .wrap { padding-left: 20px; padding-right: 20px; }
          .skills-grid { grid-template-columns: 1fr; }
          .fact-grid { grid-template-columns: 1fr; }
          .hero { padding-top: 70px; padding-bottom: 70px; }
          .about, .skills, .projects { padding: 70px 0; }
        }
      `}</style>

      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="logo">
            <span className="logo-mark">TC</span>
            TARRAN CHAWLA
          </div>
          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <span className="status-chip">
              <span className="status-dot" />
              Open to work
            </span>
          </div>
          <button
            className="nav-toggle"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {navOpen && (
          <div className="mobile-menu open">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setNavOpen(false)}>
                {l.label}
              </a>
            ))}
            <span className="status-chip" style={{ marginTop: 10, width: 'fit-content' }}>
              <span className="status-dot" />
              Open to work
            </span>
          </div>
        )}
      </nav>

      <header className="hero" id="top">
        <div className="hero-grain" />
        <div className="wrap hero-inner">
          <div className="eyebrow">
            <Terminal size={13} /> Portfolio — Mumbai, IN
          </div>
          <h1 className="hero-name">
            <span>TARRAN</span>
            <span className="outline">CHAWLA</span>
          </h1>
          <p className="hero-role">
            Diploma Student, Computer Engineering — Developer, Designer & Video Editor
          </p>
          <p className="hero-pitch">
            Second-year computer engineering student who builds small, working tools in Python and Java, then makes them presentable — a poster in Photoshop, a reel in CapCut. Looking for an internship where code, design and editing all get to matter.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="mailto:tarranchawla@gmail.com">
              <Mail size={15} /> Email me
            </a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/tarran-chawla-780076359/" target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={13} /> Mumbai, Maharashtra, India</span>
            <span><Phone size={13} /> +91 70397 16277</span>
            <span>EN · HI · MR</span>
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title">About</h2>
            <span className="sec-rule" />
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-bio">
              <p>
                I'm a motivated, creative diploma computer engineering student (2nd year) at Viva Institute of Technology, Mumbai, with hands-on experience across Java, Python, Android development, graphic design and video editing.
              </p>
              <p>
                I like building real things end to end — write the logic, design how it looks, then cut something short to show it off. Currently looking for an internship or fresher role to keep growing all three at once.
              </p>
              <div className="fact-grid">
                <div>
                  <div className="fact-label">Education</div>
                  <div className="fact-value">Diploma, Computer Engineering — 2nd Year</div>
                </div>
                <div>
                  <div className="fact-label">Institute</div>
                  <div className="fact-value">Viva Institute of Technology, Mumbai</div>
                </div>
                <div>
                  <div className="fact-label">SSC</div>
                  <div className="fact-value">Maharashtra State Board · 2024 · 67%</div>
                </div>
                <div>
                  <div className="fact-label">Languages</div>
                  <div className="fact-value">English, Hindi, Marathi</div>
                </div>
              </div>
              <div className="softskills">
                {softSkills.map((s) => (
                  <span className="soft-chip" key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="sec-num" style={{ color: 'var(--coral)' }}>02</span>
            <h2 className="sec-title on-ink">Skills</h2>
            <span className="sec-rule on-ink" />
          </Reveal>
          <Reveal>
            <div className="skills-grid">
              {skillGroups.map((g) => (
                <div className="skill-card" key={g.tag}>
                  <div className="skill-card-tag">{g.tag}</div>
                  <div className="skill-card-title">{g.title}</div>
                  <div className="skill-card-items">
                    {g.items.map((it) => (
                      <span className="skill-tag" key={it}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="sec-num">03</span>
            <h2 className="sec-title">Projects</h2>
            <span className="sec-rule" />
          </Reveal>
          <div className="project-list">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="project-row">
                  <div className="project-cmd">{p.cmd}</div>
                  <div>
                    <div className="project-title">{p.title}</div>
                    <div className="project-desc">{p.desc}</div>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span className="project-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-lang">{p.lang}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="certs">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="sec-num" style={{ color: 'var(--coral)' }}>04</span>
            <h2 className="sec-title on-ink">Certifications</h2>
            <span className="sec-rule on-ink" />
          </Reveal>
          <Reveal>
            <div className="cert-row">
              {certifications.map((c) => (
                <div className="cert-chip" key={c}>
                  <span className="dot" />
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <Reveal className="contact-eyebrow">05 — Get in touch</Reveal>
          <Reveal>
            <h2 className="contact-title">Let's build<br />something.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="contact-sub">
              Open to internships, fresher roles and freelance design or edit work. Reply to a real email — no forms required.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="contact-links">
              <a className="contact-btn" href="mailto:tarranchawla@gmail.com">
                <Mail size={15} /> tarranchawla@gmail.com
              </a>
              <a className="contact-btn" href="tel:+917039716277">
                <Phone size={15} /> +91 70397 16277
              </a>
              <a className="contact-btn" href="https://www.linkedin.com/in/tarran-chawla-780076359/" target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>© 2026 Tarran Chawla — Mumbai, India</span>
          <a href="https://www.linkedin.com/in/tarran-chawla-780076359/" target="_blank" rel="noreferrer">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Github size={13} /> Built with React
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
