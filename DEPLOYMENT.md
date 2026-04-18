# 🚀 Guía de Deployment - Nordik.pro

Instrucciones paso a paso para desplegar tu sitio web a producción.

---

## 📋 Opciones de Hosting

### ⭐ Opción 1: Vercel (RECOMENDADO)

**Ventajas:**
- Muy fácil de configurar
- Deploy automático desde Git
- HTTPS gratis
- Soporte para Next.js, React, Vue, etc.
- Preview URLs para cada PR

**Pasos:**

1. **Crear cuenta en Vercel**
   ```
   https://vercel.com
   ```

2. **Conectar tu repositorio**
   - Conecta tu GitHub/GitLab/Bitbucket
   - Selecciona el repositorio `nordik-support`

3. **Configurar proyecto**
   - Framework: `React`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables: (las que necesites)

4. **Deploy**
   ```
   Vercel desplegará automáticamente cada vez que hagas push a main
   ```

---

### Opción 2: Netlify

**Pasos:**

1. **Crear cuenta**
   ```
   https://netlify.com
   ```

2. **Conectar repositorio**
   - New site from Git
   - Selecciona tu repo

3. **Configurar build**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   ```
   Netlify desplegará automáticamente
   ```

---

### Opción 3: GitHub Pages

**Pasos:**

1. **Configurar vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/nordik-support/',
     // ...
   })
   ```

2. **Agregar script en package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && git add dist && git commit -m 'deploy' && git subtree push --prefix dist origin gh-pages"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

---

### Opción 4: Tu Servidor Propio (VPS)

**Requisitos:**
- Servidor Linux (Ubuntu 20.04+)
- Node.js 16+
- Nginx o Apache
- SSL Certificate (Let's Encrypt)

**Pasos:**

1. **Instalar dependencias**
   ```bash
   # Instalar Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Instalar Nginx
   sudo apt-get install -y nginx
   ```

2. **Clonar proyecto**
   ```bash
   git clone https://github.com/tu-usuario/nordik-support.git
   cd nordik-support
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   npm run build
   ```

4. **Configurar Nginx**
   ```nginx
   # /etc/nginx/sites-available/nordik.pro
   server {
     listen 80;
     server_name nordik.pro www.nordik.pro;
     root /home/user/nordik-support/dist;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
     
     # Para assets
     location ~* \.(js|css|png|jpg|gif|svg|woff|woff2)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
     }
   }
   ```

5. **Habilitar sitio**
   ```bash
   sudo ln -s /etc/nginx/sites-available/nordik.pro /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Configurar SSL (Let's Encrypt)**
   ```bash
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d nordik.pro -d www.nordik.pro
   ```

---

## 🔐 Configuración de Producción

### Variables de Entorno

Crear archivo `.env.production`:
```env
VITE_API_URL=https://api.nordik.pro
VITE_GA_ID=G-XXXXXXXXXX
VITE_ENVIRONMENT=production
```

### Optimizaciones

1. **Minificación**
   ```bash
   npm run build
   ```
   Vite minifica automáticamente en build

2. **Compresión Gzip**
   En Nginx:
   ```nginx
   gzip on;
   gzip_types text/plain text/css text/javascript application/json;
   gzip_min_length 1000;
   ```

3. **Caché de Browser**
   ```nginx
   location ~* \.(js|css|png|jpg)$ {
     expires 1y;
     add_header Cache-Control "public, immutable";
   }
   ```

---

## 📦 Checklist Pre-Deploy

- [ ] Todos los cambios en Git
- [ ] Tests pasando (`npm test`)
- [ ] Build sin errores (`npm run build`)
- [ ] Variables de entorno configuradas
- [ ] SEO meta tags correctos
- [ ] Analytics configurado
- [ ] Formularios conectados al backend
- [ ] SSL/HTTPS habilitado
- [ ] Dominio apuntando al servidor
- [ ] Backups configurados
- [ ] Monitoring activado
- [ ] Logs habilitados

---

## 🔄 Despliegue Continuo (CI/CD)

### GitHub Actions

Crear archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        github-token: ${{ secrets.GITHUB_TOKEN }}
```

---

## 🆘 Troubleshooting

### Problema: "Cannot GET /"

**Solución:** Configurar servidor para servir index.html en rutas que no existen

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ /index.html [QSA,L]
</IfModule>
```

---

### Problema: CORS errors

**Solución en backend:**
```javascript
app.use(cors({
  origin: ['https://nordik.pro', 'https://www.nordik.pro'],
  credentials: true
}));
```

---

### Problema: Builds lentos

**Soluciones:**
1. Usar `npm ci` en lugar de `npm install`
2. Agregar node_modules a .gitignore
3. Usar caching en CI/CD

---

## 📊 Monitoreo Post-Deploy

### Uptime Monitoring
- Usar Uptimerobot o similar
- Verificar sitio cada 5 minutos

### Performance Monitoring
```javascript
// Agregar en App.jsx
useEffect(() => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance:', entry.name, entry.duration);
      }
    });
    observer.observe({ entryTypes: ['navigation', 'resource'] });
  }
}, []);
```

### Error Tracking
- Usar Sentry o similar para detectar errores en producción

---

## 🎯 URLs Importantes

- **Sitio Principal:** https://nordik.pro
- **Centro de Soporte:** https://nordik.pro/soporte
- **Admin/Dashboard:** (si aplica)

---

## 🚨 En Caso de Emergencia

1. **Deshacer último deploy:**
   ```
   Vercel/Netlify: Revert deployment en dashboard
   ```

2. **Restaurar backup:**
   ```bash
   git revert <commit_id>
   git push
   ```

3. **Contactar soporte:**
   - Email: hola@nordik.pro
   - WhatsApp: +52 (644) 145-7855

---

## 📈 Próximos Pasos

1. ✅ Build & Deploy completado
2. ⬜ Configurar dominio
3. ⬜ Integrar backend
4. ⬜ Configurar emails
5. ⬜ Agregar analytics
6. ⬜ Optimizar SEO
7. ⬜ Monitorear performance
8. ⬜ Hacer marketing

---

*Última actualización: Abril 2026*
