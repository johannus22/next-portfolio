import { Code, Database, Globe, Server, ToolCase, Zap } from "lucide-react";
import {
  SiVuedotjs,
  SiLaravel,
  SiLivewire,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiVercel,
  SiJavascript,
  SiGo,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVite,
  SiAlpinedotjs,
  SiCplusplus,
} from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FaBrain } from "react-icons/fa";

export type Technology = {
  name: string;
  icon: React.ElementType;
};

export type Skill = {
  name: string;
  icon: React.ElementType;
  technologies: Technology[];
};

export const skills: Skill[] = [
  {
    name: "Frontend",
    icon: Globe,
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Livewire", icon: SiLivewire },
      { name: "Blade", icon: SiLaravel },
      { name: "Alpine.js", icon: SiAlpinedotjs },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "RestAPI", icon: TbApi },
    ],
  },
  {
    name: "Database",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: GrMysql },
      { name: "Sqlite", icon: SiSqlite },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    name: "Tools",
    icon: ToolCase,
    technologies: [
      { name: "VS Code", icon: VscVscode },
      { name: "AI", icon: FaBrain },
      { name: "Git", icon: SiGit },
      { name: "Github", icon: SiGithub },
    ],
  },
  {
    name: "DevOps",
    icon: Zap,
    technologies: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Vite", icon: SiVite },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    name: "Languages",
    icon: Code,
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "C++", icon: SiCplusplus },
      { name: "Go", icon: SiGo },
      { name: "SQL", icon: TbSql },
    ],
  },
];
