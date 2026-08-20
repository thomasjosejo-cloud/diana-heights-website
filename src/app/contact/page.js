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
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Contact Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">24-HOUR CONCIERGE & DESK</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Contact Us
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Located on NH-47 at Athani Junction, just ten minutes from Cochin International Airport. Our front desk is staffed around the clock.
                    </p>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div className="grid-2-col-content">
                        {/* Left: Contact Info & Channels */}
                        <div>
                            <span className="eyebrow">HOTEL LOCATION & HOTLINES</span>
                            <h2 className="font-serif" style={{ fontSize: '2.3rem', marginBottom: '1.25rem', color: 'var(--sapphire-950)' }}>
                                Reach out directly to our team.
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2.25rem' }}>
                                For immediate room bookings, flight layovers, banquet inquiries for Runway Hall, or Diana Ira Spa appointments, contact us via phone or WhatsApp.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                {/* Address */}
                                <div style={{ display: 'flex', gap: '1.15rem' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--gold)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                            Physical Address
                                        </div>
                                        <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--sapphire-950)', lineHeight: '1.45' }}>
                                            {HOTEL_ADDRESS}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--gold)', marginTop: '0.2rem' }}>
                                            5.5 km from Cochin International Airport (CIAL)
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div style={{ display: 'flex', gap: '1.15rem' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--gold)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                            24-Hour Hotlines
                                        </div>
                                        <a href="tel:+919526799179" style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--sapphire-950)', display: 'block' }}>
                                            {HOTEL_PHONE}
                                        </a>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                                            Landline: 0484 261 0366
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div style={{ display: 'flex', gap: '1.15rem' }}>
                                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--gold)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                            Official Email Inquiries
                                        </div>
                                        <a href={`mailto:${HOTEL_EMAIL}`} style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--sapphire-950)', display: 'block' }}>
                                            {HOTEL_EMAIL}
                                        </a>
                                        <a href="mailto:reservations@dianaheights.com" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                            reservations@dianaheights.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Instant WhatsApp Message Form */}
                        <div>
                            <div style={{ backgroundColor: 'var(--surface-pure)', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
                                <span className="eyebrow">FAST RESPONSE</span>
                                <h3 className="font-serif" style={{ fontSize: '1.85rem', marginBottom: '1.25rem', color: 'var(--sapphire-950)' }}>
                                    Send Direct Inquiry
                                </h3>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                                            Your Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="e.g. Rahul Menon"
                                            style={{ width: '100%', padding: '0.8rem 0.95rem', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-light)', fontSize: '0.9rem' }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                                            Phone / WhatsApp Number
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+91 98765 43210"
                                            style={{ width: '100%', padding: '0.8rem 0.95rem', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-light)', fontSize: '0.9rem' }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                                            Inquiry Department
                                        </label>
                                        <select
                                            value={inquiryType}
                                            onChange={(e) => setInquiryType(e.target.value)}
                                            style={{ width: '100%', padding: '0.8rem 0.95rem', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-light)', fontSize: '0.9rem' }}
                                        >
                                            <option value="Room Booking">Room Booking & Transit Stay</option>
                                            <option value="Runway Hall (150 Pax)">Runway Hall (150 Pax Banquet)</option>
                                            <option value="Business Lounge (20 Pax)">Business Lounge (20 Pax Boardroom)</option>
                                            <option value="Flavours & Aero Cafe">Dining Table & Catering Inquiry</option>
                                            <option value="Diana Ira Spa">Diana Ira Spa Appointment</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                                            Message / Dates / Requirements
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Specify check-in dates, number of guests, or special requirements..."
                                            style={{ width: '100%', padding: '0.8rem 0.95rem', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--surface-light)', fontSize: '0.9rem', resize: 'vertical' }}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '0.35rem' }}>
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
