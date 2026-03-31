import React from 'react';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#F0F9FB', position: 'relative' }}>
            {/* Background System */}
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
        </div>
    );
};

export default HomePage;
