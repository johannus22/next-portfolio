import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ExternalLink } from "@/components/animate-ui/icons/external-link";
import { ChevronLeftRight } from "@/components/animate-ui/icons/chevron-left-right";
import {
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export function Projects() {
  const projects = [
    {
      name: "SyncPaste",
      description: [
        "Built a lightweight, real-time cross-platform copy-pasting tool, enabling seamless data transfer between multiple devices",
        "Integrated Pusher for real-time sync and Supabase for persistent storage; reached 300+ pastes within first two weeks",
      ],
      status: "Live",
      image: "/projects/syncpaste.png",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: RiNextjsFill },
        { name: "Supabase", icon: SiSupabase },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Typescript", icon: SiTypescript },
        { name: "Vercel", icon: SiVercel },
      ],
      links: [
        {
          desc: "Live Site",
          icon: ExternalLink,
          href: "https://syncpaste.vercel.app",
        },
        {
          desc: "Repository",
          icon: ChevronLeftRight,
          href: "https://github.com/johannus22/syncpaste",
        },
      ],
    },
    {
      name: "QFC Real Estate Website",
      description: [
        "Collaborated with a San Diego-based real estate agency to develop a custom marketing site, increasing client engagement by delivering a tailored CMS-backed platform",
        "Engineered using Next.js, React, PayloadCMS, TailwindCSS, and PostgreSQL; achieved <200ms response times on core pages",
      ],
      status: "In Progress",
      image: "/projects/QFC.png",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: RiNextjsFill },
        { name: "Postgres", icon: DiPostgresql },
        { name: "Typescript", icon: SiTypescript },
      ],
      links: [
        {
          desc: "Demo Site",
          icon: ExternalLink,
          href: "https://qfc-web.vercel.app",
        },
      ],
    },
    {
      name: "Movie Radar",
      description: [
        "Developed a movie search app using React and IMDb API, featuring trending search persistence with Appwrite (BaaS)",
        "Completed as part of JavaScript Mastery’s curriculum; improved search performance by implementing lazy loading and optimized queries",
      ],
      status: "Live",
      image: "/projects/mra-ss.png",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "Typescript", icon: SiTypescript },
        { name: "Javascript", icon: SiJavascript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
        { name: "Vercel", icon: SiVercel },
        { name: "API", icon: TbApi },
      ],
      links: [
        {
          desc: "Live Site",
          icon: ExternalLink,
          href: "https://movie-radar-jsm.vercel.app",
        },
        {
          desc: "Repository",
          icon: ChevronLeftRight,
          href: "https://github.com/johannus22/movies-react-app",
        },
      ],
    },
    {
      name: "Mini CRM",
      description: [
        "A company and employee management tool I made to apply my knowledge in Laravel. this project is capable of managing companies and employees that is stored inside MySQL Database with E-mail notification when there is a new company added. It also has multi-language support.",
      ],
      status: "Completed",
      image: "/projects/CRM-SS.png",
      technologies: [
        { name: "Laravel", icon: SiLaravel },
        { name: "PHP", icon: SiPhp },
        { name: "MySQL", icon: GrMysql },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Blade", icon: SiLaravel },
        { name: "API", icon: TbApi },
      ],
      links: [
        {
          desc: "Repository",
          icon: ChevronLeftRight,
          href: "https://github.com/johannus22/mini-crm",
        },
      ],
    },
    {
      name: "GWA Calculator",
      description: [
        "A collaborative project with my friend that uses vanilla javascript for DOM manipulation and uses a javascript library called AutoAnimate.",
        "I've built the frontend using Tailwind CSS. The design is inspired to retro genre. I've also added some functionality in the Javascript logic and fixed some of the errors from its older versions.",
      ],
      status: "Live",
      image: "/projects/gwa-calculator.png",
      technologies: [
        { name: "Javascript", icon: SiJavascript },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      links: [
        {
          desc: "Live Site",
          icon: ExternalLink,
          href: "https://gwa-calculator-cs.vercel.app/",
        },
        {
          desc: "Repository",
          icon: ChevronLeftRight,
          href: "https://github.com/gabrielSantoc/gwa-calculatorrr",
        },
      ],
    },
    {
      name: "Auxilium",
      description: [
        "Led the development of a disaster communication system for the Candelaria DRRMO, enhancing early warning outreach by automating SMS alerts to at-risk households",
        "Built with a locally based SMS API system called 'Semaphore' can send bulk messages with secure role-based access",
      ],
      status: "Live",
      image: "/projects/auxilium-doc.jpg",
      technologies: [
        { name: "PHP", icon: SiPhp },
        { name: "CSS", icon: SiCss3 },
        { name: "API", icon: TbApi },
        { name: "Javascript", icon: SiJavascript },
      ],
      links: [
        {
          desc: "Repository",
          icon: ChevronLeftRight,
          href: "https://github.com/gabrielSantoc/gwa-calculatorrr",
        },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 border-green-500/50 backdrop-blur supports-[backdrop-filter]:bg-green-600/40";
      case "Completed":
        return "text-blue-300 border-blue-500/50 backdrop-blur supports-[backdrop-filter]:bg-blue-600/40";
      case "In Progress":
        return "text-yellow-400 border-yellow-500/50 backdrop-blur supports-[backdrop-filter]:bg-yellow-600/40";
      default:
        return "text-gray-400 border-gray-500/50 backdrop-blur supports-[backdrop-filter]:bg-gray-600/40";
    }
  };

  return (
    <div className="space-y-8 mb-10">
      <h2 className="text-3xl font-bold text-center">Projects Made So Far</h2>
      {projects.map((project, index) => (
        <Card
          key={index}
          className="p-10 border-gray-700 mt-10 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 group hover:shadow-lg transition-all duration-300"
        >
          <div className="md:flex">
            <div className="md:w-2/5 relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.name} screenshot`}
                width={420}
                height={180}
                className="w-full h-48 md:h-full rounded-xl object-cover border-gray-200"
              />
              <Badge
                className={`absolute top-4 left-4 ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </Badge>
            </div>
            {/*dsdsdfsadfg*/}
            <CardContent className="md:w-3/5 p-4 md:p-8">
              <h4 className="text-2xl text-gray-200 font-bold">
                {project.name}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className="p-1 border-gray-700 bg-gray-700/50 flex items-center gap-1 text-xs text-gray-200"
                  >
                    <tech.icon />
                    {tech.name}
                  </Badge>
                ))}
              </div>
              <ul className="text-gray-400 text-sm list-disc leading-relaxed mt-2">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {project.links.map((link, linkIndex) => (
                <AnimateIcon
                  key={linkIndex}
                  animateOnHover
                  animateOnTap
                  animation="default"
                >
                  <Button
                    asChild
                    className="hover:scale-95 shadow-md hover:shadow-purple-500/25 transition-all duration-150 z-20 mt-6 mr-2 text-gray-900 hover:bg-purple-800 hover:text-white bg-purple-400"
                  >
                    <a
                      href={link.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <link.icon
                        animateOnHover
                        animateOnTap
                        animation="default"
                      />
                      <span>{link.desc}</span>
                    </a>
                  </Button>
                </AnimateIcon>
              ))}
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
