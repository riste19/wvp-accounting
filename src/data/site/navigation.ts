import { text } from "@/data/content/text";
import type { Locale } from "@/i18n/locales";

import { sectionHref, sections } from "./sections";

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  /** The blog is a real page, so the header rules it off from the anchors. */
  separatorBefore?: boolean;
};

/**
 * The header links. Every item but the blog is a section of the same page, so
 * following one scrolls rather than navigates.
 */
export function getPrimaryNav(locale: Locale): NavItem[] {
  const { nav } = text[locale];

  return [
    { label: nav.home, href: `/${locale}` },
    { label: nav.services, href: sectionHref(locale, sections.services) },
    { label: nav.packages, href: sectionHref(locale, sections.packages) },
    { label: nav.about, href: sectionHref(locale, sections.about) },
    { label: nav.contact, href: sectionHref(locale, sections.contact) },
    { label: nav.blog, href: `/${locale}/blog`, separatorBefore: true },
  ];
}

/** The mobile panel shows the same links in the same order. */
export const getMobileNav = getPrimaryNav;
