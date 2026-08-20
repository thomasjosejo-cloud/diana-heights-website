import Link from 'next/link';

export default function Page() {
    return (
        <main>
            {/* ==========================================================================
       ROOMS HERO BANNER
       ========================================================================== */}
    <section className="hero" style={{'minHeight': '50vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="hero-bg">
            <img src="/assets/images/Executive room 01.png" alt="Diana Heights Luxury Suite Interior Master Bed" />
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '4rem'}}>
            <div className="hero-content animate-fade-in visible">
                <h1 className="hero-title" style={{'fontSize': '3rem', 'marginBottom': '0'}}>Our Accommodations</h1>
                <p className="hero-description" style={{'marginTop': '0.5rem', 'marginBottom': '0'}}>Impeccable spaces curated for high-flyers and luxury seekers.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       ROOM COMPARISON DETAIL SHOWROOM
       ========================================================================== */}
    <section className="section section-showroom" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container">
            <div className="section-title-wrap">
                <span className="section-subtitle">Exquisite Rooms</span>
                <h2 className="section-title">Rooms & Palatial Suites</h2>
            </div>

            {/* 1. Standard Room Details */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/deluxe room 01.png" alt="Diana Heights Deluxe Room" className="facility-img" />
                </div>
                <div className="facility-desc">
                    <span className="facility-tag">Cozy Comfort &bull; From ₹3,000 / Night</span>
                    <h3>Deluxe Room</h3>
                    <p>
                        A cozy corporate retreat blending warm aesthetic wood flooring, direct independent high-speed internet access, teak furnishings, a modern electric kettle with tea/coffee setups, and an elegant rain shower. Perfect for travelers seeking a serene second home.
                    </p>
                    <div className="facility-highlights" style={{'marginBottom': '2rem'}}>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">248 Square Feet</span>
                            <span className="facility-hl-desc">Cozy functional grid</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Teak Accents</span>
                            <span className="facility-hl-desc">Keralite wooden details</span>
                        </div>
                    </div>
                    <a href="#quick-booking-anchor" className="btn btn-primary">Book Deluxe Room</a>
                </div>
            </div>

            {/* 2. Executive Room Details */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-desc">
                    <span className="facility-tag">Spacious Transit &bull; From ₹4,200 / Night</span>
                    <h3>Executive Room</h3>
                    <p>
                        Designed with generous space. Highlights a choice of plush Double, King, or Twin beds, a spacious, dedicated seating lounge area, private balcony pull-outs, direct workspace writing desks, safe repository cabinets, and full-service room amenities.
                    </p>
                    <div className="facility-highlights" style={{'marginBottom': '2rem'}}>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">300-500 Square Feet</span>
                            <span className="facility-hl-desc">Expansive room configuration</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Bed Variety</span>
                            <span className="facility-hl-desc">King, Double, or Twin setups</span>
                        </div>
                    </div>
                    <a href="#quick-booking-anchor" className="btn btn-primary">Book Executive Room</a>
                </div>
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/Executive room 01.png" alt="Diana Heights Executive Room" className="facility-img" />
                </div>
            </div>



            {/* 4. Luxury Suite Details */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-desc">
                    <span className="facility-tag">Elite Exclusivity &bull; From ₹7,500 / Night</span>
                    <h3>Luxury Suite</h3>
                    <p>
                        A premier accommodation, previously available by invitation only. Boasts palatial living and dining areas, premium teak furnishings, luxurious marble bathrooms, custom organic espresso capsules, and dedicated personal guest butler assistance at your disposal.
                    </p>
                    <div className="facility-highlights" style={{'marginBottom': '2rem'}}>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">560-650 Square Feet</span>
                            <span className="facility-hl-desc">Invitation-class luxury spacing</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Premium Butler</span>
                            <span className="facility-hl-desc">Personal guest managers</span>
                        </div>
                    </div>
                    <a href="#quick-booking-anchor" className="btn btn-primary">Book Luxury Suite</a>
                </div>
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/suit 01.png" alt="Diana Heights Luxury Suite" className="facility-img" />
                </div>
            </div>

            {/* 5. Presidential Suite Details */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/P suite 01.png" alt="Diana Heights Presidential Suite" className="facility-img" />
                </div>
                <div className="facility-desc">
                    <span className="facility-tag">The Symmetrical Majesty &bull; From ₹12,000 / Night</span>
                    <h3>Presidential Suite</h3>
                    <p>
                        The hotel's absolute crowning achievement. Showcases an oversized grand living room or an expansive office table suite, dinner seating for six, service pantry, large private balconies, premium teak wood interiors, and VIP airport fast passes.
                    </p>
                    <div className="facility-highlights" style={{'marginBottom': '2rem'}}>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">750 Square Feet</span>
                            <span className="facility-hl-desc">Expansive private layout</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Pantry & Six Diner Set</span>
                            <span className="facility-hl-desc">Perfect for hosting events</span>
                        </div>
                    </div>
                    <a href="#quick-booking-anchor" className="btn btn-primary">Book Presidential Suite</a>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       GLOBAL PREMIUM FOOTER
       ========================================================================== */}
        </main>
    );
}
