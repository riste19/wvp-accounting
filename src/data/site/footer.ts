import { text } from "@/data/content/text";
import type { Locale } from "@/i18n/locales";

import { sectionHref, sections } from "./sections";

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export function getFooterColumns(locale: Locale): FooterColumn[] {
  const { nav, footer } = text[locale];

  return [
    {
      title: footer.links,
      links: [
        { label: nav.services, href: sectionHref(locale, sections.services) },
        { label: nav.packages, href: sectionHref(locale, sections.packages) },
        { label: nav.about, href: sectionHref(locale, sections.about) },
        { label: nav.blog, href: `/${locale}/blog` },
        { label: nav.contact, href: sectionHref(locale, sections.contact) },
      ],
    },
  ];
}

export function getLegalLinks(locale: Locale) {
  const { footer } = text[locale];

  return [
    { label: footer.privacy, href: `/${locale}/politika-za-privatnost` },
    { label: footer.terms, href: `/${locale}/uslovi-za-koristenje` },
  ];
}
