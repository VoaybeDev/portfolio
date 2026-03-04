export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-num">01 /</span>
          <h2 className="section-title">À propos</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Je m'appelle <strong>RALAIJOMA Fanambinantsoa Jean Baptiste</strong>,
              développeur de 23 ans basé à Fianarantsoa, Madagascar. J'ai terminé
              ma Licence en développement d'applications à l'
              <strong>École de Management et d'Innovation Technologique (EMIT)</strong>.
            </p>
            <p>
              Je suis spécialisé dans la création d'applications web et mobiles
              avec un intérêt particulier pour les <strong>technologies modernes</strong>
              et les solutions innovantes. Fort d'une solide expérience en gestion
              de bases de données MySQL et en conception d'architectures de données.
            </p>
            <p>
              Je possède également des compétences en{' '}
              <strong>collecte de données sur le terrain</strong>, ce qui me permet
              d'avoir une approche complète du cycle de vie des données, de leur
              collecte à leur exploitation.
            </p>
          </div>

          <div className="info-card">
            {[
              { key: 'Nom',          val: 'Jean Baptiste Ralaijoma'                },
              { key: 'Âge',          val: '23 ans'                                 },
              { key: 'Localisation', val: 'Fianarantsoa, Madagascar'               },
              { key: 'Email',        val: 'mbinanafana1@gmail.com', isLink: true   },
              { key: 'Téléphone',    val: '+261 38 36 683 36'                       },
              { key: 'Disponibilité',val: '✓ Disponible', highlight: true          },
              { key: 'Langues',      val: 'FR · EN · MG'                           },
            ].map(r => (
              <div className="info-row" key={r.key}>
                <span className="info-key">{r.key}</span>
                {r.isLink ? (
                  <span className="info-val">
                    <a href={`mailto:${r.val}`}>{r.val}</a>
                  </span>
                ) : (
                  <span className={`info-val${r.highlight ? ' available' : ''}`}>
                    {r.val}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}