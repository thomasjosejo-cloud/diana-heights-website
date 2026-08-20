import Link from 'next/link';
import { roomsData } from '@/content/rooms';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const metadata = {
    title: 'Rooms & Suites · Diana Heights Hotel Cochin Airport',
    description: 'Explore the 4 rooms and suites at Diana Heights, 10 minutes from Cochin International Airport. Presidential Suite, Luxury Suite, Executive Room, and Deluxe Room.'
};

export default function RoomsPage() {
    return (
        <main style={{ backgroundColor: 'var(--ivory)', paddingTop: '90px' }}>
            {/* Header Banner */}
            <section style={{ backgroundColor: 'var(--ink)', color: '#ffffff', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <span className="eyebrow eyebrow-dark">ACCOMMODATIONS</span>
                    <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff' }}>
                        Four rooms. One address.
                    </h1>
                    <p style={{ color: 'var(--stone-300)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', fontWeight: '300' }}>
                        Generous space, thoughtful comfort, and quiet transit rest just ten minutes from Cochin International Airport.
                    </p>
                </div>
            </section>

            {/* Rooms List */}
            <section style={{ padding: 'var(--section-y) 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
                        {roomsData.map((room, index) => {
                            const isEven = index % 2 === 1;
                            const whatsappRoomLink = buildWhatsAppLink({
                                type: 'room',
                                roomName: room.name
                            });

                            return (
                                <div 
                                    key={room.slug}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: isEven ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                                        gap: '3.5rem',
                                        alignItems: 'center',
                                        backgroundColor: 'var(--paper)',
                                        border: '1px solid var(--line)',
                                        borderRadius: 'var(--border-radius)',
                                        overflow: 'hidden',
                                        padding: '2.5rem'
                                    }}
                                >
                                    {/* Image Column */}
                                    <div style={{ order: isEven ? 2 : 1, height: '420px', position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', backgroundColor: 'var(--ink)' }}>
                                        <img 
                                            src={room.image} 
                                            alt={room.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        />
                                    </div>

                                    {/* Content Column */}
                                    <div style={{ order: isEven ? 1 : 2 }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--brass)', fontWeight: '600' }}>
                                                {room.sizeQualitative}
                                            </span>
                                            <span style={{ color: 'var(--line)' }}>&bull;</span>
                                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--stone-500)' }}>
                                                {room.sleeps}
                                            </span>
                                        </div>

                                        <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>
                                            {room.name}
                                        </h2>

                                        <p style={{ color: 'var(--stone-700)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                            {room.description}
                                        </p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                                            {room.features.slice(0, 3).map((f, i) => (
                                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--stone-700)' }}>
                                                    <i className="fa-solid fa-check" style={{ color: 'var(--brass)', fontSize: '0.75rem' }}></i>
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                            <a 
                                                href={whatsappRoomLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-brass"
                                            >
                                                Chat with Reservations
                                            </a>
                                            <Link 
                                                href={`/rooms/${room.slug}`} 
                                                className="btn btn-outline-dark"
                                            >
                                                View Room Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
