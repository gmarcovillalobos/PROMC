# 📡 Integración Backend - Nordik.pro

Guía para conectar los formularios de contacto y gestionar datos dinámicos en nordik.pro

---

## 🔌 Endpoints Recomendados

### 1. Envío de Formulario de Contacto

**Endpoint:** `POST /api/contact`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "empresa": "Mi Empresa",
  "servicio": "design-3d",
  "mensaje": "Me gustaría conocer más sobre vuestros servicios..."
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Mensaje enviado correctamente",
  "id": "contact_12345"
}
```

**Response Error (400):**
```json
{
  "success": false,
  "error": "El email es inválido"
}
```

---

### 2. Obtener Lista de Servicios (Dinámico)

**Endpoint:** `GET /api/services`

**Response:**
```json
{
  "success": true,
  "services": [
    {
      "id": "design-3d",
      "name": "Diseño 3D",
      "description": "Renders profesionales...",
      "icon": "🎨",
      "tags": ["3D Modeling", "IA Renders"]
    },
    ...
  ]
}
```

---

### 3. Obtener Proyectos del Portfolio

**Endpoint:** `GET /api/projects`

**Query Params:**
- `category` (opcional): "design-3d", "web", "app"
- `limit` (opcional): número de proyectos

**Response:**
```json
{
  "success": true,
  "projects": [
    {
      "id": "project_1",
      "title": "Renders 3D Residencial",
      "description": "Visualización arquitectónica...",
      "category": "design-3d",
      "image": "url",
      "link": "url"
    },
    ...
  ]
}
```

---

### 4. Obtener FAQ

**Endpoint:** `GET /api/faqs`

**Response:**
```json
{
  "success": true,
  "faqs": [
    {
      "id": "faq_1",
      "question": "¿Cuál es el tiempo de entrega?",
      "answer": "Los tiempos varían..."
    },
    ...
  ]
}
```

---

## 🔧 Integración en React

### Actualizar Contact.jsx para enviar datos al backend

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (data.success) {
      setSubmitted(true);
      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setFormData({...});
        setSubmitted(false);
      }, 3000);
    } else {
      console.error('Error:', data.error);
      alert('Error al enviar mensaje: ' + data.error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error de conexión');
  }
};
```

---

## 📧 Servicio de Emails Recomendado

### Opción 1: SendGrid (Recomendado)

**Instalación:**
```bash
npm install @sendgrid/mail
```

**Uso en backend (Node.js):**
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { nombre, email, empresa, servicio, mensaje } = req.body;
  
  try {
    await sgMail.send({
      to: 'hola@nordik.pro',
      from: 'noreply@nordik.pro',
      subject: `Nueva consulta de ${nombre} - ${servicio}`,
      html: `
        <h2>Nueva Consulta</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || 'N/A'}</p>
        <p><strong>Servicio:</strong> ${servicio}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `
    });
    
    // Enviar confirmación al usuario
    await sgMail.send({
      to: email,
      from: 'hola@nordik.pro',
      subject: '¡Hemos recibido tu mensaje!',
      html: `
        <h2>Hola ${nombre},</h2>
        <p>Hemos recibido tu mensaje. Nos pondremos en contacto pronto.</p>
        <p>¡Gracias por confiar en Nordik!</p>
      `
    });
    
    res.json({ success: true, message: 'Mensaje enviado' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
```

---

### Opción 2: Nodemailer

**Instalación:**
```bash
npm install nodemailer
```

**Uso:**
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  const { nombre, email, empresa, servicio, mensaje } = req.body;
  
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'hola@nordik.pro',
      subject: `Nueva consulta de ${nombre}`,
      html: `...` // HTML del email
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
```

---

### Opción 3: Resend (Moderno y Fácil)

**Instalación:**
```bash
npm install resend
```

**Uso:**
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { nombre, email, empresa, servicio, mensaje } = req.body;
  
  try {
    const data = await resend.emails.send({
      from: 'nordik@resend.dev',
      to: 'hola@nordik.pro',
      subject: `Nueva consulta de ${nombre}`,
      html: `...`
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});
```

---

## 🗄️ Base de Datos

### Schema Recomendado (MongoDB)

```javascript
// Contact Schema
{
  _id: ObjectId,
  nombre: String,
  email: String,
  empresa: String,
  servicio: String,
  mensaje: String,
  ip: String,
  userAgent: String,
  createdAt: Date,
  status: String // 'new', 'read', 'responded'
}

// Projects Schema
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  image: String,
  link: String,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}

// Stats Schema
{
  _id: ObjectId,
  name: String,
  value: Number,
  updatedAt: Date
}
```

---

## 🔐 Validaciones Recomendadas

```javascript
// Backend validation
const validateContact = (data) => {
  const errors = [];
  
  if (!data.nombre || data.nombre.length < 3) {
    errors.push('Nombre debe tener al menos 3 caracteres');
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email inválido');
  }
  
  if (!data.servicio) {
    errors.push('Debe seleccionar un servicio');
  }
  
  if (!data.mensaje || data.mensaje.length < 10) {
    errors.push('Mensaje debe tener al menos 10 caracteres');
  }
  
  return errors;
};

// Email validation regex
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

---

## 🛡️ Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // máximo 5 requests
  message: 'Demasiados intentos, intenta más tarde'
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  // ...
});
```

---

## 📊 Analytics Integration

### Google Analytics 4

```javascript
// En App.jsx o donde necesites
useEffect(() => {
  // Evento de formulario enviado
  window.gtag('event', 'form_submit', {
    form_name: 'contact_form',
    service: formData.servicio
  });
}, [submitted]);

// Evento de página vista
useEffect(() => {
  window.gtag('config', 'GA_MEASUREMENT_ID');
}, []);
```

---

## 🚀 Deployment

### Variables de Entorno (.env)

```env
VITE_API_URL=https://api.nordik.pro
SENDGRID_API_KEY=your_key
EMAIL_USER=your_email
EMAIL_PASSWORD=your_password
RESEND_API_KEY=your_key
DATABASE_URL=mongodb://...
JWT_SECRET=your_secret
```

---

## ✅ Checklist de Integración

- [ ] Configurar endpoint `/api/contact`
- [ ] Integrar servicio de emails
- [ ] Agregar validaciones backend
- [ ] Configurar rate limiting
- [ ] Conectar base de datos
- [ ] Agregar autenticación (si es necesario)
- [ ] Configurar CORS
- [ ] Agregar logging
- [ ] Integrar analytics
- [ ] Configurar SSL/HTTPS
- [ ] Testing de formularios
- [ ] Deploy a producción

---

## 📞 Soporte

Para ayuda con la integración, contacta con el equipo de Nordik:
- Email: hola@nordik.pro
- WhatsApp: +52 (644) 145-7855

---

*Última actualización: Abril 2026*
