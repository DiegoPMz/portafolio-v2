import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";

interface ProjectDetails {
  image: string;
  title: string;
  category: string;
  status: string;
  year: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  position: number;
  project: ProjectDetails;
}

export const ProjectCard = ({ position, project }: ProjectCardProps) => {
  return (
    <div className="group relative ">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-purple-500/5 blur-3xl rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-1000"></div>

      <div className="relative">
        <div
          className={cn(
            `grid lg:grid-cols-2 gap-8 lg:gap-16 items-center `,
            position % 2 === 1 && "lg:grid-flow-col-dense",
          )}
        >
          {/* Project Image */}
          <div
            className={`relative ${position % 2 === 1 ? "lg:col-start-2" : ""}`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-4 backdrop-blur-sm border border-zinc-700/30">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                // width={800}
                // height={500}
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Floating badges */}
              <div className="absolute -top-1.5 -right-4 space-y-3">
                <div className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/50 rounded-2xl px-4 py-2 shadow-2xl">
                  <span className="text-zinc-300 text-sm font-light">
                    {project.category}
                  </span>
                </div>
                <div
                  className={`${
                    project.status === "Production"
                      ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                      : "bg-blue-500/20 border-blue-500/30 text-blue-400"
                  } backdrop-blur-xl border rounded-2xl px-4 py-2 shadow-2xl`}
                >
                  <span className="text-sm font-light">{project.status}</span>
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute -bottom-3 -left-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl px-6 py-3 shadow-2xl shadow-blue-500/30">
                  <span className="text-zinc-900 font-semibold text-lg">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div
            className={`space-y-8 ${position % 2 === 1 ? "lg:col-start-1" : ""}`}
          >
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="text-sm text-zinc-500 tracking-[0.2em] uppercase font-light">
                  {project.subtitle}
                </div>
                <h3 className="text-4xl lg:text-5xl font-extralight text-zinc-100 leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="w-20 h-px bg-gradient-to-r from-blue-400 to-purple-400"></div>

              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className="text-sm text-zinc-500 tracking-wider uppercase font-light">
                Stack Tecnológico
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <FloatingBadges key={techIndex}>{tech}</FloatingBadges>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-8">
                <Button size={"sm"}>
                  <div className="flex flex-col items-center md:flex-row md:space-x-3">
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 group-hover:rotate-12" />
                    <span className="text-zinc-300 group-hover:text-zinc-100 font-light transition-colors duration-300">
                      Código Fuente
                    </span>
                  </div>
                </Button>

                <button className="cursor-pointer group relative flex-1 bg-zinc-900/80 hover:bg-zinc-800/80 border-2 border-zinc-700/50 hover:border-zinc-500/70 rounded-2xl px-8 py-4 transition-all duration-500 overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 via-zinc-700/20 to-zinc-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    </div>
                    <span className="text-zinc-200 group-hover:text-zinc-100 font-medium transition-colors duration-300">
                      Ver Proyecto
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function FloatingBadges({ children }: PropsWithChildren) {
  return (
    <div className="group relative bg-gradient-to-r from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm border border-zinc-700/30 hover:border-zinc-400/30 rounded-full px-3 py-1 transition-all duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <span className="relative text-zinc-300 group-hover:text-zinc-100 text-sm font-medium tracking-wide transition-colors duration-300">
        {children}
      </span>
    </div>
  );
}
