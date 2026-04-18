export type EducationItem = {
  title: string;
  location: string;
  year: string;
  degree: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    title: "NITK Surathkal",
    location: "Karnataka",
    year: "2023 to Present",
    degree: "PhD · Mining Engineering",
    description: "Research on AI and IoT systems for mining.",
  },
  {
    title: "Shridhar University",
    location: "Pilani, Rajasthan",
    year: "2019 to 2022",
    degree: "M.Tech · Mining Engineering",
    description: "Postgraduate studies in mining engineering and numerical modelling.",
  },
  {
    title: "BIT Sindri",
    location: "Dhanbad, Jharkhand",
    year: "2015 to 2019",
    degree: "B.E. · Mining Engineering",
    description: "Undergraduate mining engineering with fieldwork training.",
  },
  {
    title: "Loyola Convent School",
    location: "Ranchi, Jharkhand",
    year: "2013 to 2015",
    degree: "Senior Secondary",
    description: "Senior secondary schooling in Science stream.",
  },
  {
    title: "Don Bosco Academy",
    location: "McCluskiegunj, Jharkhand",
    year: "2013",
    degree: "Secondary",
    description: "Secondary education in a rural academic environment.",
  },
];
