import React from 'react';
import { COLORS } from '../constants';

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    isRecommended?: boolean;
    features: {
        label: string;
        value: string;
    }[];
}

const PricingTable: React.FC = () => {
    const plans: PricingPlan[] = [
        {
            name: 'Monthly Plan',
            price: 'Rs. 8,000',
            period: '/mo',
            features: [
                { label: 'Setup Fee', value: 'Rs. 0' },
                { label: 'First Month', value: 'FREE' },
                { label: 'Updates', value: 'Unlimited' },
                { label: 'Support', value: '24/7 WhatsApp' },
            ]
        },
        {
            name: 'Annual Plan',
            price: 'Rs. 6,000',
            period: '/mo',
            isRecommended: true,
            features: [
                { label: 'Setup Fee', value: 'Rs. 0' },
                { label: 'First Month', value: 'FREE' },
                { label: 'Updates', value: 'Unlimited' },
                { label: 'Support', value: '24/7 WhatsApp' },
            ]
        }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className="relative group"
                    style={{
                        background: plan.isRecommended
                            ? 'linear-gradient(135deg, rgba(129, 199, 212, 0.15) 0%, rgba(129, 199, 212, 0.05) 100%)'
                            : 'rgba(255, 255, 255, 0.4)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: plan.isRecommended
                            ? `2px solid ${COLORS.AQUA}`
                            : '1px solid rgba(129, 199, 212, 0.2)',
                        borderRadius: '24px',
                        padding: '40px 32px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    {/* Recommended Badge */}
                    {plan.isRecommended && (
                        <div
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 text-sm font-bold text-white rounded-full"
                            style={{
                                background: `linear-gradient(135deg, ${COLORS.AQUA} 0%, #5FB8CC 100%)`,
                                boxShadow: '0 8px 16px rgba(129, 199, 212, 0.3)'
                            }}
                        >
                            RECOMMENDED
                        </div>
                    )}

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.NAVY }}>
                        {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-8">
                        <span className="text-5xl font-black" style={{ color: COLORS.AQUA }}>
                            {plan.price}
                        </span>
                        <span className="text-xl font-medium" style={{ color: COLORS.NAVY }}>
                            {plan.period}
                        </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-sm font-medium" style={{ color: COLORS.NAVY }}>
                                    {feature.label}
                                </span>
                                <span className="text-sm font-bold" style={{ color: COLORS.AQUA }}>
                                    {feature.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        className="w-full mt-8 py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        style={{
                            background: plan.isRecommended
                                ? `linear-gradient(135deg, ${COLORS.AQUA} 0%, #5FB8CC 100%)`
                                : 'rgba(129, 199, 212, 0.2)',
                            color: plan.isRecommended ? '#FFFFFF' : COLORS.NAVY,
                            border: plan.isRecommended ? 'none' : `2px solid ${COLORS.AQUA}`,
                        }}
                    >
                        Get Started
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PricingTable;
