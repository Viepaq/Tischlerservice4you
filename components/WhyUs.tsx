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
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-md:grid-cols-1 max-md:gap-4 max-md:mt-10">
          {STRENGTHS.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="rounded-xl border border-wood-200/50 bg-white/80 p-6 text-center backdrop-blur-sm transition-all hover:bg-white hover:shadow-md hover:shadow-wood-200/20 max-md:p-5"
            >
              <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-playfair text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
