import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

export const metadata = {
  title: {
    default: "Diana Heights · 4-Star Business Class Hotel · Near Cochin Airport",
    template: "%s · Diana Heights Hotel",
  },
  description: "Diana Heights is a 4-star rated business class hotel near Cochin International Airport (CIAL), Kerala. 43 rooms, Flavours restaurant, Aero Cafe, Diana Ira Spa, outdoor pool, and Runway Hall banquets. Just 5.5 km from CIAL along NH-47.",
  metadataBase: new URL('https://diana-heights-website.vercel.app'),
  keywords: [
    "Diana Heights", "hotel near Cochin airport", "Kochi airport hotel",
    "business class hotel Kerala", "CIAL hotel", "Nedumbassery hotel",
    "hotel near Cochin International Airport", "Athani Junction hotel",
    "Kerala 4 star hotel", "Diana Heights Hotel"
  ],
  authors: [{ name: "Diana Heights Hotel" }],
  creator: "HOSTORY",
  publisher: "Diana Heights Hotel",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Diana Heights · 4-Star Business Class Hotel · Near Cochin Airport",
    description: "Ten minutes from your gate. Everything else, taken care of. 43 rooms, Flavours multi-cuisine restaurant, Aero Cafe, Diana Ira Spa, and outdoor pool near Cochin International Airport.",
    url: '/',
    siteName: 'Diana Heights Hotel',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Diana Heights Hotel — 4-Star Business Class Hotel near Cochin International Airport',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Diana Heights · 4-Star Business Class Hotel · Near Cochin Airport",
    description: "43 rooms, 2 restaurants, Diana Ira Spa, outdoor pool, and Runway Hall banquets — just 5.5 km from Cochin International Airport. Book direct for best rates.",
    images: ['/og-image.png'],
    creator: '@diana_heights',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '',
  },
};

// JSON-LD Structured Data for Hotel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Diana Heights Hotel",
  "description": "4-star rated business class hotel near Cochin International Airport (CIAL). 43 rooms, Flavours multi-cuisine restaurant, Aero Cafe, Diana Ira Spa, outdoor pool, and Runway Hall banquet for 150 guests.",
  "url": "https://diana-heights-website.vercel.app",
  "telephone": "+919526799179",
  "email": "info@dianaheights.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Cochin International Airport, Athani, Nedumbassery",
    "addressLocality": "Ernakulam",
    "addressRegion": "Kerala",
    "postalCode": "683585",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.1632,
    "longitude": 76.3928
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "reviewCount": "4700",
    "bestRating": "5"
  },
  "numberOfRooms": 43,
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Outdoor Swimming Pool" },
    { "@type": "LocationFeatureSpecification", "name": "Diana Ira Spa" },
    { "@type": "LocationFeatureSpecification", "name": "Flavours Multi-Cuisine Restaurant" },
    { "@type": "LocationFeatureSpecification", "name": "Aero Cafe Speciality Restaurant" },
    { "@type": "LocationFeatureSpecification", "name": "Runway Hall Banquet (150 Pax)" },
    { "@type": "LocationFeatureSpecification", "name": "Business Lounge (20 Pax)" },
    { "@type": "LocationFeatureSpecification", "name": "Health Club & Gym" },
    { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi" },
    { "@type": "LocationFeatureSpecification", "name": "Complimentary Breakfast" },
    { "@type": "LocationFeatureSpecification", "name": "24-Hour In-Room Dining" },
    { "@type": "LocationFeatureSpecification", "name": "Valet Parking" }
  ],
  "image": "https://diana-heights-website.vercel.app/og-image.png",
  "priceRange": "$$"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B1526" />
        <meta name="msapplication-TileColor" content="#0B1526" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollObserver />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
