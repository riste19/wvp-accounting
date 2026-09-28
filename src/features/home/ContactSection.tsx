import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { FloatingChars, Reveal } from "@/components/motion";
import type { SiteText } from "@/data/content";
import { company, sections } from "@/data/site";
import { ContactForm } from "@/features/contact";
import type { Locale } from "@/i18n/locales";

type ContactSectionProps = {
  locale: Locale;
  text: SiteText;
};

function Detail({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1 text-foreground">{label}</h4>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

/**
 * Details on the left, the form on the right, each sliding in from its own
 * side on framer's default spring.
 */
export function ContactSection({ locale, text }: ContactSectionProps) {
  const { contact } = text;
  const phone = company.phones[0];

  return (
    <section
      id={sections.contact}
      className="py-24 relative bg-background border-t border-border overflow-hidden"
    >
      <FloatingChars set="contact" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Reveal x={-30} y={0} spring className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
              {contact.title}
            </h2>
            <p className="text-xl text-primary font-medium mb-8">{contact.cta}</p>
            <div className="flex flex-col gap-8 mt-4">
              <Detail
                icon={<MapPin aria-hidden className="w-6 h-6 text-primary" />}
                label={contact.locationLabel}
              >
                {contact.location}
              </Detail>
              <Detail
                icon={<Phone aria-hidden className="w-6 h-6 text-primary" />}
                label={contact.phoneLabel}
              >
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </Detail>
              <Detail
                icon={<Mail aria-hidden className="w-6 h-6 text-primary" />}
                label={contact.emailLabel}
              >
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </Detail>
            </div>
          </Reveal>

          <Reveal
            x={30}
            y={0}
            spring
            className="bg-card border border-border rounded-3xl p-8 shadow-xl relative"
          >
            <ContactForm copy={contact.form} locale={locale} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
