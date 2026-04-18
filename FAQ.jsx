import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQ = ({ isOpen, onClose }) => {
  const faqs = [
    {
      question: '¿RustDesk es realmente gratuito?',
      answer: 'Sí, es completamente gratuito y de código abierto. No hay límites de tiempo ni conexiones simultáneas.'
    },
    {
      question: '¿Es seguro compartir mi ID?',
      answer: 'Totalmente seguro. El ID por sí solo no permite acceso. Se requiere una contraseña que genera la app automáticamente.'
    },
    {
      question: '¿Qué sistemas operativos soporta?',
      answer: 'Windows, macOS, Linux, iOS, Android y navegadores web. Compatible con prácticamente todo.'
    },
    {
      question: '¿Cuánto tiempo tarda en conectar?',
      answer: 'Generalmente menos de 2 minutos desde que compartes tu ID. Dependiendo de tu conexión a internet.'
    },
    {
      question: '¿Puedo ver lo que hace el técnico?',
      answer: 'Sí, puedes ver exactamente qué hace nuestro equipo en tu pantalla en todo momento. Control total.'
    },
    {
      question: '¿Qué pasa después de la conexión?',
      answer: 'Puedes cerrar RustDesk cuando lo desees. No deja instalaciones adicionales ni cambios permanentes.'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="modal-content">
              <button className="close" onClick={onClose}>
                <i className="fas fa-times"></i>
              </button>
              <h2>Preguntas Frecuentes</h2>
              
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="faq-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FAQ;
