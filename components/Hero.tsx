import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* SVG Filter for Button */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
            <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 3 0"
            />
        </filter>
      </svg>

      {/* Subtle Central Line Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="relative z-10 mt-10 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: -20 }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5 }}
          className="font-serif text-[13vw] md:text-[16vw] leading-none mb-8 tracking-tighter wordmark-glow text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60"
        >
          ATRIUM
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center space-y-12"
        >
          <p className="text-lg md:text-2xl font-light tracking-[0.15em] text-white/60 font-sans max-w-xl">
            Your life deserves more than a grid.
          </p>

          <div className="pt-4">
            <a href="#waitlist" className="hero-btn">
                <div className="hero-border-line h-l"></div>
                <div className="hero-border-line h-r"></div>
                <div className="hero-border-line h-t"></div>
                <div className="hero-border-line h-b"></div>
                <div className="hero-btn-text">
                    <span>Join Waitlist</span>
                    <ArrowRight size={14} />
                </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-6"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
             <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent"
             />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;