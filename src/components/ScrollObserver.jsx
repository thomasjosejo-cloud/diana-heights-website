"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const observeElements = () => {
            const elements = document.querySelectorAll(
                '.reveal:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-fade:not(.is-revealed), .reveal-scale:not(.is-revealed), .reveal-stagger:not(.is-revealed)'
            );
            elements.forEach(el => observer.observe(el));
        };

        // Run immediately and slightly delayed for dynamic content
        observeElements();
        const timeout = setTimeout(observeElements, 150);

        // Mutation observer to handle client route changes
        const mutationObserver = new MutationObserver(observeElements);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [pathname]);

    return null;
}
