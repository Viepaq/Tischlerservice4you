import Image from "next/image";
import { Clock, Shield, Award, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STRENGTHS = [
  {
    icon: Award,
    title: "25+ Jahre Erfahrung",
    description: "Handschlagsqualität und fachgerechte Arbeit seit über einem Vierteljahrhundert.",
    color: "from-amber-100 to-wood-100 text-amber-700",
  },
  {
    icon: Clock,
    title: "Notdienst 24/7",
    description: "Rund um die Uhr erreichbar — auch an Sonn- und Feiertagen.",
    color: "from-orange-100 to-amber-100 text-orange-700",
  },
  {
    icon: Shield,
    title: "Faire Preise",
    description: "Transparente Preise ohne versteckte Kosten. Kostenvoranschlag auf Anfrage.",
    color: "from-wood-100 to-warm-100 text-wood-700",
  },
  {
    icon: MapPin,
    title: "Wien & Umgebung",
    description: "Schnell vor Ort in ganz Wien und Umgebung. Zuverlässig und pünktlich.",
    color: "from-stone-100 to-wood-100 text-stone-700",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-wood-200/40 bg-gradient-to-br from-wood-50 via-warm-50 to-amber-50/40 py-24 sm:py-32 max-md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <Badge variant="warm" className="mb-4">
            Warum wir
          </Badge>
          <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl">
            Das zeichnet uns aus
          </h2>
          <p className="mx-auto mt-4 max-w-4xl leading-relaxed text-muted-foreground">
            Wir verbinden saubere Handwerksarbeit mit Verlässlichkeit im Alltag:
            klare Kommunikation, pünktliche Umsetzung und ein Ergebnis, das
            langfristig hält.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="space-y-3">
              {STRENGTHS.map(({ icon: Icon, title, description, color }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-xl border border-wood-200/50 bg-white/85 px-5 py-4 backdrop-blur-sm"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-semibold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-wood-200/50 bg-white">
            <Image
              src="/images/PHOTO-2026-05-05-20-59-35 9.jpg"
              alt="Tischlerarbeit in der Werkstatt"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
