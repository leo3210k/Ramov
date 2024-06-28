import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhatsappButton from '../components/WhatsappButton';
import Benefits from '../components/Benefits';
import Segments from '../components/Segments';
import './App.css';
import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Services />
      <WhatsappButton />
      <Benefits />
      <Segments />
      <About />
    </div>
  );
}

export default App;
