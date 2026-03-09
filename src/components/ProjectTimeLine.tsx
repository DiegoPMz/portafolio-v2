import { CheckCircle } from "lucide-react";
import { InfoCard } from "./InfoCard";
import { cn } from "@/lib/utils";
import type { TimelinePhase } from "@/types/project-details";

interface ProjectTimeLineProps {
  details: TimelinePhase & { position: number };
}

export const ProjectTimeLine = ({
  details: { color, deliverables, description, phase, position },
}: ProjectTimeLineProps) => {
  return (
    <div className="relative flex items-start space-x-4 md:space-x-8">
      {/* Timeline Node */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={cn(
            "w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br  rounded-full flex items-center justify-center shadow-2xl",
            color,
          )}
        >
          <span className="text-zinc-900 font-bold text-lg">{position}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <InfoCard>
          <InfoCard.Content className=" p-6 md:p-8 text-left">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                <h4 className="text-2xl font-light text-zinc-100">{phase}</h4>
              </div>

              <p className="text-zinc-400 leading-relaxed">{description}</p>

              <div className="space-y-3">
                <h5 className="text-sm text-zinc-500 tracking-wider uppercase font-medium">
                  Entregables
                </h5>
                <div className="grid md:grid-cols-2 gap-2">
                  {deliverables.map((deliverable) => (
                    <div
                      key={deliverable}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InfoCard.Content>
        </InfoCard>
      </div>
    </div>
  );
};
