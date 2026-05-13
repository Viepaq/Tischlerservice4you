import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Tischlerservice4you",
  description: "Impressum und Firmendaten von Tischlerservice4you – Neim Zekiri, 1200 Wien.",
};

export default function ImpressumPage() {
  return (
    <section className="py-20 lg:py-28 max-md:pb-14">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <h1 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl max-md:text-2xl">
          Impressum
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Informationspflicht laut §5 E-Commerce Gesetz
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 max-md:grid-cols-1">
          {/* Left column */}
          <div className="space-y-4 text-sm text-foreground/80">
            <div>
              <p className="font-semibold text-foreground">Inh. Neim Zekiri</p>
              <p>Bäuerlegasse 24/G21-22</p>
              <p>1200 Wien</p>
            </div>
            <div>
              <p>
                <span className="font-medium text-foreground">Telefon:</span>{" "}
                <a href="tel:013305557" className="hover:text-foreground">
                  013305557
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">E-Mail:</span>{" "}
                <a href="mailto:office@tischlerservice4you.at" className="hover:text-foreground">
                  office@tischlerservice4you.at
                </a>
              </p>
              <p>
                <span className="font-medium text-foreground">Webseite:</span>{" "}
                <a
                  href="https://www.tischlerservice4you.at"
                  className="hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.tischlerservice4you.at
                </a>
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4 text-sm text-foreground/80">
            <div>
              <p>
                <span className="font-medium text-foreground">UID Nr.:</span> ATU57350547
              </p>
              <p>
                <span className="font-medium text-foreground">GISA-Zahl:</span> 35317135
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium text-foreground">Bankverbindung:</span> Oberbank BLZ:
                15000
              </p>
              <p>
                <span className="font-medium text-foreground">IBAN:</span> AT59 1500 0044 2101 9847
              </p>
            </div>
          </div>
        </div>

        <hr className="my-10 border-wood-200/60" />

        <div className="space-y-8 text-sm leading-relaxed text-foreground/80">
          <div>
            <h2 className="font-playfair text-lg font-semibold text-foreground">
              Bildergalerien
            </h2>
            <p className="mt-2">
              Die Fotos in den Bildergalerien von tischlerservice4you.at sind zum Teil eigene
              Bilder/Fotomontagen bzw. Bilder unserer Lieferanten. Produktfotos sind Symbolfotos und
              dienen der Veranschaulichung oder zur Inspiration.
            </p>
            <p className="mt-2">
              Es kann daher sein, dass einzelne Produkte nicht oder nicht mehr in der abgebildeten
              Form erhältlich sind.
            </p>
            <p className="mt-2">Wir ersuchen allfällige Copyrights zu beachten.</p>
          </div>

          <div>
            <h2 className="font-playfair text-lg font-semibold text-foreground">
              Haftungsausschluss
            </h2>
            <p className="mt-2">
              Trotz sorgfältiger Prüfung können wir keine Haftung für die Inhalte externer Links
              übernehmen. Für den Inhalt dieser Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-playfair text-lg font-semibold text-foreground">
              Gender Mainstream
            </h2>
            <p className="mt-2">
              Wir haben uns bemüht geschlechtsneutral zu formulieren. Sollten geschlechtsspezifische
              Bezeichnungen vorkommen, geschieht dies ausschließlich aus Gründen der leichteren
              Lesbarkeit.
            </p>
          </div>
        </div>

        <hr className="my-10 border-wood-200/60" />

        <p className="text-center text-sm text-muted-foreground">
          tischlerservice<span className="font-semibold text-warm-400">4</span>you.at &amp; ein
          aufmerksames Team
        </p>
      </div>
    </section>
  );
}
