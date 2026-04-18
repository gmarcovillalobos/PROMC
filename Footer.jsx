import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/5216441457855', label: 'WhatsApp' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/nordik.pro', label: 'Instagram' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/nordikpro', label: 'Facebook' },
    { icon: 'fas fa-envelope', url: 'mailto:soporte@nordik.pro', label: 'Email' }
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <p><strong>¿Necesitas ayuda?</strong> Nuestro equipo está disponible 24/7</p>
      <div className="social-links">
        {socialLinks.map((social, index) => (
          <motion.a 
            key={index}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            title={social.label}
            whileHover={{ y: -6, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={social.icon}></i>
          </motion.a>
        ))}
      </div>
      <p className="copyright">© 2024 Nordik - Poder Creativo, Mundo Digital</p>
    </motion.footer>
  );
};

export default Footer;
