import React, { useState, useRef, useEffect } from "react";
import "./About.css";

function About({ about }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("80px"); // Altura colapsada

  useEffect(() => {
    if (expanded && contentRef.current) {
      // Cuando se expande, se ajusta el max-height al scrollHeight real del contenido
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("80px");
    }
  }, [expanded]);

  const toggleExpanded = () => setExpanded(prev => !prev);

  return (
    <section className="about-section">
      <h2 className="about-title">{about.title}</h2>
      <div
        className="about-content-container"
        style={{ maxHeight: maxHeight }}
      >
        <p ref={contentRef} className="about-content">
          {about.content}
        </p>
        {!expanded && <div className="fade-overlay"></div>}
      </div>
      {about.content.length > 0 && (
        <button className="expand-btn" onClick={toggleExpanded}>
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </section>
  );
}

About.defaultProps = {
  about: {
    title: "Sobre Mí",
    content:
      "Soy Jorge Rojas, Product Designer con amplia experiencia en diseño UX/UI. He desarrollado soluciones digitales para sectores como la construcción, el retail, la importación y la fabricación. Mi enfoque se centra en la investigación de usuarios y el diseño centrado en las personas, lo que me permite liderar proyectos integrales con creatividad y precisión. Mi formación en Diseño Industrial y mi especialización en Product Design respaldan mi capacidad para crear experiencias digitales efectivas y estéticamente atractivas."
  }
};

export default About;
