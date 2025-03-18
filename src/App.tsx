import React from 'react';
import { ChevronDown, Instagram, Facebook, Mail, Calendar, MapPin, Phone } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;