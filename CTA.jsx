import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = ({ onOpenFAQ }) => {
  return (
    <motion.div 
      className="cta-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <a 
        href="https://rustdesk.com/download" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        <span><i className="fas fa-download"></i> Descargar RustDesk Ahora</span>
      </a>
      <a 
        href="https://wa.me/5216441457855?text=Hola%20Nordik%2C%20necesito%20soporte%20remoto.%20Ya%20tengo%20RustDesk%20instalado." 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-secondary"
      >
        <span><i className="fas fa-comments"></i> Contactar por WhatsApp</span>
      </a>
      <button onClick={onOpenFAQ} className="btn btn-faq">
        <span><i className="fas fa-question-circle"></i> Preguntas Frecuentes</span>
      </button>
    </motion.div>
  );
};

export default CTA;
