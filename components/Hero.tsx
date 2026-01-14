
import React, { useMemo, useState, useEffect, useRef } from 'react';
import { COLORS } from '../constants';
import SaltCharacter from './SaltCharacter';

interface SaltParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  drift: number;
  rotation: number;
}

const Hero: React.FC = () => {
  const [buildStatus, setBuildStatus] = useState('Initializing...');
  const [activeSaltParticles, setActiveSaltParticles] = useState<SaltParticle[]>([]);
  const [isShaking, setIsShaking] = useState(false);
  const particleIdCounter = useRef(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle character tap/click - shake and sprinkle
  const handleCharacterClick = () => {
    if (isShaking) return; // Prevent multiple clicks during shake

    setIsShaking(true);

    // Generate salt particles during shake
    const shakeInterval = setInterval(() => {
      const numParticles = Math.floor(Math.random() * 4) + 5; // 5-8 particles per burst
      const newParticles: SaltParticle[] = [];

      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: particleIdCounter.current++,
          x: Math.random() * 80 - 40, // -40 to 40 relative to character
          size: Math.random() * 4 + 2, // 2-6px
          duration: Math.random() * 2 + 3, // 3-5 seconds
          drift: (Math.random() - 0.5) * 120,
          rotation: Math.random() * 360,
        });
      }

      setActiveSaltParticles(prev => [...prev, ...newParticles]);

      // Clean up old particles
      setTimeout(() => {
        setActiveSaltParticles(prev =>
          prev.filter(p => !newParticles.find(np => np.id === p.id))
        );
      }, 6000);
    }, 80); // Generate particles every 80ms during shake

    // Stop shaking after 600ms
    setTimeout(() => {
      clearInterval(shakeInterval);
      setIsShaking(false);
    }, 600);
  };

  const codeLines = useMemo(() => Array.from({ length: 22 }).map((_, i) => ({
    width: `${30 + Math.random() * 65}%`,
    color: i % 4 === 0 ? COLORS.AQUA : i % 3 === 0 ? '#1E293B' : i % 2 === 0 ? '#334155' : '#0F172A',
    indent: i % 5 === 0 ? '0' : i % 3 === 0 ? '1rem' : '2rem',
    delay: `${i * 0.12}s`,
    duration: `${0.4 + Math.random() * 0.6}s`
  })), []);

  const dashboardCards = [
    { title: 'Performance', value: '99%', color: COLORS.AQUA },
    { title: 'Security', value: 'Active', color: '#10B981' },
    { title: 'Uptime', value: '100%', color: COLORS.NAVY },
    { title: 'Traffic', value: '+12%', color: '#6366F1' }
  ];



  useEffect(() => {
    const statuses = ['Compiling...', 'Optimizing Assets...', 'Building DOM...', 'Finalizing UI...', 'Live Preview'];
    let i = 0;
    const interval = setInterval(() => {
      setBuildStatus(statuses[i]);
      i = (i + 1) % statuses.length;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const tagline = "We Build. You Grow. That's SALT.";

  return (
    <div className="relative pt-24 pb-12 md:pt-48 md:pb-24 overflow-hidden min-h-[70vh] md:min-h-[90vh]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Content - Left side */}
        <div className="space-y-6 md:space-y-10 max-w-xl text-left z-10 relative">
          <div
            className={`absolute -top-16 -left-12 hidden md:block cursor-pointer group ${isShaking ? 'animate-shake' : ''}`}
            onClick={handleCharacterClick}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="relative">
              {/* Hover Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                <div className="bg-navy text-black px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg">
                  Shake Me!!
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-8 border-transparent border-t-navy"></div>
                  </div>
                </div>
              </div>

              <SaltCharacter type="hero" size={110} />
              <div className="absolute top-20 left-14 w-full h-screen pointer-events-none overflow-visible">
                {activeSaltParticles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute bg-black rounded-full shadow-sm animate-dynamic-sprinkle"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      left: `${particle.x}px`,
                      opacity: 0.7,
                      animationDuration: `${particle.duration}s`,
                      '--drift': `${particle.drift}px`,
                      '--rot': `${particle.rotation}deg`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="inline-block px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2 md:mb-4 border border-white/50 backdrop-blur-md shadow-sm"
              style={{ backgroundColor: `${COLORS.AQUA}15`, color: COLORS.NAVY }}
            >
              Premium Web Development
            </div>
            <h1
              className="text-5xl md:text-8xl font-black leading-[1] md:leading-[0.95] tracking-tighter"
              style={{ color: COLORS.NAVY }}
            >
              <div className="overflow-hidden">
                <span className="inline-block animate-headline-reveal" style={{ animationDelay: '0.1s' }}>The</span>
              </div>
              <div className="overflow-hidden">
                <span className="inline-block animate-headline-reveal" style={{ animationDelay: '0.2s' }}>
                  Essential <span style={{ color: COLORS.AQUA }}>SALT.</span>
                </span>
              </div>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed opacity-70 font-medium max-w-md animate-fade-in"
              style={{ color: COLORS.NAVY, animationDelay: '0.6s' }}
            >
              Like salt is the essential ingredient that elevates every dish, SALT is the essential digital ingredient that transforms your online presence. Premium web foundations seasoned with technical mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-2 md:pt-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={() => scrollToSection('packages')}
                className="px-10 md:px-12 py-4 md:py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl relative overflow-hidden group animate-cta-attract"
                style={{ backgroundColor: COLORS.NAVY }}
              >
                <span className="relative z-10">LET'S TALK</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                {/* Animated pulsing ring */}
                <div className="absolute inset-0 rounded-2xl animate-pulse-ring" style={{ borderColor: COLORS.AQUA }} />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-navy/10 transition-all hover:bg-white active:scale-95 bg-white/40 backdrop-blur-md shadow-sm"
                style={{ color: COLORS.NAVY }}
              >
                THE PROOF
              </button>
            </div>
          </div>

          {/* New Tagline Section - Walking in Animation */}
          <div className="pt-12 border-t border-navy/10 overflow-hidden min-h-[80px]">
            <div className="flex flex-wrap items-baseline">
              {tagline.split(" ").map((word, wordIdx) => (
                <div key={wordIdx} className="flex mr-[0.4em] last:mr-0">
                  {word.split("").map((char, charIdx) => (
                    <span
                      key={charIdx}
                      className="inline-block text-3xl md:text-5xl font-black text-navy opacity-0 animate-walk-in tracking-tight"
                      style={{
                        animationDelay: `${1.2 + (wordIdx * 0.25) + (charIdx * 0.04)}s`
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation Area - Browser Window Mockup */}
        <div className="relative lg:scale-110 h-[500px] hidden lg:flex items-center justify-center">
          <div className="absolute w-[120%] h-[120%] border border-aqua/10 rounded-full animate-spin-slow opacity-20" />
          <div className="absolute w-[110%] h-[110%] border border-navy/5 rounded-full animate-spin-slow-reverse opacity-10" />

          <div className="relative w-full aspect-[4/3] rounded-[2.5rem] border-2 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-[60px] backdrop-saturate-150">
            {/* Browser Header */}
            <div className="h-12 bg-white/40 backdrop-blur-xl border-b border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] flex items-center px-6 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]">
                <div className="w-3.5 h-3.5 rounded bg-aqua flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <div className="text-[9px] font-black text-navy/90 tracking-widest uppercase">salt.agency/v3.0</div>
              </div>
            </div>

            <div className="flex h-full">
              {/* Sidebar Code Simulation */}
              <div className="w-[35%] bg-white/25 backdrop-blur-xl border-r border-white/30 shadow-[inset_1px_0_0_rgba(255,255,255,0.4)] p-6 space-y-2.5 overflow-hidden">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full animate-code-type"
                    style={{
                      width: line.width,
                      backgroundColor: line.color,
                      marginLeft: line.indent,
                      animationDelay: line.delay,
                      opacity: 1
                    }}
                  />
                ))}
              </div>

              {/* Main Preview Area */}
              <div className="flex-1 p-8 relative overflow-hidden bg-gradient-to-br from-white/20 via-white/15 to-white/5 backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(#1A2B4411_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
                <div className="relative h-full flex flex-col gap-6">

                  {/* Top Bar with distinct visibility */}
                  <div className="w-full h-14 rounded-2xl border-2 border-white/60 bg-white/70 backdrop-blur-2xl backdrop-saturate-150 animate-component-snap flex items-center justify-between px-6 shadow-[0_4px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-lg bg-aqua shadow-sm" />
                      <div className="flex flex-col gap-1">
                        <div className="w-20 h-2 bg-navy/40 rounded-full" />
                        <div className="w-12 h-1 bg-navy/20 rounded-full" />
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-navy/10 rounded-md text-[9px] font-black text-navy uppercase tracking-[0.2em] shadow-sm">Dashboard</div>
                  </div>

                  {/* Feature Cards Grid */}
                  <div className="grid grid-cols-2 gap-5 flex-grow">
                    {dashboardCards.map((card, i) => (
                      <div key={i} className="rounded-[1.5rem] border-2 border-white/70 bg-white/60 backdrop-blur-2xl backdrop-saturate-150 flex flex-col p-5 animate-component-snap shadow-[0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] hover:scale-105 hover:bg-white/75 hover:border-white/90 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-300" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="text-[10px] font-black text-navy uppercase tracking-widest">{card.title}</div>
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color }} />
                        </div>
                        <div className="text-2xl font-black tracking-tight text-navy mb-auto">{card.value}</div>
                        <div className="flex gap-1.5 mt-2">
                          <div className="w-full h-1.5 bg-navy/10 rounded-full overflow-hidden">
                            <div className="h-full bg-aqua" style={{ width: i % 2 === 0 ? '70%' : '40%' }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Floating Authority Element */}
          <div className="absolute -top-12 -right-8 w-56 h-24 rounded-[2rem] border-2 border-white/70 bg-white/60 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hidden lg:flex items-center px-6 gap-4 animate-float">
            <div className="w-12 h-12 rounded-2xl bg-aqua/10 flex items-center justify-center border border-aqua/20">
              <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-[10px] font-black text-navy uppercase tracking-widest">Quality Verified</div>
              <div className="w-20 h-1.5 bg-navy/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 25s linear infinite; }
        @keyframes code-type { 
          0% { transform: scaleX(0); opacity: 0; } 
          50% { transform: scaleX(1); opacity: 1; } 
          100% { transform: scaleX(0); opacity: 0; } 
        }
        .animate-code-type { animation: code-type 3s cubic-bezier(0.19, 1, 0.22, 1) infinite; }
        @keyframes component-snap { 0% { transform: scale(0.9) translateY(20px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
        .animate-component-snap { animation: component-snap 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes shake { 
          0%, 100% { transform: translateX(0) rotate(0deg); } 
          10% { transform: translateX(-8px) rotate(-3deg); } 
          20% { transform: translateX(8px) rotate(3deg); } 
          30% { transform: translateX(-8px) rotate(-3deg); } 
          40% { transform: translateX(8px) rotate(3deg); } 
          50% { transform: translateX(-8px) rotate(-3deg); } 
          60% { transform: translateX(8px) rotate(3deg); } 
          70% { transform: translateX(-6px) rotate(-2deg); } 
          80% { transform: translateX(6px) rotate(2deg); } 
          90% { transform: translateX(-3px) rotate(-1deg); } 
        }
        .animate-shake { animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97); }
        @keyframes dynamic-sprinkle { 
          0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1); 
            opacity: 0; 
          } 
          5% { 
            opacity: 0.7; 
          } 
          100% { 
            transform: translateY(100vh) translateX(var(--drift)) rotate(var(--rot)) scale(0.4); 
            opacity: 0; 
          } 
        }
        .animate-dynamic-sprinkle { animation: dynamic-sprinkle linear forwards; }

        @keyframes headline-reveal {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-headline-reveal {
          animation: headline-reveal 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          opacity: 0;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes walk-in {
          0% { transform: translateX(-20px) translateY(10px) rotate(-8deg); opacity: 0; }
          100% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 1; }
        }
        .animate-walk-in {
          animation: walk-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes pulse-ring {
          0% {
            border: 0px solid;
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            border: 3px solid;
            opacity: 0.4;
          }
          100% {
            border: 0px solid;
            opacity: 0;
            transform: scale(1.15);
          }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes cta-attract {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 25px 50px -12px rgba(17, 76, 94, 0.25), 0 0 25px rgba(37, 219, 242, 0.3);
          }
        }
        .animate-cta-attract {
          animation: cta-attract 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
