import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Particle {
    x: number;
    y: number;
    size: number;
    opacity: number;
    delay: number;
}

const SaltParticles: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        // Generate 30 salt particles with random positions
        const particles: Particle[] = Array.from({ length: 30 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.6 + 0.2,
            delay: Math.random() * 2
        }));

        particlesRef.current = particles;

        // Animate particles on scroll
        const particleElements = containerRef.current.querySelectorAll('.salt-particle');

        particleElements.forEach((particle, index) => {
            gsap.to(particle, {
                y: `+=${Math.random() * 200 - 100}`,
                x: `+=${Math.random() * 100 - 50}`,
                opacity: 0,
                duration: 2 + Math.random() * 3,
                delay: particles[index].delay,
                repeat: -1,
                ease: 'power1.inOut',
                yoyo: true
            });
        });

        // Scroll-triggered animation
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                gsap.to(particleElements, {
                    scale: 1.2,
                    duration: 0.5,
                    stagger: 0.02
                });
            },
            onLeave: () => {
                gsap.to(particleElements, {
                    scale: 1,
                    duration: 0.5
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ overflow: 'hidden' }}
        >
            {particlesRef.current.map((particle, index) => (
                <div
                    key={index}
                    className="salt-particle absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: '#81C7D4',
                        opacity: particle.opacity,
                        boxShadow: '0 0 10px rgba(129, 199, 212, 0.5)',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
        </div>
    );
};

export default SaltParticles;
