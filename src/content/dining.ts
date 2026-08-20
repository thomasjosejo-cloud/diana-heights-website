export interface DiningVenue {
    slug: string;
    name: string;
    tag: string;
    tagline: string;
    description: string;
    hours: string;
    cuisine: string;
    image: string;
    highlights: string[];
}

export const diningVenues: DiningVenue[] = [
    {
        slug: 'free-zone-cafe',
        name: 'Free Zone Café',
        tag: 'OPEN 24 HOURS',
        tagline: "The hotel's all-day dining restaurant.",
        description: "The hotel's all-day dining restaurant. 24-hour service, wide menu, buffet breakfast. Always open for early departures and late transit arrivals.",
        hours: '24 Hours Daily (Breakfast Buffet: 7:30 AM – 10:30 AM)',
        cuisine: 'Authentic Kerala, Pan-Indian & Continental Delicacies',
        image: '/assets/images/dining 01.png',
        highlights: [
            '24/7 round-the-clock service for flight schedules',
            'Lavish breakfast buffet featuring South & North Indian specialties',
            'Freshly brewed South Indian filter coffee & tea',
            '24-Hour in-room dining delivery'
        ]
    },
    {
        slug: 'aero-cafe',
        name: 'Aero Café',
        tag: 'SPECIALTY DINING',
        tagline: "Diana Heights' specialty restaurant.",
        description: "Crafted menus, attentive service, an atmosphere designed for unhurried meals. From casual all-day bites to formal dining experiences.",
        hours: '11:00 AM – 11:00 PM',
        cuisine: 'Specialty Indian, Continental & Made-to-Order Grills',
        image: '/assets/images/aero cafe.png',
        highlights: [
            'Artisanal coffee and European light bites',
            'Made-to-order sandwiches and hot snacks',
            'Intimate executive ambience for corporate discussions',
            'Curated beverage and dessert selection'
        ]
    }
];
