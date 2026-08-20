"use client";
import { useState } from 'react';
import Link from 'next/link';

const galleryItems = [
    { src: '/assets/images/diana.png', title: 'Hotel Facade & Grounds', category: 'exterior' },
    { src: '/assets/images/pool 01.png', title: 'Outdoor Swimming Pool', category: 'facilities' },
    { src: '/assets/images/pool 02.png', title: 'Poolside Greenery', category: 'facilities' },
    { src: '/assets/images/P suite 01.png', title: 'Presidential Suite Master', category: 'rooms' },
    { src: '/assets/images/P suite 02.png', title: 'Presidential Suite Living', category: 'rooms' },
    { src: '/assets/images/suit 01.png', title: 'Luxury Suite', category: 'rooms' },
    { src: '/assets/images/Executive room 01.png', title: 'Executive Room Workstation', category: 'rooms' },
    { src: '/assets/images/deluxe room 01.png', title: 'Deluxe Room Bedding', category: 'rooms' },
    { src: '/assets/images/dining 01.png', title: 'Flavours Multi-Cuisine Restaurant', category: 'dining' },
    { src: '/assets/images/aero cafe.png', title: 'Aero Cafe Speciality Dining', category: 'dining' },
    { src: '/assets/images/BAR.png', title: 'Business Lounge & Boardroom', category: 'events' },
    { src: '/assets/images/spa.jpg', title: 'Diana Ira Spa Ayurvedic Wellness', category: 'facilities' },
    { src: '/assets/images/gym 01.png', title: 'Health Club & Gym', category: 'facilities' },
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
        <main style={{ backgroundColor: 'var(--surface-light)', paddingTop: '90px' }}>
            {/* Gallery Hero */}
            <section style={{ backgroundColor: 'var(--sapphire-950)', color: '#ffffff', padding: '5.5rem 0 3.5rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">VISUAL EXPERIENCES</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', marginBottom: '0.85rem', color: '#ffffff' }}>
                        Photo Gallery
                    </h1>
                    <p style={{ color: '#CBD5E1', maxWidth: '620px', margin: '0 auto', fontSize: '1rem', fontWeight: '300' }}>
                        Take a visual tour through our rooms, restaurants, swimming pool, Diana Ira Spa, and banquet venues near Cochin International Airport.
                    </p>
                </div>
            </section>

            {/* Category Filter Tabs */}
            <section style={{ padding: '2.5rem 0 1rem' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                        {[
                            { label: 'All Photos', value: 'all' },
                            { label: 'Rooms & Suites', value: 'rooms' },
                            { label: 'Dining (Flavours & Aero)', value: 'dining' },
                            { label: 'Pool & Wellness', value: 'facilities' },
                            { label: 'Events & MICE', value: 'events' },
                            { label: 'Exterior & Lobby', value: 'exterior' }
                        ].map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setSelectedCategory(tab.value)}
                                className="btn"
                                style={{
                                    padding: '0.6rem 1.35rem',
                                    fontSize: '0.75rem',
                                    backgroundColor: selectedCategory === tab.value ? 'var(--gold)' : 'var(--surface-pure)',
                                    color: selectedCategory === tab.value ? '#ffffff' : 'var(--text-primary)',
                                    borderColor: selectedCategory === tab.value ? 'var(--gold)' : 'var(--line-light)',
                                    boxShadow: selectedCategory === tab.value ? '0 4px 15px var(--gold-glow)' : 'var(--shadow-sm)'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: '2rem 0 6rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveImage(item)}
                                style={{
                                    height: '260px',
                                    position: 'relative',
                                    borderRadius: 'var(--radius-md)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    backgroundColor: 'var(--sapphire-950)',
                                    boxShadow: 'var(--shadow-sm)',
                                    border: '1px solid var(--line-light)'
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '1.25rem',
                                        background: 'linear-gradient(to top, rgba(7, 13, 24, 0.9) 0%, transparent 100%)',
                                        color: '#ffffff',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    {item.title}
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
                        backgroundColor: 'rgba(7, 13, 24, 0.95)',
                        zIndex: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '900px',
                            maxHeight: '85vh',
                            position: 'relative',
                            backgroundColor: 'var(--sapphire-950)',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            border: '1px solid var(--line-gold)'
                        }}
                    >
                        <img
                            src={activeImage.src}
                            alt={activeImage.title}
                            style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain' }}
                        />
                        <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff' }}>
                            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{activeImage.title}</span>
                            <button
                                onClick={() => setActiveImage(null)}
                                style={{ color: 'var(--gold-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}
                            >
                                Close &times;
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
