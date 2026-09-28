import { text } from "@/data/content/text";
import type { Locale } from "@/i18n/locales";

import { sectionHref, sections } from "./sections";

export type NavLink = {
  label: string;
  href: string;
};

/**
 * The header's links, and the footer's "quick links", in the approved site's
 * order. "About" points at the "why us" section, as it does there.
 */
export function getPrimaryNav(locale: Locale): NavLink[] {
  const { nav } = text[locale];

  return [
    { label: nav.home, href: sectionHref(locale, sections.home) },
    { label: nav.services, href: sectionHref(locale, sections.services) },
    { label: nav.about, href: sectionHref(locale, sections.whyUs) },
    { label: nav.packages, href: sectionHref(locale, sections.packages) },
  ];
}

/**
 * The legal pages, without the locale. The same slug in every language, like
 * every other page; each must match its folder under `app/[locale]`.
 */
export const legalRoutes = {
  privacy: "/politika-za-privatnost",
  terms: "/uslovi-za-koristenje",
} as const;

/** The footer's privacy and terms links, labelled as the approved site labels them. */
export function getLegalLinks(locale: Locale): NavLink[] {
  const { footer } = text[locale];

  return [
    { label: footer.privacy, href: `/${locale}${legalRoutes.privacy}` },
    { label: footer.terms, href: `/${locale}${legalRoutes.terms}` },
  ];
}
