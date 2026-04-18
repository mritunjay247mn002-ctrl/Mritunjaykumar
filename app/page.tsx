import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationTimeline from "./components/EducationTimeline";
import Research from "./components/Research";
import Consultancy from "./components/Consultancy";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LinksHub from "./components/LinksHub";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <EducationTimeline />
      <Research />
      <Consultancy />
      <Projects />
      <Skills />
      <LinksHub />
      <Footer />
    </main>
  );
}
