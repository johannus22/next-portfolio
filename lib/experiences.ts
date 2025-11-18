export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    title: "Junior Software Engineer",
    company: "Kodecraft Technologies",
    period: "11/2025 - Present",
    description: [
      "Currently Working Here"
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self Employed",
    period: "03/2025 - 06/2025",
    description: [
      "Collaborated with an international client (e.g., QFC Real Estate, San Diego) to build scalable, client-specific web applications using modern frameworks like React and Next.js.",
      "Built and deployed 4+ full-stack applications, including tools for real-time collaboration (SyncPaste).",
      "Commissioned by STEM and ICT Students in their capstone theses e.g arduino code and building, website design and development.",
      "Maintained clean, readable codebases and documentation to support handover and future maintenance.",
    ],
  },
  
];
