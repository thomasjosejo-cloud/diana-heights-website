import Link from 'next/link';
import { HOTEL_PHONE, HOTEL_EMAIL } from '@/lib/whatsapp';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div>
                        <div className="footer-brand-title">
                            Diana <span>Heights</span>
                        </div>
                        <p className="footer-brand-desc">
                            Premium business-class hotel just ten minutes from Cochin International Airport. Everything you need, under one roof.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: 'var(--brass)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                            Nedumbassery · Cochin · Kerala
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="footer-col-title">Navigation</h4>
                        <ul className="footer-nav-list">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/rooms">Rooms & Suites</Link></li>
                            <li><Link href="/dining">Dining</Link></li>
                            <li><Link href="/facilities">Facilities</Link></li>
                            <li><Link href="/events">Events & MICE</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Accommodations */}
                    <div>
                        <h4 className="footer-col-title">Our Rooms</h4>
                        <ul className="footer-nav-list">
                            <li><Link href="/rooms/presidential-suite">Presidential Suite</Link></li>
                            <li><Link href="/rooms/luxury-suite">Luxury Suite</Link></li>
                            <li><Link href="/rooms/executive-room">Executive Room</Link></li>
                            <li><Link href="/rooms/deluxe-room">Deluxe Room</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <h4 className="footer-col-title">Location & Desk</h4>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-location-dot" style={{ color: 'var(--brass)', marginTop: '4px' }}></i>
                            <span>
                                NH-47, Near Cochin International Airport, Athani, Cochin, Kerala 683585
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-phone" style={{ color: 'var(--brass)' }}></i>
                            <a href="tel:+919526799179" style={{ color: 'var(--stone-300)' }}>
                                {HOTEL_PHONE}
                            </a>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-envelope" style={{ color: 'var(--brass)' }}></i>
                            <a href={`mailto:${HOTEL_EMAIL}`} style={{ color: 'var(--stone-300)' }}>
                                {HOTEL_EMAIL}
                            </a>
                        </div>
                        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', color: 'var(--stone-300)' }}>
                            <a href="https://www.facebook.com/dianaheightshotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'var(--stone-300)' }}>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/dianaheightshotel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--stone-300)' }}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/diana_heights" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'var(--stone-300)' }}>
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/diana-heights-luxury-hotel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--stone-300)' }}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div>
                        &copy; 2026 Diana Heights Hotel. All rights reserved.
                    </div>
                    <div>
                        Managed by <strong style={{ color: 'var(--brass)' }}>HOSTORY</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
}
