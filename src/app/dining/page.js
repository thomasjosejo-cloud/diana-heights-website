import Link from 'next/link';
import { diningVenues } from '@/content/dining';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Dining · Flavours & Aero Cafe · Diana Heights Cochin Airport',
    description: 'Multi-cuisine and specialty dining at Diana Heights. Flavours multi-cuisine restaurant with 24-hr in-room dining and Aero Cafe specialty restaurant.'
};

export default function DiningPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Dining Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">WORLD OF DELICIOUS WONDERS</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Flavours & Aero Cafe
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Dining options at Diana Heights include two distinct restaurants serving palatable Indian, Kerala traditional, and international cuisines.
                    </p>
                </div>
            </section>

            {/* Dining Venues Diptych Showcase */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {diningVenues.map((venue, index) => {
                            const isEven = index % 2 === 1;
                            const whatsappDiningLink = buildWhatsAppLink({
                                type: 'dining',
                                message: `Table reservation / menu inquiry for ${venue.name}`
                            });

                            return (
                                <div
                                    key={venue.slug}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
                                        gap: '4rem',
                                        alignItems: 'center',
                                        backgroundColor: 'var(--paper)',
                                        border: '1px solid var(--line)',
                                        borderRadius: 'var(--radius-md)',
                                        overflow: 'hidden',
                                        padding: '3rem',
                                        boxShadow: 'var(--shadow-md)'
                                    }}
                                >
                                    <div style={{ order: isEven ? 2 : 1, height: '420px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--ink)' }}>
                                        <img
                                            src={venue.image}
                                            alt={venue.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', display: 'block', marginBottom: '0.5rem' }}>
                                            {venue.tag}
                                        </span>
                                        <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                                            {venue.name}
                                        </h2>
                                        <p style={{ color: 'var(--brass)', fontStyle: 'italic', marginBottom: '1.25rem', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                                            {venue.tagline}
                                        </p>
                                        <p style={{ color: 'var(--stone-700)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                            {venue.description}
                                        </p>

                                        <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '1rem 0', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--stone-700)' }}>
                                            <div style={{ marginBottom: '0.35rem' }}>
                                                <strong>Timings:</strong> {venue.hours}
                                            </div>
                                            <div>
                                                <strong>Cuisine:</strong> {venue.cuisine}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                                            {venue.highlights.map((h, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--stone-700)' }}>
                                                    <i className="fa-solid fa-check" style={{ color: 'var(--brass)', fontSize: '0.75rem' }}></i>
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={whatsappDiningLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-brass"
                                        >
                                            Table Reservation on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* In-Room Dining & Breakfast Banner */}
            <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '4.5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        <div>
                            <span className="eyebrow">BREAKFAST BUFFET INCLUDED</span>
                            <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                Fresh Flavours to Start Your Day
                            </h3>
                            <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                Served daily at Flavours from 7:30 AM to 10:00 AM. Featuring both traditional South Indian breakfast delicacies (Appam, Idli, Dosa, Puttu) and Continental spreads (eggs, sausages, baked breads, fresh juices, and fruits).
                            </p>
                        </div>

                        <div>
                            <span className="eyebrow">24-HOUR IN-ROOM DINING</span>
                            <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                Around the Clock Transit Comfort
                            </h3>
                            <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                Arriving late from Dubai, London, or Singapore? Our kitchen operates 24/7 with direct in-room dining menus delivered hot to your door at any hour of the night.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
