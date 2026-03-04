// src/App.js
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Chargement asynchrone des composants
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Skills = React.lazy(() => import('./components/Skills'));

// Gestion des erreurs avec ErrorBoundary
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Chargement...</div>}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;