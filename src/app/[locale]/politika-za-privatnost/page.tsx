import type { Metadata } from "next";

import { LegalPage } from "@/components/sections";
import { privacyPolicy } from "@/data/content";
import { legalRoutes } from "@/data/site";
import { localeAlternates } from "@/i18n/locales";
import { resolveLocale } from "@/i18n/resolveLocale";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/politika-za-privatnost">): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { title, description } = privacyPolicy.translations[locale];

  return {
    title,
    description,
    alternates: localeAlternates(locale, legalRoutes.privacy),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: PageProps<"/[locale]/politika-za-privatnost">) {
  const locale = await resolveLocale(params);

  return <LegalPage locale={locale} texts={privacyPolicy} />;
}
