import Link from 'next/link';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Nearest Destinations · Sightseeing around Cochin Airport · Diana Heights',
    description: 'Tourist places to see near Cochin International Airport. Athirappilly Waterfalls, Cherai Beach, Fort Kochi, Kalady, and Kerala backwaters.'
};

const destinations = [
    {
        name: 'Cochin International Airport (CIAL)',
        distance: '5.5 km (approx. 10 mins)',
        description: 'Easily accessible along the NH-47 corridor, offering effortless transit connectivity.',
        image: '/assets/images/diana.png'
    },
    {
        name: 'Kalady (Adi Shankaracharya Birthplace)',
        distance: '8 km (approx. 15 mins)',
        description: 'A serene spiritual destination on the banks of River Periyar, the birthplace of Adi Shankaracharya.',
        image: '/assets/images/lobby.png'
    },
    {
        name: 'Cherai Beach',
        distance: '20 km (approx. 35 mins)',
        description: 'Picturesque coastline known for calm waters, golden sands, and dolphin sightings.',
        image: '/assets/images/pool 01.png'
    },
    {
        name: 'Athirappilly & Vazhachal Waterfalls',
        distance: '50 km (approx. 70 mins)',
        description: 'The majestic "Niagara of India" plunging through lush tropical rainforest canopies.',
        image: '/assets/images/athirapilly.jpg'
    },
    {
        name: 'Fort Kochi & Heritage Quarters',
        distance: '40 km (approx. 60 mins)',
        description: 'Historic colonial architecture, Portuguese churches, Jewish synagogue, and iconic Chinese fishing nets.',
        image: '/assets/images/fort kochi.jpg'
    },
    {
        name: 'Munnar Hill Station',
        distance: '100 km (approx. 3.5 hours)',
        description: 'Cool misty hills of the Western Ghats with endless tea plantations and cascading streams.',
        image: '/assets/images/munnar.jpg'
    }
];

export default function DestinationsPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Destinations Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">EXPLORE KERALA</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Nearest Destinations
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Diana Heights is the ideal base to explore historical landmarks, beaches, and nature reserves around Cochin Airport.
                    </p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {destinations.map((dest, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: 'var(--paper)',
                                    border: '1px solid var(--line)',
                                    borderRadius: 'var(--border-radius)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '220px', backgroundColor: 'var(--ink)', overflow: 'hidden' }}>
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: '0.35rem' }}>
                                            {dest.distance}
                                        </div>
                                        <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                            {dest.name}
                                        </h3>
                                        <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                            {dest.description}
                                        </p>
                                    </div>

                                    <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1rem' }}>
                                        <a
                                            href={buildWhatsAppLink({ type: 'general', message: `Inquiry about cab / tour arrangements for ${dest.name}` })}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-brass"
                                            style={{ fontSize: '0.8rem' }}
                                        >
                                            Arrange Cab Pick-up &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
