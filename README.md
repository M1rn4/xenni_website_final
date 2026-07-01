# xenni - IA práctica para docentes

Landing page para un curso intensivo de inteligencia artificial diseñado para docentes de aula que quieren planificar sesiones, crear materiales, evaluar y ahorrar horas cada semana.

## 🎯 Sobre el Curso

**Enseña con IA. Ahorra horas cada semana.**

Aprende a aplicar IA en el aula en 5 horas en vivo: planificación, materiales, evaluaciones y flujos semanales para docentes.

### Qué obtienes:
- 📚 **Sesiones de clase** generadas y adaptadas con IA
- 📝 **Exámenes y rúbricas** listos para ajustar a tu aula
- 🎨 **Material visual y fichas** para explicar tus temas
- 🧩 **Banco de actividades** por grado y nivel
- ✅ **Certificado verificable** para respaldar tu capacitación

### Curso de 5 horas | S/150 por persona

---

## 🎨 Diseño

La página está diseñada con:
- **Paleta de colores**: Fondo crema suave, acentos en verde neón lime, tonos pastel
- **Tipografía**: Serif elegante para headings, sans-serif moderno para body text
- **Componentes**: Cards minimalistas, badges de estado, indicadores visuales
- **Espaciado**: Generoso y limpio, fácil de leer

## 🛠️ Tecnologías

- **React 18**: Framework UI moderno
- **Tailwind CSS**: Utilidades para estilos
- **Vite**: Build tool rápido y eficiente
- **Cloudflare Pages**: Deployment automático desde GitHub
- **JavaScript ES6+**: JavaScript moderno

## 📦 Estructura

```
xenni_website_final/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación principal
│   │   ├── Hero.jsx            # Sección hero - IA para docentes
│   │   ├── Features.jsx        # Qué crearás para el aula
│   │   ├── Modules.jsx         # 4 módulos del curso
│   │   ├── HowItWorks.jsx      # Flujo docente en 4 pasos
│   │   ├── Results.jsx         # Resultados y entregas
│   │   ├── Benefits.jsx        # Avances y beneficios docentes
│   │   ├── Instructors.jsx     # Mirna Ampuero - IA aplicada a educación
│   │   ├── FAQ.jsx             # Preguntas frecuentes
│   │   ├── CTA.jsx             # Call to action final
│   │   └── Footer.jsx          # Pie de página + redes sociales
│   ├── assets/
│   │   └── MIRNA2.jpg          # Foto de la instructora
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada React
│   └── index.css               # Estilos globales + Tailwind
├── public/
│   └── _redirects              # Configuración de rutas Cloudflare
├── index.html                  # HTML principal
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración de PostCSS
├── wrangler.toml               # Configuración de Cloudflare Pages
├── CLOUDFLARE_SETUP.md         # Guía de setup en Cloudflare
└── package.json                # Dependencias y scripts
```

## 🚀 Instalación y ejecución

### Requisitos
- Node.js 18+
- npm o yarn


### Pasos

1. **Instalar dependencias**
```bash
npm install
```

2. **Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`

3. **Build para producción**
```bash
npm run build
```

4. **Ver build en local**
```bash
npm run preview
```

## 📄 Secciones de la página

- **Hero**: Headline principal, descripción y panel de estado del curso
- **Features**: entregables docentes concretos
- **Modules**: 4 módulos prácticos de IA aplicada al aula
- **Benefits**: beneficios y avances para docentes
- **How It Works**: flujo de tema a clase lista
- **Instructors**: perfil de Mirna Ampuero
- **FAQ**: 6 preguntas frecuentes expandibles
- **CTA**: Call to action final para reservar lugar
- **Footer**: Links de navegación, legal y redes sociales

## 🎯 Personalización

Para modificar el contenido:
- **Textos**: Edita los archivos en `src/components/`
- **Colores**: Modifica `tailwind.config.js` en la sección `colors`
- **Fuentes**: Actualiza en `tailwind.config.js` en la sección `fontFamily`
- **Componentes**: Los componentes son independientes y fáciles de modificar

## 💡 Notas de desarrollo

- Todos los componentes utilizan Tailwind CSS para estilos
- Los colores están centralizados en la configuración de Tailwind
- La página es completamente responsiva (mobile, tablet, desktop)
- Las animaciones son suaves y performantes
- Los enlaces de navegación usan scroll suave

## 📝 License

Este proyecto está disponible para uso personal y educativo.
