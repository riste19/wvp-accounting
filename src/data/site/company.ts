import type { Locale } from "@/i18n/locales";

/**
 * Company details shown across the header, footer and contact section.
 *
 * Taken from the site the boss approved. One correction: that site shipped
 * both info@wvpaccounting.mk and info@wvpaccouting.mk (missing the "n"), and
 * mail to the second one bounces. Only the correct spelling is used here.
 */
export const company = {
  name: "WVP Accounting",
  nameMk: "ВФП АКАУНТИНГ",
  legalName: "ВФП АКАУНТИНГ ДООЕЛ Скопје",
  tagline: "ЗА КЛИЕНТОТ СЕКОГАШ ГО БИРАМЕ НАЈДОБРОТО.",
  description:
    "ВФП АКАУНТИНГ нуди комплетни финансиски и сметководствени решенија прилагодени на вашите деловни потреби: сметководство, плати, ДДВ, даночен консалтинг, ревизија и пристап до финансии.",
  founded: 2023,
  group: "WVP Group",
  /** The sister firm, linked from the footer. */
  sister: {
    name: "WVP Plus Consulting",
    url: "https://wvpconsulting.mk",
  },
  phones: ["+389 76 337 800"],
  email: "info@wvpaccounting.mk",
  address: {
    street: "бул. Кочо Рацин 3/2, кат 1",
    postcode: "1000",
    city: "Скопје",
    country: "Република Северна Македонија",
  },
  workingHours: "Пон–Пет 08:00–17:00",
  /** What a map link pins. Coordinates would be more exact; the address resolves. */
  mapQuery: "Булевар Кочо Рацин 3, Скопје",
  /**
   * The firm has no social profiles of its own yet; the structured data points
   * at the group page instead. Replace this the moment it gets one.
   */
  social: {
    linkedin:
      "https://www.linkedin.com/company/wvp-plus-konsalting/?originalSubdomain=mk",
  },
  /** Used for canonical URLs and Open Graph. */
  siteUrl: "https://wvpaccounting.mk",
} as const;

export type CompanyText = {
  legalName: string;
  address: { street: string; postcode: string; city: string; country: string };
  workingHours: string;
};

/**
 * The parts of `company` that are written in a language. `company` itself
 * stays Macedonian: it also feeds the structured data on the home page.
 */
export const companyText: Record<Locale, CompanyText> = {
  mk: {
    legalName: company.legalName,
    address: company.address,
    workingHours: company.workingHours,
  },
  sq: {
    legalName: "WVP Accounting SHPK Shkup",
    address: {
      street: "Bul. Koço Racin 3/2, kati 1",
      postcode: "1000",
      city: "Shkup",
      country: "Republika e Maqedonisë së Veriut",
    },
    workingHours: "Hën–Pre 08:00–17:00",
  },
  en: {
    legalName: "WVP Accounting LLC Skopje",
    address: {
      street: "Bul. Koco Racin 3/2, floor 1",
      postcode: "1000",
      city: "Skopje",
      country: "Republic of North Macedonia",
    },
    workingHours: "Mon–Fri 08:00–17:00",
  },
};

/** One place for the footer's copyright year, so it is not computed per render. */
export const currentYear = new Date().getFullYear();
