import React, { Suspense, useEffect, useRef } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);
  const rafRef = useRef(null);

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
        <Suspense fallback={<div style={{color:'var(--accent)',padding:'2rem',fontFamily:'Space Mono'}}>Chargement...</div>}>
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
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;