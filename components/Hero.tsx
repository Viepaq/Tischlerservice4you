"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Phone } from "lucide-react";
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
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
        style={{ opacity: textOpacity }}
      >
        <div className="flex flex-col items-center -translate-y-32 max-md:-translate-y-20">
          <Image
            src="/images/Tischler Logo1.png"
            alt="Tischlerservice4you"
            width={900}
            height={506}
            priority
            className="pointer-events-none w-[min(94vw,860px)] h-auto object-contain drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]"
            sizes="(max-width: 768px) 94vw, 860px"
          />

          <p className="mx-auto -mt-[80px] md:-mt-[220px] max-w-sm text-base leading-relaxed text-white/90 sm:text-lg sm:leading-relaxed sm:max-w-xl [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
            Fenster, T&uuml;ren, Montagen und Reparaturen &mdash; professionell, fair
            und verl&auml;sslich. <span style={{ color: "rgb(153,27,27)", fontWeight: 800, textShadow: "none" }}>Seit &uuml;ber 25 Jahren in Wien.</span>
          </p>

          <div className="relative z-20 mt-8 flex flex-col items-center gap-3 sm:flex-row max-md:w-full max-md:max-w-[280px] max-md:gap-2">
            <Button
              size="xl"
              className="w-full max-md:justify-center max-md:min-h-[44px] max-md:h-auto max-md:rounded-lg max-md:px-5 max-md:text-sm max-md:font-medium max-md:shadow-none bg-transparent border border-white/35 text-white hover:-translate-y-0.5 hover:border-white/75 hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              asChild
            >
              <Link href="/kontakt">Jetzt anfragen</Link>
            </Button>
            <Button
              size="xl"
              className="w-full max-md:justify-center max-md:min-h-[44px] max-md:h-auto max-md:rounded-lg max-md:px-5 max-md:text-sm max-md:font-medium max-md:shadow-none bg-transparent border border-white/35 text-white hover:-translate-y-0.5 hover:border-white/75 hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              asChild
            >
              <a href="tel:013305557" aria-label="Jetzt anrufen">
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </a>
            </Button>
          </div>
        </div>

      </div>


      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("notdienst")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 transition-colors hover:text-white/60 max-md:hidden"
        aria-label="Weiter"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
