import { images, type ServiceSlug } from "./images";

export interface ServiceHighlight {
  title: string;
  text: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  shortDescription: string;
  icon: string;
  description: string;
  longDescription: string;
  details: string[];
  highlights: ServiceHighlight[];
  references?: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "parkette-laminate",
    title: "Parkette & Laminate",
    tagline: "Parkett oder auch Laminat — es ist schon gut wenn man es hat!",
    shortDescription:
      "Professionelles Verlegen, Reparieren und Wiederherstellen von Parkett- und Laminatböden.",
    icon: "Layers",
    description:
      "Vom fachmännischen Verlegen über Sesselleisten bis zur kompletten Wiederherstellung — wir kümmern uns um Ihren Boden.",
    longDescription:
      "Parkett ist ein Fußbodenbelag aus Holz für Innenräume. Hartholz wird in kleine Stücke gesägt und nach Mustern zusammengesetzt. Qualitativ Oberklasse, robust und mit hohem Wohnwert — Parkettböden sind über Jahrzehnte und Generationen haltbar und können durch Schleifen und Versiegeln mehrfach restauriert werden.\n\nMehrschichtparkette bestehen aus zerkleinertem Holz, das mit Bindemitteln oder mechanischen Verbindungen zu ganzen Holzschichten verarbeitet und mehrschichtig verbunden wird.\n\nLaminat ist in der Regel wesentlich preisgünstiger und besteht aus Holzfaserstoffen mit Melaminharz. Es ist robust und widerstandsfähig, allerdings vertragen Laminate weder Nässe noch ständige Feuchtigkeit. Verlegung erfolgt wie bei Parkett.\n\nWir verarbeiten beigestelltes Material und Produkte nahezu aller Hersteller und Marken. Aus ökologischen Gründen verzichten wir auf Exotenhölzer aus Regenwäldern.",
    details: [
      "Verlegen von Parkett und Laminat",
      "Sesselleisten montieren",
      "Fachberatung und Verkauf",
      "Verarbeitung aller Hersteller und Marken",
      "Beigestelltes Material möglich",
      "Wiederherstellung beschädigter Böden",
      "Schleifen und Versiegeln",
      "Ergänzungen und Reparaturen",
      "Notdienste nach Einbruch und Unwetter",
    ],
    highlights: [
      {
        title: "Generationen haltbar",
        text: "Parkettböden können durch Schleifen und Versiegeln mehrfach restauriert werden — ein Boden für Generationen.",
      },
      {
        title: "Alle Marken & Materialien",
        text: "Wir verarbeiten beigestelltes Material und Produkte nahezu aller Hersteller und Marken.",
      },
    ],
    references: ["Hausverwaltungen", "Privatkunden"],
    image: images.services["parkette-laminate"].src,
  },
  {
    slug: "fenster-tueren",
    title: "Fenster & Türen",
    tagline:
      "Neue Fenster wie auch Türen — das sieht jetzt vornehm aus!",
    shortDescription:
      "Beratung, Verkauf, Montage und Sicherheitslösungen für Fenster und Türen.",
    icon: "DoorOpen",
    description:
      "Von der Beratung über den Verkauf bis zur fachgerechten Montage. Inklusive Einbruchschutz, Sicherheitsbalken und Sperrgitter.",
    longDescription:
      "Fenster sind die Augen jedes Objekts. Sie schaffen Licht, verschaffen Sicht und schützen vor der Witterung. Türen sind Zugänge zu Bereichen, die manchmal verschlossen gehalten werden müssen. Fenster und Türen gibt es in Holz, Kunststoff, Aluminium oder einem Mix aus mehreren Materialien.\n\nEin wichtiges Thema ist die Altbausanierung — wir begleiten Sie von der Beratung bis zur Anschaffung und der finalen Qualitätsmontage. Unser Team verfügt über umfangreiches Know-how und jahrelange Erfahrung.\n\nNeben der Montage kümmern wir uns um sämtliche Einstellungen an bestehenden Anlagen: Damit alles bestens schließt, nichts hakelt oder klemmt — von der Schnalle bis zur integrierten Jalousie und dem Rollladen.\n\nBeim Thema Sicherheit montieren wir Fensterschlösser, Riegel, Sicherheitsbalken und Sperrgitter, um Ihre Bereiche effizient vor Kriminellen zu schützen.",
    details: [
      "Beratung, Verkauf und Qualitätsmontage",
      "Einstellungen an bestehenden Anlagen",
      "Altbausanierung und Modernisierung",
      "Montage in Holz, Kunststoff und Aluminium",
      "Fensterschlösser und Riegel",
      "Sicherheitsbalken und Sperrgitter",
      "Einbruchschutz-Lösungen",
      "Integrierte Jalousien und Rollläden",
      "Notdienste nach Einbruch und Unwetter",
    ],
    highlights: [
      {
        title: "Sicherheit zuerst",
        text: "Wir montieren Fensterschlösser, Riegel, Sicherheitsbalken und Sperrgitter zum effektiven Einbruchschutz.",
      },
      {
        title: "Altbausanierung",
        text: "Von der Beratung über die Anschaffung bis zur finalen Qualitätsmontage — wir begleiten Sie durch den gesamten Prozess.",
      },
    ],
    references: ["Aufsperr- und Schlüsseldienste", "Hausverwaltungen", "Privatkunden"],
    image: images.services["fenster-tueren"].src,
  },
  {
    slug: "montagen",
    title: "Montagen",
    tagline: "Wir machen Montagen — ganz ohne Blamagen!",
    shortDescription:
      "Fachgerechte Montage von Möbeln, Galerien, Karniesen, Jalousien und mehr.",
    icon: "Wrench",
    description:
      "Ob Möbel, Fenster, Türen, Galerien, Karniesen, Jalousien, Rollos oder Feuerlöscher — wir montieren alles fachgerecht.",
    longDescription:
      "Montage ist eine unserer Kernkompetenzen. Etwas zu montieren und in die finale Form und Funktionalität zu bringen, ist eine der Grundfesten unseres Handelns — das gilt auch für Demontagen, um alles nachher möglicherweise ergänzt und repariert wieder aufzubauen.\n\nWir montieren Fenster, Türen und deren Sicherheitseinrichtungen. Möbel, die Sie zum Sonderpreis im Internet oder privat gekauft haben und deren Zusammenbau Sie nicht dem \u201EPfuscher\u201C ohne Garantie überlassen wollen.\n\nWir hängen Galerien und Bilder sicher und mit dem nötigen Geschmack an die schwierigsten Wände. Karniesen, Jalousien, Rollos, Schlüssel- und Erste-Hilfe-Kästen sowie Feuerlöscher stellen für uns keine Probleme dar.\n\nKurz gesagt: Alles, was Sie besitzen oder erwerben und montiert wie zusammengebaut gehört, erledigen wir im Nu — völlig irrelevant, ob in Augenhöhe, tief gebückt oder auf höchsten Leitern.",
    details: [
      "Möbelmontage und -aufbau",
      "Fenster- und Türenmontage",
      "Galerien und Bilder aufhängen",
      "Karniesen und Jalousien",
      "Rollos und Rollläden",
      "Schlüssel- und Erste-Hilfe-Kästen",
      "Feuerlöscher fachgerecht montieren",
      "De- und Remontage bei Renovierung",
      "Montage auf jeder Höhe und Fläche",
    ],
    highlights: [
      {
        title: "Kernkompetenz Montage",
        text: "Unser Team hat hohe Routine und sehr viel Erfahrung. Wir stolpern nicht über Probleme, die andere bereits zum Aufgeben gezwungen haben.",
      },
      {
        title: "Professionell statt Pfuscher",
        text: "Fachgerechte Montage mit Garantie — ob Internet-Kauf, Umzug oder Neueinrichtung.",
      },
    ],
    image: images.services["montagen"].src,
  },
  {
    slug: "reparaturen",
    title: "Reparaturen",
    tagline:
      "Wir schaffen das und noch viel mehr — den gleichen Zustand wie vorher!",
    shortDescription:
      "Wiederherstellung nach Einbruch, Unwetter, Unfall oder Missgeschick — inklusive Versicherungsabrechnung.",
    icon: "Hammer",
    description:
      "Reparatur und Wiederherstellung nach Einbruch, Unwetter, Unfall oder Missgeschick. Inklusive Objektsicherung und Versicherungsabrechnung.",
    longDescription:
      "Wiederherstellung bedeutet die Herstellung des Zustandes wie vor dem schadensverursachenden Ereignis. Ob Unwetter, Einbruch, Unfall oder ein Missgeschick ohne Fremdverschulden — unser Spezialisten-Team konzentriert sich auf genau diese Art von Reparaturen.\n\nWir reparieren Fenster, Türen, Parkette, Laminate und Verkleidungen. Wir ergänzen verlorene Teile an Holzzäunen, Toren und Geländern. Oft fügt sich der reparierte Teil wesentlich besser in die bestehende Umgebung als eine Neuanschaffung.\n\nWussten Sie, dass ein Türstock nach sorgfältigem Verkitten, Schleifen und Oberflächenbehandlung wie neu aussehen kann? Dass Kratzer, Schleifspuren und Dellen nahezu unsichtbar behebbar sind?\n\nDie Kosten sind in den meisten Fällen deutlich geringer als eine Neuanschaffung — das erleichtert auch die Verhandlung mit der Versicherung. Bei aufrechtem Versicherungsschutz übernehmen wir die Direktabrechnung.",
    details: [
      "Wiederherstellung nach Einbruch",
      "Reparatur nach Unwetter und Unfall",
      "Fenster, Türen, Parkette und Laminate",
      "Verkleidungen und Ergänzungen",
      "Holzzäune, Tore und Geländer",
      "Kratzer und Dellen unsichtbar beheben",
      "Verkitten, Schleifen, Oberflächenbehandlung",
      "Direktabrechnung mit Versicherung",
      "Bruch und Verlust ohne Fremdverschulden",
    ],
    highlights: [
      {
        title: "Reparatur statt Neuanschaffung",
        text: "Oft fügt sich der reparierte Teil besser in die Umgebung als eine Neuanschaffung — und ist deutlich günstiger.",
      },
      {
        title: "Versicherungsabwicklung",
        text: "Bei aufrechtem Versicherungsschutz übernehmen wir die Direktabrechnung. Vollmacht und Versicherungserklärung verfügbar.",
      },
    ],
    image: images.services["reparaturen"].src,
  },
  {
    slug: "ergaenzungen",
    title: "Ergänzungen",
    tagline:
      "Wenn Neues sich zum Alten fügt — ist die Ergänzung gut geglückt!",
    shortDescription:
      "Kleine Verbesserungen mit großer Wirkung — von Kindersicherungen bis Rollcontainer.",
    icon: "Puzzle",
    description:
      "Die kleinen Dinge, die den Unterschied machen: Wir machen genau das, was viele Betriebe nicht machen — auch Kleinigkeiten, für die große Branchenkollegen keine Zeit haben.",
    longDescription:
      "Wir machen genau das, was viele Betriebe eben nicht machen: auch Kleinigkeiten, für die unsere großen Branchenkollegen nicht die Zeit aufbringen können und schon gar nicht dafür ausgerichtet sind.\n\nEs ist oft schwierig, zu bestehenden Dingen eine passende Ergänzung zu finden. Bei Montage, Abbau, Neuaufbau oder Umbau kann es vorkommen, dass ein Teil fehlt oder erweitert werden muss. Genau dies passiert häufig bei Umzügen und Neuanordnung von Möbeln und Regalen.\n\nAuch ganz banale Dinge können fachmännisch ergänzt werden — zum Beispiel das Montieren von Rollen unter Schränken, um sie zu Rollcontainern zu machen.\n\nDen Möglichkeiten sind kaum Grenzen gesetzt. Gewusst wo — bei uns sind Sie an der richtigen Adresse!",
    details: [
      "Passende Ergänzungen zu Bestehendem finden",
      "Shelves und Borde ergänzend anschaffen",
      "Bodenelemente verstärken und wandmontieren",
      "Kaffeemaschine hinter einer Klappe verbergen",
      "Maßgenaue Kindersicherungen integrieren",
      "Rollen unter Schränken montieren",
      "Ergänzungen bei Umzügen und Umstellungen",
      "Individuelle Kleinigkeiten und Sonderwünsche",
      "Fehlende Teile passgenau nachfertigen",
    ],
    highlights: [
      {
        title: "Auch Kleinigkeiten",
        text: "Was die Großen in der Branche nicht machen, erledigen wir — schnell, passgenau und mit Liebe zum Detail.",
      },
      {
        title: "Kaum Grenzen",
        text: "Von Rollcontainern über Kindersicherungen bis zur versteckten Kaffeemaschine — den Möglichkeiten sind kaum Grenzen gesetzt.",
      },
    ],
    image: images.services["ergaenzungen"].src,
  },
  {
    slug: "umbau-konstruktionen",
    title: "Umbau & Konstruktionen",
    tagline:
      "Es verliert die Konstruktion — mit uns den Umbauschrecken schon!",
    shortDescription:
      "Umbauten, Neuaufbauten und kreative Konstruktionslösungen nach Maß.",
    icon: "Building",
    description:
      "Vom Abbau und Neuaufbau von Küchen und Schränken bis zum Umbau von Konstruktionen — kreative Lösungen für veränderte Anforderungen.",
    longDescription:
      "Es gibt Veränderungen, die sich zwanghaft ergeben, und solche, die man sich selbst gewünscht oder geplant hat. Plötzlich ist das Anforderungsprofil an Möbel, Parkette, Laminate, Unterkonstruktionen, Verkleidungen und Verschalungen ganz anders.\n\nHier bedarf es der Kreativität, Vorhandenes zu nutzen, möglichst mit Gleichem oder alternativ zu ergänzen und optisch in eine perfekte, funktionstüchtige Form zu bringen. Dabei nehmen wir Rücksicht auf Verbautes, Installationen und darauf, dass Dahinterliegendes auf Wunsch weiterhin zugänglich bleibt.\n\nBeim Abbau und Neuaufbau gilt: Es muss nicht gleich ein ganzer Umzug sein. Schon das Ausmalen oder ein technischer Einbau kann der Grund sein, dass Möbel weichen müssen. Fachkenntnisse sind dabei von allerhöchster Bedeutung.\n\nUnser Team hat hier jahrelange Erfahrung, das richtige Werkzeug und umfangreiches Know-how. Unser Preis-Leistungsverhältnis wird Sie positiv überraschen.",
    details: [
      "Aus Laden Türen machen",
      "Schränke umbauen und anpassen",
      "Glas in Theken einsetzen",
      "Türen von links auf rechts umschlagen",
      "Griffe und Beschläge modernisieren",
      "Sockel durch Beine ersetzen und umgekehrt",
      "Elemente wandtauglich verstärken",
      "Aus zwei Regalen ein Eckregal bauen",
      "Unterkonstruktionen verändern",
      "Kabel und Leitungen verstecken",
      "Wartungsöffnungen einbauen",
      "Küchen und Vitrinen ab- und aufbauen",
    ],
    highlights: [
      {
        title: "Kreative Lösungen",
        text: "Vorhandenes nutzen, ergänzen und optisch in eine perfekte, funktionstüchtige Form bringen — mit Rücksicht auf Bestehendes.",
      },
      {
        title: "Fachgerechter Ab- und Neuaufbau",
        text: "Wo \u201EMöbelpacker\u201C scheitern, haben wir jahrelange Erfahrung — sorgfältig, mit dem richtigen Werkzeug und Know-how.",
      },
    ],
    image: images.services["umbau-konstruktionen"].src,
  },
];
