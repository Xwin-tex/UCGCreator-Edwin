"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";import type { Dictionary } from "@/content/dictionaries";
import {
  categoryOrder,
  projects,
  type CategoryKey,
  type Project,
} from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import SectionKicker from "@/components/ui/SectionKicker";
import { Reveal } from "@/components/ui/Reveal";

type Filter = CategoryKey | "all";

export default function Work({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const { work, categories } = dict;
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const close = useCallback(() => setSelected(null), []);

  // Modal a11y: close on Escape, lock scroll, focus the close button.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeButtonRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  const filters: Filter[] = ["all", ...categoryOrder];

  return (
    <section
      id="work"
      className="grain relative scroll-mt-24 bg-cream py-24 md:py-36"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionKicker>{work.kicker}</SectionKicker>

        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.08}>
            <h2
              id="work-title"
              className="max-w-3xl font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold uppercase leading-[1.02] tracking-tight text-carbon"
            >
              {work.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-relaxed text-carbon/70 md:text-base">
              {work.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.1} className="mt-12">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label={work.kicker}
          >
            {filters.map((key) => {
              const active = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(key)}
                  className={`rounded-full border px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active
                      ? "border-carbon bg-carbon text-cream"
                      : "border-carbon/25 text-carbon/70 hover:border-orange hover:text-carbon"
                  }`}
                >
                  {key === "all" ? categories.all : categories[key]}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Bento grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative ${project.span}`}
              >
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="block w-full cursor-pointer text-left focus-visible:outline-offset-4"
                >
                  <div className={`relative overflow-hidden ${project.aspect}`}>
                    {project.video ? (
                      <video
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        src={project.video}
                        poster={project.poster ?? project.image}
                        muted
                        loop
                        playsInline
                        preload="none"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.imageAlt[locale]}
                        width={project.width}
                        height={project.height}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between bg-carbon/0 p-4 transition-colors duration-300 group-hover:bg-carbon/35">
                      <span className="self-start rounded-full bg-cream px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-carbon">
                        {work.specBadge}
                      </span>
                      <span className="flex items-center gap-2 self-end rounded-full bg-orange px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-carbon opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {work.viewProject}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    {/* Media format badge */}
                    <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-carbon/80 px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-cream">
                      {project.format.includes("Video") ||
                      project.format.includes("Reel") ? (
                        <>
                          <Play className="h-3 w-3" /> {work.videoBadge}
                        </>
                      ) : (
                        work.photoBadge
                      )}
                    </span>
                  </div>

                  <div className="mt-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-carbon md:text-xl">
                      {project.title}
                    </h3>
                    <span className="shrink-0 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-carbon/50">
                      {categories[project.category]}
                    </span>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="py-20 text-center font-editorial text-xl italic text-carbon/50">
            {work.emptyState}
          </p>
        )}
      </div>

      {/* Project modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label={work.modal.close}
              onClick={close}
              className="absolute inset-0 cursor-pointer bg-carbon/70 backdrop-blur-sm"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto bg-cream text-carbon shadow-2xl sm:max-h-[85vh]"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label={work.modal.close}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-carbon text-cream transition-colors hover:bg-orange hover:text-carbon"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Media */}
                <div className="relative min-h-[280px] md:min-h-full">
                  {selected.video ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      src={selected.video}
                      poster={selected.poster ?? selected.image}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={selected.image}
                      alt={selected.imageAlt[locale]}
                      width={selected.width}
                      height={selected.height}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 font-display text-[9px] font-bold uppercase tracking-[0.18em] text-carbon">
                    {work.specBadge}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 md:p-10">
                  <p className="font-display text-[10px] font-bold uppercase tracking-[0.24em] text-carbon/50">
                    {categories[selected.category]}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                    {selected.title}
                  </h3>

                  <dl className="mt-6 space-y-3 border-y border-carbon/10 py-5 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-carbon/50">
                        {work.modal.brand}
                      </dt>
                      <dd className="text-right font-medium">{selected.brand}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-carbon/50">
                        {work.modal.format}
                      </dt>
                      <dd className="text-right font-medium">{selected.format}</dd>
                    </div>
                  </dl>

                  <h4 className="mt-6 font-display text-[10px] font-bold uppercase tracking-[0.24em] text-carbon/50">
                    {work.modal.about}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-carbon/80 md:text-base">
                    {selected.description[locale]}
                  </p>

                  <p className="mt-6 border-l-2 border-orange pl-3 font-editorial text-sm italic text-carbon/60">
                    {work.modal.specNote}
                  </p>

                  <a
                    href="#contact"
                    onClick={close}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-carbon px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-orange hover:text-carbon"
                  >
                    {work.modal.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
