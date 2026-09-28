"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "section";
  /** Seconds before it starts, counted from entering the viewport. */
  delay?: number;
  /** Seconds. Ignored with `spring`. */
  duration?: number;
  /** Where it starts from, in px. */
  x?: number;
  y?: number;
  /** Shrinks the viewport it must enter, as framer's `viewport.margin`. */
  margin?: string;
  /**
   * framer's default transition, for the elements that set none: a stiff
   * spring on position and a short tween on opacity.
   */
  spring?: boolean;
};

/**
 * framer-motion's `whileInView` with `viewport: { once: true }`, which is how
 * the approved site reveals nearly everything, reproduced without the
 * library: the element starts shifted and transparent, and slides into place
 * the first time it enters the viewport. The defaults are that site's most
 * common setting — 20px up over 0.6s.
 *
 * Both states live in CSS (`.fm` / `.fm-in` in globals.css), so the server
 * and the client render the same markup, reduced motion is handled by the
 * stylesheet, and a `<noscript>` rule in the root layout shows everything
 * when scripts are off.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 20,
  margin = "0px",
  spring = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        // Also reveal what the visitor has already scrolled past — landing on
        // /mk#contact must not leave everything above it blank on the way up.
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [margin]);

  const style = {
    "--fm-x": `${x}px`,
    "--fm-y": `${y}px`,
    "--fm-duration": `${duration}s`,
    "--fm-delay": `${delay}s`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={cn("fm", spring && "fm-spring", visible && "fm-in", className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
