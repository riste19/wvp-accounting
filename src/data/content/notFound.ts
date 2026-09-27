import type { Locale } from "@/i18n/locales";

/**
 * The 404 page, in all three languages.
 *
 * Kept in its own module because `NotFoundContent` is a client component that
 * picks its language from the address bar after hydration, so it needs all
 * three at once rather than the one the server chose.
 */
export const notFoundCopy: Record<
  Locale,
  { title: string; body: string; home: string; contact: string }
> = {
  mk: {
    title: "Страницата не е пронајдена",
    body: "Страницата што ја барате не постои или е преместена.",
    home: "Назад на почетна",
    contact: "Контактирајте нè",
  },
  sq: {
    title: "Faqja nuk u gjet",
    body: "Faqja që kërkoni nuk ekziston ose është zhvendosur.",
    home: "Kthehu te faqja kryesore",
    contact: "Na kontaktoni",
  },
  en: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has moved.",
    home: "Back to the home page",
    contact: "Contact us",
  },
};
