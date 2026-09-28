import { ArrowRight, ChevronDown, Star } from "lucide-react";
import Image from "next/image";

import { SectionLink } from "@/components/layout";
import type { SiteText } from "@/data/content";
import { images, sectionHref, sections } from "@/data/site";
import type { Locale } from "@/i18n/locales";

type HeroProps = {
  locale: Locale;
  text: SiteText;
};

/**
 * The approved site's hero, class for class: the office building washed out
 * to the right, and the copy rising into place on load.
 *
 * That site also draws a layer of drifting figures here, but under the
 * photograph, which is opaque — so they are never seen, and are left out.
 */
export function Hero({ locale, text }: HeroProps) {
  const { hero } = text;
  const services = sectionHref(locale, sections.services);

  return (
    <section
      id={sections.home}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={images.building}
          alt="WVP Building"
          width={800}
          height={550}
          priority
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/60 to-background/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8">
          <div className="fm-hero w-full lg:w-[60%] flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-md">
              <div aria-hidden className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="ml-2 font-semibold">{hero.badge}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-foreground">
              {hero.title[0]}
              <br />
              <span className="text-primary">{hero.title[1]}</span> <br />
              <span>{hero.title[2]}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <SectionLink
                href={sectionHref(locale, sections.contact)}
                offset={0}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] bg-primary text-primary-foreground shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 w-full sm:w-auto text-base h-14 px-8 rounded-full group shadow-md"
              >
                {hero.ctaContact}
                <ArrowRight
                  aria-hidden
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </SectionLink>
              <SectionLink
                href={services}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] border border-border hover:text-secondary-foreground hover:border-white/20 w-full sm:w-auto text-base h-14 px-8 rounded-full shadow-sm bg-background/50 backdrop-blur-sm hover:bg-muted"
              >
                {hero.ctaServices}
              </SectionLink>
            </div>
          </div>
        </div>
      </div>

      <SectionLink
        href={services}
        aria-label={hero.scrollDown}
        className="fm-chevron absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <ChevronDown aria-hidden className="w-8 h-8" />
      </SectionLink>
    </section>
  );
}
