import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ShieldAlert,
  CloudLightning,
  Car,
  CheckCircle,
  Clock,
  FileText,
  ArrowDown,
  Shield,
  Wrench,
  AlertTriangle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Notdienst 24H | Tischlerservice4you Wien",
  description:
    "24-Stunden-Notdienst nach Einbruch, Unwetter und Unfall. Sofortige Hilfe, auch an Sonn- und Feiertagen.",
};

const SCENARIOS_NAV = [
  { id: "einbruch", icon: ShieldAlert, label: "Einbruch" },
  { id: "unwetter", icon: CloudLightning, label: "Unwetter" },
  { id: "unfall", icon: Car, label: "Unfall" },
];

const BENEFITS = [
  "Erreichbar 0–24 Uhr, 365 Tage im Jahr",
  "Auch an Sonn- und Feiertagen",
  "Schnell vor Ort in Wien und Umgebung",
  "Passendes Werkzeug immer dabei",
  "Direktabrechnung mit Versicherung",
  "Vollmacht und Versicherungserklärung verfügbar",
  "Netzwerk aus Schlossern und Elektrikern",
  "Professionelle Objektsicherung",
];

export default function NotdienstPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-red-50/60 pb-16 pt-28 sm:pb-20 sm:pt-36 max-md:pt-20 max-md:pb-12">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3.5 py-1 text-xs font-semibold text-emergency">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emergency" />
            </span>
            Rund um die Uhr verfügbar
          </div>
          <h1 className="mt-5 font-playfair text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Notdienst <span className="text-emergency">24H</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Einbruch, Unwetter oder Unfall? Wir sind sofort für Sie da
            &mdash; schnell, professionell und mit dem passenden Werkzeug.
          </p>
          <Button variant="emergency" size="xl" className="mt-8 gap-2" asChild>
            <a href="tel:+436642509912">
              <Phone className="h-4 w-4" />
              +43 664 250 99 12
            </a>
          </Button>

          {/* Quick-Nav to sections */}
          <div className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center max-md:flex-col max-md:w-full">
            {SCENARIOS_NAV.map(({ id, icon: Icon, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-wood-200/60 bg-white px-5 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:shadow-md hover:border-warm-300 max-md:w-full"
              >
                <Icon className="h-4 w-4 text-emergency" />
                {label}
                <ArrowDown className="h-3 w-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Einbruch ── */}
      <section id="einbruch" className="scroll-mt-24 border-t border-wood-200/40 bg-gradient-to-b from-white to-wood-50/30 py-20 sm:py-28 max-md:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 max-md:gap-8">
            <div className="lg:col-span-3 max-md:order-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50">
                  <ShieldAlert className="h-5 w-5 text-emergency" />
                </div>
                <Badge variant="warm">Notdienst</Badge>
              </div>
              <h2 className="mt-5 font-playfair text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Nach Einbruch
              </h2>
              <p className="mt-2 font-playfair text-lg italic text-wood-500">
                Durchatmen und ruhig Blut — ist was kaputt, wir machen&apos;s gut!
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Einbrüche und Beschaffungskriminalität nehmen zu. Immer öfter handelt es sich um Spontantaten
                mit heftigen Schäden: zu Boden getretene Zäune, zertrümmerte Fenster, devastierte Böden und
                herausgerissene Laden. Oft passiert es nachts, in der Dämmerung oder am Wochenende — und das
                Objekt bleibt ungesichert offen.
              </p>

              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Wrench className="h-4 w-4 text-wood-500" />
                Unsere Sofortmaßnahmen
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 max-md:grid-cols-1">
                {[
                  "Objekt sichern, verschließen und verplanken",
                  "Sicheres Provisorium errichten",
                  "Reparatur von Fenstern, Türen und Parketten",
                  "Kratzer, Schleifspuren und Dellen beheben",
                  "Türstock verkitten, schleifen, behandeln",
                  "Netzwerk: Schlosser und Elektriker bei Bedarf",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-500" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Shield className="h-4 w-4 text-wood-500" />
                Versicherung &amp; Abwicklung
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Bei aufrechtem Versicherungsschutz übernehmen wir die Direktabrechnung mit Ihrer Versicherung.
                Reparaturen sind oft günstiger als Neuanschaffungen — das erleichtert die Verhandlung mit der
                Versicherung erheblich. Wir beraten Sie vor Ort und erklären die Situation, damit Sie in Ruhe
                über die weiteren Maßnahmen entscheiden können.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2 max-md:order-2">
              <div className="rounded-xl border border-wood-200/50 bg-gradient-to-br from-wood-50 to-warm-50 p-6 max-md:p-5">
                <h4 className="font-semibold text-foreground">Reparatur statt Neuanschaffung</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ein reparierter Türstock kann wieder wie neu aussehen. Kratzer, Schleifspuren und Dellen werden
                  nahezu unsichtbar behoben — oft sinnvoller und günstiger als ein kompletter Austausch.
                </p>
              </div>
              <div className="rounded-xl border border-wood-200/50 bg-gradient-to-br from-warm-50 to-wood-50 p-6 max-md:p-5">
                <h4 className="font-semibold text-foreground">Auch ohne Fremdverschulden</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Bruch oder Verlust ohne Fremdverschulden? Kein Problem. Wir reparieren und ergänzen auch bei
                  Materialermüdung, Überbeanspruchung oder eigenem Missgeschick.
                </p>
              </div>
              <div className="rounded-xl border border-emergency/20 bg-red-50/60 p-6 max-md:p-5">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emergency" />
                  <h4 className="font-semibold text-emergency">Notfalltelefon</h4>
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  <a href="tel:+436642509912" className="hover:text-emergency transition-colors">
                    +43 664 250 99 12
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">0–24 Uhr, auch Sonn- und Feiertage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Unwetter ── */}
      <section id="unwetter" className="scroll-mt-24 border-t border-wood-200/40 bg-gradient-to-br from-wood-50 via-warm-50 to-amber-50/30 py-20 sm:py-28 max-md:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 max-md:gap-8">
            <div className="lg:col-span-3 max-md:order-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50">
                  <CloudLightning className="h-5 w-5 text-amber-600" />
                </div>
                <Badge variant="warm">Notdienst</Badge>
              </div>
              <h2 className="mt-5 font-playfair text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Unwetterschäden
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Unwetter nehmen zu — vor allem Sturm und schwere Gewitter. Betroffen sind häufig Vorbauten,
                Dachuntersichten, Gerätehäuser, Windfänge, Zaunbögen und Verkleidungen. Solche Schäden müssen
                sofort gesichert werden, um Folgeschäden und Gefahren für Personen zu vermeiden.
              </p>

              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Wrench className="h-4 w-4 text-wood-500" />
                Unsere Sofortmaßnahmen
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 max-md:grid-cols-1">
                {[
                  "Sicherung, Verplankung und Neuverschraubung",
                  "Provisorium gegen weitere Folgeschäden",
                  "Gefährdungen erkennen und sichern",
                  "Dachlatten und Zäune nach Hagel ausbessern",
                  "Gartenpavillons und Pergolen befestigen",
                  "Netzwerk: Schlosser und Elektriker bei Bedarf",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-500" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Wichtiger Hinweis
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Unwetterschäden, die anderen Objekten oder Personen Schaden zufügen könnten, müssen umgehend
                gesichert werden. Solche Fälle landen häufig vor Gericht — eine rasche, professionelle Sicherung
                schützt Sie auch rechtlich.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2 max-md:order-2">
              <div className="rounded-xl border border-wood-200/50 bg-white/80 p-6 max-md:p-5">
                <h4 className="font-semibold text-foreground">Typische Schadensbereiche</h4>
                <ul className="mt-3 space-y-2">
                  {[
                    "Vorbauten und Dachuntersichten",
                    "Gerätehäuser und Windfänge",
                    "Zaunbögen und Verkleidungen",
                    "Gartenpavillons und Pergolen",
                    "Fenster und Fassadenelemente",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-wood-200/50 bg-white/80 p-6 max-md:p-5">
                <h4 className="font-semibold text-foreground">Versicherung</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Direktverrechnung mit Ihrer Versicherung bei aufrechtem Versicherungsschutz.
                  Entscheidungen über Neuanschaffung, Reparatur oder Ergänzung können Sie später in Ruhe treffen.
                </p>
              </div>
              <div className="rounded-xl border border-emergency/20 bg-red-50/60 p-6 max-md:p-5">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emergency" />
                  <h4 className="font-semibold text-emergency">Notfalltelefon</h4>
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  <a href="tel:+436642509912" className="hover:text-emergency transition-colors">
                    +43 664 250 99 12
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">0–24 Uhr, auch Sonn- und Feiertage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Unfall ── */}
      <section id="unfall" className="scroll-mt-24 border-t border-wood-200/40 bg-gradient-to-b from-white to-warm-50/40 py-20 sm:py-28 max-md:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 max-md:gap-8">
            <div className="lg:col-span-3 max-md:order-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50">
                  <Car className="h-5 w-5 text-orange-600" />
                </div>
                <Badge variant="warm">Notdienst</Badge>
              </div>
              <h2 className="mt-5 font-playfair text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Nach Unfall
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Unfälle sind unvorhersehbar: Ein Lieferant rammt die Tür, etwas fällt auf das Vordach, ein Auto
                durchschlägt den Zaun. Polizei, Rettung und Feuerwehr haben Vorrang — aber wer sichert danach
                das offene Portal in der Nacht oder am Wochenende?
              </p>

              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Wrench className="h-4 w-4 text-wood-500" />
                Unsere Sofortmaßnahmen
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 max-md:grid-cols-1">
                {[
                  "Objekt sichern und vor weiteren Schäden schützen",
                  "Schutz vor Witterungseinflüssen",
                  "Gefahrenabwendung ohne zusätzliche Schäden",
                  "Reparatur an Zäunen, Toren und Geländern",
                  "Wiederherstellung von Verkleidungen",
                  "Netzwerk: Schlosser und Elektriker bei Bedarf",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-500" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Users className="h-4 w-4 text-wood-500" />
                Professionelle Vorgehensweise
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Im Gegensatz zur Feuerwehr arbeiten wir mit Rücksicht darauf, keine zusätzlichen Schäden zu
                verursachen. Unsere Sicherungsmaßnahmen sind professionell und schonend — damit die finale
                Reparatur so einfach wie möglich wird.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:col-span-2 max-md:order-2">
              <div className="rounded-xl border border-wood-200/50 bg-gradient-to-br from-wood-50 to-warm-50 p-6 max-md:p-5">
                <h4 className="font-semibold text-foreground">Typische Unfallszenarien</h4>
                <ul className="mt-3 space-y-2">
                  {[
                    "Lieferant rammt Türen oder Fenster",
                    "Gegenstände fallen auf Vordach oder Geländer",
                    "Auto durchschlägt Zaun oder Portal",
                    "Schäden an Fassaden und Eingängen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-wood-200/50 bg-gradient-to-br from-warm-50 to-wood-50 p-6 max-md:p-5">
                <h4 className="font-semibold text-foreground">Versicherung</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Direktverrechnung mit Ihrer Versicherung bei aufrechtem Versicherungsschutz.
                  Die Entscheidung über Neuanschaffung oder Reparatur treffen Sie in Ruhe nach der Sicherung.
                </p>
              </div>
              <div className="rounded-xl border border-emergency/20 bg-red-50/60 p-6 max-md:p-5">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emergency" />
                  <h4 className="font-semibold text-emergency">Notfalltelefon</h4>
                </div>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  <a href="tel:+436642509912" className="hover:text-emergency transition-colors">
                    +43 664 250 99 12
                  </a>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">0–24 Uhr, auch Sonn- und Feiertage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Benefits + CTA ── */}
      <section className="bg-gradient-to-b from-wood-50 via-warm-50 to-wood-100/40 py-20 sm:py-28 max-md:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="warm" className="mb-4">Ihre Vorteile</Badge>
              <h2 className="font-playfair text-2xl font-bold text-foreground sm:text-3xl">
                Darauf können Sie zählen
              </h2>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2 max-md:grid-cols-1">
                {BENEFITS.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-500" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl border border-wood-200/50 bg-white/90 p-10 text-center backdrop-blur-sm">
              <Clock className="h-10 w-10 text-wood-500" />
              <h3 className="mt-5 font-playfair text-xl font-bold">Rund um die Uhr</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Auch an Sonn- und Feiertagen erreichbar.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row max-md:flex-col">
                <Button variant="emergency" size="lg" className="gap-2 max-md:w-full" asChild>
                  <a href="tel:+436642509912">
                    <Phone className="h-4 w-4" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 max-md:w-full" asChild>
                  <Link href="/kontakt">
                    <FileText className="h-4 w-4" />
                    Kontaktformular
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
