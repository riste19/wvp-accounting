import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui";
import { formatArticleDate, getContent, type LegalTexts } from "@/data/content";
import type { Locale } from "@/i18n/locales";

type LegalPageProps = {
  locale: Locale;
  texts: LegalTexts;
};

/** Shared shell for the privacy policy and terms of use pages. */
export function LegalPage({ locale, texts }: LegalPageProps) {
  const document = texts.translations[locale];
  const { legal } = getContent(locale).ui;

  return (
    <section className="bg-background pb-16 pt-48 sm:pb-20 sm:pt-52">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {document.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {legal.updated} {formatArticleDate(texts.updated, locale)}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground">
            {document.intro}
          </p>

          <div className="article-body mt-10">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
