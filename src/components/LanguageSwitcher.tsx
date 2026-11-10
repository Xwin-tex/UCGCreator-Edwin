"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

/**
 * EN / ES switcher.
 * - Navigates to the same page in the other locale.
 * - Persists the choice in a cookie (read by proxy.ts) and localStorage.
 */
export default function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() || `/${locale}`;
  const router = useRouter();

  const switchTo = (target: Locale) => {
    if (target === locale) return;

    // Replace the first segment of the current path with the new locale.
    const segments = pathname.split("/");
    segments[1] = target;
    const nextPath = segments.join("/") || `/${target}`;

    // Persist the preference for future visits (proxy.ts reads the cookie).
    document.cookie = `${LOCALE_COOKIE}=${target};path=/;max-age=31536000;samesite=lax`;
    try {
      window.localStorage.setItem(LOCALE_COOKIE, target);
    } catch {
      /* storage unavailable — cookie is enough */
    }
    router.push(nextPath);
  };

  return (
    <div
      className={`flex items-center rounded-full border border-current p-0.5 ${className}`}
      role="group"
      aria-label="Language / Idioma"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => switchTo(l)}
            aria-current={active ? "true" : undefined}
            className={`px-3 py-1 font-display text-xs font-bold tracking-widest transition-colors duration-300 ${
              active ? "rounded-full bg-orange text-carbon" : "opacity-60 hover:opacity-100"
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
