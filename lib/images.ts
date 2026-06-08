/**
 * Zentrale Bild-Verwaltung für die gesamte Website.
 *
 * SO VERWENDEST DU EIGENE FOTOS:
 * 1. Lege deine Bilder in /public/images/ ab (z.B. public/images/hero.jpg)
 * 2. Ersetze die URL hier durch den lokalen Pfad: "/images/hero.jpg"
 * 3. Fertig — die gesamte Website verwendet automatisch das neue Bild.
 *
 * Empfohlene Bildgrößen:
 * - Hero:     1920×1080px (oder größer)
 * - Services: 800×600px
 * - About:    800×600px
 * - Logo:     SVG oder 200×60px PNG
 */

export const images = {
  hero: {
    src: "/Mock3.jpg",
    alt: "Tischlerwerkstatt — Handwerk mit Tradition",
  },

  about: {
    src: "/Real1.webp",
    alt: "Tischlermeister bei der Arbeit",
  },

  services: {
    "parkette-laminate": {
      src: "/Menu Fenster Türen.jpg",
      alt: "Parkettboden verlegen",
    },
    "fenster-tueren": {
      src: "/Mock1.jpeg",
      alt: "Fenster und Türen Montage",
    },
    montagen: {
      src: "/images/galerie/PHOTO-2026-05-06-08-26-37.jpg",
      alt: "Professionelle Montagearbeiten",
    },
    reparaturen: {
      src: "/images/galerie/PHOTO-2026-05-05-20-59-36%203.jpg",
      alt: "Reparaturarbeiten",
    },
    ergaenzungen: {
      src: "/images/galerie/PHOTO-2026-05-05-20-59-35%2010.jpg",
      alt: "Individuelle Ergänzungen",
    },
    "umbau-konstruktionen": {
      src: "/images/galerie/PHOTO-2026-05-06-19-47-16.jpg",
      alt: "Umbau und Konstruktionen",
    },
  },
} as const;

export type ServiceSlug = keyof typeof images.services;
