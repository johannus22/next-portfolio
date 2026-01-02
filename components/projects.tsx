import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { projects } from "@/lib/projects";

export function Projects() {
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
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 text-white">
        Featured Projects
      </h2>
      {projects.map((project, index) => (
        <Card
          key={index}
          className="p-6 md:p-8 lg:p-10 border-gray-700/50 bg-gray-800/80 backdrop-blur-sm group hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30"
        >
          <div className="md:flex">
            <div className="md:w-2/5 relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.name} screenshot`}
                width={420}
                height={180}
                className="w-full h-48 md:h-full rounded-lg object-cover border border-gray-700/50 group-hover:border-purple-500/30 transition-colors"
              />
              <Badge
                className={`absolute top-4 left-4 ${getStatusColor(
                  project.status
                )}`}
              >
                {project.status}
              </Badge>
            </div>
            <CardContent className="md:w-3/5 p-4 md:p-6 lg:p-8">
              <h4 className="text-2xl md:text-3xl text-white font-bold mb-3">
                {project.name}
              </h4>
              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    className="border-gray-600/50 bg-gray-700/40 hover:bg-gray-700/60 flex items-center gap-1.5 text-xs text-gray-200 transition-colors"
                  >
                    <tech.icon className="w-3.5 h-3.5" />
                    {tech.name}
                  </Badge>
                ))}
              </div>
              <ul className="text-gray-300 text-sm md:text-base leading-relaxed space-y-2 mt-4">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                {project.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    asChild
                    className="hover:scale-95 shadow-md hover:shadow-purple-500/25 transition-all duration-150 z-20 text-gray-900 hover:bg-purple-800 hover:text-white bg-purple-400"
                  >
                    <a
                      href={link.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <AnimateIcon
                        animateOnHover
                        animateOnTap
                        animation="default"
                      >
                        <link.icon
                          animateOnHover
                          animateOnTap
                          animation="default"
                        />
                      </AnimateIcon>
                      <span>{link.desc}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
