import Link from 'next/link';
import { HOTEL_PHONE, buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'About Us · Our Story & Heritage · Diana Heights Cochin',
    description: "Learn about Diana Heights, a 4-star rated business class hotel, situated 10 minutes from Cochin International Airport in Athani, Nedumbassery."
};

export default function AboutPage() {
    return (
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* About Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">OUR HERITAGE & PROMISE</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Kochi's most complete airport hotel.
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Where business travelers decompress, families celebrate, and transit guests discover a reason to extend their stay.
                    </p>
                </div>
            </section>

            {/* About Narrative Section */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div className="grid-2-col-asymmetric">
                        <div>
                            <span className="eyebrow">THE MONUMENT</span>
                            <h2 className="font-serif" style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', marginBottom: '1.25rem', color: 'var(--sapphire-950)' }}>
                                Ten minutes from your gate. Everything else, taken care of.
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                                Situated right on the NH-47 highway corridor in Athani, Nedumbassery, Diana Heights was established to provide seamless 4-star business-class comfort and warm Keralite hospitality just minutes from Cochin International Airport (CIAL).
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                                With 43 well-appointed rooms and suites, two restaurants (Flavours multi-cuisine with 24-hr in-room dining and Aero Cafe speciality eatery), Diana Ira Spa, an outdoor swimming pool, a modern health club, and Runway Hall banquet facilities for 150 guests, we bring everything you need under one roof.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href={buildWhatsAppLink({ type: 'booking' })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-gold"
                                >
                                    Book Direct with Us
                                </a>
                                <Link href="/rooms" className="btn btn-outline-dark">
                                    View Accommodations
                                </Link>
                            </div>
                        </div>

                        <div style={{ height: '420px', borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--sapphire-950)', boxShadow: 'var(--shadow-md)' }}>
                            <img
                                src="/assets/images/lobby.png"
                                alt="Diana Heights Welcome Lobby"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Stats Band */}
            <section style={{ backgroundColor: 'var(--surface-pure)', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)', padding: '3.5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <div className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--sapphire-950)', marginBottom: '0.25rem', fontWeight: '700' }}>43</div>
                            <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>Rooms & Suites</div>
                        </div>
                        <div>
                            <div className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--sapphire-950)', marginBottom: '0.25rem', fontWeight: '700' }}>2</div>
                            <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>Restaurants (Flavours & Aero)</div>
                        </div>
                        <div>
                            <div className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--sapphire-950)', marginBottom: '0.25rem', fontWeight: '700' }}>150</div>
                            <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>Pax Event Capacity</div>
                        </div>
                        <div>
                            <div className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--sapphire-950)', marginBottom: '0.25rem', fontWeight: '700' }}>5.5 km</div>
                            <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>Drive to CIAL Airport</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
