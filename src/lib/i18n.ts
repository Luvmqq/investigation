import { Converter } from "opencc-js";

export type SiteLang = "zh" | "zh-hant" | "en";

export const siteLangs: SiteLang[] = ["zh", "zh-hant", "en"];

const toTraditionalChinese = Converter({ from: "cn", to: "tw" });

export function t(zh: string, en: string, lang: SiteLang, tw?: string) {
  if (lang === "en") return en;
  if (lang === "zh-hant") return tw ?? toTraditionalChinese(zh);
  return zh;
}

export function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function localizePath(path: string, lang: SiteLang) {
  const normalized = normalizePath(path);
  if (lang === "zh") return normalized;
  if (normalized === "/") return `/${lang}/`;
  return `/${lang}${normalized}`;
}

export function getHtmlLang(lang: SiteLang) {
  if (lang === "en") return "en";
  if (lang === "zh-hant") return "zh-Hant";
  return "zh-CN";
}

export function getOgLocale(lang: SiteLang) {
  if (lang === "en") return "en_US";
  if (lang === "zh-hant") return "zh_TW";
  return "zh_CN";
}

export function getAlternateLinks(path: string) {
  const normalized = normalizePath(path);
  return [
    { hreflang: "zh-CN", path: localizePath(normalized, "zh") },
    { hreflang: "zh-Hant", path: localizePath(normalized, "zh-hant") },
    { hreflang: "en", path: localizePath(normalized, "en") },
    { hreflang: "x-default", path: localizePath(normalized, "zh") }
  ];
}

export function formatDate(date: Date, lang: SiteLang) {
  const locale = lang === "en" ? "en-US" : lang === "zh-hant" ? "zh-HK" : "zh-CN";
  return date.toLocaleDateString(locale);
}
