export interface Room {
    slug: string;
    name: string;
    tagline: string;
    areaSqFt: string;
    description: string;
    longDescription: string;
    sizeQualitative: string;
    bedType: string;
    sleeps: string;
    image: string;
    gallery: string[];
    features: string[];
    amenities: string[];
    staahCode: string;
}

export const roomsData: Room[] = [
    {
        slug: 'presidential-suite',
        name: 'Presidential Suite',
        tagline: 'Symmetrical grandeur & the hotel\'s most exclusive address.',
        areaSqFt: '750 Sq. Ft.',
        description: 'Our most expansive accommodation featuring symmetrical grandeur, a separate living space, private dining area with 6-diner seating, service pantry, and jacuzzi bath.',
        longDescription: 'The crowning achievement of Diana Heights. Showcases an oversized grand living room, executive work desk, formal dinner seating for six, service pantry, large private balconies, premium teak wood interiors, and VIP airport fast assistance.',
        sizeQualitative: '750 Sq. Ft. · Expansive Luxury',
        bedType: 'Master King Bed',
        sleeps: 'Up to 4 Guests',
        image: '/assets/images/P suite 01.png',
        gallery: [
            '/assets/images/P suite 01.png',
            '/assets/images/P suite 02.png',
            '/assets/images/suit 01.png'
        ],
        features: [
            'Separate living & dining area with 6-diner seating',
            'Service pantry & executive work desk',
            'Jacuzzi bath & walk-in rain shower',
            'Large private balconies with panoramic views',
            'Hardwood teak wood flooring & designer fabrics',
            'VIP airport transfer perks & priority concierge'
        ],
        amenities: [
            'High-speed Wi-Fi',
            '55-inch Smart LCD TV',
            'In-room safe deposit locker',
            'Coffee maker machine & tea setup',
            '2x 1000ml complimentary mineral water daily',
            'Complimentary breakfast (Indian & Continental)',
            '24-Hour in-room dining'
        ],
        staahCode: 'PRES'
    },
    {
        slug: 'luxury-suite',
        name: 'Luxury Suite',
        tagline: 'Invitation-only heritage layout with pool-view balconies.',
        areaSqFt: '560–650 Sq. Ft.',
        description: 'A unique assemblage of our foremost accommodations, previously available by invitation only. Boasting large private sit-out balconies looking directly over our crystal pool.',
        longDescription: 'A unique assemblage of our foremost accommodations, previously available by invitation only, now available to our discerning guests. Features generous space, classic elements tastefully mixed with contemporary touches, wooden flooring, and private balconies overlooking the crystal outdoor swimming pool.',
        sizeQualitative: '560–650 Sq. Ft. · Pool Balcony',
        bedType: 'King Bed',
        sleeps: 'Up to 3 Guests',
        image: '/assets/images/suit 01.png',
        gallery: [
            '/assets/images/suit 01.png',
            '/assets/images/suit 02.png',
            '/assets/images/pool 01.png'
        ],
        features: [
            'Large private sit-out balcony overlooking the pool',
            'Separate sitting lounge with plush furnishings',
            'Wooden flooring & teak accents',
            'Walk-in glass rain shower',
            'Plenty of natural light & acoustic insulation'
        ],
        amenities: [
            'Free high-speed internet',
            '43-inch LED TV with multi-channel entertainment',
            'Safe deposit locker',
            'Coffee maker machine',
            'Shaving & dental kit, hairdryer, bathrobes',
            'Complimentary breakfast included',
            '24-Hour room service'
        ],
        staahCode: 'LUX'
    },
    {
        slug: 'executive-room',
        name: 'Executive Room',
        tagline: 'Generous space with choice of King or Twin setups.',
        areaSqFt: '300–500 Sq. Ft.',
        description: 'Spacious and expansive business layout offering choices of Double, King, or Twin beds, a dedicated seating lounge, private balcony pull-outs, and work desk.',
        longDescription: 'Designed with generous space and contemporary touches. Highlights a choice of plush Double, King, or Twin beds, a spacious dedicated seating lounge area, private balcony pull-outs, direct workspace writing desk, safe repository cabinet, and full-service room amenities.',
        sizeQualitative: '300–500 Sq. Ft. · Executive Workspace',
        bedType: 'King, Double or Twin Beds',
        sleeps: 'Up to 3 Guests',
        image: '/assets/images/Executive room 01.png',
        gallery: [
            '/assets/images/Executive room 01.png',
            '/assets/images/Executive room 02.png',
            '/assets/images/deluxe room 01.png'
        ],
        features: [
            'Choice of Double, King, or Twin beds',
            'Spacious dedicated seating lounge area',
            'Direct workspace writing desk & ergonomic chair',
            'Private balcony pull-outs & natural lighting',
            'Modern rain shower bathroom'
        ],
        amenities: [
            'Direct high-speed internet access',
            'Flat-screen LCD TV',
            'Safe deposit locker',
            'Electric kettle & tea/coffee setup',
            '2x 1000ml mineral water bottles daily',
            'Complimentary breakfast (Indian & Continental)',
            'Iron and ironing board on request'
        ],
        staahCode: 'EXEC'
    },
    {
        slug: 'deluxe-room',
        name: 'Deluxe Room',
        tagline: 'Cozy comfort with wooden flooring and pool views.',
        areaSqFt: '248 Sq. Ft.',
        description: 'Cozy retreat blending ergonomic wooden flooring, pool view perspectives, 32-inch LCD TV, high-speed WiFi, tea/coffee maker, and modern rain shower.',
        longDescription: 'These Deluxe Rooms let you relax as you admire a beautiful view of the pool. Stay connected as you enjoy free high-speed WiFi and watch movies with our 32-inch LCD TV. Blends warm aesthetic wooden flooring, teak furnishings, and an elegant rain shower.',
        sizeQualitative: '248 Sq. Ft. · Pool View',
        bedType: 'Double Bed',
        sleeps: 'Up to 2 Guests',
        image: '/assets/images/deluxe room 01.png',
        gallery: [
            '/assets/images/deluxe room 01.png',
            '/assets/images/deluxe room 02.png',
            '/assets/images/lobby.png'
        ],
        features: [
            'Beautiful view of the swimming pool',
            'Hardwood wooden flooring & teak furnishings',
            'Modern en-suite bath with rain shower',
            'Acoustic sound insulation for airport transit'
        ],
        amenities: [
            'Free high-speed WiFi',
            '32-inch LCD TV with multi-channel entertainment',
            '2x 1000ml mineral water bottles daily',
            'Electric kettle & tea/coffee making facilities',
            'Shaving kit, dental kit, soap & shampoo',
            'Complimentary breakfast included',
            '24-Hour front desk support'
        ],
        staahCode: 'DLX'
    }
];

export function getRoomBySlug(slug: string): Room | undefined {
    return roomsData.find(r => r.slug === slug);
}
