import React from 'react'
import Navbar from './components/NavBar/navbar'
import Home from './sections/Home/home'
import About from './sections/About/about'
import Servicio from './sections/Servicios/servicios'
import Contacto from './sections/Contacto/contacto'
import Portafolio from './sections/Portafolio/portafolio'
import Footer from './components/Footer/footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <About />
      <hr className="about-dividerA" />

      <Servicio />
      <hr className="about-dividerS" />

      <Contacto />

      <Portafolio />

      <Footer/>
    </>
  )
}

export default App
