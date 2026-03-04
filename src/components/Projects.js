const projects = [
  {
    icon: '💬',
    name: 'Real-Time Chat App',
    desc: 'Application de messagerie instantanee avec notifications en temps reel.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    url: 'https://real-time-chat-app-nine-vert.vercel.app',
  },
  {
    icon: '🖼',
    name: 'BG Remover',
    desc: 'Outil de suppression d arriere-plan par intelligence artificielle.',
    stack: ['React', 'Remove.bg API', 'Tailwind'],
    url: 'https://bg-remover-mu-teal.vercel.app',
  },
  {
    icon: '📷',
    name: 'QR and Barcode Converter',
    desc: 'Generateur et lecteur de QR codes et codes-barres, export PNG et SVG.',
    stack: ['React', 'qrcode.react', 'ZXing'],
    url: 'https://qr-bar-code-converter-6ypr.vercel.app',
  },
  {
    icon: '✅',
    name: 'Todo List App',
    desc: 'Gestionnaire de taches avec categories, priorites et persistance locale.',
    stack: ['React', 'localStorage', 'CSS'],
    url: 'https://todo-list-app-drab-kappa.vercel.app',
  },
  {
    icon: '📝',
    name: 'Blog App',
    desc: 'Plateforme de blog full-stack avec creation articles et authentification.',
    stack: ['React', 'Node.js', 'MySQL', 'Express'],
    url: 'https://blog-app-five-mu-65.vercel.app',
  },
  {
    icon: '💰',
    name: 'Budget Tracker',
    desc: 'Application de suivi budgetaire avec graphiques et rapport mensuel.',
    stack: ['React', 'Chart.js', 'localStorage'],
    url: 'https://budget-tracker-alpha-two.vercel.app',
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
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="project-card">
              <div className="project-card-top">
                <span className="project-icon">{p.icon}</span>
                <span className="project-link-icon">&#8599;</span>
              </div>
              <div className="project-name">{p.name}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="stack-tag" key={s}>{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}