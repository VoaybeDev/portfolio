import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { currentTheme, applyTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      <div style={{
        position: 'absolute',
        bottom: '60px',
        right: '0',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '0.75rem',
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '0.35rem',
        minWidth: '170px',
        boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
        backdropFilter: 'blur(16px)',
        maxHeight: '460px',
        overflowY: 'auto',
      }}>
        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.2rem 0.5rem 0.5rem', borderBottom: '1px solid var(--border)', marginBottom: '0.25rem' }}>
          🎨 15 Themes
        </div>
        {themes.map((theme) => (
          <button key={theme.id} onClick={() => { applyTheme(theme); setOpen(false); }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 0.75rem',
            background: currentTheme.id === theme.id ? 'rgba(255,255,255,0.06)' : 'transparent',
            border: currentTheme.id === theme.id ? '1px solid var(--accent)' : '1px solid transparent',
            borderRadius: '6px',
            color: currentTheme.id === theme.id ? 'var(--accent)' : 'var(--muted)',
            fontFamily: theme.id === 'minecraft' ? 'Courier New, monospace' : 'Space Mono, monospace',
            fontSize: '0.72rem',
            cursor: 'none',
            transition: 'all 0.2s',
            textAlign: 'left',
            width: '100%',
          }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = currentTheme.id === theme.id ? 'rgba(255,255,255,0.06)' : 'transparent';
              e.currentTarget.style.color = currentTheme.id === theme.id ? 'var(--accent)' : 'var(--muted)';
            }}>
            <span style={{ fontSize: '0.95rem' }}>{theme.icon}</span>
            <span style={{ flex: 1 }}>{theme.name}</span>
            {theme.animated && <span style={{ fontSize: '0.5rem', background: 'rgba(110,240,200,0.15)', color: '#6ef0c8', padding: '0.1rem 0.3rem', borderRadius: '3px', letterSpacing: '0.05em' }}>LIVE</span>}
            {currentTheme.id === theme.id && <span style={{ fontSize: '0.65rem', color: 'var(--accent)' }}>✓</span>}
          </button>
        ))}
      </div>

      <button style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--accent)',
        border: 'none',
        cursor: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        marginLeft: 'auto',
      }}
        onClick={() => setOpen(!open)}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.12) rotate(20deg)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.6)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)'; }}
        title="Changer le theme">
        🎨
      </button>
    </div>
  );
}