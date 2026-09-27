import { icons } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import type { Pillar } from "@/data/content/pillars";

/**
 * Three wide cards — expertise, dedication, trust — each with the one figure
 * that backs it up.
 */
export function PillarsSection({ pillars }: { pillars: Pillar[] }) {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];

            return (
              <Reveal
                key={pillar.id}
                delay={index * 0.11}
                className="flex h-full flex-col rounded-card border border-border bg-card p-7 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-white">
                    <Icon aria-hidden className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {pillar.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-6 text-sm text-muted-foreground">
                  <span className="mr-2 text-2xl font-black text-primary">
                    {pillar.stat}
                  </span>
                  {pillar.statLabel}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
