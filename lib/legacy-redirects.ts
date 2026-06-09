/**
 * 301-Weiterleitungen von der alten Site (index.html?menu=...) zur neuen URL-Struktur.
 * Quelle: tischler-old/tischlerservice4you.at
 */
export const LEGACY_MENU_REDIRECTS: Record<string, string> = {
  // Leistungen
  "parkette_laminate.html": "/leistungen/parkette-laminate",
  "fenster_tueren.html": "/leistungen/fenster-tueren",
  "ergaenzungen.html": "/leistungen/ergaenzungen",
  "montagen.html": "/leistungen/montagen",
  "umbau_von_konstruktionen.html": "/leistungen/umbau-konstruktionen",
  "reparaturen.html": "/leistungen/reparaturen",
  "wiederherstellung.html": "/leistungen/reparaturen",
  "bruch_verlust.html": "/leistungen/reparaturen",

  // Notdienst
  "nach_einbruch.html": "/notdienst#einbruch",
  "nach_einbruch-24h.html": "/notdienst",
  "unwetterschaeden-24h.html": "/notdienst",
  "unfaelle-24h.html": "/notdienst",

  // Sonstiges
  "galerien.html": "/galerie",
  "impressum.html": "/impressum",
  "kontaktformular.html": "/kontakt",
  "lageplan.html": "/kontakt",
  "philosophie.html": "/#ueber-uns",
  "gedankenflug.html": "/#ueber-uns",

  // Alte Baustellen-Seiten ohne direktes Pendant → nächstbeste Leistung
  "abbau_und_neuaufbau.html": "/leistungen/montagen",
  "abdichtungen.html": "/leistungen/umbau-konstruktionen",
  "bauwerksabdichtungen.html": "/leistungen/umbau-konstruktionen",
  "rigips_verlegen_verspachteln.html": "/leistungen/montagen",
  "schwarzdeckungen.html": "/leistungen/umbau-konstruktionen",
  "haustechnik.html": "/leistungen/montagen",
  "reinigung.html": "/",
};
