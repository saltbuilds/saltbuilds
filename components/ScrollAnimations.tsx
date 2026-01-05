import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
    children?: React.ReactNode;
}

/**
 * ScrollAnimationProvider - Sets up GSAP ScrollTrigger animations
 * for the entire application with scroll-driven effects
 */
export const ScrollAnimationProvider: React.FC<ScrollAnimationProps> = ({ children }) => {
    useEffect(() => {
        // Refresh ScrollTrigger when component mounts
        ScrollTrigger.refresh();

        return () => {
            // Cleanup all ScrollTrigger instances
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return <>{children}</>;
};

/**
 * useScrollAnimation - Custom hook for scroll-based animations
 */
export const useScrollAnimation = (
    ref: React.RefObject<HTMLElement>,
    options: {
        animation: gsap.TweenVars;
        trigger?: string;
        start?: string;
        end?: string;
        scrub?: boolean | number;
        pin?: boolean;
        markers?: boolean;
    }
) => {
    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current!, {
                ...options.animation,
                scrollTrigger: {
                    trigger: options.trigger || ref.current,
                    start: options.start || 'top bottom',
                    end: options.end || 'bottom top',
                    scrub: options.scrub !== undefined ? options.scrub : false,
                    pin: options.pin || false,
                    markers: options.markers || false,
                },
            });
        });

        return () => ctx.revert();
    }, [ref, options]);
};

/**
 * FadeInOnScroll - Component that fades in content as it enters viewport
 */
interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

export const FadeInOnScroll: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    duration = 1,
    direction = 'up',
    className = '',
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const getInitialPosition = () => {
            switch (direction) {
                case 'up': return { y: 60 };
                case 'down': return { y: -60 };
                case 'left': return { x: 60 };
                case 'right': return { x: -60 };
                default: return { y: 60 };
            }
        };

        const ctx = gsap.context(() => {
            gsap.from(elementRef.current!, {
                ...getInitialPosition(),
                opacity: 0,
                duration,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => ctx.revert();
    }, [delay, duration, direction]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

/**
 * ParallaxSection - Creates parallax scrolling effect
 */
interface ParallaxProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export const ParallaxSection: React.FC<ParallaxProps> = ({
    children,
    speed = 0.5,
    className = '',
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(elementRef.current!, {
                y: () => window.innerHeight * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, [speed]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

/**
 * ScaleOnScroll - Scales element based on scroll position
 */
interface ScaleOnScrollProps {
    children: React.ReactNode;
    fromScale?: number;
    toScale?: number;
    className?: string;
}

export const ScaleOnScroll: React.FC<ScaleOnScrollProps> = ({
    children,
    fromScale = 0.8,
    toScale = 1,
    className = '',
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                elementRef.current!,
                { scale: fromScale, opacity: 0 },
                {
                    scale: toScale,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: elementRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, [fromScale, toScale]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

/**
 * RotateOnScroll - Rotates element based on scroll
 */
interface RotateOnScrollProps {
    children: React.ReactNode;
    rotation?: number;
    scrub?: boolean;
    className?: string;
}

export const RotateOnScroll: React.FC<RotateOnScrollProps> = ({
    children,
    rotation = 360,
    scrub = true,
    className = '',
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(elementRef.current!, {
                rotation,
                ease: 'none',
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: scrub,
                },
            });
        });

        return () => ctx.revert();
    }, [rotation, scrub]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

/**
 * SectionPin - Pins section while scrolling (like sticky but with GSAP power)
 */
interface SectionPinProps {
    children: React.ReactNode;
    pinSpacing?: boolean;
    className?: string;
}

export const SectionPin: React.FC<SectionPinProps> = ({
    children,
    pinSpacing = true,
    className = '',
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: elementRef.current,
                start: 'top top',
                end: '+=100%',
                pin: true,
                pinSpacing,
            });
        });

        return () => ctx.revert();
    }, [pinSpacing]);

    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

/**
 * StaggerAnimateChildren - Staggers animation of child elements
 */
interface StaggerProps {
    children: React.ReactNode;
    stagger?: number;
    className?: string;
}

export const StaggerAnimateChildren: React.FC<StaggerProps> = ({
    children,
    stagger = 0.1,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const childElements = containerRef.current?.children;
            if (!childElements) return;

            gsap.from(Array.from(childElements), {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        });

        return () => ctx.revert();
    }, [stagger]);

    return (
        <div ref={containerRef} className={className}>
            {children}
        </div>
    );
};

export default ScrollAnimationProvider;
