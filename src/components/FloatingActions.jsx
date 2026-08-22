import { buildWhatsAppLink, HOTEL_PHONE_RAW } from '@/lib/whatsapp';

/**
 * Mobile floating action buttons: quick Call + WhatsApp.
 * Hidden on desktop (where the header phone badge / Book Direct + reservation
 * bar already cover these). Visible only at <=768px via CSS.
 */
export default function FloatingActions() {
    return (
        <div className="floating-actions">
            <a
                href={`tel:+${HOTEL_PHONE_RAW}`}
                className="fab fab-call"
                aria-label="Call Diana Heights front desk"
            >
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
            </a>
            <a
                href={buildWhatsAppLink({ type: 'booking' })}
                target="_blank"
                rel="noopener noreferrer"
                className="fab fab-whatsapp"
                aria-label="Chat with reservations on WhatsApp"
            >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </a>
        </div>
    );
}
