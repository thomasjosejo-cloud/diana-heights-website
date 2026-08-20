import Link from 'next/link';

export default function Page() {
    return (
        <main>
            {/* ==========================================================================
       CONTACT HERO BANNER
       ========================================================================== */}
    <section className="hero" style={{'minHeight': '50vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="hero-bg">
            <img src="/assets/images/lobby.png" alt="Diana Heights hotel gardens at dusk" />
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '4rem'}}>
            <div className="hero-content animate-fade-in visible">
                <h1 className="hero-title" style={{'fontSize': '3rem', 'marginBottom': '0'}}>Contact Hub</h1>
                <p className="hero-description" style={{'marginTop': '0.5rem', 'marginBottom': '0'}}>Connect directly with our 24/7 guest relations and reservations team.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       CONTACT INFO & MESSAGE PORTAL GRID
       ========================================================================== */}
    <section className="section section-contact" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container">
            <div className="contact-grid">
                
                {/* Left Column: Contact Methods Card */}
                <div className="contact-info-wrap glass-panel animate-fade-in">
                    <h3 className="contact-info-title">Concierge Channels</h3>
                    <p style={{'color': 'var(--text-secondary)', 'marginBottom': '2rem', 'fontSize': '0.9rem', 'fontWeight': '300'}}>We operate around the clock. Connect directly with our front desk managers regarding corporate meetings, wedding layouts, or suite inquiries.</p>
                    
                    <div className="contact-methods">
                        {/* Method 1 */}
                        <div className="contact-method-item">
                            <div className="contact-method-icon"><i className="fa-solid fa-location-dot"></i></div>
                            <div>
                                <h4 className="contact-method-label">Mailing Address</h4>
                                <p className="contact-method-value">NH-47, Athani Junction, Nedumbassery, Ernakulam District, Kerala - 683585</p>
                            </div>
                        </div>

                        {/* Method 2 */}
                        <div className="contact-method-item">
                            <div className="contact-method-icon"><i className="fa-solid fa-phone"></i></div>
                            <div>
                                <h4 className="contact-method-label">Direct Hotline</h4>
                                <p className="contact-method-value">+91 952 679 9179<br /><span style={{'fontSize': '0.75rem', 'color': 'var(--text-secondary)'}}>Reservations & General Desk</span></p>
                            </div>
                        </div>

                        {/* Method 3 */}
                        <div className="contact-method-item">
                            <div className="contact-method-icon"><i className="fa-solid fa-envelope"></i></div>
                            <div>
                                <h4 className="contact-method-label">Electronic Mail</h4>
                                <p className="contact-method-value">reservations@dianaheights.com<br /><span style={{'fontSize': '0.75rem', 'color': 'var(--text-secondary)'}}>Expect replies within 1 hour</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Social Channels */}
                    <div className="contact-socials">
                        <a href="#" className="contact-social-icon" aria-label="Follow us on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="contact-social-icon" aria-label="Follow us on Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="contact-social-icon" aria-label="Connect with us on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" className="contact-social-icon" aria-label="Watch us on YouTube"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

                {/* Right Column: Premium Inquiry Form */}
                <div className="contact-form-wrap glass-panel animate-fade-in">
                    <h3 style={{'fontSize': '1.75rem', 'marginBottom': '2rem'}}>Send a Secure Message</h3>
                    
                    <form onsubmit="event.preventDefault(); alert('Thank you. Your corporate inquiry has been encrypted and sent to Diana Heights front office management. We will follow up shortly.'); this.reset();">
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="form-name" className="form-label">Full Name</label>
                                <input type="text" id="form-name" className="form-input" placeholder="Alexander Sterling" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="form-phone" className="form-label">Contact Number</label>
                                <input type="tel" id="form-phone" className="form-input" placeholder="+1 (555) 019-2834" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-email" className="form-label">Email Address</label>
                            <input type="email" id="form-email" className="form-input" placeholder="alex@sterlingconsulting.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-subject" className="form-label">Subject of Inquiry</label>
                            <select id="form-subject" className="form-input">
                                <option value="suite">Luxury Suite Reservation Hold</option>
                                <option value="mice">Runway Hall Corporate Convention</option>
                                <option value="wedding">Runway Hall Destination Wedding</option>
                                <option value="spa">Diana Hut Wellness Spa packages</option>
                                <option value="other">General Hospitality Inquiry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-msg" className="form-label">Your message</label>
                            <textarea id="form-msg" className="form-input" placeholder="Please outline your flight details or banquet capacity requirements..." required></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" style={{'width': '100%', 'marginTop': '1rem'}}>Transmit Inquiries</button>
                    </form>
                </div>

            </div>
        </div>
    </section>

    {/* ==========================================================================
       DOUBLY UNIQUE CUSTOM SVG TRANSIT MAP (CIAL TO ATHANI)
       ========================================================================== */}
    <section className="section section-transit-map" style={{'backgroundColor': 'var(--bg-secondary)', 'borderTop': '1px solid var(--border-color)'}}>
        <div className="container">
            <div className="section-title-wrap">
                <span className="section-subtitle">Gateway Geography</span>
                <h2 className="section-title">CIAL Proximity Map</h2>
            </div>
            
            <div className="glass-panel animate-fade-in" style={{'padding': '4rem 2rem', 'borderRadius': 'var(--border-radius)', 'textAlign': 'center'}}>
                <h3 style={{'fontSize': '1.45rem', 'marginBottom': '2.5rem', 'textTransform': 'uppercase', 'letterSpacing': '0.1em'}}>Airport Transit Route</h3>
                
                {/* Responsive Custom SVG Map */}
                <div style={{'maxWidth': '800px', 'margin': '0 auto', 'overflowX': 'auto'}}>
                    <svg viewBox="0 0 800 200" width="100%" height="auto" style={{'minWidth': '600px'}}>
                        {/* Defs for premium gradients */}
                        <defs>
                            <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="var(--border-color)" stop-opacity="0.3"/>
                                <stop offset="50%" stop-color="var(--accent-color)" stop-opacity="0.8"/>
                                <stop offset="100%" stop-color="var(--border-color)" stop-opacity="0.3"/>
                            </linearGradient>
                        </defs>
                        
                        {/* NH-47 Road Alignment */}
                        <line x1="100" y1="100" x2="700" y2="100" stroke="url(#roadGrad)" stroke-width="8" stroke-linecap="round"/>
                        <line x1="100" y1="100" x2="700" y2="100" stroke="var(--bg-secondary)" stroke-width="2" stroke-dasharray="10 10"/>
                        
                        {/* Airport Node */}
                        <circle cx="150" cy="100" r="30" fill="var(--bg-primary)" stroke="var(--border-color)" stroke-width="2"/>
                        <path d="M140 100 L160 100" stroke="var(--accent-color)" stroke-width="4"/>
                        <path d="M150 90 L150 110" stroke="var(--accent-color)" stroke-width="4"/>
                        <text x="150" y="150" fill="var(--text-primary)" font-size="12" font-weight="600" text-anchor="middle" font-family="var(--font-body)">CIAL AIRPORT</text>
                        <text x="150" y="165" fill="var(--text-secondary)" font-size="10" text-anchor="middle" font-family="var(--font-body)">Cochin Intl</text>
                        
                        {/* Diana Heights Node (Athani Junction) */}
                        <circle cx="450" cy="100" r="35" fill="var(--accent-color)" stroke="var(--accent-dark)" stroke-width="3"/>
                        <polygon points="450,85 465,100 455,100 455,115 445,115 445,100 435,100" fill="var(--bg-primary)"/>
                        <text x="450" y="155" fill="var(--accent-color)" font-size="14" font-weight="700" text-anchor="middle" font-family="var(--font-heading)">DIANA HEIGHTS</text>
                        <text x="450" y="172" fill="var(--text-secondary)" font-size="10" text-anchor="middle" font-family="var(--font-body)">Athani Junction, NH-47</text>
                        
                        {/* City Gateway Node */}
                        <circle cx="650" cy="100" r="25" fill="var(--bg-primary)" stroke="var(--border-color)" stroke-width="2"/>
                        <text x="650" y="145" fill="var(--text-primary)" font-size="12" font-weight="600" text-anchor="middle" font-family="var(--font-body)">ERNAKULAM</text>
                        <text x="650" y="160" fill="var(--text-secondary)" font-size="10" text-anchor="middle" font-family="var(--font-body)">Cochin City (28km)</text>
                        
                        {/* Direct Route indicator lines */}
                        <path d="M190 80 Q320 50 410 80" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-dasharray="5 5" stroke-linecap="round"/>
                        <text x="300" y="55" fill="var(--accent-color)" font-size="10" font-weight="600" text-anchor="middle" font-family="var(--font-body)">5 km Shuttle (10 Mins)</text>
                    </svg>
                </div>
                
                <p style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '2rem auto 0 auto', 'fontWeight': '300', 'fontSize': '0.85rem'}}>Situated right on the NH-47 highway corridor, offering instantaneous highway pull-ins, zero city traffic delays, and rapid Airport shuttle runs.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       GLOBAL PREMIUM FOOTER
       ========================================================================== */}
        </main>
    );
}
