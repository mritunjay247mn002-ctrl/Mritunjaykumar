import type { MetadataRoute } from "next";
import { INDEXABLE_PATHS } from "@/data/seoRoutes";
import { getSiteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/+$/, "");
  const lastModified = new Date();

  return INDEXABLE_PATHS.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.85,
  }));
}
