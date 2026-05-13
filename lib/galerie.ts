export type GalerieKategorie = "Alle" | "Türen" | "Fenster" | "Möbel" | "Sonstiges";

export interface GalerieFoto {
  src: string;
  alt: string;
  kategorie: GalerieKategorie;
}

const GALERIE_DATEIEN = [
  "PHOTO-2026-05-05-20-59-33.jpg",
  "PHOTO-2026-05-05-20-59-34 5.jpg",
  "PHOTO-2026-05-05-20-59-34 7.jpg",
  "PHOTO-2026-05-05-20-59-35 10.jpg",
  "PHOTO-2026-05-05-20-59-35 2.jpg",
  "PHOTO-2026-05-05-20-59-35 3.jpg",
  "PHOTO-2026-05-05-20-59-35 5.jpg",
  "PHOTO-2026-05-05-20-59-35 8.jpg",
  "PHOTO-2026-05-05-20-59-35.jpg",
  "PHOTO-2026-05-05-20-59-36 11.jpg",
  "PHOTO-2026-05-05-20-59-36 2.jpg",
  "PHOTO-2026-05-05-20-59-36 5.jpg",
  "PHOTO-2026-05-05-20-59-36 7.jpg",
  "PHOTO-2026-05-05-21-07-46.jpg",
  "PHOTO-2026-05-05-21-07-47 3.jpg",
  "PHOTO-2026-05-05-21-07-48 3.jpg",
  "PHOTO-2026-05-05-21-07-48 5.jpg",
  "PHOTO-2026-05-05-21-07-48 6.jpg",
  "PHOTO-2026-05-05-21-07-48.jpg",
  "PHOTO-2026-05-06-08-26-37.jpg",
  "PHOTO-2026-05-06-19-47-16 2.jpg",
  "PHOTO-2026-05-06-19-47-16.jpg",
  "PHOTO-2026-05-06-19-47-17.jpg",
  "PHOTO-2026-05-06-19-47-18.jpg",
  "PHOTO-2026-05-06-19-47-19 2.jpg",
  "PHOTO-2026-05-06-19-47-19 3.jpg",
  "PHOTO-2026-05-06-19-47-19.jpg",
  "PHOTO-2026-05-06-19-47-24 2.jpg",
  "PHOTO-2026-05-06-19-47-24.jpg",
  "PHOTO-2026-05-06-19-47-25 3.jpg",
  "PHOTO-2026-05-06-19-47-25 4.jpg",
  "PHOTO-2026-05-06-19-47-25.jpg",
  "PHOTO-2026-05-06-19-50-04 2.jpg",
  "PHOTO-2026-05-06-19-50-04.jpg",
  "PHOTO-2026-05-06-19-50-05 2.jpg",
  "PHOTO-2026-05-06-19-50-05.jpg",
] as const;

export const GALERIE_FOTOS: GalerieFoto[] = GALERIE_DATEIEN.map((datei) => ({
  src: `/images/galerie/${encodeURIComponent(datei)}`,
  alt: "Foto aus der Galerie",
  kategorie: "Sonstiges",
}));
