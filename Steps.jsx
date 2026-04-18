import React from 'react';
import { motion } from 'framer-motion';
import './Steps.css';

const Steps = () => {
  const steps = [
    {
      number: '01',
      title: 'Descarga RustDesk',
      description: 'Obtén la aplicación gratuita y segura en tu equipo. Compatible con Windows, Mac y Linux.'
    },
    {
      number: '02',
      title: 'Obtén tu ID',
      description: 'Abre la app y tu ID de conexión aparecerá automáticamente. Es único y generado al instante.'
    },
    {
      number: '03',
      title: 'Comparte con Nordik',
      description: 'Envía tu ID y contraseña por WhatsApp a tu asesor técnico. Solo información que necesitamos.'
    },
    {
      number: '04',
      title: '¡Relájate!',
      description: 'Nuestro equipo toma el control y resuelve el problema. Tú observas mientras trabajamos.'
    }
  ];

  return (
    <div className="steps-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        4 Pasos Simples
      </motion.h2>
      <div className="steps">
        <div className="step-line"></div>
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="step"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -16, scale: 1.05 }}
          >
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
