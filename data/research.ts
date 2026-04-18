export type ResearchType = "Article" | "Chapter" | "Review";
export type ResearchStatus = "Full-text" | "Private" | "Published";
export type ResearchDomain =
  | "AI Mining"
  | "Rock Mechanics"
  | "Sustainability"
  | "Systems";

export type ResearchItem = {
  title: string;
  type: ResearchType;
  year: number;
  status: ResearchStatus;
  domain: ResearchDomain;
  description: string;
};

export const research: ResearchItem[] = [
  {
    title:
      "Digital Transformation in Mining: Integration of IoT, Data Analytics, and Web-Based Platforms",
    type: "Article",
    year: 2026,
    status: "Full-text",
    domain: "AI Mining",
    description:
      "Framework integrating IoT, analytics, and web platforms for mining operations.",
  },
  {
    title:
      "Evolution of a Web-Based Mining Engineering Toolkit Toward an IoT Smart Platform",
    type: "Article",
    year: 2026,
    status: "Full-text",
    domain: "AI Mining",
    description:
      "Roadmap for evolving a mining engineering toolkit into an IoT platform.",
  },
  {
    title: "Design and Development of a Modular Rock-Soil Sampling Device",
    type: "Article",
    year: 2026,
    status: "Full-text",
    domain: "Systems",
    description:
      "Modular sampling device for rock and soil field investigations.",
  },
  {
    title:
      "Hybrid Empirical-Numerical Framework for Pillar Stability in Marble Mines",
    type: "Article",
    year: 2026,
    status: "Private",
    domain: "Rock Mechanics",
    description:
      "Empirical and numerical framework for pillar stability in marble mines.",
  },
  {
    title: "Sustainable Methanol Production through Biomass Co-Gasification",
    type: "Chapter",
    year: 2026,
    status: "Full-text",
    domain: "Sustainability",
    description:
      "Biomass co-gasification pathway for sustainable methanol production.",
  },
  {
    title: "Integrated Pillar Design Using Machine Learning",
    type: "Article",
    year: 2025,
    status: "Private",
    domain: "Rock Mechanics",
    description: "Machine learning approach to integrated pillar design.",
  },
  {
    title: "Influence of Friction Angle on Slope Failures",
    type: "Article",
    year: 2025,
    status: "Private",
    domain: "Rock Mechanics",
    description: "Sensitivity of slope failure modes to friction angle.",
  },
  {
    title: "Dragline Planning with Real-Time Topography",
    type: "Article",
    year: 2025,
    status: "Published",
    domain: "Systems",
    description: "Dragline planning informed by real-time topography data.",
  },
  {
    title: "Environmental Impact of Coal Mining on Water Regime",
    type: "Chapter",
    year: 2022,
    status: "Full-text",
    domain: "Sustainability",
    description: "Impact of coal mining operations on surface and groundwater.",
  },
];
