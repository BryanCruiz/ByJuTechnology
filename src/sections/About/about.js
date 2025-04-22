import React, { useState } from 'react';
import './about.css';
import equipoImage from '../../assets/Logotipo__BYJU.png';
import valoresImage from '../../assets/ImagenTwo1.png'; // Imagen adicional

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={equipoImage} alt="Equipo profesional" />
        </div>
        <div className="about-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            En <strong>ByJu Technologies</strong>, nos especializamos en brindar soluciones tecnológicas a la medida, adaptándonos a las necesidades únicas de nuestros clientes. 
            Nuestro equipo de expertos trabaja con compromiso y excelencia para ofrecer resultados excepcionales.
            Contamos con estrategias de marketing personalizadas que permiten a nuestros clientes alcanzar sus objetivos comerciales y maximizar su presencia en el mercado.
          </p>
          <button className="about-btn" onClick={() => setShowModal(true)}>
            Ver más
          </button>

          <img src={valoresImage} alt="Nuestros valores" className="valores-img" />
        </div>
      </div>

      {/* Modal con información */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           <img src={require('../../assets/Logotipo__BYJU_New.png')} alt="Logo" className="logoModal" />

            <p><strong>Misión:</strong> Ofrecer soluciones tecnológicas innovadoras que impulsen el crecimiento y éxito de nuestros clientes.</p>
           <br></br>
            <p><strong>Visión:</strong> Ser líderes en el desarrollo de herramientas digitales que transformen empresas y negocios.</p>
            <br></br>
            <p><strong>Valores:</strong> Compromiso, innovación, calidad, integridad y orientación al cliente.</p>

           
            <button onClick={() => setShowModal(false)} className="close-btn">Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
