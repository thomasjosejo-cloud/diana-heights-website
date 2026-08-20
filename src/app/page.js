"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { buildWhatsAppLink, HOTEL_PHONE } from '@/lib/whatsapp';
import { roomsData } from '@/content/rooms';
import { diningVenues } from '@/content/dining';

const heroSlides = [
    '/assets/images/diana.png',
    '/assets/images/pool 01.png',
    '/assets/images/P suite 02.png',
    '/assets/images/lobby.png',
    '/assets/images/dining 01.png'
];

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('Presidential Suite');
    const [adults, setAdults] = useState('2');
    const [children, setChildren] = useState('0');

    // Ken Burns background carousel rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleQuickBook = (e) => {
        e.preventDefault();
        const whatsappUrl = buildWhatsAppLink({
            type: 'booking',
            roomName: roomType,
            checkIn,
            checkOut,
            adults,
            children
        });
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <main>
            {/* ==========================================================================
               1. HERO SECTION (KEN BURNS CAROUSEL + 3-LINE REVEAL + QUICK BOOK WIDGET)
               ========================================================================== */}
            <section className="hero-v2">
                {/* 5-Image Ken Burns Background Carousel */}
                <div className="hero-ken-burns">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`ken-burns-slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url('${slide}')` }}
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <div className="hero-overlay" />

                <div className="container">
                    <div className="hero-grid">
                        {/* Hero Left: Headline & Positioning */}
                        <div>
                            <span className="eyebrow eyebrow-dark">
                                PREMIUM BUSINESS-CLASS HOTEL · COCHIN AIRPORT
                            </span>
                            <h1 className="hero-headline">
                                Ten minutes from your gate.<br />
                                Everything else,<br />
                                <em>taken care of.</em>
                            </h1>
                            <p className="hero-subtext">
                                Unpack, unwind, or get straight to business. Two restaurants, a full-service spa, and premium transit comfort just ten minutes from the tarmac — we handle the rest.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a 
                                    href={buildWhatsAppLink({ type: 'booking' })} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-brass"
                                >
                                    Book Direct with Us
                                </a>
                                <Link href="/rooms" className="btn btn-outline-light">
                                    Explore Rooms
                                </Link>
                            </div>
                        </div>

                        {/* Hero Right: Frosted Quick-Book Widget */}
                        <div>
                            <div className="quick-book-card">
                                <div className="quick-book-header">
                                    <div className="quick-book-subtitle">Direct Reservation</div>
                                    <h2 className="quick-book-title">Check Availability</h2>
                                </div>

                                <form onSubmit={handleQuickBook}>
                                    <div className="quick-book-grid">
                                        <div className="field-group">
                                            <label className="field-label" htmlFor="hero-checkin">
                                                <i className="fa-regular fa-calendar"></i> Check In
                                            </label>
                                            <input
                                                type="date"
                                                id="hero-checkin"
                                                className="field-input"
                                                value={checkIn}
                                                onChange={(e) => setCheckIn(e.target.value)}
                                            />
                                        </div>

                                        <div className="field-group">
                                            <label className="field-label" htmlFor="hero-checkout">
                                                <i className="fa-regular fa-calendar"></i> Check Out
                                            </label>
                                            <input
                                                type="date"
                                                id="hero-checkout"
                                                className="field-input"
                                                value={checkOut}
                                                onChange={(e) => setCheckOut(e.target.value)}
                                            />
                                        </div>

                                        <div className="field-group full-width">
                                            <label className="field-label" htmlFor="hero-room">
                                                <i className="fa-solid fa-bed"></i> Room Category
                                            </label>
                                            <select
                                                id="hero-room"
                                                className="field-input"
                                                value={roomType}
                                                onChange={(e) => setRoomType(e.target.value)}
                                            >
                                                <option value="Presidential Suite">Presidential Suite (Expansive)</option>
                                                <option value="Luxury Suite">Luxury Suite (Generous Space)</option>
                                                <option value="Executive Room">Executive Room (Productive Stay)</option>
                                                <option value="Deluxe Room">Deluxe Room (Comfortable)</option>
                                            </select>
                                        </div>

                                        <div className="field-group">
                                            <label className="field-label" htmlFor="hero-adults">
                                                <i className="fa-solid fa-user"></i> Adults
                                            </label>
                                            <select
                                                id="hero-adults"
                                                className="field-input"
                                                value={adults}
                                                onChange={(e) => setAdults(e.target.value)}
                                            >
                                                <option value="1">1 Adult</option>
                                                <option value="2">2 Adults</option>
                                                <option value="3">3 Adults</option>
                                                <option value="4">4 Adults</option>
                                            </select>
                                        </div>

                                        <div className="field-group">
                                            <label className="field-label" htmlFor="hero-children">
                                                <i className="fa-solid fa-child"></i> Children
                                            </label>
                                            <select
                                                id="hero-children"
                                                className="field-input"
                                                value={children}
                                                onChange={(e) => setChildren(e.target.value)}
                                            >
                                                <option value="0">0 Children</option>
                                                <option value="1">1 Child</option>
                                                <option value="2">2 Children</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-brass quick-book-submit">
                                        Check Rates via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               2. TRUST STRIP (DARK INK BAND)
               ========================================================================== */}
            <section className="trust-strip">
                <div className="container">
                    <div className="trust-strip-inner">
                        <div className="trust-item">
                            <i className="fa-solid fa-star star-icon"></i>
                            <span><strong>4.3★</strong> Google Rating</span>
                        </div>
                        <div className="trust-bullet"></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-comment-dots" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>4,700+</strong> Reviews on Google</span>
                        </div>
                        <div className="trust-bullet"></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-plane-departure" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>5 min</strong> From Cochin Airport</span>
                        </div>
                        <div className="trust-bullet"></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-tag" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>Best Rate</strong> — Book Direct</span>
                        </div>
                        <div className="trust-bullet"></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-check" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>No OTA Fees</strong></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               3. ABOUT — "THE MONUMENT"
               ========================================================================== */}
            <section className="section-monument">
                <div className="container">
                    <div className="monument-grid">
                        <div className="monument-anchor">
                            <div className="monument-number">5 min.</div>
                            <div className="monument-tagline">
                                FROM COCHIN INTERNATIONAL AIRPORT
                            </div>
                        </div>

                        <div>
                            <span className="eyebrow">ABOUT DIANA HEIGHTS</span>
                            <h2 className="section-heading" style={{ color: 'var(--ink)' }}>
                                Kochi's most complete airport hotel.
                            </h2>
                            <p className="monument-copy">
                                Diana Heights is Kochi's most complete airport hotel — where business travellers decompress, families celebrate, and transit guests discover a reason to extend the stay. Premium business-class comfort just ten minutes from Cochin International Airport, with two restaurants, a full-service spa, an outdoor pool, and banquet space for 150. Everything you need, under one roof.
                            </p>

                            <div className="monument-stats-row">
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">43</div>
                                    <div className="monument-stat-label">Rooms</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">2</div>
                                    <div className="monument-stat-label">Restaurants</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">1</div>
                                    <div className="monument-stat-label">Spa & Wellness</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">150</div>
                                    <div className="monument-stat-label">Pax Events</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               4. ROOMS — "FILM FRAMES" (4 FRAMES, 1 ADDRESS)
               ========================================================================== */}
            <section className="section-rooms-film">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow">OUR ROOMS</span>
                        <h2 className="section-heading" style={{ color: 'var(--ink)' }}>
                            Four rooms. One address.
                        </h2>
                    </div>

                    <div className="rooms-frames-grid">
                        {roomsData.map((room) => {
                            const isPres = room.slug === 'presidential-suite';
                            const whatsappRoomLink = buildWhatsAppLink({
                                type: 'room',
                                roomName: room.name
                            });

                            return (
                                <div
                                    key={room.slug}
                                    className={`film-frame-card ${isPres ? 'featured-presidential' : ''}`}
                                >
                                    <div
                                        className="film-frame-bg"
                                        style={{ backgroundImage: `url('${room.image}')` }}
                                    />
                                    <div className="film-frame-overlay" />

                                    <div className="film-frame-content">
                                        <div className="film-frame-rule" />
                                        <div className="film-frame-tags">
                                            <span>{room.sizeQualitative}</span>
                                            <span>&bull;</span>
                                            <span>{room.sleeps}</span>
                                        </div>
                                        <h3 className="film-frame-title font-serif">{room.name}</h3>
                                        <p className="film-frame-desc">{room.description}</p>

                                        <div className="film-frame-meta">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <a
                                                    href={whatsappRoomLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="link-brass"
                                                >
                                                    Chat with Reservations <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                                <Link
                                                    href={`/rooms/${room.slug}`}
                                                    style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                                                >
                                                    Details &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               5. FACILITIES — "THE LUXURY MENU" (DARK INK 3x2 BRASS GRID)
               ========================================================================== */}
            <section className="section-facilities-menu">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow eyebrow-dark">AMENITIES</span>
                        <h2 className="section-heading" style={{ color: '#ffffff' }}>
                            Everything under one roof.
                        </h2>
                    </div>

                    <div className="facilities-menu-grid">
                        {/* 1. Outdoor Pool */}
                        <div className="facility-menu-cell">
                            <div>
                                <div className="facility-menu-rule"></div>
                                <h3 className="facility-menu-name">Outdoor Pool</h3>
                                <div className="facility-menu-sub">Swimming & Leisure</div>
                                <p className="facility-menu-desc">
                                    Landscaped outdoor swimming pool surrounded by tropical palms and peaceful sun lounges.
                                </p>
                            </div>
                        </div>

                        {/* 2. Diana Ira Spa */}
                        <div className="facility-menu-cell">
                            <div>
                                <div className="facility-menu-rule"></div>
                                <h3 className="facility-menu-name">Diana Ira Spa</h3>
                                <div className="facility-menu-sub">Massage · Steam · Sauna</div>
                                <p className="facility-menu-desc">
                                    Authentic Ayurvedic rejuvenation, herbal steam treatments, and restorative therapeutic body care.
                                </p>
                            </div>
                        </div>

                        {/* 3. Dining */}
                        <div className="facility-menu-cell">
                            <div>
                                <div className="facility-menu-rule"></div>
                                <h3 className="facility-menu-name">Free Zone & Aero Café</h3>
                                <div className="facility-menu-sub">All-Day & Specialty Dining</div>
                                <p className="facility-menu-desc">
                                    24-hour round-the-clock dining along with intimate specialty cuisine and lavish breakfast spreads.
                                </p>
                            </div>
                        </div>

                        {/* 4. Health Club */}
                        <div className="facility-menu-cell">
                            <div>
                                <div className="facility-menu-rule"></div>
                                <h3 className="facility-menu-name">Health Club & Gym</h3>
                                <div className="facility-menu-sub">Fitness & Vitality</div>
                                <p className="facility-menu-desc">
                                    Full cardio machine arrays, free weights, and stretching zones for maintaining your wellness rhythm.
                                </p>
                            </div>
                        </div>

                        {/* 5. Runway Hall */}
                        <div className="facility-menu-cell">
                            <div>
                                <div className="facility-menu-rule"></div>
                                <h3 className="facility-menu-name">Runway Hall</h3>
                                <div className="facility-menu-sub">Events · 150 Pax</div>
                                <p className="facility-menu-desc">
                                    Versatile conference and banquet hall with crystal acoustic sound arrays and banquet catering.
                                </p>
                            </div>
                        </div>

                        {/* 6. Business Centre */}
                        <div className="facility-menu-cell">
                            <div>
                                <div className="facility-menu-rule"></div>
                                <h3 className="facility-menu-name">Business Centre</h3>
                                <div className="facility-menu-sub">Meetings & Boardroom</div>
                                <p className="facility-menu-desc">
                                    Dedicated workstations, high-speed Wi-Fi, and private boardroom facilities for executive discussions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <Link href="/facilities" className="btn btn-outline-light">
                            View All Facilities & Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               6. DINING — "THE DIPTYCH" (SPLIT PANELS)
               ========================================================================== */}
            <section className="section-dining-diptych">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow">DINING</span>
                        <h2 className="section-heading" style={{ color: 'var(--ink)' }}>
                            Two restaurants. Every craving covered.
                        </h2>
                    </div>

                    <div className="diptych-grid">
                        {/* Panel 1: Free Zone Cafe */}
                        <div className="diptych-panel">
                            <div className="diptych-img-wrap">
                                <img
                                    src="/assets/images/dining 01.png"
                                    alt="Free Zone Café at Diana Heights"
                                    className="diptych-img"
                                />
                            </div>
                            <div className="diptych-content">
                                <div>
                                    <div className="diptych-tag">OPEN 24 HOURS</div>
                                    <h3 className="diptych-title font-serif">Free Zone Café</h3>
                                    <p className="diptych-desc">
                                        The hotel's all-day dining restaurant. 24-hour service, wide multi-cuisine menu, and rich buffet breakfast. Always open for early flights and midnight arrivals.
                                    </p>
                                </div>
                                <div>
                                    <Link href="/dining" className="link-brass">
                                        Explore Menu & Timings <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Panel 2: Aero Cafe */}
                        <div className="diptych-panel">
                            <div className="diptych-img-wrap">
                                <img
                                    src="/assets/images/aero cafe.png"
                                    alt="Aero Café at Diana Heights"
                                    className="diptych-img"
                                />
                            </div>
                            <div className="diptych-content">
                                <div>
                                    <div className="diptych-tag">SPECIALTY DINING</div>
                                    <h3 className="diptych-title font-serif">Aero Café</h3>
                                    <p className="diptych-desc">
                                        Diana Heights' specialty restaurant. Crafted menus, attentive service, and an atmosphere designed for unhurried meals and casual executive discussions.
                                    </p>
                                </div>
                                <div>
                                    <Link href="/dining" className="link-brass">
                                        Discover Specialty Dining <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               7. POOL BAND — CINEMATIC PAUSE (FULL BLEED)
               ========================================================================== */}
            <section
                className="section-pool-band"
                style={{ backgroundImage: `url('/assets/images/pool 01.png')` }}
            >
                <div className="pool-band-overlay" />
                <div className="pool-band-content">
                    <h2 className="pool-band-title font-serif">
                        Where business meets comfort.
                    </h2>
                    <p className="pool-band-sub">
                        Ten minutes from Cochin International Airport.
                    </p>
                </div>
            </section>

            {/* ==========================================================================
               8. EVENTS — "ONE NUMBER, ONE IMAGE" (150 PAX)
               ========================================================================== */}
            <section className="section-events-monument">
                <div className="container">
                    <div className="events-monument-grid">
                        <div className="events-img-frame">
                            <img
                                src="/assets/images/banquet 01.png"
                                alt="Runway Hall Event and Banquet Venue"
                            />
                        </div>

                        <div>
                            <span className="eyebrow">EVENTS & MEETINGS</span>
                            <div className="events-number-lockup">
                                <span className="events-monument-num">150</span>
                                <span className="events-monument-label">guests. Every configuration.</span>
                            </div>
                            <p style={{ fontSize: '1.05rem', color: 'var(--stone-700)', lineHeight: '1.7', marginBottom: '2rem' }}>
                                Runway Hall seats up to 150 guests and transforms effortlessly — conferences, corporate launches, gala receptions, and family celebrations. The Business Lounge handles intimate boardroom meetings with equal finesse.
                            </p>

                            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                                <a
                                    href={buildWhatsAppLink({ type: 'event', eventName: 'Runway Hall / Business Lounge' })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-brass"
                                >
                                    Enquire on WhatsApp
                                </a>
                                <Link href="/events" className="btn btn-outline-dark">
                                    Event Capacities
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               9. REVIEWS — "THE MONUMENT QUOTE"
               ========================================================================== */}
            <section className="section-reviews-monument">
                <div className="container">
                    <span className="eyebrow">GUEST REVIEWS</span>
                    <div className="review-quote-mark font-serif">&ldquo;</div>
                    <blockquote className="review-primary-text">
                        Stayed here for a layover and ended up extending by two nights. The pool, the food, the staff — everything was beyond expectation for an airport hotel.
                    </blockquote>
                    <div className="review-author">
                        Rahul Menon &bull; Verified Google Review
                    </div>

                    <div className="review-proof-line">
                        <strong>4.3★ on Google</strong> &bull; 4,700+ verified reviews &bull; Cochin Airport Transit
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               10. CTA BAND (DARK INK CLOSING)
               ========================================================================== */}
            <section className="section-cta-band">
                <div className="container">
                    <h2 className="cta-band-title font-serif">
                        Your stay is waiting.
                    </h2>
                    <p className="cta-band-sub">
                        43 rooms, full facilities, ten minutes from your gate — and the best rate when you book direct.
                    </p>
                    <div className="cta-band-actions">
                        <a
                            href={buildWhatsAppLink({ type: 'booking' })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-brass"
                        >
                            Book Direct via WhatsApp
                        </a>
                        <a
                            href={`tel:${HOTEL_PHONE}`}
                            className="btn btn-outline-light"
                        >
                            Call Reservations Desk
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
