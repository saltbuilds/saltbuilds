import React, { useState } from 'react';
import { COLORS } from '../constants';

interface FAQItem {
    question: string;
    answer: string;
    highlight?: string;
}

const faqs: FAQItem[] = [
    {
        question: "How long does it take to build an MVP?",
        answer: "We deliver a functional MVP in 2-4 weeks. Unlike agencies that drag projects for months, we work with laser focus. Week 1: Strategy & Design. Week 2-3: Development & Testing. Week 4: Launch & Optimization. Fast doesn't mean rushed—we're just efficient.",
        highlight: "2-4 weeks"
    },
    {
        question: "What's Salt's optimization math?",
        answer: "Here's the formula: Custom Code (no bloat) + Performance-First Architecture + Strategic Content = 90+ Lighthouse Scores. We lazy-load images, split code intelligently, and eliminate unnecessary dependencies. The result? Your site loads in under 2 seconds, converting more visitors into customers.",
        highlight: "90+ Lighthouse Scores"
    },
    {
        question: "Why custom code instead of templates?",
        answer: "Templates load 500KB+ of unused features. Our custom code is lean, typically under 100KB gzipped. That means 5x faster loading, better SEO rankings, and zero licensing fees. You own every line of code—no vendor lock-in, ever.",
        highlight: "5x faster"
    },
    {
        question: "How do you ensure mobile responsiveness?",
        answer: "We design mobile-first, then scale up. Every element is tested across real devices—iPhone, Android, tablets. Our responsive framework adapts seamlessly from 320px to 4K displays. Plus, we use touch-optimized interactions for buttery-smooth mobile UX.",
        highlight: "Mobile-first"
    },
    {
        question: "What's included in ongoing support?",
        answer: "Ever-Preserved Care includes: 24/7 uptime monitoring, security patches within 24 hours, monthly performance audits, content updates (up to 5 hours/month), and priority support. Think of us as your in-house dev team—without the full-time cost.",
        highlight: "24/7 monitoring"
    },
    {
        question: "Can you integrate with my existing tools?",
        answer: "Absolutely. We've integrated with 100+ platforms: CRMs (HubSpot, Salesforce), analytics (GA4, Mixpanel), payment gateways (Stripe, PayPal), email tools (Mailchimp, SendGrid), and more. If it has an API, we can connect it.",
        highlight: "100+ integrations"
    },
    {
        question: "How do you measure lead generation success?",
        answer: "We track what matters: conversion rate, form submissions, click-through rates, bounce rate, and time-on-page. You get a monthly dashboard with actionable insights. Our average client sees a 40% increase in qualified leads within 3 months.",
        highlight: "40% increase"
    },
    {
        question: "What makes SALT different from other agencies?",
        answer: "Zero fluff. We don't sell 'creative services' or endless discovery phases. We build fast, we build clean, and we build to convert. Every pixel serves a purpose. No WordPress bloat, no template shortcuts—just pure, optimized code that works.",
        highlight: "Pure optimized code"
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-24 md:py-32" style={{ backgroundColor: '#F0F9FB' }} id="faq">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 space-y-2">
                    <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-black uppercase">
                        Questions?
                    </h2>
                    <h2 className="text-7xl md:text-[160px] font-black tracking-tighter text-black uppercase leading-[0.8]">
                        ANSWERED
                    </h2>
                    <p className="text-lg md:text-xl text-black/70 mt-8 max-w-2xl mx-auto">
                        Cut through the noise. Here's what you really want to know.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-2 border-black/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#81C7D4] hover:shadow-xl"
                            style={{
                                backgroundColor: openIndex === index ? '#E8F6F9' : '#FFFFFF'
                            }}
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between text-left transition-all group"
                            >
                                <div className="flex-1 pr-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#81C7D4] transition-colors">
                                        {faq.question}
                                    </h3>
                                </div>

                                {/* Icon */}
                                <div
                                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-[#81C7D4] rotate-180'
                                        : 'bg-black/5 group-hover:bg-[#81C7D4]/20'
                                        }`}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke={openIndex === index ? '#FFFFFF' : '#000000'}
                                        strokeWidth="2.5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer Panel */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 md:px-10 pb-6 md:pb-8">
                                    <div className="pt-4 border-t-2 border-black/5">
                                        <p className="text-base md:text-lg text-black/80 leading-relaxed">
                                            {faq.answer.split(faq.highlight || '').map((part, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {part}
                                                    {i < arr.length - 1 && faq.highlight && (
                                                        <span className="font-bold text-[#81C7D4] bg-[#81C7D4]/10 px-2 py-1 rounded">
                                                            {faq.highlight}
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl text-black/70 mb-8">
                        Still have questions? Let's talk.
                    </p>
                    <button
                        onClick={() => window.location.href = 'mailto:saltbuilds@gmail.com'}
                        className="px-12 py-5 rounded-full bg-black text-white font-bold text-lg uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* FAQ Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
};

export default FAQ;
