import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tischlerservice4you | Ihr Tischler in Wien – Notdienst 24H",
    template: "%s | Tischlerservice4you",
  },
  description: site.description,
  keywords:
    "Tischler Wien, Tischlerei, Fenster, Türen, Notdienst 24h, Montage, Reparatur, Parkettverlegung",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: site.url,
    siteName: site.name,
    title: "Tischlerservice4you | Ihr Tischler in Wien – Notdienst 24H",
    description: site.description,
    images: [
      {
        url: "/images/Holzfoto1.jpg",
        width: 1200,
        height: 630,
        alt: "Tischlerservice4you – Handwerk mit Tradition in Wien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tischlerservice4you | Ihr Tischler in Wien – Notdienst 24H",
    description: site.description,
    images: ["/images/Holzfoto1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Carpenter",
  name: site.name,
  legalName: site.legalName,
  image: `${site.url}/images/Holzfoto1.jpg`,
  url: site.url,
  telephone: `+43${site.phone.replace(/^0/, "")}`,
  email: site.email,
  description: site.description,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: site.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: "Wien und Umgebung",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
    description: "24-Stunden-Notdienst, 365 Tage im Jahr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable} max-md:overflow-x-hidden`}>
      <body className="font-inter antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
