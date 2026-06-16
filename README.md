# xenni - Inteligencia Artificial para Profesionales xx

Una landing page moderna para una plataforma educativa de inteligencia artificial, diseñada para profesionales que quieren dominar IA.

## 🎨 Diseño

La página está inspirada en el estilo de [xenni.lat](https://xenni.lat/) con:
- **Paleta de colores**: Fondo crema suave, acentos en verde neón lime, tonos pastel
- **Tipografía**: Serif elegante para headings, sans-serif moderno para body text
- **Componentes**: Cards minimalistas, badges de estado, indicadores visuales
- **Espaciado**: Generoso y limpio, fácil de leer

## 🛠️ Tecnologías

- **React 18**: Framework UI moderno
- **Tailwind CSS**: Utilidades para estilos
- **Vite**: Build tool rápido y eficiente
- **JavaScript ES6+**: JavaScript moderno

## 📦 Estructura

```
xenni_website_final/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación principal
│   │   ├── Hero.jsx            # Sección hero con CTA
│   │   ├── Features.jsx        # Características principales
│   │   ├── Modules.jsx         # Módulos del curso
│   │   ├── HowItWorks.jsx      # Cómo funciona el curso
│   │   ├── Benefits.jsx        # Beneficios e incluye
│   │   ├── Instructors.jsx     # Equipo de instructores
│   │   ├── FAQ.jsx             # Preguntas frecuentes
│   │   ├── CTA.jsx             # Call to action final
│   │   └── Footer.jsx          # Pie de página
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada React
│   └── index.css               # Estilos globales + Tailwind
├── index.html                  # HTML principal
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración de PostCSS
└── package.json                # Dependencias y scripts
```

## 🚀 Instalación y ejecución

### Requisitos
- Node.js 16+ 
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
- **Features**: 4 características principales (Instructores, Proyecto Real, Comunidad, Certificado)
- **Modules**: 8 semanas de contenido del curso
- **Benefits**: 6 beneficios principales del curso
- **How It Works**: Proceso en 4 pasos para inscribirse y aprender
- **Instructors**: Perfiles de 4 instructores expertos
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
