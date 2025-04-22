import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
  require('../../assets/ImagenOne.png'),
  require('../../assets/ImagenTwo.png'),
  require('../../assets/ImagenTree.png')
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia cada 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section" id="inicio">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === current ? 'active' : ''}`}
          >
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Carousel;
