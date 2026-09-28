import { Reveal } from "@/components/motion";
import type { SiteText } from "@/data/content";

/** The red band of four figures under the hero. */
export function StatsSection({ text }: { text: SiteText }) {
  return (
    <section className="bg-primary py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
          {text.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              duration={0.5}
              delay={index * 0.1}
              className="text-center text-primary-foreground flex flex-col items-center justify-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
