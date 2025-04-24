import React from 'react';
import './servicios.css';
import { FaCode, FaMobileAlt, FaBullhorn, FaPaintBrush, FaTools, FaRobot, FaChartLine, FaShoppingCart} from 'react-icons/fa';

const Servicio = () => {
  return (
    <section className="services" id="servicios">
      <div className="services-container">
        <h2 className="section-title">Conoce nuestros <spam className="wordService">Servicios</spam></h2>
        <div className="services-grid">
          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Desarrollo Web</h3>
            <hr className="about-divider" />
            <p>Creación de sitios web modernos, rápidos y responsivos con tecnologías actuales.</p>
          </div>
          <div className="service-card">
            <FaMobileAlt className="service-icon" />
            <h3>Apps Móviles</h3>
            <hr className="about-divider" />
            <p>Desarrollo de aplicaciones móviles personalizadas para Android.</p>
          </div>
          <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Marketing Digital</h3>
            <hr className="about-divider" />
            <p>Estrategias de posicionamiento, redes sociales y campañas que impulsan tu marca en línea.</p>
          </div>
          <div className="service-card">
            <FaPaintBrush className="service-icon" />
            <h3>Diseño UI/UX</h3>
            <hr className="about-divider" />
            <p>Interfaces atractivas y funcionales que mejoran la experiencia del usuario.</p>
          </div>
          <div className="service-card">
            <FaTools className="service-icon" />
            <h3>Mantenimiento Preventivo y Correctivo</h3>
            <hr className="about-divider" />
            <p>Diagnóstico, reparación y optimización de equipos para un funcionamiento eficiente y seguro.</p>
          </div>
        <div className="service-card">
          <FaShoppingCart className="service-icon" />
          <h3>Desarrollo de Sistemas de Punto de Venta</h3>
          <hr className="about-divider" />
          <p>Soluciones personalizadas para gestionar ventas, inventario y clientes de manera eficiente.</p>
        </div>
        <div className="service-card">
            <FaRobot className="service-icon" />
            <h3>Chatbots Inteligentes</h3>
            <hr className="about-divider" />
            <p>Automatiza la atención al cliente con asistentes virtuales personalizados.</p>
          </div>
        <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>Optimización SEO</h3>
            <hr className="about-divider" />
            <p>Mejora tu visibilidad en buscadores con técnicas de posicionamiento web.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Servicio;
