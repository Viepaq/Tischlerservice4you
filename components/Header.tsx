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
            ? "border-b border-wood-200/60 bg-white/90 shadow-sm shadow-wood-200/20 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Tischler Logo1.png"
              alt="Tischlerservice4you"
              width={140}
              height={48}
              className={cn(
                "h-10 w-auto object-contain transition-all duration-500 max-md:h-8",
                !scrolled && "brightness-0 invert"
              )}
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
                  "text-[11px] font-medium tracking-[0.15em] transition-colors duration-300",
                  scrolled
                    ? "text-wood-600 hover:text-foreground"
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
              href="tel:+436642509912"
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
                "rounded-full px-5 py-2 text-[11px] font-semibold tracking-wider transition-all duration-300",
                scrolled
                  ? "bg-wood-700 text-white hover:bg-wood-800"
                  : "bg-warm-400/90 text-warm-900 hover:bg-warm-400"
              )}
            >
              ANFRAGEN
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+436642509912"
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
          <div className="flex h-16 items-center justify-between px-5">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
              <Image
                src="/images/Tischler Logo1.png"
                alt="Tischlerservice4you"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center text-wood-400 hover:text-foreground"
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
              href="tel:+436642509912"
              className="flex items-center gap-2.5 px-4 py-3.5 text-sm text-wood-600 hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-wood-400" />
              +43 664 250 99 12
            </a>
            <div className="mt-3 px-3">
              <Link
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-wood-700 py-3 text-center text-sm font-semibold tracking-wider text-white hover:bg-wood-800 max-md:min-h-[48px] max-md:flex max-md:items-center max-md:justify-center"
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
