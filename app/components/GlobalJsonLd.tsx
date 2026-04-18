import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { getSiteUrl } from "@/data/site";
import { seoAlternateNames, seoDescription } from "@/data/seo";

/**
 * Site-wide JSON-LD: WebSite, Person, NITK & MiningToolkit (Organization), alumni links.
 * Reinforces entity relationships for queries like "Mritunjay Kumar", "NIT Karnataka", "MiningToolkit".
 */
export default function GlobalJsonLd() {
  const base = getSiteUrl();

  const sameAs: string[] = [];
  const push = (u: string | undefined) => {
    if (!u || u.length < 12) return;
    if (/^https:\/\/github\.com\/?$/i.test(u)) return;
    if (!sameAs.includes(u)) sameAs.push(u);
  };
  push(profile.linkedin);
  push(profile.github);
  push(profile.website);

  const miningToolkitOrg = {
    "@type": "Organization",
    "@id": `${base}#miningtoolkit`,
    name: "MiningToolkit",
    alternateName: ["Mining Toolkit", "miningtoolkit.in"],
    url: profile.website,
    description:
      "Integrated mining engineering software: pillar design, blasting, ventilation, geotechnics, economics, and simulations.",
    founder: { "@id": `${base}#person` },
    location: {
      "@type": "Place",
      name: "India",
    },
  } as const;

  const nitkOrg = {
    "@type": "EducationalOrganization",
    "@id": `${base}#nitk`,
    name: "National Institute of Technology Karnataka, Surathkal",
    alternateName: ["NIT Karnataka", "NITK Surathkal", "National Institute of Technology Karnataka Surathkal"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surathkal",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  } as const;

  const alumniNodes = [
    {
      "@type": "CollegeOrUniversity",
      name: "BIT Sindri",
      description: "B.E. Mining Engineering",
    },
    {
      "@type": "EducationalOrganization",
      name: "Jharkhand Rai University, Ranchi",
      description: "Faculty teaching (assistant professor)",
    },
    {
      "@type": "EducationalOrganization",
      name: "RKDF University, Ranchi",
      description: "Faculty teaching",
    },
  ];

  const person = {
    "@type": "Person",
    "@id": `${base}#person`,
    name: profile.name,
    alternateName: seoAlternateNames,
    givenName: "Mritunjay",
    familyName: "Kumar",
    jobTitle: profile.title,
    description: seoDescription,
    email: profile.email,
    url: base,
    sameAs,
    knowsAbout: [
      ...profile.focus,
      "Mining engineering",
      "National Institute of Technology Karnataka",
      "MiningToolkit",
      "PhD mining",
      "Rock mechanics",
      "Underground pillar design",
      ...education.map((e) => `${e.phase}: ${e.institute}`),
    ],
    memberOf: { "@id": `${base}#nitk` },
    alumniOf: alumniNodes,
    worksFor: { "@id": `${base}#miningtoolkit` },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${base}#website`,
    url: base,
    name: `${profile.name} — Official portfolio`,
    alternateName: [seoAlternateNames[0] ?? profile.name, "MiningToolkit founder portfolio"],
    description: seoDescription,
    inLanguage: "en-IN",
    publisher: { "@id": `${base}#person` },
    about: { "@id": `${base}#person` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [website, person, nitkOrg, miningToolkitOrg],
  };

  const json = JSON.stringify(graph);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
