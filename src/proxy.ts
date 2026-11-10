import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, LOCALE_COOKIE, locales } from "@/lib/i18n";

const LOCALES = locales as readonly string[];

/**
 * Redirects any non-localized URL to the visitor's preferred locale.
 * Priority: explicit cookie choice → Accept-Language header → default (EN).
 */
function detectLocale(request: NextRequest): string {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && LOCALES.includes(cookie)) return cookie;

  const acceptLanguage = request.headers
    .get("accept-language")
    ?.toLowerCase();
  if (acceptLanguage?.startsWith("es")) return "es";

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const locale = detectLocale(request);
  request.nextUrl.pathname = `/${locale}${
    pathname === "/" ? "" : pathname
  }`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Run on everything except Next internals, API routes and files
    // with an extension (images, videos, favicon…).
    "/((?!api|_next|.*\\..*).*)",
  ],
};
