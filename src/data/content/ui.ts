import type { Locale } from "@/i18n/locales";

/**
 * Interface copy: page metadata, form labels, and the accessible names of
 * controls — everything that is not the page's own content.
 *
 * The words that appear on the home page live in `text.ts` instead, because
 * they came from the site the boss approved and should stay recognisably his.
 * This file is the scaffolding around them.
 */
const mk = {
  site: {
    title: "WVP Accounting | Сметководствени и финансиски услуги",
    description:
      "ВФП АКАУНТИНГ нуди комплетни сметководствени и финансиски решенија: финансиско сметководство, плати, ДДВ, даночен консалтинг, ревизија и пристап до финансии.",
    shareDescription:
      "За клиентот секогаш го бираме најдоброто. Комплетни сметководствени и финансиски решенија за вашиот бизнис.",
    shareImageAlt: "ВФП АКАУНТИНГ",
    keywords: [
      "сметководство",
      "сметководствени услуги",
      "плати",
      "ДДВ",
      "даночен консалтинг",
      "ревизија",
      "завршна сметка",
      "Скопје",
    ],
  },

  chrome: {
    skipToContent: "Прескокни до содржината",
    homeLinkLabel: "ВФП АКАУНТИНГ — почетна страница",
    mainNavLabel: "Главна навигација",
    openMenu: "Отвори го менито",
    closeMenu: "Затвори го менито",
    rightsReserved: "Сите права се задржани.",
    sisterSite: "Консалтинг услуги",
  },

  blog: {
    metaTitle: "Совети",
    metaDescription:
      "Сметководствени и даночни совети, рокови кон УЈП и АВРМ, и новости од законската регулатива.",
    heading: "Совети",
    subtitle: "Сметководствени и даночни совети, рокови и новости од регулативата",
    sectionHeading: "Од нашата пракса",
    sectionSubtitle: "Совети, рокови и новости што се однесуваат на вашиот бизнис",
    allPosts: "Сите објави",
    readMore: "Прочитај повеќе",
    backToPosts: "Назад кон објавите",
    related: "Слични објави",
    notFound: "Објавата не е пронајдена",
    filterAll: "Сите",
    filterLabel: "Филтрирај по категорија",
    emptyCategory: "Нема објави во оваа категорија.",
    emptyList: "Сè уште нема објави.",
    /** Shown above posts that are not written in this language. Empty: none needed. */
    languageNote: "",
  },

  legal: {
    /** Shown above legal pages that are not written in this language. Empty: none needed. */
    languageNote: "",
  },

  map: {
    openMapLabel: "Отвори ја локацијата во {city} на Google Карти",
    mapTitle: "Мапа со локацијата на нашата канцеларија во {city}",
  },

  notFound: {
    title: "Страницата не е пронајдена",
    description: "Страницата што ја барате не постои или е преместена.",
    action: "Назад на почетна",
  },
};

type Ui = typeof mk;

const sq: Ui = {
  site: {
    title: "WVP Accounting | Shërbime kontabiliteti dhe financiare",
    description:
      "WVP Accounting ofron zgjidhje të plota kontabiliteti dhe financiare: kontabilitet financiar, paga, TVSH, këshillim tatimor, auditim dhe qasje në financa.",
    shareDescription:
      "Për klientin gjithmonë zgjedhim më të mirën. Zgjidhje të plota kontabiliteti dhe financiare për biznesin tuaj.",
    shareImageAlt: "WVP Accounting",
    keywords: [
      "kontabilitet",
      "shërbime kontabiliteti",
      "paga",
      "TVSH",
      "këshillim tatimor",
      "auditim",
      "bilanc vjetor",
      "Shkup",
    ],
  },

  chrome: {
    skipToContent: "Kalo te përmbajtja",
    homeLinkLabel: "WVP Accounting — faqja kryesore",
    mainNavLabel: "Navigimi kryesor",
    openMenu: "Hap menynë",
    closeMenu: "Mbyll menynë",
    rightsReserved: "Të gjitha të drejtat e rezervuara.",
    sisterSite: "Shërbime konsulence",
  },

  blog: {
    metaTitle: "Këshilla",
    metaDescription:
      "Këshilla kontabiliteti dhe tatimore, afate ndaj UJP-së dhe AVRM-së, dhe risi nga rregullorja ligjore.",
    heading: "Këshilla",
    subtitle: "Këshilla kontabiliteti dhe tatimore, afate dhe risi nga rregullorja",
    sectionHeading: "Nga praktika jonë",
    sectionSubtitle: "Këshilla, afate dhe risi që kanë të bëjnë me biznesin tuaj",
    allPosts: "Të gjitha postimet",
    readMore: "Lexo më shumë",
    backToPosts: "Kthehu te postimet",
    related: "Postime të ngjashme",
    notFound: "Postimi nuk u gjet",
    filterAll: "Të gjitha",
    filterLabel: "Filtro sipas kategorisë",
    emptyCategory: "Nuk ka postime në këtë kategori.",
    emptyList: "Ende nuk ka postime.",
    languageNote: "",
  },

  legal: {
    languageNote: "",
  },

  map: {
    openMapLabel: "Hap vendndodhjen në {city} në Google Maps",
    mapTitle: "Harta me vendndodhjen e zyrës sonë në {city}",
  },

  notFound: {
    title: "Faqja nuk u gjet",
    description: "Faqja që kërkoni nuk ekziston ose është zhvendosur.",
    action: "Kthehu te faqja kryesore",
  },
};

const en: Ui = {
  site: {
    title: "WVP Accounting | Accounting and financial services",
    description:
      "WVP Accounting provides complete accounting and financial solutions: financial accounting, payroll, VAT, tax consulting, audit and access to financing.",
    shareDescription:
      "For the client we always choose the best. Complete accounting and financial solutions for your business.",
    shareImageAlt: "WVP Accounting",
    keywords: [
      "accounting",
      "accounting services",
      "payroll",
      "VAT",
      "tax consulting",
      "audit",
      "annual financial report",
      "Skopje",
    ],
  },

  chrome: {
    skipToContent: "Skip to content",
    homeLinkLabel: "WVP Accounting — home page",
    mainNavLabel: "Main navigation",
    openMenu: "Open the menu",
    closeMenu: "Close the menu",
    rightsReserved: "All rights reserved.",
    sisterSite: "Consulting services",
  },

  blog: {
    metaTitle: "Advice",
    metaDescription:
      "Accounting and tax advice, deadlines with the PRO and the employment agency, and news from the regulations.",
    heading: "Advice",
    subtitle: "Accounting and tax advice, deadlines and news from the regulations",
    sectionHeading: "From our practice",
    sectionSubtitle: "Advice, deadlines and news that concern your business",
    allPosts: "All posts",
    readMore: "Read more",
    backToPosts: "Back to posts",
    related: "Related posts",
    notFound: "Post not found",
    filterAll: "All",
    filterLabel: "Filter by category",
    emptyCategory: "There are no posts in this category.",
    emptyList: "No posts yet.",
    languageNote: "",
  },

  legal: {
    languageNote: "",
  },

  map: {
    openMapLabel: "Open the {city} location in Google Maps",
    mapTitle: "Map showing our office location in {city}",
  },

  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has moved.",
    action: "Back to the home page",
  },
};

export const ui: Record<Locale, Ui> = { mk, sq, en };
