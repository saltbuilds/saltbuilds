import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WebVitals from './components/WebVitals';
import HomePage from './pages/HomePage';
import WebDevelopment from './pages/WebDevelopment';

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Web Vitals Monitoring */}
            <WebVitals />

            <Navbar scrolled={scrolled} />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/web-development" element={<WebDevelopment />} />
                </Routes>
            </main>
            <Footer />

            <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-30px) rotate(15deg); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(40px) rotate(-18deg); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: float-slow-reverse 15s ease-in-out infinite; }
      `}</style>
        </div>
    );
};

export default App;
