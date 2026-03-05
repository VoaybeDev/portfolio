import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const injectAnimation = (css) => {
  const existing = document.getElementById('theme-animations');
  if (existing) existing.remove();
  const style = document.createElement('style');
  style.id = 'theme-animations';
  style.innerHTML = css;
  document.head.appendChild(style);
};

export const themes = [
  // 1
  {
    id: 'cyber',
    name: 'Cyber',
    icon: '⚡',
    animated: false,
    vars: {
      '--bg': '#0a0a0f',
      '--surface': '#12121a',
      '--surface2': '#1a1a26',
      '--accent': '#6ef0c8',
      '--accent2': '#7b6ef0',
      '--text': '#e8e8f0',
      '--muted': '#666688',
      '--border': 'rgba(110,240,200,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(110,240,200,0.08), transparent 60%)',
      '--card-bg': '#12121a',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#0a0a0f',
  },
  // 2
  {
    id: 'aurora',
    name: 'Aurora',
    icon: '🌌',
    animated: false,
    vars: {
      '--bg': '#050510',
      '--surface': '#0d0d1f',
      '--surface2': '#13132b',
      '--accent': '#a78bfa',
      '--accent2': '#f472b6',
      '--text': '#ede9fe',
      '--muted': '#6b6b9a',
      '--border': 'rgba(167,139,250,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top, rgba(167,139,250,0.12), transparent 50%)',
      '--card-bg': '#0d0d1f',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#050510',
  },
  // 3
  {
    id: 'sunset',
    name: 'Sunset',
    icon: '🌅',
    animated: false,
    vars: {
      '--bg': '#0f0a0a',
      '--surface': '#1a1010',
      '--surface2': '#261818',
      '--accent': '#fb923c',
      '--accent2': '#f43f5e',
      '--text': '#fef3ee',
      '--muted': '#886666',
      '--border': 'rgba(251,146,60,0.15)',
      '--hero-bg': 'linear-gradient(135deg, rgba(251,146,60,0.1), rgba(244,63,94,0.08))',
      '--card-bg': '#1a1010',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#0f0a0a',
  },
  // 4
  {
    id: 'ocean',
    name: 'Ocean',
    icon: '🌊',
    animated: false,
    vars: {
      '--bg': '#020f1a',
      '--surface': '#041929',
      '--surface2': '#062438',
      '--accent': '#38bdf8',
      '--accent2': '#0ea5e9',
      '--text': '#e0f2fe',
      '--muted': '#4a7a99',
      '--border': 'rgba(56,189,248,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top, rgba(56,189,248,0.1), transparent 50%)',
      '--card-bg': '#041929',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#020f1a',
  },
  // 5
  {
    id: 'forest',
    name: 'Forest',
    icon: '🌿',
    animated: false,
    vars: {
      '--bg': '#030f07',
      '--surface': '#071a0d',
      '--surface2': '#0c2614',
      '--accent': '#4ade80',
      '--accent2': '#86efac',
      '--text': '#dcfce7',
      '--muted': '#4a7a5a',
      '--border': 'rgba(74,222,128,0.15)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(74,222,128,0.09), transparent 50%)',
      '--card-bg': '#071a0d',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#030f07',
  },
  // 6
  {
    id: 'light',
    name: 'Light',
    icon: '☀️',
    animated: false,
    vars: {
      '--bg': '#f8fafc',
      '--surface': '#ffffff',
      '--surface2': '#f1f5f9',
      '--accent': '#6366f1',
      '--accent2': '#8b5cf6',
      '--text': '#0f172a',
      '--muted': '#64748b',
      '--border': 'rgba(99,102,241,0.15)',
      '--hero-bg': 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.06))',
      '--card-bg': '#ffffff',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#f8fafc',
  },
  // 7
  {
    id: 'gold',
    name: 'Gold',
    icon: '✨',
    animated: false,
    vars: {
      '--bg': '#0a0800',
      '--surface': '#1a1400',
      '--surface2': '#261e00',
      '--accent': '#fbbf24',
      '--accent2': '#f59e0b',
      '--text': '#fef9e7',
      '--muted': '#8a7a40',
      '--border': 'rgba(251,191,36,0.15)',
      '--hero-bg': 'linear-gradient(135deg, rgba(251,191,36,0.1), rgba(245,158,11,0.07))',
      '--card-bg': '#1a1400',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#0a0800',
  },
  // 8
  {
    id: 'neon',
    name: 'Neon',
    icon: '🔮',
    animated: false,
    vars: {
      '--bg': '#000000',
      '--surface': '#0a0a0a',
      '--surface2': '#141414',
      '--accent': '#ff00ff',
      '--accent2': '#00ffff',
      '--text': '#ffffff',
      '--muted': '#666666',
      '--border': 'rgba(255,0,255,0.2)',
      '--hero-bg': 'radial-gradient(ellipse at top right, rgba(255,0,255,0.1), transparent 50%)',
      '--card-bg': '#0a0a0a',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#000000',
  },
  // 9
  {
    id: 'galaxy',
    name: 'Galaxy',
    icon: '🪐',
    animated: false,
    vars: {
      '--bg': 'linear-gradient(135deg, #0d0221 0%, #1a0533 30%, #0a1628 60%, #000d1a 100%)',
      '--surface': 'rgba(255,255,255,0.04)',
      '--surface2': 'rgba(255,255,255,0.07)',
      '--accent': '#e879f9',
      '--accent2': '#818cf8',
      '--text': '#f0e6ff',
      '--muted': '#7c6b9a',
      '--border': 'rgba(232,121,249,0.18)',
      '--hero-bg': 'linear-gradient(135deg, rgba(232,121,249,0.12), rgba(129,140,248,0.08))',
      '--card-bg': 'rgba(255,255,255,0.04)',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: 'linear-gradient(135deg, #0d0221 0%, #1a0533 30%, #0a1628 60%, #000d1a 100%)',
  },
  // 10
  {
    id: 'rose',
    name: 'Rose Gold',
    icon: '🌸',
    animated: false,
    vars: {
      '--bg': 'linear-gradient(160deg, #1a0a12 0%, #2d1020 40%, #1a0a18 70%, #0f0a14 100%)',
      '--surface': 'rgba(255,182,193,0.06)',
      '--surface2': 'rgba(255,182,193,0.1)',
      '--accent': '#fb7185',
      '--accent2': '#f9a8d4',
      '--text': '#fce7f3',
      '--muted': '#9d6b7a',
      '--border': 'rgba(251,113,133,0.18)',
      '--hero-bg': 'linear-gradient(135deg, rgba(251,113,133,0.12), rgba(249,168,212,0.07))',
      '--card-bg': 'rgba(255,182,193,0.06)',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: 'linear-gradient(160deg, #1a0a12 0%, #2d1020 40%, #1a0a18 70%, #0f0a14 100%)',
  },
  // 11
  {
    id: 'minecraft',
    name: 'Minecraft',
    icon: '⛏️',
    animated: false,
    vars: {
      '--bg': '#1a1a1a',
      '--surface': '#2d2d2d',
      '--surface2': '#3d3d3d',
      '--accent': '#5db85d',
      '--accent2': '#7ec87e',
      '--text': '#f0f0f0',
      '--muted': '#888888',
      '--border': 'rgba(93,184,93,0.4)',
      '--hero-bg': 'linear-gradient(180deg, #87ceeb 0%, #b0e0ff 30%, #5db85d 60%, #4a7c4a 100%)',
      '--card-bg': '#2d2d2d',
      '--font-main': "'Courier New', monospace",
      '--font-mono': "'Courier New', monospace",
    },
    bodyBg: '#1a1a1a',
  },
  // 12 — NOUVEAU animé
  {
    id: 'lava',
    name: 'Lava',
    icon: '🔥',
    animated: true,
    animationCSS: `
      @keyframes lavaFlow {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      body {
        background: linear-gradient(-45deg, #1a0000, #3d0a00, #7c1a00, #c0392b, #6b0000, #1a0000) !important;
        background-size: 400% 400% !important;
        animation: lavaFlow 6s ease infinite !important;
      }
    `,
    vars: {
      '--bg': '#1a0000',
      '--surface': 'rgba(255,60,0,0.08)',
      '--surface2': 'rgba(255,60,0,0.13)',
      '--accent': '#ff4500',
      '--accent2': '#ff8c00',
      '--text': '#fff5f0',
      '--muted': '#9a5540',
      '--border': 'rgba(255,69,0,0.25)',
      '--hero-bg': 'linear-gradient(135deg, rgba(255,69,0,0.15), rgba(255,140,0,0.08))',
      '--card-bg': 'rgba(255,60,0,0.08)',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#1a0000',
  },
  // 13 — NOUVEAU animé
  {
    id: 'prism',
    name: 'Prism',
    icon: '🌈',
    animated: true,
    animationCSS: `
      @keyframes prismShift {
        0%   { background-position: 0% 50%; }
        25%  { background-position: 50% 0%; }
        50%  { background-position: 100% 50%; }
        75%  { background-position: 50% 100%; }
        100% { background-position: 0% 50%; }
      }
      body {
        background: linear-gradient(120deg, #0a001a, #001a0a, #1a000a, #000a1a, #1a1a00, #0a001a) !important;
        background-size: 500% 500% !important;
        animation: prismShift 8s ease infinite !important;
      }
    `,
    vars: {
      '--bg': '#0a001a',
      '--surface': 'rgba(255,255,255,0.05)',
      '--surface2': 'rgba(255,255,255,0.09)',
      '--accent': '#a0ff80',
      '--accent2': '#ff80c0',
      '--text': '#ffffff',
      '--muted': '#8888aa',
      '--border': 'rgba(160,255,128,0.2)',
      '--hero-bg': 'linear-gradient(135deg, rgba(160,255,128,0.1), rgba(255,128,192,0.08))',
      '--card-bg': 'rgba(255,255,255,0.05)',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#0a001a',
  },
  // 14 — NOUVEAU animé
  {
    id: 'arctic',
    name: 'Arctic',
    icon: '🧊',
    animated: true,
    animationCSS: `
      @keyframes arcticPulse {
        0%   { background-position: 0% 0%; }
        50%  { background-position: 100% 100%; }
        100% { background-position: 0% 0%; }
      }
      body {
        background: linear-gradient(145deg, #000814, #001528, #002244, #003366, #001a3a, #000814) !important;
        background-size: 400% 400% !important;
        animation: arcticPulse 7s ease infinite !important;
      }
    `,
    vars: {
      '--bg': '#000814',
      '--surface': 'rgba(200,240,255,0.05)',
      '--surface2': 'rgba(200,240,255,0.09)',
      '--accent': '#7dd3fc',
      '--accent2': '#bae6fd',
      '--text': '#f0f9ff',
      '--muted': '#4a7a99',
      '--border': 'rgba(125,211,252,0.2)',
      '--hero-bg': 'linear-gradient(135deg, rgba(125,211,252,0.12), rgba(186,230,253,0.06))',
      '--card-bg': 'rgba(200,240,255,0.05)',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#000814',
  },
  // 15 — NOUVEAU animé
  {
    id: 'midnight',
    name: 'Midnight',
    icon: '🌙',
    animated: true,
    animationCSS: `
      @keyframes midnightDrift {
        0%   { background-position: 0% 50%; }
        33%  { background-position: 100% 0%; }
        66%  { background-position: 50% 100%; }
        100% { background-position: 0% 50%; }
      }
      body {
        background: linear-gradient(160deg, #020010, #0a0028, #050018, #12002a, #080020, #020010) !important;
        background-size: 600% 600% !important;
        animation: midnightDrift 10s ease infinite !important;
      }
    `,
    vars: {
      '--bg': '#020010',
      '--surface': 'rgba(180,120,255,0.05)',
      '--surface2': 'rgba(180,120,255,0.09)',
      '--accent': '#c084fc',
      '--accent2': '#e879f9',
      '--text': '#faf5ff',
      '--muted': '#7a6a9a',
      '--border': 'rgba(192,132,252,0.18)',
      '--hero-bg': 'linear-gradient(135deg, rgba(192,132,252,0.12), rgba(232,121,249,0.07))',
      '--card-bg': 'rgba(180,120,255,0.05)',
      '--font-main': "'Syne', sans-serif",
      '--font-mono': "'Space Mono', monospace",
    },
    bodyBg: '#020010',
  },
];

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const applyTheme = (theme) => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });

    if (theme.animated && theme.animationCSS) {
      injectAnimation(theme.animationCSS);
    } else {
      const existing = document.getElementById('theme-animations');
      if (existing) existing.remove();
      document.body.style.animation = 'none';
      if (theme.bodyBg.includes('gradient')) {
        document.body.style.background = theme.bodyBg;
        document.body.style.backgroundAttachment = 'fixed';
      } else {
        document.body.style.background = theme.bodyBg;
        document.body.style.backgroundAttachment = 'unset';
      }
    }

    document.body.style.fontFamily = theme.vars['--font-main'];
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