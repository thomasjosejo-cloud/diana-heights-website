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
        <main style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingTop: '90px' }}>
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">DIRECT RESERVATIONS</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Book Direct & Save
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Guaranteed best rates with zero OTA commission fees, instant WhatsApp confirmation, and flexible check-in matching.
                    </p>
                </div>
            </section>

            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container" style={{ maxWidth: '750px' }}>
                    <div style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--border-radius-lg)', padding: '3rem', boxShadow: '0 15px 40px rgba(22,20,15,0.06)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <span className="eyebrow">RESERVATION DESK</span>
                            <h2 className="font-serif" style={{ fontSize: '2rem', color: 'var(--ink)' }}>
                                Select Your Stay Dates
                            </h2>
                        </div>

                        <form onSubmit={handleBooking}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                                <div className="field-group">
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>
                                        <i className="fa-regular fa-calendar" style={{ color: 'var(--brass)' }}></i> Check In
                                    </label>
                                    <input
                                        type="date"
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="field-group">
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>
                                        <i className="fa-regular fa-calendar" style={{ color: 'var(--brass)' }}></i> Check Out
                                    </label>
                                    <input
                                        type="date"
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="field-group" style={{ marginBottom: '1.25rem' }}>
                                <label className="field-label" style={{ color: 'var(--stone-700)' }}>
                                    <i className="fa-solid fa-bed" style={{ color: 'var(--brass)' }}></i> Room Type
                                </label>
                                <select
                                    className="field-input"
                                    style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option value="Presidential Suite">Presidential Suite (Expansive · Jacuzzi · 4 Guests)</option>
                                    <option value="Luxury Suite">Luxury Suite (Generous Space · Pool Balcony · 3 Guests)</option>
                                    <option value="Executive Room">Executive Room (Workstation · Transit Rest · 3 Guests)</option>
                                    <option value="Deluxe Room">Deluxe Room (Comfortable · Hardwood Floors · 2 Guests)</option>
                                </select>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                                <div className="field-group">
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>
                                        <i className="fa-solid fa-user" style={{ color: 'var(--brass)' }}></i> Adults
                                    </label>
                                    <select
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
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
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>
                                        <i className="fa-solid fa-child" style={{ color: 'var(--brass)' }}></i> Children
                                    </label>
                                    <select
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                        value={children}
                                        onChange={(e) => setChildren(e.target.value)}
                                    >
                                        <option value="0">0 Children</option>
                                        <option value="1">1 Child</option>
                                        <option value="2">2 Children</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-brass" style={{ width: '100%', padding: '1.1rem' }}>
                                Check Availability via WhatsApp
                            </button>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--stone-500)' }}>
                            Prefer calling? Speak to our reservations desk at <a href="tel:+919526799179" style={{ color: 'var(--ink)', fontWeight: '600' }}>{HOTEL_PHONE}</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
