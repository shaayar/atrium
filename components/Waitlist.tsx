"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DoorOpen, ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setEmail('');
        analytics.trackWaitlistSignup();
      } else {
        // Handle error messages
        console.error('Failed to join waitlist:', data.message);
        alert(data.message || 'Failed to join waitlist');
        setStatus('idle'); // Reset to idle on error
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again.');
      setStatus('idle'); // Reset to idle on error
    }
  };

  return (
    <section id="waitlist" className="py-10 px-6 bg-surface/30 backdrop-blur-sm relative border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 inline-block"
        >
          <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-8 rounded-full">
            <DoorOpen strokeWidth={0.5} size={24} className="text-white/80" />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif italic mb-6 tracking-tight">Enter the Atrium.</h2>
          <p className="text-white/40 tracking-widest-xl text-sm uppercase">Be among the first to occupy the space.</p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-12 max-w-md mx-auto relative" 
          onSubmit={handleSubmit}
        >
          <div className="relative group" style={{ display: status === 'success' ? 'none' : 'block' }}>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS"
              className="w-full bg-transparent border-b border-white/20 px-0 py-4 outline-none focus:border-white transition-all duration-500 text-center tracking-[0.2em] text-sm placeholder:text-white/40 font-light text-white group-hover:border-white/40"
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={status !== 'idle'}
            className="hero-btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => analytics.trackButtonInteractions()}
          >
            <div className="hero-border-line h-l"></div>
            <div className="hero-border-line h-r"></div>
            <div className="hero-border-line h-t"></div>
            <div className="hero-border-line h-b"></div>
            <div className="hero-btn-text">
              <span>{status === 'idle' ? 'Join Waitlist' : status === 'loading' ? 'Processing...' : '✓ Successfully Joined'}</span>
              {status === 'idle' && <ArrowRight size={14} />}
            </div>
          </button>

          <p className="text-sm uppercase tracking-[0.4em] text-white/70 pt-8">
            Initial doors opening Mid-2026
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Waitlist;
