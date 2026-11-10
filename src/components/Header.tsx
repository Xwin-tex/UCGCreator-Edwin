"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "./ui/icons";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SECTIONS = [
  { id: "about", key: "about" },
  { id: "work", key: "work" },
  { id: "services", key: "services" },
  { id: "process", key: "process" },
  { id: "contact", key: "contact" },
] as const;

export default function Header({
  locale,
  nav,
  instagram,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  instagram: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-carbon/10 bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-8">
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight md:text-xl"
            aria-label="TERNESITO® — back to top"
          >
            TERNESITO<span className="text-orange">®</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {SECTIONS.map(({ id, key }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group relative font-display text-xs font-bold uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
              >
                {nav[key]}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-carbon/20 transition-colors hover:border-orange hover:bg-orange sm:flex"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <LanguageSwitcher locale={locale} className="text-carbon" />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label={nav.openMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-carbon/20 lg:hidden"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-carbon text-cream lg:hidden"
            initial={{ opacity: 0, y: reduce ? 0 : "-6%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : "-6%" }}
            transition={{ duration: reduce ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={nav.menu}
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-lg font-bold tracking-tight">
                TERNESITO<span className="text-orange">®</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={nav.close}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25"
              >
                <X size={16} />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col justify-center gap-1 px-6"
              aria-label="Mobile"
            >
              {SECTIONS.map(({ id, key }, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-4"
                  initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                >
                  <span className="font-display text-xs text-orange">
                    0{i + 1}
                  </span>
                  <span className="font-display text-4xl font-bold uppercase tracking-tight transition-colors group-hover:text-orange">
                    {nav[key]}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center justify-between px-6 pb-10">
              <LanguageSwitcher locale={locale} className="text-cream" />
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-orange hover:text-carbon"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
