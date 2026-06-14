export const site = {
  name: "Tischlerservice4you",
  legalName: "Tischlerservice4you e.U.",
  owner: "Neim Zekiri",
  url: "https://www.tischlerservice4you.at",
  phone: "013305557",
  phoneDisplay: "01 330 55 57",
  email: "office@tischlerservice4you.at",
  street: "Bäuerlegasse 24/G21-22",
  postalCode: "1200",
  city: "Wien",
  country: "AT",
  geo: { lat: 48.2348, lng: 16.3818 },
  description:
    "Fenster, Türen, Montagen und Reparaturen in Wien. 24-Stunden-Notdienst nach Einbruch, Unwetter und Unfall. Faire Preise, Handschlagsqualität.",
} as const;

export const fullAddress = `${site.street}, ${site.postalCode} ${site.city}`;
