import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/notdienst`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/galerie`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
