import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { research } from "@/data/research";
import { skills } from "@/data/skills";

/** Primary `<title>` / Open Graph title — lead with the exact query people search. */
export const seoTitle =
  "Mritunjay Kumar | NIT Karnataka Surathkal | MiningToolkit";

/** Shown in app switcher / install surfaces — reinforces brand + affiliation. */
export const seoSiteName = "Mritunjay Kumar — MiningToolkit · NIT Karnataka";

/**
 * Meta description (~155–165 chars): name first, institute, degree path, MiningToolkit.
 * Search engines weight visible page text more; this aligns the whole site story.
 */
export const seoDescription = `Mritunjay Kumar — PhD researcher at National Institute of Technology Karnataka (NIT Karnataka / NITK), Surathkal: mining engineering, underground pillar design & rock mechanics. Founder of MiningToolkit (miningtoolkit.in). Education: B.E. Mining (BIT Sindri), M.Tech, teaching at JRU & RKDF; now NITK doctoral research.`;

/** Alternate names for structured data (social handles, common variants). */
export const seoAlternateNames = [
  "Mritunjay K.",
  "Mritunjay Kmr",
  "Kmr Mritunjay",
  "Mritunjay Kumar mining engineer",
  "Mritunjay Kumar NITK",
];

function uniqueKeywords(list: string[], max = 52): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of list) {
    const s = raw.trim();
    if (s.length < 2 || seen.has(s.toLowerCase())) continue;
    seen.add(s.toLowerCase());
    out.push(s);
    if (out.length >= max) break;
  }
  return out;
}

const educationKeywords = education.flatMap((e) => [
  e.institute,
  e.phase,
  `${profile.name} ${e.institute}`,
]);

/** Curated keywords — high-signal phrases first (name, institute, MiningToolkit, education). */
export function buildSeoKeywords(): string[] {
  const fromResearch = research.map((r) => r.domain);
  const fromSkills = skills.flatMap((g) => g.items);

  return uniqueKeywords([
    profile.name,
    "Mritunjay Kumar mining",
    "Mritunjay Kumar NIT Karnataka",
    "Mritunjay Kumar NITK Surathkal",
    "Mritunjay Kumar MiningToolkit",
    "Mritunjay Kumar PhD",
    "Mritunjay Kumar researcher",
    "Kumar Mritunjay",
    "MiningToolkit",
    "Mining Toolkit",
    "miningtoolkit.in",
    "MiningToolkit founder",
    "Mritunjay Kumar founder MiningToolkit",
    "National Institute of Technology Karnataka",
    "NIT Karnataka",
    "NIT Karnataka Surathkal",
    "NITK Surathkal",
    "NITK PhD mining",
    "PhD mining engineering NITK",
    "BIT Sindri mining",
    "B.E. Mining Engineering BIT Sindri",
    "M.Tech Mining Engineering",
    "Jharkhand Rai University Ranchi",
    "RKDF University Ranchi",
    profile.title,
    profile.location,
    "Surathkal mining research",
    "underground pillar design",
    "rock mechanics",
    "AI in mining",
    "mining software India",
    ...educationKeywords,
    ...fromResearch,
    ...fromSkills,
  ]);
}
