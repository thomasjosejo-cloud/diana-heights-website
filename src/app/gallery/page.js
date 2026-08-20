"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (src) => {
        setLightboxImage(src);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const isVisible = (category) => {
        return activeFilter === 'all' || activeFilter === category;
    };

    return (
        <main>
            {/* ==========================================================================
               GALLERY HERO BANNER
               ========================================================================== */}
            <section className="hero" style={{'minHeight': '50vh', 'padding': '6rem 0', 'display': 'flex', 'alignItems': 'center'}}>
                <div className="hero-bg">
                    <img src="/assets/images/dining 01.png" alt="Diana Heights gourmet culinary dishes gallery banner" />
                </div>
                <div className="container" style={{'position': 'relative', 'zIndex': '5', 'height': '100%', 'display': 'flex', 'alignItems': 'flex-end', 'paddingBottom': '4rem'}}>
                    <div className="hero-content animate-fade-in visible">
                        <h1 className="hero-title" style={{'fontSize': '3rem', 'marginBottom': '0'}}>Photo Gallery</h1>
                        <p className="hero-description" style={{'marginTop': '0.5rem', 'marginBottom': '0'}}>Explore the elegant spaces and wellness sanctuaries of our property.</p>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               FILTERABLE PHOTO GRID
               ========================================================================== */}
            <section className="section section-gallery" style={{'backgroundColor': 'var(--bg-primary)'}}>
                <div className="container">
                    {/* Filter Categories */}
                    <div className="gallery-filters animate-fade-in">
                        <button className={`gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All Photos</button>
                        <button className={`gallery-filter-btn ${activeFilter === 'accommodations' ? 'active' : ''}`} onClick={() => setActiveFilter('accommodations')}>Accommodations</button>
                        <button className={`gallery-filter-btn ${activeFilter === 'culinary' ? 'active' : ''}`} onClick={() => setActiveFilter('culinary')}>Culinary</button>
                        <button className={`gallery-filter-btn ${activeFilter === 'events' ? 'active' : ''}`} onClick={() => setActiveFilter('events')}>Conventions</button>
                        <button className={`gallery-filter-btn ${activeFilter === 'rejuvenation' ? 'active' : ''}`} onClick={() => setActiveFilter('rejuvenation')}>Wellness & Pool</button>
                    </div>

                    {/* Photos Grid */}
                    <div className="gallery-grid animate-fade-in">
                        {/* Accommodations */}
                        <div className="gallery-item glass-panel" style={{ display: isVisible('accommodations') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/deluxe room 01.png')}>
                            <img src="/assets/images/deluxe room 01.png" alt="Deluxe Room" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Deluxe Room</span>
                                <span className="gallery-overlay-tag">Accommodations</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('accommodations') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/Executive room 01.png')}>
                            <img src="/assets/images/Executive room 01.png" alt="Executive Room" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Executive Room</span>
                                <span className="gallery-overlay-tag">Accommodations</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('accommodations') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/room 08.png')}>
                            <img src="/assets/images/room 08.png" alt="Suite Living Area" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Suite Living Area</span>
                                <span className="gallery-overlay-tag">Accommodations</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('accommodations') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/suit 01.png')}>
                            <img src="/assets/images/suit 01.png" alt="Luxury Suite" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Luxury Suite</span>
                                <span className="gallery-overlay-tag">Accommodations</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('accommodations') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/P suite 01.png')}>
                            <img src="/assets/images/P suite 01.png" alt="Presidential Suite" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Presidential Suite</span>
                                <span className="gallery-overlay-tag">Accommodations</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('accommodations') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/washroom 01.png')}>
                            <img src="/assets/images/washroom 01.png" alt="Presidential Jacuzzi" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Presidential Jacuzzi</span>
                                <span className="gallery-overlay-tag">Accommodations</span>
                            </div>
                        </div>

                        {/* Culinary */}
                        <div className="gallery-item glass-panel" style={{ display: isVisible('culinary') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/dining 01.png')}>
                            <img src="/assets/images/dining 01.png" alt="Aero Cafe Dining" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Aero Café Dining</span>
                                <span className="gallery-overlay-tag">Culinary</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('culinary') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/dining 02.png')}>
                            <img src="/assets/images/dining 02.png" alt="Fine Dining" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Fine Dining Setup</span>
                                <span className="gallery-overlay-tag">Culinary</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('culinary') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/dining 03.png')}>
                            <img src="/assets/images/dining 03.png" alt="Restaurant Interior" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Restaurant Interior</span>
                                <span className="gallery-overlay-tag">Culinary</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('culinary') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/dining 04.png')}>
                            <img src="/assets/images/dining 04.png" alt="Gourmet Dishes" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Gourmet Dishes</span>
                                <span className="gallery-overlay-tag">Culinary</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('culinary') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/BAR.png')}>
                            <img src="/assets/images/BAR.png" alt="Bar Setup" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Lounge Bar</span>
                                <span className="gallery-overlay-tag">Culinary</span>
                            </div>
                        </div>

                        {/* Events */}
                        <div className="gallery-item glass-panel" style={{ display: isVisible('events') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/banquet 01.png')}>
                            <img src="/assets/images/banquet 01.png" alt="Runway Banquet Hall" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Runway Banquet Hall</span>
                                <span className="gallery-overlay-tag">Conventions</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('events') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/banquet 02.png')}>
                            <img src="/assets/images/banquet 02.png" alt="Executive Boardroom" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Executive Boardroom</span>
                                <span className="gallery-overlay-tag">Conventions</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('events') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/banquet 03.png')}>
                            <img src="/assets/images/banquet 03.png" alt="Conference Layout" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Conference Layout</span>
                                <span className="gallery-overlay-tag">Conventions</span>
                            </div>
                        </div>

                        {/* Rejuvenation (Wellness & Pool) */}
                        <div className="gallery-item glass-panel" style={{ display: isVisible('rejuvenation') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/spa.jpg')}>
                            <img src="/assets/images/spa.jpg" alt="Diana Hut Spa" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Diana Hut Spa</span>
                                <span className="gallery-overlay-tag">Wellness</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('rejuvenation') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/pool 01.png')}>
                            <img src="/assets/images/pool 01.png" alt="Sky Swimming Pool" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Sky Swimming Pool</span>
                                <span className="gallery-overlay-tag">Pool</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('rejuvenation') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/pool 02.png')}>
                            <img src="/assets/images/pool 02.png" alt="Outdoor Pool Lounge" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Outdoor Pool Lounge</span>
                                <span className="gallery-overlay-tag">Pool</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('rejuvenation') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/gym 01.png')}>
                            <img src="/assets/images/gym 01.png" alt="Fitness Center Cardio" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Fitness Center - Cardio</span>
                                <span className="gallery-overlay-tag">Gym</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('rejuvenation') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/gym 02.png')}>
                            <img src="/assets/images/gym 02.png" alt="Fitness Center Weights" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Fitness Center - Weights</span>
                                <span className="gallery-overlay-tag">Gym</span>
                            </div>
                        </div>
                        <div className="gallery-item glass-panel" style={{ display: isVisible('rejuvenation') ? 'block' : 'none' }} onClick={() => openLightbox('/assets/images/gym 03.png')}>
                            <img src="/assets/images/gym 03.png" alt="Fitness Center Layout" />
                            <div className="gallery-item-overlay">
                                <span className="gallery-overlay-title">Fitness Center - Layout</span>
                                <span className="gallery-overlay-tag">Gym</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==========================================================================
               LIGHTBOX INTEGRATED POPUP MODAL (SHARED)
               ========================================================================== */}
            <div id="lightbox" className="lightbox" style={{ display: lightboxImage ? 'flex' : 'none' }} onClick={closeLightbox}>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    <span id="lightbox-close" className="lightbox-close" onClick={closeLightbox}>&times;</span>
                    {lightboxImage && <img id="lightbox-img" className="lightbox-img" src={lightboxImage} alt="Full Screen Lightbox View" />}
                </div>
            </div>
        </main>
    );
}
