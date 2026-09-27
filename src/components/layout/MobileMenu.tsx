"use client";

import Link from "next/link";

import type { NavItem } from "@/data/site";
import { cn } from "@/lib";

import { LanguageSelector } from "./LanguageSelector";

type MobileMenuProps = {
  /** Passed down from `Header`; see the note there on why it is not imported. */
  nav: NavItem[];
  onNavigate: () => void;
  isActive: (href: string) => boolean;
};

/** Dark panel that drops below the header on small screens. */
export function MobileMenu({ nav, onNavigate, isActive }: MobileMenuProps) {
  return (
    <div id="mobile-menu" className="border-t border-white/10 bg-ink lg:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={cn(
              "block rounded-md px-3 py-2 transition-colors hover:bg-white/10 hover:text-primary",
              isActive(item.href) ? "text-primary" : "text-white",
            )}
          >
            {item.label}
          </Link>
        ))}

        <div className="px-3 py-2">
          <LanguageSelector className="text-white hover:bg-white/10" />
        </div>
      </div>
    </div>
  );
}
