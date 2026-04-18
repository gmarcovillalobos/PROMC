## ⚡ QUICK START - Comienza en 5 Minutos

### Paso 1: Instalación (2 minutos)
```bash
cd nordik-support
npm install
```

### Paso 2: Desarrollo local (Automático)
```bash
npm run dev
```
✅ Se abre automáticamente en `http://localhost:5173`

### Paso 3: Ver en navegador
- Abre http://localhost:5173 en tu navegador
- Verás todo funcionando en tiempo real
- Los cambios se aplican al instante (HMR)

---

## 📝 Personalizaciones Rápidas (5 minutos c/u)

### Cambiar números de contacto
Archivo: `src/config.js`

```javascript
contact: {
  phone: '+52 (644) 145-7855',  // ← CAMBIAR AQUÍ
  phoneRaw: '5216441457855',     // ← CAMBIAR AQUÍ
  email: 'hola@nordik.pro',      // ← CAMBIAR AQUÍ
  whatsapp: 'https://wa.me/...',  // ← CAMBIAR AQUÍ
}
```

### Cambiar textos del sitio
Busca el componente que quieras cambiar:
- `src/components/Hero.jsx` - Título y descripción
- `src/components/Services.jsx` - Servicios
- `src/components/Portfolio.jsx` - Proyectos
- `src/components/Contact.jsx` - Contacto

### Cambiar estadísticas
Archivo: `src/config.js`

```javascript
stats: [
  { number: '500+', label: 'Clientes Satisfechos' },    // ← CAMBIAR
  { number: '99.9%', label: 'Uptime Garantizado' },    // ← CAMBIAR
  { number: '<2min', label: 'Tiempo Promedio' },        // ← CAMBIAR
]
```

### Cambiar colores
Archivo: `src/index.css`

```css
:root {
  --blue: #009DFF;        /* ← CAMBIAR AQUÍ */
  --fuchsia: #E71CEB;     /* ← CAMBIAR AQUÍ */
  --dark: #10101A;        /* ← CAMBIAR AQUÍ */
  /* ... más colores */
}
```

---

## 🚀 Deploy en 5 Minutos

### Opción 1: Vercel (RECOMENDADO)

1. Sube tu código a GitHub
2. Ve a https://vercel.com
3. Click en "New Project"
4. Selecciona tu repositorio
5. ¡Deploy automático! 🎉

### Opción 2: Netlify

1. Sube tu código a GitHub
2. Ve a https://netlify.com
3. Click en "New site from Git"
4. Selecciona tu repositorio
5. ¡Deploy automático! 🎉

### Opción 3: Tu servidor

```bash
npm run build
# Copia la carpeta 'dist' a tu servidor
# Configura el servidor para servir index.html en rutas que no existen
```

---

## 🐛 Troubleshooting Rápido

### Problema: "npm install" falla
```bash
# Solución:
npm cache clean --force
npm install
```

### Problema: Puerto 5173 en uso
```bash
# Solución:
npm run dev -- --port 3000
```

### Problema: Cambios no se ven
```bash
# Solución:
1. Guarda el archivo
2. Actualiza el navegador (F5)
3. Limpia caché (Ctrl+Shift+Supr)
```

### Problema: Build falla
```bash
# Solución:
rm -rf node_modules
npm install
npm run build
```

---

## 📋 Checklist de Lanzamiento

- [ ] `npm install` completado
- [ ] `npm run dev` funciona
- [ ] Sitio se ve correcto en http://localhost:5173
- [ ] Personalizaste los datos (teléfono, email, etc.)
- [ ] Compilaste con `npm run build`
- [ ] Subiste a GitHub
- [ ] Conectaste con Vercel o Netlify
- [ ] Configuraste el dominio
- [ ] ¡Sitio en vivo! 🚀

---

## 📁 Estructura Básica para Principiantes

```
nordik-support/
├── src/              ← Tu código React aquí
│   └── components/   ← Los componentes principales
├── public/           ← Imágenes estáticas
│   └── logo.png      ← Tu logo
├── package.json      ← Dependencias
└── vite.config.js    ← Configuración Vite
```

---

## 🎯 10 Cambios Fáciles que Puedes Hacer AHORA

1. **Cambiar logo:** Reemplaza `/public/logo.png`
2. **Cambiar nombre empresa:** Busca "Nordik" y reemplaza
3. **Cambiar teléfono:** Edita `src/config.js`
4. **Cambiar email:** Edita `src/config.js`
5. **Cambiar descripción:** Edita `Hero.jsx`
6. **Cambiar servicios:** Edita `Services.jsx`
7. **Cambiar proyectos:** Edita `Portfolio.jsx`
8. **Cambiar FAQs:** Edita `src/config.js`
9. **Cambiar colores:** Edita `src/index.css`
10. **Cambiar ubicación:** Edita `src/config.js`

---

## 💡 Tips Profesionales

✅ **Guarda frecuentemente** - Ctrl+S
✅ **Usa Git** - Mantén versiones
✅ **Prueba en móvil** - Ctrl+Shift+M en DevTools
✅ **Limpia caché** - Ctrl+Shift+Supr en navegador
✅ **Lee la documentación** - Está en la carpeta del proyecto
✅ **Haz cambios pequeños** - Uno a la vez, prueba, luego el siguiente

---

## 🔗 Links Útiles

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Framer Motion: https://www.framer.com/motion
- Tailwind CSS: https://tailwindcss.com
- Font Awesome: https://fontawesome.com

---

## 📞 Ayuda Rápida

**Pregunta:** ¿Cómo cambio el color principal?  
**Respuesta:** Edita `--blue: #009DFF;` en `src/index.css`

**Pregunta:** ¿Dónde cambio los servicios?  
**Respuesta:** Edita el array en `src/components/Services.jsx`

**Pregunta:** ¿Cómo agrego un nuevo proyecto?  
**Respuesta:** Agrega un objeto al array `projects` en `Portfolio.jsx`

**Pregunta:** ¿Cómo cambio el formulario de contacto?  
**Respuesta:** Edita `src/components/Contact.jsx`

**Pregunta:** ¿Cómo personalizo las estadísticas?  
**Respuesta:** Edita `stats` en `src/config.js`

---

## ✨ Resumen

```
╔════════════════════════════════════════════════╗
║  TODO ESTÁ LISTO PARA USAR Y PERSONALIZAR     ║
║                                                ║
║  Solo necesitas:                               ║
║  1. Cambiar los datos (config.js)             ║
║  2. Agregar tus proyectos                      ║
║  3. Conectar tu backend (opcional)            ║
║  4. Deploy a producción                        ║
║                                                ║
║  ¡Eso es todo! 🎉                             ║
╚════════════════════════════════════════════════╝
```

---

**¡Bienvenido a tu nuevo sitio web!**

Nordik Pro - Poder Creativo, Mundo Digital 🚀
