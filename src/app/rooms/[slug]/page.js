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
        <main style={{ backgroundColor: 'var(--surface-light)', minHeight: '100vh', paddingTop: '90px' }}>
            {/* Room Hero */}
            <section style={{ position: 'relative', height: '58vh', minHeight: '420px', backgroundColor: 'var(--sapphire-950)', overflow: 'hidden' }}>
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
                        background: 'linear-gradient(to top, rgba(7,13,24,0.96) 0%, rgba(11,21,38,0.5) 60%, transparent 100%)' 
                    }} 
                />

                <div className="container" style={{ position: 'relative', zIndex: 5, height: '100%', display: 'flex', alignItems: 'flex-end', paddingBottom: '3.25rem' }}>
                    <div>
                        <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '0.65rem', alignItems: 'center' }}>
                            <span className="status-pill" style={{ color: '#ffffff', borderColor: 'var(--gold)' }}>
                                <span className="status-dot"></span>
                                {room.areaSqFt}
                            </span>
                            <span style={{ color: 'rgba(255,255,255,0.4)' }}>&bull;</span>
                            <span style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#CBD5E1', fontWeight: '600' }}>
                                {room.sleeps}
                            </span>
                        </div>
                        <h1 className="font-serif" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.8rem)', color: '#ffffff', marginBottom: '0.45rem' }}>
                            {room.name}
                        </h1>
                        <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '620px', fontWeight: '300' }}>
                            {room.tagline}
                        </p>
                    </div>
                </div>
            </section>

            {/* Room Details & Booking Grid */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div className="grid-2-col-content ratio-main-sidebar">
                        {/* Left: Overview, Features, Gallery */}
                        <div className="reveal reveal-left">
                            <span className="eyebrow">ROOM SPECIFICATIONS</span>
                            <h2 className="font-serif" style={{ fontSize: '2.1rem', marginBottom: '1.35rem', color: 'var(--sapphire-950)' }}>
                                Generous space. Complete comfort.
                            </h2>
                            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '2.25rem' }}>
                                {room.longDescription}
                            </p>

                            {/* Key Facts Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', borderTop: '1px solid var(--line-light)', borderBottom: '1px solid var(--line-light)', padding: '1.5rem 0', marginBottom: '2.5rem' }}>
                                <div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                        Room Size
                                    </div>
                                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--sapphire-950)' }}>
                                        {room.areaSqFt}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                        Bed Type
                                    </div>
                                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--sapphire-950)' }}>
                                        {room.bedType}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.725rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                                        Max Occupancy
                                    </div>
                                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--sapphire-950)' }}>
                                        {room.sleeps}
                                    </div>
                                </div>
                            </div>

                            {/* Room Features */}
                            <div style={{ marginBottom: '2.75rem' }}>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '1.15rem', color: 'var(--sapphire-950)' }}>
                                    Room Highlights
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.85rem' }}>
                                    {room.features.map((feature, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <i className="fa-solid fa-check" style={{ color: 'var(--gold)', fontSize: '0.75rem' }}></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* In-Room Amenities */}
                            <div style={{ marginBottom: '2.75rem' }}>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '1.15rem', color: 'var(--sapphire-950)' }}>
                                    Complimentary Inclusions
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '0.85rem' }}>
                                    {room.amenities.map((amenity, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            <i className="fa-solid fa-star" style={{ color: 'var(--gold)', fontSize: '0.725rem' }}></i>
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gallery Preview */}
                            <div>
                                <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '1.15rem', color: 'var(--sapphire-950)' }}>
                                    Room Photography
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                    {room.gallery.map((img, i) => (
                                        <div key={i} style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '170px', backgroundColor: 'var(--sapphire-950)', border: '1px solid var(--line-light)' }}>
                                            <img src={img} alt={`${room.name} view ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Direct Reservation Card */}
                        <div className="reveal reveal-right delay-1" style={{ position: 'sticky', top: '105px' }}>
                            <div style={{ backgroundColor: 'var(--surface-pure)', border: '1px solid var(--line-light)', borderRadius: 'var(--radius-lg)', padding: '2.25rem', boxShadow: 'var(--shadow-sm)' }}>
                                <span className="eyebrow">DIRECT RESERVATION</span>
                                <h3 className="font-serif" style={{ fontSize: '1.75rem', marginBottom: '0.45rem', color: 'var(--sapphire-950)' }}>
                                    Reserve {room.name}
                                </h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    Book directly with our 24-hour front desk to receive the guaranteed direct rate, flexible check-in matching, and no OTA booking fees.
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                                    <a
                                        href={whatsappRoomLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-gold"
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        Inquire via WhatsApp
                                    </a>

                                    <a
                                        href={`tel:${HOTEL_PHONE}`}
                                        className="btn btn-outline-dark"
                                        style={{ width: '100%', textAlign: 'center' }}
                                    >
                                        Call Front Desk
                                    </a>
                                </div>

                                <div style={{ marginTop: '1.75rem', paddingTop: '1.35rem', borderTop: '1px solid var(--line-light)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.45rem', color: 'var(--sapphire-950)', fontWeight: '600' }}>
                                        <i className="fa-solid fa-shield-halved" style={{ color: 'var(--gold)' }}></i> Direct Booking Benefits
                                    </div>
                                    • Best Direct Rate Guarantee &bull; 24-Hour Confirmation &bull; 10 Mins to Cochin Airport &bull; Free High-Speed WiFi
                                </div>
                            </div>

                            {/* Back link */}
                            <div style={{ marginTop: '1.35rem', textAlign: 'center' }}>
                                <Link href="/rooms" className="link-gold">
                                    &larr; View All Four Room Categories
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
