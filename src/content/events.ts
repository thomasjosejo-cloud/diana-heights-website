export interface EventVenue {
    slug: string;
    name: string;
    capacity: string;
    tagline: string;
    description: string;
    image: string;
    idealFor: string[];
    features: string[];
}

export const eventVenues: EventVenue[] = [
    {
        slug: 'runway-hall',
        name: 'Runway Hall',
        capacity: 'Up to 150 Guests',
        tagline: 'Versatile banquet & conference venue for high-impact gatherings.',
        description: 'Runway Hall seats up to 150 guests and transforms effortlessly — conferences, product launches, corporate banquets, gala receptions, and pre & post wedding celebrations.',
        image: '/assets/images/banquet 01.png',
        idealFor: [
            'Corporate Conferences & Seminars',
            'Product Launches & Dealer Meets',
            'Wedding Receptions & Banquets',
            'Cocktail Dinners & Gala Socials'
        ],
        features: [
            'Acoustic surround sound & laser projection',
            'Customizable seating: Theatre, Cluster, Classroom, U-Shape',
            'Dedicated pre-function foyer & registration area',
            'Custom banquet catering from our culinary chefs',
            'High-speed event Wi-Fi & AV tech support'
        ]
    },
    {
        slug: 'business-lounge',
        name: 'Business Lounge & Boardroom',
        capacity: 'Up to 20 Guests',
        tagline: 'Intimate boardroom setting with executive polish.',
        description: 'Spacious and vibrant Business Lounge offering natural decor, attractive lighting, and state-of-the-art boardroom amenities for focused executive discussions.',
        image: '/assets/images/BAR.png',
        idealFor: [
            'Executive Board Meetings',
            'Private Negotiations & Interviews',
            'Client Pitches & Strategy Sessions'
        ],
        features: [
            'Executive ergonomic boardroom seating',
            'Video conferencing & smart screen projection',
            'Private coffee & tea service',
            'Dedicated high-speed connectivity'
        ]
    }
];

export interface Facility {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    image: string;
    timing: string;
    tags: string[];
}

export const facilitiesList: Facility[] = [
    {
        id: 'pool',
        name: 'Outdoor Sky Pool',
        subtitle: 'Swimming & Leisure',
        description: 'Pristine turquoise waters surrounded by tropical greenery and sun loungers. A tranquil pause just minutes from the airport.',
        image: '/assets/images/pool 01.png',
        timing: '7:00 AM – 7:00 PM',
        tags: ['Outdoor Pool', 'Sun Loungers', 'Towels Provided']
    },
    {
        id: 'spa',
        name: 'Diana Ira Spa',
        subtitle: 'Massage · Steam · Sauna',
        description: 'Immerse your body and spirit in therapeutic massage, herbal oil treatments, aroma steam, and body care crafted for deep relaxation.',
        image: '/assets/images/spa.jpg',
        timing: '8:00 AM – 8:00 PM',
        tags: ['Ayurvedic Therapies', 'Steam Chamber', 'Certified Masseurs']
    },
    {
        id: 'dining',
        name: 'Free Zone Café & Aero Café',
        subtitle: 'All-Day & Specialty Dining',
        description: 'Two distinct culinary destinations catering to every schedule — 24-hour all-day dining and intimate specialty cuisine.',
        image: '/assets/images/dining 01.png',
        timing: '24 Hours Open',
        tags: ['24/7 Dining', 'Buffet Breakfast', 'Specialty Grills']
    },
    {
        id: 'gym',
        name: 'Health Club & Gym',
        subtitle: 'Fitness & Vitality',
        description: 'Modern cardiovascular machinery, free weights, and stretching zones to keep your workout routine active on the go.',
        image: '/assets/images/gym 01.png',
        timing: '6:00 AM – 9:00 PM',
        tags: ['Cardio Machines', 'Free Weights', 'Air Conditioned']
    },
    {
        id: 'banquet',
        name: 'Runway Hall',
        subtitle: 'Events · 150 Pax',
        description: 'Grand corporate and social banquet venue equipped with acoustic sound arrays and flexible seating options.',
        image: '/assets/images/banquet 01.png',
        timing: 'By Reservation',
        tags: ['150 Capacity', 'AV Projection', 'Banquet Catering']
    },
    {
        id: 'business',
        name: 'Business Centre',
        subtitle: 'Meetings & Boardroom',
        description: 'High-speed internet workstations, printing services, and meeting areas for unhindered transit productivity.',
        image: '/assets/images/Executive room 01.png',
        timing: '24 Hours Open',
        tags: ['High-Speed Wi-Fi', 'Boardroom', 'Workstations']
    }
];
