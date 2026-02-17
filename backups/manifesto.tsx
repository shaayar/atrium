import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "Upload your memories",
  "Enter architectural space",
  "Walk through your story"
];

const Manifesto: React.FC = () => {
  return (
    <section id="concept" className="py-40 md:py-60 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic font-light leading-tight">
              Atrium is your personal museum.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-12 w-full text-[10px] md:text-[11px] uppercase tracking-widest-xl text-white/40 font-light">
            {items.map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="space-y-6 group cursor-default"
              >
                <span className="block group-hover:text-white transition-colors duration-500">{text}</span>
                <div className="h-px w-8 bg-white/20 mx-auto group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;