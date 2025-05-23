import React from 'react';
import './home.css';
import heroImage from '../../assets/ImgFondo_02.png'; // Cambia esto según tu imagen

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="text-content">
          <h1><span>ByJu Technologies</span></h1>
          <h2>Soluciones digitales para transformar tu negocio</h2>
          <p>Desarrollamos sistemas inteligentes, aplicaciones móviles y soluciones digitales hechas a la medida, 
            optimizando procesos, mejorando la productividad y potenciando el crecimiento tecnológico de tu empresa.</p>
          <a href="#servicios" className="cta-button">Conoce nuestros servicios</a>
        </div>
        <div className="image-content">
          <img src={heroImage} alt="Tecnología" />
        </div>
      </div>
    </section>
  );
};

export default Home;
