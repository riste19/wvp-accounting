/**
 * The home page is one page with named sections, the way the approved site is
 * built. These ids are the anchor targets, and the header, the footer and the
 * in-page buttons all link through here so a rename cannot leave a dead link.
 *
 * `packages` is the exception: the approved site's header and footer both
 * link to #packages, and the page has no such section. The link is kept, and
 * does nothing, exactly as there — see SectionLink.
 */
export const sections = {
  home: "home",
  services: "services",
  whyUs: "why-us",
  packages: "packages",
  contact: "contact",
} as const;

export type SectionId = (typeof sections)[keyof typeof sections];

/** "/mk#services" — an anchor on that language's home page. */
export const sectionHref = (locale: string, id: SectionId) =>
  `/${locale}#${id}`;
