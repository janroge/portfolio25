import React from "react";
import "./Contact.css";

function Contact({ contact }) {
  return (
    <section className="contact-section">
      <h2 className="contact-title">{contact.title}</h2>
      <p className="contact-description">{contact.description}</p>
      <a
        href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`}
        className="contact-button"
      >
        {contact.buttonLabel}
      </a>
    </section>
  );
}

Contact.defaultProps = {
  contact: {
    title: "Contáctame",
    description: "Si deseas más información o tienes alguna consulta, ¡no dudes en contactarme!",
    email: "jorge.rojas.guerrero@gmail.com",
    subject: "Contacto desde el portafolio",
    buttonLabel: "Enviar Email"
  }
};

export default Contact;
