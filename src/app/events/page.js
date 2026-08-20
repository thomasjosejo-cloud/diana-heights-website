import Link from 'next/link';
import { eventVenues } from '@/content/events';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Events & Banquets · Runway Hall (150 Pax) · Diana Heights Cochin',
    description: 'Host conferences, corporate meetings, and family wedding banquets at Diana Heights, 10 minutes from Cochin Airport. Runway Hall (150 pax) & Business Lounge (20 pax).'
};

export default function EventsPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Events Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">CONFERENCES & CELEBRATIONS</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        150 guests. Every configuration.
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        From high-stakes executive boardroom sessions to grand banquets and wedding celebrations — effortless hospitality just ten minutes from Cochin Airport.
                    </p>
                </div>
            </section>

            {/* Event Venues */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                        {eventVenues.map((venue, index) => {
                            const isEven = index % 2 === 1;
                            const whatsappEventLink = buildWhatsAppLink({
                                type: 'event',
                                eventName: venue.name
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
                                    <div style={{ order: isEven ? 2 : 1, height: '400px', borderRadius: 'var(--border-radius)', overflow: 'hidden', backgroundColor: 'var(--ink)' }}>
                                        <img
                                            src={venue.image}
                                            alt={venue.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <span style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)', display: 'block', marginBottom: '0.5rem' }}>
                                            {venue.capacity}
                                        </span>
                                        <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                                            {venue.name}
                                        </h2>
                                        <p style={{ color: 'var(--brass)', fontStyle: 'italic', marginBottom: '1.25rem', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>
                                            {venue.tagline}
                                        </p>
                                        <p style={{ color: 'var(--stone-700)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                                            {venue.description}
                                        </p>

                                        <div style={{ marginBottom: '1.75rem' }}>
                                            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-500)', marginBottom: '0.5rem' }}>
                                                Ideal For:
                                            </div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {venue.idealFor.map((item, i) => (
                                                    <span key={i} style={{ fontSize: '0.75rem', backgroundColor: 'var(--ivory)', border: '1px solid var(--line)', padding: '0.35rem 0.75rem', borderRadius: '3px', color: 'var(--ink)' }}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <a
                                            href={whatsappEventLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-brass"
                                        >
                                            Enquire on WhatsApp
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
