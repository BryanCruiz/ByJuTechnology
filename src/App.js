import React from 'react'
import Navbar from './components/NavBar/navbar'
import Home from './sections/Home/home'
import About from './sections/About/about'
import Servicio from './sections/Servicios/servicios'
import Contacto from './sections/Contacto/contacto'
import Testimonios from './sections/Testimonios/testimonios'
import Footer from './components/Footer/footer'
import Whatsapp from './components/WhatsApp/whatsapp'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
   
      <hr className="about-dividerA" />
      <Contacto />
      <Servicio />
      <hr className="about-dividerT" />
      <About />
      
      <hr className="about-dividerS" />
      <Testimonios />
      <Whatsapp />
      <Footer/>
    </>
  )
}

export default App
