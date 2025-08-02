import type { MediaItem } from "@/data/projectDetails";
import { useEffect, useState, type PropsWithChildren } from "react";

interface MediaPreviewCardProps {
  src: string;
  alt: string;
  mediaType: MediaItem["type"];
}

export const MediaPreviewCard = ({
  src,
  alt,
  mediaType,
  children,
}: PropsWithChildren<MediaPreviewCardProps>) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!src || !isVideoPlaying) return;

    setIsVideoPlaying(false);
  }, [src]);

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-purple-500/20 blur-2xl rounded-3xl group-hover:blur-xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-3xl p-2 sm:p-4 border border-zinc-700/30 group-hover:border-zinc-600/50 transition-all duration-500 w-full aspect-video lg:aspect-4-3 ">
        {mediaType === "image" ? (
          <img
            src={src}
            alt={alt}
            className="rounded-2xl w-full h-full group-hover:scale-[1.02] transition-transform object-cover duration-700"
          />
        ) : (
          <>
            <video
              src={src}
              muted
              loop
              // controls
              aria-label={alt}
              className="rounded-2xl w-full h-full group-hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            />

            {/* {!isVideoPlaying && (
              <div className="pointer-events-none absolute inset-0 ">
                <MediaPlayOverlay />
              </div>
            )} */}
          </>
        )}

        {/* {!isVideoPlaying && (
          <div className="absolute bottom-6 left-6 right-6 hidden lg:block">
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl px-6 py-4">
              <h3 className="text-xl font-light text-zinc-100">{children}</h3>
              <p className="text-zinc-400 text-sm mt-1">
                Click para ver en detalle
              </p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};
