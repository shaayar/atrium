"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EmotionalHook: React.FC = () => {
  const memories = [
    "The handwritten note from your mother.",
    "The voice memo you saved but never played.", 
    "The blurry photo from the night everything changed."
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif italic font-light mb-8">
            These aren't files. They're rooms waiting to be built.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -8,
                scale: 1.03,
                borderColor: "rgba(255, 255, 255, 0.25)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
              }}
              className="text-center p-8 border border-white/10 bg-surface/30 backdrop-blur-sm rounded-lg transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <p className="text-white/80 font-light leading-relaxed italic relative z-10 group-hover:text-white/95 transition-colors duration-400">
                {memory}
              </p>
              
              {/* Floating accent dots */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-white/50 tracking-wide uppercase">
            Your architectural space is being prepared.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalHook;
