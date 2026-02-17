import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Process from './components/Process';
import Philosophy from './components/Philosophy';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior fix for some legacy browsers/devices
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-white selection:text-black">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-grain bg-repeat mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Spatial Line Separator */}
        <div className="w-full px-10 max-w-7xl mx-auto opacity-20">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>

        <Manifesto />
        <Process />
        <Philosophy />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
};

export default App;