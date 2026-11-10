import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

/**
 * Global 404 page — used for URLs that match no route at all
 * (e.g. /en/does-not-exist). Because the root layout lives inside
 * app/[lang], this file must return a full HTML document.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — TERNESITO®",
  description: "Page not found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${spaceGrotesk.className} antialiased`}>
      <body>
        <section className="flex min-h-svh flex-col items-center justify-center bg-carbon px-6 text-center text-cream">
          <p className="font-display text-[28vw] leading-none text-transparent md:text-[14rem] [-webkit-text-stroke:1.5px_#FF6333]">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight md:text-4xl">
            THIS PAGE WENT OFF-SCRIPT.
          </h1>
          <p className="mt-4 max-w-md text-cream/70">
            The page you&apos;re looking for doesn&apos;t exist — but the good
            content is one click away.
          </p>
          <Link
            href="/en"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#FF6333] px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-[#171717] transition-colors hover:bg-[#F5F1E9]"
          >
            TAKE ME HOME
          </Link>
        </section>
      </body>
    </html>
  );
}
