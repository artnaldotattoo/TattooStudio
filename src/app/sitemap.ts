import type { MetadataRoute } from "next";
import { SITE, siteUrl } from "@/lib/site";

/**
 * Sitemap del sitio. La landing es una sola página con secciones
 * ancladas (#portafolio, #ritual, #ubicacion). Cuando existan más
 * rutas (ej. blog, términos) basta con agregarlas al array.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.home,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/portafolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/ritual`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/ubicacion`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/api/portfolio`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.3,
    },
  ];
}