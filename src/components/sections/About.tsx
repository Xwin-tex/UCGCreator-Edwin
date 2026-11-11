"use client";

import Image from "next/image";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import SectionKicker from "@/components/ui/SectionKicker";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

/**
 * Renders a paragraph where *asterisk-wrapped* words become
 * editorial serif italics — e.g. "I do *personality*".
 */
function EditorialParagraph({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <p>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="font-editorial italic text-sky">
            {part}
          </em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

type AboutDict = Dictionary["about"];

export default function About({ dict }: { dict: AboutDict }) {
  const images = [
    {
      src: "/images/about-02.jpg",
      width: 1500,
      height: 2000,
      caption: dict.annotations.secondary,
      wrap: "w-full rotate-[-2deg]",
    },
    {
      src: "/images/about-03.jpg",
      width: 676,
      height: 792,
      caption: dict.annotations.tertiary,
      wrap: "w-[70%] ml-auto rotate-[4deg] -mt-10",
    },
  ];

  return (
    <section
      id="about"
      className="grain relative scroll-mt-24 overflow-hidden bg-carbon py-24 text-cream md:py-36"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Text column */}
          <div className="lg:col-span-7">
            <SectionKicker light>{dict.kicker}</SectionKicker>
            <Reveal delay={0.1}>
              <h2
                id="about-title"
                className="mt-5 font-display text-[clamp(2rem,4.5vw,3.8rem)] font-bold uppercase leading-[1.02] tracking-tight"
              >
                {dict.title}
              </h2>
            </Reveal>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-cream/80 md:text-lg">
              {dict.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.08 * i} y={20}>
                  <EditorialParagraph text={paragraph} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <p className="mt-10 font-editorial text-3xl italic text-orange">
                {dict.signature}
              </p>
            </Reveal>

            {/* Facts strip */}
            <Reveal delay={0.25}>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-cream/15 pt-6 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-cream/60">
                {dict.facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {fact}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Photo column */}
          <div className="relative lg:col-span-5">
            <ImageReveal>
              <figure className="relative">
                <div className="border border-cream/15 bg-cream p-2 shadow-[10px_12px_0_0_rgba(245,241,233,0.08)]">
                  <Image
                    src="/images/about-01.jpg"
                    alt={`${site.creator} — ${dict.annotations.portrait}`}
                    width={720}
                    height={1280}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 font-editorial text-sm italic text-sky">
                  {dict.annotations.portrait}
                </figcaption>
              </figure>
            </ImageReveal>

            <div className="mt-10 space-y-8">
              {images.map((img, i) => (
                <ImageReveal key={img.src} delay={0.1 + i * 0.08}>
                  <figure className={img.wrap}>
                    <div className="border border-cream/15 bg-cream p-2 shadow-[8px_10px_0_0_rgba(245,241,233,0.08)]">
                      <Image
                        src={img.src}
                        alt={`${site.creator} — ${img.caption}`}
                        width={img.width}
                        height={img.height}
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-2 text-right font-editorial text-sm italic text-cream/50">
                      {img.caption}
                    </figcaption>
                  </figure>
                </ImageReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
