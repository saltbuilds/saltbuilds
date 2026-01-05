/**
 * EXAMPLE USAGE COMPONENTS
 * 
 * This file contains ready-to-use examples showing how to combine
 * 3D effects, glassmorphism, and scroll animations in your components.
 */

import React from 'react';
import {
    FadeInOnScroll,
    ParallaxSection,
    ScaleOnScroll,
    RotateOnScroll,
    StaggerAnimateChildren
} from './ScrollAnimations';

// ============================================
// EXAMPLE 1: Glass Feature Card
// ============================================
export const GlassFeatureCard: React.FC<{ title: string; description: string; icon: string }> = ({
    title,
    description,
    icon
}) => {
    return (
        <FadeInOnScroll direction="up" delay={0.2}>
            <div className="glass-card-premium p-8 glass-hover-lift rounded-3xl">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>
                <p className="text-navy/70">{description}</p>
            </div>
        </FadeInOnScroll>
    );
};

// Usage:
// <GlassFeatureCard 
//   icon="🚀" 
//   title="Lightning Fast" 
//   description="Optimized for speed and performance"
// />


// ============================================
// EXAMPLE 2: Parallax Hero Section
// ============================================
export const ParallaxHero: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Layer - Moves Slower */}
            <ParallaxSection speed={0.3} className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-aqua/20 to-navy/20" />
            </ParallaxSection>

            {/* Middle Layer - Normal Speed */}
            <div className="relative z-10 text-center glass-panel p-12 rounded-3xl">
                <h1 className="text-6xl font-black text-navy mb-4">Welcome</h1>
                <p className="text-xl text-navy/70">Experience depth with parallax</p>
            </div>

            {/* Foreground Layer - Moves Faster */}
            <ParallaxSection speed={-0.2} className="absolute bottom-0 left-0 right-0">
                <div className="h-32 bg-gradient-to-t from-white to-transparent" />
            </ParallaxSection>
        </div>
    );
};


// ============================================
// EXAMPLE 3: Staggered Grid with Glass Cards
// ============================================
export const GlassCardGrid: React.FC<{ items: Array<{ id: number; title: string; content: string }> }> = ({ items }) => {
    return (
        <StaggerAnimateChildren stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="glass-card p-6 rounded-2xl glass-hover-lift group"
                >
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-aqua transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-navy/70">{item.content}</p>
                </div>
            ))}
        </StaggerAnimateChildren>
    );
};

// Usage:
// <GlassCardGrid items={[
//   { id: 1, title: "Feature 1", content: "Amazing feature" },
//   { id: 2, title: "Feature 2", content: "Another great feature" },
//   { id: 3, title: "Feature 3", content: "Yet another feature" }
// ]} />


// ============================================
// EXAMPLE 4: Glass Navigation Menu
// ============================================
export const GlassNavMenu: React.FC<{ items: string[] }> = ({ items }) => {
    return (
        <nav className="glass-navbar p-4 rounded-full inline-flex gap-4">
            {items.map((item, idx) => (
                <a
                    key={idx}
                    href={`#${item.toLowerCase()}`}
                    className="glass-button px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider text-navy hover:text-aqua transition-colors"
                >
                    {item}
                </a>
            ))}
        </nav>
    );
};


// ============================================
// EXAMPLE 5: Scale-on-Scroll CTA Section
// ============================================
export const ScaleCTA: React.FC = () => {
    return (
        <ScaleOnScroll fromScale={0.8} toScale={1}>
            <div className="glass-card-aqua p-12 rounded-3xl text-center max-w-2xl mx-auto glass-glow-animation">
                <h2 className="text-4xl font-black text-navy mb-4">
                    Ready to Start?
                </h2>
                <p className="text-lg text-navy/70 mb-6">
                    Join thousands of satisfied customers
                </p>
                <button className="glass-button glass-hover-lift px-10 py-4 rounded-2xl bg-navy text-white font-bold uppercase">
                    Get Started
                </button>
            </div>
        </ScaleOnScroll>
    );
};


// ============================================
// EXAMPLE 6: Rotating Logo with Glass Background
// ============================================
export const RotatingGlassLogo: React.FC<{ logoUrl: string }> = ({ logoUrl }) => {
    return (
        <RotateOnScroll rotation={360} scrub={true}>
            <div className="glass-card w-32 h-32 rounded-full p-8 flex items-center justify-center glass-float-animation">
                <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
            </div>
        </RotateOnScroll>
    );
};


// ============================================
// EXAMPLE 7: Frosted Glass Modal/Dialog
// ============================================
export const GlassModal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({
    isOpen,
    onClose,
    children
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <FadeInOnScroll direction="up" duration={0.3}>
                <div className="glass-panel p-8 rounded-3xl max-w-lg relative z-10 glass-shine">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 glass-button w-10 h-10 rounded-full flex items-center justify-center font-bold text-navy"
                    >
                        ✕
                    </button>
                    {children}
                </div>
            </FadeInOnScroll>
        </div>
    );
};

// Usage:
// const [isOpen, setIsOpen] = useState(false);
// <GlassModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//   <h2>Modal Title</h2>
//   <p>Modal content here</p>
// </GlassModal>


// ============================================
// EXAMPLE 8: Glass Testimonial Card
// ============================================
export const GlassTestimonial: React.FC<{
    quote: string;
    author: string;
    role: string;
    avatar: string
}> = ({ quote, author, role, avatar }) => {
    return (
        <FadeInOnScroll direction="left" delay={0.3}>
            <div className="glass-card-premium p-8 rounded-3xl relative glass-hover-lift">
                {/* Quote Mark */}
                <div className="text-6xl text-aqua/30 font-serif absolute top-4 left-4">"</div>

                {/* Quote */}
                <p className="text-lg text-navy/80 mb-6 relative z-10 italic">
                    {quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <img
                        src={avatar}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover glass-card"
                    />
                    <div>
                        <div className="font-bold text-navy">{author}</div>
                        <div className="text-sm text-navy/60">{role}</div>
                    </div>
                </div>
            </div>
        </FadeInOnScroll>
    );
};


// ============================================
// EXAMPLE 9: Glass Pricing Card
// ============================================
export const GlassPricingCard: React.FC<{
    tier: string;
    price: string;
    features: string[];
    highlighted?: boolean;
}> = ({ tier, price, features, highlighted = false }) => {
    return (
        <ScaleOnScroll fromScale={0.9} toScale={1}>
            <div className={`p-8 rounded-3xl relative ${highlighted
                    ? 'glass-card-aqua glass-glow-animation'
                    : 'glass-card'
                } glass-hover-lift`}>
                {highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 glass-button px-6 py-2 rounded-full bg-aqua text-white text-xs font-bold uppercase">
                        Popular
                    </div>
                )}

                <h3 className="text-2xl font-black text-navy mb-2">{tier}</h3>
                <div className="text-5xl font-black text-navy mb-6">
                    {price}
                    <span className="text-lg font-normal text-navy/50">/mo</span>
                </div>

                <ul className="space-y-3 mb-8">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-navy/70">
                            <span className="text-aqua">✓</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold uppercase text-sm ${highlighted
                        ? 'bg-navy text-white glass-button'
                        : 'glass-button text-navy'
                    } glass-hover-lift`}>
                    Choose Plan
                </button>
            </div>
        </ScaleOnScroll>
    );
};


// ============================================
// EXAMPLE 10: Complete Section with All Effects
// ============================================
export const CompleteGlassSection: React.FC = () => {
    const features = [
        { id: 1, icon: "🚀", title: "Fast", desc: "Lightning speed" },
        { id: 2, icon: "🔒", title: "Secure", desc: "Bank-level security" },
        { id: 3, icon: "💎", title: "Premium", desc: "Top-tier quality" },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Parallax Background */}
            <ParallaxSection speed={0.2} className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-aqua/10 to-navy/10" />
            </ParallaxSection>

            <div className="max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <FadeInOnScroll direction="up" className="text-center mb-16">
                    <h2 className="text-6xl font-black text-navy mb-4">
                        Amazing Features
                    </h2>
                    <p className="text-xl text-navy/70">
                        Everything you need and more
                    </p>
                </FadeInOnScroll>

                {/* Feature Grid */}
                <StaggerAnimateChildren stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="glass-card-premium p-8 rounded-3xl glass-hover-lift text-center">
                            <div className="text-6xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold text-navy mb-2">{feature.title}</h3>
                            <p className="text-navy/70">{feature.desc}</p>
                        </div>
                    ))}
                </StaggerAnimateChildren>

                {/* CTA */}
                <div className="mt-16">
                    <ScaleOnScroll fromScale={0.9} toScale={1}>
                        <div className="text-center">
                            <button className="glass-button px-12 py-4 rounded-2xl bg-navy text-white font-bold uppercase glass-hover-lift">
                                Get Started Now
                            </button>
                        </div>
                    </ScaleOnScroll>
                </div>
            </div>
        </section>
    );
};


// ============================================
// EXAMPLE 11: Glass Form
// ============================================
export const GlassContactForm: React.FC = () => {
    return (
        <FadeInOnScroll direction="up">
            <form className="glass-panel p-8 rounded-3xl max-w-md mx-auto space-y-6">
                <h2 className="text-3xl font-black text-navy mb-6">Get in Touch</h2>

                <div>
                    <label className="block text-sm font-bold text-navy mb-2">Name</label>
                    <input
                        type="text"
                        className="glass-input w-full text-navy"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-navy mb-2">Email</label>
                    <input
                        type="email"
                        className="glass-input w-full text-navy"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-navy mb-2">Message</label>
                    <textarea
                        className="glass-input w-full text-navy h-32 resize-none"
                        placeholder="Your message..."
                    />
                </div>

                <button
                    type="submit"
                    className="glass-button w-full py-3 rounded-xl bg-navy text-white font-bold uppercase glass-hover-lift"
                >
                    Send Message
                </button>
            </form>
        </FadeInOnScroll>
    );
};


// ============================================
// USAGE SUMMARY
// ============================================

/*

TO USE THESE EXAMPLES:

1. Import the component you want:
   import { GlassFeatureCard } from './ExampleComponents';

2. Use it in your component:
   <GlassFeatureCard 
     icon="🚀" 
     title="Fast" 
     description="Lightning speed"
   />

3. Mix and match effects:
   - Wrap any content in FadeInOnScroll for fade animations
   - Use glass-* classes for glassmorphism
   - Combine with StaggerAnimateChildren for sequential reveals

4. Customize:
   - Adjust delay, duration, direction in scroll components
   - Change glass-card to glass-card-premium, glass-card-aqua, etc.
   - Modify speed in ParallaxSection for different depths

*/

export default {
    GlassFeatureCard,
    ParallaxHero,
    GlassCardGrid,
    GlassNavMenu,
    ScaleCTA,
    RotatingGlassLogo,
    GlassModal,
    GlassTestimonial,
    GlassPricingCard,
    CompleteGlassSection,
    GlassContactForm,
};
