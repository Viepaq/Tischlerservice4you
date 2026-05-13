import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import EnlargeableImage from "@/components/EnlargeableImage";
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

  const paragraphs = service.longDescription.split("\n\n");
  const serviceGallery = service.galleryImages?.length
    ? service.galleryImages
    : [service.image];
  const galleryMain = serviceGallery[0];
  const gallerySide = serviceGallery.slice(1, 3);
  const showBottomImage = !["montagen", "reparaturen", "ergaenzungen"].includes(service.slug);
  const bottomImage =
    service.slug === "parkette-laminate"
      ? "/images/galerie/PHOTO-2026-05-06-19-47-25.jpg"
      : service.slug === "fenster-tueren"
      ? "/images/galerie/PHOTO-2026-05-06-19-47-17.jpg"
      : service.slug === "umbau-konstruktionen"
      ? "/images/galerie/PHOTO-2026-05-06-19-47-18.jpg"
      : serviceGallery[2] ?? serviceGallery[1] ?? galleryMain;
  const extraText = service.description;

  return (
    <main className="bg-white pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Link
          href="/#leistungen"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Alle Leistungen
        </Link>

        <header className="mt-8 text-center">
          <h1 className="font-playfair text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 font-playfair text-lg italic text-warm-400">
            {service.tagline}
          </p>
        </header>

        <section className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gleiches Text-Content */}
          <div>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 max-md:flex-col">
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

          {/* Bilder neben dem Text */}
          <aside className="grid gap-4">
            <EnlargeableImage
              src={galleryMain}
              alt={`${service.title} Bild 1`}
              wrapperClassName="aspect-[16/10] overflow-hidden rounded-2xl border border-wood-200/50 bg-wood-50"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {[0, 1].map((slot) => {
                const image = gallerySide[slot];
                if (!image) {
                  return (
                    <div
                      key={`placeholder-${slot}`}
                      className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-wood-300/70 bg-wood-50/60 p-4 text-center text-sm text-muted-foreground"
                    >
                      Platz für weiteres Bild
                    </div>
                  );
                }

                return (
                  <EnlargeableImage
                    key={image}
                    src={image}
                    alt={`${service.title} Bild ${slot + 2}`}
                    wrapperClassName="aspect-[4/3] overflow-hidden rounded-2xl border border-wood-200/50 bg-wood-50"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                );
              })}
            </div>
          </aside>
        </section>

        <section className="mt-16 sm:mt-32 lg:mt-36">
          <div
            className={
              showBottomImage
                ? "grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                : "mx-auto max-w-5xl text-center"
            }
          >
            {showBottomImage && (
              <EnlargeableImage
                src={bottomImage}
                alt={`${service.title} Zusatzbild`}
                wrapperClassName="aspect-[4/3] overflow-hidden rounded-2xl border border-wood-200/50 bg-wood-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}

            <div className={showBottomImage ? "" : "text-center"}>
              <h2 className="font-playfair text-2xl font-bold text-foreground sm:text-3xl">
                Was wir für Sie tun
              </h2>
              <p
                className={
                  showBottomImage
                    ? "mt-4 leading-relaxed text-muted-foreground"
                    : "mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground"
                }
              >
                {extraText}
              </p>

              <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
                {service.details.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-xl border border-wood-200/60 bg-white/90 px-4 py-3 text-sm text-foreground"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
