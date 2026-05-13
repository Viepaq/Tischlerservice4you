import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const LEGAL = [
  { href: "/impressum", label: "Impressum" },
];

const NAV_FOOTER = [
  { href: "/galerie", label: "Galerie" },
  { href: "/notdienst", label: "Notdienst" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="border-t border-wood-200/60 bg-gradient-to-b from-wood-50 to-warm-50">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 max-md:py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 max-md:gap-8 max-md:text-center">
          {/* Brand */}
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <Link href="/" className="max-md:block hidden">
              <Image
                src="/images/Tischler Logo1.png"
                alt="Tischlerservice4you"
                width={320}
                height={108}
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm font-medium text-foreground/80">
              Neim Zekiri
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              Wir sind ein Österreichisches Unternehmen.
              Ihr verlässlicher Partner für Tischlerarbeiten in Wien.
            </p>
          </div>

          {/* Contact */}
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Kontakt
            </h4>
            <div className="mt-3 flex flex-col gap-2.5 text-sm">
              <div className="flex items-start gap-2 text-foreground/70">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-wood-500" />
                <span>Bäuerlegasse 24/G21-22, 1200 Wien</span>
              </div>
              <a href="tel:013305557" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                <Phone className="h-3.5 w-3.5 shrink-0 text-wood-500" />
                013305557
              </a>
              <a href="mailto:office@tischlerservice4you.at" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0 text-wood-500" />
                office@tischlerservice4you.at
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              {NAV_FOOTER.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-foreground/70 hover:text-foreground">
                  {link.label}
                </Link>
              ))}
              {LEGAL.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-foreground/70 hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8 max-md:my-6" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row max-md:flex-col max-md:gap-1 max-md:text-center">
          <p>&copy; {new Date().getFullYear()} Tischlerservice4you</p>
          <p>Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}
