import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { seoDescription, seoSiteName } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoSiteName,
    short_name: profile.name.split(" ")[0] ?? profile.name,
    description: seoDescription,
    start_url: "/",
    display: "browser",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait-primary",
    categories: ["education", "business", "productivity"],
    lang: "en",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
