import { Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Container, SectionHeading } from "@/components/ui";
import type { ContactFormCopy } from "@/data/content/contactForm";
import type { SiteText } from "@/data/content/text";
import { company, companyText, sections } from "@/data/site";
import { ContactForm } from "@/features/contact";
import type { Locale } from "@/i18n/locales";

/** The firm's details beside the form, closing the page. */
export function ContactSection({
  locale,
  text,
  formCopy,
}: {
  locale: Locale;
  text: SiteText;
  formCopy: ContactFormCopy;
}) {
  const { contact } = text;
  const address = companyText[locale].address;

  const details = [
    {
      Icon: MapPin,
      label: contact.locationLabel,
      value: `${address.street}, ${address.postcode} ${address.city}`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        company.mapQuery,
      )}`,
    },
    {
      Icon: Phone,
      label: contact.phoneLabel,
      value: company.phones[0],
      href: `tel:${company.phones[0].replace(/\s/g, "")}`,
    },
    {
      Icon: Mail,
      label: contact.emailLabel,
      value: company.email,
      href: `mailto:${company.email}`,
    },
  ];

  return (
    <section id={sections.contact} className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionHeading
          size="display"
          title={contact.title}
          subtitle={contact.intro}
          className="mx-auto max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <ul className="space-y-4">
              {details.map(({ Icon, label, value, href }) => (
                <li
                  key={label}
                  className="rounded-card border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink">{label}</p>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-1 block break-words text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {value}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-muted-foreground">
              {companyText[locale].workingHours}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-card border border-border bg-card p-6 shadow-sm sm:p-8">
              <ContactForm copy={formCopy} locale={locale} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
