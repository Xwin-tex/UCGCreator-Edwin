/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO PROJECTS
 * ─────────────────────────────────────────────────────────────
 *  ⚠️  All projects below are clearly labeled SPEC WORK (conceptual
 *  projects). Do NOT invent brand collaborations — when you have a
 *  real project, add it here with the brand name and set
 *  `isSpec: false`.
 *
 *  HOW TO REPLACE A PROJECT
 *  ────────────────────────
 *  1. Drop your image in  /public/images/  (e.g. work-golden-hour.jpg)
 *     and/or your vertical video in /public/videos/ (mp4, ~9:16).
 *  2. Update `image` / `video` below. If `video` is set, the video
 *     player is used instead of the image.
 *  3. Update title / brand / format / descriptions (EN + ES).
 *
 *  `span` controls the asymmetric bento layout (Tailwind classes on a
 *  12-column grid at the `lg` breakpoint).
 */

export type CategoryKey =
  | "lifestyle"
  | "fashion"
  | "beauty"
  | "technology"
  | "food"
  | "reviews"
  | "unboxing"
  | "storytelling";

export type Project = {
  id: string;
  title: string;
  brand: string;
  category: CategoryKey;
  format: string;
  isSpec: boolean;
  image: string;
  /** Intrinsic dimensions of the current image. */
  width: number;
  height: number;
  imageAlt: { en: string; es: string };
  /** Optional vertical video (mp4/webm). Replaces the image when present. */
  video?: string;
  poster?: string;
  description: { en: string; es: string };
  span: string;
  aspect: string;
};

export const projects: Project[] = [
  {
    id: "golden-hour-skin",
    title: "Golden Hour Skin",
    brand: "Concept · Skincare",
    category: "beauty",
    format: "UGC Video · 9:16",
    isSpec: true,
    image: "/images/work-golden-hour.jpg",
    width: 686,
    height: 780,
    imageAlt: {
      en: "Golden-hour still life of a skincare serum bottle by a sunny window (spec work).",
      es: "Naturaleza muerta a la hora dorada de un sérum de skincare junto a una ventana soleada (spec work).",
    },
    description: {
      en: "A 30-second morning-routine concept: dewy light, honest textures and a hook built around the first sip of coffee meeting the first drop of serum. Spec work to show tone, pacing and product framing.",
      es: "Concepto de 30 segundos de rutina matutina: luz dorada, texturas honestas y un hook construido alrededor del primer sorbo de café encontrándose con la primera gota de sérum. Trabajo especulativo para mostrar tono, ritmo y encuadre de producto.",
    },
    span: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    id: "neon-natives",
    title: "Neon Natives",
    brand: "Concept · Fashion",
    category: "fashion",
    format: "Editorial · Photo Series",
    isSpec: true,
    image: "/images/work-neon-natives.jpg",
    width: 720,
    height: 1280,
    imageAlt: {
      en: "Edwin Ternera in a rhinestone pink cowboy hat at night, framed by neon club lights (spec work).",
      es: "Edwin Ternera con un sombrero vaquero rosa de pedrería de noche, enmarcado por luces de neón de un club (spec work).",
    },
    description: {
      en: "A street-style mini lookbook shot after dark: bold colors, city textures and outfits styled to move. Built to show how a fashion brand could live on my feed.",
      es: "Mini lookbook street-style fotografiado después del anochecer: colores intensos, texturas urbanas y outfits con movimiento. Creado para mostrar cómo una marca de moda podría vivir en mi feed.",
    },
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    id: "everyday-carry",
    title: "Everyday Carry, Reimagined",
    brand: "Concept · Tech",
    category: "technology",
    format: "Unboxing · 9:16",
    isSpec: true,
    image: "/images/work-everyday-carry.jpg",
    width: 768,
    height: 698,
    imageAlt: {
      en: "Overhead flat lay of everyday tech accessories on a dark surface (spec work).",
      es: "Vista cenital de accesorios tech de uso diario sobre una superficie oscura (spec work).",
    },
    description: {
      en: "A tech unboxing concept with actual narrative: what's in the box, why it matters and the three details nobody shows. Spec work for gadgets and accessories.",
      es: "Concepto de unboxing tecnológico con narrativa real: qué hay en la caja, por qué importa y los tres detalles que nadie muestra. Trabajo especulativo para gadgets y accesorios.",
    },
    span: "lg:col-span-5",
    aspect: "aspect-square",
  },
  {
    id: "cafe-de-barrio",
    title: "Café de Barrio",
    brand: "Concept · F&B",
    category: "food",
    format: "Lifestyle Reel · 9:16",
    isSpec: true,
    image: "/images/work-cafe-de-barrio.jpg",
    width: 665,
    height: 806,
    imageAlt: {
      en: "Warm scene inside a neighborhood coffee shop at golden hour (spec work).",
      es: "Escena cálida dentro de un café de barrio a la hora dorada (spec work).",
    },
    description: {
      en: "A love letter to neighborhood coffee: corners, conversations and the ritual of the first cup. A format for food & beverage brands that want warmth, not just close-ups.",
      es: "Una carta de amor al café de barrio: esquinas, conversaciones y el ritual de la primera tasa. Un formato para marcas de comida y bebida que buscan calidez, no solo primeros planos.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "second-skin",
    title: "Second Skin",
    brand: "Concept · Fashion",
    category: "fashion",
    format: "Styling Series · 9:16",
    isSpec: true,
    image: "/images/work-second-skin.jpg",
    width: 665,
    height: 806,
    imageAlt: {
      en: "Neatly folded knit basics in cream, charcoal and orange tones (spec work).",
      es: "Básicos de punto doblados en tonos crema, carbón y naranja (spec work).",
    },
    description: {
      en: "One garment, five ways. A styling series concept about making basics feel editorial — for brands whose product is meant to be lived in.",
      es: "Una prenda, cinco formas. Serie de styling sobre hacer que lo básico se sienta editorial — para marcas cuyo producto está hecho para vivirse.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "glass-and-routine",
    title: "Glass & Routine",
    brand: "Concept · Skincare",
    category: "reviews",
    format: "Product Review · 9:16",
    isSpec: true,
    image: "/images/work-glass-and-routine.jpg",
    width: 665,
    height: 806,
    imageAlt: {
      en: "Skincare jars and bottles in soft morning light (spec work).",
      es: "Frascos y botellas de skincare en luz suave de la mañana (spec work).",
    },
    description: {
      en: "An honest-review format: first impressions, two weeks later and the verdict. No scripts, no fake reactions — just the way people actually decide what to buy.",
      es: "Formato de reseña honesta: primeras impresiones, dos semanas después y el veredicto. Sin guiones ni reacciones falsas: solo la forma en que la gente de verdad decide qué comprar.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "field-notes",
    title: "Field Notes: Colombia",
    brand: "Concept · Travel",
    category: "storytelling",
    format: "Story Series · Mixed",
    isSpec: true,
    image: "/images/work-field-notes.jpg",
    width: 971,
    height: 552,
    imageAlt: {
      en: "Colorful Colombian fruit market at golden hour (spec work).",
      es: "Colorido mercado de frutas colombiano a la hora dorada (spec work).",
    },
    description: {
      en: "A storytelling series about everyday Colombia: the markets, the music, the light at 5 p.m. A format for brands that want to belong to a place, not just appear in it.",
      es: "Serie narrativa sobre la Colombia de todos los días: los mercados, la música, la luz de las 5 p.m. Un formato para marcas que quieren pertenecer a un lugar, no solo aparecer en él.",
    },
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    id: "slow-mornings",
    title: "Slow Mornings",
    brand: "Concept · Lifestyle",
    category: "lifestyle",
    format: "Lifestyle Vlog · 9:16",
    isSpec: true,
    image: "/images/work-slow-mornings.jpg",
    width: 886,
    height: 605,
    imageAlt: {
      en: "Open journal, coffee and ceramics in soft morning light (spec work).",
      es: "Journal abierto, café y cerámicas en luz suave de la mañana (spec work).",
    },
    description: {
      en: "A soft-lifestyle concept built around rituals: linen light, journaling, a playlist and your product woven into the calm. For brands selling a feeling, not a feature.",
      es: "Concepto lifestyle construido alrededor de rituales: luz de lino, journaling, una playlist y tu producto tejido en la calma. Para marcas que venden una sensación, no una función.",
    },
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: "unboxed-details",
    title: "Unboxed: The Details",
    brand: "Concept · Accessories",
    category: "unboxing",
    format: "Close-up Unboxing · 9:16",
    isSpec: true,
    image: "/images/work-unboxed-details.jpg",
    width: 886,
    height: 605,
    imageAlt: {
      en: "Macro of premium packaging with tissue paper being unboxed (spec work).",
      es: "Macro de un empaque premium con papel de seda al desempacar (spec work).",
    },
    description: {
      en: "Macro-first unboxing concept: textures, sounds and the small design decisions that deserve their own shot. Made for accessories and premium packaging.",
      es: "Concepto de unboxing macro: texturas, sonidos y las pequeñas decisiones de diseño que merecen su propio plano. Pensado para accesorios y empaques premium.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    id: "real-skit",
    title: "Relatable Skits",
    brand: "Self-published",
    category: "storytelling",
    format: "Organic Reel · 9:16",
    isSpec: false,
    image: "/images/poster-organic-skit.jpg",
    width: 720,
    height: 1291,
    imageAlt: {
      en: "Poster frame of a real self-published comedy skit reel: Edwin Ternera reacting to a teacher joke with on-screen text.",
      es: "Fotograma de un reel real y autogestionado de comedia: Edwin Ternera reaccionando a un chiste de profesor con texto en pantalla.",
    },
    video: "/videos/ugc-03.mp4",
    poster: "/images/poster-organic-skit.jpg",
    description: {
      en: "Real, self-published comedy: relatable POV skits with the hook on screen in the very first second — the same energy I'd bring to a brand's organic or paid feed.",
      es: "Comedia real y autogestionada: skits POV con el hook en pantalla desde el primer segundo — la misma energía que le pondría al feed orgánico o pagado de una marca.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "real-storytime",
    title: "Real Talk: Storytime",
    brand: "Self-published",
    category: "storytelling",
    format: "Organic Reel · 9:16",
    isSpec: false,
    image: "/images/poster-organic-storytime.jpg",
    width: 720,
    height: 1291,
    imageAlt: {
      en: "Poster frame of a real self-published storytime reel: Edwin Ternera speaking straight to the camera, outdoors.",
      es: "Fotograma de un reel real y autogestionado de storytime: Edwin Ternera hablando directo a la cámara, al aire libre.",
    },
    video: "/videos/ugc-02.mp4",
    poster: "/images/poster-organic-storytime.jpg",
    description: {
      en: "Straight-to-camera storytime reels: raw, honest, retention-first. No scripts, no filters — real content from my own feed that shows how I hold attention and build trust.",
      es: "Reels storytime directo a cámara: crudos, honestos, pensados para retener. Sin guiones ni filtros: contenido real de mi propio feed que muestra cómo sostengo la atención y construyo confianza.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
];

export const categoryOrder: CategoryKey[] = [
  "lifestyle",
  "fashion",
  "beauty",
  "technology",
  "food",
  "reviews",
  "unboxing",
  "storytelling",
];
