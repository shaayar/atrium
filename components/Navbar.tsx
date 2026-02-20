"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const navbarWidth = useTransform(scrollY, [0, 100], ["100%", "80%"]);
  const navbarOpacity = useTransform(
    scrollY,
    [0, 200, 400],
    [0, 1, 1]
  );

  useEffect(() => {
    // Disable scroll animations on mobile screens
    if (window.innerWidth < 768) {
      setIsVisible(true);
      setIsScrollingDown(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const hero25Percent = heroHeight * 0.25;

      // Check if scrolled past 25% of hero
      if (currentScrollY > hero25Percent) {
        setIsVisible(true);
        
        // Determine scroll direction
        if (currentScrollY > lastScrollY.current) {
          setIsScrollingDown(true);
        } else {
          setIsScrollingDown(false);
        }
      } else {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero reference for height calculation */}
      <div ref={heroRef} className="absolute top-0 left-0 w-0 h-0" />
      
      {/* Full-width wrapper - always 100% width, no background */}
      <div className="fixed top-0 left-0 w-full z-40 flex justify-center pointer-events-none">
        <motion.nav 
          initial={{ opacity: 0, y: -20, width: "100%" }}
          animate={{ 
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -20
            // width: isVisible && isScrollingDown ? "80%" : "100%"
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`px-6 md:px-12 h-24 flex items-center justify-between mix-blend-difference text-white backdrop-blur-lg bg-black/80 pointer-events-auto transition-all duration-400 ${
            // isVisible && isScrollingDown ? 'mt-5 rounded-4xl' : 
            'mt-0 rounded-none'
          }`}
        >
      {/* Left: Tagline */}
      <div className="w-1/3 hidden md:block">
        <span className="text-sm uppercase tracking-wider font-serif italic opacity-60">
          Architectural Digital Spaces
        </span>
      </div>

      {/* Center: Brand */}
      <div className="w-full md:w-1/3 flex justify-center pointer-events-auto">
        <a href="#" className="font-lecherously font-bold text-2xl tracking-[0.2em] hover:opacity-80 transition-opacity">
          ATRIUM
        </a>
      </div>

      {/* Right: CTA */}
      <div className="w-1/3 hidden md:flex justify-end pointer-events-auto ">
        <a 
          href="#waitlist"
          className="hero-btn"
          onClick={() => analytics.trackButtonInteractions()}
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
      </div>
    </>
  );
};

export default Navbar;
