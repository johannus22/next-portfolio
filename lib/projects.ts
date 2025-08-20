import { RiNextjsFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { ExternalLink } from "@/components/animate-ui/icons/external-link";
import { ChevronLeftRight } from "@/components/animate-ui/icons/chevron-left-right";
import { Star } from "@/components/animate-ui/icons/star";
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
import { IoDocument } from "react-icons/io5";

export type Technology = {
  name: string;
  icon: React.ElementType;
};

export type Link = {
  desc: string;
  icon: React.ElementType;
  href: string;
};

export type Project = {
  name: string;
  description: string[];
  status: string;
  image: string;
  technologies: Technology[];
  links: Link[];
};

export const projects: Project[] = [
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
    status: "Completed",
    image: "/projects/auxilium-doc.jpg",
    technologies: [
      { name: "PHP", icon: SiPhp },
      { name: "CSS", icon: SiCss3 },
      { name: "API", icon: TbApi },
      { name: "Javascript", icon: SiJavascript },
    ],
    links: [
      {
        desc: "Documents",
        icon: Star,
        href: "https://github.com/johannus22/auxilium",
      },
    ],
  },
];
