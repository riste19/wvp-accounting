"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  /** A section of the home page: `/mk#services`. */
  href: string;
  /**
   * How far above the section to stop, in px. The approved site stops 80px
   * short everywhere except the hero's contact button, which uses 0.
   */
  offset?: number;
};

/**
 * A link to a section of the home page that behaves the way the approved
 * site's buttons do: on the home page it glides to the section, stopping
 * `offset` px above it, without touching the address bar. Anywhere else —
 * a blog post, a legal page — it is an ordinary link to /mk#section, and
 * the `scroll-padding-top` in globals.css lands it in the same place.
 *
 * A link to a section this page does not have does nothing, as it does
 * there: the header's "Packages" points at a section that does not exist.
 */
export function SectionLink({
  href,
  offset = 80,
  onClick,
  ...rest
}: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const [path, id] = href.split("#");
    if (!id || window.location.pathname.replace(/\/$/, "") !== path) return;

    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
