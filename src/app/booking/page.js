"use client";
import { useState } from 'react';
import { HOTEL_PHONE, buildWhatsAppLink } from '@/lib/whatsapp';

export default function BookingPage() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('Presidential Suite');
    const [adults, setAdults] = useState('2');
    const [children, setChildren] = useState('0');

    const handleBooking = (e) => {
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
        <main style={{ backgroundColor: 'var(--surface-light)', minHeight: '100vh', paddingTop: '90px' }}>
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">DIRECT RESERVATIONS</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Book Direct & Save
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Guaranteed best rates with zero OTA commission fees, instant WhatsApp confirmation, and flexible check-in matching.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container" style={{ maxWidth: '750px' }}>
                    <div style={{ backgroundColor: 'var(--surface-pure)', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.5rem, 5vw, 3rem)', boxShadow: 'var(--shadow-sm)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <span className="eyebrow">RESERVATION DESK</span>
                            <h2 className="font-serif" style={{ fontSize: '2rem', color: 'var(--sapphire-950)' }}>
                                Select Your Stay Dates
                            </h2>
                        </div>

                        <form onSubmit={handleBooking}>
                            <div className="grid-2-col" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                                <div className="field-group">
                                    <label className="field-label" style={{ color: 'var(--text-secondary)' }}>
                                        <i className="fa-regular fa-calendar" style={{ color: 'var(--gold)' }}></i> Check In
                                    </label>
                                    <input
                                        type="date"
                                        className="field-input"
                                        style={{ color: 'var(--sapphire-950)', borderColor: 'var(--line-light)', backgroundColor: 'var(--surface-light)' }}
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="field-group">
                                    <label className="field-label" style={{ color: 'var(--text-secondary)' }}>
                                        <i className="fa-regular fa-calendar" style={{ color: 'var(--gold)' }}></i> Check Out
                                    </label>
                                    <input
                                        type="date"
                                        className="field-input"
                                        style={{ color: 'var(--sapphire-950)', borderColor: 'var(--line-light)', backgroundColor: 'var(--surface-light)' }}
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field-group" style={{ marginBottom: '1.25rem' }}>
                                <label className="field-label" style={{ color: 'var(--text-secondary)' }}>
                                    <i className="fa-solid fa-bed" style={{ color: 'var(--gold)' }}></i> Room Type
                                </label>
                                <select
                                    className="field-input"
                                    style={{ color: 'var(--sapphire-950)', borderColor: 'var(--line-light)', backgroundColor: 'var(--surface-light)' }}
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option value="Presidential Suite">Presidential Suite (750 Sq. Ft. · Jacuzzi · 4 Guests)</option>
                                    <option value="Luxury Suite">Luxury Suite (560–650 Sq. Ft. · Pool Balcony · 3 Guests)</option>
                                    <option value="Executive Room">Executive Room (300–500 Sq. Ft. · Workstation · 3 Guests)</option>
                                    <option value="Deluxe Room">Deluxe Room (248 Sq. Ft. · Pool View · 2 Guests)</option>
                                </select>
                            </div>

                            <div className="grid-2-col" style={{ gap: '1.25rem', marginBottom: '2rem' }}>
                                <div className="field-group">
                                    <label className="field-label" style={{ color: 'var(--text-secondary)' }}>
                                        <i className="fa-solid fa-user" style={{ color: 'var(--gold)' }}></i> Adults
                                    </label>
                                    <select
                                        className="field-input"
                                        style={{ color: 'var(--sapphire-950)', borderColor: 'var(--line-light)', backgroundColor: 'var(--surface-light)' }}
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
                                    <label className="field-label" style={{ color: 'var(--text-secondary)' }}>
                                        <i className="fa-solid fa-child" style={{ color: 'var(--gold)' }}></i> Children
                                    </label>
                                    <select
                                        className="field-input"
                                        style={{ color: 'var(--sapphire-950)', borderColor: 'var(--line-light)', backgroundColor: 'var(--surface-light)' }}
                                        value={children}
                                        onChange={(e) => setChildren(e.target.value)}
                                    >
                                        <option value="0">0 Children</option>
                                        <option value="1">1 Child</option>
                                        <option value="2">2 Children</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '1rem', fontSize: '0.9rem' }}>
                                Complete Reservation on WhatsApp
                            </button>

                            <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                Need urgent booking assistance? Call front desk at{' '}
                                <a href="tel:+919526799179" style={{ color: 'var(--sapphire-950)', fontWeight: '700' }}>
                                    {HOTEL_PHONE}
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
