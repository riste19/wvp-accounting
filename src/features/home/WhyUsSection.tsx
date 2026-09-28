import { CircleCheck, Star } from "lucide-react";

import { icons } from "@/components/icons";
import { FloatingChars, Reveal } from "@/components/motion";
import type { Pillar, SiteText } from "@/data/content";
import { images, sections } from "@/data/site";

import { LogoBand } from "./LogoBand";

type WhyUsSectionProps = {
  pillars: Pillar[];
  text: SiteText;
};

/** Three tall cards on why to choose the firm, then the second logo band. */
export function WhyUsSection({ pillars, text }: WhyUsSectionProps) {
  const heading = text.whyUs;

  return (
    <section id={sections.whyUs} className="py-24 bg-background overflow-hidden relative">
      <FloatingChars set="whyUs" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star aria-hidden className="w-4 h-4" />
            {heading.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
            {heading.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {heading.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];

            return (
              <Reveal
                key={pillar.id}
                y={30}
                duration={0.6}
                delay={index * 0.15}
                margin="-50px"
                className="group relative"
              >
                <div className="bg-card border border-border rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute -top-4 -right-4 text-[10rem] font-black text-primary/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-primary/[0.08] group-hover:scale-110"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
                    <Icon aria-hidden className="w-3.5 h-3.5" />
                    {pillar.badge}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/80 transition-all duration-500">
                    <Icon
                      aria-hidden
                      className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {pillar.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <CircleCheck aria-hidden className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-primary">{pillar.stat}</span>
                      <span className="text-sm text-muted-foreground">{pillar.statLabel}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <LogoBand
          image={images.meetingTable}
          imageAlt="Background"
          logoClassName="h-16 md:h-20"
          className="mb-16"
        />
      </div>
    </section>
  );
}
