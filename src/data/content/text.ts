import type { Locale } from "@/i18n/locales";

/**
 * Every word on the home page, header and footer, in the three languages.
 *
 * Generated from the live bundle of the approved site (wvpaccounting.mk) and
 * kept word for word — apart from the corrections listed in the README, and
 * the form's error messages, which the live site shows in English on every
 * language.
 */
const mk = {
  nav: {
    home: "Почетна",
    services: "Услуги",
    about: "За нас",
    packages: "Пакети",
    contact: "Контакт",
  },
  hero: {
    badge: "Професионални сметководствени услуги",
    title: ["ЗА КЛИЕНТОТ", "СЕКОГАШ ГО БИРАМЕ", "НАЈДОБРОТО"],
    description: "ВФП АКАУНТИНГ нуди комплетни финансиски и сметководствени решенија прилагодени на вашите деловни потреби. Дозволете ни да се погрижиме за бројките, додека вие го развивате вашиот бизнис.",
    ctaContact: "Контактирајте Нè",
    ctaServices: "Нашите Услуги",
    scrollDown: "Скролувај надолу",
  },
  stats: [
    { value: "10+", label: "Години искуство" },
    { value: "200+", label: "Задоволни клиенти" },
    { value: "12+", label: "Видови услуги" },
    { value: "24/7", label: "Поддршка" },
  ],
  services: {
    badge: "Нашите услуги",
    title: "Комплетни сметководствени и финансиски решенија",
    subtitle: "Нудиме широк спектар на услуги дизајнирани да го поддржат растот и стабилноста на вашиот бизнис.",
  },
  whyUs: {
    badge: "Зошто да не изберете",
    title: "Вашиот Доверлив Финансиски Партнер",
    subtitle: "Ние излегуваме од спрегата на класично сметководствено работење и ви нудиме услуги надвор од доменот на стандардните услуги. Секогаш го бараме најдоброто за вас.",
  },
  contact: {
    title: "Контактирајте нè",
    cta: "За сите дополнителни прашања или консултации нашиот тим Ви стои на располагање.",
    locationLabel: "Локација",
    location: "ул. Бул. Кочо Рацин бр. 3/2 кат 1, 1000 Скопје",
    phoneLabel: "Телефон",
    emailLabel: "Емаил",
    form: {
      name: "Име и Презиме",
      namePlaceholder: "Внесете го вашето име",
      email: "Емаил",
      emailPlaceholder: "вашиот@емаил.ком",
      phone: "Телефон",
      phonePlaceholder: "07X XXX XXX",
      message: "Порака",
      messagePlaceholder: "Како можеме да ви помогнеме?",
      submit: "Испрати Барање",
      submitting: "Се испраќа...",
      successTitle: "Пораката е испратена!",
      successDescription: "Ќе ве контактираме во најкраток можен рок.",
      failedTitle: "Пораката не е испратена",
      failedDescription: "Обидете се повторно или пишете ни на info@wvpaccounting.mk.",
      close: "Затвори",
      errors: {
        name: "Името мора да содржи најмалку 2 знаци.",
        email: "Невалидна емаил адреса.",
        phone: "Невалиден телефонски број.",
        message: "Пораката мора да содржи најмалку 10 знаци.",
      },
    },
  },
  footer: {
    description: "ЗА КЛИЕНТОТ СЕКОГАШ ГО БИРАМЕ НАЈДОБРОТО.",
    links: "Брзи Линкови",
    contact: "Контакт Информации",
    copyright: "Сите права се задржани.",
    privacy: "Политика за приватност",
    terms: "Услови на користење",
  },
};

export type SiteText = typeof mk;

const sq: SiteText = {
  nav: {
    home: "Kryefaqja",
    services: "Shërbime",
    about: "Rreth nesh",
    packages: "Paketa",
    contact: "Kontakt",
  },
  hero: {
    badge: "Shërbime Profesionale Kontabiliteti",
    title: ["PËR KLIENTIN", "NE GJITHMONË ZGJEDHIM", "MË TË MIRËN"],
    description: "WVP ACCOUNTING ofron zgjidhje të plota financiare dhe të kontabilitetit të përshtatura për nevojat tuaja të biznesit. Lini numrat tek ne, ndërkohë ju rritni biznesin tuaj.",
    ctaContact: "Na Kontaktoni",
    ctaServices: "Shërbimet Tona",
    scrollDown: "Lëviz poshtë",
  },
  stats: [
    { value: "10+", label: "Vite Eksperiencë" },
    { value: "200+", label: "Klientë të Kënaqur" },
    { value: "12+", label: "Lloje Shërbimesh" },
    { value: "24/7", label: "Mbështetje" },
  ],
  services: {
    badge: "Shërbimet Tona",
    title: "Zgjidhje të Plota për Kontabilitet dhe Financa",
    subtitle: "Ofrojmë një gamë të gjerë shërbimesh të dizajnuara për të mbështetur rritjen dhe stabilitetin e biznesit tuaj.",
  },
  whyUs: {
    badge: "Pse të Na Zgjidhni",
    title: "Partneri Juaj i Besueshëm Financiar",
    subtitle: "Ne shkojmë përtej kufijve të kontabilitetit klasik dhe ofrojmë shërbime jashtë fushës së shërbimeve standarde. Ne gjithmonë kërkojmë më të mirën për ju.",
  },
  contact: {
    title: "Na Kontaktoni",
    cta: "Për të gjitha pyetjet dhe konsultimet shtesë, ekipi ynë është në dispozicionin tuaj.",
    locationLabel: "Vendndodhja",
    location: "Bul. Koco Racin no. 3/2 level 1, 1000 Skopje",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    form: {
      name: "Emër dhe Mbiemër",
      namePlaceholder: "Shkruani emrin tuaj",
      email: "Email",
      emailPlaceholder: "emaili@juaj.com",
      phone: "Telefon",
      phonePlaceholder: "07X XXX XXX",
      message: "Mesazh",
      messagePlaceholder: "Si mund t'ju ndihmojmë?",
      submit: "Dërgo Kërkesën",
      submitting: "Duke dërguar...",
      successTitle: "Mesazhi u Dërgua!",
      successDescription: "Do t'ju kontaktojmë sa më shpejt të jetë e mundur.",
      failedTitle: "Mesazhi nuk u dërgua",
      failedDescription: "Provoni përsëri ose na shkruani në info@wvpaccounting.mk.",
      close: "Mbyll",
      errors: {
        name: "Emri duhet të ketë të paktën 2 karaktere.",
        email: "Adresë emaili e pavlefshme.",
        phone: "Numër telefoni i pavlefshëm.",
        message: "Mesazhi duhet të ketë të paktën 10 karaktere.",
      },
    },
  },
  footer: {
    description: "PËR KLIENTIN, NE GJITHMONË ZGJEDHIM MË TË MIRËN.",
    links: "Lidhje të Shpejta",
    contact: "Informacione Kontakti",
    copyright: "Të gjitha të drejtat e rezervuara.",
    privacy: "Politika e Privatësisë",
    terms: "Kushtet e Përdorimit",
  },
};

const en: SiteText = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    packages: "Packages",
    contact: "Contact",
  },
  hero: {
    badge: "Professional Accounting Services",
    title: ["FOR THE CLIENT", "WE ALWAYS CHOOSE", "THE BEST"],
    description: "WVP ACCOUNTING offers complete financial and accounting solutions tailored to your business needs. Let us handle the numbers while you grow your business.",
    ctaContact: "Contact Us",
    ctaServices: "Our Services",
    scrollDown: "Scroll down",
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Happy Clients" },
    { value: "12+", label: "Service Types" },
    { value: "24/7", label: "Support" },
  ],
  services: {
    badge: "Our Services",
    title: "Complete Accounting & Financial Solutions",
    subtitle: "We offer a wide range of services designed to support the growth and stability of your business.",
  },
  whyUs: {
    badge: "Why Choose Us",
    title: "Your Trusted Financial Partner",
    subtitle: "We go beyond the boundaries of classical accounting and offer services outside the domain of standard services. We always seek the best for you.",
  },
  contact: {
    title: "Contact Us",
    cta: "For all additional questions or consultations, our team is at your disposal.",
    locationLabel: "Location",
    location: "Bul. Koco Racin no. 3/2 level 1, 1000 Skopje",
    phoneLabel: "Phone",
    emailLabel: "Email",
    form: {
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      phone: "Phone",
      phonePlaceholder: "07X XXX XXX",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      submit: "Send Request",
      submitting: "Sending...",
      successTitle: "Message Sent!",
      successDescription: "We will contact you as soon as possible.",
      failedTitle: "Message not sent",
      failedDescription: "Please try again, or write to us at info@wvpaccounting.mk.",
      close: "Close",
      errors: {
        name: "Name must be at least 2 characters",
        email: "Invalid email address",
        phone: "Invalid phone number",
        message: "Message must be at least 10 characters",
      },
    },
  },
  footer: {
    description: "FOR THE CLIENT, WE ALWAYS CHOOSE THE BEST.",
    links: "Quick Links",
    contact: "Contact Info",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
};

export const text: Record<Locale, SiteText> = { mk, sq, en };
