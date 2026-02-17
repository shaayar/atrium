import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 h-24 flex items-center justify-between mix-blend-difference text-white pointer-events-none backdrop-blur-md bg-white/5"
    >
      {/* Left: Tagline */}
      <div className="w-1/3 hidden md:block">
        <span className="text-[10px] uppercase tracking-widest-2xl opacity-60">
          Architectural Digital Spaces
        </span>
      </div>

      {/* Center: Brand */}
      <div className="w-1/3 flex justify-start md:justify-center pointer-events-auto">
        <a href="#" className="font-serif italic text-2xl tracking-[0.2em] hover:opacity-80 transition-opacity">
          ATRIUM
        </a>
      </div>

      {/* Right: CTA */}
      <div className="w-1/3 flex justify-end pointer-events-auto">
        <a 
          href="#waitlist"
          className="hero-btn"
        >
          <div className="hero-border-line h-l"></div>
          <div className="hero-border-line h-r"></div>
          <div className="hero-border-line h-t"></div>
          <div className="hero-border-line h-b"></div>
          <div className="hero-btn-text">
            <span>Enter</span>
            <ArrowRight size={14} />
          </div>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;