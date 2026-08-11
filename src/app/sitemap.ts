import type { MetadataRoute } from "next";
import { siteConfig, routes } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
