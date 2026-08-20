"use client";
import { useState } from 'react';
import { HOTEL_PHONE, HOTEL_EMAIL, HOTEL_ADDRESS, buildWhatsAppLink } from '@/lib/whatsapp';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [inquiryType, setInquiryType] = useState('Room Booking');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `*New Website Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Inquiry Type:* ${inquiryType}\n*Details:* ${message}`;
        const encoded = encodeURIComponent(text);
        window.open(`https://wa.me/919526799179?text=${encoded}`, '_blank');
    };

    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Contact Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">24-HOUR CONCIERGE & DESK</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Contact Us
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Located on NH-47 at Athani Junction, just ten minutes from Cochin International Airport. Our front desk is staffed around the clock.
                    </p>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'start' }}>
                        {/* Left: Contact Info & Channels */}
                        <div>
                            <span className="eyebrow">HOTEL LOCATION & HOTLINES</span>
                            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
                                Reach out directly to our team.
                            </h2>
                            <p style={{ color: 'var(--stone-700)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                                For immediate room bookings, flight layovers, banquet inquiries for Runway Hall, or Diana Ira Spa appointments, contact us via phone or WhatsApp.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {/* Address */}
                                <div style={{ display: 'flex', gap: '1.25rem' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brass)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                            Physical Address
                                        </div>
                                        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ink)', lineHeight: '1.5' }}>
                                            {HOTEL_ADDRESS}
                                        </div>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--brass)', marginTop: '0.25rem' }}>
                                            5.5 km from Cochin International Airport (CIAL)
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div style={{ display: 'flex', gap: '1.25rem' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brass)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                            24-Hour Hotlines
                                        </div>
                                        <a href="tel:+919526799179" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--ink)', display: 'block' }}>
                                            {HOTEL_PHONE}
                                        </a>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--stone-700)', marginTop: '0.25rem' }}>
                                            Landline: 0484 261 0366
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div style={{ display: 'flex', gap: '1.25rem' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--brass)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                            Official Email Inquiries
                                        </div>
                                        <a href={`mailto:${HOTEL_EMAIL}`} style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ink)', display: 'block' }}>
                                            {HOTEL_EMAIL}
                                        </a>
                                        <a href="mailto:reservations@dianaheights.com" style={{ fontSize: '0.9rem', color: 'var(--stone-700)' }}>
                                            reservations@dianaheights.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Instant WhatsApp Message Form */}
                        <div>
                            <div style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--radius-lg)', padding: '3rem', boxShadow: 'var(--shadow-md)' }}>
                                <span className="eyebrow">FAST RESPONSE</span>
                                <h3 className="font-serif" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
                                    Send Direct Inquiry
                                </h3>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--stone-700)', marginBottom: '0.4rem' }}>
                                            Your Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="e.g. Rahul Menon"
                                            style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--ivory)', fontSize: '0.95rem' }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--stone-700)', marginBottom: '0.4rem' }}>
                                            Phone / WhatsApp Number
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 98765 43210"
                                            style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--ivory)', fontSize: '0.95rem' }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--stone-700)', marginBottom: '0.4rem' }}>
                                            Inquiry Department
                                        </label>
                                        <select
                                            value={inquiryType}
                                            onChange={(e) => setInquiryType(e.target.value)}
                                            style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--ivory)', fontSize: '0.95rem' }}
                                        >
                                            <option value="Room Booking">Room Booking & Transit Stay</option>
                                            <option value="Runway Hall (150 Pax)">Runway Hall (150 Pax Banquet)</option>
                                            <option value="Business Lounge (20 Pax)">Business Lounge (20 Pax Boardroom)</option>
                                            <option value="Flavours & Aero Cafe">Dining Table & Catering Inquiry</option>
                                            <option value="Diana Ira Spa">Diana Ira Spa Appointment</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--stone-700)', marginBottom: '0.4rem' }}>
                                            Message / Dates / Requirements
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Specify check-in dates, number of guests, or special requirements..."
                                            style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--ivory)', fontSize: '0.95rem', resize: 'vertical' }}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-brass" style={{ width: '100%', marginTop: '0.5rem' }}>
                                        Submit via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
