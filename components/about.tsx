import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export function AboutSection() {
  const skills = [
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

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self Employed",
      period: "2024 - Present",
      description: [
        "Collaborated with an international client (e.g., QFC Real Estate, San Diego) to build scalable, client-specific web applications using modern frameworks like React and Next.js.",
        "Built and deployed 4+ full-stack applications, including tools for real-time collaboration (SyncPaste).",
        "Commissioned by STEM and ICT Students in their capstone theses e.g arduino code and building, website design and development.",
        "Maintained clean, readable codebases and documentation to support handover and future maintenance.",
      ],
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* ...Introduction... */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed z-20 text-shadow-2xs">
              I am Rafael from the Philippines, Graduated from Manuel S. Enverga
              University Foundation Candelaria Inc. I'm a full stack developer
              who loves building modern web applications. I also love creating
              efficient, scalable solutions that solve real-world problems and
              deliver exceptional user experiences. Coding was my hobby back in
              the day when I made minecraft mods using javascipt on a minecraft
              javascript launcher that translates it into native code. I also
              aced high grades during our ICT subject in high school, magnifying
              my interest in coding.
            </p>
          </div>
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className=" border-gray-700 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 group hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-2">
                        <skill.icon className="w-6 h-6 text-purple-500" />
                      </div>
                      <h4 className="text-lg font-bold text-white ">
                        {skill.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="border-gray-700 bg-gray-700/30 flex items-center gap-1 text-xs text-gray-200"
                        >
                          <tech.icon className="w-4 h-4 mr-1" />
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Experience Timeline */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-center mb-12">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-4 h-4 bg-purple-400 rounded-full mt-2 mr-6 relative z-10">
                      {index < experiences.length - 1 && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-purple-300"></div>
                      )}
                    </div>
                    <Card className="flex-1 bg-gray-100 hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="text-xl font-bold">{exp.title}</h4>
                          <Badge
                            variant="outline"
                            className="w-fit mt-2 md:mt-0 bg-purple-500 text-gray-200"
                          >
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mb-3">
                          {exp.company}
                        </p>
                        <ul className="text-sm list-disc list-inside text-gray-600 leading-relaxed space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
