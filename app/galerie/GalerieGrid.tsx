"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALERIE_FOTOS, type GalerieKategorie } from "@/lib/galerie";

const KATEGORIEN: GalerieKategorie[] = ["Alle", "Türen", "Fenster", "Möbel"];

export default function GalerieGrid() {
  const [aktiv, setAktiv] = useState<GalerieKategorie>("Alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gefiltert =
    aktiv === "Alle" ? GALERIE_FOTOS : GALERIE_FOTOS.filter((f) => f.kategorie === aktiv);

  const prev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + gefiltert.length) % gefiltert.length);
  }, [lightbox, gefiltert.length]);

  const next = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % gefiltert.length);
  }, [lightbox, gefiltert.length]);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (GALERIE_FOTOS.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-stone-300 bg-stone-50 py-20 text-center">
        <p className="text-lg font-semibold text-foreground">Fotos folgen in Kürze</p>
        <p className="text-sm text-muted-foreground">
          Wir bereiten unsere Galerie gerade vor — schauen Sie bald wieder vorbei.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Kategorie-Filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {KATEGORIEN.filter(
          (k) => k === "Alle" || GALERIE_FOTOS.some((f) => f.kategorie === k)
        ).map((k) => (
          <button
            key={k}
            onClick={() => setAktiv(k)}
            className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all min-h-[44px] ${
              aktiv === k
                ? "bg-amber-700 text-white shadow-sm"
                : "border border-stone-200 bg-white text-stone-600 hover:border-amber-300 hover:text-foreground"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      {/* Gleichmäßiges Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gefiltert.map((foto, i) => (
          <button
            key={foto.src}
            onClick={() => setLightbox(i)}
            className="group block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone-100">
              <Image
                src={foto.src}
                alt={foto.alt}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && gefiltert[lightbox] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          {gefiltert.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Vorheriges Foto"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-h-[85vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gefiltert[lightbox].src}
              alt={gefiltert[lightbox].alt}
              width={1400}
              height={900}
              className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Next */}
          {gefiltert.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Nächstes Foto"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

          {/* Counter */}
          {gefiltert.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              {lightbox + 1} / {gefiltert.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
