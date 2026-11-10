/**
 * â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 *  PORTFOLIO PROJECTS
 * â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 *  âš ï¸  All projects below are clearly labeled SPEC WORK (conceptual
 *  projects). Do NOT invent brand collaborations â€” when you have a
 *  real project, add it here with the brand name and set
 *  `isSpec: false`.
 *
 *  HOW TO REPLACE A PROJECT
 *  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  /** Intrinsic dimensions of the placeholder/current image. */
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
    brand: "Concept Â· Skincare",
    category: "beauty",
    format: "UGC Video Â· 9:16",
    isSpec: true,
    image: "/images/work-golden-hour.svg",
    width: 900,
    height: 1125,
    imageAlt: {
      en: "Placeholder for a vertical UGC video of a morning skincare routine in golden light (spec work).",
      es: "Placeholder de un video UGC vertical de una rutina de skincare matutina en luz dorada (spec work).",
    },
    description: {
      en: "A 30-second morning-routine concept: dewy light, honest textures and a hook built around the first sip of coffee meeting the first drop of serum. Spec work to show tone, pacing and product framing.",
      es: "Concepto de 30 segundos de rutina matutina: luz dorada, texturas honestas y un hook construido alrededor del primer sorbo de cafÃ© encontrÃ¡ndose con la primera gota de sÃ©rum. Trabajo especulativo para mostrar tono, ritmo y encuadre de producto.",
    },
    span: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    id: "neon-natives",
    title: "Neon Natives",
    brand: "Concept Â· Fashion",
    category: "fashion",
    format: "Editorial Â· Photo Series",
    isSpec: true,
    image: "/images/work-neon-natives.svg",
    width: 900,
    height: 1125,
    imageAlt: {
      en: "Placeholder for a street-style fashion editorial shot after dark (spec work).",
      es: "Placeholder de un editorial de moda street-style fotografiado despuÃ©s del anochecer (spec work).",
    },
    description: {
      en: "A street-style mini lookbook shot after dark: bold colors, city textures and outfits styled to move. Built to show how a fashion brand could live on my feed.",
      es: "Mini lookbook street-style fotografiado despuÃ©s del anochecer: colores intensos, texturas urbanas y outfits con movimiento. Creado para mostrar cÃ³mo una marca de moda podrÃ­a vivir en mi feed.",
    },
    span: "lg:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    id: "everyday-carry",
    title: "Everyday Carry, Reimagined",
    brand: "Concept Â· Tech",
    category: "technology",
    format: "Unboxing Â· 9:16",
    isSpec: true,
    image: "/images/work-everyday-carry.svg",
    width: 900,
    height: 900,
    imageAlt: {
      en: "Placeholder for a tech unboxing video with narrative (spec work).",
      es: "Placeholder de un video unboxing tecnolÃ³gico con narrativa (spec work).",
    },
    description: {
      en: "A tech unboxing concept with actual narrative: what's in the box, why it matters and the three details nobody shows. Spec work for gadgets and accessories.",
      es: "Concepto de unboxing tecnolÃ³gico con narrativa real: quÃ© hay en la caja, por quÃ© importa y los tres detalles que nadie muestra. Trabajo especulativo para gadgets y accesorios.",
    },
    span: "lg:col-span-5",
    aspect: "aspect-square",
  },
  {
    id: "cafe-de-barrio",
    title: "CafÃ© de Barrio",
    brand: "Concept Â· F&B",
    category: "food",
    format: "Lifestyle Reel Â· 9:16",
    isSpec: true,
    image: "/images/work-cafe-de-barrio.svg",
    width: 900,
    height: 1200,
    imageAlt: {
      en: "Placeholder for a lifestyle reel about neighborhood coffee culture (spec work).",
      es: "Placeholder de un reel lifestyle sobre la cultura del cafÃ© de barrio (spec work).",
    },
    description: {
      en: "A love letter to neighborhood coffee: corners, conversations and the ritual of the first cup. A format for food & beverage brands that want warmth, not just close-ups.",
      es: "Una carta de amor al cafÃ© de barrio: esquinas, conversaciones y el ritual de la primera tasa. Un formato para marcas de comida y bebida que buscan calidez, no solo primeros planos.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "second-skin",
    title: "Second Skin",
    brand: "Concept Â· Fashion",
    category: "fashion",
    format: "Styling Series Â· 9:16",
    isSpec: true,
    image: "/images/work-second-skin.svg",
    width: 900,
    height: 1200,
    imageAlt: {
      en: "Placeholder for a styling series about making basics feel editorial (spec work).",
      es: "Placeholder de una serie de styling sobre hacer que lo bÃ¡sico se sienta editorial (spec work).",
    },
    description: {
      en: "One garment, five ways. A styling series concept about making basics feel editorial â€” for brands whose product is meant to be lived in.",
      es: "Una prenda, cinco formas. Serie de styling sobre hacer que lo bÃ¡sico se sienta editorial â€” para marcas cuyo producto estÃ¡ hecho para vivirse.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "glass-and-routine",
    title: "Glass & Routine",
    brand: "Concept Â· Skincare",
    category: "reviews",
    format: "Product Review Â· 9:16",
    isSpec: true,
    image: "/images/work-glass-and-routine.svg",
    width: 900,
    height: 1200,
    imageAlt: {
      en: "Placeholder for an honest skincare product review video (spec work).",
      es: "Placeholder de un video de reseÃ±a honesta de un producto de skincare (spec work).",
    },
    description: {
      en: "An honest-review format: first impressions, two weeks later and the verdict. No scripts, no fake reactions â€” just the way people actually decide what to buy.",
      es: "Formato de reseÃ±a honesta: primeras impresiones, dos semanas despuÃ©s y el veredicto. Sin guiones ni reacciones falsas: solo la forma en que la gente de verdad decide quÃ© comprar.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    id: "field-notes",
    title: "Field Notes: Colombia",
    brand: "Concept Â· Travel",
    category: "storytelling",
    format: "Story Series Â· Mixed",
    isSpec: true,
    image: "/images/work-field-notes.svg",
    width: 1600,
    height: 1000,
    imageAlt: {
      en: "Placeholder for a storytelling series about everyday Colombia (spec work).",
      es: "Placeholder de una serie narrativa sobre la Colombia de todos los dÃ­as (spec work).",
    },
    description: {
      en: "A storytelling series about everyday Colombia: the markets, the music, the light at 5 p.m. A format for brands that want to belong to a place, not just appear in it.",
      es: "Serie narrativa sobre la Colombia de todos los dÃ­as: los mercados, la mÃºsica, la luz de las 5 p.m. Un formato para marcas que quieren pertenecer a un lugar, no solo aparecer en Ã©l.",
    },
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    id: "slow-mornings",
    title: "Slow Mornings",
    brand: "Concept Â· Lifestyle",
    category: "lifestyle",
    format: "Lifestyle Vlog Â· 9:16",
    isSpec: true,
    image: "/images/work-slow-mornings.svg",
    width: 1200,
    height: 900,
    imageAlt: {
      en: "Placeholder for a soft lifestyle vlog concept built around morning rituals (spec work).",
      es: "Placeholder de un concepto lifestyle suave construido alrededor de rituales matutinos (spec work).",
    },
    description: {
      en: "A soft-lifestyle concept built around rituals: linen light, journaling, a playlist and your product woven into the calm. For brands selling a feeling, not a feature.",
      es: "Concepto lifestyle construido alrededor de rituales: luz de lino, journaling, una playlist y tu producto tejido en la calma. Para marcas que venden una sensaciÃ³n, no una funciÃ³n.",
    },
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    id: "unboxed-details",
    title: "Unboxed: The Details",
    brand: "Concept Â· Accessories",
    category: "unboxing",
    format: "Close-up Unboxing Â· 9:16",
    isSpec: true,
    image: "/images/work-unboxed-details.svg",
    width: 1200,
    height: 900,
    imageAlt: {
      en: "Placeholder for a macro-first unboxing concept focused on textures and details (spec work).",
      es: "Placeholder de un concepto de unboxing macro centrado en texturas y detalles (spec work).",
    },
    description: {
      en: "Macro-first unboxing concept: textures, sounds and the small design decisions that deserve their own shot. Made for accessories and premium packaging.",
      es: "Concepto de unboxing macro: texturas, sonidos y las pequeÃ±as decisiones de diseÃ±o que merecen su propio plano. Pensado para accesorios y empaques premium.",
    },
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
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

