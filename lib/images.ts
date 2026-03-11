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
      src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
      alt: "Professionelle Montagearbeiten",
    },
    reparaturen: {
      src: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&q=80",
      alt: "Reparaturarbeiten",
    },
    ergaenzungen: {
      src: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80",
      alt: "Individuelle Ergänzungen",
    },
    "umbau-konstruktionen": {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      alt: "Umbau und Konstruktionen",
    },
  },
} as const;

export type ServiceSlug = keyof typeof images.services;
