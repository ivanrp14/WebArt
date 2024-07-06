import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1 className="contact-title">Contáctanos</h1>
        <p className="contact-description">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros a través de cualquiera de los siguientes medios.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>Teléfono: +123 456 7890</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Email: info@meldog.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Dirección: 123 Calle Falsa, Ciudad, País</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
