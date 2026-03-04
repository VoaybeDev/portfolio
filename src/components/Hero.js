export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-circle c1" />
      <div className="hero-bg-circle c2" />

      <div className="hero-content">
        <div className="hero-tag">Développeur Full Stack</div>
        <h1 className="hero-name">
          Jean Baptiste<br /><span>Ralaijoma</span>
        </h1>
        <p className="hero-desc">
          Passionné par la création d'applications web & mobiles modernes.
          Spécialisé en React, Next.js, Laravel et bases de données relationnelles.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">Voir mes projets →</a>
          <a href="#contact"  className="btn btn-outline">Me contacter</a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>

      <div className="hero-stats">
        {[
          { num: '3+', label: "Ans d'expérience" },
          { num: '6+', label: 'Projets déployés'  },
          { num: '3',  label: 'Langues parlées'   },
        ].map(s => (
          <div className="stat-item" key={s.label}>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}