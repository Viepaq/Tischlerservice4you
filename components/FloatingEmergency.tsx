"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 120;

export default function FloatingEmergency() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:+436642509912"
      className={`floating-notdienst fixed z-50 flex items-center gap-2 rounded-full bg-emergency px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emergency/25 transition-all duration-300 hover:scale-105 lg:hidden bottom-6 right-6 max-md:px-5 max-md:py-3.5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      style={{ maxWidth: "calc(100vw - 2.5rem)" }}
      aria-label="Notdienst anrufen"
    >
      <Phone className="h-4 w-4 shrink-0" />
      <span className="truncate">Notdienst</span>
    </a>
  );
}
