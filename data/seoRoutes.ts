import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { buildSeoKeywords, seoDescription } from "@/data/seo";
import { getSiteUrl } from "@/data/site";

/** Paths that should appear in sitemap.xml and be crawlable as real URLs. */
export const INDEXABLE_PATHS = [
  "/",
  "/about",
  "/journey",
  "/research",
  "/field",
  "/projects",
  "/skills",
  "/connect",
] as const;

export type IndexablePath = (typeof INDEXABLE_PATHS)[number];

/** Canonical copy for JSON-LD WebPage + `<meta name="description">`. */
export const SECTION_COPY = {
  about: {
    title: "About",
    description: `${profile.name} — background, research focus (pillar design, rock mechanics), and MiningToolkit. ${profile.tagline}`,
    keywords: ["About", "MiningToolkit", "NIT Karnataka", "pillar design", "rock mechanics"],
  },
  journey: {
    title: "Journey",
    description: `Education and teaching timeline for ${profile.name}: M.Tech, PhD at NIT Karnataka Surathkal, and prior academic roles.`,
    keywords: ["Education", "PhD", "NITK", "timeline", "academic journey"],
  },
  research: {
    title: "Research",
    description: `Publications and research themes for ${profile.name}: AI in mining, rock mechanics, sustainability, and digital mining systems.`,
    keywords: ["Publications", "research papers", "AI mining", "IoT mining"],
  },
  field: {
    title: "Field & consultancy",
    description: `Consultancy experience for ${profile.name}: blasting, underground mining, slope stability, and rock mechanics across India.`,
    keywords: ["Consultancy", "blasting", "slope stability", "Vedanta", "field experience"],
  },
  projects: {
    title: "Projects",
    description: `Software and research projects by ${profile.name}, including MiningToolkit and mining engineering tooling.`,
    keywords: ["Projects", "MiningToolkit", "Next.js", "mining software"],
  },
  skills: {
    title: "Skills",
    description: `Technical and domain skills: mining engineering, software (TypeScript, Next.js, Python), and AI / data for ${profile.name}.`,
    keywords: ["Skills", "TypeScript", "Python", "mining engineering"],
  },
  connect: {
    title: "Connect",
    description: `Contact ${profile.name}: email, LinkedIn, GitHub, and MiningToolkit links.`,
    keywords: ["Contact", "LinkedIn", "email", "MiningToolkit"],
  },
} as const;

function mergeKeywords(extra: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of [...extra, ...buildSeoKeywords()]) {
    const t = s.trim();
    if (t.length < 2 || seen.has(t.toLowerCase())) continue;
    seen.add(t.toLowerCase());
    out.push(t);
    if (out.length >= 36) break;
  }
  return out;
}

export function buildPageMetadata(opts: {
  path: string;
  title: string;
  description: string;
  keywords?: readonly string[];
}): Metadata {
  const site = getSiteUrl().replace(/\/+$/, "");
  const pathSuffix = opts.path === "/" ? "" : opts.path;
  const url = `${site}${pathSuffix}`;
  const fullTitle = `${opts.title} · ${profile.name}`;

  return {
    title: opts.title,
    description: opts.description,
    keywords: mergeKeywords([...(opts.keywords ?? [])]),
    alternates: { canonical: opts.path },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: `${profile.name} — Portfolio`,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [new URL("/opengraph-image", site).href],
    },
  };
}

export const sectionMeta = {
  about: buildPageMetadata({
    path: "/about",
    ...SECTION_COPY.about,
  }),
  journey: buildPageMetadata({
    path: "/journey",
    ...SECTION_COPY.journey,
  }),
  research: buildPageMetadata({
    path: "/research",
    ...SECTION_COPY.research,
  }),
  field: buildPageMetadata({
    path: "/field",
    ...SECTION_COPY.field,
  }),
  projects: buildPageMetadata({
    path: "/projects",
    ...SECTION_COPY.projects,
  }),
  skills: buildPageMetadata({
    path: "/skills",
    ...SECTION_COPY.skills,
  }),
  connect: buildPageMetadata({
    path: "/connect",
    ...SECTION_COPY.connect,
  }),
} as const;

export const HOME_WEBPAGE = {
  name: `${profile.name} · ${profile.title}`,
  description: seoDescription,
} as const;
