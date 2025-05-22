import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsapp.css';

const Whatsapp = () => {
  return (
    <div className="whatsapp-container">
      <a
        href="https://wa.me/4471291441" // Cambia al número real
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-tooltip">¿Tienes preguntas? Contáctame</span>
      </a>
    </div>
  );
};

export default Whatsapp;
