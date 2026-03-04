import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'A propos' },
  { href: '#skills', label: 'Competences' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

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

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">JB.dev</a>
      <div className="nav-links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className={active === l.href.replace('#', '') ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}