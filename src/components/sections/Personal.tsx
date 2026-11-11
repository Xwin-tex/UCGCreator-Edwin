"use client";

import Image from "next/image";
import { Asterisk } from "@/components/ui/Marquee";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import SectionKicker from "@/components/ui/SectionKicker";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

const POLAROIDS = [
  { src: "/images/personal-01.jpg", width: 1500, height: 2000, rotate: "rotate-[-3deg]" },
  { src: "/images/personal-02.svg", width: 900, height: 900, rotate: "rotate-[2.5deg]" },
  { src: "/images/personal-03.svg", width: 900, height: 900, rotate: "rotate-[3.5deg]" },
  { src: "/images/personal-04.svg", width: 900, height: 900, rotate: "rotate-[-2deg]" },
];

export default function Personal({ dict }: { dict: Dictionary["personal"] }) {
  return (
    <section
      id="personal"
      className="grain relative scroll-mt-24 overflow-hidden bg-sky py-24 text-carbon md:py-36"
      aria-labelledby="personal-title"
    >
      <Asterisk className="animate-spin-slow absolute right-[6%] top-16 h-14 w-14 text-carbon/25" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="max-w-2xl">
          <SectionKicker>{dict.kicker}</SectionKicker>
          <Reveal delay={0.08}>
            <h2
              id="personal-title"
              className="mt-5 font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold uppercase leading-[1.02] tracking-tight"
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

        {/* Scattered editorial grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {POLAROIDS.map((polaroid, i) => (
            <div
              key={polaroid.src}
              className={`lg:col-span-3 ${i % 2 === 1 ? "lg:mt-16" : ""}`}
            >
              <ImageReveal delay={i * 0.08}>
                <figure className={`${polaroid.rotate} transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]`}>
                  <div className="border border-carbon/10 bg-cream p-2 pb-4 shadow-[8px_10px_0_0_rgba(23,23,23,0.15)]">
                    <Image
                      src={polaroid.src}
                      alt={`${site.creator} — ${dict.captions[i]}`}
                      width={polaroid.width}
                      height={polaroid.height}
                      className="h-auto w-full"
                    />
                    <figcaption className="mt-3 px-1 text-center font-editorial text-sm italic text-carbon/70">
                      {dict.captions[i]}
                    </figcaption>
                  </div>
                </figure>
              </ImageReveal>
            </div>
          ))}
        </div>

        {/* Personal statements */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.statements.map((statement, i) => (
            <Reveal key={statement} delay={i * 0.06} y={16}>
              <p className="flex h-full items-start gap-3 border-t-2 border-carbon pt-4 font-editorial text-lg italic leading-snug text-carbon/85">
                <Asterisk className="mt-1.5 h-3.5 w-3.5 shrink-0 text-orange" />
                {statement}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
