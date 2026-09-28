import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getContent } from "@/data/content";
import {
  company,
  currentYear,
  getLegalLinks,
  getPrimaryNav,
  images,
} from "@/data/site";
import type { Locale } from "@/i18n/locales";

import { SectionLink } from "./SectionLink";

/**
 * The approved site's footer, class for class: the office building under a
 * near-black wash, the white logotype, quick links, contact details.
 *
 * Two differences. The privacy and terms links open real pages; there they
 * go to "#", because that site never had them. And the phone and email are
 * tel:/mailto: links rather than plain text.
 */
export function Footer({ locale }: { locale: Locale }) {
  const { text } = getContent(locale);
  const quickLinks = getPrimaryNav(locale);
  const legalLinks = getLegalLinks(locale);
  const phone = company.phones[0];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.building}
          alt=""
          width={800}
          height={550}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-zinc-950/92"></div>
      </div>

      <div className="relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-12">
            <div className="flex flex-col gap-6">
              <Image
                src={images.logoWhite}
                alt="WVP Accounting"
                width={1273}
                height={311}
                className="h-42 w-auto object-contain self-start brightness-0 invert"
              />
              <p className="text-zinc-400 leading-relaxed">
                {text.footer.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">
                {text.footer.links}
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <SectionLink
                      href={link.href}
                      className="text-zinc-400 hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </SectionLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6 text-white">
                {text.footer.contact}
              </h4>
              <ul className="flex flex-col gap-4 text-zinc-400">
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{text.contact.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone aria-hidden className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail aria-hidden className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <p>
              © {currentYear} WVP ACCOUNTING. {text.footer.copyright}
            </p>
            <div className="flex gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
