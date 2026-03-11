"use client";

import { Phone } from "lucide-react";

export default function FloatingEmergency() {
  return (
    <a
      href="tel:+436642509912"
      className="floating-notdienst fixed z-50 flex items-center gap-2 rounded-full bg-emergency px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emergency/25 transition-all duration-300 hover:scale-105 lg:hidden bottom-6 right-6 max-md:px-5 max-md:py-3.5"
      style={{ maxWidth: "calc(100vw - 2.5rem)" }}
      aria-label="Notdienst anrufen"
    >
      <Phone className="h-4 w-4 shrink-0" />
      <span className="truncate">Notdienst</span>
    </a>
  );
}
