import Link from 'next/link';

export default function Page() {
    return (
        <main>
            {/* ==========================================================================
       BOOKING HERO BANNER
       ========================================================================== */}
    <section className="hero" style={{'minHeight': '60vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="hero-bg">
            <img src="/assets/images/P suite 02.png" alt="Diana Heights Luxury Booking" />
            <div style={{'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', 'background': 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)'}}></div>
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'center'}}>
            <div className="hero-content animate-fade-in visible" style={{'maxWidth': '600px'}}>
                <h1 className="hero-title" style={{'fontSize': '3.5rem', 'marginBottom': '1rem'}}>Secure Your Stay</h1>
                <p className="hero-description" style={{'marginTop': '0', 'marginBottom': '2rem'}}>Experience unparalleled luxury just minutes from Cochin International Airport. Select your dates to begin.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       BOOKING ENGINE PLACEHOLDER
       ========================================================================== */}
    <section className="section" style={{'backgroundColor': 'var(--bg-secondary)', 'marginTop': '-100px', 'position': 'relative', 'zIndex': '10'}}>
        <div className="container" style={{'maxWidth': '900px'}}>
            <div className="glass-panel" style={{'padding': '3rem', 'borderRadius': 'var(--border-radius)', 'border': '1px solid var(--border-color)', 'boxShadow': 'var(--shadow-intensity)', 'backgroundColor': 'var(--bg-tertiary)'}}>
                <div style={{'textAlign': 'center', 'marginBottom': '2.5rem'}}>
                    <span className="section-subtitle">Channel Manager Integration Ready</span>
                    <h2 className="section-title" style={{'marginTop': '0.5rem', 'fontSize': '2rem'}}>Reservation Portal</h2>
                </div>
                
                <form onsubmit="event.preventDefault(); alert('This will connect to your booking engine soon!');" style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(200px, 1fr))', 'gap': '1.5rem'}}>
                    
                    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
                        <label style={{'fontSize': '0.8rem', 'color': 'var(--text-secondary)', 'marginBottom': '0.5rem', 'fontFamily': 'var(--font-primary)', 'textTransform': 'uppercase', 'letterSpacing': '0.05em'}}>Check-in Date</label>
                        <input type="date" style={{'padding': '1rem', 'border': '1px solid var(--border-color)', 'backgroundColor': 'transparent', 'color': 'var(--text-primary)', 'borderRadius': '4px', 'fontFamily': 'var(--font-secondary)'}} required />
                    </div>

                    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
                        <label style={{'fontSize': '0.8rem', 'color': 'var(--text-secondary)', 'marginBottom': '0.5rem', 'fontFamily': 'var(--font-primary)', 'textTransform': 'uppercase', 'letterSpacing': '0.05em'}}>Check-out Date</label>
                        <input type="date" style={{'padding': '1rem', 'border': '1px solid var(--border-color)', 'backgroundColor': 'transparent', 'color': 'var(--text-primary)', 'borderRadius': '4px', 'fontFamily': 'var(--font-secondary)'}} required />
                    </div>

                    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
                        <label style={{'fontSize': '0.8rem', 'color': 'var(--text-secondary)', 'marginBottom': '0.5rem', 'fontFamily': 'var(--font-primary)', 'textTransform': 'uppercase', 'letterSpacing': '0.05em'}}>Guests</label>
                        <select style={{'padding': '1rem', 'border': '1px solid var(--border-color)', 'backgroundColor': 'transparent', 'color': 'var(--text-primary)', 'borderRadius': '4px', 'fontFamily': 'var(--font-secondary)', 'appearance': 'none'}}>
                            <option value="1" style={{'color': '#000'}}>1 Adult</option>
                            <option value="2" style={{'color': '#000'}} selected>2 Adults</option>
                            <option value="3" style={{'color': '#000'}}>2 Adults, 1 Child</option>
                            <option value="4" style={{'color': '#000'}}>3 Adults</option>
                        </select>
                    </div>

                    <div style={{'display': 'flex', 'flexDirection': 'column'}}>
                        <label style={{'fontSize': '0.8rem', 'color': 'var(--text-secondary)', 'marginBottom': '0.5rem', 'fontFamily': 'var(--font-primary)', 'textTransform': 'uppercase', 'letterSpacing': '0.05em'}}>Room Type</label>
                        <select style={{'padding': '1rem', 'border': '1px solid var(--border-color)', 'backgroundColor': 'transparent', 'color': 'var(--text-primary)', 'borderRadius': '4px', 'fontFamily': 'var(--font-secondary)', 'appearance': 'none'}}>
                            <option value="any" style={{'color': '#000'}}>Any Available</option>
                            <option value="deluxe" style={{'color': '#000'}}>Deluxe Room</option>
                            <option value="executive" style={{'color': '#000'}}>Executive Room</option>
                            <option value="luxury" style={{'color': '#000'}}>Luxury Suite</option>
                            <option value="presidential" style={{'color': '#000'}}>Presidential Suite</option>
                        </select>
                    </div>

                    <div style={{'gridColumn': '1 / -1', 'marginTop': '1rem'}}>
                        <button type="submit" className="btn btn-primary" style={{'width': '100%', 'padding': '1.25rem', 'fontSize': '1rem', 'justifyContent': 'center'}}>Check Availability</button>
                    </div>
                </form>
                <div style={{'textAlign': 'center', 'marginTop': '2rem'}}>
                    <p style={{'fontSize': '0.8rem', 'color': 'var(--text-secondary)', 'fontFamily': 'var(--font-secondary)'}}>* Need assistance? Call our reservation hotline at <strong style={{'color': 'var(--text-primary)'}}>+91 952 679 9179</strong></p>
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
