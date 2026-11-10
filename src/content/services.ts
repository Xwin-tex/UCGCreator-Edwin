/**
 * ─────────────────────────────────────────────────────────────
 *  SERVICES
 * ─────────────────────────────────────────────────────────────
 *  The descriptions come from src/content/dictionaries.ts
 *  (`services.items`, EN + ES) so translations stay in one place.
 *  Here we only attach the icon and layout metadata.
 */

import type { LucideIcon } from "lucide-react";
import {
  Clapperboard,
  Camera,
  PackageOpen,
  PlayCircle,
  Star,
  Sun,
  LayoutGrid,
  Feather,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
};

export const services: Service[] = [
  { icon: Clapperboard }, // UGC Videos
  { icon: Camera }, // Product Photography
  { icon: PackageOpen }, // Unboxing Experiences
  { icon: PlayCircle }, // Product Demonstrations
  { icon: Star }, // Reviews & Testimonials
  { icon: Sun }, // Lifestyle Content
  { icon: LayoutGrid }, // Social Media Creatives
  { icon: Feather }, // Creative Storytelling
];
