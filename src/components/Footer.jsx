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
                            Kochi's most complete airport hotel, located just ten minutes from Cochin International Airport (CIAL). World-class accommodation, multi-cuisine restaurant, Diana Ira Spa, and banquet facility.
                        </p>
                        <div style={{ fontSize: '0.75rem', color: 'var(--brass)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: '600' }}>
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
                            <i className="fa-solid fa-location-dot" style={{ color: 'var(--brass)', marginTop: '4px' }}></i>
                            <span>
                                Diana Heights, Near Cochin International Airport, Athani, Nedumbassery, Ernakulam, Kerala – 683585
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-phone" style={{ color: 'var(--brass)' }}></i>
                            <div>
                                <a href="tel:+919526799179" style={{ color: '#ffffff', fontWeight: '600', display: 'block' }}>
                                    +91 952 679 9179
                                </a>
                                <span style={{ fontSize: '0.75rem', color: 'var(--stone-500)' }}>Landline: 0484 261 0366</span>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-envelope" style={{ color: 'var(--brass)' }}></i>
                            <a href={`mailto:${HOTEL_EMAIL}`} style={{ color: 'var(--stone-300)' }}>
                                {HOTEL_EMAIL}
                            </a>
                        </div>
                        
                        {/* Official Social Links */}
                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', color: 'var(--stone-300)' }}>
                            <a href="https://www.facebook.com/dianaheightshotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'var(--stone-300)', fontSize: '1.1rem' }}>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/dianaheightshotel" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--stone-300)', fontSize: '1.1rem' }}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/diana_heights" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'var(--stone-300)', fontSize: '1.1rem' }}>
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/diana-heights-luxury-hotel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--stone-300)', fontSize: '1.1rem' }}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UC5IVm6xWZ2NwOhodCCkNP9Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: 'var(--stone-300)', fontSize: '1.1rem' }}>
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
                        Managed by <strong style={{ color: 'var(--brass)' }}>HOSTORY</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
}
