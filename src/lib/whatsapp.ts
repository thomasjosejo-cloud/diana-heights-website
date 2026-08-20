/**
 * WhatsApp Reservation & Enquiry Deep-Link Generator
 * Target Phone: +91 9526799179
 */

export const HOTEL_PHONE = "+91 9526799179";
export const HOTEL_PHONE_RAW = "919526799179";
export const HOTEL_EMAIL = "info@dianaheights.com";

export interface WhatsAppBookingParams {
    type?: 'booking' | 'room' | 'event' | 'spa' | 'dining' | 'general';
    roomName?: string;
    checkIn?: string;
    checkOut?: string;
    adults?: string | number;
    children?: string | number;
    guests?: string | number;
    eventName?: string;
    pax?: string | number;
    message?: string;
    name?: string;
}

export function buildWhatsAppLink(params: WhatsAppBookingParams = {}): string {
    const {
        type = 'general',
        roomName,
        checkIn,
        checkOut,
        adults = '2',
        children = '0',
        eventName,
        pax,
        message,
        name
    } = params;

    let text = "";

    switch (type) {
        case 'booking':
            text = `Hello Diana Heights! I would like to check room availability for:
• Check-in: ${checkIn || 'Flexible'}
• Check-out: ${checkOut || 'Flexible'}
• Room: ${roomName || 'Best available'}
• Guests: ${adults} Adults${Number(children) > 0 ? `, ${children} Children` : ''}
Please share direct booking rates and availability.`;
            break;

        case 'room':
            text = `Hello Diana Heights! I am interested in reserving the *${roomName || 'Room'}*.
${checkIn ? `• Check-in: ${checkIn}` : ''}
${checkOut ? `• Check-out: ${checkOut}` : ''}
${adults ? `• Guests: ${adults} Adults${Number(children) > 0 ? `, ${children} Children` : ''}` : ''}
Please share availability and direct booking assistance.`;
            break;

        case 'event':
            text = `Hello Diana Heights! I would like to inquire about hosting an event at *${eventName || 'Runway Hall / Business Lounge'}*.
${pax ? `• Expected Guests: ${pax} pax` : ''}
${message ? `• Requirements: ${message}` : ''}
Please share your banquet packages and availability.`;
            break;

        case 'spa':
            text = `Hello Diana Heights! I'd like to book an appointment at *Diana Ira Spa*. Please share the treatment menu and available slots.`;
            break;

        case 'dining':
            text = `Hello Diana Heights! I would like to make a table reservation / dining inquiry for *${message || 'Free Zone Café / Aero Café'}*.`;
            break;

        default:
            text = message || `Hello Diana Heights! I have an inquiry regarding your hotel services near Cochin Airport.`;
            break;
    }

    if (name) {
        text += `\n\nFrom: ${name}`;
    }

    return `https://wa.me/${HOTEL_PHONE_RAW}?text=${encodeURIComponent(text.trim())}`;
}
