import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/skills";
import { experiences } from "@/lib/experiences";

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm group transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                        <skill.icon className="w-6 h-6 text-purple-500" />
                      </div>
                      <h4 className="text-base md:text-lg font-semibold text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="border-gray-600/50 bg-gray-700/40 hover:bg-gray-700/60 flex items-center gap-1.5 text-xs text-gray-200 transition-colors [&>svg]:text-[unset]"
                        >
                          <tech.icon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{tech.name}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Professional Experience
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 md:pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-6px] md:left-[26px] top-2 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-gray-800"></div>

                    <Card className="border-gray-700/50 bg-gray-800/80 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-500/30">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-purple-400 font-medium text-sm md:text-base">
                              {exp.company}
                            </p>
                          </div>
                          <Badge className="w-fit bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1.5 text-sm font-medium">
                            {exp.period}
                          </Badge>
                        </div>
                        <ul className="space-y-3 mt-4">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-3"
                            >
                              <span className="text-purple-400 mt-1 flex-shrink-0">
                                ▹
                              </span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
