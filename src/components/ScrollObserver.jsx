"use client";
import { useEffect } from 'react';

export default function ScrollObserver() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const observeElements = () => {
            const elements = document.querySelectorAll('.animate-fade-in:not(.visible), .animate-slide-up:not(.visible), .timeline-item:not(.visible)');
            elements.forEach(el => observer.observe(el));
        };

        // Run initially
        observeElements();
        
        // Watch for React routing changes that inject new DOM nodes
        const mutationObserver = new MutationObserver(observeElements);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
