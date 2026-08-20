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
        }, 6500);
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
                            <div className="status-pill" style={{ marginBottom: '1.25rem' }}>
                                <span className="status-dot"></span>
                                <span>Near Cochin Airport (CIAL) · Athani Junction</span>
                            </div>

                            <h1 className="hero-headline">
                                Ten minutes from your gate.<br />
                                Everything else,<br />
                                <em>taken care of.</em>
                            </h1>
                            
                            <p className="hero-subtext">
                                Unpack, unwind, or get straight to business. Two restaurants (including Flavours & Aero Cafe), Diana Ira Spa, and premium transit comfort just ten minutes from the tarmac — we handle the rest.
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
                                    Explore 4 Rooms
                                </Link>
                            </div>
                        </div>

                        {/* Hero Right: Frosted Quick-Book Widget */}
                        <div>
                            <div className="quick-book-card">
                                <div style={{ borderBottom: '1px solid var(--line-dark)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', fontWeight: '600' }}>
                                        Direct Reservation Desk
                                    </div>
                                    <h2 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', marginTop: '0.25rem' }}>
                                        Check Availability
                                    </h2>
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
                                                <option value="Presidential Suite">Presidential Suite (750 Sq. Ft. · Jacuzzi · 4 Guests)</option>
                                                <option value="Luxury Suite">Luxury Suite (560–650 Sq. Ft. · Pool Balcony · 3 Guests)</option>
                                                <option value="Executive Room">Executive Room (300–500 Sq. Ft. · Workstation · 3 Guests)</option>
                                                <option value="Deluxe Room">Deluxe Room (248 Sq. Ft. · Pool View · 2 Guests)</option>
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

                                    <button type="submit" className="btn btn-brass" style={{ width: '100%' }}>
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
                            <i className="fa-solid fa-star" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>4.3★</strong> Google Rating</span>
                        </div>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--brass)', opacity: 0.6 }}></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-comment-dots" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>4,700+</strong> Verified Google Reviews</span>
                        </div>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--brass)', opacity: 0.6 }}></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-plane-departure" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>5.5 km (10 min)</strong> From Cochin Airport</span>
                        </div>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--brass)', opacity: 0.6 }}></div>
                        <div className="trust-item">
                            <i className="fa-solid fa-tag" style={{ color: 'var(--brass)' }}></i>
                            <span><strong>Best Direct Rates</strong> — Zero OTA Fees</span>
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
                            <div style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--stone-700)' }}>
                                FROM COCHIN INTERNATIONAL AIRPORT
                            </div>
                        </div>

                        <div>
                            <span className="eyebrow">ABOUT DIANA HEIGHTS</span>
                            <h2 className="section-title" style={{ color: 'var(--ink)' }}>
                                Kochi's most complete airport hotel.
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--stone-700)', marginBottom: '2rem' }}>
                                Diana Heights is a business class hotel situated near Cochin International Airport and the commercial centers of the city, making it an ideal destination for travelers seeking convenience and comfort. Surrounded by a peaceful landscape, we offer 43 well-appointed rooms and suites, two multi-cuisine restaurants, Diana Ira Spa, an outdoor swimming pool, and Runway Hall banquet facilities for 150 guests.
                            </p>

                            <div className="monument-stats-row">
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">43</div>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)' }}>Rooms & Suites</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">2</div>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)' }}>Restaurants (Flavours & Aero)</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">1</div>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)' }}>Diana Ira Spa</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">150</div>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)' }}>Pax Event Capacity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               4. ROOMS — "FILM FRAMES" (4 ROOMS, 1 ADDRESS)
               ========================================================================== */}
            <section className="section-rooms-film">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow">ACCOMMODATIONS</span>
                        <h2 className="section-title" style={{ color: 'var(--ink)' }}>
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
                                        <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--brass-light)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: '600' }}>
                                            <span>{room.areaSqFt}</span>
                                            <span>&bull;</span>
                                            <span>{room.sleeps}</span>
                                        </div>
                                        <h3 className="film-frame-title font-serif">{room.name}</h3>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--stone-300)', lineHeight: '1.5', marginBottom: '1.5rem', fontWeight: '300' }}>
                                            {room.description}
                                        </p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}>
                                            <a
                                                href={whatsappRoomLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-brass"
                                            >
                                                Reserve on WhatsApp <i className="fa-solid fa-arrow-right"></i>
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
                        <h2 className="section-title" style={{ color: '#ffffff' }}>
                            Everything under one roof.
                        </h2>
                    </div>

                    <div className="facilities-menu-grid">
                        {/* 1. Diana Ira Spa */}
                        <div className="facility-menu-cell">
                            <div>
                                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--brass)', marginBottom: '1.25rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.5rem' }}>Diana Ira Spa</h3>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', marginBottom: '0.75rem' }}>Ayurvedic Rejuvenation & Steam</div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--stone-300)', lineHeight: '1.6', fontWeight: '300' }}>
                                    Therapeutic massage, essential body care, facials, body wraps, and aroma steam chambers managed by trained certified masseurs.
                                </p>
                            </div>
                        </div>

                        {/* 2. Outdoor Swimming Pool */}
                        <div className="facility-menu-cell">
                            <div>
                                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--brass)', marginBottom: '1.25rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.5rem' }}>Outdoor Swimming Pool</h3>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', marginBottom: '0.75rem' }}>Turquoise Pool & Tropical Palms</div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--stone-300)', lineHeight: '1.6', fontWeight: '300' }}>
                                    Landscaped outdoor swimming pool surrounded by tropical greenery and sun loungers for a serene escape.
                                </p>
                            </div>
                        </div>

                        {/* 3. Dining */}
                        <div className="facility-menu-cell">
                            <div>
                                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--brass)', marginBottom: '1.25rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.5rem' }}>Flavours & Aero Cafe</h3>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', marginBottom: '0.75rem' }}>Multi-Cuisine & Speciality Dining</div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--stone-300)', lineHeight: '1.6', fontWeight: '300' }}>
                                    Multi-cuisine eatery with 24-hour in-room dining alongside our intimate Aero Cafe for specialty Indian & Continental dishes.
                                </p>
                            </div>
                        </div>

                        {/* 4. Health Club */}
                        <div className="facility-menu-cell">
                            <div>
                                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--brass)', marginBottom: '1.25rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.5rem' }}>Health Club & Gym</h3>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', marginBottom: '0.75rem' }}>Fitness & Wellness Hub</div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--stone-300)', lineHeight: '1.6', fontWeight: '300' }}>
                                    Fully equipped with premium cardio machinery, free weights, and stretching zones for maintaining your active routine.
                                </p>
                            </div>
                        </div>

                        {/* 5. Runway Hall */}
                        <div className="facility-menu-cell">
                            <div>
                                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--brass)', marginBottom: '1.25rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.5rem' }}>Runway Hall (150 Pax)</h3>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', marginBottom: '0.75rem' }}>Conferences & Banqueting</div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--stone-300)', lineHeight: '1.6', fontWeight: '300' }}>
                                    Smart conference hall for up to 150 delegates, known for hosting conferences, seminars, gala dinners, and wedding receptions.
                                </p>
                            </div>
                        </div>

                        {/* 6. Business Lounge */}
                        <div className="facility-menu-cell">
                            <div>
                                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--brass)', marginBottom: '1.25rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.5rem' }}>Business Lounge (20 Pax)</h3>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--brass)', marginBottom: '0.75rem' }}>Executive Boardroom</div>
                                <p style={{ fontSize: '0.875rem', color: 'var(--stone-300)', lineHeight: '1.6', fontWeight: '300' }}>
                                    Vibrant boardroom with natural decor, attractive lighting, and state-of-the-art facilities for focused executive meetings.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                        <Link href="/facilities" className="btn btn-outline-light">
                            Explore All Facilities & Amenities
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               6. DINING — "THE DIPTYCH" (FLAVOURS & AERO CAFE)
               ========================================================================== */}
            <section className="section-dining-diptych" style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow">WORLD OF DELICIOUS WONDERS</span>
                        <h2 className="section-title" style={{ color: 'var(--ink)' }}>
                            Two restaurants. Every craving covered.
                        </h2>
                    </div>

                    <div className="diptych-grid">
                        {/* Panel 1: Flavours Multi-Cuisine */}
                        <div className="diptych-card">
                            <div className="diptych-img-wrap">
                                <img
                                    src="/assets/images/dining 01.png"
                                    alt="Flavours Multi-Cuisine Restaurant at Diana Heights"
                                    className="diptych-img"
                                />
                            </div>
                            <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.5rem' }}>
                                        MULTI-CUISINE & BUFFET (7:30 AM – 10:00 PM)
                                    </div>
                                    <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                        Flavours : Multi Cuisine
                                    </h3>
                                    <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                        Guests can take pleasure in delicious meals from our signature wide menu. Highlights include daily breakfast buffets, authentic traditional Kerala curries, and 24-hour in-room dining.
                                    </p>
                                </div>
                                <div>
                                    <Link href="/dining" className="link-brass">
                                        Explore Flavours Menu & Timings <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Panel 2: Aero Cafe Speciality */}
                        <div className="diptych-card">
                            <div className="diptych-img-wrap">
                                <img
                                    src="/assets/images/aero cafe.png"
                                    alt="Aero Cafe Speciality Restaurant at Diana Heights"
                                    className="diptych-img"
                                />
                            </div>
                            <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.5rem' }}>
                                        SPECIALITY DINING (11:00 AM – 11:00 PM)
                                    </div>
                                    <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                        Aero Cafe : Speciality Restaurant
                                    </h3>
                                    <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                        From casual all-day eateries to formal fine dining, savor distinctive Indian and Continental dishes, made-to-order sandwiches, artisanal coffee, and hot snacks in a welcoming ambience.
                                    </p>
                                </div>
                                <div>
                                    <Link href="/dining" className="link-brass">
                                        Discover Aero Cafe Delicacies <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               7. EVENTS — "ONE NUMBER, ONE IMAGE" (150 PAX)
               ========================================================================== */}
            <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ height: '480px', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--ink)', boxShadow: 'var(--shadow-md)' }}>
                            <img
                                src="/assets/images/banquet 01.png"
                                alt="Runway Hall Event and Banquet Venue"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div>
                            <span className="eyebrow">BANQUETS & CONFERENCES</span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
                                <span className="font-serif text-brass-gradient" style={{ fontSize: 'clamp(4.5rem, 8vw, 7rem)', lineHeight: '0.9' }}>150</span>
                                <span className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--ink)', fontStyle: 'italic' }}>guests. Every configuration.</span>
                            </div>
                            <p style={{ fontSize: '1.05rem', color: 'var(--stone-700)', lineHeight: '1.7', marginBottom: '2rem' }}>
                                Looking for a splendid get together? Runway Hall accommodates events for up to 150 people with acoustic sound and custom catering. The Business Lounge provides an executive boardroom setting for 20 guests with natural decor and attractive lighting.
                            </p>

                            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                                <a
                                    href={buildWhatsAppLink({ type: 'event', eventName: 'Runway Hall (150 Pax)' })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-brass"
                                >
                                    Enquire on WhatsApp
                                </a>
                                <Link href="/events" className="btn btn-outline-dark">
                                    View Floorplans & Capacities
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               8. REVIEWS — "THE MONUMENT QUOTE"
               ========================================================================== */}
            <section style={{ padding: 'var(--section-y) 0', backgroundColor: 'var(--ivory)', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow">VERIFIED GUEST EXPERIENCES</span>
                    <div className="font-serif text-brass-gradient" style={{ fontSize: '5rem', lineHeight: '1', marginBottom: '-1rem' }}>&ldquo;</div>
                    <blockquote className="font-serif" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: '1.4', color: 'var(--ink)', maxWidth: '900px', margin: '0 auto 1.5rem', fontWeight: '400' }}>
                        Stayed here for a layover and ended up extending by two nights. The pool, the food at Flavours, and the staff — everything was beyond expectation for an airport hotel.
                    </blockquote>
                    <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-700)', fontWeight: '600' }}>
                        Rahul Menon &bull; Verified Google Review
                    </div>

                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--line)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone-500)' }}>
                        <strong>4.3★ on Google</strong> &bull; 4,700+ verified reviews &bull; Near Cochin International Airport
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               9. CTA BAND (DARK INK CLOSING)
               ========================================================================== */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--ink)', color: '#ffffff', textAlign: 'center', borderTop: '1px solid var(--line-dark)' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Your stay is waiting.
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto 2.5rem', fontWeight: '300' }}>
                        43 rooms, full facilities, ten minutes from your gate — and guaranteed best direct booking rates.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
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
                            Call: +91 952 679 9179
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
