import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NORDIK_CONFIG, getWhatsAppUrl } from '../config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    servicio: 'design-3d',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend
    console.log('Form submitted:', formData);
    
    // Simular envío
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        servicio: 'design-3d',
        mensaje: ''
      });
      setSubmitted(false);
    }, 3000);
  };

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
      id="contacto"
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="contact-header" variants={itemVariants}>
        <h2 className="section-title">Contáctanos</h2>
        <p className="contact-subtitle">Cuéntanos tu idea y trabajaremos juntos para hacerla realidad</p>
      </motion.div>

      <div className="contact-container">
        {/* Contact Info */}
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Teléfono</h3>
            <p>{NORDIK_CONFIG.contact.phone}</p>
            <a href={`tel:+${NORDIK_CONFIG.contact.phoneRaw}`}>Llamar ahora</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>{NORDIK_CONFIG.contact.email}</p>
            <a href={`mailto:${NORDIK_CONFIG.contact.email}`}>Enviar email</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3>WhatsApp</h3>
            <p>{NORDIK_CONFIG.contact.phone}</p>
            <a href={NORDIK_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">Chatear</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Ubicación</h3>
            <p>{NORDIK_CONFIG.contact.location}</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Ver en mapa</a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form" 
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa (opcional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio de Interés *</label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
            >
              {NORDIK_CONFIG.services.map(service => (
                <option key={service.id} value={service.id}>{service.name}</option>
              ))}
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows="6"
              required
            ></textarea>
          </div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitted}
          >
            {submitted ? (
              <>
                <i className="fas fa-check"></i> Mensaje Enviado
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Enviar Mensaje
              </>
            )}
          </motion.button>

          {submitted && (
            <motion.p 
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ¡Gracias por tu mensaje! Nos pondremos en contacto pronto 🚀
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    servicio: 'diseño-3d',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend
    console.log('Form submitted:', formData);
    
    // Simular envío
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        servicio: 'diseño-3d',
        mensaje: ''
      });
      setSubmitted(false);
    }, 3000);
  };

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
      id="contacto"
      className="contact-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="contact-header" variants={itemVariants}>
        <h2 className="section-title">Contáctanos</h2>
        <p className="contact-subtitle">Cuéntanos tu idea y trabajaremos juntos para hacerla realidad</p>
      </motion.div>

      <div className="contact-container">
        {/* Contact Info */}
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Teléfono</h3>
            <p>+52 (644) 145-7855</p>
            <a href="tel:+5216441457855">Llamar ahora</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>hola@nordik.pro</p>
            <a href="mailto:hola@nordik.pro">Enviar email</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <h3>WhatsApp</h3>
            <p>+52 (644) 145-7855</p>
            <a href="https://wa.me/5216441457855" target="_blank" rel="noopener noreferrer">Chatear</a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Ubicación</h3>
            <p>Zapopan, Jalisco, México</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Ver en mapa</a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form" 
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              placeholder="Nombre de tu empresa (opcional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio de Interés *</label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
            >
              <option value="diseño-3d">Diseño 3D</option>
              <option value="desarrollo-web">Desarrollo Web</option>
              <option value="app-movil">App Móvil</option>
              <option value="soporte-tecnico">Soporte Técnico</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos sobre tu proyecto..."
              rows="6"
              required
            ></textarea>
          </div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitted}
          >
            {submitted ? (
              <>
                <i className="fas fa-check"></i> Mensaje Enviado
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Enviar Mensaje
              </>
            )}
          </motion.button>

          {submitted && (
            <motion.p 
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ¡Gracias por tu mensaje! Nos pondremos en contacto pronto 🚀
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
