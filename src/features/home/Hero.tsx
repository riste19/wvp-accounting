import Image from "next/image";

import { ButtonLink, Container } from "@/components/ui";
import type { SiteText } from "@/data/content/text";
import { images, imageSizes, sectionHref, sections } from "@/data/site";
import type { Locale } from "@/i18n/locales";

/**
 * The opening screen: the firm's motto over a photograph of the office.
 *
 * The three title lines are separate strings because the approved site sets
 * them on separate lines and colours the last one red. Keeping them apart
 * means a translator can rebalance the break without touching the markup.
 */
export function Hero({ locale, text }: { locale: Locale; text: SiteText }) {
  const { hero } = text;

  return (
    <section
      id={sections.home}
      className="relative flex min-h-[38rem] items-center overflow-hidden lg:min-h-[44rem]"
    >
      <Image
        src={images.hero}
        alt=""
        aria-hidden
        width={imageSizes.hero.width}
        height={imageSizes.hero.height}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark enough that white type clears AA over the busiest part of the photo. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-strong/95 via-ink/85 to-ink/60"
      />

      <Container className="relative py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="hero-rise inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-sm">
            {hero.badge}
          </p>

          <h1 className="hero-rise hero-rise--title mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title[0]}
            <br />
            {hero.title[1]}
            <br />
            <span className="text-primary">{hero.title[2]}</span>
          </h1>

          <p className="hero-rise hero-rise--subtitle mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.description}
          </p>

          <div className="hero-rise hero-rise--actions mt-9 flex flex-wrap gap-4">
            <ButtonLink href={sectionHref(locale, sections.contact)}>
              {hero.ctaContact}
            </ButtonLink>
            <ButtonLink
              href={sectionHref(locale, sections.services)}
              variant="onImage"
            >
              {hero.ctaServices}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
