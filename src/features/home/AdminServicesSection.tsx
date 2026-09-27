import { ClipboardList, UserCog } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion";
import { Container, SectionHeading } from "@/components/ui";
import type { SiteText } from "@/data/content/text";
import { images, imageSizes } from "@/data/site";

/**
 * The paperwork the firm files on a client's behalf, split the way the
 * approved site splits it: their people, and the state institutions.
 */
export function AdminServicesSection({ text }: { text: SiteText }) {
  const { admin } = text;

  const groups = [
    { label: admin.hrLabel, items: admin.hr, Icon: UserCog },
    { label: admin.stateLabel, items: admin.state, Icon: ClipboardList },
  ];

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          title={admin.title}
          subtitle={admin.subtitle}
          className="mx-auto max-w-3xl"
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1">
            {groups.map(({ label, items, Icon }) => (
              <div
                key={label}
                className="rounded-card border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{label}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <Image
              src={images.services}
              alt=""
              aria-hidden
              width={imageSizes.services.width}
              height={imageSizes.services.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full rounded-card object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
