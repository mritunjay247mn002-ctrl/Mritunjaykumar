import Footer from "./Footer";
import GlobalJsonLd from "./GlobalJsonLd";
import Navbar from "./Navbar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalJsonLd />
      <Navbar />
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
