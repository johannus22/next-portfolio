"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { skills } from "@/lib/skills";
import { experiences } from "@/lib/experiences";
import { projects } from "@/lib/projects";
import { Send } from "@/components/animate-ui/icons/send";
import { Download } from "@/components/animate-ui/icons/download";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import {
  FaGithub,
  FaCode,
  FaTools,
  FaBrain,
  FaLinkedin,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaMusic,
  FaRunning,
  FaBiking,
  FaCertificate,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  // Reorganize skills into 3 categories
  const frameworks = [
    ...(skills
      .find((s) => s.name === "Frontend")
      ?.technologies.filter((t) =>
        ["React", "Next.js", "Vue", "Livewire", "Alpine.js"].includes(t.name)
      ) || []),
    ...(skills
      .find((s) => s.name === "Backend")
      ?.technologies.filter((t) => ["Laravel", "Node.js"].includes(t.name)) ||
      []),
  ];

  const languages = [
    ...(skills.find((s) => s.name === "Languages")?.technologies || []),
  ];

  const tools = [
    ...(skills
      .find((s) => s.name === "Frontend")
      ?.technologies.filter((t) =>
        ["Tailwind CSS", "Blade"].includes(t.name)
      ) || []),
    ...(skills
      .find((s) => s.name === "Backend")
      ?.technologies.filter((t) => ["PHP", "RestAPI"].includes(t.name)) || []),
    ...(skills.find((s) => s.name === "Database")?.technologies || []),
    ...(skills.find((s) => s.name === "Tools")?.technologies || []),
    ...(skills.find((s) => s.name === "DevOps")?.technologies || []),
  ];

  const softSkillsList = [
    "Problem Solving",
    "Attention to Detail",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "UI/UX Design",
  ];

  const techCategories = [
    { name: "Frameworks", icon: SiReact, technologies: frameworks },
    { name: "Languages", icon: FaCode, technologies: languages },
    { name: "Tools", icon: FaTools, technologies: tools },
    {
      name: "Soft Skills",
      icon: FaBrain,
      technologies: [],
      softSkills: softSkillsList,
    },
  ];

  // Page load animation variants
  const pageContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Different slide directions for visual interest
  const slideFromTop = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Scroll animation variants (for when scrolling)
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const experienceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageContainer}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10"
    >
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* Hero Card - Spans full width */}
        <motion.div variants={slideFromTop} className="md:col-span-4">
          <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all overflow-hidden group">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* Profile Picture - Left Side */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    className="rounded-lg border-3 border-violet-600 object-cover"
                    src="/pfpic.jpg"
                    alt="Profile"
                    height={160}
                    width={160}
                  />
                </motion.div>

                {/* Content - Right Side */}
                <div className="flex-1 text-center md:text-left mx-auto md:mx-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2 justify-center md:justify-start">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                      Hello, I'm Rafael!
                    </h1>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <motion.a
                        href="https://linkedin.com/in/john-rafael-masilungan-52417231b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 items-center md:justify-start">
                    <p className="text-cyan-400 text-base font-semibold md:text-lg">
                      Software Engineer
                    </p>
                    <span className="text-gray-500 hidden md:inline">•</span>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      <span>CALABARZON, Philippines</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl">
                    Specialized in full-stack development maximizing the use of
                    AI technologies to streamline development processes and
                    maximize efficiency and productivity.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <AnimateIcon
                      animateOnHover
                      animateOnTap
                      animation="default"
                    >
                      <Button
                        variant="outline"
                        asChild
                        className="bg-violet-600 hover:bg-violet-700 text-white hover:text-white border-0 transition-all"
                      >
                        <a
                          href="/CV-Masilungan JR.pdf"
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Download
                            animateOnHover
                            animateOnTap
                            animation="default-loop"
                          />
                          <span>Download CV</span>
                        </a>
                      </Button>
                    </AnimateIcon>
                    <AnimateIcon
                      animateOnHover
                      animateOnTap
                      animation="default"
                    >
                      <Button
                        variant="outline"
                        asChild
                        className="bg-gray-700 hover:bg-gray-600 text-white hover:text-white border-gray-600 transition-all"
                      >
                        <a
                          href="mailto:jmasilungan1822@gmail.com"
                          className="flex items-center gap-2"
                        >
                          <Send animateOnHover animation="default" />
                          <span>Send Email</span>
                        </a>
                      </Button>
                    </AnimateIcon>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Card - Spans 2 columns, 2 rows */}
        <motion.div
          variants={slideFromLeft}
          className="md:col-span-2 md:row-span-2"
        >
          <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all h-full overflow-hidden">
            <CardContent className="p-4 md:p-6 sm:p-8 h-full flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Experience
              </h2>
              <div className="relative space-y-8 pl-6 flex-1">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-8 w-px bg-gradient-to-b from-violet-500 to-cyan-400/50"></div>

                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={experienceItemVariants}
                    transition={{ delay: index * 0.15 }}
                  >
                    {/* Timeline dot with hover effect */}
                    <motion.div
                      className="absolute -left-7.25 top-1 w-3 h-3 bg-cyan-400 rounded-full ring-4 ring-gray-800/80 group-hover:ring-cyan-400/30 transition-all"
                      whileHover={{ scale: 1.3 }}
                    ></motion.div>

                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-gray-200 text-sm mt-1">
                        {exp.company}
                      </p>
                      <Badge className="mt-2 bg-violet-500/20 text-white border-violet-500/30 text-xs group-hover:bg-violet-500/30 transition-colors">
                        {exp.period}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Skills & Soft Skills - 4 Cards on the right */}
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={
              index === 0
                ? slideFromRight
                : index === 1
                ? slideFromRight
                : index === 2
                ? slideFromRight
                : slideFromRight
            }
            className="md:col-span-2"
          >
            <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all h-full group">
              <CardContent className="p-4">
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center mr-3 rounded-lg bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                    <category.icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.name}
                  </h3>
                </motion.div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.softSkills
                    ? category.softSkills.map((skill, skillIndex) => (
                        <motion.div key={skillIndex} variants={staggerItem}>
                          <Badge className="border-gray-600/50 bg-gray-700/40 hover:bg-gray-700/60 hover:scale-105 text-xs text-gray-200 transition-all cursor-default">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))
                    : category.technologies.map((tech, techIndex) => (
                        <motion.div key={techIndex} variants={staggerItem}>
                          <Badge className="border-gray-600/50 bg-gray-700/40 hover:bg-gray-700/60 hover:scale-105 flex items-center gap-1.5 text-xs text-gray-200 transition-all cursor-default [&>svg]:text-[unset]">
                            <tech.icon className="w-3 h-3 flex-shrink-0" />
                            <span>{tech.name}</span>
                          </Badge>
                        </motion.div>
                      ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Featured Projects - Spans all columns */}
        <motion.div variants={slideFromBottom} className="md:col-span-4">
          <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl text-center font-bold text-white mb-8">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {projects.slice(0, 4).map((project, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={cardVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={
                        project.links.length > 0 ? project.links[0].href : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="border-gray-700/50 bg-gray-700/50 backdrop-blur-sm hover:border-cyan-400/30 transition-all group overflow-hidden cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="relative mb-4 h-40 overflow-hidden rounded-lg">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              className="w-full h-full"
                            >
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.name}
                                fill
                                className="object-cover"
                              />
                            </motion.div>
                            <Badge
                              className={`absolute top-2 left-2 backdrop-blur-sm ${
                                project.status === "Live"
                                  ? "bg-green-600/90"
                                  : project.status === "In Progress"
                                  ? "bg-yellow-600/90"
                                  : "bg-blue-600/90"
                              }`}
                            >
                              {project.status}
                            </Badge>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                              <span className="text-white text-sm font-medium flex items-center gap-1">
                                Click to View{" "}
                                <FaExternalLinkAlt className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {project.description[0]}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  className="border-gray-600/50 bg-gray-700/40 text-xs text-gray-200 [&>svg]:text-[unset]"
                                >
                                  <tech.icon className="w-3 h-3 mr-1" />
                                  {tech.name}
                                </Badge>
                              ))}
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Beyond Coding & Certificates - 2 Cards */}
        <motion.div variants={slideFromRight} className="md:col-span-2">
          <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all h-full group">
            <CardContent className="p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Beyond Coding
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                When I'm not coding, you'll find me pursuing these passions
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-500/10 flex-shrink-0">
                    <FaMusic className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Composition
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Creating and playing classical music and liturgical pieces
                      on the piano and pipe organ
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-500/10 flex-shrink-0">
                    <FaRunning className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Running</h3>
                    <p className="text-gray-400 text-sm">
                      Staying active and challenging myself with regular runs
                      and marathons
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-violet-500/10 flex-shrink-0">
                    <FaBiking className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Cycling</h3>
                    <p className="text-gray-400 text-sm">
                      Exploring new routes and enjoying the freedom of cycling
                      adventures
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Certificates Card */}
        <motion.div variants={slideFromRight} className="md:col-span-2">
          <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all h-full group">
            <CardContent className="p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Certifications
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Professional certifications and achievements
              </p>
              <div className="space-y-4">
                {/* IBM Web Development Certificate */}
                <motion.a
                  href="https://www.credly.com/badges/14e5fe68-1ff2-40fc-a91a-694a66cd3136/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600/50 hover:border-cyan-400/50 transition-all group/cert">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-white font-semibold group-hover/cert:text-cyan-400 transition-colors">
                            Web Development Fundamentals
                          </h3>
                          <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover/cert:text-cyan-400 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-cyan-400 text-sm mt-1 mb-2">IBM</p>
                        <div className="flex items-center gap-2 mt-3">
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs flex items-center gap-1">
                            <FaCertificate className="w-3 h-3" />
                            Verified
                          </Badge>
                          <Badge className="bg-gray-700/40 text-gray-300 border-gray-600/30 text-xs">
                            Credly
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* DEVCON Tech Nexus */}
                <motion.a
                  href="https://devcon.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600/50 hover:border-cyan-400/50 transition-all group/cert">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-white font-semibold group-hover/cert:text-cyan-400 transition-colors">
                            DEVCON Tech Nexus
                          </h3>
                          <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover/cert:text-cyan-400 transition-colors flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-cyan-400 text-sm mt-1 mb-2">
                          DEVCON Philippines
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 text-xs flex items-center gap-1">
                            <FaUsers className="w-3 h-3" />
                            Attended
                          </Badge>
                          <Badge className="bg-gray-700/40 text-gray-300 border-gray-600/30 text-xs">
                            Dec 7, 2024
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer - Spans all columns */}
        <motion.div variants={fadeInScale} className="md:col-span-4">
          <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:border-cyan-400/30 transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <div className="flex flex-col gap-1">
                  <p className="text-gray-400 text-sm flex items-center gap-1">
                    © 2026 John Rafael Masilungan{" "}
                    <MdVerified className="w-3 h-3 text-cyan-600" />
                  </p>
                  <p className="text-gray-500 text-xs">All rights reserved.</p>
                </div>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://github.com/johannus22"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/john-rafael-masilungan-52417231b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:jmasilungan1822@gmail.com"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.main>
  );
}
