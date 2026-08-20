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
        tagline: 'Versatile conference & banquet venue for trendsetting events.',
        description: 'Looking for a splendid get together? Runway Hall is the smartest choice to stage versatile events. It can accommodate gatherings of small groups to events for around 150 people. Known for hosting conferences, meetings, banqueting, gala social events, pre & post wedding events, and receptions.',
        image: '/assets/images/banquet 01.png',
        idealFor: [
            'Corporate Conferences & Business Summits',
            'Pre & Post Wedding Receptions & Banquets',
            'Product Launches & Gala Social Dinners',
            'Seminars, Workshops & Award Functions'
        ],
        features: [
            'Flexible configurations: Theatre (150), Cluster (100), Classroom (70), U-Shape (50)',
            'Crystal acoustic surround sound & high-lumen projection arrays',
            'Dedicated pre-function foyer & registration lounge',
            'Customized banquet menus crafted by master chefs',
            'High-speed event Wi-Fi & on-site AV technical support'
        ]
    },
    {
        slug: 'business-lounge',
        name: 'Business Lounge & Boardroom',
        capacity: 'Up to 20 Guests',
        tagline: 'Executive boardroom with natural decor and attractive lighting.',
        description: 'Spacious and vibrant Business Lounge offers beautiful natural decor with attractive lighting and draping to help create an ideal atmosphere for any occasion, making it one of the best executive board rooms. Equipped with state-of-the-art facilities, this is the perfect venue for an official gathering of 20 guests.',
        image: '/assets/images/BAR.png',
        idealFor: [
            'Executive Board of Directors Meetings',
            'High-Stakes Negotiations & Client Pitches',
            'Confidential Interviews & Strategy Sessions'
        ],
        features: [
            'Ergonomic leather boardroom seating for 20 delegates',
            'Natural decor with ambient attractive lighting & draping',
            'Video conferencing screen & presentation facilities',
            'Private high-speed internet port & power hubs at every seat',
            'Dedicated tea, coffee & snack concierge service'
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
        id: 'spa',
        name: 'Diana Ira Spa',
        subtitle: 'Ayurvedic Rejuvenation · Steam · Wellness',
        description: 'Immerse your mind & body and rejuvenate your spirit in a soothing sanctuary of tranquility. An experienced team of trained masseurs provides therapeutic massage, essential skin care, facials, body wraps, and aroma steam.',
        image: '/assets/images/spa.jpg',
        timing: '8:00 AM – 8:00 PM',
        tags: ['Ayurvedic Therapies', 'Aroma Steam Chamber', 'Body Wraps & Facials']
    },
    {
        id: 'pool',
        name: 'Outdoor Swimming Pool',
        subtitle: 'Turquoise Sky Pool & Tropical Gardens',
        description: 'Step out into our gorgeous, landscaped outdoor swimming pool flanked by tropical palms and peaceful lounging sunbeds. A pristine turquoise escape.',
        image: '/assets/images/pool 01.png',
        timing: '7:00 AM – 7:00 PM',
        tags: ['Outdoor Pool', 'Sunbed Lounging', 'Poolside Towel Service']
    },
    {
        id: 'dining',
        name: 'Flavours & Aero Cafe',
        subtitle: 'Multi-Cuisine & Speciality Dining',
        description: 'Two exquisite dining destinations: Flavours serving multi-cuisine delicacies with 24-hr in-room dining, and Aero Cafe serving specialty Indian and continental creations.',
        image: '/assets/images/dining 01.png',
        timing: '7:30 AM – 11:00 PM (24h In-Room Dining)',
        tags: ['Breakfast Buffet', 'Multi-Cuisine', 'Speciality Grills']
    },
    {
        id: 'gym',
        name: 'Health Club & Gym',
        subtitle: 'Active Fitness & Cardio Hub',
        description: 'Stay active with our fully equipped health club featuring modern cardio machinery, free weights, and stretching zones.',
        image: '/assets/images/gym 01.png',
        timing: '6:00 AM – 9:00 PM',
        tags: ['Cardio Machines', 'Free Weights', 'Air Conditioned']
    },
    {
        id: 'banquet',
        name: 'Runway Hall (150 Pax)',
        subtitle: 'Conferences & Wedding Banquets',
        description: 'Smart conference and banquet hall accommodating up to 150 guests with acoustic sound and custom banquet catering.',
        image: '/assets/images/banquet 01.png',
        timing: 'By Reservation',
        tags: ['150 Capacity', 'AV Projection', 'Banquet Catering']
    },
    {
        id: 'business',
        name: 'Business Lounge (20 Pax)',
        subtitle: 'Executive Boardroom',
        description: 'Vibrant boardroom with natural decor and attractive lighting, equipped with state-of-the-art facilities for 20 delegates.',
        image: '/assets/images/BAR.png',
        timing: '24 Hours Open',
        tags: ['20 Pax Boardroom', 'Natural Decor', 'High-Speed Wi-Fi']
    }
];
