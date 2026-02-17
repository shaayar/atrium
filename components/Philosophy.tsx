import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-10">
      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto border-y border-white/10 py-24 md:py-40 relative"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.8em] text-white/40 mb-12">The Philosophy</h2>
            <p className="text-3xl md:text-4xl font-serif italic leading-relaxed text-white/90">
              Most memories live in grids. Compressed. Scrolled past. Forgotten.
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="pt-12 md:pt-40"
          >
            <p className="text-lg font-light text-white/60 leading-relaxed mb-8 font-sans">
              Some moments deserve space. Atrium gives your memories room to breathe, turning the digital ephemeral into architectural permanence.
            </p>
            <div className="w-12 h-px bg-white/40"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Philosophy;