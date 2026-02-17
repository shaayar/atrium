import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-10 border-t border-white/5 bg-black text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="order-2 md:order-1">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 hover:text-white/40 transition-colors">
              © 2026 ATRIUM. A personal digital museum.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <span className="font-serif italic text-xl tracking-[0.4em] opacity-40 hover:opacity-80 transition-opacity cursor-pointer">
              ATRIUM
            </span>
          </div>

          <div className="order-3 flex gap-12">
            {['Twitter', 'Instagram', 'Legal'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-[9px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;