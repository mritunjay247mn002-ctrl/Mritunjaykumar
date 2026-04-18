import { profile } from "@/data/profile";
import { research } from "@/data/research";
import { skills } from "@/data/skills";

function uniqueKeywords(list: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of list) {
    const s = raw.trim();
    if (s.length < 2 || seen.has(s.toLowerCase())) continue;
    seen.add(s.toLowerCase());
    out.push(s);
  }
  return out;
}

/** Curated keyword list for `<meta name="keywords">` (kept bounded; search engines weigh content more). */
export function buildSeoKeywords(): string[] {
  const fromResearch = research.map((r) => r.domain);
  const fromSkills = skills.flatMap((g) => g.items);

  return uniqueKeywords([
    profile.name,
    profile.title,
    "MiningToolkit",
    "NIT Karnataka",
    "NITK Surathkal",
    "National Institute of Technology Karnataka",
    "Surathkal",
    "Mining engineering",
    "Rock mechanics",
    "Underground mining",
    "Pillar design",
    "Blasting engineering",
    "Geotechnical engineering",
    "AI in mining",
    "Mining software",
    "PhD researcher",
    ...fromResearch,
    ...fromSkills,
  ]);
}

export const seoDescription =
  "Mritunjay Kumar — mining research scholar at NIT Karnataka, Surathkal. Underground pillar design, rock mechanics, and AI-driven mining tools. Founder of MiningToolkit.";
