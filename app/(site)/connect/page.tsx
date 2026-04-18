import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd";
import LinksHub from "@/app/components/LinksHub";
import WebPageJsonLd from "@/app/components/WebPageJsonLd";
import { profile } from "@/data/profile";
import { SECTION_COPY, sectionMeta } from "@/data/seoRoutes";

export const metadata = sectionMeta.connect;

export default function ConnectPage() {
  return (
    <>
      <WebPageJsonLd
        path="/connect"
        name={`Connect · ${profile.name}`}
        description={SECTION_COPY.connect.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Connect", path: "/connect" },
        ]}
      />
      <div className="scroll-mt-24">
        <LinksHub />
      </div>
    </>
  );
}
