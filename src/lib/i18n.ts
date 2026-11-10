export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Name of the cookie that persists the visitor's language choice. */
export const LOCALE_COOKIE = "ternesito-lang";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

/** Build a locale-prefixed href, e.g. path("es", "#work") -> "/es#work" */
export function localePath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}
