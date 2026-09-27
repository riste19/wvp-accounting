/**
 * The site's languages.
 *
 * Client-safe on purpose — no data and no server-only imports — so the header
 * and the language switcher can use it without pulling content into the
 * browser bundle.
 *
 * Every page lives under its locale with the same slug in each: /mk/blog and
 * /sq/blog. Macedonian is the default.
 *
 * The old site used "al" for Albanian in its own switcher. This one uses the
 * ISO code "sq", which is what `lang` and `hreflang` have to carry, and what
 * the consulting site uses — so the two group sites agree.
 */
export const locales = ["mk", "sq", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "mk";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

const PREFIX = new RegExp(`^/(?:${locales.join("|")})(?=[/?#]|$)`);

/** The locale a path belongs to: "/sq/blog" → "sq". Unprefixed paths are Macedonian. */
export function localeFromPath(path: string): Locale {
  const first = path.split("/")[1] ?? "";
  return isLocale(first) ? first : defaultLocale;
}

/**
 * The same page in another language: "/mk/blog" → "/sq/blog". A path with no
 * locale (the root 404) goes to that language's home page.
 */
export function switchLocale(path: string, locale: Locale): string {
  return PREFIX.test(path) ? path.replace(PREFIX, `/${locale}`) : `/${locale}`;
}

/** The route without its locale: "/sq/blog" → "/blog", "/sq" → "/". */
export function stripLocale(path: string): string {
  return path.replace(PREFIX, "") || "/";
}

/** BCP 47 tag for `lang` and `hreflang`. */
export const languageTag: Record<Locale, string> = {
  mk: "mk",
  sq: "sq",
  en: "en",
};

export const ogLocale: Record<Locale, string> = {
  mk: "mk_MK",
  sq: "sq_MK",
  en: "en_US",
};

/** hreflang → URL for every language of one page, for metadata and the sitemap. */
export function languageUrls(path: string, prefix = "") {
  return Object.fromEntries(
    locales.map((language) => [
      languageTag[language],
      `${prefix}/${language}${path}`,
    ]),
  );
}

/**
 * Canonical and hreflang links for a page that exists in every language.
 * `path` excludes the locale: "" for the home page, "/blog" otherwise.
 */
export function localeAlternates(locale: Locale, path: string) {
  return {
    canonical: `/${locale}${path}`,
    languages: languageUrls(path),
  };
}
