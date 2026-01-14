import React from 'react';
import { COLORS } from '../constants';

interface TimelineStep {
    number: string;
    title: string;
    description: string;
    icon: string;
}

const ProcessTimeline: React.FC = () => {
    const steps: TimelineStep[] = [
        {
            number: '01',
            title: 'Select Your Style',
            description: 'Pick from our 15+ high-performance templates.',
            icon: '🎨'
        },
        {
            number: '02',
            title: 'Send Your Content',
            description: 'We collect your logo, photos, and business info.',
            icon: '📝'
        },
        {
            number: '03',
            title: 'Go Live',
            description: 'We deploy your site and connect your domain within 72 hours.',
            icon: '🚀'
        }
    ];

    return (
        <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-aqua to-transparent opacity-20"
                style={{
                    background: `linear-gradient(90deg, transparent 0%, ${COLORS.AQUA} 50%, transparent 100%)`,
                    top: '80px'
                }}
            />

            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center group"
                        style={{
                            animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                        }}
                    >
                        {/* Number Badge */}
                        <div
                            className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                            style={{
                                background: `linear-gradient(135deg, ${COLORS.AQUA} 0%, #5FB8CC 100%)`,
                                boxShadow: '0 10px 30px rgba(129, 199, 212, 0.3)',
                            }}
                        >
                            <span className="text-3xl font-black text-white">{step.number}</span>
                        </div>

                        {/* Icon */}
                        <div className="text-5xl mb-4 transform transition-transform duration-500 group-hover:scale-125">
                            {step.icon}
                        </div>

                        {/* Content Card */}
                        <div
                            className="p-6 w-full rounded-2xl transition-all duration-500 group-hover:shadow-2xl"
                            style={{
                                background: 'rgba(255, 255, 255, 0.5)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(129, 199, 212, 0.2)',
                            }}
                        >
                            <h3
                                className="text-xl font-bold mb-3"
                                style={{ color: COLORS.NAVY }}
                            >
                                {step.title}
                            </h3>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: COLORS.GRAY_TEXT }}
                            >
                                {step.description}
                            </p>
                        </div>

                        {/* Connector Arrow (except last) */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-20 -right-8 text-4xl" style={{ color: COLORS.AQUA, opacity: 0.3 }}>
                                →
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProcessTimeline;
