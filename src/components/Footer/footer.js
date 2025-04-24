import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <h2>ByJu Technologies</h2>
          <p>Tu aliado en soluciones digitales.</p>
        </div>

        <div className="footer-section links">
          <h3>Navegación</h3>
          <a href="#inicio">Inicio</a>
          <a href="#about">About</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
          <a href="#testimonios">Testimonios</a>
        </div>

        <div className="footer-section social">
          <h3>Redes Sociales</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" /> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" /> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" /> Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mi Sitio. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
