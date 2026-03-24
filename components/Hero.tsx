"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
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
          src="/images/Holzfoto1.jpg"
          alt="Tischlerwerkstatt — Handwerk mit Tradition"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* Warm overlay — lighter for inviting feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-900/10 via-warm-900/5 to-warm-900/15 max-md:from-warm-900/15 max-md:via-warm-900/8 max-md:to-warm-900/20" />

      {/* Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center max-md:justify-start max-md:pt-64"
        style={{ opacity: textOpacity }}
      >
        <p className="mb-3 hidden text-xs font-semibold tracking-[0.3em] text-white/80 uppercase max-md:block [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
          Tischlerservice4you
        </p>

        <h1 className="max-w-4xl font-playfair text-4xl font-bold leading-[1.1] text-white max-md:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-md:[text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
          <span className="font-playfair italic font-normal text-warm-100 [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_0_30px_rgba(0,0,0,0.25)]">
            Willkommen bei
          </span>
          <br />
          Ihrem Tischler
        </h1>

        <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed sm:max-w-lg max-md:[text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
          Fenster, T&uuml;ren, Montagen und Reparaturen &mdash; professionell,
          fair und verl&auml;sslich. Seit &uuml;ber 25 Jahren in Wien.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row max-md:w-full max-md:max-w-[280px] max-md:gap-2">
          <Button
            size="xl"
            className="w-full max-md:justify-center max-md:h-10 max-md:rounded-lg max-md:px-5 max-md:text-sm max-md:font-medium max-md:shadow-none bg-warm-400 text-white hover:bg-warm-300"
            asChild
          >
            <Link href="/kontakt">Jetzt anfragen</Link>
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
