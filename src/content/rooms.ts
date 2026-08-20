export interface Room {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    sizeQualitative: 'Expansive' | 'Generously sized' | 'Spacious' | 'Comfortable';
    bedType: string;
    sleeps: string;
    priceHint?: string;
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
        tagline: "The hotel's most exclusive address.",
        description: "Expansive living room, private workspace, jacuzzi bath and floor-to-ceiling views. The hotel's most exclusive address.",
        longDescription: "Our most exclusive accommodation at Diana Heights. Designed for senior dignitaries, corporate executives, and VIP guests, the Presidential Suite provides an expansive private living room, executive work desk, private dining table, master bedroom with plush king-size bedding, and a marble bath equipped with a jacuzzi tub.",
        sizeQualitative: 'Expansive',
        bedType: 'Master King Bed',
        sleeps: 'Up to 4 Guests',
        image: '/assets/images/P suite 01.png',
        gallery: [
            '/assets/images/P suite 01.png',
            '/assets/images/P suite 02.png',
            '/assets/images/suit 01.png'
        ],
        features: [
            'Expansive living room & seating lounge',
            'Dedicated private workstation & boardroom setup',
            'Jacuzzi bath & walk-in rain shower',
            'Separate dining space for six',
            'Floor-to-ceiling panoramic views',
            'VIP airport transfer assistance'
        ],
        amenities: [
            'High-speed Wi-Fi',
            '55-inch Smart TV',
            'In-room safe deposit locker',
            'Espresso machine & tea station',
            'Premium bathrobes & toiletries',
            '24-Hour In-room dining service'
        ],
        staahCode: 'PRES'
    },
    {
        slug: 'luxury-suite',
        name: 'Luxury Suite',
        tagline: 'Generous space with premium furnishings.',
        description: 'Generous space with premium furnishings, separate sitting area and all the comforts of home — elevated.',
        longDescription: 'Generously proportioned for leisurely comfort, the Luxury Suite features warm teak furnishings, a separate relaxation lounge, and private sit-out balconies overlooking our pristine turquoise pool. Perfect for families or extended transit stays.',
        sizeQualitative: 'Generously sized',
        bedType: 'King Bed',
        sleeps: 'Up to 3 Guests',
        image: '/assets/images/suit 01.png',
        gallery: [
            '/assets/images/suit 01.png',
            '/assets/images/suit 02.png',
            '/assets/images/pool 01.png'
        ],
        features: [
            'Private sit-out balcony overlooking pool',
            'Separate sitting area & plush sofa',
            'Teak wood interior finishes',
            'Walk-in glass rain shower',
            'Complimentary bottled water daily',
            'Dedicated luggage repository'
        ],
        amenities: [
            'High-speed Wi-Fi',
            '43-inch LED TV',
            'Safe deposit locker',
            'Coffee & tea maker',
            'Hairdryer & shaving kit',
            '24-Hour room service'
        ],
        staahCode: 'LUX'
    },
    {
        slug: 'executive-room',
        name: 'Executive Room',
        tagline: 'The right room for a productive stay.',
        description: 'Stylish, functional, comfortable. The right room for a productive stay.',
        longDescription: 'Engineered for business executives and transit guests who value quiet productivity and modern ergonomics. Offers a dedicated workspace, ergonomic chair, plush bedding options (King, Double, or Twin), and swift connectivity.',
        sizeQualitative: 'Spacious',
        bedType: 'King, Double or Twin Beds',
        sleeps: 'Up to 3 Guests',
        image: '/assets/images/Executive room 01.png',
        gallery: [
            '/assets/images/Executive room 01.png',
            '/assets/images/Executive room 02.png',
            '/assets/images/deluxe room 01.png'
        ],
        features: [
            'Ergonomic work desk & task lighting',
            'Plush bedding (Choice of King / Twins)',
            'Dedicated seating corner',
            'Modern rain shower bath',
            'Direct high-speed internet port'
        ],
        amenities: [
            'High-speed Wi-Fi',
            'Flat-screen LCD TV',
            'Safe deposit box',
            'Electric kettle & tea setup',
            'Iron & ironing board on request',
            'Daily housekeeping'
        ],
        staahCode: 'EXEC'
    },
    {
        slug: 'deluxe-room',
        name: 'Deluxe Room',
        tagline: 'Perfect for leisure guests and families.',
        description: 'Clean, comfortable and well-equipped. Perfect for leisure guests and families.',
        longDescription: 'Our hallmark entry room offering refined simplicity and warm Keralite touches. Featuring hardwood flooring, acoustic soundproofing for a restful sleep near the airport corridor, and modern en-suite amenities.',
        sizeQualitative: 'Comfortable',
        bedType: 'Double Bed',
        sleeps: 'Up to 2 Guests',
        image: '/assets/images/deluxe room 01.png',
        gallery: [
            '/assets/images/deluxe room 01.png',
            '/assets/images/deluxe room 02.png',
            '/assets/images/lobby.png'
        ],
        features: [
            'Hardwood flooring & teak accents',
            'Peaceful courtyard or pool perspective',
            'Acoustic sound insulation',
            'Modern en-suite bath with rain shower'
        ],
        amenities: [
            'Free high-speed Wi-Fi',
            '32-inch LCD TV',
            'Complimentary mineral water (2x 1L)',
            'Tea & coffee making facilities',
            'Toiletries kit',
            '24-Hour front desk support'
        ],
        staahCode: 'DLX'
    }
];

export function getRoomBySlug(slug: string): Room | undefined {
    return roomsData.find(r => r.slug === slug);
}
