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
        slug: 'flavours-restaurant',
        name: 'Flavours : Multi Cuisine Restaurant',
        tag: 'MULTI-CUISINE & BUFFET',
        tagline: 'World of delicious culinary wonders.',
        description: 'Guests can take pleasure in a delicious meal at any time of day. Featuring an expansive multi-cuisine menu with bespoke dishes matched with signature beverages, along with lavish breakfast spreads and round-the-clock room dining.',
        hours: '7:30 AM – 10:00 PM (24-Hour In-Room Dining Available)',
        cuisine: 'Authentic Kerala, Pan-Indian & International Cuisines',
        image: '/assets/images/dining 01.png',
        highlights: [
            'Daily breakfast buffet (Indian & Continental spreads) from 7:30 AM',
            'Authentic traditional Kerala delicacies & rich North Indian curries',
            '24-Hour in-room dining service for all guest rooms and suites',
            'Bespoke signature menus and beverage selections'
        ]
    },
    {
        slug: 'aero-cafe',
        name: 'Aero Cafe : Speciality Restaurant',
        tag: 'SPECIALITY DINING & CASUAL BITES',
        tagline: 'Distinctive dining from casual bites to formal elegance.',
        description: 'From casual, all-day eateries to formal fine dining, guests can look forward to authenticity, excellent service, gourmet cuisine, and a welcoming ambience. Savor distinctive Indian and continental creations, made-to-order sandwiches, and hot snacks.',
        hours: '11:00 AM – 11:00 PM',
        cuisine: 'Speciality Indian, Continental & Gourmet Light Bites',
        image: '/assets/images/aero cafe.png',
        highlights: [
            'Crafted gourmet Indian and continental specialty dishes',
            'Made-to-order sandwiches, artisanal coffee & hot snacks',
            'Welcoming, sophisticated ambience ideal for business & leisure',
            'Attentive personalized service and chef specials'
        ]
    }
];
