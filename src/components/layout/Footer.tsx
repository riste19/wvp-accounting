import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui";
import { getContent } from "@/data/content";
import {
  company,
  companyText,
  currentYear,
  getFooterColumns,
  getLegalLinks,
} from "@/data/site";
import type { Locale } from "@/i18n/locales";

import { Logo } from "./Logo";

/**
 * The navy the wordmark is drawn in carries the footer, so the white logotype
 * sits on the colour it was made for rather than on a darkened photograph.
 */
export function Footer({ locale }: { locale: Locale }) {
  const { ui, text } = getContent(locale);
  const address = companyText[locale].address;
  const columns = getFooterColumns(locale);
  const legalLinks = getLegalLinks(locale);

  return (
    <footer className="bg-ink py-16 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="footer" tone="white" alt={company.name} />
            <p className="mt-6 max-w-md font-semibold tracking-wide text-white/80">
              {text.footer.tagline}
            </p>
            <a
              href={company.sister.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {company.sister.name} — {ui.chrome.sisterSite}
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-4 text-lg font-semibold">{column.title}</h2>
              <ul className="space-y-2 text-white/70">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-4 text-lg font-semibold">{text.footer.contact}</h2>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <MapPin aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  {address.street}
                  <br />
                  {address.postcode} {address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {company.phones[0]}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/20 pt-8 text-sm text-white/60 md:flex-row md:justify-between">
          <p>
            © {currentYear} {company.name}. {ui.chrome.rightsReserved}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
