import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Routes remplace Switch dans React Router v6
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes> {/* Remplacer Switch par Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;