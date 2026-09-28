/**
 * Company details shown in the contact section and footer, and in the
 * structured data.
 *
 * Taken from the site the boss approved. One correction: that site's footer
 * shows info@wvpaccouting.mk (missing the "n"), which bounces, while its
 * contact section has the right address. Only the correct spelling is used.
 */
export const company = {
  name: "WVP Accounting",
  nameMk: "ВФП АКАУНТИНГ",
  legalName: "ВФП АКАУНТИНГ ДООЕЛ Скопје",
  description:
    "ВФП АКАУНТИНГ нуди комплетни финансиски и сметководствени решенија прилагодени на вашите деловни потреби: сметководство, плати, ДДВ, даночен консалтинг, ревизија и пристап до финансии.",
  founded: 2023,
  phones: ["+389 76 337 800"],
  email: "info@wvpaccounting.mk",
  address: {
    street: "бул. Кочо Рацин 3/2, кат 1",
    postcode: "1000",
    city: "Скопје",
    country: "Република Северна Македонија",
  },
  /** Used for canonical URLs and Open Graph. */
  siteUrl: "https://wvpaccounting.mk",
} as const;

/** One place for the footer's copyright year, so it is not computed per render. */
export const currentYear = new Date().getFullYear();
