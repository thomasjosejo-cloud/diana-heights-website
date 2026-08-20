"use client";
import { useState } from 'react';
import Link from 'next/link';

const galleryItems = [
    { src: '/assets/images/diana.png', title: 'Hotel Facade & Grounds', category: 'exterior' },
    { src: '/assets/images/pool 01.png', title: 'Outdoor Sky Pool', category: 'facilities' },
    { src: '/assets/images/pool 02.png', title: 'Poolside Greenery', category: 'facilities' },
    { src: '/assets/images/P suite 01.png', title: 'Presidential Suite Master', category: 'rooms' },
    { src: '/assets/images/P suite 02.png', title: 'Presidential Suite Living', category: 'rooms' },
    { src: '/assets/images/suit 01.png', title: 'Luxury Suite', category: 'rooms' },
    { src: '/assets/images/Executive room 01.png', title: 'Executive Room Workstation', category: 'rooms' },
    { src: '/assets/images/deluxe room 01.png', title: 'Deluxe Room Bedding', category: 'rooms' },
    { src: '/assets/images/dining 01.png', title: 'Free Zone Café Dining', category: 'dining' },
    { src: '/assets/images/aero cafe.png', title: 'Aero Café Specialty Dining', category: 'dining' },
    { src: '/assets/images/BAR.png', title: 'Executive Lounge & Bar', category: 'dining' },
    { src: '/assets/images/spa.jpg', title: 'Diana Ira Spa Ayurvedic Wellness', category: 'facilities' },
    { src: '/assets/images/gym 01.png', title: 'Modern Fitness Center', category: 'facilities' },
    { src: '/assets/images/banquet 01.png', title: 'Runway Hall Conference Layout', category: 'events' },
    { src: '/assets/images/lobby.png', title: 'Main Welcome Lobby', category: 'exterior' }
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeImage, setActiveImage] = useState(null);

    const filteredItems = selectedCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Gallery Hero */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">VISUAL EXPERIENCES</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Photo Gallery
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Take a visual tour through our rooms, restaurants, pool, spa, and banquet venues near Cochin International Airport.
                    </p>
                </div>
            </section>

            {/* Category Filter Tabs */}
            <section style={{ padding: '3rem 0 1rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {[
                            { label: 'All Photos', value: 'all' },
                            { label: 'Rooms & Suites', value: 'rooms' },
                            { label: 'Dining', value: 'dining' },
                            { label: 'Pool & Wellness', value: 'facilities' },
                            { label: 'Events & MICE', value: 'events' },
                            { label: 'Exterior & Lobby', value: 'exterior' }
                        ].map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setSelectedCategory(tab.value)}
                                className="btn"
                                style={{
                                    padding: '0.65rem 1.4rem',
                                    fontSize: '0.75rem',
                                    backgroundColor: selectedCategory === tab.value ? 'var(--brass)' : 'var(--paper)',
                                    color: selectedCategory === tab.value ? '#ffffff' : 'var(--ink)',
                                    borderColor: selectedCategory === tab.value ? 'var(--brass)' : 'var(--line)'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: '2rem 0 var(--section-y)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveImage(item)}
                                style={{
                                    position: 'relative',
                                    height: '260px',
                                    borderRadius: 'var(--border-radius)',
                                    overflow: 'hidden',
                                    backgroundColor: 'var(--ink)',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(22,20,15,0.06)',
                                    border: '1px solid var(--line)'
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1rem', background: 'linear-gradient(to top, rgba(22,20,15,0.9), transparent)', color: '#ffffff' }}>
                                    <div style={{ fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {activeImage && (
                <div
                    onClick={() => setActiveImage(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(22, 20, 15, 0.95)',
                        zIndex: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                >
                    <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setActiveImage(null)}
                            style={{ position: 'absolute', top: '-40px', right: 0, color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer' }}
                        >
                            &times; Close
                        </button>
                        <img
                            src={activeImage.src}
                            alt={activeImage.title}
                            style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: 'var(--border-radius)' }}
                        />
                        <div style={{ textAlign: 'center', color: '#ffffff', marginTop: '1rem', fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
                            {activeImage.title}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
