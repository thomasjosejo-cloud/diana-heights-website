import Link from 'next/link';
import { roomsData } from '@/content/rooms';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Rooms & Suites · Diana Heights Hotel Cochin Airport',
    description: 'Explore 4-star business rooms and suites near Cochin International Airport. Presidential Suite, Luxury Suite, Executive Room, and Deluxe Room.'
};

export default function RoomsPage() {
    return (
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">FOUR ROOM CATEGORIES</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Rooms & Suites
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        43 well-appointed rooms designed for business executives and transit guests. Generous space, high-speed WiFi, tea/coffee station, and daily complimentary breakfast.
                    </p>
                </div>
            </section>

            {/* Rooms List */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                        {roomsData.map((room, index) => {
                            const isEven = index % 2 === 1;
                            const whatsappRoomLink = buildWhatsAppLink({
                                type: 'room',
                                roomName: room.name
                            });

                            return (
                                <div
                                    key={room.slug}
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
                                            src={room.image}
                                            alt={room.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                            <span className="status-pill" style={{ color: 'var(--gold-deep)', borderColor: 'var(--gold)' }}>
                                                {room.areaSqFt}
                                            </span>
                                            <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                                                {room.sleeps}
                                            </span>
                                        </div>

                                        <h2 className="font-serif" style={{ fontSize: 'clamp(1.65rem, 3.5vw, 2.1rem)', marginBottom: '0.45rem', color: 'var(--sapphire-950)' }}>
                                            {room.name}
                                        </h2>
                                        <p style={{ color: 'var(--gold)', fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>
                                            {room.tagline}
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.7', marginBottom: '1.35rem' }}>
                                            {room.description}
                                        </p>

                                        {/* Highlights list */}
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.5rem', marginBottom: '1.75rem' }}>
                                            {room.features.slice(0, 4).map((f, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                                    <i className="fa-solid fa-check" style={{ color: 'var(--gold)', fontSize: '0.725rem' }}></i>
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                            <a
                                                href={whatsappRoomLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-gold"
                                            >
                                                Reserve via WhatsApp
                                            </a>
                                            <Link
                                                href={`/rooms/${room.slug}`}
                                                className="btn btn-outline-dark"
                                            >
                                                Full Specs &rarr;
                                            </Link>
                                        </div>
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
