"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // total duration

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700">
      <div className="relative flex flex-col items-center">
        
        {/* Arch SVG */}
        <svg
          width="160"
          height="200"
          viewBox="0 0 100 120"
          className="overflow-visible"
        >
          {/* Arch Outline */}
          <path
            d="M20 120 V60 A30 30 0 0 1 80 60 V120"
            fill="none"
            stroke="white"
            strokeWidth="3"
            className="arch-outline"
          />

          {/* Interior Light */}
          <rect
            x="25"
            y="65"
            width="50"
            height="55"
            fill="white"
            className="arch-light"
          />
        </svg>

        <p className="mt-6 text-2xl font-elcorita tracking-[0.2em] text-white/80">
          ATRIUM
        </p>

        <p className="mt-2 text-lg text-white/80 font-lecherously">
          Preparing your space ...
        </p>
      </div>

      <style jsx>{`
        .arch-outline {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 1.2s ease forwards;
        }

        .arch-light {
          opacity: 0;
          animation: lightReveal 1.5s ease 0.8s forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes lightReveal {
          to {
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
