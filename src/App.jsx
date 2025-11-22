import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollControls from './components/ScrollControls';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <ScrollControls />
    </div>
  );
}

export default App;


