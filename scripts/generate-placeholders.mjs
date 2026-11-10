/**
 * ─────────────────────────────────────────────────────────────
 *  PLACEHOLDER GENERATOR
 * ─────────────────────────────────────────────────────────────
 *  Generates the editorial SVG placeholders used while real
 *  photography/video are not available.
 *
 *  Run:  node scripts/generate-placeholders.mjs
 *
 *  Replace each placeholder with a real asset (JPG/WebP/MP4) and
 *  update the paths in src/content/projects.ts if you rename files.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
mkdirSync(outDir, { recursive: true });

const CARBON = "#171717";
const CREAM = "#F5F1E9";
const ORANGE = "#FF6333";
const SKY = "#B9D8FF";

function asterisk(x, y, size, color, opacity = 1, rotate = 0) {
  const arms = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    return `<line x1="${x}" y1="${y}" x2="${x + Math.cos(a) * size}" y2="${
      y + Math.sin(a) * size
    }" stroke="${color}" stroke-width="${size * 0.16}" stroke-linecap="round" opacity="${opacity}" transform="rotate(${rotate} ${x} ${y})"/>`;
  }).join("");
  return `<g>${arms}<circle cx="${x}" cy="${y}" r="${size * 0.14}" fill="${color}" opacity="${opacity}"/></g>`;
}

function placeholder({
  file,
  w,
  h,
  bg,
  fg,
  accent,
  alt,
  hint,
  num,
}) {
  const pad = Math.round(Math.min(w, h) * 0.06);
  const crop = pad;
  const mark = Math.round(Math.min(w, h) * 0.04);
  const bigNum = Math.round(Math.min(w, h) * 0.42);
  const fontSize = Math.max(18, Math.round(Math.min(w, h) * 0.045));

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="${fg}" stroke-width="2" stroke-dasharray="10 8" opacity="0.5"/>
  ${asterisk(w * 0.82, h * 0.2, Math.min(w, h) * 0.09, accent, 0.9)}
  <text x="${pad + mark * 0.6}" y="${h - pad - mark * 1.2}" font-family="'Space Grotesk','Arial',sans-serif" font-weight="700" font-size="${bigNum}" fill="${accent}" opacity="0.92">${num}</text>
  <text x="${w / 2}" y="${h / 2}" text-anchor="middle" font-family="'Space Grotesk','Arial',sans-serif" font-weight="700" letter-spacing="6" font-size="${Math.round(fontSize * 1.6)}" fill="${fg}">${alt}</text>
  <text x="${w / 2}" y="${h / 2 + Math.round(fontSize * 2.2)}" text-anchor="middle" font-family="'DM Sans','Arial',sans-serif" font-size="${fontSize}" fill="${fg}" opacity="0.65">${hint}</text>
  <g stroke="${fg}" stroke-width="2" opacity="0.85">
    <path d="M ${crop} ${crop + mark} V ${crop} H ${crop + mark}" fill="none"/>
    <path d="M ${w - crop - mark} ${crop} H ${w - crop} V ${crop + mark}" fill="none"/>
    <path d="M ${w - crop} ${h - crop - mark} V ${h - crop} H ${w - crop - mark}" fill="none"/>
    <path d="M ${crop + mark} ${h - crop} H ${crop} V ${h - crop - mark}" fill="none"/>
  </g>
</svg>`;

  writeFileSync(join(outDir, file), svg, "utf8");
  console.log("✓", file);
}

// ── Hero ────────────────────────────────────────────────────────
placeholder({
  file: "hero-portrait.svg",
  w: 1000,
  h: 1250,
  bg: CARBON,
  fg: CREAM,
  accent: ORANGE,
  alt: "PORTRAIT",
  hint: "replace with hero-portrait.jpg (4:5)",
  num: "01",
});

// ── About ───────────────────────────────────────────────────────
placeholder({
  file: "about-01.svg",
  w: 900,
  h: 1100,
  bg: CREAM,
  fg: CARBON,
  accent: SKY,
  alt: "EDITORIAL",
  hint: "replace with about-01.jpg (9:11)",
  num: "02",
});
placeholder({
  file: "about-02.svg",
  w: 900,
  h: 700,
  bg: ORANGE,
  fg: CARBON,
  accent: CREAM,
  alt: "PORTRAIT",
  hint: "replace with about-02.jpg (9:7)",
  num: "03",
});
placeholder({
  file: "about-03.svg",
  w: 700,
  h: 900,
  bg: SKY,
  fg: CARBON,
  accent: ORANGE,
  alt: "DETAIL",
  hint: "replace with about-03.jpg (7:9)",
  num: "04",
});

// ── Work / portfolio ────────────────────────────────────────────
const work = [
  ["work-golden-hour.svg", 900, 1125, CARBON, CREAM, ORANGE, "BEAUTY · UGC", "01"],
  ["work-neon-natives.svg", 900, 1125, SKY, CARBON, ORANGE, "FASHION · EDITORIAL", "02"],
  ["work-everyday-carry.svg", 900, 900, CREAM, CARBON, SKY, "TECH · UNBOXING", "03"],
  ["work-cafe-de-barrio.svg", 900, 1200, CARBON, CREAM, SKY, "FOOD · REEL", "04"],
  ["work-second-skin.svg", 900, 1200, ORANGE, CARBON, CREAM, "FASHION · STYLING", "05"],
  ["work-glass-and-routine.svg", 900, 1200, CREAM, CARBON, ORANGE, "REVIEW · 9:16", "06"],
  ["work-field-notes.svg", 1600, 1000, CARBON, CREAM, SKY, "STORYTELLING", "07"],
  ["work-slow-mornings.svg", 1200, 900, CREAM, CARBON, SKY, "LIFESTYLE · VLOG", "08"],
  ["work-unboxed-details.svg", 1200, 900, SKY, CARBON, ORANGE, "UNBOXING · MACRO", "09"],
];
for (const [file, w, h, bg, fg, accent, alt, num] of work) {
  placeholder({
    file,
    w,
    h,
    bg,
    fg,
    accent,
    alt,
    hint: "replace with a real image or video",
    num,
  });
}

// ── Personal touch ──────────────────────────────────────────────
const personal = [
  ["personal-01.svg", 900, 900, CREAM, CARBON, ORANGE, "EVERYDAY 01"],
  ["personal-02.svg", 900, 900, CARBON, CREAM, SKY, "EVERYDAY 02"],
  ["personal-03.svg", 900, 900, ORANGE, CARBON, CREAM, "EVERYDAY 03"],
  ["personal-04.svg", 900, 900, SKY, CARBON, ORANGE, "EVERYDAY 04"],
];
for (const [file, w, h, bg, fg, accent, alt] of personal) {
  placeholder({
    file,
    w,
    h,
    bg,
    fg,
    accent,
    alt,
    hint: "replace with a real photo (square)",
    num: "★",
  });
}

console.log("\nPlaceholders generated in public/images ✓");
