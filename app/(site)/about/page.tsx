import About from "@/app/components/About";
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.about;

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        path="/about"
        name={`About · ${profile.name}`}
        description={SECTION_COPY.about.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <div className="scroll-mt-24">
        <About />
      </div>
    </>
  );
}
