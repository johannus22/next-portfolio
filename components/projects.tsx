import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SiLaravel, SiReact } from "react-icons/si";

export function Projects() {
  const projects = [
    {
      name: "Frontend",
      technologies: [{ icon: SiReact }],
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Projects Section</h2>
      <Card className=" border-gray-700 mt-10 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 group hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardContent className="p-4">
          <h4 className="text-lg text-gray-200 font-bold">Syncpaste</h4>
          <a
            href="https://syncpaste.vercel.app"
            className="text-sm text-gray-400"
          >
            syncpaste.vercel.app
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
