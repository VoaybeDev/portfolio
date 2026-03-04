import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = [
  {
    id: 'cyber',
    name: 'Cyber',
    icon: '⚡',
    vars: {
      '--bg': '#0a0a0f',
      '--surface': '#12121a',
      '--surface2': '#1a1a26',
      '--accent': '#6ef0c8',
      '--accent2': '#7b6ef0',
      '--text': '#e8e8f0',
      '--muted': '#666688',
      '--border': 'rgba(110,240,200,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(110,240,200,0.08), transparent 60%), radial-gradient(ellipse at bottom left, rgba(123,110,240,0.07), transparent 60%)',
      '--card-bg': '#12121a',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'aurora',
    name: 'Aurora',
    icon: '🌌',
    vars: {
      '--bg': '#050510',
      '--surface': '#0d0d1f',
      '--surface2': '#13132b',
      '--accent': '#a78bfa',
      '--accent2': '#f472b6',
      '--text': '#ede9fe',
      '--muted': '#6b6b9a',
      '--border': 'rgba(167,139,250,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top, rgba(167,139,250,0.12), transparent 50%), radial-gradient(ellipse at bottom right, rgba(244,114,182,0.08), transparent 50%)',
      '--card-bg': '#0d0d1f',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    icon: '🌅',
    vars: {
      '--bg': '#0f0a0a',
      '--surface': '#1a1010',
      '--surface2': '#261818',
      '--accent': '#fb923c',
      '--accent2': '#f43f5e',
      '--text': '#fef3ee',
      '--muted': '#886666',
      '--border': 'rgba(251,146,60,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(251,146,60,0.1), transparent 50%), radial-gradient(ellipse at bottom left, rgba(244,63,94,0.08), transparent 50%)',
      '--card-bg': '#1a1010',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    icon: '🌊',
    vars: {
      '--bg': '#020f1a',
      '--surface': '#041929',
      '--surface2': '#062438',
      '--accent': '#38bdf8',
      '--accent2': '#0ea5e9',
      '--text': '#e0f2fe',
      '--muted': '#4a7a99',
      '--border': 'rgba(56,189,248,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top, rgba(56,189,248,0.1), transparent 50%), radial-gradient(ellipse at bottom, rgba(14,165,233,0.07), transparent 50%)',
      '--card-bg': '#041929',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'forest',
    name: 'Forest',
    icon: '🌿',
    vars: {
      '--bg': '#030f07',
      '--surface': '#071a0d',
      '--surface2': '#0c2614',
      '--accent': '#4ade80',
      '--accent2': '#86efac',
      '--text': '#dcfce7',
      '--muted': '#4a7a5a',
      '--border': 'rgba(74,222,128,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(74,222,128,0.09), transparent 50%), radial-gradient(ellipse at bottom left, rgba(134,239,172,0.06), transparent 50%)',
      '--card-bg': '#071a0d',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'light',
    name: 'Light',
    icon: '☀️',
    vars: {
      '--bg': '#f8fafc',
      '--surface': '#ffffff',
      '--surface2': '#f1f5f9',
      '--accent': '#6366f1',
      '--accent2': '#8b5cf6',
      '--text': '#0f172a',
      '--muted': '#64748b',
      '--border': 'rgba(99,102,241,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(99,102,241,0.08), transparent 50%), radial-gradient(ellipse at bottom left, rgba(139,92,246,0.06), transparent 50%)',
      '--card-bg': '#ffffff',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'gold',
    name: 'Gold',
    icon: '✨',
    vars: {
      '--bg': '#0a0800',
      '--surface': '#1a1400',
      '--surface2': '#261e00',
      '--accent': '#fbbf24',
      '--accent2': '#f59e0b',
      '--text': '#fef9e7',
      '--muted': '#8a7a40',
      '--border': 'rgba(251,191,36,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top, rgba(251,191,36,0.1), transparent 50%), radial-gradient(ellipse at bottom right, rgba(245,158,11,0.07), transparent 50%)',
      '--card-bg': '#1a1400',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
  {
    id: 'neon',
    name: 'Neon',
    icon: '🔮',
    vars: {
      '--bg': '#000000',
      '--surface': '#0a0a0a',
      '--surface2': '#141414',
      '--accent': '#ff00ff',
      '--accent2': '#00ffff',
      '--text': '#ffffff',
      '--muted': '#666666',
      '--border': 'rgba(255,0,255,0.2)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(255,0,255,0.1), transparent 50%), radial-gradient(ellipse at bottom left, rgba(0,255,255,0.08), transparent 50%)',
      '--card-bg': '#0a0a0a',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
  },
];

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, applyTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}