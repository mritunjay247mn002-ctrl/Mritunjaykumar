import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import EducationTimeline from "@/app/components/EducationTimeline";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.journey;

export default function JourneyPage() {
  return (
    <>
      <WebPageJsonLd
        path="/journey"
        name={`Journey · ${profile.name}`}
        description={SECTION_COPY.journey.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Journey", path: "/journey" },
        ]}
      />
      <div className="scroll-mt-24">
        <EducationTimeline />
      </div>
    </>
  );
}
