import Link from 'next/link';

export default function Page() {
    return (
        <main>
            {/* ==========================================================================
       DESTINATIONS HERO BANNER
       ========================================================================== */}
    <section className="hero" style={{'minHeight': '50vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="hero-bg">
            <img src="/assets/images/athirapilly.jpg" alt="Athirappilly Waterfalls Kerala beautiful tropical jungle landscape" />
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '4rem'}}>
            <div className="hero-content animate-fade-in visible">
                <h1 className="hero-title" style={{'fontSize': '3rem', 'marginBottom': '0'}}>Explore Kerala</h1>
                <p className="hero-description" style={{'marginTop': '0.5rem', 'marginBottom': '0'}}>Curated regional sightseeing guides starting from Nedumbassery.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       Sightseeing CARD GRID
       ========================================================================== */}
    <section className="section section-destinations" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container">
            <div className="section-title-wrap">
                <span className="section-subtitle">Local Wonders</span>
                <h2 className="section-title">Nearest Excursions</h2>
            </div>

            <div className="destinations-grid">
                {/* Destination 1: Athirappilly */}
                <div className="destination-card animate-fade-in">
                    <div className="dest-img-wrap">
                        <img src="/assets/images/athirapilly.jpg" alt="Athirappilly Waterfalls Kerala tourist attraction" className="dest-img" />
                        <span className="dest-distance glass-panel" style={{'backgroundColor': 'var(--accent-color)', 'color': 'var(--bg-primary)'}}>40 km | 60 Mins</span>
                    </div>
                    <div className="dest-content">
                        <h3 className="dest-title">Athirappilly Waterfalls</h3>
                        <p className="dest-desc">The majestic "Niagara of India". Experience roaring, massive water cascades cutting through rich, botanical jungle canopies of Chalakudy. An absolute natural visual masterpiece.</p>
                        <div className="dest-meta">
                            <span>Recommended: Morning Trip</span>
                            <span>Direct Cab Pick-up</span>
                        </div>
                    </div>
                </div>

                {/* Destination 2: Fort Kochi */}
                <div className="destination-card animate-fade-in">
                    <div className="dest-img-wrap">
                        <img src="/assets/images/fort kochi.jpg" alt="Fort Kochi Chinese Fishing Nets Kerala tourist attraction" className="dest-img" />
                        <span className="dest-distance glass-panel" style={{'backgroundColor': 'var(--accent-color)', 'color': 'var(--bg-primary)'}}>38 km | 65 Mins</span>
                    </div>
                    <div className="dest-content">
                        <h3 className="dest-title">Fort Kochi & Heritage</h3>
                        <p className="dest-desc">Immerse in colonial histories. Stroll through cobblestone streets lined with Portuguese churches, Dutch palaces, ancient Jewish quarters, and Chinese fishing nets silhouetted against gold sunsets.</p>
                        <div className="dest-meta">
                            <span>Recommended: Afternoon</span>
                            <span>Historical Walking Tours</span>
                        </div>
                    </div>
                </div>

                {/* Destination 3: Kerala Backwaters */}
                <div className="destination-card animate-fade-in">
                    <div className="dest-img-wrap">
                        <img src="/assets/images/kerala backwaters.jpg" alt="Kerala Backwaters Houseboats lagoon cruise" className="dest-img" />
                        <span className="dest-distance glass-panel" style={{'backgroundColor': 'var(--accent-color)', 'color': 'var(--bg-primary)'}}>28 km | 45 Mins</span>
                    </div>
                    <div className="dest-content">
                        <h3 className="dest-title">Cochin Backwater Cruise</h3>
                        <p className="dest-desc">Cruising Kerala's tranquil watery veins. Book a premium teak houseboat day-trip, navigating past dense coconut palms, quiet fishing villages, and peaceful birds sanctuaries.</p>
                        <div className="dest-meta">
                            <span>Recommended: Day Trip</span>
                            <span>Private Houseboat Booking</span>
                        </div>
                    </div>
                </div>

                {/* Destination 4: Munnar */}
                <div className="destination-card animate-fade-in">
                    <div className="dest-img-wrap">
                        <img src="/assets/images/munnar.jpg" alt="Munnar Tea Gardens Kerala tourist attraction" className="dest-img" />
                        <span className="dest-distance glass-panel" style={{'backgroundColor': 'var(--accent-color)', 'color': 'var(--bg-primary)'}}>110 km | 3.5 Hours</span>
                    </div>
                    <div className="dest-content">
                        <h3 className="dest-title">Munnar Tea Gardens</h3>
                        <p className="dest-desc">Escape to the cool, misty hills of the Western Ghats. Munnar boasts endless emerald-green tea plantations, cascading waterfalls, and exotic flora like the Neelakurinji.</p>
                        <div className="dest-meta">
                            <span>Recommended: Day Trip</span>
                            <span>Scenic Mountain Drive</span>
                        </div>
                    </div>
                </div>

                {/* Destination 5: Guruvayoor Temple */}
                <div className="destination-card animate-fade-in">
                    <div className="dest-img-wrap">
                        <img src="/assets/images/guruvayoor temple.jpeg" alt="Guruvayoor Temple Kerala" className="dest-img" />
                        <span className="dest-distance glass-panel" style={{'backgroundColor': 'var(--accent-color)', 'color': 'var(--bg-primary)'}}>80 km | 2.5 Hours</span>
                    </div>
                    <div className="dest-content">
                        <h3 className="dest-title">Guruvayoor Sree Krishna Temple</h3>
                        <p className="dest-desc">A major pilgrimage center in Kerala. Experience the divine tranquility and rich cultural heritage of this ancient temple dedicated to Lord Krishna, known for its intricate murals.</p>
                        <div className="dest-meta">
                            <span>Recommended: Morning</span>
                            <span>Spiritual Pilgrimage</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Quick Airport Tour Desk Banner */}
            <div className="glass-panel animate-fade-in" style={{'marginTop': '5rem', 'padding': '3rem', 'borderRadius': 'var(--border-radius)', 'textAlign': 'center'}}>
                <h3 style={{'fontSize': '1.85rem', 'marginBottom': '1rem'}}>Need a Custom Itinerary?</h3>
                <p style={{'color': 'var(--text-secondary)', 'maxWidth': '600px', 'margin': '0 auto 2rem auto', 'fontWeight': '300', 'fontSize': '0.9rem'}}>Our 24-hour Hotel Tour Desk customizes elite cab hires, booking schedules, private boat reservations, and expert translators for hassle-free Kerala expeditions.</p>
                <a href="/contact" className="btn btn-primary">Speak to Tour Desk</a>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       GLOBAL PREMIUM FOOTER
       ========================================================================== */}
        </main>
    );
}
