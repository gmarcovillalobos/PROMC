# 🎨 NORDIK PRO - Proyecto React + Vite

## 📌 Resumen General

Se ha creado un **sitio web profesional y épico** para Nordik.pro con tu logo real y diseño minimalista futurista con trazos lineales. El proyecto está construido con React + Vite para máximo rendimiento.

---

## 🎯 Lo que incluye el proyecto

### ✨ Página Principal (Home)
- **Header Sticky** con navegación elegante
- **Hero Section** con animación SVG 3D lineal
- **Sección de Servicios** (Diseño 3D, Web, Apps, Soporte)
- **Portfolio** con SVGs lineales minimalistas para cada proyecto
- **Features Grid** con cards interactivas
- **Stats Section** (500+ Clientes, 99.9% Uptime, <2min)
- **Steps** con línea conectora animada
- **CTA Buttons** con ripple effects
- **Footer** con links a redes sociales

### 🛠️ Página de Soporte (Support)
- **Mismo diseño y colores** que la página principal
- **Enfoque en RustDesk** (solo soporte remoto)
- **4 pasos simples** para usar el servicio
- **FAQs modal** totalmente funcional
- **WhatsApp preconfigurado**
- **Botón volver a nordik.pro**

### 🎭 Componentes Incluidos

1. **Header.jsx** - Navegación con logo real
2. **Hero.jsx** - Sección principal con SVG animado
3. **Services.jsx** - 4 servicios principales
4. **Portfolio.jsx** - 4 proyectos con SVGs lineales personalizados
5. **Features.jsx** - 4 características clave
6. **Stats.jsx** - Estadísticas y números
7. **Steps.jsx** - Pasos del proceso
8. **CTA.jsx** - Botones de llamada a acción
9. **FAQ.jsx** - Modal de preguntas frecuentes
10. **Footer.jsx** - Pie de página con redes
11. **Particles.jsx** - Fondo con partículas animadas

---

## 🎨 Diseño Visual

### Colores Principales
- **Azul Nordik**: `#009DFF`
- **Fucsia Nordik**: `#E71CEB`
- **Fondo Oscuro**: `#10101A`
- **Fondo Secundario**: `#1C1C2E`
- **Gris Claro**: `#E5E7EB`
- **Gris Oscuro**: `#6B7280`

### Elementos Visuales
- **Partículas flotantes** animadas en el fondo
- **Gradientes Nordik** en textos y botones
- **Efectos Glow** en hover
- **SVGs lineales minimalistas** para no ser realistas
- **Transiciones suaves** en todas partes
- **Backdrop filters** (blur) en cards

### Animaciones
- **Fade In** - Aparición suave
- **Slide Up/Down** - Deslizamientos
- **Scale & Rotate** - Escala y rotación
- **Pulse** - Pulsación del logo
- **Float** - Flotación de elementos
- **Bounce** - Rebote en números
- **Border Glow** - Brillo en bordes

---

## 📱 Responsive Design

El proyecto es **100% responsive**:
- ✓ Desktop (1200px+)
- ✓ Tablet (768px - 1199px)
- ✓ Mobile (< 768px)

Todos los componentes se adaptan automáticamente con media queries.

---

## 🚀 Cómo Usar

### 1. Instalación
```bash
cd nordik-support
npm install
```

### 2. Desarrollo
```bash
npm run dev
```
Abre `http://localhost:5173` en tu navegador

### 3. Build para Producción
```bash
npm run build
```

### 4. Preview de la Build
```bash
npm run preview
```

---

## 📦 Estructura de Carpetas

```
nordik-support/
├── public/
│   └── logo.png                    ← Tu logo real
├── src/
│   ├── components/
│   │   ├── Header.jsx + Header.css
│   │   ├── Hero.jsx + Hero.css
│   │   ├── Services.jsx + Services.css
│   │   ├── Portfolio.jsx + Portfolio.css
│   │   ├── Features.jsx + Features.css
│   │   ├── Stats.jsx + Stats.css
│   │   ├── Steps.jsx + Steps.css
│   │   ├── CTA.jsx + CTA.css
│   │   ├── FAQ.jsx + FAQ.css
│   │   ├── Footer.jsx + Footer.css
│   │   └── Particles.jsx + Particles.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                   ← Variables CSS
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

---

## 🎯 Características Especiales

### ✦ SVGs Lineales Minimalistas
- Diagrama 3D para diseño 3D
- Wireframe web para desarrollo web
- Mobile frame para apps
- Gráfico lineal para analytics
- Totalmente personalizables

### ✦ Animaciones Épicas
- Header sticky con blur effect
- Logo con pulse infinito
- Partículas de fondo flotantes
- Cards que se elevan en hover
- Línea conectora en steps
- Modal FAQ con transiciones suaves

### ✦ Interactividad
- Botones con ripple effect
- Links con underline animation
- FAQs funcionales
- Links a WhatsApp preconfigurados
- Social media links
- Smooth scroll

---

## 🔧 Personalización

### Cambiar Colores
Edita el archivo `src/index.css`:
```css
:root {
  --blue: #009DFF;
  --fuchsia: #E71CEB;
  /* ... más variables */
}
```

### Cambiar Textos
Cada componente tiene su contenido en un array o props. Solo edita el archivo `.jsx` del componente.

### Cambiar Logo
Reemplaza `/public/logo.png` con tu nuevo logo.

### Agregar Más Proyectos
En `Portfolio.jsx`, agrega más objetos al array `projects`.

### Modificar SVGs
Los SVGs están inline en los componentes. Edítales directamente usando herramientas como Figma o Adobe XD.

---

## 📊 Performance

- **Vite** proporciona hot reload rápidísimo
- **React 18** con suspense y code splitting
- **Framer Motion** optimizado para 60fps
- **CSS3** sin librerías pesadas
- **SVGs** vectoriales escalables
- **Lazy loading** de componentes

---

## 🌐 Deploy

El proyecto puede deployarse en:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**
- Tu servidor propio

```bash
npm run build
# Upload la carpeta 'dist' a tu servidor
```

---

## 🎓 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|----------|
| React | 18.2.0 | UI Library |
| Vite | 4.3.9 | Bundler |
| Framer Motion | 10.16.4 | Animaciones |
| CSS3 | - | Styling |
| Font Awesome | 6.4.0 | Icons |

---

## 💡 Next Steps

1. **Cambiar los datos**: Personaliza textos, imágenes y datos
2. **Conectar formularios**: Agrega backend para contacto
3. **Analytics**: Integra Google Analytics
4. **SEO**: Agrega meta tags y schema
5. **Deploy**: Publica en tu hosting
6. **Mantenimiento**: Actualiza contenido regularmente

---

## 🤝 Personalizaciones Recomendadas

- [ ] Cambiar número de WhatsApp
- [ ] Agregar más proyectos al portfolio
- [ ] Cambiar textos al español
- [ ] Agregar tus propios SVGs
- [ ] Integrar formulario de contacto
- [ ] Agregar GA4 tracking
- [ ] Optimizar imágenes
- [ ] Hacer backup del código

---

## 📞 Contacto

**Nordik Pro**
- 🌐 https://nordik.pro
- 💬 https://wa.me/5216441457855
- 📸 @nordik.pro (Instagram)
- 📘 nordikpro (Facebook)

---

## 🎉 ¡Disfruta tu nuevo sitio web!

El proyecto está listo para usar. Solo sigue las instrucciones de instalación y ejecución.

**Made with ❤️ by Nordik - Poder Creativo, Mundo Digital**

---

*Última actualización: Abril 2026*
*Versión: 1.0.0*
