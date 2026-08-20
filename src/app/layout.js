import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollObserver from "../components/ScrollObserver";

export const metadata = {
  title: "Diana Heights · Premium Business-Class Hotel · Cochin Airport",
  description: "Kochi's most complete airport hotel, ten minutes from Cochin International Airport (CIAL). Two restaurants, full-service spa, outdoor pool, and 43 rooms under one roof.",
  metadataBase: new URL('https://diana-heights.vercel.app'),
  openGraph: {
    title: "Diana Heights · Premium Business-Class Hotel · Cochin Airport",
    description: "Ten minutes from your gate. Everything else, taken care of. Premium business-class comfort near Cochin Airport.",
    url: '/',
    siteName: 'Diana Heights Hotel',
    images: [
      {
        url: '/assets/images/diana.png',
        width: 1200,
        height: 630,
        alt: 'Diana Heights Hotel Cochin Airport',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
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
