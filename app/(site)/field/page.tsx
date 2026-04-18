import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import Consultancy from "@/app/components/Consultancy";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.field;

export default function FieldPage() {
  return (
    <>
      <WebPageJsonLd
        path="/field"
        name={`Field & consultancy · ${profile.name}`}
        description={SECTION_COPY.field.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Field & consultancy", path: "/field" },
        ]}
      />
      <div className="scroll-mt-24">
        <Consultancy />
      </div>
    </>
  );
}
