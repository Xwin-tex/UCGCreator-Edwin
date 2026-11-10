"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import SectionKicker from "@/components/ui/SectionKicker";
import { Reveal } from "@/components/ui/Reveal";

export default function Services({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section
      id="services"
      className="grain relative scroll-mt-24 bg-carbon py-24 text-cream md:py-36"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionKicker light>{dict.kicker}</SectionKicker>
            <Reveal delay={0.08}>
              <h2
                id="services-title"
                className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold uppercase leading-[1.02] tracking-tight"
              >
                {dict.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
              {dict.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Editorial index list */}
        <div className="mt-14">
          {services.map((service, i) => {
            const Icon = service.icon;
            const index = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={index} y={18} delay={Math.min(i * 0.05, 0.3)}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-x-4 border-t border-cream/12 px-2 py-6 transition-colors duration-300 hover:bg-cream hover:text-carbon md:grid-cols-[64px_1fr_1.2fr_auto] md:items-center md:gap-x-8 md:px-4 md:py-7">
                  <span className="font-display text-xl font-bold text-orange md:text-2xl">
                    {index}
                  </span>

                  <h3 className="flex items-center gap-3 font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
                    <Icon
                      className="h-5 w-5 shrink-0 text-orange"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span className="font-display">{dict.titles[i]}</span>
                  </h3>

                  <p className="col-span-2 mt-2 text-sm leading-relaxed text-cream/70 transition-colors group-hover:text-carbon/80 md:col-span-1 md:mt-0 md:text-[15px]">
                    {dict.items[i]}
                  </p>

                  <ArrowUpRight
                    className="hidden h-5 w-5 text-carbon opacity-0 transition-all duration-300 group-hover:opacity-100 md:block"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            );
          })}
          <div className="border-t border-cream/12" />
        </div>

        <Reveal delay={0.15}>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.18em] text-carbon transition-colors duration-300 hover:bg-cream"
          >
            {dict.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
