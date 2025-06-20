import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface ProjectStoryCardContentProps {
  className?: string;
}

export const ProjectStoryCard = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "rounded-lg border text-card-foreground shadow-sm bg-zinc-900/30 border-zinc-800/30 hover:bg-zinc-900/50 transition-all duration-500",
        className,
      )}
      data-v0-t="card"
    >
      {children}
    </div>
  );
};

const ProjectStoryCardContent = ({
  children,
  className,
}: PropsWithChildren<ProjectStoryCardContentProps>) => {
  return (
    <div className={cn("p-8 text-center space-y-6", className)}>{children}</div>
  );
};

ProjectStoryCard.StoryCardContent = ProjectStoryCardContent;
