import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * robots.txt generado. Permite el rastreo de toda la landing y excluye la
 * API de portafolio (JSON interno) del índice.
 * La URL de producción es: https://tattoo-studio-seven-delta.vercel.app
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}