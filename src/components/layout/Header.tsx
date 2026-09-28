"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Direct paths, not the barrel: the barrel re-exports modules that reach the
// content layer, and this is a client component.
import { images } from "@/data/site/images";
import { languages } from "@/data/site/languages";
import type { NavLink } from "@/data/site/navigation";
import { languageTag, localeFromPath, switchLocale } from "@/i18n/locales";
import { cn } from "@/lib";

import { SectionLink } from "./SectionLink";

export type HeaderLabels = {
  contact: string;
  contactHref: string;
  homeHref: string;
  homeLinkLabel: string;
  mainNavLabel: string;
  openMenu: string;
  closeMenu: string;
};

type HeaderProps = {
  nav: NavLink[];
  /** Copy in the page's language. */
  labels: HeaderLabels;
};

const NAV_LINK =
  "text-sm font-medium text-foreground hover:text-foreground transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full";

const CONTACT_BUTTON =
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 h-11 px-5 py-2 ml-2 rounded-full font-semibold";

const MOBILE_CONTACT_BUTTON =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 px-5 py-2 mt-2 w-full h-12";

/**
 * The approved site's header, class for class: transparent over the hero,
 * frosted white with a hairline and a shadow once the page moves 20px.
 *
 * Its language switch changed a variable in the browser; here each language
 * is its own page, so the pills are links. `scroll={false}` keeps the reader
 * where they were, which is what switching felt like there.
 */
export function Header({ nav, labels }: HeaderProps) {
  const pathname = usePathname();
  const current = localeFromPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-border py-3 shadow-sm"
          : "bg-transparent border-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <SectionLink
          href={labels.homeHref}
          aria-label={labels.homeLinkLabel}
          className="flex items-center gap-2 group"
        >
          <Image
            src={images.logo}
            alt="WVP Accounting Logo"
            width={1920}
            height={1080}
            priority
            className="h-32 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </SectionLink>

        <nav
          aria-label={labels.mainNavLabel}
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {nav.map((item) => (
            <SectionLink key={item.href} href={item.href} className={NAV_LINK}>
              {item.label.toUpperCase()}
            </SectionLink>
          ))}

          <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border">
            {languages.map((language) => (
              <Link
                key={language.locale}
                href={switchLocale(pathname, language.locale)}
                hrefLang={languageTag[language.locale]}
                aria-label={language.label}
                aria-current={language.locale === current ? "true" : undefined}
                scroll={false}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-colors",
                  language.locale === current
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                )}
              >
                {language.code}
              </Link>
            ))}
          </div>

          <SectionLink href={labels.contactHref} className={CONTACT_BUTTON}>
            {labels.contact}
          </SectionLink>
        </nav>

        <button
          type="button"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden p-2 text-foreground"
        >
          {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fm-menu md:hidden bg-background border-b border-border overflow-hidden"
        >
          <div className="min-h-0">
            <nav className="flex flex-col px-4 py-6 gap-4">
              {nav.map((item) => (
                <SectionLink
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
                >
                  {item.label}
                </SectionLink>
              ))}

              <div className="flex items-center justify-center gap-2 py-2">
                {languages.map((language) => (
                  <Link
                    key={language.locale}
                    href={switchLocale(pathname, language.locale)}
                    hrefLang={languageTag[language.locale]}
                    aria-label={language.label}
                    aria-current={language.locale === current ? "true" : undefined}
                    scroll={false}
                    onClick={close}
                    className={cn(
                      "px-4 py-2 text-sm font-semibold rounded-full transition-colors border",
                      language.locale === current
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-muted border-border text-muted-foreground",
                    )}
                  >
                    {language.code}
                  </Link>
                ))}
              </div>

              <SectionLink
                href={labels.contactHref}
                onClick={close}
                className={MOBILE_CONTACT_BUTTON}
              >
                {labels.contact}
              </SectionLink>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
