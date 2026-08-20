import Link from 'next/link';
import { facilitiesList } from '@/content/events';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Facilities & Amenities · Diana Ira Spa · Diana Heights Cochin Airport',
    description: 'Explore hotel facilities and amenities at Diana Heights. Diana Ira Spa, outdoor pool, health club, business lounge, and full complimentary guest inclusions.'
};

export default function FacilitiesPage() {
    return (
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Facilities Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">HOTEL FACILITIES & AMENITIES</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Everything under one roof.
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        From the moment our doormen greet you on arrival, enjoy personalized service, rejuvenating Ayurvedic spa therapies, outdoor pool, and executive amenities.
                    </p>
                </div>
            </section>

            {/* Facilities Showcase Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                        {facilitiesList.map((facility) => (
                            <div
                                key={facility.id}
                                style={{
                                    backgroundColor: 'var(--surface-pure)',
                                    border: '1px solid var(--line-light)',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <div style={{ height: '230px', backgroundColor: 'var(--sapphire-950)', overflow: 'hidden' }}>
                                    <img
                                        src={facility.image}
                                        alt={facility.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <div style={{ padding: '1.85rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.725rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>
                                            {facility.subtitle}
                                        </div>
                                        <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.65rem', color: 'var(--sapphire-950)' }}>
                                            {facility.name}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.35rem' }}>
                                            {facility.description}
                                        </p>
                                    </div>

                                    <div style={{ borderTop: '1px solid var(--line-light)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                            <i className="fa-regular fa-clock" style={{ color: 'var(--gold)', marginRight: '4px' }}></i> {facility.timing}
                                        </span>
                                        {facility.id === 'spa' && (
                                            <a
                                                href={buildWhatsAppLink({ type: 'spa' })}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-gold"
                                                style={{ fontSize: '0.78rem' }}
                                            >
                                                Book Spa &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complimentary Inclusions Section */}
            <section style={{ backgroundColor: 'var(--surface-pure)', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)', padding: '4.5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
                        <span className="eyebrow">HONEST VALUE</span>
                        <h2 className="font-serif" style={{ fontSize: '2.3rem', color: 'var(--sapphire-950)', marginBottom: '0.85rem' }}>
                            Facilities & Amenities Provided on Complimentary Basis
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            Guests lodging with us can avail high-quality guest amenities and multi-channel entertainment at no extra charge:
                        </p>
                    </div>

                    <div className="grid-complimentary">
                        {[
                            'Breakfast Buffet (Indian & Continental)',
                            'Bottled Mineral Water (1000ml) 02 Nos Daily',
                            'High-Speed Complimentary Internet Access',
                            'Valet Parking & Left Luggage Facility',
                            'Complete Toiletries: Soap, Shampoo & Moisturizer',
                            'Shaving Kit, Dental Kit, Comb & Shower Cap',
                            'Hair Dryer & In-Room Safe Deposit Locker',
                            'Coffee Maker Machine & Tea Station',
                            'Iron & Ironing Board (On Request)',
                            'Shoeshine Strip & Machine',
                            'Daily Newspaper & Guest Stationery',
                            'Wheelchair Accessibility & 24-Hour Desk'
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    backgroundColor: 'var(--surface-light)',
                                    border: '1px solid var(--line-light)',
                                    padding: '1.15rem 1.35rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.875rem',
                                    color: 'var(--sapphire-950)',
                                    fontWeight: '500'
                                }}
                            >
                                <i className="fa-solid fa-check" style={{ color: 'var(--gold)', fontSize: '0.8rem' }}></i>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
