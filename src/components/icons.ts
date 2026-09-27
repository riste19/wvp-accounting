import {
  Award,
  Building2,
  Calculator,
  ChartPie,
  CheckCheck,
  ClipboardList,
  FileSpreadsheet,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  PiggyBank,
  SearchCheck,
  ShieldAlert,
  ShieldCheck,
  UserCog,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Name → component map for icons chosen in the content layer.
 *
 * `lucide-react` ships with a "use client" directive, so any module importing
 * it lands on the client side of the boundary — and takes everything else in
 * that module with it. Holding icon *components* in `src/data` would therefore
 * push every service description into the JavaScript of every page. Data names
 * an icon; this map resolves it.
 *
 * Deliberately not exported from a barrel: importing it should be a decision,
 * not something a component picks up while reaching for a layout helper.
 */
export const icons = {
  award: Award,
  building2: Building2,
  calculator: Calculator,
  chartPie: ChartPie,
  checkCheck: CheckCheck,
  clipboardList: ClipboardList,
  fileSpreadsheet: FileSpreadsheet,
  graduationCap: GraduationCap,
  lightbulb: Lightbulb,
  mail: Mail,
  mapPin: MapPin,
  piggyBank: PiggyBank,
  searchCheck: SearchCheck,
  shieldAlert: ShieldAlert,
  shieldCheck: ShieldCheck,
  userCog: UserCog,
  users: Users,
} satisfies Record<string, LucideIcon>;

/** The set of icons the content layer is allowed to ask for. */
export type IconName = keyof typeof icons;
