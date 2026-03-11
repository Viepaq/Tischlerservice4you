import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Tischlerservice4you | Ihr Tischler in Wien – Notdienst 24H",
  description:
    "Fenster, Türen, Montagen und Reparaturen in Wien. 24-Stunden-Notdienst nach Einbruch, Unwetter und Unfall. Faire Preise, Handschlagsqualität.",
  keywords:
    "Tischler Wien, Tischlerei, Fenster, Türen, Notdienst 24h, Montage, Reparatur, Parkettverlegung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable} max-md:overflow-x-hidden`}>
      <body className="font-inter antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
