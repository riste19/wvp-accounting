/**
 * Site-wide wiring: who we are, how the site is linked together, where the
 * images live. Used by nearly every route.
 *
 * Modules inside `src/data` must import each other by direct path rather than
 * through this barrel — going via the barrel would make the two data folders
 * circular.
 */
export { company, currentYear } from "./company";
export { images, imageSizes } from "./images";
export { languages, type Language } from "./languages";
export {
  getLegalLinks,
  getPrimaryNav,
  legalRoutes,
  type NavLink,
} from "./navigation";
export { sectionHref, sections, type SectionId } from "./sections";
