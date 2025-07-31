import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

const linkVariants = cva(
  "cursor-pointer block group relative border rounded-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-800/30 hover:bg-zinc-800/50 border-zinc-700/40 hover:border-zinc-600/60 flex-1",
        blue: "g-zinc-800/50 hover:bg-zinc-800/70 border-zinc-700/50 hover:border-zinc-600/50 ",
      },
      size: {
        default: "px-8 py-4 md:px-12 md:py-6",
        sm: "px-4 py-4 md:px-8 md:py-6",
        xs: "px-3 py-2 md:px-6 md:py-5",
        compact: "py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const DecoratedLink = ({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof linkVariants>) => {
  return (
    <a className={cn(linkVariants({ variant, size, className }))} {...props}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-zinc-700/20 to-zinc-600/20",
          variant === "blue" && "from-blue-500/10 to-purple-500/10",
        )}
      ></div>
      <div className="flex items-center justify-center space-x-3">
        {props.children}
      </div>
    </a>
  );
};

export const AccentDotsOverlay = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full ">
      {children !== undefined ? (
        children
      ) : (
        <>
          <div
            className={
              "absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 top-3 right-3"
            }
          ></div>
          <div
            className={
              "absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300 bottom-3 left-3"
            }
          ></div>
        </>
      )}
    </div>
  );
};

const AccentDots = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute  w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300",
        className ? className : "top-3 right-3",
      )}
    ></div>
  );
};

AccentDotsOverlay.AccentDot = AccentDots;

// export const DecoratedLink = ({
//   variant,
//   size,
//   className,
//   ...props
// }: React.ComponentProps<"a"> & VariantProps<typeof linkVariants>) => {
//   return (
//     <a className={cn(linkVariants({ variant, size, className }))} {...props}>
//       <div
//         className={cn(
//           "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-zinc-700/20 to-zinc-600/20",
//           variant === "blue" && "from-blue-500/10 to-purple-500/10",
//         )}
//       ></div>
//       <div className="flex items-center justify-center space-x-3">
//         <div className="absolute top-0 left-0 w-full h-full ">
//           {typeof props.children !== undefined ? (
//             props.children
//           ) : (
//             <>
//               <div
//                 className={cn(
//                   "absolute  w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 top-3 right-3",
//                 )}
//               ></div>
//               <div
//                 className={cn(
//                   "absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300 bottom-3 left-3",
//                 )}
//               ></div>
//             </>
//           )}
//         </div>
//       </div>
//     </a>
//   );
// };
