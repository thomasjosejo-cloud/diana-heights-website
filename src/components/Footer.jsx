"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                        <img src="/assets/logo/logo.png" alt="Diana Heights Logo" style={{ maxHeight: '95px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.5)) brightness(1.2)' }} />
                    </Link>
                    <p>Establishing the standard for premium airport-transit and boutique corporate hospitality in Kerala.</p>
                </div>
                
                <div>
                    <h4 className="footer-col-title">Navigation</h4>
                    <ul className="footer-links">
                        <li className="footer-link"><Link href="/">Home</Link></li>
                        <li className="footer-link"><Link href="/about">About Diana Heights</Link></li>
                        <li className="footer-link"><Link href="/rooms">Rooms & Suites</Link></li>
                        <li className="footer-link"><Link href="/facilities">Facilities & MICE</Link></li>
                        <li className="footer-link"><Link href="/destinations">Travel Guide</Link></li>
                        <li className="footer-link"><Link href="/gallery">Photo Gallery</Link></li>
                        <li className="footer-link"><Link href="/contact">Contact Hub</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="footer-col-title">Contact Us</h4>
                    <div className="footer-contact-info">
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span>NH-47, Athani Junction, Nedumbassery, Ernakulam, Kerala - 683585</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <span>+91 952 679 9179</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>reservations@dianaheights.com</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer-newsletter">
                    <h4 className="footer-col-title">Newsletter</h4>
                    <p>Join our club for exclusive transit packages and local culinary recipes.</p>
                    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to premium newsletters!'); }}>
                        <input type="email" placeholder="Your Email Address" className="newsletter-input" required />
                        <button type="submit" className="newsletter-btn"><i className="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
            
            <div className="container footer-bottom">
                <p>&copy; 2026 Diana Heights Luxury Hotel. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
             <div className="container footer-bottom" style={{borderTop: 'none', paddingTop: 0, justifyContent: 'center'}}>
                <p style={{fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)'}}>Digitally Transformed by Hostory, thehostory.in</p>
            </div>
        </footer>
    );
}

