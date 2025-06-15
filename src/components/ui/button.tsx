import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "cursor-pointer group relative border rounded-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm",
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
        xs: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-zinc-700/20 to-zinc-600/20",
          variant === "blue" && "from-blue-500/10 to-purple-500/10",
        )}
      ></div>
      <div className="flex items-center justify-center space-x-3">
        {props.children}
      </div>
    </Comp>
  );
}

export { Button, buttonVariants };
