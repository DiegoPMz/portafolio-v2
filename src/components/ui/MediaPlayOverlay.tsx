import { Play } from "lucide-react";

export const MediaPlayOverlay = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="w-20 h-20 cursor-pointer bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
        <Play className="w-8 h-8 text-blue-400 ml-1" />
      </button>
    </div>
  );
};
