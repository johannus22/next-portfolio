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
