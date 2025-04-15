import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contáctame</h2>
      <p className="contact-description">
        ¿Tienes alguna consulta o propuesta? ¡Escríbeme!
      </p>
      <a
        href="mailto:jorge.rojas.guerrero@gmail.com?subject=Contacto%20desde%20el%20portafolio"
        className="contact-button"
      >
        Enviar Email
      </a>
    </section>
  );
}

export default Contact;
