import Link from 'next/link';

export default function Page() {
    return (
        <main>
            {/* ==========================================================================
       INTERIOR HERO BANNER (ABOUT)
       ========================================================================== */}
    <section className="hero" style={{'minHeight': '50vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="hero-bg">
            <img src="/assets/images/P suite 02.png" alt="Diana Heights Rejuvenating Spa and Interior Lobby" />
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '4rem'}}>
            <div className="hero-content animate-fade-in visible">
                <h1 className="hero-title" style={{'fontSize': '3rem', 'marginBottom': '0'}}>Our Story & Heritage</h1>
                <p className="hero-description" style={{'marginTop': '0.5rem', 'marginBottom': '0'}}>Behind the premier transit luxury experience in Ernakulam district.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       STORYTELLING PHILOSOPHY
       ========================================================================== */}
    <section className="section section-story" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container">
            <div className="intro-grid animate-fade-in">
                <div className="intro-text-content">
                    <span className="section-subtitle">Since Inception</span>
                    <h2 className="section-title" style={{'marginBottom': '2rem'}}>A Philosophy of Infinite Care</h2>
                    <p>
                        Diana Heights Nedumbassery was born out of a simple, visionary realization: international airline travelers and regional corporate leaders required an immaculate, top-tier home that offered complete tranquility without long road commutes from Ernakulam city center.
                    </p>
                    <p>
                        By combining Kerala's historic, world-renowned lineage of warmth and healing (Athithi Devo Bhava) with hyper-focused transit efficiency, we created a rare hybrid. Whether you are checking in at 2:00 AM after a long flight from Europe, or hosting a high-stakes board negotiation in our Runway Hall, every detail is engineered to feel effortless.
                    </p>
                    <p>
                        We completed an extensive structural renovation in 2021, refining our rooms, upgrading our sky pool water systems, and introducing custom luxury mattresses to guarantee therapeutic rest. Our team stands ready to serve you.
                    </p>
                </div>
                
                <div className="intro-img-wrapper glass-panel">
                    <img src="/assets/images/suit 01.png" alt="Diana Heights Teak Wood Interior Luxury Suite Suite" className="intro-img" />
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       METRICS & STATISTICAL COUNTER GRID
       ========================================================================== */}
    <section className="section section-metrics" style={{'backgroundColor': 'var(--bg-secondary)', 'borderTop': '1px solid var(--border-color)', 'borderBottom': '1px solid var(--border-color)'}}>
        <div className="container">
            <div className="metrics-grid animate-fade-in">
                <div className="glass-panel" style={{'padding': '2.5rem 1.5rem', 'borderRadius': 'var(--border-radius)'}}>
                    <div style={{'fontFamily': 'var(--font-heading)', 'fontSize': '2.85rem', 'color': 'var(--accent-color)', 'fontWeight': '700', 'marginBottom': '0.5rem'}}>5 km</div>
                    <div style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '0.15em', 'color': 'var(--text-secondary)'}}>From CIAL Airport</div>
                </div>
                <div className="glass-panel" style={{'padding': '2.5rem 1.5rem', 'borderRadius': 'var(--border-radius)'}}>
                    <div style={{'fontFamily': 'var(--font-heading)', 'fontSize': '2.85rem', 'color': 'var(--accent-color)', 'fontWeight': '700', 'marginBottom': '0.5rem'}}>4</div>
                    <div style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '0.15em', 'color': 'var(--text-secondary)'}}>Premium Room Types</div>
                </div>
                <div className="glass-panel" style={{'padding': '2.5rem 1.5rem', 'borderRadius': 'var(--border-radius)'}}>
                    <div style={{'fontFamily': 'var(--font-heading)', 'fontSize': '2.85rem', 'color': 'var(--accent-color)', 'fontWeight': '700', 'marginBottom': '0.5rem'}}>24/7</div>
                    <div style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '0.15em', 'color': 'var(--text-secondary)'}}>Executive Room Service</div>
                </div>
                <div className="glass-panel" style={{'padding': '2.5rem 1.5rem', 'borderRadius': 'var(--border-radius)'}}>
                    <div style={{'fontFamily': 'var(--font-heading)', 'fontSize': '2.85rem', 'color': 'var(--accent-color)', 'fontWeight': '700', 'marginBottom': '0.5rem'}}>100%</div>
                    <div style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '0.15em', 'color': 'var(--text-secondary)'}}>Satisfaction Rating</div>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       OUR SIX CORE VALUES
       ========================================================================== */}
    <section className="section section-values" style={{'backgroundColor': 'var(--bg-tertiary)'}}>
        <div className="container">
            <div className="section-title-wrap">
                <span className="section-subtitle">Our Integrity Pillars</span>
                <h2 className="section-title">The Values that Guide Us</h2>
            </div>
            
            <div className="values-grid animate-fade-in">
                {/* Value 1 */}
                <div className="glass-panel" style={{'padding': '2rem', 'borderRadius': 'var(--border-radius)', 'transition': 'transform 0.3s ease'}}>
                    <i className="fa-solid fa-hotel" style={{'color': 'var(--accent-color)', 'fontSize': '2rem', 'marginBottom': '1.25rem'}}></i>
                    <h3 style={{'fontSize': '1.2rem', 'marginBottom': '0.75rem'}}>Immaculate Curation</h3>
                    <p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'fontWeight': '300'}}>Immaculate room curation, where botanical details and silent restoration are prepared daily for your arrival.</p>
                </div>
                {/* Value 2 */}
                <div className="glass-panel" style={{'padding': '2rem', 'borderRadius': 'var(--border-radius)', 'transition': 'transform 0.3s ease'}}>
                    <i className="fa-solid fa-clock" style={{'color': 'var(--accent-color)', 'fontSize': '2rem', 'marginBottom': '1.25rem'}}></i>
                    <h3 style={{'fontSize': '1.2rem', 'marginBottom': '0.75rem'}}>Adaptive Timing</h3>
                    <p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'fontWeight': '300'}}>We offer flexible checkout matching, rapid airport shuttle cycles, and round-the-clock check-in desks.</p>
                </div>
                {/* Value 3 */}
                <div className="glass-panel" style={{'padding': '2rem', 'borderRadius': 'var(--border-radius)', 'transition': 'transform 0.3s ease'}}>
                    <i className="fa-solid fa-tree" style={{'color': 'var(--accent-color)', 'fontSize': '2rem', 'marginBottom': '1.25rem'}}></i>
                    <h3 style={{'fontSize': '1.2rem', 'marginBottom': '0.75rem'}}>Eco-Conscious Luxury</h3>
                    <p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'fontWeight': '300'}}>We compost waste, recycle water for our tropical gardens, and utilize energy-saving room sensors.</p>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       GLOBAL PREMIUM FOOTER
       ========================================================================== */}
        </main>
    );
}
