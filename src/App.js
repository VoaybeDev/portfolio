import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useSmokeCursor } from './hooks/useSmokeCursor';
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

/* ─── Portfolio (page principale) ─── */
function AppContent() {
  useSmokeCursor();

  return (
    <>
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