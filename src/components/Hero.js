export default function Hero() {
  const cvStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.75rem',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textDecoration: 'none',
    borderRadius: '4px',
    border: '1px solid rgba(110,240,200,0.4)',
    color: 'var(--accent)',
    background: 'rgba(110,240,200,0.05)',
    transition: 'all 0.25s',
    justifyContent: 'center',
  };

  const handleOver = (e) => {
    e.currentTarget.style.background   = 'rgba(110,240,200,0.12)';
    e.currentTarget.style.borderColor  = 'var(--accent)';
    e.currentTarget.style.transform    = 'translateY(-2px)';
    e.currentTarget.style.boxShadow    = '0 8px 24px rgba(110,240,200,0.15)';
  };

  const handleOut = (e) => {
    e.currentTarget.style.background   = 'rgba(110,240,200,0.05)';
    e.currentTarget.style.borderColor  = 'rgba(110,240,200,0.4)';
    e.currentTarget.style.transform    = 'translateY(0)';
    e.currentTarget.style.boxShadow    = 'none';
  };

  const stats = [
    { num: '23',  label: 'Ans'              },
    { num: '6+',  label: 'Projets deployes' },
    { num: '3',   label: 'Langues parlees'  },
  ];

  return (
    <section id="hero">
      <div className="hero-bg-circle c1" />
      <div className="hero-bg-circle c2" />
      <div className="hero-content">
        <div className="hero-tag">Developpeur Full Stack</div>
        <h1 className="hero-name">
          Fanambinantsoa<br /><span>Jean Baptiste</span>
        </h1>
        <p className="hero-desc">
          Passionne par la creation d'applications web et mobiles modernes.
          Specialise en React, Next.js, Laravel et bases de donnees relationnelles.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Voir mes projets →</a>
          <a href="#contact"  className="btn btn-outline">Me contacter</a>

          {/* ── Bouton CV → ouvre la page /cv (nouveau CV neon) ── */}
          <a
            href="/cv"
            target="_blank"
            rel="noreferrer"
            style={cvStyle}
            onMouseOver={handleOver}
            onMouseOut={handleOut}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Telecharger CV
          </a>
        </div>

        {/* Stats visibles uniquement sur mobile */}
        <div className="hero-stats-mobile">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>

      {/* Stats visibles uniquement sur desktop */}
      <div className="hero-stats">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}