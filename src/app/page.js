"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const slides = document.querySelectorAll('.promo-slide');
        if (slides.length > 0) {
            let currentSlide = 0;
            const interval = setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <main>
            {/* ==========================================================================
       CINEMATIC HERO SECTION
       ========================================================================== */}
    <section className="hero">
        <div className="hero-bg">
            <img src="/assets/images/diana.png" alt="Diana Heights Luxury Hotel Facade Kerala" />
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'width': '100%', 'maxWidth': '1400px', 'gap': '2rem', 'flexWrap': 'wrap'}}>
            <div className="hero-content animate-fade-in visible" style={{'flex': '1', 'minWidth': '300px', 'marginTop': '0'}}>
                <h1 className="hero-title">
                    Where Traditional Warmth Meets <br />
                    <span style={{'fontSize': '4.5rem', 'textTransform': 'none', 'fontStyle': 'italic', 'letterSpacing': '0', 'color': 'var(--accent-color)', 'fontFamily': 'var(--font-heading)'}}>Elegance.</span>
                </h1>
                <p className="hero-description">
                    Nestled at the threshold of wonder, we offer impeccable comfort and warm Keralite hospitality — connecting you to one of the world's most beautiful destinations.
                </p>
                <div className="hero-buttons">
                    <a href="/booking" className="btn btn-primary">RESERVE A ROOM <i className="fa-solid fa-arrow-right" style={{'marginLeft': '5px'}}></i></a>
                    <a href="/about" className="btn btn-outline" style={{'color': '#fff', 'borderColor': 'rgba(255,255,255,0.4)'}}>DISCOVER OUR STORY</a>
                </div>
            </div>
            
            <div className="hero-booking-card animate-fade-in glass-panel" style={{'width': '100%', 'maxWidth': '450px', 'padding': '1.75rem', 'borderRadius': '1.5rem', 'background': 'rgba(10, 15, 25, 0.25)', 'backdropFilter': 'blur(12px)', 'WebkitBackdropFilter': 'blur(12px)', 'border': '1px solid rgba(255,255,255,0.15)', 'marginLeft': 'auto'}}>
                <h3 style={{'fontSize': '1.75rem', 'fontWeight': '400', 'marginBottom': '0.25rem', 'color': '#ffffff'}}>Quick Check</h3>
                <p style={{'fontSize': '0.85rem', 'color': 'rgba(255,255,255,0.6)', 'marginBottom': '1.25rem'}}>Instant availability · No commitment</p>
                
                <form id="hero-quick-check">
                    <div className="form-group" style={{'marginBottom': '0.85rem'}}>
                        <label htmlFor="hc-in" className="form-label" style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '1px', 'color': 'rgba(255,255,255,0.5)'}}><i className="fa-regular fa-calendar" style={{'marginRight': '5px'}}></i> Check In</label>
                        <input type="date" id="hc-in" className="form-input" style={{'background': 'rgba(255,255,255,0.1)', 'border': 'none', 'color': '#fff', 'marginTop': '0.5rem'}} required />
                    </div>
                    <div className="form-group" style={{'marginBottom': '0.85rem'}}>
                        <label htmlFor="hc-out" className="form-label" style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '1px', 'color': 'rgba(255,255,255,0.5)'}}><i className="fa-regular fa-calendar" style={{'marginRight': '5px'}}></i> Check Out</label>
                        <input type="date" id="hc-out" className="form-input" style={{'background': 'rgba(255,255,255,0.1)', 'border': 'none', 'color': '#fff', 'marginTop': '0.5rem'}} required />
                    </div>
                    <div className="form-group" style={{'marginBottom': '1.25rem'}}>
                        <label htmlFor="hc-room" className="form-label" style={{'fontSize': '0.75rem', 'textTransform': 'uppercase', 'letterSpacing': '1px', 'color': 'rgba(255,255,255,0.5)'}}><i className="fa-solid fa-bed" style={{'marginRight': '5px'}}></i> Room Type</label>
                        <select id="hc-room" className="form-input" style={{'background': 'rgba(255,255,255,0.1)', 'border': 'none', 'color': '#fff', 'marginTop': '0.5rem', 'appearance': 'none'}}>
                            <option value="deluxe" style={{'color': '#000'}}>Deluxe Room</option>
                            <option value="executive" style={{'color': '#000'}}>Executive Room</option>
                            <option value="suite" style={{'color': '#000'}}>Luxury Suite</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{'width': '100%', 'textTransform': 'uppercase', 'fontSize': '0.9rem', 'fontWeight': '700', 'padding': '1rem', 'color': '#111', 'backgroundColor': 'var(--accent-color)'}}>Check Availability</button>
                </form>
                
                <div style={{'marginTop': '1.25rem', 'borderTop': '1px solid rgba(255,255,255,0.1)', 'paddingTop': '1rem', 'display': 'flex', 'alignItems': 'center', 'gap': '1rem'}}>
                    <div style={{'width': '40px', 'height': '40px', 'borderRadius': '50%', 'background': 'rgba(255,255,255,0.1)', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'color': 'var(--accent-color)'}}>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                        <div style={{'fontSize': '0.65rem', 'textTransform': 'uppercase', 'letterSpacing': '1px', 'color': 'rgba(255,255,255,0.5)'}}>Reservations Hotline</div>
                        <div style={{'fontSize': '1rem', 'fontWeight': '600', 'color': '#ffffff'}}>+91 484 261 0366</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       HOTEL OVERVIEW & HERITAGE
       ========================================================================== */}
    <section className="section section-overview" style={{'backgroundColor': 'var(--bg-tertiary)'}}>
        <div className="container">
            <div className="intro-grid animate-fade-in">
                <div className="intro-img-wrapper glass-panel">
                    <img src="/assets/images/lobby.png" alt="Diana Heights Landscape Sky Pool and Gardens" className="intro-img" />
                    <div className="intro-badge glass-panel">
                        <span className="intro-badge-num">10</span>
                        <span className="intro-badge-text">Minutes to CIAL Airport</span>
                    </div>
                </div>
                
                <div className="intro-text-content">
                    <span className="section-subtitle">Athithi Devo Bhava</span>
                    <h2 className="section-title" style={{'marginBottom': '2rem'}}>A Transcendent Oasis of Calm</h2>
                    <p>
                        Positioned near Cochin International Airport (CIAL) in Athani Nedumbassery, Diana Heights beautifully bridges the legendary warm hospitality of Kerala with international executive standards. Since our inception, we have curated a peaceful sanctuary away from airport rush.
                    </p>
                    <p>
                        Stroll along lush, palm-lined landscaped pathways, plunge into our grand turquoise outdoor swimming pool, or treat your senses to rejuvenating Ayurvedic therapies at our legendary Diana Hut Spa. Your perfect transition awaits.
                    </p>
                    
                    <div className="intro-features">
                        <div className="intro-feature-item">
                            <i className="fa-solid fa-plane-departure"></i>
                            <span>Complimentary Airport Shuttles</span>
                        </div>
                        <div className="intro-feature-item">
                            <i className="fa-solid fa-wifi"></i>
                            <span>Complimentary Ultra-Speed Wi-Fi</span>
                        </div>
                        <div className="intro-feature-item">
                            <i className="fa-solid fa-mug-hot"></i>
                            <span>Round-the-clock Gastronomy</span>
                        </div>
                        <div className="intro-feature-item">
                            <i className="fa-solid fa-spa"></i>
                            <span>Full-Service Wellness Spa</span>
                        </div>
                        <div className="intro-feature-item">
                            <i className="fa-solid fa-water-ladder"></i>
                            <span>Outdoor Sky Pool</span>
                        </div>
                        <div className="intro-feature-item">
                            <i className="fa-solid fa-dumbbell"></i>
                            <span>Modern Fitness Hub</span>
                        </div>
                    </div>

                    <a href="/about" className="btn btn-outline" style={{'marginTop': '2.5rem'}}>Our Heritage Story</a>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       DOUBLY UNIQUE COCHIN AIRPORT DEPARTURES BOARD
       ========================================================================== */}
    <section className="section section-airport" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container">
            <div className="airport-promo-grid animate-fade-in">
                <div>
                    <span className="section-subtitle">Airport Gateway Excellence</span>
                    <h2 className="section-title" style={{'marginBottom': '2rem'}}>Seamless High-Flyer Convenience</h2>
                    <p style={{'color': 'var(--text-secondary)', 'marginBottom': '1.5rem', 'fontWeight': '300'}}>
                        Whether flying in from London, Dubai, or Singapore, Diana Heights is designed to keep you seamlessly connected. We offer real-time flight departure matchboards, direct concierge desks, express fast-lane airport check-ins, and complimentary valet parking.
                    </p>
                    <p style={{'color': 'var(--text-secondary)', 'marginBottom': '2rem', 'fontWeight': '300'}}>
                        Indulge in a premium express lounge buffet or rest before your international flights. We adapt completely to your airline itineraries.
                    </p>
                    <a href="/contact" className="btn btn-primary">Connect with Concierge</a>
                </div>

                <div className="glass-panel animate-fade-in" style={{'padding': '1rem', 'borderRadius': 'var(--border-radius)', 'height': '100%', 'position': 'relative', 'minHeight': '400px'}}>
                    <div className="promo-carousel" style={{'width': '100%', 'height': '100%', 'position': 'absolute', 'top': '0', 'left': '0', 'padding': '1rem'}}>
                        <img src="/assets/images/P suite 02.png" alt="Presidential Suite" className="promo-slide active" />
                        <img src="/assets/images/suit 01.png" alt="Luxury Suite" className="promo-slide" />
                        <img src="/assets/images/Executive room 01.png" alt="Executive Room" className="promo-slide" />
                        <img src="/assets/images/pool 01.png" alt="Sky Pool" className="promo-slide" />
                        <img src="/assets/images/dining 03.png" alt="Fine Dining" className="promo-slide" />
                        <img src="/assets/images/BAR.png" alt="Executive Bar" className="promo-slide" />
                        <img src="/assets/images/gym 01.png" alt="Fitness Hub" className="promo-slide" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       ACCOMMODATION & SUITES TEASER
       ========================================================================== */}
    <section className="section section-rooms" style={{'backgroundColor': 'var(--bg-tertiary)'}}>
        <div className="container">
            <div className="section-title-wrap">
                <span className="section-subtitle">Exquisite Living Space</span>
                <h2 className="section-title">The Rooms & Luxury Suites</h2>
            </div>
            <div className="rooms-grid">
                {/* Presidential Suite Card */}
                <div className="room-card animate-fade-in">
                    <div className="room-card-img-wrap">
                        <img src="/assets/images/P suite 01.png" alt="Diana Heights Presidential Suite Accommodations" className="room-card-img" />
                        <span className="room-price-tag">From ₹12,000 / Night</span>
                    </div>
                    <div className="room-card-content">
                        <h3 className="room-card-title">Presidential Suite</h3>
                        <p className="room-card-desc">Our most exclusive and expansive luxury layout. Featuring a private dining area, separate living space, and unparalleled panoramic views.</p>
                        <div className="room-specs">
                            <div className="room-spec-item"><i className="fa-solid fa-expand"></i> 850 Sq Ft</div>
                            <div className="room-spec-item"><i className="fa-solid fa-bed"></i> Premium King</div>
                            <div className="room-spec-item"><i className="fa-solid fa-users"></i> Max 4</div>
                        </div>
                        <div className="room-card-footer">
                            <a href="/rooms" className="btn btn-outline" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Details</a>
                            <a href="/booking" className="btn btn-primary" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Reserve</a>
                        </div>
                    </div>
                </div>

                {/* Luxury Suite Card */}
                <div className="room-card animate-fade-in">
                    <div className="room-card-img-wrap">
                        <img src="/assets/images/suit 01.png" alt="Diana Heights Luxury Suite Accommodations" className="room-card-img" />
                        <span className="room-price-tag">From ₹7,500 / Night</span>
                    </div>
                    <div className="room-card-content">
                        <h3 className="room-card-title">Luxury Suite</h3>
                        <p className="room-card-desc">Premium leisure layout boasting large private sit-out balconies looking directly over our crystal outdoor swimming pool.</p>
                        <div className="room-specs">
                            <div className="room-spec-item"><i className="fa-solid fa-expand"></i> 350 Sq Ft</div>
                            <div className="room-spec-item"><i className="fa-solid fa-bed"></i> King Bed</div>
                            <div className="room-spec-item"><i className="fa-solid fa-users"></i> Max 3</div>
                        </div>
                        <div className="room-card-footer">
                            <a href="/rooms" className="btn btn-outline" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Details</a>
                            <a href="/booking" className="btn btn-primary" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Reserve</a>
                        </div>
                    </div>
                </div>

                {/* Executive Room Card */}
                <div className="room-card animate-fade-in">
                    <div className="room-card-img-wrap">
                        <img src="/assets/images/Executive room 01.png" alt="Diana Heights Executive Room Accommodations" className="room-card-img" />
                        <span className="room-price-tag">From ₹4,200 / Night</span>
                    </div>
                    <div className="room-card-content">
                        <h3 className="room-card-title">Executive Room</h3>
                        <p className="room-card-desc">Spacious and expansive business layout offering standard choices of double, king, or twin beds, paired with premium seating areas.</p>
                        <div className="room-specs">
                            <div className="room-spec-item"><i className="fa-solid fa-expand"></i> 400 Sq Ft</div>
                            <div className="room-spec-item"><i className="fa-solid fa-bed"></i> King/Twins</div>
                            <div className="room-spec-item"><i className="fa-solid fa-users"></i> Max 3</div>
                        </div>
                        <div className="room-card-footer">
                            <a href="/rooms" className="btn btn-outline" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Details</a>
                            <a href="/booking" className="btn btn-primary" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Reserve</a>
                        </div>
                    </div>
                </div>

                {/* Deluxe Room Card */}
                <div className="room-card animate-fade-in">
                    <div className="room-card-img-wrap">
                        <img src="/assets/images/deluxe room 01.png" alt="Diana Heights Deluxe Room Accommodations" className="room-card-img" />
                        <span className="room-price-tag">From ₹3,000 / Night</span>
                    </div>
                    <div className="room-card-content">
                        <h3 className="room-card-title">Deluxe Room</h3>
                        <p className="room-card-desc">Cozy corporate retreats blending ergonomic design, elegant wooden flooring, premium rain shower bath grids, and dynamic tech amenities.</p>
                        <div className="room-specs">
                            <div className="room-spec-item"><i className="fa-solid fa-expand"></i> 248 Sq Ft</div>
                            <div className="room-spec-item"><i className="fa-solid fa-bed"></i> Double Bed</div>
                            <div className="room-spec-item"><i className="fa-solid fa-users"></i> Max 2</div>
                        </div>
                        <div className="room-card-footer">
                            <a href="/rooms" className="btn btn-outline" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Details</a>
                            <a href="/booking" className="btn btn-primary" style={{'padding': '0.5rem 1.2rem', 'fontSize': '0.7rem'}}>Reserve</a>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{'textAlign': 'center', 'marginTop': '4rem'}}>
                <a href="/rooms" className="btn btn-primary">Compare All Categories</a>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       CURATED HIGHLIGHTS BANNERS
       ========================================================================== */}
    <section className="section section-highlights" style={{'backgroundColor': 'var(--bg-primary)', 'paddingTop': '2rem', 'paddingBottom': '0'}}>
        <div className="container">
            <div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(250px, 1fr))', 'gap': '1.5rem'}}>
                <div style={{'position': 'relative', 'borderRadius': '1rem', 'overflow': 'hidden', 'aspectRatio': '16/9'}} className="glass-panel">
                    <img src="/assets/images/pool 01.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover', 'filter': 'brightness(0.8)'}} alt="Sky Pool" />
                    <div style={{'position': 'absolute', 'bottom': '0', 'left': '0', 'width': '100%', 'padding': '1.5rem', 'background': 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'}}>
                        <h4 style={{'color': '#fff', 'fontSize': '1.25rem', 'fontWeight': '500', 'marginBottom': '0.25rem', 'fontFamily': 'var(--font-heading)'}}>Tranquil Oasis</h4>
                        <p style={{'color': 'rgba(255,255,255,0.75)', 'fontSize': '0.85rem', 'margin': '0'}}>Unwind at our signature sky pool at dusk.</p>
                    </div>
                </div>
                <div style={{'position': 'relative', 'borderRadius': '1rem', 'overflow': 'hidden', 'aspectRatio': '16/9'}} className="glass-panel">
                    <img src="/assets/images/dining 01.png" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover', 'filter': 'brightness(0.8)'}} alt="Gourmet Dining" />
                    <div style={{'position': 'absolute', 'bottom': '0', 'left': '0', 'width': '100%', 'padding': '1.5rem', 'background': 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'}}>
                        <h4 style={{'color': '#fff', 'fontSize': '1.25rem', 'fontWeight': '500', 'marginBottom': '0.25rem', 'fontFamily': 'var(--font-heading)'}}>Culinary Excellence</h4>
                        <p style={{'color': 'rgba(255,255,255,0.75)', 'fontSize': '0.85rem', 'margin': '0'}}>Authentic flavors crafted by master chefs.</p>
                    </div>
                </div>
                <div style={{'position': 'relative', 'borderRadius': '1rem', 'overflow': 'hidden', 'aspectRatio': '16/9'}} className="glass-panel">
                    <img src="/assets/images/spa.jpg" style={{'width': '100%', 'height': '100%', 'objectFit': 'cover', 'filter': 'brightness(0.8)'}} alt="Ayurvedic Spa" />
                    <div style={{'position': 'absolute', 'bottom': '0', 'left': '0', 'width': '100%', 'padding': '1.5rem', 'background': 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'}}>
                        <h4 style={{'color': '#fff', 'fontSize': '1.25rem', 'fontWeight': '500', 'marginBottom': '0.25rem', 'fontFamily': 'var(--font-heading)'}}>Ayurvedic Rejuvenation</h4>
                        <p style={{'color': 'rgba(255,255,255,0.75)', 'fontSize': '0.85rem', 'margin': '0'}}>Traditional therapies to restore your balance.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       PREMIUM GUEST REVIEWS (TESTIMONIALS SLIDER)
       ========================================================================== */}
    <section className="section section-testimonials" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container" style={{'maxWidth': '900px'}}>
            <div className="section-title-wrap" style={{'marginBottom': '2rem'}}>
                <span className="section-subtitle" style={{'fontSize': '0.75rem'}}>Whispers of Satisfaction</span>
                <h2 className="section-title" style={{'fontSize': '2rem'}}>Client Testimonials</h2>
            </div>

            <div className="testimonials-slider-wrap glass-panel animate-fade-in" style={{'padding': '2.5rem 1.5rem'}}>
                <div className="testimonials-slider" id="testimonials-slider">
                    <div className="testimonial-slide">
                        <p className="testimonial-quote" style={{'fontSize': '1.05rem', 'marginBottom': '1.5rem', 'fontStyle': 'italic'}}>"Extremely convenient location just 10 minutes from Cochin Airport. Perfect for a restful transit stay. The rooms were spotless and the complimentary airport shuttle was prompt. Highly recommend it!"</p>
                        <div className="testimonial-author">
                            <span className="author-name">David T.</span>
                            <span className="author-title">Google Review &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
                        </div>
                    </div>
                    <div className="testimonial-slide">
                        <p className="testimonial-quote" style={{'fontSize': '1.05rem', 'marginBottom': '1.5rem', 'fontStyle': 'italic'}}>"The dining experience was outstanding. The Free Zone café serves authentic Kerala cuisine and a fantastic breakfast buffet. The hospitality of the staff made our stay truly memorable."</p>
                        <div className="testimonial-author">
                            <span className="author-name">Priya S.</span>
                            <span className="author-title">Google Review &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
                        </div>
                    </div>
                    <div className="testimonial-slide">
                        <p className="testimonial-quote" style={{'fontSize': '1.05rem', 'marginBottom': '1.5rem', 'fontStyle': 'italic'}}>"A wonderful 5-star experience. We loved the swimming pool and the fitness center. The perfect place to relax before catching an international flight. Will definitely return."</p>
                        <div className="testimonial-author">
                            <span className="author-name">Michael R.</span>
                            <span className="author-title">Google Review &#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span>
                        </div>
                    </div>
                </div>
                
                <div className="slider-controls" style={{'marginTop': '1.5rem'}}>
                    <button className="slider-arrow" id="slider-prev" aria-label="Previous review"><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="slider-arrow" id="slider-next" aria-label="Next review"><i className="fa-solid fa-arrow-right"></i></button>
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
