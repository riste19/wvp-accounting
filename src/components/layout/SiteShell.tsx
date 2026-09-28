import type { ReactNode } from "react";

import { getContent } from "@/data/content";
import { getPrimaryNav, sectionHref, sections } from "@/data/site";
import type { Locale } from "@/i18n/locales";

import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteShellProps = {
  locale: Locale;
  children: ReactNode;
};

/**
 * Skip link, header, main landmark and footer, in one language. Shared by the
 * locale layout and the root 404, which has no locale of its own.
 */
export function SiteShell({ locale, children }: SiteShellProps) {
  const { ui, text } = getContent(locale);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#glavna-sodrzina"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        {ui.chrome.skipToContent}
      </a>
      <Header
        nav={getPrimaryNav(locale)}
        labels={{
          contact: text.nav.contact,
          contactHref: sectionHref(locale, sections.contact),
          homeHref: sectionHref(locale, sections.home),
          homeLinkLabel: ui.chrome.homeLinkLabel,
          mainNavLabel: ui.chrome.mainNavLabel,
          openMenu: ui.chrome.openMenu,
          closeMenu: ui.chrome.closeMenu,
        }}
      />
      <main id="glavna-sodrzina">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
