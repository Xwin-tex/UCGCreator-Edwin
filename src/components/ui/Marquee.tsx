import type { ReactNode } from "react";

/** Infinite editorial ticker. Content is duplicated for a seamless loop. */
export default function Marquee({
  items,
  render,
  className = "",
  dark = true,
}: {
  items: string[];
  /** Optional custom renderer for each item (e.g. to add icons). */
  render?: (item: string, index: number) => ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center whitespace-nowrap font-display text-sm font-bold uppercase tracking-[0.2em]"
        >
          {render ? render(item, i) : item}
          <Asterisk className="mx-6 h-4 w-4 shrink-0" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`overflow-hidden py-3 ${dark ? "bg-carbon text-cream" : "bg-cream text-carbon"} ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}

export function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 2v20M3 7l18 10M21 7L3 17" />
    </svg>
  );
}
