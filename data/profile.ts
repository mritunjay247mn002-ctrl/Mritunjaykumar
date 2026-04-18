export type ProfileStat = {
  label: string;
  value: string;
};

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  subtext: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  location: string;
  about: string[];
  focus: string[];
  /** Short credibility strip for the About section */
  aboutStats: ProfileStat[];
};

export const profile: Profile = {
  name: "Mritunjay Kumar",
  title: "Mining Research Scholar",
  tagline: "I build AI-driven tools and research for mining engineering.",
  subtext: "Mining  ·  Rock Mechanics  ·  AI",
  email: "krmritunjay769@gmail.com",
  linkedin: "https://www.linkedin.com/in/mritunjay-kmr",
  github: "https://github.com/",
  website: "https://miningtoolkit.in",
  location: "National Institute of Technology Karnataka, Surathkal, India",
  about: [
    "Mritunjay Kumar is a PhD researcher at the National Institute of Technology Karnataka (NIT Karnataka / NITK), Surathkal. Core research focus: underground pillar design and rock mechanics.",
    "He is the founder of MiningToolkit (miningtoolkit.in), an integrated mining engineering suite covering pillar design, blasting, ventilation, geotechnics, economics, and simulations.",
    "Broader interests: AI-assisted geotechnical modelling, mining instrumentation, and IoT-enabled data platforms.",
  ],
  focus: [
    "Underground pillar design",
    "Rock mechanics and stability",
    "AI-assisted geotechnical modelling",
    "Mining engineering tooling and simulations",
  ],
  aboutStats: [
    { label: "Research core", value: "Pillar + rock mechanics" },
    { label: "Shipped product", value: "MiningToolkit" },
    { label: "Base", value: "NIT Karnataka, Surathkal" },
  ],
};
