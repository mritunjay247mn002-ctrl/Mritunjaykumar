import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import Projects from "@/app/components/Projects";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.projects;

export default function ProjectsPage() {
  return (
    <>
      <WebPageJsonLd
        path="/projects"
        name={`Projects · ${profile.name}`}
        description={SECTION_COPY.projects.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      <div className="scroll-mt-24">
        <Projects />
      </div>
    </>
  );
}
