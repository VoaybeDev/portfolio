// src/components/Home.js
import React from 'react';
import './Home.css';  // Import du fichier CSS pour la page d'accueil

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue sur mon portfolio !</h1>
      <p className="home-subtitle">
        Je suis RALAIJOMA Fanambinantsoa Jean Baptiste, un développeur passionné par la création d'applications web et mobiles.
      </p>
      <div className="home-links">
        <a href="/projects">Voir mes projets</a>
        <a href="/contact">Me contacter</a>
      </div>
    </div>
  );
}

export default Home;