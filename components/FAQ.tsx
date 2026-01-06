import React, { useState } from 'react';
import { COLORS } from '../constants';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FAQItem[] = [
    // Category 1: The Model (For B2B Business Owners)
    {
        category: "The Model",
        question: "Why is there no upfront fee of Rs. 100,000 like other agencies?",
        answer: "We believe a website is a living service, not a one-time product. Instead of charging you a massive upfront fee and disappearing, we charge a small monthly fee to stay by your side. This keeps your cash flow healthy while ensuring your site stays updated, secure, and fast forever."
    },
    {
        category: "The Model",
        question: "Am I locked into a long-term contract?",
        answer: "No. SALT is built on trust. You can cancel your subscription at any time with a 30-day notice. We don't believe in trapping clients; we believe in providing so much value that you never want to leave."
    },
    {
        category: "The Model",
        question: "What exactly does \"Unlimited Updates\" mean?",
        answer: "It means if you change your menu, adjust your gym hours, or have a new Christmas promotion, you just send us a WhatsApp message. We'll update your site within 24 hours at no extra cost. No hourly fees, no \"minimum project\" charges."
    },

    // Category 2: The Tech (For Professional Credibility)
    {
        category: "The Tech",
        question: "Is this a WordPress or Wix site?",
        answer: "No. We custom-code every site using HTML, CSS, and JavaScript. This makes SALT websites significantly faster, more secure, and better for Google ranking than \"heavy\" template builders. We build for performance, not just looks."
    },
    {
        category: "The Tech",
        question: "Do I need to pay for hosting or SSL separately?",
        answer: "Everything is included. Hosting, SSL (the green padlock), and technical maintenance are all covered in your monthly subscription. You only need to provide your domain name (or we can help you register a .lk or .com)."
    },
    {
        category: "The Tech",
        question: "Will my website work on mobile?",
        answer: "100%. In Sri Lanka, over 80% of your customers will find you on a phone. Every SALT build is \"Mobile-First,\" meaning it looks and functions perfectly on every screen size."
    },

    // Category 3: Student Portfolios (For the TikTok/Uni Crowd)
    {
        category: "Student Portfolios",
        question: "Why do I need a portfolio website if I have a LinkedIn/CV?",
        answer: "A CV shows what you did; a SALT portfolio shows who you are. When a recruiter Googles your name, a professional, custom-coded website makes you stand out instantly from 500 other applicants. It signals that you are tech-savvy and serious about your career."
    },
    {
        category: "Student Portfolios",
        question: "Is the first month really free for students?",
        answer: "Yes. We want you to see the impact of having your own link before you pay a cent. After the first month, it's just Rs. 1,500—less than the price of two coffees—to maintain your professional digital presence."
    },

    // Category 4: The Process (Speed & Support)
    {
        category: "The Process",
        question: "How long does it take to get my site live?",
        answer: "Typically 3 to 5 days. Once you pick a template and send us your content (photos/text), we handle the rest. We move at the speed of your business."
    },
    {
        category: "The Process",
        question: "What if something goes wrong at 10 PM?",
        answer: "You have a direct line to our co-founders via WhatsApp. We pride ourselves on a <24-hour response time, but for urgent technical issues, we're usually on it within the hour."
    }
];

// Group FAQs by category
const groupedFAQs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
        acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
}, {} as Record<string, FAQItem[]>);

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (key: string) => {
        setOpenIndex(openIndex === key ? null : key);
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/your-number-here', '_blank');
    };

    return (
        <div className="py-24 md:py-32" style={{ backgroundColor: '#F0F9FB' }} id="faq">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20 space-y-2">
                    <h2 className="text-5xl md:text-8xl font-light tracking-tighter uppercase" style={{ color: COLORS.NAVY }}>
                        Questions?
                    </h2>
                    <h2 className="text-7xl md:text-[160px] font-black tracking-tighter uppercase leading-[0.8]" style={{ color: COLORS.AQUA }}>
                        ANSWERED
                    </h2>
                    <p className="text-lg md:text-xl mt-8 max-w-2xl mx-auto" style={{ color: COLORS.NAVY, opacity: 0.7 }}>
                        Everything you need to know about SALT's subscription model, tech, and process.
                    </p>
                </div>

                {/* FAQ by Category */}
                <div className="space-y-12">
                    {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
                        <div key={category} className="space-y-4">
                            {/* Category Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: COLORS.AQUA }}>
                                    {category}
                                </h3>
                                <div className="h-1 w-20 mt-2 rounded-full" style={{ backgroundColor: COLORS.AQUA }} />
                            </div>

                            {/* Category FAQs */}
                            {categoryFAQs.map((faq, index) => {
                                const faqKey = `${category}-${index}`;
                                const isOpen = openIndex === faqKey;

                                return (
                                    <div
                                        key={faqKey}
                                        className="border-2 rounded-3xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl"
                                        style={{
                                            borderColor: isOpen ? COLORS.AQUA : 'rgba(129, 199, 212, 0.2)',
                                            backgroundColor: isOpen ? 'rgba(129, 199, 212, 0.08)' : 'rgba(255, 255, 255, 0.6)',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        {/* Question Button */}
                                        <button
                                            onClick={() => toggleFAQ(faqKey)}
                                            className="w-full px-6 md:px-10 py-6 md:py-8 flex items-center justify-between text-left transition-all group"
                                        >
                                            <div className="flex items-start gap-4 flex-1 pr-6">
                                                {/* Q Label */}
                                                <div
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-xl transition-all flex-shrink-0 shadow-sm"
                                                    style={{
                                                        backgroundColor: isOpen ? COLORS.AQUA : 'rgba(129, 199, 212, 0.1)',
                                                        color: isOpen ? '#FFFFFF' : COLORS.AQUA
                                                    }}
                                                >
                                                    Q
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-bold transition-colors flex-1 pt-1" style={{ color: COLORS.NAVY }}>
                                                    {faq.question}
                                                </h3>
                                            </div>

                                            {/* Icon */}
                                            <div
                                                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                                style={{
                                                    backgroundColor: isOpen ? COLORS.AQUA : 'rgba(129, 199, 212, 0.1)'
                                                }}
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke={isOpen ? '#FFFFFF' : COLORS.NAVY}
                                                    strokeWidth="2.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>

                                        {/* Answer Panel */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="px-6 md:px-10 pb-6 md:pb-8">
                                                <div className="pt-4 border-t-2" style={{ borderColor: 'rgba(129, 199, 212, 0.2)' }}>
                                                    <div className="flex gap-4">
                                                        <div
                                                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-sm"
                                                            style={{
                                                                backgroundColor: 'rgba(129, 199, 212, 0.1)',
                                                                color: COLORS.AQUA
                                                            }}
                                                        >
                                                            A
                                                        </div>
                                                        <p className="text-base md:text-lg leading-relaxed pt-1" style={{ color: COLORS.NAVY, opacity: 0.8 }}>
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-white/60 backdrop-blur-xl border-2 rounded-[2.5rem] p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.12)]" style={{ borderColor: COLORS.AQUA }}>
                    <h3 className="text-3xl md:text-5xl font-black mb-4" style={{ color: COLORS.AQUA }}>
                        Still have a question?
                    </h3>
                    <p className="text-lg md:text-xl mb-8" style={{ color: COLORS.NAVY, opacity: 0.7 }}>
                        Ask us on WhatsApp – we actually answer.
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="px-12 py-5 rounded-full font-black text-lg uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl flex items-center gap-3 mx-auto"
                        style={{
                            backgroundColor: COLORS.AQUA,
                            color: '#FFFFFF'
                        }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chat with Us
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
