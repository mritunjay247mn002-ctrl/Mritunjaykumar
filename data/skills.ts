export type SkillGroup = {
  group: "Mining" | "Software" | "AI / Data";
  accent: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    group: "Mining",
    accent: "amber",
    items: [
      "Ground Control",
      "Pillar Design",
      "Opencast Planning",
      "Ventilation",
      "Rock Mechanics",
      "Instrumentation",
      "Dragline Ops",
      "Field Investigation",
    ],
  },
  {
    group: "Software",
    accent: "amber",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "Vercel",
      "Git",
    ],
  },
  {
    group: "AI / Data",
    accent: "amber",
    items: [
      "PyTorch",
      "scikit-learn",
      "pandas",
      "LangChain",
      "Vector Search",
      "LLM Tooling",
      "Model Eval",
      "Prompt Engineering",
    ],
  },
];
