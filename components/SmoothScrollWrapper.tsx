import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth scroll behavior
            const smoothScroll = {
                x: 0,
                y: 0,
                ease: 0.08 // Lower = smoother but slower
            };

            const updateScroll = () => {
                smoothScroll.y += (window.scrollY - smoothScroll.y) * smoothScroll.ease;

                if (scrollRef.current) {
                    scrollRef.current.style.transform = `translateY(-${smoothScroll.y}px)`;
                }

                requestAnimationFrame(updateScroll);
            };

            requestAnimationFrame(updateScroll);
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={scrollRef} className="will-change-transform">
            {children}
        </div>
    );
};

// Text reveal animation hook
export const useTextReveal = (ref: React.RefObject<HTMLElement>, options = {}) => {
    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        const text = element.textContent || '';
        const chars = text.split('');

        // Wrap each character in a span
        element.innerHTML = chars
            .map((char) => `<span class="inline-block opacity-0" style="transform: translateY(20px)">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');

        const spans = element.querySelectorAll('span');

        gsap.to(spans, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                ...options
            }
        });
    }, [ref, options]);
};

// Fade in animation hook
export const useFadeIn = (ref: React.RefObject<HTMLElement>, direction: 'up' | 'down' | 'left' | 'right' = 'up', options = {}) => {
    useEffect(() => {
        if (!ref.current) return;

        const transformMap = {
            up: { y: 50, x: 0 },
            down: { y: -50, x: 0 },
            left: { y: 0, x: 50 },
            right: { y: 0, x: -50 }
        };

        const transform = transformMap[direction];

        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                ...transform
            },
            {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                    ...options
                }
            }
        );
    }, [ref, direction, options]);
};

export default SmoothScroll;
