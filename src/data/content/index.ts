/**
 * All visible copy. Changing text on the site means editing a file here —
 * never a component.
 *
 * Two kinds of copy live side by side:
 *
 * - `text.ts` is the home page itself, in all three languages. It came from
 *   the site the boss approved and is kept word for word.
 * - `ui.ts` is the scaffolding around it: page metadata, button labels, the
 *   accessible names of controls.
 *
 * The blog posts and the legal documents are Macedonian only, in every
 * language, exactly as the consulting site does it.
 *
 * Modules inside `src/data` must import each other by direct path rather than
 * through this barrel — going via the barrel would make the two data folders
 * circular.
 */
import type { Locale } from "@/i18n/locales";

import { contactForm } from "./contactForm";
import { packages } from "./packages";
import { pillars } from "./pillars";
import { services } from "./services";
import { text } from "./text";
import { ui } from "./ui";

/** Every translated string on the site, in one language. Server components only. */
export const getContent = (locale: Locale) => ({
  ui: ui[locale],
  text: text[locale],
  services: services[locale],
  pillars: pillars[locale],
  packages: packages[locale],
  contactForm: contactForm[locale],
});

export { categoryTone } from "./categories";
export { contactForm, type ContactFormCopy } from "./contactForm";
export {
  articles,
  articlesFor,
  canonicalLocaleOf,
  categoriesFor,
  formatArticleDate,
  getArticle,
  getArticleIn,
  isPublishedIn,
  languageOf,
  latestArticlesFor,
  sortedArticles,
  type Article,
  type ArticleBlock,
} from "./articles";
export {
  privacyPolicy,
  termsOfUse,
  type LegalDocument,
  type LegalSection,
} from "./legal";
export { packages, type Package } from "./packages";
export { pillars, type Pillar } from "./pillars";
export { services, type Service } from "./services";
export { text, type SiteText } from "./text";
export { ui } from "./ui";
