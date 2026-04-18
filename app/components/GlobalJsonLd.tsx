import { profile } from "@/data/profile";
import { getSiteUrl } from "@/data/site";
import { seoDescription } from "@/data/seo";

/**
 * Site-wide JSON-LD: Person + WebSite (included once in the site layout).
 * Individual routes add WebPage + BreadcrumbList.
 */
export default function GlobalJsonLd() {
  const base = getSiteUrl();
  const sameAs = [profile.linkedin, profile.github, profile.website].filter(
    (u): u is string => Boolean(u && u.length > 4)
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}#website`,
        url: base,
        name: `${profile.name} — Portfolio`,
        description: seoDescription,
        inLanguage: "en-IN",
        publisher: { "@id": `${base}#person` },
      },
      {
        "@type": "Person",
        "@id": `${base}#person`,
        name: profile.name,
        givenName: "Mritunjay",
        familyName: "Kumar",
        jobTitle: profile.title,
        description: profile.tagline,
        email: profile.email,
        url: base,
        sameAs,
        knowsAbout: profile.focus,
        memberOf: {
          "@type": "EducationalOrganization",
          name: "National Institute of Technology Karnataka, Surathkal",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Surathkal",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
        },
      },
    ],
  };

  const json = JSON.stringify(graph);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
