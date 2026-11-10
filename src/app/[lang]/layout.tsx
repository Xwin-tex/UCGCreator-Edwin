import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: site.brand,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "es" ? "es_CO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#F5F1E9",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  // The proxy guarantees only known locales reach this layout, but fall
  // back gracefully instead of throwing inside the root layout.
  const locale = hasLocale(lang) ? lang : "en";
  const dict = getDictionary(locale);

  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        <CustomCursor />
        <Header locale={locale} nav={dict.nav} instagram={site.social.instagram} />
        <main id="top" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
