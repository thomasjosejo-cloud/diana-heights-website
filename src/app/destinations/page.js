import Link from 'next/link';

export const metadata = {
    title: 'Nearest Destinations & Transit · Diana Heights Cochin Airport',
    description: 'Explore key transit hubs and tourism destinations near Diana Heights. 5.5 km from Cochin Airport, near Kalady, Cherai Beach, and Athirappilly Waterfalls.'
};

const destinations = [
    {
        name: 'Cochin International Airport (CIAL)',
        distance: '5.5 km',
        time: '10 Minutes',
        tag: 'AIRPORT TRANSIT',
        desc: 'Direct corridor along NH-47. Fast, hassle-free airport connectivity for business travelers and transit passengers.'
    },
    {
        name: 'Angamaly Railway Station',
        distance: '7.0 km',
        time: '12 Minutes',
        tag: 'RAILWAY TRANSIT',
        desc: 'Major railway junction connecting Cochin with central and northern Kerala express train routes.'
    },
    {
        name: 'Kalady (Adi Shankaracharya Birthplace)',
        distance: '8.0 km',
        time: '15 Minutes',
        tag: 'HERITAGE & PILGRIMAGE',
        desc: 'Renowned holy birthplace of the great philosopher Adi Shankara on the peaceful banks of the Periyar River.'
    },
    {
        name: 'Aluva Railway Station & KSRTC Stand',
        distance: '14.0 km',
        time: '20 Minutes',
        tag: 'INTERCITY TRANSIT',
        desc: 'Major transit hub connecting to the Kochi Metro network, long-distance interstate buses, and passenger rail.'
    },
    {
        name: 'Malayattoor St. Thomas Church',
        distance: '15.0 km',
        time: '25 Minutes',
        tag: 'HISTORIC PILGRIMAGE',
        desc: 'Famous international pilgrimage shrine perched atop Malayattoor Hill, visited by travelers worldwide.'
    },
    {
        name: 'Cherai Beach',
        distance: '20.0 km',
        time: '35 Minutes',
        tag: 'COASTAL LEISURE',
        desc: 'Golden shallow beaches where backwaters meet the Arabian Sea, famous for scenic sunsets and dolphin sightings.'
    },
    {
        name: 'Athirappilly & Vazhachal Waterfalls',
        distance: '50.0 km',
        time: '1 Hour 15 Mins',
        tag: 'NATURAL WONDERS',
        desc: 'Kerala’s most majestic waterfalls, cascading through lush rainforest canopies on the Chalakudy River.'
    },
    {
        name: 'Munnar Hill Station',
        distance: '100.0 km',
        time: '3 Hours',
        tag: 'HILL RETREAT',
        desc: 'Spectacular rolling tea plantations, cool mist-covered peaks, and pristine Western Ghats mountain reserves.'
    }
];

export default function DestinationsPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">STRATEGIC KERALA LOCATION</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Nearest Destinations & Transit
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Located on the NH-47 corridor at Athani Junction, Diana Heights offers effortless access to CIAL, pilgrimage sites, beaches, and Kerala's iconic attractions.
                    </p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {destinations.map((dest, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: 'var(--paper)',
                                    border: '1px solid var(--line)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '2.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brass)' }}>
                                            {dest.tag}
                                        </span>
                                        <span className="status-pill" style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
                                            {dest.time}
                                        </span>
                                    </div>

                                    <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>
                                        {dest.name}
                                    </h3>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--brass-deep)', marginBottom: '1rem' }}>
                                        {dest.distance}
                                    </div>
                                    <p style={{ color: 'var(--stone-700)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {dest.desc}
                                    </p>
                                </div>

                                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.25rem', marginTop: '1.5rem' }}>
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-brass"
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        Get Directions on Google Maps &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
