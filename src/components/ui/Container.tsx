import type { ReactNode } from "react";

import { cn } from "@/lib";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The approved site's content column: Tailwind's `container` (1280px at xl,
 * 1536px at 2xl) with 16px gutters, 24px from `md` up. The header and footer
 * use the same, so every page lines up with them.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 md:px-6", className)}>{children}</div>
  );
}
