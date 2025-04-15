import React, { useState, useEffect } from "react";
import "./App.css";
import config from "./config.json";
import Settings from "./components/Settings.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState("light");
  const [accentColor, setAccentColor] = useState("#007bff");

  // Actualiza atributos y variables CSS para light / dark mode
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty("--accent-color", accentColor);
  }, [theme, accentColor]);

  // Animación del título de la pestaña: Rota el string para simular movimiento
  useEffect(() => {
    const baseTitle = "Jorge Rojas - Product Designer   ▸   "; // Texto base con un caracter especial para animar
    let animatedTitle = baseTitle;
    const interval = setInterval(() => {
      animatedTitle = animatedTitle.slice(1) + animatedTitle[0];
      document.title = animatedTitle;
    }, 300); // Cambia cada 300 ms (ajusta este valor si lo deseas)
    return () => clearInterval(interval);
  }, []);

  const siteData = config[language];

  return (
    <div className="App">
      <Settings
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
      <Hero hero={siteData.hero} />
      <About about={siteData.about} />
      <Projects projectsData={siteData.projects} />
      <Contact />
      <Footer footerText={siteData.footer} />
    </div>
  );
}

export default App;
