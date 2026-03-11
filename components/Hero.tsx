"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = scrollY * 0.3;
  const textOpacity = Math.max(0, 1 - scrollY * 0.002);

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translateY(${parallax}px) scale(${1 + scrollY * 0.0003})` }}
      >
        <Image
          src="/Mock3.jpg"
          alt="Tischlerwerkstatt — Handwerk mit Tradition"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-900/60 via-warm-900/40 to-warm-900/70 max-md:from-warm-900/75 max-md:via-warm-900/55 max-md:to-warm-900/80" />

      {/* Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
        style={{ opacity: textOpacity }}
      >
        <p className="mb-4 text-sm font-medium tracking-[0.25em] text-warm-400 sm:text-base max-md:text-white/90 max-md:[text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          TISCHLERSERVICE4YOU
        </p>

        <h1 className="max-w-4xl font-playfair text-4xl font-bold leading-[1.1] text-white max-md:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-md:[text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
          <span className="font-playfair italic font-normal text-warm-200 max-md:[text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
            Willkommen bei
          </span>
          <br />
          Ihrem Tischler
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/60 max-md:hidden sm:text-base sm:leading-relaxed">
          Fenster, T&uuml;ren, Montagen und Reparaturen &mdash; professionell,
          fair und verl&auml;sslich. Seit &uuml;ber 25 Jahren in Wien.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row max-md:w-full max-md:max-w-[280px] max-md:gap-2">
          <Button
            size="xl"
            className="w-full max-md:justify-center max-md:h-10 max-md:rounded-lg max-md:px-5 max-md:text-sm max-md:font-medium max-md:shadow-none bg-warm-400 text-warm-900 hover:bg-warm-300"
            asChild
          >
            <Link href="/kontakt">Jetzt anfragen</Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            className="w-full max-md:justify-center max-md:h-10 max-md:rounded-lg max-md:px-5 max-md:text-sm max-md:font-medium max-md:shadow-none border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white max-md:border-white/40 max-md:bg-white/10 max-md:backdrop-blur-sm"
            asChild
          >
            <a href="tel:+436642509912" className="gap-2">
              <Phone className="h-4 w-4 max-md:h-3.5 max-md:w-3.5" />
              Notdienst 24H
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#notdienst"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 transition-colors hover:text-white/60 max-md:bottom-6"
        aria-label="Weiter"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
