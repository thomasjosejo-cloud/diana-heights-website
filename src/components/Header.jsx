"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { buildWhatsAppLink, HOTEL_PHONE } from '@/lib/whatsapp';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/dining', label: 'Dining' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappDirectLink = buildWhatsAppLink({ type: 'booking' });

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-container">
                    {/* Brand Logo */}
                    <Link href="/" className="brand-logo-wrap" aria-label="Diana Heights Hotel Homepage">
                        <img
                            src="/assets/logo/diana-logo-header.png"
                            alt="Diana Heights Hotel"
                            className="brand-logo-img"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main Navigation">
                        <ul className="main-nav">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Header Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <a href="tel:+919526799179" className="header-phone-badge" title="Call Diana Heights Front Desk">
                            <i className="fa-solid fa-phone" style={{ color: 'var(--gold-light)', fontSize: '0.65rem' }}></i>
                            <span>{HOTEL_PHONE}</span>
                        </a>

                        <a
                            href={whatsappDirectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-gold"
                            style={{ padding: '0.5rem 1.15rem', fontSize: '0.72rem' }}
                        >
                            Book Direct
                        </a>

                        {/* Hamburger */}
                        <button
                            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle navigation menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <img
                        src="/assets/logo/diana-logo-header.png"
                        alt="Diana Heights Hotel"
                        style={{ height: '44px', width: 'auto' }}
                    />
                </div>

                <ul className="mobile-nav-links">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="mobile-nav-footer">
                    <div style={{ marginBottom: '1.25rem', fontSize: '0.85rem', color: '#94A3B8' }}>
                        <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.675rem', color: 'var(--gold-light)', marginBottom: '0.2rem' }}>
                            24-Hour Front Desk · 5.5 km from CIAL
                        </div>
                        <a href="tel:+919526799179" style={{ color: '#ffffff', fontWeight: '600', fontSize: '1rem' }}>
                            +91 952 679 9179
                        </a>
                    </div>

                    <a
                        href={whatsappDirectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        Chat with Reservations
                    </a>
                </div>
            </div>
        </header>
    );
}
