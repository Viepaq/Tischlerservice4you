import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const HIGHLIGHTS = [
  "Spezialisiert auf Kleinarbeiten & Notdienst",
  "Schnell vor Ort mit passendem Werkzeug",
  "Netzwerk aus Schlossern, Elektrikern & Installateuren",
  "Faire Preise, transparente Abrechnung",
];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="border-t border-wood-200/40 bg-white py-24 sm:py-32 max-md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 max-md:gap-8">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border max-md:aspect-[16/10]">
              <Image
                src="/Real1.webp"
                alt="Tischlermeister bei der Arbeit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-xl border border-wood-200/60 bg-white px-5 py-4 shadow-lg shadow-wood-200/20 max-md:-bottom-4 max-md:right-2 sm:-right-6">
              <div className="font-playfair text-3xl font-bold text-wood-500">
                25+
              </div>
              <div className="text-xs font-medium text-muted-foreground">
                Jahre Erfahrung
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="max-md:mt-8">
            <Badge variant="warm" className="mb-4">
              {"Über uns"}
            </Badge>
            <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl">
              {"Wir schließen die Lücke"}
            </h2>
            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                {"Viele Kunden finden keinen passenden Ansprechpartner für kleinere Arbeiten. Die meisten Betriebe bieten keine Kleinigkeiten und keinen Notdienst an \u2014 genau das war der Grund für unsere Selbstständigkeit."}
              </p>
              <p>
                {"Ob nach einem Einbruch, bei Unwetterschäden oder nach einem Unfall \u2014 wir sind schnell vor Ort. Unsere Kunden sind Aufsperrdienste, Hausverwaltungen und Privatpersonen."}
              </p>
            </div>

            <div className="mt-7 space-y-2.5">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 shrink-0 text-wood-500" />
                  <span className="text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
