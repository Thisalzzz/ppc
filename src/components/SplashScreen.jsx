import React, { useEffect, useState } from 'react';
import logo from '../assets/logo/logo.jpg';

const SplashScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Start exit animation shortly before fully hiding
    const exitTimer = setTimeout(() => setHide(true), 2500);
    return () => clearTimeout(exitTimer);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes gradientPulse {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #059669, #3b82f6, #7c3aed)',
          backgroundSize: '300% 300%',
          animation: 'gradientPulse 8s ease infinite',
          transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
          transform: hide ? 'translateX(100%)' : 'translateX(0)',
          opacity: hide ? 0 : 1,
          pointerEvents: hide ? 'none' : 'auto',
        }}
      >
        {/* Sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              animation: `sparkle ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}

        {/* Logo + Glow */}
        <div className="relative z-10">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
              style={{
                animation: 'float 4s ease-in-out infinite',
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
                transform: hide ? 'scale(0.8)' : 'scale(1)',
                opacity: hide ? 0 : 1,
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
              }}
            />
            <div className="absolute inset-0 -z-10 bg-indigo-500/30 rounded-full blur-2xl scale-90 animate-pulse" />
          </div>
        </div>

        {/* Circles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border-2 border-white/20 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                width: `${120 + i * 100}px`,
                height: `${120 + i * 100}px`,
                transform: `translate(-50%, -50%) scale(${hide ? 0.8 : 1})`,
                opacity: hide ? 0 : 0.5 - i * 0.15,
                transition: `all ${1000 + i * 200}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
