"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import Marquee, { Asterisk } from "@/components/ui/Marquee";
import { EASE, LinesReveal } from "@/components/ui/Reveal";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { hero } = dict;
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="grain relative overflow-hidden bg-cream"
      aria-label={hero.titleLine1 + " " + hero.titleLine2}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-12 lg:gap-6 lg:pb-24 lg:pt-40">
        {/* ── Typography ─────────────────────────────────── */}
        <div className="relative z-10 lg:col-span-7 lg:pr-6">
          <h1 className="font-display font-bold uppercase leading-[0.92] tracking-[-0.02em] text-carbon">
            <LinesReveal className="text-[clamp(2.6rem,7.2vw,6.5rem)]">
              {[
                <span key="l1">{hero.titleLine1}</span>,
                <span key="l2" className="text-orange">
                  {hero.titleLine2}
                  <span className="align-top text-[0.35em] text-carbon">®</span>
                </span>,
              ]}
            </LinesReveal>
          </h1>

          <motion.p
            className="mt-6 max-w-xl font-display text-xs font-bold uppercase leading-relaxed tracking-[0.14em] text-carbon/70 md:text-sm"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-carbon px-7 py-4 font-display text-xs font-bold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-orange hover:text-carbon"
            >
              {hero.ctaExplore}
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-carbon px-7 py-[14px] font-display text-xs font-bold uppercase tracking-[0.18em] text-carbon transition-colors duration-300 hover:bg-carbon hover:text-cream"
            >
              {hero.ctaWork}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-carbon/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.8 }}
          >
            <p className="flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.22em]">
              <MapPin className="h-3.5 w-3.5 text-orange" />
              {hero.location}
              <span aria-hidden="true">{hero.locationSeparator}</span>
              {hero.availability}
            </p>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.22em] underline decoration-orange decoration-2 underline-offset-4 transition-colors hover:text-orange"
            >
              {site.handle}
            </a>
          </motion.div>
        </div>

        {/* ── Collage ────────────────────────────────────── */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto h-[420px] max-w-[520px] sm:h-[500px] lg:h-[560px]">
            {/* Back image */}
            <motion.figure
              style={{ y: reduce ? 0 : yBack }}
              className="absolute left-0 top-6 w-[52%] rotate-[3deg]"
              initial={{ opacity: 0, y: reduce ? 0 : 40, rotate: 8 }}
              animate={{ opacity: 1, rotate: 3 }}
              transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
            >
              <div className="border border-carbon/15 bg-cream p-2 shadow-[6px_8px_0_0_rgba(23,23,23,0.12)]">
                <Image
                  src="/images/about-01.svg"
                  alt={dict.about.annotations.secondary}
                  width={900}
                  height={1100}
                  className="h-auto w-full"
                  priority={false}
                />
              </div>
            </motion.figure>

            {/* Main portrait */}
            <motion.figure
              style={{ y: reduce ? 0 : yMain }}
              className="absolute right-0 top-0 w-[68%]"
              initial={{ opacity: 0, y: reduce ? 0 : 60, rotate: -6 }}
              animate={{ opacity: 1, rotate: -2 }}
              transition={{ delay: 0.3, duration: 1, ease: EASE }}
            >
              <div className="border border-carbon/15 bg-cream p-2 shadow-[10px_12px_0_0_rgba(23,23,23,0.16)]">
                <Image
                  src="/images/hero-portrait.svg"
                  alt={`${site.creator} — ${site.role}. Replace with a real portrait.`}
                  width={1000}
                  height={1250}
                  priority
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-right font-editorial text-sm italic text-carbon/60">
                {site.creator} — {site.role}
              </figcaption>
            </motion.figure>

            {/* Rotating sticker */}
            <motion.div
              className="absolute -left-3 bottom-14 z-10 flex h-28 w-28 items-center justify-center rounded-full bg-sky text-center sm:h-32 sm:w-32"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: -8 }}
              transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
              aria-hidden="true"
            >
              <Asterisk className="animate-spin-slow absolute h-5 w-5 text-carbon" />
              <span className="px-4 font-display text-[10px] font-bold uppercase leading-tight tracking-[0.14em] text-carbon sm:text-xs">
                {hero.sticker}
              </span>
            </motion.div>

            {/* Floating editorial labels */}
            <motion.span
              className="animate-float absolute right-2 top-[54%] z-10 rounded-full bg-carbon px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-cream shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              aria-hidden="true"
            >
              {hero.floatingLabels[0]}
            </motion.span>
            <motion.span
              className="animate-float-delayed absolute bottom-24 right-8 z-10 rounded-full border-2 border-carbon bg-cream px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-carbon"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              aria-hidden="true"
            >
              {hero.floatingLabels[1]}
            </motion.span>
            <motion.span
              className="animate-float absolute left-4 top-2 z-10 rounded-full bg-orange px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-carbon shadow-lg"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              aria-hidden="true"
            >
              {hero.floatingLabels[2]}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        className="absolute bottom-20 left-5 hidden items-center gap-3 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-carbon/50 transition-colors hover:text-orange md:left-8 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        {hero.scrollHint}
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>

      {/* Marquee */}
      <Marquee items={hero.marquee} dark />
    </section>
  );
}
