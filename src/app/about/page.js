import Link from 'next/link';
import { HOTEL_PHONE, buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'About Us · Our Story & Heritage · Diana Heights Cochin',
    description: "Learn about Diana Heights, Kochi's most complete airport hotel, situated 10 minutes from Cochin International Airport in Athani, Nedumbassery."
};

export default function AboutPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* About Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">OUR HERITAGE & PROMISE</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Kochi's most complete airport hotel.
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Where business travellers decompress, families celebrate, and transit guests discover a reason to extend the stay.
                    </p>
                </div>
            </section>

            {/* About Narrative Section */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="eyebrow">THE MONUMENT</span>
                            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
                                Ten minutes from your gate. Everything else, taken care of.
                            </h2>
                            <p style={{ color: 'var(--stone-700)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                Situated right on the NH-47 highway corridor in Athani, Nedumbassery, Diana Heights was established to solve a singular challenge: providing seamless business-class comfort and warm Keralite hospitality just minutes from Cochin International Airport (CIAL).
                            </p>
                            <p style={{ color: 'var(--stone-700)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                                With 43 well-appointed rooms and suites, two restaurants (including our 24-hour Free Zone Café and specialty Aero Café), a full-service spa, an outdoor swimming pool, a modern health club, and 150-pax banquet facilities, we bring everything you need under one roof.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href={buildWhatsAppLink({ type: 'booking' })}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-brass"
                                >
                                    Book Direct with Us
                                </a>
                                <Link href="/rooms" className="btn btn-outline-dark">
                                    View Accommodations
                                </Link>
                            </div>
                        </div>

                        <div style={{ height: '480px', borderRadius: 'var(--border-radius)', overflow: 'hidden', backgroundColor: 'var(--ink)', boxShadow: '0 15px 40px rgba(22,20,15,0.1)' }}>
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
            <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <div className="font-serif" style={{ fontSize: '3rem', color: 'var(--brass)', marginBottom: '0.25rem' }}>43</div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-700)' }}>Rooms & Suites</div>
                        </div>
                        <div>
                            <div className="font-serif" style={{ fontSize: '3rem', color: 'var(--brass)', marginBottom: '0.25rem' }}>2</div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-700)' }}>Restaurants (24/7 Dining)</div>
                        </div>
                        <div>
                            <div className="font-serif" style={{ fontSize: '3rem', color: 'var(--brass)', marginBottom: '0.25rem' }}>150</div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-700)' }}>Pax Event Capacity</div>
                        </div>
                        <div>
                            <div className="font-serif" style={{ fontSize: '3rem', color: 'var(--brass)', marginBottom: '0.25rem' }}>5 min</div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--stone-700)' }}>Drive to CIAL Airport</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
