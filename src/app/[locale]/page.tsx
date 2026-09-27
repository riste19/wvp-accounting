import type { Metadata } from "next";

import { getContent } from "@/data/content";
import {
  AboutSection,
  AdminServicesSection,
  ContactSection,
  Hero,
  PackagesSection,
  PillarsSection,
  ServicesSection,
  StatsSection,
  WhySection,
} from "@/features/home";
import { localeAlternates } from "@/i18n/locales";
import { resolveLocale } from "@/i18n/resolveLocale";

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
 * The whole site, on one page, the way the approved design has it: the header
 * links are anchors into these sections rather than separate routes.
 *
 * It is still a static export, so all of this text is in the HTML — which the
 * old single-page app could not manage, and is the main reason to rebuild it.
 */
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  const { text, services, pillars, packages, contactForm } = getContent(locale);

  return (
    <>
      <Hero locale={locale} text={text} />
      <ServicesSection services={services} text={text} />
      <PillarsSection pillars={pillars} />
      <PackagesSection locale={locale} packages={packages} text={text} />
      <AdminServicesSection text={text} />
      <StatsSection text={text} />
      <WhySection locale={locale} text={text} />
      <AboutSection text={text} />
      <ContactSection locale={locale} text={text} formCopy={contactForm} />
    </>
  );
}
