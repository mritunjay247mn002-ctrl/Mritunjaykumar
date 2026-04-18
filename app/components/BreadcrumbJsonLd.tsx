import { getSiteUrl } from "@/data/site";

export type BreadcrumbItem = { name: string; path: string };

type Props = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbJsonLd({ items }: Props) {
  const base = getSiteUrl();
  const list = items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${base}${item.path === "/" ? "" : item.path}`,
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
