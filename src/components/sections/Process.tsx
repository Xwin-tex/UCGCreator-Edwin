"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, Lightbulb, Clapperboard, PackageCheck } from "lucide-react";
import type { Dictionary } from "@/content/dictionaries";
import SectionKicker from "@/components/ui/SectionKicker";
import { EASE, Reveal } from "@/components/ui/Reveal";

const STEP_ICONS = [Compass, Lightbulb, Clapperboard, PackageCheck];

export default function Process({ dict }: { dict: Dictionary["process"] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="grain relative scroll-mt-24 bg-cream py-24 md:py-36"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="max-w-2xl">
          <SectionKicker>{dict.kicker}</SectionKicker>
          <Reveal delay={0.08}>
            <h2
              id="process-title"
              className="mt-5 font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold uppercase leading-[1.02] tracking-tight text-carbon"
            >
              {dict.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-sm leading-relaxed text-carbon/70 md:text-base">
              {dict.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <ol
          ref={listRef}
          className="relative mt-16 grid gap-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4"
        >
          {/* Connecting line (desktop) */}
          <span
            aria-hidden="true"
            className="absolute -top-4 left-0 hidden h-[2px] w-full bg-carbon/10 lg:block"
          />
          {dict.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={step.title} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
                >
                  {/* Node on the timeline */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-[calc(1rem+7px)] left-0 hidden h-4 w-4 rounded-full border-2 border-carbon bg-orange lg:block"
                  />

                  <p
                    aria-hidden="true"
                    className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-bold leading-none text-stroke-carbon opacity-40"
                  >
                    0{i + 1}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-carbon text-cream">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-carbon md:text-2xl">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-carbon/70 md:text-[15px]">
                    {step.description}
                  </p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
