import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Renders 3D Residencial',
      description: 'Visualización arquitectónica con IA para proyecto de lujo en Monterrey',
      category: 'Diseño 3D',
      image: 'linear-3d'
    },
    {
      title: 'Landing Page Ecommerce',
      description: 'Sitio web de venta de moda sostenible con conversión optimizada',
      category: 'Web',
      image: 'linear-web'
    },
    {
      title: 'App de Gestión',
      description: 'Aplicación móvil para control de inventario en tiempo real',
      category: 'Apps',
      image: 'linear-app'
    },
    {
      title: 'Dashboard Analítica',
      description: 'Panel interactivo para análisis de datos empresariales',
      category: 'Web',
      image: 'linear-analytics'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <motion.section 
      id="proyectos"
      className="portfolio-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 className="section-title">Proyectos Destacados</motion.h2>
      
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="portfolio-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -16 }}
          >
            <div className="portfolio-image">
              {project.image === 'linear-3d' && <LinearIcon3D />}
              {project.image === 'linear-web' && <LinearIconWeb />}
              {project.image === 'linear-app' && <LinearIconApp />}
              {project.image === 'linear-analytics' && <LinearIconAnalytics />}
            </div>
            <div className="portfolio-content">
              <span className="portfolio-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="portfolio-link">Ver más →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// SVG Icons - Linear minimalist futuristic style
const LinearIcon3D = () => (
  <svg viewBox="0 0 200 200" className="linear-icon">
    <defs>
      <linearGradient id="grad3d" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#009DFF" />
        <stop offset="100%" stopColor="#E71CEB" />
      </linearGradient>
    </defs>
    <path d="M 100 40 L 160 80 L 160 140 L 100 160 L 40 140 L 40 80 Z" fill="none" stroke="url(#grad3d)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="100" y1="40" x2="100" y2="160" stroke="url(#grad3d)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="40" y1="80" x2="160" y2="80" stroke="url(#grad3d)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="40" y1="140" x2="160" y2="140" stroke="url(#grad3d)" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const LinearIconWeb = () => (
  <svg viewBox="0 0 200 200" className="linear-icon">
    <defs>
      <linearGradient id="gradweb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#009DFF" />
        <stop offset="100%" stopColor="#E71CEB" />
      </linearGradient>
    </defs>
    <rect x="45" y="50" width="110" height="100" fill="none" stroke="url(#gradweb)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="45" y1="70" x2="155" y2="70" stroke="url(#gradweb)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="55" cy="60" r="3" fill="url(#gradweb)"/>
    <circle cx="65" cy="60" r="3" fill="url(#gradweb)"/>
    <circle cx="75" cy="60" r="3" fill="url(#gradweb)"/>
    <line x1="55" y1="85" x2="145" y2="85" stroke="url(#gradweb)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="55" y1="100" x2="145" y2="100" stroke="url(#gradweb)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="55" y1="115" x2="120" y2="115" stroke="url(#gradweb)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const LinearIconApp = () => (
  <svg viewBox="0 0 200 200" className="linear-icon">
    <defs>
      <linearGradient id="gradapp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#009DFF" />
        <stop offset="100%" stopColor="#E71CEB" />
      </linearGradient>
    </defs>
    <rect x="55" y="45" width="90" height="120" fill="none" stroke="url(#gradapp)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" rx="8"/>
    <line x1="55" y1="65" x2="145" y2="65" stroke="url(#gradapp)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="100" cy="155" r="5" fill="none" stroke="url(#gradapp)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="70" y1="85" x2="130" y2="85" stroke="url(#gradapp)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <line x1="70" y1="105" x2="130" y2="105" stroke="url(#gradapp)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <line x1="70" y1="125" x2="110" y2="125" stroke="url(#gradapp)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const LinearIconAnalytics = () => (
  <svg viewBox="0 0 200 200" className="linear-icon">
    <defs>
      <linearGradient id="gradanalytics" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#009DFF" />
        <stop offset="100%" stopColor="#E71CEB" />
      </linearGradient>
    </defs>
    <polyline points="50,130 70,90 90,110 110,70 130,85 150,55" fill="none" stroke="url(#gradanalytics)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="45" y1="155" x2="155" y2="155" stroke="url(#gradanalytics)" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="45" y1="155" x2="45" y2="45" stroke="url(#gradanalytics)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="70" cy="90" r="4" fill="url(#gradanalytics)"/>
    <circle cx="90" cy="110" r="4" fill="url(#gradanalytics)"/>
    <circle cx="110" cy="70" r="4" fill="url(#gradanalytics)"/>
    <circle cx="130" cy="85" r="4" fill="url(#gradanalytics)"/>
    <circle cx="150" cy="55" r="4" fill="url(#gradanalytics)"/>
  </svg>
);

export default Portfolio;
