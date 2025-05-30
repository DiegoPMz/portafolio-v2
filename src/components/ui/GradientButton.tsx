import type { PropsWithChildren } from "react";

export const GradientButton = ({ children }: PropsWithChildren) => {
  return (
    <button className="w-full group relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-2xl px-6 py-4 transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex items-center justify-center space-x-3">
        {children}
      </div>
    </button>
  );
};
