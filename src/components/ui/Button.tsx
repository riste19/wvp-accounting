import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib";

export type ButtonVariant = "primary" | "outline";

/** The approved site's large pill buttons, as its hero uses them. */
const BASE =
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] text-base h-14 px-8 rounded-full";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30",
  outline:
    "border border-border shadow-sm bg-background/50 backdrop-blur-sm hover:bg-muted hover:text-secondary-foreground",
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(BASE, VARIANTS[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
