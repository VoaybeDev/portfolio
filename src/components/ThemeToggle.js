import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { currentTheme, applyTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  const panelStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 999,
  };

  const btnStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'var(--accent)',
    border: 'none',
    cursor: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    boxShadow: '0 0 20px rgba(0,0,0,0.4)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    marginLeft: 'auto',
  };

  const menuStyle = {
    position: 'absolute',
    bottom: '60px',
    right: '0',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    padding: '0.75rem',
    display: open ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '0.4rem',
    minWidth: '160px',
    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(12px)',
  };

  const labelStyle = {
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.6rem',
    color: 'var(--muted)',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    padding: '0.25rem 0.5rem',
    marginBottom: '0.25rem',
  };

  return (
    <div style={panelStyle}>
      <div style={menuStyle}>
        <div style={labelStyle}>Theme</div>
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => { applyTheme(theme); setOpen(false); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.5rem 0.75rem',
              background: currentTheme.id === theme.id ? 'rgba(255,255,255,0.05)' : 'transparent',
              border: currentTheme.id === theme.id ? '1px solid var(--accent)' : '1px solid transparent',
              borderRadius: '6px',
              color: currentTheme.id === theme.id ? 'var(--accent)' : 'var(--muted)',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.72rem',
              cursor: 'none',
              transition: 'all 0.2s',
              textAlign: 'left',
              width: '100%',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = currentTheme.id === theme.id ? 'rgba(255,255,255,0.05)' : 'transparent';
              e.currentTarget.style.color = currentTheme.id === theme.id ? 'var(--accent)' : 'var(--muted)';
            }}
          >
            <span style={{ fontSize: '1rem' }}>{theme.icon}</span>
            {theme.name}
            {currentTheme.id === theme.id && <span style={{ marginLeft: 'auto', fontSize: '0.6rem' }}>✓</span>}
          </button>
        ))}
      </div>
      <button
        style={btnStyle}
        onClick={() => setOpen(!open)}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1) rotate(20deg)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0,0,0,0.6)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,0,0,0.4)'; }}
        title="Changer le theme"
      >
        🎨
      </button>
    </div>
  );
}