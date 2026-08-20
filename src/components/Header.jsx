"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const header = document.querySelector('header');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container nav-container">
                <Link href="/" className="logo">
                    <img src="/assets/logo/logo.png" alt="Diana Heights Logo" style={{ maxHeight: '85px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.5)) brightness(1.2)' }} />
                </Link>
                
                <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
                    <li><Link href="/" className="nav-link">Home</Link></li>
                    <li><Link href="/about" className="nav-link">About</Link></li>
                    <li><Link href="/rooms" className="nav-link">Rooms</Link></li>
                    <li><Link href="/facilities" className="nav-link">Facilities</Link></li>
                    <li><Link href="/destinations" className="nav-link">Destinations</Link></li>
                    <li><Link href="/gallery" className="nav-link">Gallery</Link></li>
                    <li><Link href="/contact" className="nav-link">Contact</Link></li>
                    <li style={{ display: 'none' }} className="mobile-only-cta"><Link href="/rooms" className="btn btn-primary" style={{ marginTop: '1rem', color: '#fff' }}>Inquire Availability</Link></li>
                </ul>

                <div className="nav-actions">
                    <Link href="/booking" className="btn btn-outline" style={{ padding: '0.65rem 1.5rem', fontSize: '0.75rem' }}>Reserve Room</Link>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} id="hamburger-toggle" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}
