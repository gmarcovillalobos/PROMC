import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.div 
      className="hero"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        offscreen: { opacity: 0, y: 30 },
        onscreen: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
      }}
    >
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Poder Creativo,
          <br />
          <span className="gradient-text">Mundo Digital</span>
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transformamos tus ideas en experiencias digitales épicas. Desde diseño 3D futurista hasta aplicaciones que cambian vidas, en Nordik creamos lo imposible.
        </motion.p>
        <motion.p 
          className="hero-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span>✦ Diseño 3D Premium</span>
          <span>✦ Desarrollo Web Avanzado</span>
          <span>✦ Apps Innovadoras</span>
          <span>✦ Soporte 24/7</span>
        </motion.p>
        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="#servicios" className="btn-cta btn-primary">
            Explorar Servicios
          </a>
          <a href="#contacto" className="btn-cta btn-secondary">
            Solicitar Demo
          </a>
        </motion.div>
      </div>

      <div className="hero-visual">
        <HeroAnimation />
      </div>
    </motion.div>
  );
};

// SVG Animation Component
const HeroAnimation = () => (
  <svg viewBox="0 0 400 400" className="hero-svg">
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#009DFF" />
        <stop offset="100%" stopColor="#E71CEB" />
      </linearGradient>
    </defs>
    
    {/* Background circles */}
    <circle cx="200" cy="200" r="180" fill="none" stroke="url(#heroGrad)" strokeWidth="1.5" opacity="0.3" />
    <circle cx="200" cy="200" r="140" fill="none" stroke="url(#heroGrad)" strokeWidth="1.5" opacity="0.5" />
    <circle cx="200" cy="200" r="100" fill="none" stroke="url(#heroGrad)" strokeWidth="2" opacity="0.8" />
    
    {/* Rotating line */}
    <g className="rotating-group">
      <line x1="200" y1="200" x2="200" y2="50" stroke="url(#heroGrad)" strokeWidth="2.5" />
      <circle cx="200" cy="50" r="6" fill="url(#heroGrad)" />
    </g>

    {/* Grid pattern */}
    <g opacity="0.4">
      <line x1="100" y1="100" x2="300" y2="300" stroke="url(#heroGrad)" strokeWidth="1" />
      <line x1="300" y1="100" x2="100" y2="300" stroke="url(#heroGrad)" strokeWidth="1" />
      <line x1="200" y1="100" x2="200" y2="300" stroke="url(#heroGrad)" strokeWidth="1" />
      <line x1="100" y1="200" x2="300" y2="200" stroke="url(#heroGrad)" strokeWidth="1" />
    </g>

    {/* Pulsing center */}
    <circle cx="200" cy="200" r="8" fill="url(#heroGrad)" className="pulse-center" />
    <circle cx="200" cy="200" r="8" fill="none" stroke="url(#heroGrad)" strokeWidth="1.5" className="pulse-ring" />
  </svg>
);

export default Hero;
