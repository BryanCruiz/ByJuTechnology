import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const sections = ['inicio', 'about', 'servicios', 'contacto', 'portafolio'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <img src={require('../../assets/Logotipo__BYJU_New.png')} alt="Logo" className="logo" />

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Nosotros</a>
        <a href="#servicios" className={activeSection === 'servicios' ? 'active' : ''}>Servicios</a>
        <a href="#contacto" className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a>
        <a href="#portafolio" className={activeSection === 'portafolio' ? 'active' : ''}>Portafolio</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
