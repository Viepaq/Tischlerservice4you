import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldAlert, DoorOpen, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const scenarios = [
  {
    icon: ShieldAlert,
    title: "Nach einem Einbruch",
    description:
      "Sofortsicherung aufgebrochener Türen und Fenster, damit Ihre Wohnung noch in der Nacht wieder verschlossen ist.",
    href: "/notdienst#einbruch",
  },
  {
    icon: DoorOpen,
    title: "Akuter Notfall — Tür oder Fenster",
    description:
      "Tür klemmt, Schloss defekt, Fenster lässt sich nicht mehr schließen? Wir sind innerhalb kürzester Zeit vor Ort.",
    href: "/notdienst#notfall",
  },
];

export default function NotdienstBanner() {
  return (
    <section
      id="notdienst"
      className="border-t border-wood-200/40 bg-stone-50 py-20 sm:py-28 max-md:py-14"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="warm" className="mb-4">
            Notdienst
          </Badge>
          <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl max-md:text-2xl">
            Rund um die Uhr für Sie da
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Ob nach einem Einbruch oder einem akuten Defekt — wir kommen sofort.
            Kein Anrufbeantworter, kein Warteschleife.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Scenarios */}
          <div className="space-y-4">
            {scenarios.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex gap-5 rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:border-amber-300 hover:shadow-sm max-md:p-5"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Phone CTA */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-wood-300/60 bg-[#f6efe3] px-8 py-10 text-wood-900 shadow-[0_10px_30px_rgba(67,38,18,0.12)] max-md:px-6 max-md:py-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(120,80,40,0.09) 0, transparent 48%), radial-gradient(circle at 80% 70%, rgba(120,80,40,0.08) 0, transparent 42%), linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.06))",
              }}
            />

            <div className="pointer-events-none absolute right-4 top-3 opacity-100">
              <Image
                src="/images/Tischler Logo1.png"
                alt="Tischlerservice4you"
                width={360}
                height={106}
                className="h-20 w-auto object-contain drop-shadow-[0_2px_6px_rgba(35,20,10,0.35)] contrast-110 max-md:h-14"
              />
            </div>

            <div className="relative z-10 flex items-center gap-3 text-wood-700 text-sm font-semibold">
              <Clock className="h-4 w-4 text-amber-700" />
              0–24 Uhr, 365 Tage im Jahr
            </div>

            <a
              href="tel:013305557"
              className="relative z-10 mt-4 font-playfair text-4xl font-bold tracking-tight text-wood-900 transition-opacity hover:opacity-80 sm:text-5xl"
            >
              013305557
            </a>

            <p className="relative z-10 mt-3 text-sm text-wood-700/90 leading-relaxed">
              Rufen Sie uns direkt an — wir sind sofort erreichbar und
              koordinieren den schnellstmöglichen Einsatz.
            </p>

            <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="tel:013305557"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-wood-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-wood-700"
              >
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </a>
              <Link
                href="/notdienst"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-wood-400/50 px-6 py-3 text-sm font-medium text-wood-800 transition-colors hover:border-wood-500 hover:bg-white/40"
              >
                Alle Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
