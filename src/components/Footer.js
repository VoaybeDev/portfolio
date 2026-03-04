export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 <span>Jean Baptiste Ralaijoma</span></p>
      <a href="https://github.com/VoaybeDev" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--muted)', fontFamily: 'Space Mono', fontSize: '0.7rem', transition: 'color 0.2s' }}
        onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
        onMouseOut={(e) => { e.currentTarget.style.color = 'var(--muted)'; }}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="18" height="18" style={{ filter: 'invert(1)', opacity: '0.7' }} />
        github.com/VoaybeDev
      </a>
      <p>Fianarantsoa, Madagascar 🇲🇬</p>
    </footer>
  );
}