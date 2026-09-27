import { AnimatedCounter, Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import type { SiteText } from "@/data/content/text";

/** "10+" counts up; "24/7" does not. */
const NUMERIC = /^(\d+)\+?$/;

/** The four figures, on a red band between the paperwork and the reasons. */
export function StatsSection({ text }: { text: SiteText }) {
  return (
    <section className="bg-primary py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {text.stats.map((stat, index) => {
            const match = NUMERIC.exec(stat.value);

            return (
              <Reveal key={stat.label} delay={index * 0.08} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-black text-white sm:text-5xl">
                  {match ? (
                    <AnimatedCounter
                      value={Number(match[1])}
                      suffix={stat.value.endsWith("+") ? "+" : ""}
                    />
                  ) : (
                    stat.value
                  )}
                </dd>
                <p aria-hidden className="mt-2 text-sm font-medium text-white/80">
                  {stat.label}
                </p>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
