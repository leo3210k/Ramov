import './App.css';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Services from '../components/Services';
import WhatsappButton from '../components/WhatsappButton';
import Benefits from '../components/Benefits';
import Segments from '../components/Segments';
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
      <Footer />
    </div>
  );
}

export default App;
