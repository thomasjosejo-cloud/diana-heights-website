import Link from 'next/link';

export default function Page() {
    return (
        <main>
            {/* ==========================================================================
       FACILITIES HERO BANNER
       ========================================================================== */}
    <section className="hero" style={{'minHeight': '50vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
        <div className="hero-bg">
            <img src="/assets/images/pool 02.png" alt="Diana Heights Executive Business Facilities" />
        </div>
        <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '4rem'}}>
            <div className="hero-content animate-fade-in visible">
                <h1 className="hero-title" style={{'fontSize': '3rem', 'marginBottom': '0'}}>Executive Facilities</h1>
                <p className="hero-description" style={{'marginTop': '0.5rem', 'marginBottom': '0'}}>Premium corporate amenities, swift transit dining, and wellness solutions designed for the modern executive.</p>
            </div>
        </div>
    </section>

    {/* ==========================================================================
       FACILITIES GRID DETAILS
       ========================================================================== */}
    <section className="section section-facilities-detail" style={{'backgroundColor': 'var(--bg-primary)'}}>
        <div className="container">
            <div className="section-title-wrap">
                <span className="section-subtitle">Business & Leisure</span>
                <h2 className="section-title">The Diana Heights Experience</h2>
            </div>

                        {/* Aero Cafe */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/aero cafe.png" alt="Diana Heights Aero Cafe" className="facility-img" />
                </div>
                <div className="facility-desc">
                    <span className="facility-tag">Premium Transit Cafe</span>
                    <h3>The Aero Café</h3>
                    <p>
                        Designed for the dynamic traveler, the Aero Café offers a rapid yet luxurious dining experience. Enjoy artisanal roasted coffees, gourmet European pastries, and elegant light bites in a sophisticated, fast-paced setting perfectly suited for pre-flight relaxation or casual corporate catch-ups.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Artisanal Coffee</span>
                            <span className="facility-hl-desc">Expertly brewed blends</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Gourmet Bites</span>
                            <span className="facility-hl-desc">European pastries & snacks</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Free Zone Restaurant */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-desc">
                    <span className="facility-tag">Fine Dining Gastronomy</span>
                    <h3>Free Zone Restaurant</h3>
                    <p>
                        Immerse yourself in authentic culinary excellence. The Free Zone Restaurant serves an expansive menu featuring legendary Kerala delicacies, rich North Indian curries, and lavish international buffets. Open 24/7, it’s the ultimate destination for formal dining and midnight transit cravings alike.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">24/7 Operations</span>
                            <span className="facility-hl-desc">Always ready for transit arrivals</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Global & Local</span>
                            <span className="facility-hl-desc">Authentic Indian & Continental</span>
                        </div>
                    </div>
                </div>
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/dining 01.png" alt="Diana Heights Free Zone Restaurant" className="facility-img" />
                </div>
            </div>

            {/* The Executive Bar */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/BAR.png" alt="Diana Heights Executive Bar" className="facility-img" />
                </div>
                <div className="facility-desc">
                    <span className="facility-tag">Relaxed Elegance</span>
                    <h3>The Executive Bar</h3>
                    <p>
                        Unwind after a long flight or a day of meetings in our ambient, warmly lit lounge. The Executive Bar features a meticulously curated selection of premium international spirits, signature handcrafted cocktails, and a relaxing atmosphere designed for pure evening indulgence.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Premium Spirits</span>
                            <span className="facility-hl-desc">Curated international selection</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Ambient Lounge</span>
                            <span className="facility-hl-desc">Perfect for evening relaxation</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diana Hut Spa */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-desc">
                    <span className="facility-tag">Ayurvedic Rejuvenation</span>
                    <h3>Diana Hut Spa</h3>
                    <p>
                        A serene sanctuary committed to traditional Indian wellness. Our therapists guide you through customized Abhyanga warm herbal oil massages and Shirodhara relaxation therapies designed to combat flight fatigue, restore muscle tone, and calm the mind. Includes modern aroma steam chamber treatments.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Ayurvedic Healing</span>
                            <span className="facility-hl-desc">Authentic oil therapies</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Professional Therapists</span>
                            <span className="facility-hl-desc">Certified wellness consultants</span>
                        </div>
                    </div>
                </div>
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/spa.jpg" alt="Diana Heights Diana Hut Spa Ayurvedic treatments" className="facility-img" />
                </div>
            </div>

            {/* Modern Fitness Center */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/gym 01.png" alt="Diana Heights Fitness Center" className="facility-img" />
                </div>
                <div className="facility-desc">
                    <span className="facility-tag">Active Lifestyle</span>
                    <h3>Modern Fitness Hub</h3>
                    <p>
                        Maintain your wellness routine while traveling. Our state-of-the-art fitness center is fully equipped with premium cardio machinery, heavy free weights, and dedicated stretching zones, ensuring you have everything needed for a rigorous, full-body workout.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Premium Cardio</span>
                            <span className="facility-hl-desc">Advanced treadmill machinery</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Strength Training</span>
                            <span className="facility-hl-desc">Comprehensive free weights</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Outdoor Sky Pool */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-desc">
                    <span className="facility-tag">Tropical Recreation</span>
                    <h3>Outdoor Sky Pool</h3>
                    <p>
                        Step out into our gorgeous, landscaped outdoor swimming pool. Flanked by luxury green tropical palms and peaceful lounging areas, the pristine turquoise waters offer a refreshing escape from the tropical heat or a peaceful spot to relax under the sky.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Landscaped Pool</span>
                            <span className="facility-hl-desc">Pristine turquoise water</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Tropical Lounge</span>
                            <span className="facility-hl-desc">Relaxing sunbed seating</span>
                        </div>
                    </div>
                </div>
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/pool 01.png" alt="Diana Heights Outdoor Swimming Pool" className="facility-img" />
                </div>
            </div>

            {/* Runway Banquet Hall */}
            <div className="facility-panel animate-fade-in">
                <div className="facility-img-wrap glass-panel">
                    <img src="/assets/images/banquet 01.png" alt="Diana Heights Runway Hall event layouts" className="facility-img" />
                </div>
                <div className="facility-desc">
                    <span className="facility-tag">Executive Conventions</span>
                    <h3>The Runway Hall</h3>
                    <p>
                        The ultimate choice for corporate board meetings, international summits, or magical family wedding banquets. Runway Hall accommodates up to 100+ delegates in premium seating configurations. Equipped with pristine acoustic surround sound, ultra-crisp laser projectors, and custom catering.
                    </p>
                    <div className="facility-highlights">
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">100+ Delegates</span>
                            <span className="facility-hl-desc">Flexible layouts for events</span>
                        </div>
                        <div className="facility-highlight-item">
                            <span className="facility-hl-title">Modern AV Setup</span>
                            <span className="facility-hl-desc">Laser projection & sound arrays</span>
                        </div>
                    </div>
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
