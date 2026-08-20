import Link from 'next/link';
import { eventVenues } from '@/content/events';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Events & Banquets · Runway Hall (150 Pax) · Diana Heights Cochin Airport',
    description: 'Host conferences, corporate meetings, and wedding banquets near Cochin International Airport. Runway Hall for up to 150 guests and Business Lounge boardroom.'
};

export default function EventsPage() {
    return (
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Events Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">BANQUETS & CORPORATE CONFERENCES</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Runway Hall & Business Lounge
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Versatile banquet venues for corporate summits, product launches, gala receptions, and executive boardroom meetings near Cochin International Airport.
                    </p>
                </div>
            </section>

            {/* Venues Showcase */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
                        {eventVenues.map((venue, index) => {
                            const isEven = index % 2 === 1;
                            const whatsappEventLink = buildWhatsAppLink({
                                type: 'event',
                                eventName: venue.name,
                                pax: venue.slug === 'runway-hall' ? 150 : 20
                            });

                            const delayClass = `delay-${(index % 2) + 1}`;
                            return (
                                <div
                                    key={venue.slug}
                                    className={`grid-venue-card reveal reveal-up ${delayClass}`}
                                    style={{
                                        backgroundColor: 'var(--surface-pure)',
                                        border: '1px solid var(--line-light)',
                                        borderRadius: 'var(--radius-md)',
                                        overflow: 'hidden',
                                        padding: '2.5rem',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}
                                >
                                    <div style={{ order: isEven ? 2 : 1, height: '380px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backgroundColor: 'var(--sapphire-950)' }}>
                                        <img
                                            src={venue.image}
                                            alt={venue.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <span className="status-pill" style={{ color: 'var(--gold-deep)', borderColor: 'var(--gold)', marginBottom: '0.65rem' }}>
                                            {venue.capacity}
                                        </span>
                                        <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '0.45rem', color: 'var(--sapphire-950)' }}>
                                            {venue.name}
                                        </h2>
                                        <p style={{ color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1.15rem', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>
                                            {venue.tagline}
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.35rem' }}>
                                            {venue.description}
                                        </p>

                                        {/* Features */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.75rem' }}>
                                            {venue.features.map((f, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                                    <i className="fa-solid fa-check" style={{ color: 'var(--gold)', fontSize: '0.725rem' }}></i>
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={whatsappEventLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-gold"
                                        >
                                            Enquire Dates via WhatsApp
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
