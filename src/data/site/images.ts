/**
 * Single source of truth for every image path used by the site.
 *
 * These are the approved site's own files, unconverted and uncropped. The
 * header logo in particular is a 1920×1080 canvas with the lockup in the
 * middle, and the design sizes it by that canvas (`h-32`), so trimming or
 * re-encoding it would change how big it looks.
 *
 * Blog posts are not listed here: each post in `posts.json` carries its own
 * image path, and the admin panel uploads new ones to /images/blog/uploads.
 */
export const images = {
  /** Red WVP + АКАУНТИНГ, on a transparent 1920×1080 canvas. */
  logo: "/images/brand/wvp-ak.png",
  /** The lockup for dark backgrounds. Rendered through `brightness-0 invert`. */
  logoWhite: "/images/brand/wvp-logo-white.png",
  /** The office building: hero backdrop and footer. */
  building: "/images/about/building.png",
  /** Behind the logo band that closes the services section. */
  teamOffice: "/images/hero/team-office.jpg",
  /** Behind the logo band that closes the "why us" section. */
  meetingTable: "/images/services/meeting-table.jpg",
  openGraph: "/images/og/og-image.jpg",
} as const;

/** Intrinsic sizes, so `next/image` can reserve space. */
export const imageSizes = {
  article: { width: 1040, height: 416 },
} as const;
