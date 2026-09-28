/**
 * The privacy policy and terms of use, in all three languages.
 *
 * The approved site linked both from its footer but never had the pages; the
 * links went to "#". These started from the consulting site's texts and were
 * rewritten for an accounting firm. A lawyer should read them before launch.
 *
 * Keep the three languages saying the same thing: a change to one is a change
 * to all three, and moves `updated`.
 */
import type { Locale } from "@/i18n/locales";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

/** One document in one language. */
export type LegalDocument = {
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalTexts = {
  /** ISO date, shown on the page in the reader's language. */
  updated: string;
  translations: Record<Locale, LegalDocument>;
};

export const privacyPolicy: LegalTexts = {
  updated: "2026-09-28",
  translations: {
    mk: {
      title: "Политика за приватност",
      description:
        "Како ги собираме, користиме и заштитуваме личните податоци на посетителите и клиентите на ВФП АКАУНТИНГ.",
      intro:
        "Оваа политика објаснува кои лични податоци ги обработуваме кога ја користите нашата веб-страница или кога стапувате во контакт со нас, за која цел ги обработуваме и кои права ви припаѓаат.",
      sections: [
        {
          heading: "Кој ги обработува вашите податоци",
          paragraphs: [
            "Контролор на вашите лични податоци е ВФП АКАУНТИНГ ДООЕЛ Скопје, бул. Кочо Рацин 3/2, кат 1, 1000 Скопје. Можете да нè контактирате на info@wvpaccounting.mk или на +389 76 337 800.",
          ],
        },
        {
          heading: "Кои податоци ги собираме",
          paragraphs: [
            "Собираме само податоци што ни се потребни за да одговориме на вашето барање и да ја извршиме договорената услуга.",
          ],
          items: [
            "Податоци што ги внесувате во контакт формата: име и презиме, е-пошта, телефон и содржина на пораката",
            "Податоци што ни ги давате директно, по е-пошта или телефон",
            "Податоци потребни за извршување на договорената услуга, кога ќе станете наш клиент",
            "Основни технички податоци за посетата на страницата, како IP-адреса и тип на прелистувач",
          ],
        },
        {
          heading: "За која цел и врз која основа ги користиме",
          paragraphs: [
            "Податоците ги користиме исклучиво за да одговориме на вашето прашање, да подготвиме понуда и да ја извршиме договорената сметководствена услуга. Не ги користиме за маркетинг ниту за автоматизирано одлучување.",
          ],
          items: [
            "Одговор на вашето барање: чекори преземени на ваше барање пред склучување договор",
            "Извршување на услугата: договорот што го склучуваме со вас",
            "Чување на сметководствената документација: законска обврска",
            "Технички податоци: наш легитимен интерес страницата да работи безбедно",
          ],
        },
        {
          heading: "Споделување со трети лица",
          paragraphs: [
            "Не продаваме и не изнајмуваме лични податоци. Податоци доставуваме единствено кога тоа е неопходно за извршување на услугата или кога тоа го бара законот — на пример до Управата за јавни приходи, Централниот регистар или вашата банка — и само во обемот потребен за таа цел.",
          ],
        },
        {
          heading: "Технички даватели на услуги",
          paragraphs: [
            "Страницата ја хостира Cloudflare, Inc., а пораките од контакт формата до нас ги доставува Resend, Inc. Двете компании ги обработуваат податоците само по наш налог и само за таа намена.",
            "Двете компании имаат седиште во Соединетите Американски Држави, па податоците може да се обработуваат и надвор од Република Северна Македонија.",
          ],
        },
        {
          heading: "Рок на чување",
          paragraphs: [
            "Пораките од контакт формата ги чуваме додека ни се потребни за да одговориме на вашето барање. Податоците на клиентите ги чуваме додека трае деловниот однос и за периодот пропишан со прописите за чување сметководствена документација. По истекот на тој период податоците се бришат или анонимизираат.",
          ],
        },
        {
          heading: "Колачиња (cookies)",
          paragraphs: [
            "Оваа веб-страница не користи колачиња за следење, профилирање или рекламирање. Не поставуваме аналитички ниту маркетиншки колачиња и не вградуваме содржини од социјални мрежи или мапи што би ве следеле низ интернет.",
            "Страницата не чува податоци во вашиот прелистувач ниту преку други слични технологии. Токму затоа не прикажуваме банер за согласност — не постои обработка за која таа би била потребна.",
            "Ако во иднина воведеме статистика на посетеност или друга технологија што бара согласност, оваа политика ќе биде ажурирана пред таквата технологија да се активира.",
          ],
        },
        {
          heading: "Ваши права",
          paragraphs: [
            "Во секое време имате право на пристап, исправка, ограничување, бришење и приговор на обработката на вашите лични податоци.",
          ],
          items: [
            "Право да побарате копија од податоците што ги чуваме за вас",
            "Право да побарате исправка на неточни податоци",
            "Право да побарате бришење кога повеќе не постои основа за обработка",
            "Право на приговор до надлежниот орган за заштита на личните податоци",
          ],
        },
        {
          heading: "Надзорен орган",
          paragraphs: [
            "Надзор над обработката на личните податоци во Република Северна Македонија врши Агенцијата за заштита на личните податоци, согласно Законот за заштита на личните податоци (Службен весник на РСМ бр. 42/2020).",
            "Ако сметате дека вашите права при обработката на личните податоци се повредени, имате право да поднесете барање за утврдување повреда до Агенцијата:",
          ],
          items: [
            "Агенција за заштита на личните податоци",
            "бул. „Гоце Делчев“ бр. 18 (зграда на МРТВ, кат 14), поштенски фах 417, 1000 Скопје",
            "Телефон: +389 2 3230 635",
            "Е-пошта: info@privacy.mk",
            "Веб-страница: azlp.mk",
          ],
        },
        {
          heading: "Контакт",
          paragraphs: [
            "За сите прашања поврзани со обработката на личните податоци, или за да остварите некое од вашите права, обратете ни се на info@wvpaccounting.mk.",
          ],
        },
      ],
    },

    sq: {
      title: "Politika e Privatësisë",
      description:
        "Si i mbledh, i përdor dhe i mbron WVP Accounting të dhënat personale të vizitorëve dhe të klientëve të saj.",
      intro:
        "Kjo politikë shpjegon cilat të dhëna personale i përpunojmë kur e përdorni faqen tonë të internetit ose kur na kontaktoni, për çfarë qëllimi i përpunojmë dhe cilat të drejta keni.",
      sections: [
        {
          heading: "Kush i përpunon të dhënat tuaja",
          paragraphs: [
            "Kontrollues i të dhënave tuaja personale është WVP Accounting (ВФП АКАУНТИНГ ДООЕЛ Скопје), bul. Koço Racin nr. 3/2, kati 1, 1000 Shkup. Mund të na kontaktoni në info@wvpaccounting.mk ose në +389 76 337 800.",
          ],
        },
        {
          heading: "Cilat të dhëna i mbledhim",
          paragraphs: [
            "Mbledhim vetëm të dhënat që na nevojiten për t'iu përgjigjur kërkesës suaj dhe për të kryer shërbimin e dakorduar.",
          ],
          items: [
            "Të dhënat që i shënoni në formularin e kontaktit: emri dhe mbiemri, e-maili, telefoni dhe përmbajtja e mesazhit",
            "Të dhënat që na i jepni drejtpërdrejt, me e-mail ose me telefon",
            "Të dhënat që na nevojiten për të kryer shërbimin e dakorduar, kur bëheni klient i yni",
            "Të dhëna themelore teknike për vizitën në faqe, si adresa IP dhe lloji i shfletuesit",
          ],
        },
        {
          heading: "Për çfarë qëllimi dhe mbi çfarë baze i përdorim",
          paragraphs: [
            "Të dhënat i përdorim vetëm për t'iu përgjigjur pyetjes suaj, për të përgatitur një ofertë dhe për të kryer shërbimin kontabël të dakorduar. Nuk i përdorim për marketing as për vendimmarrje të automatizuar.",
          ],
          items: [
            "Përgjigjja ndaj kërkesës suaj: hapa të ndërmarrë me kërkesën tuaj para lidhjes së kontratës",
            "Kryerja e shërbimit: kontrata që lidhim me ju",
            "Ruajtja e dokumentacionit kontabël: detyrim ligjor",
            "Të dhënat teknike: interesi ynë legjitim që faqja të funksionojë në mënyrë të sigurt",
          ],
        },
        {
          heading: "Ndarja me palë të treta",
          paragraphs: [
            "Nuk shesim dhe nuk japim me qira të dhëna personale. Të dhëna u dorëzojmë të tjerëve vetëm kur kjo është e domosdoshme për kryerjen e shërbimit ose kur e kërkon ligji — për shembull Drejtorisë së të Hyrave Publike, Regjistrit Qendror ose bankës suaj — dhe vetëm në masën që e kërkon ai qëllim.",
          ],
        },
        {
          heading: "Ofruesit e shërbimeve teknike",
          paragraphs: [
            "Faqja strehohet nga Cloudflare, Inc., ndërsa mesazhet nga formulari i kontaktit na i dërgon Resend, Inc. Të dyja kompanitë i përpunojnë të dhënat vetëm sipas udhëzimeve tona dhe vetëm për këtë qëllim.",
            "Të dyja kompanitë kanë selinë në Shtetet e Bashkuara të Amerikës, prandaj të dhënat mund të përpunohen edhe jashtë Republikës së Maqedonisë së Veriut.",
          ],
        },
        {
          heading: "Afati i ruajtjes",
          paragraphs: [
            "Mesazhet nga formulari i kontaktit i ruajmë për aq kohë sa na nevojiten për t'iu përgjigjur kërkesës suaj. Të dhënat e klientëve i ruajmë gjatë gjithë marrëdhënies së biznesit dhe për periudhën që e përcaktojnë rregullat për ruajtjen e dokumentacionit kontabël. Pas kësaj periudhe, të dhënat fshihen ose anonimizohen.",
          ],
        },
        {
          heading: "Kukit (cookies)",
          paragraphs: [
            "Kjo faqe nuk përdor kuki për gjurmim, profilizim ose reklamim. Nuk vendosim kuki analitike as marketingu dhe nuk përfshijmë përmbajtje nga rrjetet sociale ose harta që do t'ju ndiqnin nëpër internet.",
            "Faqja nuk ruan të dhëna në shfletuesin tuaj, as me kuki as me teknologji të tjera të ngjashme. Pikërisht për këtë arsye nuk shfaqim banderolë për pëlqim — nuk ka përpunim për të cilin do të nevojitej.",
            "Nëse në të ardhmen fusim statistika të vizitave ose teknologji tjetër që kërkon pëlqim, kjo politikë do të përditësohet përpara se ajo teknologji të aktivizohet.",
          ],
        },
        {
          heading: "Të drejtat tuaja",
          paragraphs: [
            "Në çdo kohë keni të drejtë të qaseni, t'i korrigjoni, t'i kufizoni dhe t'i fshini të dhënat tuaja personale, si dhe të kundërshtoni përpunimin e tyre.",
          ],
          items: [
            "E drejta të kërkoni kopje të të dhënave që ruajmë për ju",
            "E drejta të kërkoni korrigjimin e të dhënave të pasakta",
            "E drejta të kërkoni fshirjen kur nuk ka më bazë për përpunimin",
            "E drejta të paraqisni ankesë te autoriteti kompetent për mbrojtjen e të dhënave personale",
          ],
        },
        {
          heading: "Autoriteti mbikëqyrës",
          paragraphs: [
            "Mbikëqyrjen e përpunimit të të dhënave personale në Republikën e Maqedonisë së Veriut e kryen Agjencia për Mbrojtjen e të Dhënave Personale, në pajtim me Ligjin për mbrojtjen e të dhënave personale (Gazeta Zyrtare e RMV-së nr. 42/2020).",
            "Nëse mendoni se ju janë shkelur të drejtat gjatë përpunimit të të dhënave personale, keni të drejtë t'i paraqisni Agjencisë kërkesë për konstatimin e shkeljes:",
          ],
          items: [
            "Agjencia për Mbrojtjen e të Dhënave Personale",
            "bul. „Goce Dellçev“ nr. 18 (ndërtesa e MRT-së, kati 14), kutia postare 417, 1000 Shkup",
            "Telefon: +389 2 3230 635",
            "E-mail: info@privacy.mk",
            "Faqja e internetit: azlp.mk",
          ],
        },
        {
          heading: "Kontakti",
          paragraphs: [
            "Për çdo pyetje në lidhje me përpunimin e të dhënave personale, ose për të ushtruar ndonjë nga të drejtat tuaja, na shkruani në info@wvpaccounting.mk.",
          ],
        },
      ],
    },

    en: {
      title: "Privacy Policy",
      description:
        "How WVP Accounting collects, uses and protects the personal data of its website visitors and clients.",
      intro:
        "This policy explains what personal data we process when you use our website or get in touch with us, why we process it, and what rights you have.",
      sections: [
        {
          heading: "Who processes your data",
          paragraphs: [
            "The controller of your personal data is WVP Accounting (ВФП АКАУНТИНГ ДООЕЛ Скопје), Bul. Koco Racin 3/2, 1st floor, 1000 Skopje. You can reach us at info@wvpaccounting.mk or on +389 76 337 800.",
          ],
        },
        {
          heading: "What data we collect",
          paragraphs: [
            "We collect only the data we need to answer your enquiry and deliver the service we have agreed on.",
          ],
          items: [
            "What you enter in the contact form: your full name, email address, phone number and message",
            "What you tell us directly, by email or phone",
            "What we need to deliver the agreed service, once you become a client",
            "Basic technical data about your visit, such as your IP address and browser type",
          ],
        },
        {
          heading: "Why we use it, and on what basis",
          paragraphs: [
            "We use the data only to answer your question, prepare an offer and deliver the accounting service we have agreed on. We do not use it for marketing or for automated decision-making.",
          ],
          items: [
            "Answering your enquiry: steps taken at your request before entering into a contract",
            "Delivering the service: the contract we enter into with you",
            "Keeping accounting records: a legal obligation",
            "Technical data: our legitimate interest in keeping the website secure",
          ],
        },
        {
          heading: "Sharing with third parties",
          paragraphs: [
            "We do not sell or rent personal data. We pass data on only when it is necessary to deliver the service or required by law — for example to the Public Revenue Office, the Central Registry or your bank — and only as much as that purpose requires.",
          ],
        },
        {
          heading: "Technical service providers",
          paragraphs: [
            "The website is hosted by Cloudflare, Inc., and messages from the contact form are delivered to us by Resend, Inc. Both process the data only on our instructions and only for that purpose.",
            "Both companies are based in the United States, so the data may also be processed outside the Republic of North Macedonia.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep contact form messages for as long as we need them to answer your enquiry. We keep client data for the duration of our business relationship and for the period required by the regulations on keeping accounting records. After that, the data is deleted or anonymised.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "This website does not use cookies for tracking, profiling or advertising. We set no analytics or marketing cookies, and embed no social media or map content that would follow you around the web.",
            "The website stores no data in your browser, whether in cookies or by any similar technology. That is why we show no consent banner: there is no processing that would need one.",
            "If we ever introduce visitor statistics or another technology that requires consent, this policy will be updated before that technology is switched on.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You have the right at any time to access, correct, restrict or erase your personal data, and to object to its processing.",
          ],
          items: [
            "The right to request a copy of the data we hold about you",
            "The right to have inaccurate data corrected",
            "The right to have your data erased when there is no longer a basis for processing it",
            "The right to lodge a complaint with the authority responsible for personal data protection",
          ],
        },
        {
          heading: "Supervisory authority",
          paragraphs: [
            "The processing of personal data in the Republic of North Macedonia is supervised by the Personal Data Protection Agency, under the Law on Personal Data Protection (Official Gazette of the Republic of North Macedonia No. 42/2020).",
            "If you believe your rights have been violated in the processing of your personal data, you may file a request with the Agency to establish the violation:",
          ],
          items: [
            "Personal Data Protection Agency",
            "Blvd. Goce Delčev 18 (MRT building, 14th floor), P.O. Box 417, 1000 Skopje",
            "Phone: +389 2 3230 635",
            "Email: info@privacy.mk",
            "Website: azlp.mk",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For any question about how we process personal data, or to exercise any of your rights, write to us at info@wvpaccounting.mk.",
          ],
        },
      ],
    },
  },
};

export const termsOfUse: LegalTexts = {
  updated: "2026-09-28",
  translations: {
    mk: {
      title: "Услови за користење",
      description:
        "Услови под кои може да ја користите веб-страницата и содржините на ВФП АКАУНТИНГ.",
      intro:
        "Со пристапувањето и користењето на оваа веб-страница се согласувате со условите наведени подолу. Ако не се согласувате со нив, ве молиме да не ја користите страницата.",
      sections: [
        {
          heading: "Намена на содржината",
          paragraphs: [
            "Содржината на страницата има информативен карактер и не претставува сметководствен, даночен, правен или финансиски совет. Секоја деловна одлука треба да се донесе по анализа на вашиот конкретен случај и консултација со нашиот тим.",
          ],
        },
        {
          heading: "Точност на информациите",
          paragraphs: [
            "Даночните стапки, законските рокови и прописите често се менуваат. Се трудиме информациите на страницата да бидат ажурни, но задржуваме право на измени без претходна најава. Пред да постапите, проверете ги важечките прописи кај надлежната институција или кај нас.",
          ],
        },
        {
          heading: "Интелектуална сопственост",
          paragraphs: [
            "Текстовите, графичките елементи, логотипот и останатите материјали на оваа страница се заштитени. Не е дозволено нивно преземање, умножување или објавување без претходна писмена согласност.",
          ],
        },
        {
          heading: "Надворешни линкови",
          paragraphs: [
            "Страницата може да содржи линкови кон надворешни страници. Не одговараме за содржината и практиките за приватност на тие страници.",
          ],
        },
        {
          heading: "Ограничување на одговорноста",
          paragraphs: [
            "Не одговараме за директна или индиректна штета настаната од користење на информациите објавени на страницата без претходна професионална консултација.",
          ],
        },
        {
          heading: "Измени на условите",
          paragraphs: [
            "Задржуваме право во секое време да ги измениме овие услови. Важечка е верзијата објавена на оваа страница со наведениот датум на последно ажурирање.",
          ],
        },
      ],
    },

    sq: {
      title: "Kushtet e Përdorimit",
      description:
        "Kushtet sipas të cilave mund ta përdorni faqen e internetit dhe përmbajtjen e WVP Accounting.",
      intro:
        "Duke hyrë dhe duke e përdorur këtë faqe, ju pajtoheni me kushtet e mëposhtme. Nëse nuk pajtoheni me to, ju lutemi mos e përdorni faqen.",
      sections: [
        {
          heading: "Qëllimi i përmbajtjes",
          paragraphs: [
            "Përmbajtja e kësaj faqeje ka karakter informativ dhe nuk përbën këshillë kontabël, tatimore, ligjore ose financiare. Çdo vendim biznesi duhet të merret pas analizës së rastit tuaj konkret dhe konsultimit me ekipin tonë.",
          ],
        },
        {
          heading: "Saktësia e informacionit",
          paragraphs: [
            "Normat tatimore, afatet ligjore dhe rregulloret ndryshojnë shpesh. Përpiqemi që informacioni në faqe të jetë i përditësuar, por e rezervojmë të drejtën ta ndryshojmë pa njoftim paraprak. Para se të veproni, kontrolloni rregulloret në fuqi pranë institucionit kompetent ose te ne.",
          ],
        },
        {
          heading: "Pronësia intelektuale",
          paragraphs: [
            "Tekstet, elementet grafike, logoja dhe materialet e tjera në këtë faqe janë të mbrojtura. Nuk lejohet shkarkimi, kopjimi ose publikimi i tyre pa pëlqimin tonë paraprak me shkrim.",
          ],
        },
        {
          heading: "Lidhjet e jashtme",
          paragraphs: [
            "Faqja mund të përmbajë lidhje drejt faqeve të jashtme. Nuk mbajmë përgjegjësi për përmbajtjen dhe praktikat e privatësisë së atyre faqeve.",
          ],
        },
        {
          heading: "Kufizimi i përgjegjësisë",
          paragraphs: [
            "Nuk mbajmë përgjegjësi për dëme të drejtpërdrejta ose të tërthorta që rrjedhin nga përdorimi i informacionit të publikuar në faqe pa konsultim paraprak profesional.",
          ],
        },
        {
          heading: "Ndryshimet e kushteve",
          paragraphs: [
            "E rezervojmë të drejtën t'i ndryshojmë këto kushte në çdo kohë. Vlen versioni i publikuar në këtë faqe, me datën e përditësimit të fundit.",
          ],
        },
      ],
    },

    en: {
      title: "Terms of Use",
      description:
        "The terms under which you may use the WVP Accounting website and its content.",
      intro:
        "By accessing and using this website, you agree to the terms below. If you do not agree with them, please do not use the website.",
      sections: [
        {
          heading: "Purpose of the content",
          paragraphs: [
            "The content of this website is for information only and is not accounting, tax, legal or financial advice. Any business decision should be made after an analysis of your particular case and a consultation with our team.",
          ],
        },
        {
          heading: "Accuracy of information",
          paragraphs: [
            "Tax rates, statutory deadlines and regulations change often. We do our best to keep the information on this website up to date, but reserve the right to change it without notice. Before acting, check the current regulations with the competent institution or with us.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The texts, graphics, logo and other materials on this website are protected. They may not be downloaded, copied or published without our prior written consent.",
          ],
        },
        {
          heading: "External links",
          paragraphs: [
            "This website may contain links to external websites. We are not responsible for their content or their privacy practices.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "We are not liable for any direct or indirect damage arising from the use of information published on this website without prior professional advice.",
          ],
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We reserve the right to change these terms at any time. The version published on this page, with the date of its last update, is the one that applies.",
          ],
        },
      ],
    },
  },
};
