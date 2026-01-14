import React from 'react';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';

const HomePage: React.FC = () => {
    return (
        <>
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
        </>
    );
};

export default HomePage;
