import React from 'react';
import './testimonios.css';
import { FaStar } from 'react-icons/fa';

import cliente1 from '../../assets/FotoPerfilTree.png';
import cliente2 from '../../assets/FotoPerfilOne.png';
import cliente3 from '../../assets/FotoPerfilTwo.png';

const testimoniosData = [
  {
    nombre: 'Carlos Ramírez',
    cargo: 'CEO de TechNova',
    texto: 'Excelente servicio y atención. Nos ayudaron a lanzar nuestra app en tiempo récord.',
    calificacion: 5,
    imagen: cliente1
  },
  {
    nombre: 'Laura Méndez',
    cargo: 'Gerente de Marketing',
    texto: 'El equipo entendió perfectamente lo que necesitábamos. ¡Muy recomendados!',
    calificacion: 4,
    imagen: cliente2
  },
  {
    nombre: 'Eduardo Sánchez',
    cargo: 'Dueño de tienda',
    texto: 'Gracias a su sistema de punto de venta, hemos optimizado nuestras ventas.',
    calificacion: 5,
    imagen: cliente3
  }
];

const Testimonios = () => {
  return (
    <section className="testimonios" id="testimonios">
      <h2 className="section-title">Reseñas de nuestros <span className="wordClientes">clientes</span></h2>
      <div className="testimonios-container">
        {testimoniosData.map((testimonio, index) => (
          <div key={index} className="testimonio-card">
            <img src={testimonio.imagen} alt={testimonio.nombre} className="testimonio-imagen" />
            <p className="testimonio-texto">"{testimonio.texto}"</p>
            <div className="testimonio-stars">
              {Array.from({ length: testimonio.calificacion }, (_, i) => (
                <FaStar key={i} className="estrella" />
              ))}
            </div>
            <h4 className="testimonio-nombre">{testimonio.nombre}</h4>
            <p className="testimonio-cargo">{testimonio.cargo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
