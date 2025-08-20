import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/skills";
import { experiences } from "@/lib/experiences";

export function AboutSection() {
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
