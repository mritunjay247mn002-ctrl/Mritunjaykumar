export type ExperienceGroup = "Blasting" | "Slope Stability" | "Underground Mining";

export type ExperienceItem = {
  domain: string;
  company: string;
  location: string;
  work: string;
  group: ExperienceGroup;
};

export const experience: ExperienceItem[] = [
  {
    domain: "Blasting Engineering",
    company: "Vedanta Limited",
    location: "India",
    work: "Opencast blast design and fragmentation control",
    group: "Blasting",
  },
  {
    domain: "Blasting Engineering",
    company: "Andhra Pradesh Mineral Development Corporation",
    location: "Andhra Pradesh",
    work: "Blast planning and field execution support",
    group: "Blasting",
  },
  {
    domain: "Blasting Engineering",
    company: "Dalmia Cement",
    location: "Andhra Pradesh",
    work: "Bench blasting optimization and performance analysis",
    group: "Blasting",
  },
  {
    domain: "Underwater Blasting",
    company: "JNPA (Jawaharlal Nehru Port Authority)",
    location: "Mumbai",
    work: "Controlled underwater blasting and safety considerations",
    group: "Blasting",
  },
  {
    domain: "Slope Stability",
    company: "Multiple Sites",
    location: "Andhra Pradesh, Karnataka, Goa, Rajasthan",
    work: "Slope stability analysis across varied geological conditions",
    group: "Slope Stability",
  },
  {
    domain: "Underground Mining",
    company: "Ambaji Underground Mines",
    location: "Gujarat",
    work: "Pillar design and underground stability assessment",
    group: "Underground Mining",
  },
];

export const experienceGroupOrder: ExperienceGroup[] = [
  "Blasting",
  "Slope Stability",
  "Underground Mining",
];
