export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-num">01 /</span>
          <h2 className="section-title">A propos</h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Développeur Full Stack de <strong>23 ans</strong> basé à Fianarantsoa, Madagascar,
              diplômé en développement d'applications de l'
              <strong>École de Management et d'Innovation Technologique (EMIT Fianarantsoa)</strong>.
            </p>
            <p>
              Je conçois des applications web et mobiles performantes en m'appuyant
              sur des <strong>technologies modernes</strong> - React, Next.js, Laravel -
              avec une expertise solide en bases de données relationnelles MySQL
              et en architecture logicielle.
            </p>
            <p>
              Au fil de mes projets, j'ai développé une maîtrise du cycle complet
              de développement : de la conception d'interfaces avec{' '}
              <strong>React et Tailwind CSS</strong>, au développement d'API robustes
              avec <strong>Laravel et Node.js</strong>, jusqu'au déploiement via{' '}
              <strong>Docker et Vercel</strong>.
            </p>
            <p>
              Mon parcours inclut également une expérience terrain en{' '}
              <strong>collecte et traitement de données</strong>,
              me conférant une vision bout-en-bout du cycle de vie de l'information,
              de sa capture à son exploitation.
            </p>
          </div>
          <div className="info-card">
            {[
              { key: 'Nom complet',   val: 'RALAIJOMA Fanambinantsoa Jean Baptiste' },
              { key: 'Adresse',       val: 'Ivory avaratra, Fianarantsoa' },
              { key: 'Email',         val: 'mbinanafana1@gmail.com', isLink: true },
              { key: 'Telephone',     val: '+261 38 36 683 36' },
              { key: 'Disponibilite', val: '✓ Disponible', highlight: true },
              { key: 'Langues',       val: '🇫🇷 FR · 🇬🇧 EN · 🇲🇬 MG' },
            ].map((r) => (
              <div className="info-row" key={r.key}>
                <span className="info-key">{r.key}</span>
                {r.isLink ? (
                  <span className="info-val">
                    <a href={'mailto:' + r.val}>{r.val}</a>
                  </span>
                ) : (
                  <span className={'info-val' + (r.highlight ? ' available' : '')}>{r.val}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}