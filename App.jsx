import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Steps from './components/Steps';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <div className="app">
      <Particles />
      <Header logoUrl="/logo.png" />
      
      <div className="container">
        <Hero />
        <Services />
        <Portfolio />
        <Features />
        <Stats />
        <Steps />
        <Contact />
        <CTA onOpenFAQ={() => setShowFAQ(true)} />
        <Footer />
      </div>

      <FAQ isOpen={showFAQ} onClose={() => setShowFAQ(false)} />
    </div>
  );
}

export default App;
