/**
 * Single source of truth for every image path used by the site.
 *
 * The photographs and logos come from the firm's approved site, re-encoded to
 * WebP at the size each slot displays. To replace one, overwrite the file
 * keeping its proportions, or point the entry at a new one.
 *
 * Blog posts are not listed here: each post in `posts.json` carries its own
 * image path, and the admin panel uploads new ones to /images/blog/uploads.
 */
export const images = {
  logo: "/images/brand/logo.webp",
  logoWhite: "/images/brand/logo-white.webp",
  hero: "/images/hero/office.webp",
  services: "/images/services/meeting.webp",
  building: "/images/about/building.webp",
  openGraph: "/images/og/og-image.jpg",
} as const;

/** Intrinsic sizes, so `next/image` can reserve space. */
export const imageSizes = {
  logo: { width: 1241, height: 263 },
  logoWhite: { width: 1241, height: 264 },
  hero: { width: 1184, height: 864 },
  services: { width: 1184, height: 864 },
  building: { width: 800, height: 550 },
  article: { width: 1040, height: 416 },
} as const;
