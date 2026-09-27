import { Check } from "lucide-react";

import { Reveal } from "@/components/motion";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import type { SiteText } from "@/data/content/text";
import { sectionHref, sections } from "@/data/site";
import type { Locale } from "@/i18n/locales";

/** Six short reasons, two to a row, above the call to action. */
export function WhySection({ locale, text }: { locale: Locale; text: SiteText }) {
  const { why } = text;

  return (
    <section id={sections.whyUs} className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionHeading
          size="display"
          title={why.title}
          subtitle={why.subtitle}
          className="mx-auto max-w-3xl"
        />

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {why.points.map((point, index) => (
            <Reveal
              key={point}
              as="li"
              delay={(index % 2) * 0.08}
              className="flex items-start gap-3 rounded-card border border-border bg-card p-5 shadow-sm"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden className="h-4 w-4" />
              </span>
              <span className="text-sm leading-relaxed text-foreground">{point}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <ButtonLink href={sectionHref(locale, sections.contact)} variant="pill">
            {why.cta}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
