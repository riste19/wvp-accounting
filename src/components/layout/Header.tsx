"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Container } from "@/components/ui";
import type { NavItem } from "@/data/site";
import { stripLocale } from "@/i18n/locales";
import { cn } from "@/lib";

import { LanguageSelector } from "./LanguageSelector";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const SCROLL_THRESHOLD = 50;

export type HeaderLabels = {
  homeHref: string;
  homeLinkLabel: string;
  mainNavLabel: string;
  openMenu: string;
  closeMenu: string;
};

type HeaderProps = {
  nav: NavItem[];
  /** Copy in the page's language. */
  labels: HeaderLabels;
};

/**
 * The navigation and copy are handed down from the server rather than imported
 * here. This is a client component, and anything it imports from `@/data`
 * crosses the boundary with it — which is how a header ends up shipping the
 * whole content layer as JavaScript. As props it costs a dozen strings.
 *
 * Most items are sections of the home page, so "active" only means anything
 * on the two real routes: the home page and the blog.
 */
export function Header({ nav, labels }: HeaderProps) {
  const pathname = usePathname();
  const route = stripLocale(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  /**
   * Only the home page opens with a full-bleed photograph, so only there can
   * the header be transparent. Anywhere else it would be white type on a
   * near-white page.
   */
  const solid = scrolled || route !== "/";

  const isActive = useCallback(
    (href: string) => {
      // An anchor points at a section of the page you are already on.
      if (href.includes("#")) return false;
      const target = stripLocale(href);
      return target === "/" ? route === "/" : route.startsWith(target);
    },
    [route],
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        solid
          ? "bg-white text-foreground shadow-md"
          : "bg-transparent text-white backdrop-blur-sm",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={labels.homeHref} aria-label={labels.homeLinkLabel}>
            <Logo tone={solid ? "color" : "white"} />
          </Link>

          <nav
            aria-label={labels.mainNavLabel}
            className="hidden items-center space-x-8 lg:flex"
          >
            {nav.map((item, index) => {
              const active = isActive(item.href);
              const nextHasSeparator = nav[index + 1]?.separatorBefore;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    active
                      ? "font-bold text-primary"
                      : solid
                        ? "text-foreground"
                        : "text-white/90",
                    nextHasSeparator &&
                      cn(
                        "border-r pr-8",
                        solid ? "border-border" : "border-white/50",
                      ),
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <LanguageSelector />
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              aria-label={menuOpen ? labels.closeMenu : labels.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-black/10"
            >
              {menuOpen ? (
                <X aria-hidden className="h-6 w-6" />
              ) : (
                <Menu aria-hidden className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {menuOpen ? (
        <MobileMenu
          nav={nav}
          isActive={isActive}
          onNavigate={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}
