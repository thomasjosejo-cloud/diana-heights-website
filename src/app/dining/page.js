import Link from 'next/link';
import { diningVenues } from '@/content/dining';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Dining · Flavours & Aero Cafe · Diana Heights Cochin Airport',
    description: 'Multi-cuisine and specialty dining at Diana Heights. Flavours multi-cuisine restaurant with 24-hr in-room dining and Aero Cafe specialty restaurant.'
};

export default function DiningPage() {
    return (
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Dining Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">WORLD OF DELICIOUS WONDERS</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Flavours & Aero Cafe
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Dining options at Diana Heights include two distinct restaurants serving palatable Indian, Kerala traditional, and international cuisines.
                    </p>
                </div>
            </section>

            {/* Dining Venues Showcase */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                        {diningVenues.map((venue, index) => {
                            const isEven = index % 2 === 1;
                            const whatsappDiningLink = buildWhatsAppLink({
                                type: 'dining',
                                message: `Table reservation / menu inquiry for ${venue.name}`
                            });

                            return (
                                <div
                                    key={venue.slug}
                                    className="grid-venue-card"
                                    style={{
                                        backgroundColor: 'var(--surface-pure)',
                                        border: '1px solid var(--line-light)',
                                        borderRadius: 'var(--radius-md)',
                                        overflow: 'hidden',
                                        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}
                                >
                                    <div style={{ order: isEven ? 2 : 1, height: '340px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--sapphire-950)' }}>
                                        <img
                                            src={venue.image}
                                            alt={venue.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <span style={{ fontSize: '0.725rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '0.45rem' }}>
                                            {venue.tag}
                                        </span>
                                        <h2 className="font-serif" style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.2rem)', marginBottom: '0.45rem', color: 'var(--sapphire-950)' }}>
                                            {venue.name}
                                        </h2>
                                        <p style={{ color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1.15rem', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>
                                            {venue.tagline}
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.75', marginBottom: '1.35rem' }}>
                                            {venue.description}
                                        </p>

                                        <div style={{ borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)', padding: '0.85rem 0', marginBottom: '1.35rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                            <div style={{ marginBottom: '0.3rem' }}>
                                                <strong>Timings:</strong> {venue.hours}
                                            </div>
                                            <div>
                                                <strong>Cuisine:</strong> {venue.cuisine}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.75rem' }}>
                                            {venue.highlights.map((h, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                                    <i className="fa-solid fa-check" style={{ color: 'var(--gold)', fontSize: '0.725rem' }}></i>
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={whatsappDiningLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-gold"
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
        </main>
    );
}
