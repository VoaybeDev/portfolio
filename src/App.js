import { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CV from './components/CV';

/* ─── Portfolio (page principale, aucun changement) ─── */
function AppContent() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mx        = useRef(0);
  const my        = useRef(0);
  const rx        = useRef(0);
  const ry        = useRef(0);
  const rafRef    = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
    };
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px';
        ringRef.current.style.top  = ry.current + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor"      ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef}   />
      <ErrorBoundary>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </ErrorBoundary>
    </>
  );
}

/* ─── App principal ─── */
export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Page CV — accessible sur /cv */}
        <Route path="/cv" element={<CV />} />

        {/* Portfolio principal — toutes les autres routes */}
        <Route path="*" element={<AppContent />} />
      </Routes>
    </ThemeProvider>
  );
}