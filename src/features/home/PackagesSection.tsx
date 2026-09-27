import { Check } from "lucide-react";

import { Reveal } from "@/components/motion";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import type { Package } from "@/data/content/packages";
import type { SiteText } from "@/data/content/text";
import { sectionHref, sections } from "@/data/site";
import type { Locale } from "@/i18n/locales";
import { cn } from "@/lib";

/**
 * The five packages.
 *
 * No prices are shown, because the approved site shows none either — every
 * card ends at the contact form. When the boss sets them, add a `price` to
 * `packages.ts` and render it above the feature list; the `monthly` label is
 * already translated and waiting in `text.ts`.
 */
export function PackagesSection({
  locale,
  packages,
  text,
}: {
  locale: Locale;
  packages: Package[];
  text: SiteText;
}) {
  return (
    <section id={sections.packages} className="bg-ink py-20 lg:py-28">
      <Container>
        <SectionHeading
          size="display"
          tone="light"
          title={text.packages.title}
          subtitle={text.packages.subtitle}
          className="mx-auto max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {packages.map((plan, index) => (
            <Reveal
              key={plan.id}
              delay={index * 0.07}
              className={cn(
                "flex h-full flex-col rounded-card border p-6 transition-transform duration-300",
                plan.recommended
                  ? "border-primary bg-white shadow-2xl xl:-translate-y-3"
                  : "border-white/15 bg-white/5 hover:-translate-y-1",
              )}
            >
              {plan.recommended ? (
                <span className="mb-3 self-start rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  {text.packages.recommended}
                </span>
              ) : null}

              <h3
                className={cn(
                  "text-lg font-bold",
                  plan.recommended ? "text-ink" : "text-white",
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm",
                  plan.recommended ? "text-muted-foreground" : "text-white/60",
                )}
              >
                {plan.target}
              </p>

              <ul className="mt-6 mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    />
                    <span
                      className={
                        plan.recommended ? "text-foreground" : "text-white/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={sectionHref(locale, sections.contact)}
                variant={plan.recommended ? "primary" : "onImage"}
                className="mt-auto w-full"
              >
                {text.packages.choose}
              </ButtonLink>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/60">
          {text.packages.validity}
        </p>
      </Container>
    </section>
  );
}
