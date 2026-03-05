import { useRef } from 'react';
import './CV.css';

const projects = [
  {
    title: 'Real-Time Chat App',
    desc:  'Messagerie instantanée avec notifications temps réel et authentification sécurisée.',
    chips: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    year:  '2024',
  },
  {
    title: 'QR & Barcode Converter',
    desc:  'Générateur/lecteur QR codes & codes-barres, export PNG/SVG, scan caméra.',
    chips: ['React', 'qrcode.react', 'ZXing'],
    year:  '2025',
  },
  {
    title: 'Blog App Full Stack',
    desc:  "Plateforme de blog avec création d'articles, authentification et commentaires.",
    chips: ['React', 'Node.js', 'MySQL', 'Express'],
    year:  '2025',
  },
  {
    title: 'Budget Tracker',
    desc:  'Suivi budgétaire avec graphiques interactifs Chart.js et rapport mensuel.',
    chips: ['React', 'Chart.js', 'localStorage'],
    year:  '2025',
  },
  {
    title: 'Todo List App',
    desc:  'Gestionnaire de tâches avec catégories, priorités et filtres avancés.',
    chips: ['React', 'localStorage', 'CSS'],
    year:  '2025',
  },
  {
    title: 'BG Remover — AI Tool',
    desc:  "Suppression d'arrière-plan par IA, export PNG transparent via Remove.bg API.",
    chips: ['React', 'Remove.bg API', 'Tailwind'],
    year:  '2026',
  },
];

const frontendSkills = [
  { name: 'React / Next.js', pct: 90 },
  { name: 'Tailwind CSS',    pct: 88 },
  { name: 'Vue.js',          pct: 75 },
];

const backendSkills = [
  { name: 'Node.js / Express', pct: 82 },
  { name: 'PHP / Laravel',     pct: 78 },
  { name: 'MySQL / MongoDB',   pct: 85 },
];

const tools    = ['Git / GitHub', 'Docker', 'Vercel', 'Figma', 'Android', 'VS Code', 'Hugging Face'];
const toolsHi  = ['Git / GitHub', 'Docker', 'Vercel'];

const languages = [
  { lang: 'Malagasy', level: 'NATIF'   },
  { lang: 'Français', level: 'COURANT' },
  { lang: 'Anglais',  level: 'COURANT' },
];

export default function CV() {
  const cvRef = useRef();

  const handleDownload = () => window.print();

  return (
    <div className="cv-page">

      {/* ── TOP BAR (cachée à l'impression) ── */}
      <div className="cv-topbar">
        <a href="/" className="cv-back">← Retour au portfolio</a>
        <span className="cv-topbar-title">CV — RALAIJOMA Fanambinantsoa</span>
        <button className="cv-download-btn" onClick={handleDownload}>
          ⬇ Télécharger PDF
        </button>
      </div>

      {/* ── CONTENU A4 — structure identique au HTML ── */}
      <div className="cv-a4" ref={cvRef}>

        {/* HEADER */}
        <div className="header">
          <div className="h-left">
            <div className="pre">Full Stack Developer</div>
            <h1 className="name">
              FANAMBINANTSOA<br />
              <span className="line2">RALAIJOMA</span>
            </h1>
            <div className="sub">Jean Baptiste · React · Node.js · Laravel · Docker · Vercel</div>
          </div>

          <div className="h-right">
            <div className="avail"><span className="pulse" />Disponible</div>
            <div className="ci"><span className="dot">◆</span><span>+261 38 36 683 36</span></div>
            <div className="ci"><span className="dot">◆</span><a href="mailto:mbinanafana1@gmail.com">mbinanafana1@gmail.com</a></div>
            <div className="ci"><span className="dot">◆</span><span>Fianarantsoa, Madagascar</span></div>
            <div className="ci"><span className="dot">◆</span><a href="https://voaybedev.vercel.app" target="_blank" rel="noreferrer">voaybedev.vercel.app</a></div>
          </div>
        </div>

        {/* BODY GRID */}
        <div className="body-grid">

          {/* ── COLONNE GAUCHE ── */}
          <div className="left-col">

            {/* Profil */}
            <div className="section">
              <div className="sec-hd">
                <span className="sec-num">01 /</span>
                <span className="sec-tag">Profil</span>
                <div className="sec-line" />
              </div>
              <div className="profile-box">
                Développeur Full Stack de 23 ans, diplômé à l'EMIT Fianarantsoa.
                Je conçois des applications web et mobiles performantes avec React, Next.js,
                Laravel et Node.js. Maîtrise complète du cycle de développement,
                du design à la mise en production via Docker &amp; Vercel.
              </div>
            </div>

            {/* Projets */}
            <div className="section">
              <div className="sec-hd">
                <span className="sec-num">02 /</span>
                <span className="sec-tag">Projets GitHub</span>
                <div className="sec-line" />
              </div>
              <div className="proj-list">
                {projects.map((p) => (
                  <div className="proj-item" key={p.title}>
                    <div>
                      <div className="proj-title">{p.title}</div>
                      <div className="proj-desc">{p.desc}</div>
                      <div className="proj-chips">
                        {p.chips.map((c) => (
                          <span className="chip" key={c}>{c}</span>
                        ))}
                      </div>
                    </div>
                    <span className="proj-year">{p.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── COLONNE DROITE ── */}
          <div className="right-col">

            {/* Frontend */}
            <div className="r-card">
              <div className="r-label">Frontend</div>
              {frontendSkills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div className="skill-top">
                    <span className="skill-nm">{s.name}</span>
                    <span className="skill-pc">{s.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Backend */}
            <div className="r-card">
              <div className="r-label">Backend &amp; DB</div>
              {backendSkills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div className="skill-top">
                    <span className="skill-nm">{s.name}</span>
                    <span className="skill-pc">{s.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Outils */}
            <div className="r-card">
              <div className="r-label">Outils &amp; DevOps</div>
              <div className="tool-grid">
                {tools.map((t) => (
                  <span className={`tool${toolsHi.includes(t) ? ' hi' : ''}`} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="r-card">
              <div className="r-label">Langues</div>
              {languages.map((l) => (
                <div className="lang-row" key={l.lang}>
                  <span>{l.lang}</span>
                  <span className="llvl">{l.level}</span>
                </div>
              ))}
            </div>

            {/* Formation */}
            <div className="edu-card">
              <div className="edu-deg">Licence — Développement d'Applications Informatiques</div>
              <div className="edu-school">EMIT Fianarantsoa</div>
              <div className="edu-date">2021 — 2024 · Madagascar</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}