import type { MediaItem, ProjectStats } from "@/types/project-details";
import { useState } from "react";
import { MediaPreviewCard } from "./MediaPreviewCard";
import { MediaSidebarList } from "./MediaSidebarList";
import { ProjectOverviewStats } from "./ProjectStats";

export const GallerySidebarPanel = ({
  mediaItems,
  projectStatsValues,
}: {
  mediaItems: MediaItem[];
  projectStatsValues?: ProjectStats;
}) => {
  const [activeMedia, setActiveMedia] = useState<number>(0);

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <MediaPreviewCard
          src={mediaItems[activeMedia].src || "/placeholder.svg"}
          alt={mediaItems[activeMedia].title}
          mediaType={mediaItems[activeMedia].type}
        >
          {mediaItems[activeMedia].title}
        </MediaPreviewCard>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-light text-zinc-100">
            Vistas del Proyecto
          </h3>

          <MediaSidebarList
            currentItem={activeMedia}
            mediaItems={mediaItems}
            onclick={(itemPosition) => setActiveMedia(itemPosition)}
          />
        </div>

        {projectStatsValues && (
          <ProjectOverviewStats stats={projectStatsValues} />
        )}
      </div>
    </div>
  );
};
