import React, { useEffect, useRef } from 'react';
import { COLORS } from '../constants';
import { ProjectType } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects: ProjectType[] = [
  { id: 1, title: "Lumina Scent", category: "E-Commerce", placeholder: "Modern fragrance e-commerce with seamless checkout" },
  { id: 2, title: "Apex Dynamics", category: "SaaS Platform", placeholder: "Enterprise SaaS dashboard with real-time analytics" },
  { id: 3, title: "Foundry Law", category: "Corporate", placeholder: "Professional legal services platform" },
  { id: 4, title: "Velo Bikes", category: "Brand Experience", placeholder: "Premium cycling brand digital experience" },
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card, index) => {
      if (!card) return;

      const content = card.querySelector('.card-content');
      const inner = card.querySelector('.card-inner');

      // Sticky card with ultra-smooth scale and fade effect
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80px',
        end: () => `+=${window.innerHeight * 1.5}`, // Longer duration for smoother transition
        pin: true,
        pinSpacing: false,
        scrub: 2, // Increased scrub for smoother, more fluid animation
        onUpdate: (self) => {
          const progress = self.progress;

          // Start scaling/fading after 20% (earlier, smoother start)
          const adjustedProgress = Math.max(0, (progress - 0.2) / 0.8);

          // Smooth power curve for natural deceleration
          const easedProgress = adjustedProgress * adjustedProgress * (3 - 2 * adjustedProgress);

          // Scale down from 1 to 0.96 and fade OUT to 0%
          const scale = 1 - (easedProgress * 0.04);
          const opacity = 1 - easedProgress;

          gsap.to(card, {
            scale: scale,
            opacity: opacity,
            duration: 0.3, // Longer duration for smoother tweening
            ease: 'power2.out'
          });
        }
      });

      // Parallax effect for inner content when card becomes active
      if (content && inner) {
        gsap.fromTo(content,
          {
            y: 60,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              end: 'top 25%',
              scrub: 2
            }
          }
        );

        // Inner content smooth parallax
        gsap.to(inner, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3 // Slower, smoother parallax
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="portfolio" className="py-24 md:py-32 relative" style={{ background: 'linear-gradient(to bottom, #F0F9FB 0%, #F0F9FB 100%)' }} ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
              style={{ color: COLORS.NAVY }}
            >
              THE PROOF
            </h2>
            <p className="text-lg opacity-70 font-medium max-w-xl" style={{ color: COLORS.NAVY }}>
              Scroll to explore premium projects that showcase our minimalist excellence.
            </p>
          </div>
          <button
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm transition-all hover:gap-4 group"
            style={{ color: COLORS.NAVY }}
          >
            See all work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Sticky Cards Container */}
        <div className="relative" style={{ minHeight: `${projects.length * 100}vh` }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full mb-8 md:mb-0"
              style={{
                position: 'relative',
                zIndex: projects.length - index
              }}
            >
              {/* Sticky Card */}
              <div
                className="w-full rounded-[2.5rem] overflow-hidden"
                style={{
                  minHeight: '70vh',
                  transformOrigin: 'center top',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.15) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                <div className="card-content h-full p-8 md:p-12 lg:p-16">
                  <div className="card-inner h-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Project Image/Preview */}
                    <div className="w-full lg:w-1/2">
                      <div
                        className="aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] relative overflow-hidden border-2 border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] bg-gradient-to-br from-slate-50 to-white"
                      >
                        {/* Glass overlay preview */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-slate-100/20 backdrop-blur-sm" />

                        {/* Placeholder design */}
                        <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center">
                          <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: COLORS.AQUA }}>
                            SALT Projects
                          </div>
                          <div className="font-bold text-slate-400 mb-8">
                            {project.placeholder}
                          </div>
                          <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] border-2 border-white/70" />
                            <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] border-2 border-white/70" />
                            <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] border-2 border-white/70" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: COLORS.AQUA }}>
                          {project.category}
                        </div>
                        <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-4" style={{ color: COLORS.NAVY }}>
                          {project.title}
                        </h3>
                        <p className="text-lg opacity-70 font-medium leading-relaxed" style={{ color: COLORS.NAVY }}>
                          {project.placeholder}
                        </p>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                        <div>
                          <div className="text-3xl font-black" style={{ color: COLORS.NAVY }}>98%</div>
                          <div className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: COLORS.NAVY }}>
                            Performance
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-black" style={{ color: COLORS.NAVY }}>4.2s</div>
                          <div className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: COLORS.NAVY }}>
                            Load Time
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-black" style={{ color: COLORS.NAVY }}>100</div>
                          <div className="text-xs font-bold uppercase tracking-widest opacity-50" style={{ color: COLORS.NAVY }}>
                            SEO Score
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <button
                        className="mt-6 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm border-2 border-navy/10 transition-all hover:bg-navy hover:text-white hover:border-navy active:scale-95"
                        style={{ color: COLORS.NAVY }}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
