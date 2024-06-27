import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhatsappButton from '../components/WhatsappButton';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Services />
      <WhatsappButton />
      <Benefits />
    </div>
  );
}

export default App;
