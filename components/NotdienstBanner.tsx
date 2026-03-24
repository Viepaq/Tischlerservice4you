import Link from "next/link";
import { Phone, ShieldAlert, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NotdienstBanner() {
  return (
    <section id="notdienst" className="border-t border-wood-200/40 bg-white py-20 sm:py-24 max-md:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <Badge variant="warm" className="mb-4">
            Notdienst
          </Badge>
          <h2 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl max-md:text-2xl">
            Rund um die Uhr für Sie da
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Nach einem Einbruch — wir kommen sofort.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 shadow-xl shadow-amber-950/20">
          <div className="px-7 py-8 sm:px-10 sm:py-10 max-md:px-5 max-md:py-6">
            {/* Scenario */}
            <Link
              href="/notdienst#einbruch"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-amber-400/25 hover:bg-white/10 max-md:py-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                <ShieldAlert className="h-5 w-5 text-amber-300" />
              </div>
              <span className="text-sm font-medium text-white">Nach Einbruch — Sofortsicherung &amp; Reparatur</span>
            </Link>

            {/* Divider */}
            <div className="my-6 border-t border-white/10" />

            {/* CTA row */}
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row max-md:flex-col max-md:gap-4 max-md:text-center">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/15">
                  <Phone className="h-4 w-4 text-amber-300" />
                </div>
                <div>
                  <a
                    href="tel:013305557"
                    className="text-lg font-bold text-white transition-opacity hover:opacity-80"
                  >
                    013305557
                  </a>
                  <div className="flex items-center gap-1.5 text-xs text-amber-300/60">
                    <Clock className="h-3 w-3" />
                    0–24 Uhr, 365 Tage
                  </div>
                </div>
              </div>
              <Link
                href="/notdienst"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-400 max-md:w-full max-md:justify-center"
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
