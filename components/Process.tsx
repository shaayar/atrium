"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProcessStep: React.FC<{
  number: string;
  title: string;
  description: string;
  align: 'left' | 'right';
  icon?: React.ReactNode;
  image?: string;
}> = ({ number, title, description, align, icon, image }) => {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-12 md:gap-24 relative z-10`}>
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: align === 'right' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8 }}
        className={`md:w-1/2 flex ${align === 'right' ? 'justify-end text-right pr-0 md:pr-12' : 'justify-start text-left pl-0 md:pl-12'}`}
      >
        <div className="max-w-sm">
          <span className="text-sm uppercase tracking-[0.4em] font-normal text-white/50 block mb-6">{number}</span>
          <h3 className="text-3xl md:text-4xl font-serif italic mb-6">{title}</h3>
          <p className="text-sm md:text-base font-light leading-relaxed text-white/50 tracking-wide font-sans">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Center Node */}
      <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-white rounded-full flex items-center justify-center z-20">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>

      {/* Visual Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`md:w-1/2 ${align === 'right' ? 'pl-0 md:pl-12' : 'pr-0 md:pr-12 flex justify-end'}`}
      >
        <div className="aspect-square w-80 md:w-96 lg:w-md border border-white/10 bg-surface/50 backdrop-blur-sm flex items-center justify-center relative group overflow-hidden rounded-2xl shadow-2xl">
            {image ? (
                <>
                    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-60"></div>
                </>
            ) : (
                 <div className="text-white/20 group-hover:text-white/60 transition-colors duration-500 transform group-hover:scale-110">
                    {icon}
                 </div>
            )}
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
        </div>
      </motion.div>
    </div>
  );
};

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Animated Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5">
             <motion.div 
                style={{ height }}
                className="w-full bg-linear-to-b from-white/10 via-white/50 to-white/10"
             />
        </div>

        <div className="w-full space-y-48 md:space-y-72 lg:space-y-80 relative py-24">
          <ProcessStep 
            number="Process 01"
            title="The Curator"
            description="Your memories are gathered and organized with care. Each moment is treated as sacred, preserved in its original form."
            align="left"
            image="/images/process-1.webp"
          />

          <ProcessStep 
            number="Process 02"
            title="The Blueprint"
            description="Memories are rendered into generative structures. Experience a walk-through gallery where geometry reflects the weight of each moment."
            align="right"
            image="/images/process-2.webp"
          />

          <ProcessStep 
            number="Process 03"
            title="The Visitation"
            description="Invite others into your space or wander alone. A quiet, immersive sanctuary that evolves as your story continues to unfold."
            align="left"
            image="/images/process-3.webp"
          />
        </div>

      </div>
    </section>
  );
};

export default Process;
