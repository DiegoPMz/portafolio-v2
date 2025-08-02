import type { MediaItem } from "@/data/projectDetails";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface MediaSidebarListProps {
  currentItem: number;
  mediaItems: MediaItem[];
  onclick: (itemPosition: number) => void;
}

export const MediaSidebarList = ({
  currentItem,
  mediaItems,
  onclick,
}: MediaSidebarListProps) => {
  return (
    <div className="space-y-3">
      {mediaItems.map((item, index) => (
        <button
          key={item.title}
          onClick={() => onclick(index)}
          className={cn(
            "w-full group cursor-pointer relative overflow-hidden rounded-xl border-2 transition-all duration-300",
            currentItem === index
              ? "border-blue-400 bg-blue-500/10"
              : "border-zinc-700/50 hover:border-zinc-600/50 bg-zinc-900/30",
          )}
        >
          <div className="flex items-center space-x-4 p-4">
            <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
              {item.type === "video" ? (
                <>
                  <img
                    src={item.videoPrev}
                    alt={item.title}
                    width={64}
                    height={48}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                </>
              ) : (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={48}
                  loading="lazy"
                  className="w-full  h-full object-cover"
                />
              )}
            </div>
            <div className="flex-1 text-left">
              <h4 className="text-zinc-200 font-light group-hover:text-white transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-zinc-500 text-xs">
                {item.type === "video" ? "Video Demo" : "Screenshot"}
              </p>
            </div>
            {currentItem === index && (
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};
