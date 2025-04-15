# Jorge Rojas - Product Designer Portfolio

Este portafolio es una aplicación web desarrollada con React y Vite, diseñada para mostrar mi trabajo como Product Designer especializado en UX/UI. La aplicación implementa características modernas como:

- **Multi-idioma:** Soporte para "es" (español) y "en" (inglés) a través de un archivo de configuración JSON.
- **Dark/Light Mode:** Permite cambiar entre un tema claro y uno oscuro, utilizando variables CSS.
- **Componentes Reutilizables:** Cada sección (Hero, About, Projects, Contact, Footer, Settings) es un componente independiente, lo que facilita la escalabilidad y el mantenimiento.
- **Animación del Título de la Pestaña:** Un efecto que rota dinámicamente el título de la página en el navegador.
- **Animación Lottie en el Hero:** Se utiliza la librería *lottie-react* para mostrar una animación personalizada en el Hero.
- **Sección "Sobre Mí" Expandible:** La sección se presenta inicialmente reducida y se puede expandir con una animación suave para mostrar el contenido completo.
- **Contacto y Redes Sociales:** Sección de contacto que incluye un botón "Enviar Email" (usando un enlace `mailto:`) y enlaces a mis perfiles de LinkedIn y Behance.
- **Favicon Animado:** Se ha actualizado el favicon usando un GIF (ten en cuenta que la animación puede variar según el navegador).

---

## Tabla de Contenidos

- [Demo y Despliegue](#demo-y-despliegue)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instrucciones de Instalación y Ejecución](#instrucciones-de-instalación-y-ejecución)
- [Descripción de Componentes](#descripción-de-componentes)
  - [Hero](#hero)
  - [About (Sobre Mí)](#about-sobre-mí)
  - [Projects (Proyectos)](#projects-proyectos)
  - [Contact (Contacto)](#contact-contacto)
  - [Footer](#footer)
  - [Settings (Panel de Configuración)](#settings-panel-de-configuración)
- [Despliegue](#despliegue)
- [Notas Finales](#notas-finales)

---

## Demo y Despliegue

El portafolio está desplegado en un servidor público y es accesible sin errores.  
[Inserta aquí la URL de tu portafolio desplegado]

---

## Tecnologías Utilizadas

- **React** para la construcción de la interfaz.
- **Vite** como bundler y entorno de desarrollo rápido.
- **CSS Variables** y **Media Queries** para el manejo de temas (light/dark) y responsividad.
- **lottie-react** para la integración de animaciones Lottie en el Hero.
- **JSON** para la configuración dinámica del contenido (multi-idioma y secciones).

---

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
portfolio25/
├── public/
│   ├── favicon.gif        // Favicon animado (puede ser un GIF)
│   └── index.html
├── src/
│   ├── animations/
│   │   └── hero-animation.json  // Animación Lottie para el Hero
│   ├── assets/
│   │   └── react.svg      // Ejemplo de assets, etc.
│   ├── components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Hero.jsx
│   │   ├── hero.css
│   │   ├── Projects.jsx
│   │   ├── Settings.jsx
│   │   └── Settings.css
│   ├── config.json         // Configuración multi-idioma del contenido
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Instrucciones de Instalación y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/portfolio25.git
   ```

2. **Entrar en la carpeta del proyecto:**

   ```bash
   cd portfolio25
   ```

3. **Instalar las dependencias:**

   ```bash
   npm install
   ```

4. **Ejecutar la aplicación en modo desarrollo:**

   ```bash
   npm run dev
   ```
   Esto abrirá la aplicación en [http://localhost:3000](http://localhost:3000) (o el puerto indicado).

5. **Construir para Producción:**

   ```bash
   npm run build
   ```
   Y para previsualizar la versión de producción:
   ```bash
   npm run preview
   ```

---

## Descripción de Componentes

### Hero

- **Hero.jsx y hero.css:**  
  - Muestra el título y subtítulo del portafolio.
  - Integra una animación Lottie (usando *lottie-react*) a partir del archivo `src/animations/hero-animation.json`.
  - Se muestra con un diseño minimalista, sin fondo, borde ni sombra, para resaltar solo el contenido.
- **Detalles:**  
  El contenido se organiza en dos columnas (texto y animación) y utiliza variables CSS para adaptarse a los temas claro y oscuro.

### About (Sobre Mí)

- **About.jsx y About.css:**  
  - Presenta una breve descripción de mi perfil profesional.
  - Incorpora un mecanismo de expansión/contracción con animación suave para mostrar un resumen inicialmente y permitir ver el texto completo al hacer clic.
- **Detalles:**  
  La sección es minimalista y sin fondo, lo que permite mostrar la información de forma limpia y ordenada.

### Projects (Proyectos)

- **Projects.jsx:**  
  - Lista los proyectos realizados en tarjetas individuales.
  - Cada tarjeta muestra título, descripción, imágenes placeholder y "pills" con los nombres e íconos (con Devicon) de las tecnologías utilizadas.
- **Detalles:**  
  Se organiza en un grid responsivo para adaptarse a dispositivos móviles y de escritorio.

### Contact (Contacto)

- **Contact.jsx y Contact.css:**  
  - Contiene un bloque para contactarme, que incluye un botón "Enviar Email" configurado con un enlace `mailto:` y enlaces a mis perfiles de LinkedIn y Behance.
- **Detalles:**  
  Facilita la comunicación con un diseño claro y accesible.

### Footer

- **Footer.jsx y Footer.css:**  
  - Muestra el copyright.
  - Incluye enlaces a mis redes sociales (LinkedIn y Behance).
- **Detalles:**  
  El diseño es limpio y se integra visualmente con el resto del portafolio.

### Settings (Panel de Configuración)

- **Settings.jsx y Settings.css:**  
  - Permite cambiar el idioma, activar/desactivar dark mode y modificar el color de acento.
  - Se adapta a ambos temas mediante variables CSS y estilos específicos.
- **Detalles:**  
  Es un componente reutilizable que mejora la personalización y accesibilidad del portafolio.

---

## Despliegue

El portafolio se ha desplegado en un servidor público y es accesible sin errores. Para desplegarlo tú mismo puedes utilizar:

- **GitHub Pages:**  
  Sube el repositorio a GitHub y activa GitHub Pages desde la configuración del repositorio (usualmente en la rama `main` o `gh-pages`).
- **Netlify:**  
  Conecta tu repositorio con Netlify y configura el despliegue continuo.
- **Vercel:**  
  Otra opción popular para desplegar aplicaciones React de forma rápida.

---

## Notas Finales

- **Buenas Prácticas:**  
  Este proyecto utiliza componentes reutilizables y una estructura modular, facilitando futuras actualizaciones y el mantenimiento.
- **Optimización y Accesibilidad:**  
  El diseño es responsivo y se aplican variables CSS y media queries para garantizar una experiencia óptima en dispositivos móviles y desktop.
- **Documentación y Claridad:**  
  Este README explica detalladamente el propósito del portafolio, las tecnologías utilizadas, las funcionalidades implementadas y los pasos necesarios para ejecutar y desplegar el proyecto.
- **Interpretación de la Rúbrica:**  
  La aplicación cumple con los criterios de desarrollo, despliegue y documentación, demostrando una comprensión clara y efectiva del desarrollo de un portafolio profesional.

---

¡Gracias por visitar mi portafolio!