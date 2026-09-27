import type { Locale } from "@/i18n/locales";

/**
 * The contact form's labels, placeholders and errors.
 *
 * The approved site asks four questions — name, email, phone, message. This
 * form asks two more, company and subject, because a lead that arrives
 * already sorted by topic is worth far more than the half-second it costs to
 * pick one. Phone and company are optional; the rest are not.
 */
const mk = {
  subjects: [
    "Сметководствени услуги",
    "Плати и човечки ресурси",
    "ДДВ и даноци",
    "Завршна сметка",
    "Ревизија и вештачење",
    "Пристап до финансии",
    "Друго",
  ],
  labels: {
    firstName: "Име",
    lastName: "Презиме",
    company: "Компанија",
    email: "Е-пошта",
    phone: "Телефон",
    subject: "Тема",
    message: "Порака / прашање",
  },
  placeholders: {
    firstName: "Вашето име",
    lastName: "Вашето презиме",
    company: "Име на вашата компанија",
    email: "ime@kompanija.mk",
    phone: "+389 7X XXX XXX",
    subject: "Изберете тема",
    message: "Како можеме да ви помогнеме?",
  },
  errors: {
    firstName: "Внесете го вашето име.",
    lastName: "Внесете го вашето презиме.",
    emailMissing: "Внесете ја вашата е-пошта.",
    emailInvalid: "Внесете валидна адреса на е-пошта.",
    phone: "Внесете валиден телефонски број.",
    subject: "Изберете тема на пораката.",
    message: "Пораката треба да содржи барем 10 знаци.",
  },
  honeypotLabel: "Веб-страница",
  challengeLoading:
    "Потврдата дека не сте робот сè уште се вчитува. Обидете се повторно за момент.",
  send: "Испрати барање",
  sending: "Се испраќа…",
  sent: "Пораката е испратена. Ќе ве контактираме во најкраток можен рок.",
  failed:
    "Пораката не беше испратена. Обидете се повторно или пишете ни на е-пошта.",
  requiredBefore: "Полињата означени со",
  requiredStar: "ѕвездичка",
  requiredAfter: "се задолжителни.",
};

export type ContactFormCopy = typeof mk;

const sq: ContactFormCopy = {
  subjects: [
    "Shërbime kontabiliteti",
    "Paga dhe burime njerëzore",
    "TVSH dhe tatime",
    "Bilanc vjetor",
    "Auditim dhe ekspertizë",
    "Qasje në financa",
    "Tjetër",
  ],
  labels: {
    firstName: "Emri",
    lastName: "Mbiemri",
    company: "Kompania",
    email: "Email",
    phone: "Telefon",
    subject: "Tema",
    message: "Mesazhi / pyetja",
  },
  placeholders: {
    firstName: "Emri juaj",
    lastName: "Mbiemri juaj",
    company: "Emri i kompanisë suaj",
    email: "emri@kompania.mk",
    phone: "+389 7X XXX XXX",
    subject: "Zgjidhni temën",
    message: "Si mund t'ju ndihmojmë?",
  },
  errors: {
    firstName: "Shkruani emrin tuaj.",
    lastName: "Shkruani mbiemrin tuaj.",
    emailMissing: "Shkruani email-in tuaj.",
    emailInvalid: "Shkruani një adresë email të vlefshme.",
    phone: "Shkruani një numër telefoni të vlefshëm.",
    subject: "Zgjidhni temën e mesazhit.",
    message: "Mesazhi duhet të ketë të paktën 10 karaktere.",
  },
  honeypotLabel: "Faqe interneti",
  challengeLoading:
    "Verifikimi që nuk jeni robot ende po ngarkohet. Provoni përsëri pas pak.",
  send: "Dërgo kërkesën",
  sending: "Po dërgohet…",
  sent: "Mesazhi u dërgua. Do t'ju kontaktojmë sa më shpejt të jetë e mundur.",
  failed:
    "Mesazhi nuk u dërgua. Provoni përsëri ose na shkruani në email.",
  requiredBefore: "Fushat e shënuara me",
  requiredStar: "yll",
  requiredAfter: "janë të detyrueshme.",
};

const en: ContactFormCopy = {
  subjects: [
    "Accounting services",
    "Payroll and HR",
    "VAT and taxes",
    "Annual financial report",
    "Audit and expert assessment",
    "Access to financing",
    "Other",
  ],
  labels: {
    firstName: "First name",
    lastName: "Last name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message / question",
  },
  placeholders: {
    firstName: "Your first name",
    lastName: "Your last name",
    company: "Your company name",
    email: "name@company.mk",
    phone: "+389 7X XXX XXX",
    subject: "Choose a subject",
    message: "How can we help you?",
  },
  errors: {
    firstName: "Enter your first name.",
    lastName: "Enter your last name.",
    emailMissing: "Enter your email address.",
    emailInvalid: "Enter a valid email address.",
    phone: "Enter a valid phone number.",
    subject: "Choose a subject for your message.",
    message: "The message must be at least 10 characters.",
  },
  honeypotLabel: "Website",
  challengeLoading:
    "The check that you are not a robot is still loading. Try again in a moment.",
  send: "Send request",
  sending: "Sending…",
  sent: "Your message has been sent. We will contact you as soon as possible.",
  failed: "The message was not sent. Try again, or write to us by email.",
  requiredBefore: "Fields marked with",
  requiredStar: "an asterisk",
  requiredAfter: "are required.",
};

export const contactForm: Record<Locale, ContactFormCopy> = { mk, sq, en };
