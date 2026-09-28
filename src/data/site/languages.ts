import type { Locale } from "@/i18n/locales";

/**
 * Kept out of `navigation.ts` on purpose: the language switch is a client
 * component, and nothing it imports should be able to drag page content
 * across the client boundary with it.
 */
export type Language = {
  locale: Locale;
  /** What the switch shows. Albanian reads "AL", as on the approved site. */
  code: string;
  /** The language's name, written in that language. */
  label: string;
};

/** In the approved site's order: MK, EN, AL. */
export const languages: Language[] = [
  { locale: "mk", code: "MK", label: "Македонски" },
  { locale: "en", code: "EN", label: "English" },
  { locale: "sq", code: "AL", label: "Shqip" },
];
