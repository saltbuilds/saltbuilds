import { useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals';

const WebVitals = () => {
    useEffect(() => {
        const sendToAnalytics = (metric: Metric) => {
            // Log to console in development
            const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
            if (isDev) {
                console.log(`[Web Vitals] ${metric.name}:`, metric.value);
            }

            // In production, you can send to your analytics service
            // Example: Google Analytics 4
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', metric.name, {
                    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    event_category: 'Web Vitals',
                    event_label: metric.id,
                    non_interaction: true,
                });
            }

            // You can also send to custom endpoints
            // fetch('/api/vitals', {
            //   method: 'POST',
            //   body: JSON.stringify(metric),
            //   headers: { 'Content-Type': 'application/json' }
            // });
        };

        // Measure Core Web Vitals
        onCLS(sendToAnalytics);  // Cumulative Layout Shift
        onINP(sendToAnalytics);  // Interaction to Next Paint (replaces FID)
        onFCP(sendToAnalytics);  // First Contentful Paint
        onLCP(sendToAnalytics);  // Largest Contentful Paint
        onTTFB(sendToAnalytics); // Time to First Byte
    }, []);

    return null; // This is a monitoring component with no UI
};

export default WebVitals;
