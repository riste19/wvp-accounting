import type { IconName } from "@/components/icons";
import type { Locale } from "@/i18n/locales";

/**
 * The three reasons to choose the firm, shown as wide cards under the
 * service grid.
 */
export type Pillar = {
  id: string;
  icon: IconName;
  badge: string;
  title: string;
  description: string;
  features: string[];
  stat: string;
  statLabel: string;
};

export const pillars: Record<Locale, Pillar[]> = {
  mk: [
    {
      id: "expertise",
      icon: "award",
      badge: "10+ Години Искуство",
      title: "Стручност и Експертиза",
      description: "Нашиот тим од сертифицирани сметководители и финансиски експерти со децениско искуство гарантира прецизност и професионализам во секоја услуга. Секој клиент добива посветен тим специјалисти кои ги познаваат спецификите на неговата индустрија.",
      features: ["Сертифицирани експерти", "Индустриски специјализации", "Континуирана едукација"],
      stat: "200+",
      statLabel: "Задоволни клиенти",
    },
    {
      id: "dedication",
      icon: "users",
      badge: "Посветен Приступ",
      title: "Индивидуална Посветеност",
      description: "Не сме само ваш сметководител – ние сме ваш финансиски партнер. Разбираме дека секој бизнис е уникатен, затоа креираме прилагодени решенија што одговараат на вашите специфични потреби и цели. Секогаш го бараме најдоброто за вас.",
      features: ["Прилагодени решенија", "Личен сметководител", "Проактивно советување"],
      stat: "24/7",
      statLabel: "Достапност",
    },
    {
      id: "trust",
      icon: "shieldCheck",
      badge: "Гаранција на Квалитет",
      title: "Доверливост и Безбедност",
      description: "Вашата доверба е наш најголем капитал. Гарантираме целосна доверливост на вашите податоци со најсовремени безбедносни протоколи. Нашата работа е осликана со транспарентност, етика и почитување на највисоките професионални стандарди.",
      features: ["Заштита на податоци", "Транспарентност", "Етички стандарди"],
      stat: "100%",
      statLabel: "Доверливост",
    },
  ],
  sq: [
    {
      id: "expertise",
      icon: "award",
      badge: "10+ Vite Eksperiencë",
      title: "Ekspertizë dhe Njohuri",
      description: "Ekipi ynë i kontabilistëve të certifikuar dhe ekspertëve financiarë me dekada eksperiencë garanton saktësi dhe profesionalizëm në çdo shërbim. Çdo klient merr një ekip të dedikuar specialistësh që njohin specifikat e industrisë së tij.",
      features: ["Ekspertë të certifikuar", "Specializime industriale", "Edukim i vazhdueshëm"],
      stat: "200+",
      statLabel: "Klientë të kënaqur",
    },
    {
      id: "dedication",
      icon: "users",
      badge: "Qasje e Dedikuar",
      title: "Përkushtim Individual",
      description: "Ne nuk jemi thjesht kontabilisti juaj – ne jemi partneri juaj financiar. Ne kuptojmë që çdo biznes është unik, prandaj krijojmë zgjidhje të personalizuara që përshtaten me nevojat dhe qëllimet tuaja specifike. Ne gjithmonë kërkojmë më të mirën për ju.",
      features: ["Zgjidhje të personalizuara", "Kontabilist personal", "Këshillim proaktiv"],
      stat: "24/7",
      statLabel: "Disponueshmëri",
    },
    {
      id: "trust",
      icon: "shieldCheck",
      badge: "Garanci Cilësie",
      title: "Besim dhe Siguri",
      description: "Besimi juaj është aseti ynë më i madh. Ne garantojmë konfidencialitet të plotë të të dhënave tuaja me protokollet më të fundit të sigurisë. Puna jonë karakterizohet nga transparenca, etika dhe respektimi i standardeve më të larta profesionale.",
      features: ["Mbrojtja e të dhënave", "Transparenca", "Standarde etike"],
      stat: "100%",
      statLabel: "Konfidencialitet",
    },
  ],
  en: [
    {
      id: "expertise",
      icon: "award",
      badge: "10+ Years Experience",
      title: "Expertise & Knowledge",
      description: "Our team of certified accountants and financial experts with decades of experience guarantees precision and professionalism in every service. Each client gets a dedicated team of specialists who understand the specifics of their industry.",
      features: ["Certified experts", "Industry specializations", "Continuous education"],
      stat: "200+",
      statLabel: "Happy clients",
    },
    {
      id: "dedication",
      icon: "users",
      badge: "Dedicated Approach",
      title: "Individual Dedication",
      description: "We are not just your accountant – we are your financial partner. We understand that every business is unique, so we create customized solutions that fit your specific needs and goals. We always seek the best for you.",
      features: ["Customized solutions", "Personal accountant", "Proactive advisory"],
      stat: "24/7",
      statLabel: "Availability",
    },
    {
      id: "trust",
      icon: "shieldCheck",
      badge: "Quality Guarantee",
      title: "Trust & Security",
      description: "Your trust is our greatest asset. We guarantee complete confidentiality of your data with state-of-the-art security protocols. Our work is characterized by transparency, ethics, and adherence to the highest professional standards.",
      features: ["Data protection", "Transparency", "Ethical standards"],
      stat: "100%",
      statLabel: "Confidentiality",
    },
  ],
};
