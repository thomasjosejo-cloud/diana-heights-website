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
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">STRATEGIC KERALA LOCATION</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Nearest Destinations & Transit
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Located on the NH-47 corridor at Athani Junction, Diana Heights offers effortless access to CIAL, pilgrimage sites, beaches, and Kerala's iconic attractions.
                    </p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                        {destinations.map((dest, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundColor: 'var(--surface-pure)',
                                    border: '1px solid var(--line-light)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                            >
                                <div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                                        {dest.tag}
                                    </span>
                                    <h2 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '0.65rem', color: 'var(--sapphire-950)' }}>
                                        {dest.name}
                                    </h2>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                                        {dest.desc}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line-light)', paddingTop: '1rem', fontSize: '0.85rem' }}>
                                    <span style={{ fontWeight: '700', color: 'var(--sapphire-950)' }}>
                                        <i className="fa-solid fa-location-arrow" style={{ color: 'var(--gold)', marginRight: '6px' }}></i>
                                        {dest.distance}
                                    </span>
                                    <span style={{ color: 'var(--text-muted)' }}>
                                        <i className="fa-regular fa-clock" style={{ color: 'var(--gold)', marginRight: '6px' }}></i>
                                        {dest.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
