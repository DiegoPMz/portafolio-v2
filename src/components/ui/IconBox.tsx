import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

interface IconBoxProps {
  className?: string;
}

export const IconBox = ({
  children,
  className,
}: PropsWithChildren<IconBoxProps>) => {
  return (
    <div
      className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};
