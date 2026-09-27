import type { Locale } from "@/i18n/locales";

/**
 * The five service packages.
 *
 * No prices: the site the boss approved shows none either, so every card
 * ends at the contact form. Add a price field here once he sets them.
 */
export type Package = {
  id: string;
  name: string;
  target: string;
  features: string[];
  /** The middle card is lifted and carries the recommended ribbon. */
  recommended: boolean;
};

export const packages: Record<Locale, Package[]> = {
  mk: [
    {
      id: "pkg1",
      name: "Микро Пакет",
      target: "За многу мали бизниси",
      features: [
        "Основни сметководствени услуги",
        "Завршна сметка",
        "Е-банкинг поддршка",
      ],
      recommended: false,
    },
    {
      id: "pkg2",
      name: "Мини Пакет",
      target: "За мали бизниси",
      features: [
        "Сите услуги од Микро",
        "Месечни извештаи",
        "Даночно советување (основно)",
      ],
      recommended: false,
    },
    {
      id: "pkg3",
      name: "СМЕ Пакет",
      target: "За средни бизниси",
      features: [
        "Сите услуги од Мини",
        "Анализа на готовински тек",
        "Оптимизација на трошоци",
      ],
      recommended: true,
    },
    {
      id: "pkg4",
      name: "Ларџ Пакет",
      target: "За големи бизниси",
      features: [
        "Сите услуги од СМЕ",
        "Посветен сметководител",
        "Детално финансиско планирање",
      ],
      recommended: false,
    },
    {
      id: "pkg5",
      name: "Корпорет Пакет",
      target: "За корпорации",
      features: [
        "Комплетен финансиски менаџмент",
        "Ревизорска поддршка",
        "Дневно известување",
        "Управување со ризик",
        "Стратешко планирање",
      ],
      recommended: false,
    },
  ],
  sq: [
    {
      id: "pkg1",
      name: "Paketa Mikro",
      target: "Për biznese shumë të vogla",
      features: [
        "Shërbime bazë kontabiliteti",
        "Raport financiar vjetor",
        "Mbështetje e-banking",
      ],
      recommended: false,
    },
    {
      id: "pkg2",
      name: "Paketa Mini",
      target: "Për biznese të vogla",
      features: [
        "Të gjitha shërbimet Mikro",
        "Raporte mujore",
        "Këshillim tatimor bazë",
      ],
      recommended: false,
    },
    {
      id: "pkg3",
      name: "Paketa NMV",
      target: "Për biznese të mesme",
      features: [
        "Të gjitha shërbimet Mini",
        "Analizë e rrjedhës monetare",
        "Optimizim i kostove",
      ],
      recommended: true,
    },
    {
      id: "pkg4",
      name: "Paketa Large",
      target: "Për biznese të mëdha",
      features: [
        "Të gjitha shërbimet NMV",
        "Kontabilist i dedikuar",
        "Planifikim financiar i detajuar",
      ],
      recommended: false,
    },
    {
      id: "pkg5",
      name: "Paketa Korporative",
      target: "Për korporata",
      features: [
        "Menaxhim i plotë financiar",
        "Mbështetje audituese",
        "Raportim ditor",
        "Menaxhim i riskut",
        "Planifikim strategjik",
      ],
      recommended: false,
    },
  ],
  en: [
    {
      id: "pkg1",
      name: "Micro Package",
      target: "For very small businesses",
      features: [
        "Basic accounting services",
        "Annual financial report",
        "E-banking support",
      ],
      recommended: false,
    },
    {
      id: "pkg2",
      name: "Mini Package",
      target: "For small businesses",
      features: [
        "All Micro services",
        "Monthly reports",
        "Basic tax advisory",
      ],
      recommended: false,
    },
    {
      id: "pkg3",
      name: "SME Package",
      target: "For medium businesses",
      features: [
        "All Mini services",
        "Cash flow analysis",
        "Cost optimization",
      ],
      recommended: true,
    },
    {
      id: "pkg4",
      name: "Large Package",
      target: "For large businesses",
      features: [
        "All SME services",
        "Dedicated accountant",
        "Detailed financial planning",
      ],
      recommended: false,
    },
    {
      id: "pkg5",
      name: "Corporate Package",
      target: "For corporations",
      features: [
        "Complete financial management",
        "Audit support",
        "Daily reporting",
        "Risk management",
        "Strategic planning",
      ],
      recommended: false,
    },
  ],
};
