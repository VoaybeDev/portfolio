import { useEffect, useState } from 'react';

const links = [
  { href: '#about',      label: 'A propos'    },
  { href: '#skills',     label: 'Competences' },
  { href: '#experience', label: 'Experience'  },
  { href: '#projects',   label: 'Projets'     },
  { href: '#contact',    label: 'Contact'     },
];

export default function Navbar() {
  const [active,   setActive]   = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let cur = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="nav-logo">JB.dev</a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.replace('#', '') ? 'active' : ''}
            >
              {l.label}
            </a>
          ))}

          {/* ── Bouton CV ── */}
          <a
            href="/cv"
            target="_blank"
            rel="noreferrer"
            className="nav-cv-btn"
          >
            Mon CV
          </a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* ── Menu mobile ── */}
      <div className={'nav-mobile' + (menuOpen ? ' open' : '')}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={handleLink}
            className={active === l.href.replace('#', '') ? 'active' : ''}
          >
            {l.label}
          </a>
        ))}

        {/* Lien CV aussi dans le menu mobile */}
        <a
          href="/cv"
          target="_blank"
          rel="noreferrer"
          className="nav-cv-btn"
          onClick={handleLink}
        >
          Mon CV
        </a>
      </div>
    </>
  );
}