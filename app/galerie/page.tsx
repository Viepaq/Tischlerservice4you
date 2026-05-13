import { Badge } from "@/components/ui/badge";
import GalerieGrid from "./GalerieGrid";

export const metadata = {
  title: "Galerie — Tischlerservice4you",
  description:
    "Einblicke in unsere Arbeit: Türen, Fenster, Möbel und mehr aus unserem Wiener Tischlerbetrieb.",
};

export default function GaleriePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 sm:pt-28 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl max-md:mb-10">
          <Badge variant="warm" className="mb-4">
            Galerie
          </Badge>
          <h1 className="font-playfair text-4xl font-bold text-foreground sm:text-5xl max-md:text-3xl">
            Einblicke in unsere Arbeit
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Jedes Projekt erzählt eine Geschichte — hier sehen Sie die Ergebnisse unserer
            Tischlerarbeit: von der Türsanierung bis zum Maßmöbel.
          </p>
        </div>

        <GalerieGrid />
      </div>
    </main>
  );
}
