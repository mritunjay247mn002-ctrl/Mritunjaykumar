import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import Skills from "@/app/components/Skills";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.skills;

export default function SkillsPage() {
  return (
    <>
      <WebPageJsonLd
        path="/skills"
        name={`Skills · ${profile.name}`}
        description={SECTION_COPY.skills.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Skills", path: "/skills" },
        ]}
      />
      <div className="scroll-mt-24">
        <Skills />
      </div>
    </>
  );
}
