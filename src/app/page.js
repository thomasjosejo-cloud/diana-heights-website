"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { buildWhatsAppLink, HOTEL_PHONE } from '@/lib/whatsapp';
import { roomsData } from '@/content/rooms';

const heroSlides = [
    '/assets/images/diana.png',
    '/assets/images/pool 01.png',
    '/assets/images/P suite 02.png',
    '/assets/images/lobby.png',
    '/assets/images/dining 01.png'
];

// Single unified "highlights" marquee — trust signals + amenities in one strip.
const heroHighlights = [
    { icon: 'fa-solid fa-star', strong: '4.3★', rest: 'Google Rating' },
    { icon: 'fa-solid fa-comment-dots', strong: '4,700+', rest: 'Reviews' },
    { icon: 'fa-solid fa-plane-departure', strong: '5 min', rest: 'to Cochin Airport' },
    { icon: 'fa-solid fa-bed', strong: '43', rest: 'Rooms & Suites' },
    { icon: 'fa-solid fa-utensils', strong: '2', rest: 'Restaurants' },
    { icon: 'fa-solid fa-spa', strong: 'Diana Ira', rest: 'Spa' },
    { icon: 'fa-solid fa-water', strong: 'Outdoor', rest: 'Pool' },
    { icon: 'fa-solid fa-tag', strong: 'Direct Rates', rest: '· Zero OTA Fees' },
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
        }, 4200);
        return () => clearInterval(timer);
    }, []);

    // Desktop reservation bar → WhatsApp
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
               1. HERO SECTION (GRAND EDITORIAL + DOCKED RESERVATION BAR)
               ========================================================================== */}
            <section className="hero-sapphire">
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

                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    {/* Hero Editorial Center Content */}
                    <div className="hero-content-center animate-fade-up">
                        <div className="status-pill" style={{ marginBottom: '1.5rem' }}>
                            <span className="status-dot"></span>
                            <span>Premier Business-Class · Cochin Airport</span>
                        </div>

                        <h1 className="hero-headline">
                            Five minutes from your gate.<br />
                            Everything else, <em>taken care of.</em>
                        </h1>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/rooms" className="btn btn-outline-light">
                                Explore 4 Room Categories &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Integrated Floating Reservation Bar (Docked gracefully at bottom) */}
                    <div className="hero-reservation-bar animate-fade-up animate-delay-2">
                        <form onSubmit={handleQuickBook} className="reservation-form-grid">
                            {/* 1. Check In */}
                            <div className="reservation-field">
                                <label className="reservation-label" htmlFor="hero-checkin">
                                    <i className="fa-regular fa-calendar"></i> Check In
                                </label>
                                <input
                                    type="date"
                                    id="hero-checkin"
                                    className="reservation-input"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                />
                            </div>

                            {/* 2. Check Out */}
                            <div className="reservation-field">
                                <label className="reservation-label" htmlFor="hero-checkout">
                                    <i className="fa-regular fa-calendar"></i> Check Out
                                </label>
                                <input
                                    type="date"
                                    id="hero-checkout"
                                    className="reservation-input"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                />
                            </div>

                            {/* 3. Room Category */}
                            <div className="reservation-field">
                                <label className="reservation-label" htmlFor="hero-room">
                                    <i className="fa-solid fa-bed"></i> Room Type
                                </label>
                                <select
                                    id="hero-room"
                                    className="reservation-input"
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option value="Presidential Suite">Presidential Suite (750 Sq. Ft.)</option>
                                    <option value="Luxury Suite">Luxury Suite (560–650 Sq. Ft.)</option>
                                    <option value="Executive Room">Executive Room (300–500 Sq. Ft.)</option>
                                    <option value="Deluxe Room">Deluxe Room (248 Sq. Ft.)</option>
                                </select>
                            </div>

                            {/* 4. Guests */}
                            <div className="reservation-field">
                                <label className="reservation-label" htmlFor="hero-guests">
                                    <i className="fa-solid fa-users"></i> Guests
                                </label>
                                <select
                                    id="hero-guests"
                                    className="reservation-input"
                                    value={`${adults}A-${children}C`}
                                    onChange={(e) => {
                                        const [a, c] = e.target.value.split('-');
                                        setAdults(a.replace('A', ''));
                                        setChildren(c.replace('C', ''));
                                    }}
                                >
                                    <option value="1A-0C">1 Adult</option>
                                    <option value="2A-0C">2 Adults</option>
                                    <option value="2A-1C">2 Adults, 1 Child</option>
                                    <option value="3A-0C">3 Adults</option>
                                    <option value="4A-0C">4 Adults</option>
                                </select>
                            </div>

                            {/* 5. Submit CTA Button */}
                            <div>
                                <button type="submit" className="btn btn-gold reservation-btn">
                                    <i className="fa-brands fa-whatsapp"></i> Check Rates on WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               2. TRUST STRIP (MIDNIGHT SAPPHIRE BAND)
               ========================================================================== */}
            <section className="trust-strip">
                <div className="trust-marquee">
                    <div className="trust-strip-inner">
                        {/* Two identical sets → seamless translateX(-50%) loop */}
                        {heroHighlights.map((t, i) => (
                            <div className="trust-item" key={`hl-${i}`}>
                                <i className={t.icon} style={{ color: 'var(--gold-light)' }}></i>
                                <span><strong>{t.strong}</strong> {t.rest}</span>
                            </div>
                        ))}
                        {heroHighlights.map((t, i) => (
                            <div className="trust-item" aria-hidden="true" key={`hl-dup-${i}`}>
                                <i className={t.icon} style={{ color: 'var(--gold-light)' }}></i>
                                <span><strong>{t.strong}</strong> {t.rest}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               3. ABOUT — "THE MONUMENT"
               ========================================================================== */}
            <section className="section-monument">
                <div className="container">
                    <div className="monument-grid">
                        <div className="monument-anchor reveal reveal-left">
                            <div className="monument-number">5 min.</div>
                            <div style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                                FROM COCHIN INTERNATIONAL AIRPORT
                            </div>
                        </div>

                        <div className="reveal reveal-right">
                            <span className="eyebrow">ABOUT DIANA HEIGHTS</span>
                            <h2 className="section-title" style={{ color: 'var(--sapphire-950)' }}>
                                Kochi's most complete airport hotel.
                            </h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
                                Diana Heights is a 4-star rated business class hotel situated near Cochin International Airport along NH-47 at Athani Junction. Surrounded by a peaceful landscape, we offer 43 well-appointed rooms, Flavours multi-cuisine restaurant with 24-hr in-room dining, Aero Cafe, Diana Ira Spa, an outdoor swimming pool, and Runway Hall banquet facilities for 150 guests.
                            </p>

                            <div className="monument-stats-row reveal reveal-up delay-2">
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">43</div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Rooms & Suites</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">2</div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Restaurants</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">1</div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Diana Ira Spa</div>
                                </div>
                                <div className="monument-stat-cell">
                                    <div className="monument-stat-num">150</div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Pax Capacity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               4. ROOMS — HARMONIOUS GRID WITH SCROLL REVEALS
               ========================================================================== */}
            <section className="section-rooms">
                <div className="container">
                    <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
                        <span className="eyebrow">ACCOMMODATIONS</span>
                        <h2 className="section-title" style={{ color: 'var(--sapphire-950)' }}>
                            Four room categories. One address.
                        </h2>
                    </div>

                    <div className="rooms-grid">
                        {roomsData.map((room, index) => {
                            const whatsappRoomLink = buildWhatsAppLink({
                                type: 'room',
                                roomName: room.name
                            });

                            const delayClass = `delay-${index + 1}`;

                            return (
                                <div
                                    key={room.slug}
                                    className={`room-card-sapphire reveal reveal-up ${delayClass}`}
                                >
                                    <div
                                        className="room-card-bg"
                                        style={{ backgroundImage: `url('${room.image}')` }}
                                    />
                                    <div className="room-card-overlay" />

                                    <div className="room-card-content">
                                        <div className="room-card-rule" />
                                        <div className="room-card-badge">
                                            <span>{room.areaSqFt}</span>
                                            <span>&bull;</span>
                                            <span>{room.sleeps}</span>
                                        </div>
                                        <h3 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.45rem', lineHeight: '1.2' }}>
                                            {room.name}
                                        </h3>
                                        <p style={{ fontSize: '0.825rem', color: '#CBD5E1', lineHeight: '1.45', marginBottom: '1.15rem', fontWeight: '300', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {room.description}
                                        </p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '0.75rem' }}>
                                            <a
                                                href={whatsappRoomLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-gold"
                                                style={{ fontSize: '0.78rem' }}
                                            >
                                                WhatsApp <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                            <Link
                                                href={`/rooms/${room.slug}`}
                                                style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
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
               5. FACILITIES — 3x2 GRID WITH SCROLL REVEALS
               ========================================================================== */}
            <section className="section-facilities">
                <div className="container">
                    <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow eyebrow-dark">AMENITIES & WELLNESS</span>
                        <h2 className="section-title" style={{ color: '#ffffff' }}>
                            Everything under one roof.
                        </h2>
                    </div>

                    <div className="facilities-grid">
                        {/* 1. Diana Ira Spa */}
                        <div className="facility-cell reveal reveal-up delay-1">
                            <div>
                                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.15rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.4rem' }}>Diana Ira Spa</h3>
                                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>Ayurvedic Rejuvenation & Steam</div>
                                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', fontWeight: '300' }}>
                                    Therapeutic massage, essential body care, facials, body wraps, and aroma steam chambers managed by trained certified masseurs.
                                </p>
                            </div>
                        </div>

                        {/* 2. Outdoor Swimming Pool */}
                        <div className="facility-cell reveal reveal-up delay-2">
                            <div>
                                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.15rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.4rem' }}>Outdoor Swimming Pool</h3>
                                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>Turquoise Pool & Tropical Palms</div>
                                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', fontWeight: '300' }}>
                                    Landscaped outdoor swimming pool surrounded by tropical greenery and sun loungers for a serene escape.
                                </p>
                            </div>
                        </div>

                        {/* 3. Dining */}
                        <div className="facility-cell reveal reveal-up delay-3">
                            <div>
                                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.15rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.4rem' }}>Flavours & Aero Cafe</h3>
                                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>Multi-Cuisine & Speciality Dining</div>
                                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', fontWeight: '300' }}>
                                    Multi-cuisine eatery with 24-hour in-room dining alongside our intimate Aero Cafe for specialty Indian & Continental dishes.
                                </p>
                            </div>
                        </div>

                        {/* 4. Health Club */}
                        <div className="facility-cell reveal reveal-up delay-1">
                            <div>
                                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.15rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.4rem' }}>Health Club & Gym</h3>
                                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>Fitness & Wellness Hub</div>
                                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', fontWeight: '300' }}>
                                    Fully equipped with modern cardio machinery, free weights, and stretching zones for maintaining your active routine.
                                </p>
                            </div>
                        </div>

                        {/* 5. Runway Hall */}
                        <div className="facility-cell reveal reveal-up delay-2">
                            <div>
                                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.15rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.4rem' }}>Runway Hall (150 Pax)</h3>
                                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>Conferences & Banqueting</div>
                                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', fontWeight: '300' }}>
                                    Smart conference hall for up to 150 delegates, known for hosting conferences, seminars, gala dinners, and wedding receptions.
                                </p>
                            </div>
                        </div>

                        {/* 6. Business Lounge */}
                        <div className="facility-cell reveal reveal-up delay-3">
                            <div>
                                <div style={{ width: '28px', height: '1px', backgroundColor: 'var(--gold)', marginBottom: '1.15rem' }}></div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', color: '#ffffff', fontStyle: 'italic', marginBottom: '0.4rem' }}>Business Lounge (20 Pax)</h3>
                                <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>Executive Boardroom</div>
                                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6', fontWeight: '300' }}>
                                    Vibrant boardroom with natural decor, attractive lighting, and state-of-the-art facilities for focused executive meetings.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal reveal-fade delay-3" style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link href="/facilities" className="btn btn-outline-light">
                            Explore All Facilities & Amenities
                        </Link>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               6. DINING — "THE DIPTYCH"
               ========================================================================== */}
            <section style={{ padding: 'var(--section-y) 0', backgroundColor: 'var(--surface-light)' }}>
                <div className="container">
                    <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
                        <span className="eyebrow">WORLD OF DELICIOUS WONDERS</span>
                        <h2 className="section-title" style={{ color: 'var(--sapphire-950)' }}>
                            Two restaurants. Every craving covered.
                        </h2>
                    </div>

                    <div className="diptych-grid">
                        {/* Panel 1: Flavours Multi-Cuisine */}
                        <div className="diptych-card-sapphire reveal reveal-left delay-1">
                            <div className="diptych-img-wrap">
                                <img
                                    src="/assets/images/dining 01.png"
                                    alt="Flavours Multi-Cuisine Restaurant at Diana Heights"
                                    className="diptych-img"
                                />
                            </div>
                            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.725rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-on-light)', marginBottom: '0.45rem' }}>
                                        MULTI-CUISINE & BUFFET (7:30 AM – 10:00 PM)
                                    </div>
                                    <h3 className="font-serif" style={{ fontSize: 'clamp(1.35rem, 5vw, 1.85rem)', marginBottom: '0.65rem', color: 'var(--sapphire-950)' }}>
                                        Flavours : Multi Cuisine
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.35rem' }}>
                                        Guests can take pleasure in delicious meals from our signature wide menu. Highlights include daily breakfast buffets, authentic traditional Kerala curries, and 24-hour in-room dining.
                                    </p>
                                </div>
                                <div>
                                    <Link href="/dining" className="link-gold">
                                        Explore Flavours Menu & Timings <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Panel 2: Aero Cafe Speciality */}
                        <div className="diptych-card-sapphire reveal reveal-right delay-2">
                            <div className="diptych-img-wrap">
                                <img
                                    src="/assets/images/aero cafe.png"
                                    alt="Aero Cafe Speciality Restaurant at Diana Heights"
                                    className="diptych-img"
                                />
                            </div>
                            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.725rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-on-light)', marginBottom: '0.45rem' }}>
                                        SPECIALITY DINING (11:00 AM – 11:00 PM)
                                    </div>
                                    <h3 className="font-serif" style={{ fontSize: 'clamp(1.35rem, 5vw, 1.85rem)', marginBottom: '0.65rem', color: 'var(--sapphire-950)' }}>
                                        Aero Cafe : Speciality Restaurant
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.35rem' }}>
                                        From casual all-day eateries to formal dining, savor distinctive Indian and Continental dishes, made-to-order sandwiches, artisanal coffee, and hot snacks in a welcoming ambience.
                                    </p>
                                </div>
                                <div>
                                    <Link href="/dining" className="link-gold">
                                        Discover Aero Cafe Delicacies <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               7. EVENTS — "ONE NUMBER, ONE IMAGE"
               ========================================================================== */}
            <section style={{ backgroundColor: 'var(--surface-pure)', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)', padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div className="grid-2-col-asymmetric">
                        <div className="reveal reveal-left" style={{ height: '440px', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--sapphire-950)', boxShadow: 'var(--shadow-md)' }}>
                            <img
                                src="/assets/images/banquet 01.png"
                                alt="Runway Hall Event and Banquet Venue"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="reveal reveal-right delay-1">
                            <span className="eyebrow">BANQUETS & CONFERENCES</span>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem', marginBottom: '1rem' }}>
                                <span className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(3.8rem, 7vw, 6rem)', lineHeight: '1.15', display: 'inline-block', paddingTop: '0.15em' }}>
                                    150
                                </span>
                                <span className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--sapphire-950)', fontStyle: 'italic' }}>
                                    guests. Every configuration.
                                </span>
                            </div>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                                Looking for a splendid get together? Runway Hall accommodates events for up to 150 people with acoustic sound and custom catering. The Business Lounge provides an executive boardroom setting for 20 guests with natural decor and attractive lighting.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href={buildWhatsAppLink({ type: 'event', eventName: 'Runway Hall (150 Pax)' })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-gold"
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
            <section className="reveal reveal-fade" style={{ padding: 'var(--section-y) 0', backgroundColor: 'var(--surface-light)', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow">VERIFIED GUEST EXPERIENCES</span>
                    <div className="font-serif text-gold-gradient" style={{ fontSize: '4.5rem', lineHeight: '1', marginBottom: '-0.75rem' }}>&ldquo;</div>
                    <blockquote className="font-serif" style={{ fontSize: 'clamp(1.35rem, 2.3vw, 2.1rem)', lineHeight: '1.4', color: 'var(--sapphire-950)', maxWidth: '880px', margin: '0 auto 1.35rem', fontWeight: '400' }}>
                        Stayed here for a layover and ended up extending by two nights. The pool, the food at Flavours, and the staff — everything was beyond expectation for an airport hotel.
                    </blockquote>
                    <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', fontWeight: '600' }}>
                        Rahul Menon &bull; Verified Google Review
                    </div>

                    <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--line-light)', fontSize: '0.825rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5C6979' }}>
                        <strong>4.3★ on Google</strong> &bull; 4,700+ verified reviews &bull; Near Cochin International Airport
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               9. CTA BAND (MIDNIGHT SAPPHIRE CLOSING)
               ========================================================================== */}
            <section className="reveal reveal-up" style={{ padding: '5.5rem 0', backgroundColor: 'var(--sapphire-950)', color: '#ffffff', textAlign: 'center', borderTop: '1px solid var(--line-sapphire)' }}>
                <div className="container">
                    <h2 className="font-serif" style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Your stay is waiting.
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#CBD5E1', maxWidth: '620px', margin: '0 auto 2.25rem', fontWeight: '300' }}>
                        43 rooms, full facilities, ten minutes from your gate — and guaranteed best direct booking rates.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                        <a
                            href={buildWhatsAppLink({ type: 'booking' })}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-gold"
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
