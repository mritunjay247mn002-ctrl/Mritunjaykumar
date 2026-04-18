export type EducationItem = {
  year: string;
  institute: string;
  description: string;
  phase: string;
};

/** Chronological path (oldest first). */
export const education: EducationItem[] = [
  {
    year: "2013",
    institute: "Don Bosco Academy, McCluskiegunj",
    description: "Secondary schooling in a rural Jharkhand setting.",
    phase: "Foundation",
  },
  {
    year: "2013 to 2015",
    institute: "Loyola Convent School, Ranchi",
    description: "Senior secondary Science stream and structured preparation.",
    phase: "Structure",
  },
  {
    year: "2015 to 2019",
    institute: "BIT Sindri",
    description: "B.E. Mining Engineering with core field and mine training.",
    phase: "Identity",
  },
  {
    year: "2019 to 2020",
    institute: "Jharkhand Rai University, Ranchi",
    description: "Faculty teaching: assistant professor in the engineering programme.",
    phase: "Teaching · JRU",
  },
  {
    year: "2020 to 2022",
    institute: "M.Tech, Mining Engineering",
    description: "Postgraduate M.Tech programme (two-year coursework and thesis).",
    phase: "M.Tech",
  },
  {
    year: "2022 to 2023",
    institute: "RKDF University, Ranchi",
    description: "Faculty teaching at RKDF University, Ranchi.",
    phase: "Teaching · RKDF",
  },
  {
    year: "2023 to Present",
    institute: "National Institute of Technology Karnataka, Surathkal",
    description: "PhD research on AI, IoT, and systems for mining operations.",
    phase: "Research",
  },
];
