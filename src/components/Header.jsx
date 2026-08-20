"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { buildWhatsAppLink, HOTEL_PHONE } from '@/lib/whatsapp';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappDirectLink = buildWhatsAppLink({ type: 'booking' });

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-capsule">
                    {/* Brand Logo Lockup */}
                    <Link href="/" className="brand-logo" aria-label="Diana Heights Homepage">
                        <img 
                            src="/assets/logo/logo.png" 
                            alt="Diana Heights Hotel" 
                            className="brand-logo-img" 
                        />
                        <span className="brand-title">
                            Diana <span>Heights</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Main Navigation">
                        <ul className="main-nav">
                            <li>
                                <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/rooms" className={`nav-link ${pathname.startsWith('/rooms') ? 'active' : ''}`}>
                                    Rooms
                                </Link>
                            </li>
                            <li>
                                <Link href="/dining" className={`nav-link ${pathname === '/dining' ? 'active' : ''}`}>
                                    Dining
                                </Link>
                            </li>
                            <li>
                                <Link href="/facilities" className={`nav-link ${pathname === '/facilities' ? 'active' : ''}`}>
                                    Facilities & Spa
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className={`nav-link ${pathname === '/events' ? 'active' : ''}`}>
                                    Events (150 Pax)
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Header Actions */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <a href="tel:+919526799179" className="header-phone-badge" title="Call Diana Heights Reservations">
                            <i className="fa-solid fa-phone" style={{ color: 'var(--brass)', fontSize: '0.75rem' }}></i>
                            <span>{HOTEL_PHONE}</span>
                        </a>

                        <a 
                            href={whatsappDirectLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-brass"
                            style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}
                        >
                            Book Direct
                        </a>

                        {/* Hamburger Button */}
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

            {/* Mobile Drawer Navigation */}
            <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/rooms">Rooms & Suites (4 Types)</Link></li>
                    <li><Link href="/dining">Dining (Flavours & Aero Cafe)</Link></li>
                    <li><Link href="/facilities">Diana Ira Spa & Pool</Link></li>
                    <li><Link href="/events">Runway Hall (150 Pax)</Link></li>
                    <li><Link href="/gallery">Photo Gallery</Link></li>
                    <li><Link href="/contact">Contact Hub</Link></li>
                </ul>

                <div className="mobile-nav-footer">
                    <div style={{ marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--stone-300)' }}>
                        <div style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', color: 'var(--brass)', marginBottom: '0.25rem' }}>
                            24-Hour Front Desk · 5.5 km from CIAL
                        </div>
                        <a href="tel:+919526799179" style={{ color: '#ffffff', fontWeight: '600', fontSize: '1.05rem' }}>
                            +91 952 679 9179
                        </a>
                    </div>

                    <a 
                        href={whatsappDirectLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-brass" 
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        Chat with Reservations
                    </a>
                </div>
            </div>
        </header>
    );
}
