import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Building, Footprints } from 'lucide-react';

const items = [
  {
    text: "Upload your memories",
    icon: Upload,
    description: "Preserve your precious moments in digital space"
  },
  {
    text: "Enter architectural space", 
    icon: Building,
    description: "Immerse yourself in curated environments"
  },
  {
    text: "Walk through your story",
    icon: Footprints,
    description: "Experience your memories as interactive journeys"
  }
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

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 w-full">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                  className="group relative"
                >
                  <div className="flex flex-col items-center text-center space-y-6 p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:bg-white/10">
                    {/* Icon Container */}
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                    
                    {/* Text Content */}
                    <div className="space-y-3">
                      <h3 className="text-sm md:text-base uppercase tracking-wider text-white font-light group-hover:text-white/90 transition-colors duration-500">
                        {item.text}
                      </h3>
                      <p className="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Animated Underline */}
                    <motion.div 
                      className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ width: "2rem" }}
                      whileInView={{ width: "6rem" }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;