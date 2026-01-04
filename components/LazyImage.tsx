import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23f0f9fb" width="400" height="400"/%3E%3C/svg%3E'
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.01
            }
        );

        observer.observe(imgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isInView ? src : placeholder}
            alt={alt}
            className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
        />
    );
};

export default LazyImage;
