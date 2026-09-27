import { icons } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Container, SectionHeading } from "@/components/ui";
import type { Service } from "@/data/content/services";
import type { SiteText } from "@/data/content/text";
import { sections } from "@/data/site";

/** The twelve service areas, three to a row on a wide screen. */
export function ServicesSection({
  services,
  text,
}: {
  services: Service[];
  text: SiteText;
}) {
  return (
    <section id={sections.services} className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          size="display"
          title={text.services.title}
          subtitle={text.services.subtitle}
          className="mx-auto max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <Reveal
                key={service.title}
                // A short stagger across each row, so the grid settles in waves.
                delay={(index % 3) * 0.08}
                className="group h-full rounded-card border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
