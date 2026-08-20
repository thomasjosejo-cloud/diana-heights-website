import Link from 'next/link';
import { diningVenues } from '@/content/dining';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Dining · Free Zone Café & Aero Café · Diana Heights Cochin',
    description: 'Two restaurants under one roof at Diana Heights. 24-hour Free Zone Café and Aero Café specialty dining near Cochin Airport.'
};

export default function DiningPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Dining Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">RESTAURANTS & CUISINE</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Two restaurants. Every craving covered.
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        From round-the-clock transit dining to crafted specialty menus — authentic Kerala delicacies, Indian curries, and continental selections.
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
                                message: `Table reservation / inquiry for ${venue.name}`
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
                                        borderRadius: 'var(--border-radius)',
                                        overflow: 'hidden',
                                        padding: '3rem'
                                    }}
                                >
                                    <div style={{ order: isEven ? 2 : 1, height: '420px', borderRadius: 'var(--border-radius)', overflow: 'hidden', backgroundColor: 'var(--ink)' }}>
                                        <img
                                            src={venue.image}
                                            alt={venue.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', display: 'block', marginBottom: '0.5rem' }}>
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
                                                <strong>Hours:</strong> {venue.hours}
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
                                            Table & Menu Inquiry via WhatsApp
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* In-Room Dining & Breakfast Banner */}
            <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        <div>
                            <span className="eyebrow">BUFFET BREAKFAST</span>
                            <h3 className="font-serif" style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                Fuel for Your Early Departures
                            </h3>
                            <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                Served daily from 7:30 AM to 10:30 AM at Free Zone Café. Features authentic Kerala appams, dosas, fresh tropical fruit, continental breads, and freshly roasted coffee.
                            </p>
                        </div>

                        <div>
                            <span className="eyebrow">24-HOUR ROOM SERVICE</span>
                            <h3 className="font-serif" style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                Midnight Transit Cravings Handled
                            </h3>
                            <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                Arriving late from Dubai or Singapore? Our kitchen is active 24/7 with a dedicated in-room dining menu delivered hot to your door within minutes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
