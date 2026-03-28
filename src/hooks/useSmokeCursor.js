import { useEffect } from 'react';

const GRADIENT_COLORS = [
  [110, 240, 200],
  [123, 110, 240],
  [240, 110, 180],
  [110, 180, 255],
  [240, 200, 110],
];

export function useSmokeCursor() {
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9997;
      width: 100%;
      height: 100%;
    `;
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    let colorIndex = 0;
    let colorT = 0;
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    function lerpColor(a, b, t) {
      return [
        Math.round(a[0] + (b[0] - a[0]) * t),
        Math.round(a[1] + (b[1] - a[1]) * t),
        Math.round(a[2] + (b[2] - a[2]) * t),
      ];
    }

    function getCurrentColor() {
      colorT += 0.008;
      if (colorT >= 1) {
        colorT = 0;
        colorIndex = (colorIndex + 1) % GRADIENT_COLORS.length;
      }
      const next = (colorIndex + 1) % GRADIENT_COLORS.length;
      return lerpColor(GRADIENT_COLORS[colorIndex], GRADIENT_COLORS[next], colorT);
    }

    function spawnParticles(x, y) {
      const color = getCurrentColor();
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: Math.random() * 40 + 20,
          color,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.5,
          life: 1,
          decay: Math.random() * 0.018 + 0.01,
          grow: Math.random() * 0.4 + 0.2,
        });
      }
    }

    const onMouseMove = (e) => spawnParticles(e.clientX, e.clientY);
    window.addEventListener('mousemove', onMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.life -= p.decay;
        p.size += p.grow;
        p.alpha = p.life * 0.2;

        if (p.life <= 0) { particles.splice(i, 1); continue; }

        const [r, g, b] = p.color;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, `rgba(${r},${g},${b},${p.alpha})`);
        grad.addColorStop(0.5, `rgba(${r},${g},${b},${p.alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);
}