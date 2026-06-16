# Cloudflare Pages Setup

## Configuración en Cloudflare Dashboard

### Build Settings
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Deploy command:** `npm run deploy` (o déjalo vacío)
- **Root directory:** `/` (default)

### Environment
- **Node.js version:** 18.x o superior

## Cómo hacer cambios

1. **Hacer cambios localmente:**
   ```bash
   git add .
   git commit -m "tu mensaje"
   git push
   ```

2. **Cloudflare detectará automáticamente los cambios y:**
   - Ejecutará `npm run build`
   - Copiará todo a `dist`
   - Desplegará en Cloudflare Pages

3. **No necesitas hacer nada más en Cloudflare** - todo es automático desde GitHub

## Archivos de configuración

- `wrangler.toml` - Configuración de Cloudflare Pages
- `public/_redirects` - Manejo de rutas para SPA (Single Page App)
- `vite.config.js` - Configuración de build

## Si algo falla

Mira los logs en Cloudflare Pages → Deployments → Ver detalles del error
