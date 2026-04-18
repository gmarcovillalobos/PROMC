// Configuración Global de Nordik
export const NORDIK_CONFIG = {
  // Información de Contacto
  contact: {
    phone: '+52 (644) 145-7855',
    phoneRaw: '5216441457855',
    email: 'hola@nordik.pro',
    whatsapp: 'https://wa.me/5216441457855',
    location: 'Zapopan, Jalisco, México',
  },

  // URLs
  urls: {
    website: 'https://nordik.pro',
    support: 'https://nordik.pro/soporte',
    instagram: 'https://instagram.com/nordik.pro',
    facebook: 'https://facebook.com/nordikpro',
    linkedin: 'https://linkedin.com/company/nordik-pro',
  },

  // Redes Sociales
  social: {
    instagram: '@nordik.pro',
    facebook: 'nordikpro',
    whatsapp: '+5216441457855',
  },

  // Información General
  company: {
    name: 'Nordik',
    fullName: 'Nordik Pro',
    tagline: 'Poder Creativo, Mundo Digital',
    description: 'Transformamos tus ideas en experiencias digitales épicas',
    foundedYear: 2024,
  },

  // Servicios
  services: [
    {
      id: 'design-3d',
      name: 'Diseño 3D',
      description: 'Renders profesionales con IA para presentaciones y cotizaciones',
    },
    {
      id: 'web',
      name: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados',
    },
    {
      id: 'apps',
      name: 'Apps Móviles',
      description: 'Aplicaciones nativas e híbridas de alto rendimiento',
    },
    {
      id: 'support',
      name: 'Soporte Técnico',
      description: 'Asistencia remota 24/7 con RustDesk',
    },
  ],

  // Colores
  colors: {
    blue: '#009DFF',
    fuchsia: '#E71CEB',
    dark: '#10101A',
    darkSecondary: '#1C1C2E',
    green: '#10B981',
    white: '#FFFFFF',
    grayLight: '#E5E7EB',
    grayDark: '#6B7280',
  },

  // Estadísticas
  stats: [
    {
      number: '500+',
      label: 'Clientes Satisfechos',
    },
    {
      number: '99.9%',
      label: 'Uptime Garantizado',
    },
    {
      number: '<2min',
      label: 'Tiempo Promedio',
    },
  ],

  // FAQ
  faqs: [
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'Los tiempos varían según el proyecto, pero generalmente oscilan entre 1-4 semanas. Podemos acelerar procesos según necesidad.',
    },
    {
      question: '¿Ofrecen soporte post-lanzamiento?',
      answer: 'Sí, incluimos 30 días de soporte gratuito post-lanzamiento. Planes extendidos disponibles.',
    },
    {
      question: '¿Trabajan con startups?',
      answer: 'Claro, nos encanta trabajar con startups. Ofrecemos paquetes especiales y planes de pago flexible.',
    },
    {
      question: '¿Cuál es el presupuesto mínimo?',
      answer: 'Trabajamos con presupuestos desde $1,500 USD. Cada proyecto es único, cotizamos según necesidad.',
    },
    {
      question: '¿En qué tecnologías trabajan?',
      answer: 'React, Vue, Node.js, Python, 3D Studio Max, Blender, Figma y más. Elegimos las mejores herramientas para cada proyecto.',
    },
    {
      question: '¿Ofrecen consultoría?',
      answer: 'Sí, ofrecemos sesiones de consultoría desde $100 USD/hora. Perfectas para asesoría técnica y estrategia digital.',
    },
  ],
};

// Función helper para obtener WhatsApp URL con mensaje
export const getWhatsAppUrl = (message = '') => {
  const message_encoded = encodeURIComponent(message || 'Hola Nordik, me gustaría más información sobre sus servicios');
  return `${NORDIK_CONFIG.contact.whatsapp}?text=${message_encoded}`;
};

// Función helper para enviar email
export const getSendEmailUrl = (to = NORDIK_CONFIG.contact.email, subject = '', body = '') => {
  const subject_encoded = encodeURIComponent(subject || 'Consulta desde nordik.pro');
  const body_encoded = encodeURIComponent(body || 'Hola, me gustaría más información...');
  return `mailto:${to}?subject=${subject_encoded}&body=${body_encoded}`;
};

export default NORDIK_CONFIG;
