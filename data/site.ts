/**
 * Canonical site origin for SEO (metadataBase, sitemap, JSON-LD).
 * Override with `NEXT_PUBLIC_SITE_URL` when deploying (e.g. https://yoursite.vercel.app).
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    "";
  if (raw) return raw.replace(/\/+$/, "");
  return "https://miningtoolkit.in";
}
