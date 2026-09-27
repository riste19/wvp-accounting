import type { Locale } from "@/i18n/locales";

/**
 * Kept out of `navigation.ts` on purpose: the language selector is a client
 * component, and nothing it imports should be able to drag page content
 * across the client boundary with it.
 */
export type Language = {
  locale: Locale;
  code: string;
  /** The language's name, written in that language. */
  label: string;
  /** The word "language" in that language, for the switcher's accessible name. */
  languageWord: string;
};

export const languages: Language[] = [
  { locale: "mk", code: "MK", label: "Македонски", languageWord: "Јазик" },
  { locale: "sq", code: "AL", label: "Shqip", languageWord: "Gjuha" },
  { locale: "en", code: "EN", label: "English", languageWord: "Language" },
];
