import Link from "next/link";
import {
  Layers,
  DoorOpen,
  Wrench,
  Hammer,
  Puzzle,
  Building,
  ArrowUpRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Layers, DoorOpen, Wrench, Hammer, Puzzle, Building,
};

export default function ServicesGrid() {
  return (
    <section id="leistungen" className="border-t border-wood-200/40 bg-gradient-to-b from-wood-50 via-warm-50 to-wood-100/50 py-24 sm:py-32 max-md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl max-md:max-w-full">
          <Badge variant="warm" className="mb-4">
            Unsere Leistungen
          </Badge>
          <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl">
            Alles aus einer Hand
          </h2>
          <p className="mt-3 text-muted-foreground">
            Von der kleinen Reparatur bis zum kompletten Umbau — wir sind
            Ihr Ansprechpartner für alle Tischlerarbeiten in Wien.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-md:gap-3">
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon] || Wrench;
            return (
              <Link
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="group flex flex-col rounded-xl border border-wood-200/60 bg-white/90 p-6 backdrop-blur-sm transition-all duration-200 hover:border-warm-300 hover:bg-white hover:shadow-lg hover:shadow-wood-200/30 max-md:p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-wood-100 to-warm-100 text-wood-600 transition-colors group-hover:from-warm-400 group-hover:to-wood-400 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-playfair text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2 max-md:min-h-[44px] max-md:items-center">
                  Mehr erfahren
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}
