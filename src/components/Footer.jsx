import Link from 'next/link';
import { HOTEL_PHONE, HOTEL_EMAIL } from '@/lib/whatsapp';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <img 
                                src="/assets/logo/diana-logo-gold.png" 
                                alt="Diana Heights Hotel" 
                                style={{ height: '42px', width: 'auto' }} 
                            />
                        </div>
                        <p className="footer-brand-desc">
                            4-star rated business class hotel, located just ten minutes from Cochin International Airport (CIAL). Complete business accommodation, Flavours multi-cuisine restaurant, Diana Ira Spa, and banquet facilities.
                        </p>
                        <div style={{ fontSize: '0.725rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600' }}>
                            Near Cochin International Airport, Athani, Nedumbassery
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="footer-col-title">Navigation</h4>
                        <ul className="footer-nav-list">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/rooms">Rooms & Suites</Link></li>
                            <li><Link href="/dining">Dining (Flavours & Aero Cafe)</Link></li>
                            <li><Link href="/facilities">Facilities & Spa</Link></li>
                            <li><Link href="/events">Runway Hall (150 Pax)</Link></li>
                            <li><Link href="/gallery">Photo Gallery</Link></li>
                            <li><Link href="/contact">Contact Hub</Link></li>
                        </ul>
                    </div>

                    {/* Accommodations */}
                    <div>
                        <h4 className="footer-col-title">Accommodations</h4>
                        <ul className="footer-nav-list">
                            <li><Link href="/rooms/presidential-suite">Presidential Suite (750 Sq. Ft.)</Link></li>
                            <li><Link href="/rooms/luxury-suite">Luxury Suite (560–650 Sq. Ft.)</Link></li>
                            <li><Link href="/rooms/executive-room">Executive Room (300–500 Sq. Ft.)</Link></li>
                            <li><Link href="/rooms/deluxe-room">Deluxe Room (248 Sq. Ft.)</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Location */}
                    <div>
                        <h4 className="footer-col-title">Concierge & Desk</h4>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-location-dot" style={{ color: 'var(--gold-light)', marginTop: '4px' }}></i>
                            <span>
                                Diana Heights, Near Cochin International Airport, Athani, Nedumbassery, Ernakulam, Kerala – 683585
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-phone" style={{ color: 'var(--gold-light)' }}></i>
                            <div>
                                <a href="tel:+919526799179" style={{ color: '#ffffff', fontWeight: '600', display: 'block' }}>
                                    +91 952 679 9179
                                </a>
                                <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Landline: 0484 261 0366</span>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-envelope" style={{ color: 'var(--gold-light)' }}></i>
                            <a href={`mailto:${HOTEL_EMAIL}`} style={{ color: '#CBD5E1' }}>
                                {HOTEL_EMAIL}
                            </a>
                        </div>
                        
                        {/* Official Social Links */}
                        <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', color: '#94A3B8' }}>
                            <a href="https://www.facebook.com/dianaheightshotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/dianaheightshotel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/diana_heights" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/diana-heights-luxury-hotel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC5IVm6xWZ2NwOhodCCkNP9Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: '#94A3B8', fontSize: '1.05rem' }}>
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div>
                        &copy; 2026 Diana Heights Hotel. All rights reserved. Near Cochin International Airport.
                    </div>
                    <div>
                        Managed by <strong style={{ color: 'var(--gold-light)' }}>HOSTORY</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
}
