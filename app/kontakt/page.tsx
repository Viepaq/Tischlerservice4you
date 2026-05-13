import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Tischlerservice4you Wien",
  description:
    "Kontaktieren Sie uns für Tischlerarbeiten in Wien. Bäuerlegasse 24/G21-22, 1200 Wien. Telefon: 013305557.",
};

export default function KontaktPage() {
  return (
    <section className="min-h-[calc(100vh-200px)] border-t border-wood-200/40 bg-gradient-to-b from-wood-50 to-warm-50/50 py-16 sm:py-20 max-md:pt-20 max-md:pb-12">
      <div className="mx-auto max-w-xl px-5 lg:px-8">
        <h1 className="font-playfair text-2xl font-bold text-foreground sm:text-3xl max-md:text-xl">
          Jetzt anfragen
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Füllen Sie das Formular aus — wir melden uns schnellstmöglich.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
