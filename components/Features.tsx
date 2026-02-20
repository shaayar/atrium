"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      title: "Private galleries",
      description: "Only you can enter your personal museum"
    },
    {
      title: "Architectural styles", 
      description: "From brutalist to minimalist spaces"
    },
    {
      title: "Memory timeline",
      description: "Arranged by significance, not date"
    },
    {
      title: "Share specific rooms",
      description: "Invite chosen people to selected memories"
    },
    {
      title: "AI curation",
      description: "Suggests connections between moments"
    },
    {
      title: "Permanent preservation",
      description: "Your space never expires"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic font-light mb-8">
            Built for permanence in a disposable world
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              className="p-8 border border-white/10 bg-surface/30 backdrop-blur-sm rounded-lg transition-all duration-500 cursor-pointer group"
            >
              <h3 className="text-white font-light text-lg mb-3 tracking-wide group-hover:text-white/90 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/60 font-light text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
