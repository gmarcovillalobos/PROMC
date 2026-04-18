import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Súper Rápido',
      description: 'Conéctate en segundos sin complicaciones. Control remoto instantáneo de tu dispositivo.'
    },
    {
      icon: 'fas fa-lock',
      title: 'Completamente Seguro',
      description: 'Encriptación de extremo a extremo. Solo tú y Nordik tienen acceso autorizado.'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Sin Límites',
      description: 'Sesiones ilimitadas. Soporta múltiples monitores y conexiones simultáneas.'
    },
    {
      icon: 'fas fa-code-branch',
      title: 'Open Source',
      description: 'RustDesk es código abierto. Verificable y auditable por la comunidad.'
    }
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          className="feature-card"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -12, scale: 1.02 }}
        >
          <div className="feature-icon">
            <i className={feature.icon}></i>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
