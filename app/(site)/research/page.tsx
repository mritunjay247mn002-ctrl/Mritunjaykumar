import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import Research from "@/app/components/Research";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.research;

export default function ResearchPage() {
  return (
    <>
      <WebPageJsonLd
        path="/research"
        name={`Research · ${profile.name}`}
        description={SECTION_COPY.research.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Research", path: "/research" },
        ]}
      />
      <div className="scroll-mt-24">
        <Research />
      </div>
    </>
  );
}
