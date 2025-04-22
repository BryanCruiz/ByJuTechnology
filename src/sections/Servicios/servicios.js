import React from 'react';
import './servicios.css';
import { FaCode, FaMobileAlt, FaBullhorn, FaPaintBrush } from 'react-icons/fa';

const Servicio = () => {
  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web modernos, rápidos y responsivos con tecnologías actuales.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Apps Móviles</h3>
            <p>Desarrollo de aplicaciones móviles personalizadas para Android.</p>
          </div>
          <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Marketing Digital</h3>
            <p>Estrategias de posicionamiento, redes sociales y campañas que impulsan tu marca en línea.</p>
          </div>
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>Diseño UI/UX</h3>
            <p>Interfaces atractivas y funcionales que mejoran la experiencia del usuario.</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web modernos, rápidos y responsivos con tecnologías actuales.</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web modernos, rápidos y responsivos con tecnologías actuales.</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web modernos, rápidos y responsivos con tecnologías actuales.</p>
          </div>
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web modernos, rápidos y responsivos con tecnologías actuales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicio;
