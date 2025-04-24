import React, { useState } from 'react';
import './contacto.css';

const Contacto = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/mwplgnnd', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        
        <div className="contact-form">
          <h2>¡Contacta ya!</h2>
          {submitted ? (
            <p className="success-message">¡Gracias! Te contactaremos pronto.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nombre completo" required />
              <input type="email" name="email" placeholder="Correo electrónico" required />
              
              <select name="service" required>
                <option value="">Selecciona un servicio</option>
                <option value="Diseño web">Diseño web</option>
                <option value="Desarrollo de aplicaciones">Desarrollo de aplicaciones</option>
                <option value="Marketing digital">Marketing digital</option>
                <option value="E-commerce">E-commerce</option>
              </select>

              <textarea name="message" rows="5" placeholder="Describe tu proyecto o idea" required></textarea>
              <button type="submit">Enviar Cotización</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacto;
