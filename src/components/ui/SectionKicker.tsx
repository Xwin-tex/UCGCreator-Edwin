import { Asterisk } from "./Marquee";
import { Reveal } from "./Reveal";

/** Small uppercase kicker label used at the top of every section. */
export default function SectionKicker({
  children,
  className = "",
  light = false,
}: {
  children: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <Reveal y={12}>
      <p
        className={`flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.28em] ${
          light ? "text-cream/60" : "text-carbon/60"
        } ${className}`}
      >
        <Asterisk className="h-3.5 w-3.5 text-orange" />
        {children}
      </p>
    </Reveal>
  );
}
