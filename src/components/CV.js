import React, { useRef, useEffect } from 'react';
import './CV.css';

export default function CV({ onClose }) {
  const sheetRef = useRef();

  // Injection email anti-spam
  useEffect(() => {
    const el = document.getElementById('cv-em');
    if (el && el.childNodes.length === 0) {
      const u = 'mbinanafana1';
      const d = 'gmail.com';
      const a = document.createElement('a');
      a.href = 'mailto:' + u + '@' + d;
      a.style.color = '#00e5ff';
      a.style.textDecoration = 'none';
      a.textContent = u + '@' + d;
      el.appendChild(a);
    }
  }, []);

  const handlePrint = () => window.print();

  return (
    <div className="cv-overlay">

      {/* Boutons flottants — cachés à l'impression */}
      <div className="cv-actions no-print">
        <button className="cv-btn cv-btn-print" onClick={handlePrint}>
          ⬇ Télécharger PDF
        </button>
        <button className="cv-btn cv-btn-close" onClick={onClose}>
          ✕ Fermer
        </button>
      </div>

      {/* ══ FEUILLE A4 ══ */}
      <div className="cv-sheet" ref={sheetRef}>

        {/* ── HEADER ── */}
        <div className="cv-header">
          <div className="cv-h-left">
            <div className="cv-pre">Full Stack Developer</div>
            <h1 className="cv-name">
              RALAIJOMA<br />
              <span className="cv-line2">FANAMBINANTSOA</span>
            </h1>
            <div className="cv-prenom-tag">Jean Baptiste</div>
            <div className="cv-sub">React &nbsp;-&nbsp; Node.js &nbsp;-&nbsp; Laravel &nbsp;-&nbsp; Docker &nbsp;-&nbsp; Vercel</div>
          </div>

          <div className="cv-h-right">
            <div className="cv-avail"><span className="cv-pulse"></span>Disponible</div>
            <div className="cv-ci"><span className="cv-dot">◆</span><span>+261 38 36 683 36</span></div>
            <div className="cv-ci"><span className="cv-dot">◆</span><span id="cv-em"></span></div>
            <div className="cv-ci"><span className="cv-dot">◆</span><span>Ivory Avaratra, Fianarantsoa</span></div>
            <div className="cv-ci">
              <span className="cv-dot">◆</span>
              <a href="https://voaybedev.vercel.app" target="_blank" rel="noreferrer">voaybedev.vercel.app</a>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="cv-body-grid">

          {/* ═ GAUCHE ═ */}
          <div className="cv-left-col">

            <div className="cv-section">
              <div className="cv-sec-hd">
                <span className="cv-sec-num">01 /</span>
                <span className="cv-sec-tag">Profil</span>
                <div className="cv-sec-line"></div>
              </div>
              <div className="cv-profile-box">
                Développeur Full Stack de 23 ans, diplômé à l'EMIT Fianarantsoa.
                Je conçois des applications web et mobiles performantes avec React, Next.js,
                Laravel et Node.js. Maîtrise complète du cycle de développement, du design
                jusqu'à la mise en production via Docker &amp; Vercel.
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-sec-hd">
                <span className="cv-sec-num">02 /</span>
                <span className="cv-sec-tag">Projets GitHub</span>
                <div className="cv-sec-line"></div>
              </div>

              <div className="cv-proj-list">

                <div className="cv-proj-item">
                  <div>
                    <div className="cv-proj-title">Real-Time Chat App</div>
                    <div className="cv-proj-desc">Messagerie instantanée avec notifications temps réel et authentification sécurisée.</div>
                    <div className="cv-proj-chips">
                      <span className="cv-chip">React</span><span className="cv-chip">Node.js</span>
                      <span className="cv-chip">Socket.io</span><span className="cv-chip">MongoDB</span>
                    </div>
                  </div>
                  <span className="cv-proj-year">2024</span>
                </div>

                <div className="cv-proj-item">
                  <div>
                    <div className="cv-proj-title">QR &amp; Barcode Converter</div>
                    <div className="cv-proj-desc">Générateur/lecteur QR codes &amp; codes-barres, export PNG/SVG, scan via caméra.</div>
                    <div className="cv-proj-chips">
                      <span className="cv-chip">React</span><span className="cv-chip">qrcode.react</span><span className="cv-chip">ZXing</span>
                    </div>
                  </div>
                  <span className="cv-proj-year">2025</span>
                </div>

                <div className="cv-proj-item">
                  <div>
                    <div className="cv-proj-title">Blog App Full Stack</div>
                    <div className="cv-proj-desc">Plateforme de blog avec création d'articles, authentification et commentaires.</div>
                    <div className="cv-proj-chips">
                      <span className="cv-chip">React</span><span className="cv-chip">Node.js</span>
                      <span className="cv-chip">MySQL</span><span className="cv-chip">Express</span>
                    </div>
                  </div>
                  <span className="cv-proj-year">2025</span>
                </div>

                <div className="cv-proj-item">
                  <div>
                    <div className="cv-proj-title">Budget Tracker</div>
                    <div className="cv-proj-desc">Suivi budgétaire avec graphiques interactifs Chart.js et rapport mensuel.</div>
                    <div className="cv-proj-chips">
                      <span className="cv-chip">React</span><span className="cv-chip">Chart.js</span><span className="cv-chip">localStorage</span>
                    </div>
                  </div>
                  <span className="cv-proj-year">2025</span>
                </div>

                <div className="cv-proj-item">
                  <div>
                    <div className="cv-proj-title">Todo List App</div>
                    <div className="cv-proj-desc">Gestionnaire de tâches avec catégories, priorités et filtres avancés.</div>
                    <div className="cv-proj-chips">
                      <span className="cv-chip">React</span><span className="cv-chip">localStorage</span><span className="cv-chip">CSS</span>
                    </div>
                  </div>
                  <span className="cv-proj-year">2025</span>
                </div>

                <div className="cv-proj-item">
                  <div>
                    <div className="cv-proj-title">BG Remover - AI Tool</div>
                    <div className="cv-proj-desc">Suppression d'arrière-plan par IA, export PNG transparent via Remove.bg API.</div>
                    <div className="cv-proj-chips">
                      <span className="cv-chip">React</span><span className="cv-chip">Remove.bg API</span><span className="cv-chip">Tailwind</span>
                    </div>
                  </div>
                  <span className="cv-proj-year">2026</span>
                </div>

              </div>
            </div>
          </div>

          {/* ═ DROITE ═ */}
          <div className="cv-right-col">

            <div className="cv-r-card">
              <div className="cv-r-label">Frontend</div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">React / Next.js</span><span className="cv-skill-pc">90%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '90%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">TypeScript</span><span className="cv-skill-pc">65%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '65%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">Tailwind CSS</span><span className="cv-skill-pc">88%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '88%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">React Native</span><span className="cv-skill-pc">60%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '60%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">Vue.js</span><span className="cv-skill-pc">75%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '75%' }}></div></div>
              </div>
            </div>

            <div className="cv-r-card">
              <div className="cv-r-label">Backend &amp; Base de données</div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">Node.js / Express</span><span className="cv-skill-pc">82%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '82%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">NestJS</span><span className="cv-skill-pc">58%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '58%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">PHP / Laravel</span><span className="cv-skill-pc">78%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '78%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">MySQL / PostgreSQL</span><span className="cv-skill-pc">85%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '85%' }}></div></div>
              </div>
              <div className="cv-skill-row">
                <div className="cv-skill-top"><span className="cv-skill-nm">MongoDB</span><span className="cv-skill-pc">72%</span></div>
                <div className="cv-skill-track"><div className="cv-skill-fill" style={{ width: '72%' }}></div></div>
              </div>
            </div>

            <div className="cv-r-card">
              <div className="cv-r-label">Outils &amp; DevOps</div>
              <div className="cv-tool-grid">
                <span className="cv-tool hi">Git</span>
                <span className="cv-tool hi">GitHub</span>
                <span className="cv-tool hi">Docker</span>
                <span className="cv-tool hi">Vercel</span>
                <span className="cv-tool">Figma</span>
                <span className="cv-tool">VS Code</span>
                <span className="cv-tool">Android</span>
                <span className="cv-tool">Hugging Face</span>
              </div>
            </div>

            <div className="cv-r-card">
              <div className="cv-r-label">Langues</div>
              <div className="cv-lang-row"><span>Malagasy</span><span className="cv-llvl">NATIF</span></div>
              <div className="cv-lang-row"><span>Français</span><span className="cv-llvl">COURANT</span></div>
              <div className="cv-lang-row"><span>Anglais</span><span className="cv-llvl">COURANT</span></div>
            </div>

            <div className="cv-edu-card">
              <div className="cv-r-label">Formation</div>
              <div className="cv-edu-deg">Licence - Développement d'Applications Informatiques</div>
              <div className="cv-edu-school">EMIT - École de Management et d'Innovation Technologique</div>
              <div className="cv-edu-date">2022 - 2025 · Fianarantsoa, Madagascar</div>
              <div className="cv-bac-item">
                <div className="cv-bac-deg">Baccalauréat Série D</div>
                <div className="cv-bac-school">Lycée Ikalamavony · 2019 - 2020</div>
                <span className="cv-bac-mention">Mention : Assez-bien</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}