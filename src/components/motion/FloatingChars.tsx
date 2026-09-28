import type { CSSProperties } from "react";

import { cn } from "@/lib";

type Char = {
  char: string;
  x: string;
  y: string;
  /** Seconds. */
  delay: number;
  duration: number;
};

/**
 * The approved site's three sets of drifting digits, position for position.
 * Services keeps them on the left, "why us" on the right, contact around the
 * edges.
 */
const SETS = {
  services: [
    { char: "1", x: "5%", y: "10%", delay: 0, duration: 15 },
    { char: "0", x: "15%", y: "25%", delay: 2, duration: 18 },
    { char: "%", x: "8%", y: "45%", delay: 4, duration: 20 },
    { char: "+", x: "20%", y: "60%", delay: 1, duration: 16 },
    { char: "д", x: "3%", y: "75%", delay: 3, duration: 19 },
    { char: "0", x: "25%", y: "15%", delay: 5, duration: 17 },
    { char: "=", x: "12%", y: "85%", delay: 2, duration: 21 },
    { char: "8", x: "30%", y: "40%", delay: 0, duration: 14 },
    { char: "€", x: "2%", y: "55%", delay: 4, duration: 22 },
    { char: "5", x: "18%", y: "5%", delay: 3, duration: 16 },
    { char: "-", x: "35%", y: "70%", delay: 1, duration: 18 },
    { char: "9", x: "7%", y: "30%", delay: 5, duration: 20 },
    { char: "×", x: "22%", y: "90%", delay: 2, duration: 15 },
    { char: "2", x: "28%", y: "50%", delay: 0, duration: 17 },
    { char: ".", x: "10%", y: "65%", delay: 4, duration: 19 },
    { char: "6", x: "32%", y: "20%", delay: 3, duration: 21 },
    { char: "÷", x: "5%", y: "95%", delay: 1, duration: 16 },
    { char: "3", x: "38%", y: "80%", delay: 5, duration: 18 },
    { char: "7", x: "14%", y: "35%", delay: 2, duration: 20 },
    { char: "4", x: "40%", y: "10%", delay: 0, duration: 22 },
  ],
  whyUs: [
    { char: "1", x: "85%", y: "15%", delay: 0, duration: 16 },
    { char: "0", x: "95%", y: "30%", delay: 2, duration: 19 },
    { char: "%", x: "88%", y: "50%", delay: 4, duration: 21 },
    { char: "+", x: "92%", y: "65%", delay: 1, duration: 17 },
    { char: "д", x: "82%", y: "80%", delay: 3, duration: 20 },
    { char: "0", x: "75%", y: "10%", delay: 5, duration: 18 },
    { char: "=", x: "90%", y: "90%", delay: 2, duration: 22 },
    { char: "8", x: "70%", y: "45%", delay: 0, duration: 15 },
    { char: "€", x: "80%", y: "60%", delay: 4, duration: 23 },
    { char: "5", x: "78%", y: "25%", delay: 3, duration: 17 },
    { char: "-", x: "68%", y: "75%", delay: 1, duration: 19 },
    { char: "9", x: "95%", y: "5%", delay: 5, duration: 21 },
    { char: "×", x: "72%", y: "95%", delay: 2, duration: 16 },
    { char: "2", x: "85%", y: "40%", delay: 0, duration: 18 },
    { char: ".", x: "75%", y: "55%", delay: 4, duration: 20 },
    { char: "6", x: "92%", y: "20%", delay: 3, duration: 22 },
    { char: "÷", x: "65%", y: "85%", delay: 1, duration: 17 },
    { char: "3", x: "88%", y: "70%", delay: 5, duration: 19 },
    { char: "7", x: "70%", y: "35%", delay: 2, duration: 21 },
    { char: "4", x: "95%", y: "50%", delay: 0, duration: 23 },
  ],
  contact: [
    { char: "1", x: "5%", y: "15%", delay: 0, duration: 17 },
    { char: "0", x: "95%", y: "20%", delay: 2, duration: 20 },
    { char: "%", x: "8%", y: "55%", delay: 4, duration: 22 },
    { char: "+", x: "92%", y: "70%", delay: 1, duration: 18 },
    { char: "д", x: "3%", y: "80%", delay: 3, duration: 21 },
    { char: "0", x: "88%", y: "10%", delay: 5, duration: 19 },
    { char: "=", x: "12%", y: "90%", delay: 2, duration: 23 },
    { char: "8", x: "85%", y: "45%", delay: 0, duration: 16 },
    { char: "€", x: "2%", y: "35%", delay: 4, duration: 24 },
    { char: "5", x: "15%", y: "5%", delay: 3, duration: 18 },
    { char: "-", x: "75%", y: "85%", delay: 1, duration: 20 },
    { char: "9", x: "7%", y: "40%", delay: 5, duration: 22 },
    { char: "×", x: "78%", y: "95%", delay: 2, duration: 17 },
    { char: "2", x: "25%", y: "25%", delay: 0, duration: 19 },
    { char: ".", x: "68%", y: "60%", delay: 4, duration: 21 },
    { char: "6", x: "35%", y: "8%", delay: 3, duration: 23 },
    { char: "÷", x: "5%", y: "65%", delay: 1, duration: 18 },
    { char: "3", x: "82%", y: "75%", delay: 5, duration: 20 },
    { char: "7", x: "20%", y: "50%", delay: 2, duration: 22 },
    { char: "4", x: "55%", y: "15%", delay: 0, duration: 24 },
  ],
} satisfies Record<string, Char[]>;

/** How far each set drifts and tilts, and how visible it gets. */
const MOTION = {
  services: { size: "text-5xl md:text-6xl", o1: 0.15, o2: 0.25, dy: -40, r: 8 },
  whyUs: { size: "text-5xl md:text-6xl", o1: 0.15, o2: 0.25, dy: -40, r: 8 },
  contact: { size: "text-4xl md:text-5xl", o1: 0.12, o2: 0.22, dy: -35, r: 6 },
};

type FloatingCharsProps = {
  set: keyof typeof SETS;
};

/** Decoration only: hidden from assistive tech and from pointer events. */
export function FloatingChars({ set }: FloatingCharsProps) {
  const motion = MOTION[set];

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {SETS[set].map((item, index) => (
        <div
          key={index}
          className={cn(
            "fm-float absolute font-black text-primary/20 select-none",
            motion.size,
          )}
          style={
            {
              left: item.x,
              top: item.y,
              "--fm-duration": `${item.duration}s`,
              "--fm-delay": `${item.delay}s`,
              "--fm-o1": motion.o1,
              "--fm-o2": motion.o2,
              "--fm-dy": `${motion.dy}px`,
              "--fm-r": `${motion.r}deg`,
            } as CSSProperties
          }
        >
          {item.char}
        </div>
      ))}
    </div>
  );
}
