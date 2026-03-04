import { useEffect, useRef } from 'react';

const experiences = [
  {
    period: '2025',
    title: 'Real-Time Chat App',
    company: 'Deploye sur Vercel · Full Stack',
    url: 'https://real-time-chat-app-nine-vert.vercel.app',
    tasks: [
      'Messagerie instantanee avec WebSocket et Socket.io',
      'Authentification securisee JWT et gestion des salons',
      'Interface responsive avec notifications en temps reel',
      'Deploiement sur Vercel avec CI/CD via GitHub',
    ],
  },
  {
    period: '2025',
    title: 'BG Remover',
    company: 'Deploye sur Vercel · Frontend',
    url: 'https://bg-remover-mu-teal.vercel.app',
    tasks: [
      'Suppression d arriere-plan par intelligence artificielle',
      'Integration de Remove.bg API pour le traitement image',
      'Export PNG transparent et interface drag and drop',
      'UI moderne avec Tailwind CSS',
    ],
  },
  {
    period: '2025',
    title: 'QR and Barcode Converter',
    company: 'Deploye sur Vercel · Frontend',
    url: 'https://qr-bar-code-converter-6ypr.vercel.app',
    tasks: [
      'Generation de QR codes et codes-barres personnalises',
      'Export en format PNG et SVG',
      'Scan via camera avec decodage en temps reel',
      'Interface intuitive et responsive',
    ],
  },
  {
    period: '2025',
    title: 'Todo List App',
    company: 'Deploye sur Vercel · Frontend',
    url: 'https://todo-list-app-drab-kappa.vercel.app',
    tasks: [
      'Gestion des taches avec categories et priorites',
      'Filtres avances et recherche instantanee',
      'Persistance des donnees avec localStorage',
      'Design moderne avec animations fluides',
    ],
  },
  {
    period: '2025',
    title: 'Blog App',
    company: 'Deploye sur Vercel · Full Stack',
    url: 'https://blog-app-five-mu-65.vercel.app',
    tasks: [
      'CRUD complet pour la creation et gestion d articles',
      'Authentification utilisateur et gestion des roles',
      'Base de donnees MySQL avec requetes optimisees',
      'UI moderne et responsive avec React',
    ],
  },
  {
    period: '2025',
    title: 'Budget Tracker',
    company: 'Deploye sur Vercel · Frontend',
    url: 'https://budget-tracker-alpha-two.vercel.app',
    tasks: [
      'Suivi des revenus et depenses par categories',
      'Graphiques interactifs avec Chart.js',
      'Rapport mensuel et analyse budgetaire',
      'Persistance locale et interface responsive',
    ],
  },
];

export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience">
      <div className="section-wrapper">
        <div className="section-header">
          <span className="section-num">03 /</span>
          <h2 className="section-title">Projets GitHub</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item" ref={(el) => (itemsRef.current[i] = el)}>
              <div className="exp-dot" />
              <div className="exp-period">{exp.period}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="exp-title">{exp.title}</div>
                <a href={exp.url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontSize: '0.75rem', fontFamily: 'Space Mono', textDecoration: 'none' }}>&#8599; voir</a>
              </div>
              <div className="exp-company">{exp.company}</div>
              <ul className="exp-tasks">
                {exp.tasks.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}