import type { IconName } from "@/components/icons";
import type { Locale } from "@/i18n/locales";

/**
 * The twelve service areas, as the cards on the home page show them.
 */
export type Service = {
  icon: IconName;
  title: string;
  description: string;
};

export const services: Record<Locale, Service[]> = {
  mk: [
    {
      icon: "calculator",
      title: "Финансиско сметководство",
      description: "Месечни и годишни финансиски извештаи, материјално сметководство, завршна сметка и биланси.",
    },
    {
      icon: "users",
      title: "Плати и човечки ресурси",
      description: "Пресметка и обработка на плати, пријава/одјава на вработени, огласи за вработување, боледувања.",
    },
    {
      icon: "fileSpreadsheet",
      title: "Даноци и законска усогласеност",
      description: "ДДВ пресметка и поднесок, директно и индиректно оданочување, даночна оптимизација, трансфер цени.",
    },
    {
      icon: "searchCheck",
      title: "Ревизија и вештачење",
      description: "Ревизорски услуги, независна проверка на сметки, финансиско, сметководствено и материјално вештачење.",
    },
    {
      icon: "chartPie",
      title: "Финансиски консалтинг",
      description: "Стратегиско финансиско планирање, анализа на готовински тек, оптимизација на трошоци, бизнис планови.",
    },
    {
      icon: "piggyBank",
      title: "Пристап до финансии",
      description: "Истражување на грантови, кредитно советување, подготовка на банкарска документација, M&A.",
    },
    {
      icon: "shieldAlert",
      title: "Управување со ризик",
      description: "Идентификација и менаџмент на деловни ризици, проактивни стратегии за намалување на ризик.",
    },
    {
      icon: "lightbulb",
      title: "Даночен консалтинг",
      description: "Стратегии за оптимизација на даночните обврски, даночно планирање и усогласеност со регулативи.",
    },
    {
      icon: "building2",
      title: "Корпоративни услуги",
      description: "Целосна административна поддршка за корпорации, припојување и превземање, закрепнување на бизнис.",
    },
    {
      icon: "userCog",
      title: "HR Услуги и Регрутација",
      description: "Комплетни услуги за управување со човечки ресурси вклучувајќи регрутација и селекција на кадри, изработка на договори за вработување, управување со перформанси на вработени, како и развој на HR стратегии прилагодени на потребите на вашата компанија.",
    },
    {
      icon: "clipboardList",
      title: "Административна Поддршка",
      description: "Целосна административна помош за вашиот бизнис вклучувајќи управување со документација, координација со државни институции, подготовка на извештаи за статистички завод, АВРМ и УЈП, како и секојдневна оперативна поддршка.",
    },
    {
      icon: "graduationCap",
      title: "Едукација и Обука",
      description: "Професионална обука и едукација за сметководствен софтвер, даночни регулативи и финансиски менаџмент. Организираме работилници, индивидуални часови и корпоративни тренинзи за унапредување на знаењето на вашиот тим.",
    },
  ],
  sq: [
    {
      icon: "calculator",
      title: "Kontabiliteti Financiar",
      description: "Raporte financiare mujore dhe vjetore, kontabiliteti material, llogaritje përfundim bilanci.",
    },
    {
      icon: "users",
      title: "Pagat dhe Burimet Njerëzore",
      description: "Përpunimi i pagave, regjistrimi/çregjistrimi i punonjësve, shpallje pune, leje mjekësore.",
    },
    {
      icon: "fileSpreadsheet",
      title: "Taksacioni dhe Pajtueshmëria",
      description: "Llogaritja dhe dorëzimi i TVSH-së, taksacioni direkt dhe indirekt, optimizimi tatimor.",
    },
    {
      icon: "searchCheck",
      title: "Auditimi dhe Ekspertiza",
      description: "Shërbime auditimi, verifikimi i pavarur i llogarive, ekspertiza financiare dhe kontabiliteti.",
    },
    {
      icon: "chartPie",
      title: "Konsulenca Financiare",
      description: "Planifikim strategjik financiar, analiza e rrjedhës monetare, optimizimi i kostove.",
    },
    {
      icon: "piggyBank",
      title: "Qasja në Financime",
      description: "Hulumtim grantesh, këshillim kreditor, përgatitja e dokumentacionit bankar, M&A.",
    },
    {
      icon: "shieldAlert",
      title: "Menaxhimi i Riskut",
      description: "Identifikimi dhe menaxhimi i rreziqeve të biznesit, strategji proaktive për uljen e riskut.",
    },
    {
      icon: "lightbulb",
      title: "Konsulenca Tatimore",
      description: "Strategji për optimizimin e detyrimeve tatimore, planifikim tatimor dhe pajtueshmëri.",
    },
    {
      icon: "building2",
      title: "Shërbime Korporative",
      description: "Mbështetje administrative e plotë për korporata, bashkim dhe blerje, rikuperim biznesi.",
    },
    {
      icon: "userCog",
      title: "Shërbime HR dhe Rekrutimi",
      description: "Shërbime gjithëpërfshirëse të menaxhimit të burimeve njerëzore duke përfshirë rekrutimin dhe përzgjedhjen e talenteve, përgatitjen e kontratave të punësimit, menaxhimin e performancës së punonjësve, dhe zhvillimin e strategjive HR të përshtatura me nevojat e kompanisë suaj.",
    },
    {
      icon: "clipboardList",
      title: "Mbështetje Administrative",
      description: "Asistencë administrative e plotë për biznesin tuaj duke përfshirë menaxhimin e dokumentacionit, koordinimin me institucionet qeveritare, përgatitjen e raporteve për zyrën statistikore, AVRM dhe UJP, si dhe mbështetje operative të përditshme.",
    },
    {
      icon: "graduationCap",
      title: "Edukim dhe Trajnim",
      description: "Trajnim dhe edukim profesional në softuer kontabiliteti, rregulloret tatimore dhe menaxhimin financiar. Organizojmë seminare, klasa individuale dhe trajnime korporative për përmirësimin e njohurive dhe aftësive të ekipit tuaj.",
    },
  ],
  en: [
    {
      icon: "calculator",
      title: "Financial Accounting",
      description: "Monthly and annual financial reports, material accounting, final accounts and balance sheets.",
    },
    {
      icon: "users",
      title: "Payroll & Human Resources",
      description: "Payroll processing, employee registration/deregistration, job postings, sick leave management.",
    },
    {
      icon: "fileSpreadsheet",
      title: "Taxation & Compliance",
      description: "VAT calculation and submission, direct and indirect taxation, tax optimization, transfer pricing.",
    },
    {
      icon: "searchCheck",
      title: "Audit & Expert Assessment",
      description: "Audit services, independent account verification, financial and accounting expert assessment.",
    },
    {
      icon: "chartPie",
      title: "Financial Consulting",
      description: "Strategic financial planning, cash flow analysis, cost optimization, business plans.",
    },
    {
      icon: "piggyBank",
      title: "Access to Financing",
      description: "Grant research, credit counseling, bank documentation preparation, M&A services.",
    },
    {
      icon: "shieldAlert",
      title: "Risk Management",
      description: "Identification and management of business risks, proactive risk reduction strategies.",
    },
    {
      icon: "lightbulb",
      title: "Tax Consulting",
      description: "Strategies for optimizing tax obligations, tax planning and regulatory compliance.",
    },
    {
      icon: "building2",
      title: "Corporate Services",
      description: "Complete administrative support for corporations, mergers & acquisitions, business recovery.",
    },
    {
      icon: "userCog",
      title: "HR Services & Recruitment",
      description: "Comprehensive human resource management services including recruitment and talent selection, employment contract preparation, employee performance management, and development of HR strategies tailored to your company's needs.",
    },
    {
      icon: "clipboardList",
      title: "Administrative Support",
      description: "Complete administrative assistance for your business including document management, coordination with government institutions, preparation of reports for statistical office, AVRM and UJP, as well as daily operational support.",
    },
    {
      icon: "graduationCap",
      title: "Education & Training",
      description: "Professional training and education in accounting software, tax regulations and financial management. We organize workshops, individual classes and corporate training to enhance your team's knowledge and skills.",
    },
  ],
};
