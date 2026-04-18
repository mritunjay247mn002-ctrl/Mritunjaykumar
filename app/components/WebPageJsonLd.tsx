import { getSiteUrl } from "@/data/site";

type Props = {
  path: string;
  name: string;
  description: string;
};

export default function WebPageJsonLd({ path, name, description }: Props) {
  const base = getSiteUrl();
  const url = `${base}${path === "/" ? "" : path}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${base}#website` },
    about: { "@id": `${base}#person` },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
