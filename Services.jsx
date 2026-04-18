import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Diseño 3D',
      description: 'Renders profesionales con IA para presentaciones y cotizaciones. Interiores y exteriores de impacto.',
      tags: ['3D Modeling', 'IA Renders', 'Visualización']
    },
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados. Desde landing pages hasta aplicaciones complejas.',
      tags: ['React', 'UI/UX', 'Performance']
    },
    {
      icon: '🛠️',
      title: 'Soporte Técnico',
      description: 'Asistencia remota 24/7 con RustDesk. Resolución rápida de problemas técnicos.',
      tags: ['Remoto', '24/7', 'Seguro']
    },
    {
      icon: '📱',
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas e híbridas. Experiencias fluidas en cualquier dispositivo.',
      tags: ['iOS', 'Android', 'Cross-platform']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="servicios"
      className="services-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Nuestros Servicios
      </motion.h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={itemVariants}
            whileHover={{ y: -12, scale: 1.02 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
