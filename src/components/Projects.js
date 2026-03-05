const projects = [
  {
    icon: '💬',
    name: 'Real-Time Chat App',
    desc: 'Application de messagerie instantanee avec notifications en temps reel et authentification securisee.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    url: 'https://real-time-chat-app-nine-vert.vercel.app',
    screenshot: '/screenshots/chat.png',
  },
  {
    icon: '🖼',
    name: 'BG Remover',
    desc: 'Outil de suppression d arriere-plan par intelligence artificielle, export PNG transparent.',
    stack: ['React', 'Remove.bg API', 'Tailwind'],
    url: 'https://bg-remover-mu-teal.vercel.app',
    screenshot: '/screenshots/bg-remover.png',
  },
  {
    icon: '📷',
    name: 'QR and Barcode Converter',
    desc: 'Generateur et lecteur de QR codes et codes-barres, export PNG et SVG, scan via camera.',
    stack: ['React', 'qrcode.react', 'ZXing'],
    url: 'https://qr-bar-code-converter-6ypr.vercel.app',
    screenshot: '/screenshots/qr.png',
  },
  {
    icon: '✅',
    name: 'Todo List App',
    desc: 'Gestionnaire de taches avec categories, priorites, filtres et persistance locale.',
    stack: ['React', 'localStorage', 'CSS'],
    url: 'https://todo-list-app-drab-kappa.vercel.app',
    screenshot: '/screenshots/todo.png',
  },
  {
    icon: '📝',
    name: 'Blog App',
    desc: 'Plateforme de blog full-stack avec creation articles, authentification et commentaires.',
    stack: ['React', 'Node.js', 'MySQL', 'Express'],
    url: 'https://blog-app-five-mu-65.vercel.app',
    screenshot: '/screenshots/blog.png',
  },
  {
    icon: '💰',
    name: 'Budget Tracker',
    desc: 'Suivi budgetaire avec graphiques interactifs, categories de depenses et rapport mensuel.',
    stack: ['React', 'Chart.js', 'localStorage'],
    url: 'https://budget-tracker-alpha-two.vercel.app',
    screenshot: '/screenshots/budget.png',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-num">04 /</span>
          <h2 className="section-title">Projets</h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="project-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Screenshot */}
              <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={p.screenshot}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7) 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Icon flottant */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '8px',
                  padding: '0.3rem 0.5rem',
                  fontSize: '1.1rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {p.icon}
                </div>
                {/* Lien flottant */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '6px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.65rem',
                  fontFamily: 'Space Mono, monospace',
                  color: 'var(--accent)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  &#8599; Demo
                </div>
              </div>

              {/* Contenu */}
              <div style={{ padding: '1.25rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                <div className="project-name">{p.name}</div>
                <p className="project-desc" style={{ margin: 0 }}>{p.desc}</p>
                <div className="project-stack" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
                  {p.stack.map((s) => (
                    <span className="stack-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}