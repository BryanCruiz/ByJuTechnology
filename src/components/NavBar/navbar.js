import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <nav className="navbar">
      <img src={require('../../assets/Logotipo__BYJU_New.png')} alt="Logo" className="logo" />

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio">Inicio</a>
        <a href="#about">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
        <a href="#portafolio">Portafolio</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  )
}

export default Navbar
