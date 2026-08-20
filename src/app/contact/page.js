"use client";
import { useState } from 'react';
import { HOTEL_PHONE, HOTEL_EMAIL, buildWhatsAppLink } from '@/lib/whatsapp';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('Room Booking');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappUrl = buildWhatsAppLink({
            type: 'general',
            name: `${name} (${phone}, ${email})`,
            message: `Subject: ${subject}\n${message}`
        });
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Contact Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">24-HOUR CONCIERGE & DESK</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Contact Diana Heights
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Located on the NH-47 highway corridor, just ten minutes from Cochin International Airport (CIAL).
                    </p>
                </div>
            </section>

            {/* Contact Information & Interactive Form */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '4rem', alignItems: 'start' }}>
                        {/* Left Column: Property Coordinates */}
                        <div>
                            <span className="eyebrow">PROPERTY LOCATION</span>
                            <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
                                At the airport threshold.
                            </h2>
                            <p style={{ color: 'var(--stone-700)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                                Our front desk operates 24 hours a day, 7 days a week to receive late international flight arrivals and coordinate early morning airport transfers.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--paper)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brass)' }}>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                            Physical Address
                                        </div>
                                        <div style={{ fontSize: '0.95rem', color: 'var(--ink)', fontWeight: '500', lineHeight: '1.6' }}>
                                            NH-47, Near Cochin International Airport,<br />
                                            Athani, Nedumbassery, Ernakulam, Kerala 683585
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--paper)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brass)' }}>
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                            24-Hour Hotline / WhatsApp
                                        </div>
                                        <a href="tel:+919526799179" style={{ fontSize: '1.1rem', color: 'var(--ink)', fontWeight: '600' }}>
                                            {HOTEL_PHONE}
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--paper)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brass)' }}>
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                            Electronic Mail
                                        </div>
                                        <a href={`mailto:${HOTEL_EMAIL}`} style={{ fontSize: '0.95rem', color: 'var(--ink)', fontWeight: '500' }}>
                                            {HOTEL_EMAIL}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Direct Message Form via WhatsApp */}
                        <div style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--border-radius-lg)', padding: '3rem', boxShadow: '0 10px 30px rgba(22,20,15,0.05)' }}>
                            <span className="eyebrow">INSTANT ENQUIRY</span>
                            <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                                Send an Enquiry
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--stone-700)', marginBottom: '2rem' }}>
                                Connect directly with our front desk managers regarding room reservations, corporate meetings, or airport transfers.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <div className="field-group">
                                        <label className="field-label" style={{ color: 'var(--stone-700)' }}>Your Name</label>
                                        <input
                                            type="text"
                                            className="field-input"
                                            style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                            placeholder="Alexander M."
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="field-group">
                                        <label className="field-label" style={{ color: 'var(--stone-700)' }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            className="field-input"
                                            style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                            placeholder="+91 98765 43210"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="field-group" style={{ marginBottom: '1rem' }}>
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>Email Address</label>
                                    <input
                                        type="email"
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                        placeholder="alex@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="field-group" style={{ marginBottom: '1rem' }}>
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>Subject / Category</label>
                                    <select
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)' }}
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    >
                                        <option value="Room Reservation">Room Reservation Hold</option>
                                        <option value="Runway Hall Corporate Event">Runway Hall Corporate Event (150 Pax)</option>
                                        <option value="Business Lounge Boardroom">Business Lounge Boardroom Meeting (20 Pax)</option>
                                        <option value="Dining & Table Reservation">Free Zone Café / Aero Café Table Reservation</option>
                                        <option value="Diana Ira Spa Appointment">Diana Ira Spa Appointment</option>
                                        <option value="Airport Shuttle / Cab Pickup">Airport Shuttle / Cab Pickup Inquiry</option>
                                    </select>
                                </div>

                                <div className="field-group" style={{ marginBottom: '1.75rem' }}>
                                    <label className="field-label" style={{ color: 'var(--stone-700)' }}>Your Message</label>
                                    <textarea
                                        className="field-input"
                                        style={{ color: 'var(--ink)', borderColor: 'var(--line)', backgroundColor: 'var(--ivory)', minHeight: '110px', resize: 'vertical' }}
                                        placeholder="Please outline your flight details, check-in dates, or event requirements..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-brass" style={{ width: '100%' }}>
                                    Transmit via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* SVG Transit Map Section */}
            <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span className="eyebrow">TRANSIT CORRIDOR</span>
                        <h2 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--ink)' }}>
                            CIAL Airport to Athani Junction
                        </h2>
                    </div>

                    <div style={{ maxWidth: '850px', margin: '0 auto', overflowX: 'auto', padding: '1.5rem', backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', borderRadius: 'var(--border-radius)' }}>
                        <svg viewBox="0 0 800 180" width="100%" height="auto" style={{ minWidth: '600px' }}>
                            <line x1="100" y1="90" x2="700" y2="90" stroke="var(--line)" strokeWidth="6" strokeLinecap="round" />
                            <line x1="100" y1="90" x2="700" y2="90" stroke="var(--brass)" strokeWidth="2" strokeDasharray="8 8" />

                            {/* CIAL Node */}
                            <circle cx="160" cy="90" r="28" fill="var(--ink)" stroke="var(--brass)" strokeWidth="2" />
                            <text x="160" y="85" fill="var(--brass)" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-sans)">✈</text>
                            <text x="160" y="140" fill="var(--ink)" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-sans)">COCHIN INTL AIRPORT (CIAL)</text>
                            <text x="160" y="155" fill="var(--stone-500)" fontSize="11" textAnchor="middle" fontFamily="var(--font-sans)">5.5 km / 10 Mins</text>

                            {/* Diana Heights Node */}
                            <circle cx="480" cy="90" r="32" fill="var(--brass)" stroke="var(--ink)" strokeWidth="2" />
                            <text x="480" y="96" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-sans)">★</text>
                            <text x="480" y="140" fill="var(--brass-deep)" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-display)">DIANA HEIGHTS</text>
                            <text x="480" y="155" fill="var(--stone-500)" fontSize="11" textAnchor="middle" fontFamily="var(--font-sans)">Athani Junction, NH-47</text>

                            {/* Ernakulam / Angamaly Node */}
                            <circle cx="680" cy="90" r="22" fill="var(--paper)" stroke="var(--line)" strokeWidth="2" />
                            <text x="680" y="140" fill="var(--ink)" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="var(--font-sans)">ANGAMALY / KOCHI</text>
                            <text x="680" y="155" fill="var(--stone-500)" fontSize="11" textAnchor="middle" fontFamily="var(--font-sans)">Direct Highway Access</text>
                        </svg>
                    </div>
                </div>
            </section>
        </main>
    );
}
