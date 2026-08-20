import Link from 'next/link';
import { facilitiesList } from '@/content/events';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Facilities & Amenities · Diana Ira Spa · Diana Heights Cochin Airport',
    description: 'Explore hotel facilities and amenities at Diana Heights. Diana Ira Spa, outdoor pool, health club, business lounge, and full complimentary guest inclusions.'
};

export default function FacilitiesPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Facilities Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">HOTEL FACILITIES & AMENITIES</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Everything under one roof.
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        From the moment our doormen greet you on arrival, enjoy personalized service, rejuvenating Ayurvedic spa therapies, outdoor pool, and executive amenities.
                    </p>
                </div>
            </section>

            {/* Facilities Showcase Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {facilitiesList.map((facility) => (
                            <div
                                key={facility.id}
                                style={{
                                    backgroundColor: 'var(--paper)',
                                    border: '1px solid var(--line)',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                            >
                                <div style={{ height: '240px', backgroundColor: 'var(--ink)', overflow: 'hidden' }}>
                                    <img
                                        src={facility.image}
                                        alt={facility.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.35rem' }}>
                                            {facility.subtitle}
                                        </div>
                                        <h3 className="font-serif" style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                            {facility.name}
                                        </h3>
                                        <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                            {facility.description}
                                        </p>
                                    </div>

                                    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--stone-500)' }}>
                                            <i className="fa-regular fa-clock" style={{ color: 'var(--brass)', marginRight: '4px' }}></i> {facility.timing}
                                        </span>
                                        {facility.id === 'spa' && (
                                            <a
                                                href={buildWhatsAppLink({ type: 'spa' })}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-brass"
                                                style={{ fontSize: '0.8rem' }}
                                            >
                                                Book Spa Appointment &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complimentary Inclusions Section (Exact from Diana Heights website) */}
            <section style={{ backgroundColor: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
                        <span className="eyebrow">HONEST VALUE</span>
                        <h2 className="font-serif" style={{ fontSize: '2.5rem', color: 'var(--ink)', marginBottom: '1rem' }}>
                            Facilities & Amenities Provided on Complimentary Basis
                        </h2>
                        <p style={{ color: 'var(--stone-700)', fontSize: '1rem' }}>
                            Guests lodging with us can avail high-quality guest amenities and multi-channel entertainment at no extra charge:
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
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
                                    gap: '0.85rem',
                                    backgroundColor: 'var(--ivory)',
                                    border: '1px solid var(--line)',
                                    padding: '1.25rem 1.5rem',
                                    borderRadius: 'var(--radius-sm)',
                                    fontSize: '0.9rem',
                                    color: 'var(--ink)',
                                    fontWeight: '500'
                                }}
                            >
                                <i className="fa-solid fa-check" style={{ color: 'var(--brass)', fontSize: '0.85rem' }}></i>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
