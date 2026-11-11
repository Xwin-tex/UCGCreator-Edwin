"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COPY = {
  en: {
    title: "THIS PAGE WENT OFF-SCRIPT.",
    body: "The page you're looking for doesn't exist — but the good content is one click away.",
    cta: "TAKE ME HOME",
    home: "/en",
  },
  es: {
    title: "ESTA PÁGINA SE SALIÓ DEL GUION.",
    body: "La página que buscas no existe — pero el buen contenido está a un clic.",
    cta: "LLÉVAME AL INICIO",
    home: "/es",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname() ?? "";
  const [locale, setLocale] = useState<"en" | "es">(
    pathname.startsWith("/es") ? "es" : "en",
  );

  // The prerendered 404 shell doesn't know the requested path —
  // sync with the real location after hydration.
  useEffect(() => {
    setLocale(window.location.pathname.startsWith("/es") ? "es" : "en");
  }, []);

  const t = COPY[locale];

  return (
    <section className="grain relative flex min-h-svh flex-col items-center justify-center bg-carbon px-6 text-center text-cream">
      <p className="font-display text-[28vw] leading-none text-stroke-orange md:text-[16rem]">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight md:text-4xl">
        {t.title}
      </h1>
      <p className="mt-4 max-w-md text-cream/70">{t.body}</p>
      <Link
        href={t.home}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-carbon transition-colors hover:bg-cream"
      >
        {t.cta}
      </Link>
    </section>
  );
}
