export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    title: "MiningToolkit",
    description:
      "Integrated mining engineering suite: pillar design, blasting, ventilation, geotechnics, economics, simulations, and TARP monitoring.",
    tech: ["Next.js", "TypeScript", "Tailwind", "3D viz"],
    link: "https://miningtoolkit.in",
    linkLabel: "Visit",
  },
  {
    title: "Pillar Stability Notebook",
    description:
      "Interactive notebook running classical and ML pillar strength estimates.",
    tech: ["Python", "Scikit-learn", "Plotly"],
    link: "#",
    linkLabel: "Coming soon",
  },
  {
    title: "RockSense",
    description:
      "Signal pipeline for mining instrumentation streams and event labelling.",
    tech: ["FastAPI", "PyTorch", "TimescaleDB"],
    link: "#",
    linkLabel: "Research preview",
  },
];
