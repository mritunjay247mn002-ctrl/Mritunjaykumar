export type ConsultancyVisual = "blast" | "pillar" | "slope" | "underwater";

export type ConsultancyItem = {
  title: string;
  domain: string;
  description: string;
  visual: ConsultancyVisual;
};

export const consultancy: ConsultancyItem[] = [
  {
    title: "Opencast Blasting Design",
    domain: "Blasting Engineering",
    description:
      "Blast pattern design, burden and spacing optimization, and fragmentation control.",
    visual: "blast",
  },
  {
    title: "Underground Pillar Design",
    domain: "Rock Mechanics",
    description:
      "Stability analysis and optimization of pillar dimensions in underground mines.",
    visual: "pillar",
  },
  {
    title: "Slope Stability Analysis",
    domain: "Geotechnical Engineering",
    description:
      "Failure analysis and safety evaluation in iron ore, coal, hard rock, and marble mines.",
    visual: "slope",
  },
  {
    title: "Underwater Blasting",
    domain: "Specialized Blasting",
    description:
      "Controlled blasting techniques in submerged conditions for civil and marine works.",
    visual: "underwater",
  },
];
