import Link from 'next/link';
import { notFound } from 'next/navigation';
import { roomsData, getRoomBySlug } from '@/content/rooms';
import { buildWhatsAppLink, HOTEL_PHONE } from '@/lib/whatsapp';

export function generateStaticParams() {
    return roomsData.map((room) => ({
        slug: room.slug,
    }));
}

export default async function RoomDetailPage({ params }) {
    const { slug } = await params;
    const room = getRoomBySlug(slug);

    if (!room) {
        notFound();
    }

    const whatsappRoomLink = buildWhatsAppLink({
        type: 'room',
        roomName: room.name
    });

    return (
        <main style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh', paddingTop: '90px' }}>
            {/* Room Hero */}
            <section style={{ position: 'relative', height: '60vh', minHeight: '440px', backgroundColor: 'var(--ink)', overflow: 'hidden' }}>
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        backgroundImage: `url('${room.image}')`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center',
                        filter: 'brightness(0.85)'
                    }} 
                />
                <div 
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        background: 'linear-gradient(to top, rgba(22,20,15,0.95) 0%, rgba(22,20,15,0.4) 60%, transparent 100%)' 
                    }} 
                />

                <div className="container" style={{ position: 'relative', zIndex: 5, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '3.5rem' }}>
                    <div>
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brass)', fontWeight: '600' }}>
                                {room.sizeQualitative}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.4)' }}>&bull;</span>
                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--stone-300)' }}>
                                {room.sleeps}
                            </span>
                        </div>
                        <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
                            {room.name}
                        </h1>
                        <p style={{ color: 'var(--stone-300)', fontSize: '1.1rem', maxWidth: '650px', fontWeight: '300' }}>
                            {room.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Room Details & Booking Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'start' }}>
                        {/* Left: Overview, Features, Gallery */}
                        <div>
                            <span className="eyebrow">ROOM OVERVIEW</span>
                            <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>
                                Generous space. Complete comfort.
                            </h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--stone-700)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                                {room.longDescription}
                            </p>

                            {/* Key Facts Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '1.75rem 0', marginBottom: '3rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                        Bed Configuration
                                    </div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ink)' }}>
                                        {room.bedType}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--stone-500)', marginBottom: '0.25rem' }}>
                                        Max Occupancy
                                    </div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--ink)' }}>
                                        {room.sleeps}
                                    </div>
                                </div>
                            </div>

                            {/* Room Features */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--ink)' }}>
                                    Room Highlights
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                                    {room.features.map((feature, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--stone-700)' }}>
                                            <i className="fa-solid fa-check" style={{ color: 'var(--brass)', fontSize: '0.85rem' }}></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* In-Room Amenities */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--ink)' }}>
                                    Complimentary Amenities
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                                    {room.amenities.map((amenity, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--stone-700)' }}>
                                            <i className="fa-solid fa-star" style={{ color: 'var(--brass)', fontSize: '0.75rem' }}></i>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery Preview */}
                            <div>
                                <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1.25rem', color: 'var(--ink)' }}>
                                    Room Photography
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                                    {room.gallery.map((img, i) => (
                                        <div key={i} style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '180px', backgroundColor: 'var(--ink)' }}>
                                            <img src={img} alt={`${room.name} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Direct Reservation Card */}
                        <div style={{ position: 'sticky', top: '110px' }}>
                            <div style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', boxShadow: '0 10px 30px rgba(22,20,15,0.05)' }}>
                                <span className="eyebrow">DIRECT BOOKING</span>
                                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                                    Reserve {room.name}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--stone-700)', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                                    Book directly with our 24-hour reservations desk to receive the guaranteed best direct rate, flexible check-in matching, and no third-party booking fees.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <a
                                        href={whatsappRoomLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-brass"
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        Inquire via WhatsApp
                                    </a>

                                    <a
                                        href={`tel:${HOTEL_PHONE}`}
                                        className="btn btn-outline-dark"
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        Call Reservations Desk
                                    </a>
                                </div>

                                <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line)', fontSize: '0.8rem', color: 'var(--stone-500)', lineHeight: '1.6' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--ink)', fontWeight: '600' }}>
                                        <i className="fa-solid fa-shield-halved" style={{ color: 'var(--brass)' }}></i> Direct Booking Benefits
                                    </div>
                                    • Guaranteed best rate &bull; 24-Hour Front Desk confirmation &bull; 10 minutes to Cochin Airport &bull; Free high-speed Wi-Fi
                                </div>
                            </div>

                            {/* Back to all rooms link */}
                            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                <Link href="/rooms" className="link-brass">
                                    &larr; View All Four Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
