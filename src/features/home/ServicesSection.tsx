import { Briefcase } from "lucide-react";

import { icons } from "@/components/icons";
import { FloatingChars, Reveal } from "@/components/motion";
import type { Service, SiteText } from "@/data/content";
import { images, sections } from "@/data/site";

import { LogoBand } from "./LogoBand";

type ServicesSectionProps = {
  services: Service[];
  text: SiteText;
};

/** Twelve numbered service cards, then the first logo band. */
export function ServicesSection({ services, text }: ServicesSectionProps) {
  const heading = text.services;

  return (
    <section
      id={sections.services}
      className="py-24 relative bg-background overflow-hidden"
    >
      <FloatingChars set="services" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Briefcase aria-hidden className="w-4 h-4" />
            {heading.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
            {heading.title}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            {heading.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <Reveal
                key={service.title}
                y={30}
                duration={0.5}
                delay={index * 0.05}
                margin="-50px"
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute top-4 right-4 text-7xl font-black text-primary/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-primary/[0.08] group-hover:scale-110"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-500">
                      <Icon aria-hidden className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <LogoBand
          image={images.teamOffice}
          imageAlt="Team Background"
          logoClassName="h-6 md:h-20"
        />
      </div>
    </section>
  );
}
