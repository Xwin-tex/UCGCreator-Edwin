"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Fade-and-rise scroll reveal. Respects prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: reduce ? 0.01 : 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line reveal for display headlines (one line per child). */
export function LinesReveal({
  children,
  className,
  delay = 0,
  stagger = 0.12,
}: {
  children: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {children.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
        >
          <motion.span
            className="block will-change-transform"
            initial={{ y: reduce ? 0 : "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduce ? 0.01 : 0.9,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Horizontal clip reveal used on images. */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ clipPath: reduce ? "inset(0 0 0 0)" : "inset(12% 6% 12% 6%)", opacity: reduce ? 1 : 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduce ? 0.01 : 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export { EASE };
