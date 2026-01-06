
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';
import SaltCharacter from './SaltCharacter';
import LazyImage from './LazyImage';

interface OfferItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const offers: OfferItem[] = [
  {
    title: "Pure Custom",
    description: "Code",
    icon: "💻",
    color: "#E2E8F0"
  },
  {
    title: "Crystal Clear",
    description: "Responsive",
    icon: "🎨",
    color: "#F1F5F9"
  },
  {
    title: "Seamless Every",
    description: "Surface",
    icon: "📱",
    color: "#E0F2FE"
  },
  {
    title: "Flavor-Packed",
    description: "Content",
    icon: "📝",
    color: "#DBEAFE"
  },
  {
    title: "Preserved For Your",
    description: "Brand",
    icon: "👔",
    color: "#F8FAFC"
  },
  {
    title: "Magnetic Lead",
    description: "Strategy",
    icon: "📊",
    color: "#F1F5F9"
  },
  {
    title: "Salt-First Search",
    description: "Boost",
    icon: "🔍",
    color: "#E2E8F0"
  },
  {
    title: "Instant Flavor",
    description: "Response",
    icon: "⚡",
    color: "#FFF7ED"
  },
  {
    title: "Seasoned Industry",
    description: "Mastery",
    icon: "🏗️",
    color: "#F8FAFC"
  },
  {
    title: "Pure Insights",
    description: "Distilled",
    icon: "📈",
    color: "#F1F5F9"
  },
  {
    title: "Cloud-Pure",
    description: "Hosting",
    icon: "☁️",
    color: "#EFF6FF"
  },
  {
    title: "Ever-Preserved",
    description: "Care",
    icon: "🛠️",
    color: "#F1F5F9"
  }
];

// Icon image filenames (place these images in /public folder)
const iconImages = [
  "custom-coding.png",      // 0: Fully Custom Coded
  "premium-design.png",     // 1: Unique Premium Responsive Designs
  "mobile-responsive.png",  // 2: 100% Mobile Responsive
  "content-focused.png",    // 3: Result-Focused Content
  "business-tailored.png",  // 4: Tailored to Your Business
  "lead-strategy.png",      // 5: Lead-Driven Web Strategy
  "seo-optimization.png",   // 6: Search Engine Optimization
  "rapid-response.png",     // 7: Rapid Action & Prompt Response
  "industry-expertise.png", // 8: Expertise in Every Industry
  "analytics-reporting.png",// 9: Reporting, Insights & Analysis
  "cloud-hosting.png",      // 10: Cloud Hosting Solutions
  "salt-police.png"         // 11: Support, Monitoring & Maintenance
];

const Packages: React.FC = () => {
  const [peekIndex, setPeekIndex] = useState<number | null>(null);
  const [peekType, setPeekType] = useState<'police' | 'doctor' | 'hero'>('police');

  useEffect(() => {
    const triggerPeek = () => {
      // Pick a random index and a random character type
      const nextIndex = Math.floor(Math.random() * offers.length);
      const types: ('police' | 'doctor' | 'hero')[] = ['police', 'doctor', 'hero'];
      const nextType = types[Math.floor(Math.random() * types.length)];

      setPeekType(nextType);
      setPeekIndex(nextIndex);

      // Peek duration
      setTimeout(() => {
        setPeekIndex(null);
      }, 3000);
    };

    // Random interval between 5-10 seconds
    const interval = setInterval(triggerPeek, 8000 + Math.random() * 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: '#F0F9FB' }} id="packages">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-24 space-y-0">
          <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-black uppercase">
            What We
          </h2>
          <h2 className="text-7xl md:text-[160px] font-black tracking-tighter text-black uppercase leading-[0.8]">
            OFFER
          </h2>
        </div>

        {/* 12-Item Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
          {offers.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group relative">



              {/* Icon Image */}
              <LazyImage
                src={`/${iconImages[idx]}`}
                alt={`${item.title} Icon`}
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 object-contain mb-8 transition-all duration-500 group-hover:scale-110 relative z-10"
              />


              {/* Text */}
              <div className="space-y-1 relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-black leading-tight tracking-tight">
                  {item.title}
                </h4>
                <p className="text-lg md:text-xl font-medium text-black/80 leading-tight">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-32 flex justify-center">
          <button
            onClick={() => window.location.href = 'mailto:saltbuilds@gmail.com'}
            className="px-16 py-6 rounded-[2rem] bg-black text-white font-black text-xl uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            LET'S COOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
