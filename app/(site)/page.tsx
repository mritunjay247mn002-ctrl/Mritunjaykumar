import About from "../components/About";
import Consultancy from "../components/Consultancy";
import EducationTimeline from "../components/EducationTimeline";
import Hero from "../components/Hero";
import LinksHub from "../components/LinksHub";
import Projects from "../components/Projects";
import Research from "../components/Research";
import Skills from "../components/Skills";
import WebPageJsonLd from "../components/WebPageJsonLd";
import { HOME_WEBPAGE } from "@/data/seoRoutes";

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd path="/" name={HOME_WEBPAGE.name} description={HOME_WEBPAGE.description} />
      <Hero />
      <About />
      <EducationTimeline />
      <Research />
      <Consultancy />
      <Projects />
      <Skills />
      <LinksHub />
    </>
  );
}
