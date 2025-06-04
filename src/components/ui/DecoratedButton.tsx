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
}

export const DecoratedButton = ({
  className,
  children,
  circleOne,
  circleTwo,
  variants,
}: PropsWithChildren<DecoratedButtonProps>) => {
  return (
    <Button variant={variants} className={cn("border-2", className)}>
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

{
  /* 
  
      <div class="absolute top-0 left-0 w-full h-full">
              <div
                class="absolute top-3 right-3 w-2 h-2 bg-emerald-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              >
              </div>
              <div
                class="absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"
              >
              </div>
            </div>
            <div class="relative flex items-center justify-center space-x-3">
              <div
                class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <Mail
                  className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300"
                />
              </div>
              <span
                class="text-zinc-200 group-hover:text-zinc-100 font-medium text-lg transition-colors duration-300"
              >
                Iniciar Conversación
              </span>
            </div>
  
  
  
  
  */
}
