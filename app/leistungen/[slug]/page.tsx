import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  ArrowUpRight,
  Users,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/services";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Tischlerservice4you Wien`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  const paragraphs = service.longDescription.split("\n\n");

  return (
    <>
      {/* ── Hero ── */}
        <section className="relative bg-gradient-to-b from-wood-50 to-warm-50/60 pb-0 pt-24 sm:pt-28 max-md:pt-20 max-md:pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/#leistungen"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground max-md:mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle Leistungen
          </Link>

          <div className="grid items-center gap-10 pb-12 lg:grid-cols-2 max-md:gap-6">
            <div>
              <Badge variant="warm" className="mb-4">
                Leistung
              </Badge>
              <h1 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl max-md:text-2xl">
                {service.title}
              </h1>
              <p className="mt-3 font-playfair text-lg italic text-warm-400">
                {service.tagline}
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 max-md:flex-col max-md:w-full">
                <Button size="lg" className="max-md:w-full" asChild>
                  <Link href="/kontakt">Jetzt anfragen</Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 max-md:w-full" asChild>
                  <a href="tel:013305557">
                    <Phone className="h-4 w-4" />
                    Anrufen
                  </a>
                </Button>
              </div>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border max-md:aspect-[4/3]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="!relative h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="border-t border-border/60 bg-white py-20 sm:py-28 max-md:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Long description */}
              <div className="space-y-4">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <Separator className="my-10" />

              {/* Service details */}
              <h2 className="font-playfair text-2xl font-bold text-foreground">
                Was wir für Sie tun
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-2.5 rounded-lg border border-wood-200/50 bg-gradient-to-r from-wood-50/60 to-warm-50/40 p-4"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-500" />
                    <span className="text-sm text-foreground">{detail}</span>
                  </div>
                ))}
              </div>

              {/* References */}
              {service.references && service.references.length > 0 && (
                <div className="mt-10">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Referenzen
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.references.map((ref) => (
                      <span
                        key={ref}
                        className="rounded-full border border-wood-200/60 bg-wood-50 px-3.5 py-1.5 text-sm text-muted-foreground"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 self-start max-md:mt-8">
              <div className="sticky top-28 space-y-4">
                {/* Highlights */}
                {service.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-wood-200/50 bg-gradient-to-br from-wood-50 to-warm-50 p-6 max-md:p-5"
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-wood-500" />
                      <h4 className="font-semibold text-foreground">
                        {h.title}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                ))}

                {/* CTA */}
                <div className="rounded-xl border border-border bg-white p-6 max-md:p-5">
                  <h3 className="font-playfair text-lg font-semibold">
                    Interesse geweckt?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Kontaktieren Sie uns für eine unverbindliche Beratung.
                  </p>
                  <div className="mt-5 space-y-2.5">
                    <Button className="w-full" size="lg" asChild>
                      <Link href="/kontakt">Jetzt anfragen</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      size="lg"
                      asChild
                    >
                      <a href="tel:013305557">
                        <Phone className="h-4 w-4" />
                        Anrufen
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Services ── */}
      <section className="border-t border-wood-200/40 bg-gradient-to-b from-wood-50 via-warm-50 to-wood-100/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h3 className="font-playfair text-2xl font-bold text-foreground">
            Weitere Leistungen
          </h3>
          <p className="mt-2 text-muted-foreground">
            Entdecken Sie unser gesamtes Leistungsspektrum.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-md:grid-cols-1 max-md:gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/leistungen/${s.slug}`}
                className="group rounded-xl border border-wood-200/50 bg-white/90 p-6 backdrop-blur-sm transition-all hover:border-warm-300 hover:bg-white hover:shadow-md"
              >
                <h4 className="font-playfair text-lg font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {s.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Mehr erfahren
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
