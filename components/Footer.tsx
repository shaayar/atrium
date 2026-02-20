import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-white/50 bg-black text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          <div className="order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.4em] transition-colors">
              © 2026 ATRIUM.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <span className="font-lecherously font-bold text-xl tracking-[0.4em] transition-opacity cursor-pointer">
              ATRIUM
            </span>
          </div>

          <div className="order-3 flex gap-12">
            {[{name:'G Mail', link: 'mailto:shubhamdave171204@gmail.com'}].map((item) => (
              <a 
                key={item.name}
                href={item.link} 
                className="text-xs uppercase tracking-[0.4em] transition-colors duration-300 relative group"
              >
                {item.name}
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
