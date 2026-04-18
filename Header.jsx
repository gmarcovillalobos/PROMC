import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = ({ logoUrl }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="logo-section">
        {logoUrl ? (
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src={logoUrl} alt="Nordik Logo" className="logo-image" />
          </a>
        ) : (
          <div className="logo">N</div>
        )}
      </div>
      
      <nav className="nav-menu">
        <button 
          className="nav-link"
          onClick={() => scrollToSection('servicios')}
        >
          Servicios
        </button>
        <button 
          className="nav-link"
          onClick={() => scrollToSection('proyectos')}
        >
          Proyectos
        </button>
        <button 
          className="nav-link"
          onClick={() => scrollToSection('contacto')}
        >
          Contacto
        </button>
        <a 
          href="https://nordik.pro/soporte" 
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          FAQ
        </a>
      </nav>

      <a href="https://nordik.pro/soporte" className="nav-btn" target="_blank" rel="noopener noreferrer">
        <span><i className="fas fa-headphones"></i> Centro de Soporte</span>
      </a>
    </motion.div>
  );
};

export default Header;
