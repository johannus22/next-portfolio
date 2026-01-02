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
    period: "Nov 2025 - Present",
    description: [
      "Developing and maintaining scalable web applications using modern full-stack technologies",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing best practices in code quality, testing, and documentation",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self Employed",
    period: "Feb 2025 - Jun 2025",
    description: [
      "Delivered 4+ production-ready web applications for international clients, including a custom real estate marketing platform for QFC Real Estate (San Diego)",
      "Built SyncPaste, a real-time cross-platform clipboard synchronization tool reaching 300+ active users within two weeks of launch",
      "Developed custom solutions for academic clients, including Arduino-based IoT systems and responsive web applications for capstone projects",
      "Maintained 100% client satisfaction through clean code practices, comprehensive documentation, and timely project delivery",
    ],
  },
];
