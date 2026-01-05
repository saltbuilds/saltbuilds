import React, { useEffect, useState } from 'react';

interface FloatingParticle {
    id: number;
    left: string;
    delay: number;
    duration: number;
    size: number;
}

const AmbientSaltParticles: React.FC = () => {
    const [particles, setParticles] = useState<FloatingParticle[]>([]);

    useEffect(() => {
        // Generate particles
        const particleCount = 15;
        const newParticles: FloatingParticle[] = [];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                left: `${Math.random() * 100}%`,
                delay: Math.random() * 20,
                duration: 15 + Math.random() * 10,
                size: 2 + Math.random() * 4, // 2-6px
            });
        }

        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-[#81C7D4] rounded-sm opacity-0 animate-ambient-float"
                    style={{
                        left: particle.left,
                        bottom: '-20px',
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                    }}
                />
            ))}

            <style>{`
        @keyframes ambient-float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.05;
          }
          100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg) scale(0.5);
            opacity: 0;
          }
        }
        .animate-ambient-float {
          animation: ambient-float linear infinite;
        }
      `}</style>
        </div>
    );
};

export default AmbientSaltParticles;
