import type { Metadata } from "next";

import { LegalPage } from "@/components/sections";
import { termsOfUse } from "@/data/content";
import { legalRoutes } from "@/data/site";
import { localeAlternates } from "@/i18n/locales";
import { resolveLocale } from "@/i18n/resolveLocale";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/uslovi-za-koristenje">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { title, description } = termsOfUse.translations[locale];

  return {
    title,
    description,
    alternates: localeAlternates(locale, legalRoutes.terms),
  };
}

export default async function TermsOfUsePage({
  params,
}: PageProps<"/[locale]/uslovi-za-koristenje">) {
  const locale = await resolveLocale(params);

  return <LegalPage locale={locale} texts={termsOfUse} />;
}
