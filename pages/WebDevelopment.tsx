import React, { useEffect, useRef } from 'react';
import { COLORS } from '../constants';
import PricingTable from '../components/PricingTable';
import ProcessTimeline from '../components/ProcessTimeline';
import Icosahedron3D from '../components/Icosahedron3D';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const painPointRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);
    const industryRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const processRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            icon: '⚡',
            title: 'Custom Code Performance',
            description: 'We don\'t use "heavy" builders like WordPress. Our sites are hand-coded with HTML, CSS, and JS for lightning-fast loading speeds.'
        },
        {
            icon: '📱',
            title: 'Mobile-First Design',
            description: '80% of your customers are on their phones. We ensure your site looks perfect on every screen, from iPhones to Androids.'
        },
        {
            icon: '♾️',
            title: 'Unlimited Updates',
            description: 'Want to change a price? Add a new service? Just WhatsApp us. We handle the updates within 24 hours at no extra cost.'
        },
        {
            icon: '🔗',
            title: 'Local Integrations',
            description: 'Every site comes ready with WhatsApp Click-to-Chat, Google Maps, and Google Business Profile setup.'
        },
        {
            icon: '🔒',
            title: 'Secure & Hosted',
            description: 'We provide free SSL certificates and hosting on global edge networks (Cloudflare) for maximum security and 100% uptime.'
        }
    ];

    const industries = [
        {
            icon: '💪',
            name: 'Gyms & Fitness',
            description: 'Class schedules and membership info.'
        },
        {
            icon: '💇',
            name: 'Salons & Spas',
            description: 'Service menus and photo galleries.'
        },
        {
            icon: '⚕️',
            name: 'Clinics',
            description: 'Practitioner bios and contact forms.'
        },
        {
            icon: '🍽️',
            name: 'Restaurants',
            description: 'Digital menus and location maps.'
        },
        {
            icon: '💼',
            name: 'Professional Services',
            description: 'Lawyer/Consultant profiles and lead generation.'
        }
    ];

    useEffect(() => {
        // Hero section animation
        if (heroRef.current) {
            const children = heroRef.current.children;
            gsap.fromTo(
                Array.from(children),
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out',
                    delay: 0.3
                }
            );
        }

        // Pain point section
        if (painPointRef.current) {
            gsap.fromTo(
                painPointRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: painPointRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Features section
        if (featuresRef.current) {
            const cards = featuresRef.current.querySelectorAll('.feature-card');
            gsap.fromTo(
                Array.from(cards),
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Industry section
        if (industryRef.current) {
            const cards = industryRef.current.querySelectorAll('.industry-card');
            gsap.fromTo(
                Array.from(cards),
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: industryRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Pricing section
        if (pricingRef.current) {
            gsap.fromTo(
                pricingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: pricingRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // Process section
        if (processRef.current) {
            gsap.fromTo(
                processRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: processRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        // CTA section
        if (ctaRef.current) {
            gsap.fromTo(
                ctaRef.current,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#E8E8E8' }}>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[600px] flex items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div ref={heroRef}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                                <span style={{ color: '#1A1A1A' }}>Professional Web </span>
                                <span style={{
                                    background: `linear-gradient(135deg, ${COLORS.AQUA} 0%, #5FB8CC 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Presence.
                                </span>
                                <br />
                                <span style={{ color: '#1A1A1A' }}>Zero </span>
                                <span style={{
                                    background: `linear-gradient(135deg, ${COLORS.AQUA} 0%, #5FB8CC 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>
                                    Headaches.
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl max-w-xl leading-relaxed" style={{ color: '#1A1A1A' }}>
                                Your website should grow with your business, not be a stagnant expense.
                            </p>
                        </div>

                        {/* Right: 3D Icosahedron */}
                        <div className="flex justify-center md:justify-end">
                            <Icosahedron3D color={COLORS.AQUA} size={350} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Point Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto" ref={painPointRef}>
                    <div
                        className="p-10 md:p-16 rounded-3xl"
                        style={{
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(129, 199, 212, 0.3)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
                            The "Why" (The Pain Point)
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#1A1A1A' }}>
                            Most web agencies in Sri Lanka charge you a fortune upfront and then disappear.
                            At <span className="font-bold" style={{ color: COLORS.AQUA }}>SALT</span>, we believe your
                            website should grow with your business, not be a stagnant expense. We don't just build
                            websites; we <span className="font-bold">maintain them for life</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-20 px-4" ref={featuresRef}>
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-black text-center mb-16"
                        style={{ color: '#1A1A1A' }}
                    >
                        What's Included in Every Build
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="feature-card p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(129, 199, 212, 0.3)',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
                                }}
                            >
                                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A' }}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#4A4A4A' }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions Section */}
            <section className="py-20 px-4" ref={industryRef}>
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-black text-center mb-6"
                        style={{ color: '#1A1A1A' }}
                    >
                        Our Industry-Specific Solutions
                    </h2>
                    <p className="text-lg text-center mb-16 max-w-3xl mx-auto" style={{ color: '#4A4A4A' }}>
                        We have pre-built, high-conversion frameworks tailored for:
                    </p>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="industry-card p-6 rounded-2xl text-center transition-all duration-500 hover:scale-110 group cursor-pointer"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(129, 199, 212, 0.15) 0%, rgba(129, 199, 212, 0.08) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(129, 199, 212, 0.3)',
                                }}
                            >
                                <div className="text-4xl mb-3 transition-transform duration-500 group-hover:rotate-12">
                                    {industry.icon}
                                </div>
                                <h4 className="font-bold mb-2 text-sm" style={{ color: '#1A1A1A' }}>
                                    {industry.name}
                                </h4>
                                <p className="text-xs" style={{ color: '#4A4A4A' }}>
                                    {industry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4" ref={pricingRef}>
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-black text-center mb-6"
                        style={{ color: '#1A1A1A' }}
                    >
                        Transparent Pricing
                    </h2>
                    <p className="text-lg text-center mb-16" style={{ color: '#4A4A4A' }}>
                        No Hidden Fees. Ever.
                    </p>
                    <PricingTable />
                </div>
            </section>

            {/* Delivery Process Section */}
            <section className="py-20 px-4" ref={processRef}>
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-4xl md:text-5xl font-black text-center mb-6"
                        style={{ color: '#1A1A1A' }}
                    >
                        The 3-Day Delivery Process
                    </h2>
                    <p className="text-lg text-center mb-16" style={{ color: '#4A4A4A' }}>
                        From concept to launch in just 72 hours
                    </p>
                    <ProcessTimeline />
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4" ref={ctaRef}>
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="p-12 md:p-16 rounded-3xl"
                        style={{
                            background: `linear-gradient(135deg, ${COLORS.AQUA} 0%, #5FB8CC 100%)`,
                            boxShadow: '0 20px 60px rgba(129, 199, 212, 0.4)',
                        }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                            Ready to put your business on the map for Rs. 0 today?
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-white opacity-90">
                            Start your free month now. No credit card required.
                        </p>
                        <a
                            href="https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20starting%20my%20free%20month%20with%20SALT!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-12 py-5 bg-white rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                            style={{ color: COLORS.AQUA }}
                        >
                            Start Your Free Month 🚀
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;
