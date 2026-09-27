import Image from "next/image";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import type { SiteText } from "@/data/content/text";
import { images, imageSizes, sections } from "@/data/site";

/** Who the firm is, beside the photograph of the building. */
export function AboutSection({ text }: { text: SiteText }) {
  return (
    <section id={sections.about} className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {text.about.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {text.about.text}
            </p>
            <p className="mt-6 border-l-4 border-primary pl-5 text-lg font-bold uppercase tracking-wide text-ink">
              {text.footer.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Image
              src={images.building}
              alt=""
              aria-hidden
              width={imageSizes.building.width}
              height={imageSizes.building.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full rounded-card object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
