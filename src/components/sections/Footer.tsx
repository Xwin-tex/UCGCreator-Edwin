import { ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import CopyrightYear from "@/components/ui/CopyrightYear";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "work", key: "work" },
  { id: "services", key: "services" },
  { id: "process", key: "process" },
  { id: "contact", key: "contact" },
] as const;

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="grain relative overflow-hidden border-t border-cream/10 bg-carbon pb-10 pt-20 text-cream">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Giant brand mark */}
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap text-center font-display text-[16.5vw] font-bold uppercase leading-none tracking-tight text-stroke-cream opacity-30"
        >
          TERNESITO
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <p className="font-display text-xl font-bold tracking-tight">
              TERNESITO<span className="text-orange">®</span>
            </p>
            <p className="mt-3 font-editorial text-lg italic text-cream/70">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Sitemap */}
          <nav aria-label={dict.footer.navLabel}>
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-cream/50">
              {dict.footer.navLabel}
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map(({ id, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="font-display text-sm font-bold uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-orange"
                  >
                    {dict.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + back to top */}
          <div className="flex flex-col items-start gap-6 md:items-end">
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-cream/50">
              {dict.footer.socialLabel}
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-orange"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.handle}
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-orange hover:bg-orange hover:text-carbon"
            >
              {dict.footer.backToTop}
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.18em] text-cream/40 md:flex-row">
          <p>
            {dict.footer.rights.split("{year}")[0]}
            <CopyrightYear />
            {dict.footer.rights.split("{year}")[1]}
          </p>
          <p className="font-display font-bold">
            {dict.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
