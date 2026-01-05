import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface SaltLoaderProps {
    onLoadComplete: () => void;
}

const SaltLoader: React.FC<SaltLoaderProps> = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const duration = 2500; // 2.5 seconds
        const steps = 60;
        const increment = 100 / steps;
        let currentProgress = 0;

        const interval = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);

                // Start fade-out animation
                setTimeout(() => {
                    gsap.to('.loader-container', {
                        opacity: 0,
                        duration: 0.8,
                        ease: 'power2.inOut',
                        onComplete: onLoadComplete
                    });
                }, 300);
            }
            setProgress(Math.floor(currentProgress));
        }, duration / steps);

        // Animate the rings
        gsap.to('.ring-1', {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });

        gsap.to('.ring-2', {
            rotation: -360,
            duration: 15,
            repeat: -1,
            ease: 'none'
        });

        gsap.to('.ring-3', {
            rotation: 360,
            duration: 25,
            repeat: -1,
            ease: 'none'
        });

        gsap.to('.ring-4', {
            rotation: -360,
            duration: 18,
            repeat: -1,
            ease: 'none'
        });

        return () => {
            clearInterval(interval);
        };
    }, [onLoadComplete]);

    return (
        <div className="loader-container fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0A0E1A] via-[#1A1F2E] to-[#0F1419] overflow-hidden">
            {/* Grain texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#81C7D4] opacity-5 blur-[120px] rounded-full" />

            {/* Concentric text rings */}
            <div className="relative w-[600px] h-[600px] flex items-center justify-center">
                {/* Ring 1 - Outermost */}
                <div className="ring-1 absolute w-[550px] h-[550px]">
                    <svg viewBox="0 0 550 550" className="w-full h-full">
                        <defs>
                            <path id="ring1" d="M 275, 275 m -260, 0 a 260,260 0 1,1 520,0 a 260,260 0 1,1 -520,0" />
                        </defs>
                        <text className="text-[11px] font-light tracking-[0.3em] fill-[#81C7D4]/30 uppercase">
                            <textPath href="#ring1" startOffset="0%">
                                SALT • BUILDS • CREATIVE • AGENCY • FRONTEND • DESIGN • DEVELOPMENT •
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Ring 2 */}
                <div className="ring-2 absolute w-[450px] h-[450px]">
                    <svg viewBox="0 0 450 450" className="w-full h-full">
                        <defs>
                            <path id="ring2" d="M 225, 225 m -210, 0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0" />
                        </defs>
                        <text className="text-[10px] font-light tracking-[0.35em] fill-[#81C7D4]/40 uppercase">
                            <textPath href="#ring2" startOffset="0%">
                                WEB DESIGN • UI/UX • OPTIMIZATION • SALT • BUILDS • INNOVATION •
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Ring 3 */}
                <div className="ring-3 absolute w-[350px] h-[350px]">
                    <svg viewBox="0 0 350 350" className="w-full h-full">
                        <defs>
                            <path id="ring3" d="M 175, 175 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" />
                        </defs>
                        <text className="text-[9px] font-light tracking-[0.4em] fill-[#81C7D4]/50 uppercase">
                            <textPath href="#ring3" startOffset="0%">
                                PREMIUM • QUALITY • PERFORMANCE • SALT • BUILDS • EXCELLENCE •
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Ring 4 - Innermost */}
                <div className="ring-4 absolute w-[250px] h-[250px]">
                    <svg viewBox="0 0 250 250" className="w-full h-full">
                        <defs>
                            <path id="ring4" d="M 125, 125 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                        </defs>
                        <text className="text-[8px] font-medium tracking-[0.5em] fill-[#81C7D4]/60 uppercase">
                            <textPath href="#ring4" startOffset="0%">
                                SALT • BUILDS • SALT • BUILDS • SALT • BUILDS •
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Center - Progress percentage */}
                <div className="relative z-10 text-center">
                    <div className="text-[80px] font-light text-[#81C7D4] tracking-wider tabular-nums">
                        {progress}%
                    </div>
                    <div className="text-[11px] font-light text-[#81C7D4]/60 tracking-[0.3em] uppercase mt-2">
                        Loading Experience
                    </div>
                </div>
            </div>

            {/* Animated salt crystals in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#81C7D4]/10 rounded-sm animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${8 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            <style>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 0;
          }
          50% { 
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); 
            opacity: 0.3;
          }
        }
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default SaltLoader;
