"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/#leistungen", label: "LEISTUNGEN" },
  { href: "/#ueber-uns", label: "ÜBER UNS" },
  { href: "/galerie", label: "GALERIE" },
  { href: "/notdienst", label: "NOTDIENST" },
  { href: "/kontakt", label: "KONTAKT" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!isHome) {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 60);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-wood-200/35 bg-white/55 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="flex h-16 w-full items-center justify-between px-4 lg:px-6 overflow-visible max-md:h-[68px]">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center transition-opacity duration-300 max-md:flex-1 max-md:overflow-hidden max-md:h-[68px]",
              isHome && !scrolled && "pointer-events-none opacity-0"
            )}
            style={{ marginTop: "6px" }}
          >
            <Image
              src="/images/Tischler Logo1.png"
              alt="Tischlerservice4you"
              width={560}
              height={130}
              className="h-[110px] w-auto object-contain transition-[filter,opacity] duration-500 max-md:h-[165px] max-md:translate-y-[7px]"
              style={!scrolled ? { filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.55)) brightness(1.15)" } : undefined}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-semibold tracking-[0.16em] transition-colors duration-300",
                  scrolled
                    ? "text-wood-800/90 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Phone + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:013305557"
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                scrolled ? "text-wood-500 hover:bg-wood-50 hover:text-foreground" : "text-white/50 hover:text-white"
              )}
              aria-label="Anrufen"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/kontakt"
              className={cn(
                "rounded-full px-5 py-2 text-[11px] font-semibold tracking-wider transition-all duration-300 border",
                scrolled
                  ? "border-wood-600/50 text-wood-700 hover:-translate-y-0.5 hover:border-wood-700 hover:bg-wood-100/30"
                  : "border-white/40 text-white hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10"
              )}
            >
              ANFRAGEN
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:013305557"
              className={cn(
                "flex h-9 w-9 items-center justify-center transition-colors max-md:min-h-[44px] max-md:min-w-[44px]",
                scrolled ? "text-wood-500 hover:text-foreground" : "text-white/60 hover:text-white"
              )}
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "flex h-9 w-9 items-center justify-center transition-colors max-md:min-h-[44px] max-md:min-w-[44px]",
                scrolled ? "text-wood-600 hover:text-foreground" : "text-white/60 hover:text-white"
              )}
              aria-label="Menü"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-all duration-300 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-md max-md:bg-black/45 max-md:backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-full max-w-xs max-md:max-w-[85vw] border-l border-wood-200/60 bg-white transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-24 items-center justify-between px-5">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <Image
                src="/images/Tischler Logo1.png"
                alt="Tischlerservice4you"
                width={260}
                height={84}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 min-h-[44px] min-w-[44px] items-center justify-center text-wood-400 hover:text-foreground"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 text-sm font-medium tracking-wider text-wood-700 transition-colors hover:text-foreground max-md:py-4"
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-wood-300" />
              </Link>
            ))}
            <div className="mx-4 my-3 h-px bg-wood-100" />
            <a
              href="tel:013305557"
              className="flex items-center gap-2.5 px-4 py-3.5 text-sm text-wood-600 hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-wood-400" />
              013305557
            </a>
            <div className="mt-3 px-3">
              <Link
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full border border-wood-600/50 bg-transparent py-3 text-center text-sm font-semibold tracking-wider text-wood-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-wood-700 hover:bg-wood-100/30 max-md:min-h-[48px] max-md:flex max-md:items-center max-md:justify-center"
              >
                ANFRAGEN
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
