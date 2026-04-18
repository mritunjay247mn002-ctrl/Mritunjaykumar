import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { buildSeoKeywords, seoDescription, seoTitle } from "@/data/seo";
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
    description: `${profile.name} — PhD scholar at National Institute of Technology Karnataka (NITK) Surathkal; pillar design & rock mechanics. Founder of MiningToolkit (miningtoolkit.in). ${profile.tagline}`,
    keywords: [
      "About Mritunjay Kumar",
      "MiningToolkit founder",
      "NIT Karnataka researcher",
      "pillar design",
      "rock mechanics",
    ],
  },
  journey: {
    title: "Journey",
    description: `${profile.name} education path: B.E. Mining (BIT Sindri), M.Tech, faculty at Jharkhand Rai University & RKDF University, and PhD at NIT Karnataka Surathkal — full timeline.`,
    keywords: [
      "Mritunjay Kumar education",
      "NIT Karnataka PhD",
      "BIT Sindri mining",
      "M.Tech mining",
      "academic timeline",
    ],
  },
  research: {
    title: "Research",
    description: `Research and publications by ${profile.name} (NIT Karnataka): AI in mining, rock mechanics, sustainability, IoT & digital mining — linked to MiningToolkit product work.`,
    keywords: ["Mritunjay Kumar publications", "NITK mining research", "AI mining", "IoT mining"],
  },
  field: {
    title: "Field & consultancy",
    description: `Field and consultancy work by ${profile.name} across India: blasting, underground mining, slope stability, and rock mechanics — complementing NITK research and MiningToolkit.`,
    keywords: ["Mritunjay Kumar consultancy", "blasting engineer India", "slope stability", "rock mechanics"],
  },
  projects: {
    title: "Projects",
    description: `Projects by ${profile.name}: MiningToolkit (miningtoolkit.in), mining software, and research tooling — built alongside PhD work at NIT Karnataka Surathkal.`,
    keywords: ["MiningToolkit", "Mritunjay Kumar projects", "mining software", "NIT Karnataka"],
  },
  skills: {
    title: "Skills",
    description: `Skills of ${profile.name}: mining engineering (pillar, rock mechanics), TypeScript, Next.js, Python, AI / data — applied at NITK and in MiningToolkit development.`,
    keywords: ["Mritunjay Kumar skills", "mining engineering software", "Python mining", "Next.js"],
  },
  connect: {
    title: "Connect",
    description: `Contact ${profile.name}: email, LinkedIn, GitHub, and MiningToolkit (miningtoolkit.in) — NIT Karnataka Surathkal.`,
    keywords: ["Contact Mritunjay Kumar", "MiningToolkit", "LinkedIn", "NIT Karnataka"],
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
    if (out.length >= 50) break;
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
  name: seoTitle,
  description: seoDescription,
} as const;
