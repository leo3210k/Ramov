import './App.css';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Services from '../components/Services';
import WhatsappFixed from '../components/utils/WhatsappFixed';
import Benefits from '../components/Benefits';
import Segments from '../components/Segments';
import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App scroll-smooth">
      <Hero />
      <Contact />
      <Services />
      <WhatsappFixed />
      <Benefits />
      <Segments />
      <About />
      <Footer />
    </div>
  );
}

export default App;
