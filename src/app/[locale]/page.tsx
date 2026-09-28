import type { Metadata } from "next";

import { getContent } from "@/data/content";
import { company } from "@/data/site";
import {
  ContactSection,
  Hero,
  ServicesSection,
  StatsSection,
  WhyUsSection,
} from "@/features/home";
import { localeAlternates } from "@/i18n/locales";
import { resolveLocale } from "@/i18n/resolveLocale";
import { organizationJsonLd } from "@/lib";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { site } = getContent(locale).ui;

  return {
    // `absolute` skips the layout's "%s | WVP Accounting" template, which
    // would otherwise put the firm's name in the tab twice.
    title: { absolute: site.title },
    description: site.description,
    alternates: localeAlternates(locale, ""),
  };
}

/**
 * The whole site on one page, section for section as the approved site has
 * it: hero, figures, services, why us, contact.
 *
 * It is a static export, so all of this text is in the HTML — which the old
 * single-page app could not manage, and is the main reason to rebuild it.
 */
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  const { text, services, pillars } = getContent(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd(company.siteUrl)),
        }}
      />
      <Hero locale={locale} text={text} />
      <StatsSection text={text} />
      <ServicesSection services={services} text={text} />
      <WhyUsSection pillars={pillars} text={text} />
      <ContactSection locale={locale} text={text} />
    </>
  );
}
