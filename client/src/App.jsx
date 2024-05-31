import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Header from './components/Header/Header';
import Home from './components/Home/Home'; // Asegúrate de tener estos componentes
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Alert from './components/Alert';
import foto from './assets/img/johan.jpg';


const App = () => {


  return (
    <div>
      <Header />
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingWhatsApp
      phoneNumber='+573027777134'
      accountName='Johan Riascos'
      avatar={foto}
      statusMessage='Responde inmediatamente'
      chatMessage='Hola! Me gustaria ser parte de tu equipo! ¿Hablamos?'
      notification={true}
    />
    </div>
  );
};

export default App;
