import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WebVitals from './components/WebVitals';
import SaltLoader from './components/SaltLoader';
import Enhanced3DSaltScene from './components/Enhanced3DSaltScene';
import AmbientSaltParticles from './components/AmbientSaltParticles';
import { ScrollAnimationProvider } from './components/ScrollAnimations';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {loading && <SaltLoader onLoadComplete={handleLoadComplete} />}

      {/* Main Application */}
      <ScrollAnimationProvider>
        <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: '#F0F9FB' }}>
          {/* Web Vitals Monitoring */}
          <WebVitals />

          {/* Royal Background System */}
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F0F9FB] via-[#E8F6F9] to-[#D5F0F5] opacity-40" />

            {/* Brand Accents */}
            <div
              className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full opacity-[0.08] blur-[120px] animate-pulse"
              style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 75%)', animationDuration: '15s' }}
            />

            <div
              className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-[0.04] blur-[100px]"
              style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 70%)' }}
            />

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
          </div>

          {/* Enhanced 3D Salt Crystal Scene */}
          <Enhanced3DSaltScene />

          {/* Ambient Floating Salt Particles */}
          <AmbientSaltParticles />

          <Navbar scrolled={scrolled} />
          <main className="flex-grow relative z-10">
            <section id="home">
              <Hero />
            </section>
            <section id="packages">
              <Packages />
            </section>
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="faq">
              <FAQ />
            </section>
          </main>
          <Footer />

          <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(12deg); }
            50% { transform: translateY(-30px) rotate(15deg); }
          }
          @keyframes float-slow-reverse {
            0%, 100% { transform: translateY(0) rotate(-12deg); }
            50% { transform: translateY(40px) rotate(-18deg); }
          }
          .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
          .animate-float-slow-reverse { animation: float-slow-reverse 15s ease-in-out infinite; }
          
          /* Smooth scroll on html */
          html {
            scroll-behavior: smooth;
          }
        `}</style>
        </div>
      </ScrollAnimationProvider>
    </>
  );
};

export default App;
