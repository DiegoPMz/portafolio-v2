import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";
import { Button, buttonVariants } from "./button";

type ButtonVariants = VariantProps<typeof buttonVariants>["variant"];

interface DecoratedButtonProps {
  className?: string;
  circleOne?: string;
  circleTwo?: string;
  variants?: ButtonVariants;
  size?: "sm" | "xs";
}

export const DecoratedButton = ({
  className,
  children,
  circleOne,
  circleTwo,
  variants,
  size,
}: PropsWithChildren<DecoratedButtonProps>) => {
  return (
    <Button
      variant={variants}
      size={size}
      className={cn("border-2", className)}
    >
      <div className="absolute top-0 left-0 w-full h-full ">
        <div
          className={cn(
            "absolute  w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300",
            circleOne ? circleOne : "top-3 right-3",
          )}
        ></div>
        <div
          className={cn(
            "absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300",
            circleTwo ? circleTwo : "bottom-3 left-3",
          )}
        ></div>
      </div>

      {children}
    </Button>
  );
};
