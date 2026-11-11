/**
 * ─────────────────────────────────────────────────────────────
 *  TRANSLATIONS — every user-facing string lives here, in EN and ES.
 * ─────────────────────────────────────────────────────────────
 *  Keep the two objects structurally identical (same keys).
 *  `Dictionary` is derived from the `en` object, so TypeScript will
 *  flag any missing Spanish translation.
 *
 *  Inside `about.paragraphs` you can wrap words with *asterisks* —
 *  they render as editorial serif italics.
 */

export const en = {
  meta: {
    title: "TERNESITO® — UGC Creator & Personal Brand",
    description:
      "The creative portfolio of TERNESITO (Edwin Ternera): UGC videos, lifestyle, fashion and storytelling. Based in Colombia, available worldwide.",
  },

  nav: {
    about: "About",
    work: "Work",
    services: "Services",
    process: "Process",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    openMenu: "Open menu",
  },

  hero: {
    titleLine1: "HEY, I'M",
    titleLine2: "TERNESITO",
    supporting:
      "CONTENT CREATOR. CREATIVE MIND. YOUR NEXT FAVORITE COLLABORATOR.",
    location: "BASED IN COLOMBIA",
    locationSeparator: "·",
    availability: "AVAILABLE WORLDWIDE",
    ctaExplore: "EXPLORE MY WORLD",
    ctaWork: "LET'S WORK TOGETHER",
    instagramLabel: "Follow along on Instagram",
    scrollHint: "SCROLL",
    marquee: [
      "CONTENT CREATOR",
      "CREATIVE MIND",
      "UGC & BRAND CONTENT",
      "YOUR NEXT FAVORITE COLLABORATOR",
    ],
    floatingLabels: ["UGC CREATOR", "PERSONAL BRAND", "COLOMBIA → WORLD"],
    sticker: "OPEN FOR COLLABS!",
  },

  about: {
    kicker: "ABOUT ME",
    title: "MORE THAN A FACE BEHIND THE CAMERA.",
    paragraphs: [
      "Hi! I'm Edwin — though online, most people know me as *TERNESITO*. I'm a content creator from Colombia with a very healthy obsession with good light, good coffee and a good punchline.",
      "I grew up fascinated by fashion, internet culture and the way a single frame can make you *feel* something. That fascination became a craft: telling stories that feel real, look sharp and actually connect.",
      "I don't do stiff, scripted content. I do *personality* — the kind that makes people stop scrolling because something feels human. Whether it's a skincare routine, a pair of sneakers or a new gadget, my job is to make your product feel like part of someone's real life.",
      "If you're a brand that wants content with a pulse — and a collaborator who shows up with ideas, energy and deliverables on time — we're going to get along.",
    ],
    signature: "— Edwin",
    annotations: {
      portrait: "that's me →",
      secondary: "real moments only",
      tertiary: "coffee-powered",
    },
    facts: [
      "BILINGUAL CONTENT · EN / ES",
      "UGC · PHOTO · VIDEO",
      "BASED IN COLOMBIA",
      "OPEN TO COLLABS",
    ],
  },

  categories: {
    all: "ALL",
    lifestyle: "LIFESTYLE",
    fashion: "FASHION",
    beauty: "BEAUTY & SKINCARE",
    technology: "TECHNOLOGY",
    food: "FOOD & EXPERIENCES",
    reviews: "PRODUCT REVIEWS",
    unboxing: "UNBOXING",
    storytelling: "CREATIVE STORYTELLING",
  },

  work: {
    kicker: "SELECTED WORK",
    title: "A LITTLE BIT OF EVERYTHING. A LOT OF PERSONALITY.",
    subtitle:
      "Concept projects and content formats I create for brands — plus a few real moments from my own feed. Spec work is clearly labeled, so you can see how your product could look in my feed.",
    specBadge: "SPEC WORK",
    organicBadge: "REAL CONTENT",
    videoBadge: "VIDEO",
    photoBadge: "PHOTO",
    viewProject: "VIEW PROJECT",
    emptyState: "No projects in this category yet — new ones are always cooking.",
    modal: {
      brand: "BRAND",
      category: "CATEGORY",
      format: "FORMAT",
      about: "ABOUT THIS PROJECT",
      close: "Close",
      cta: "START A PROJECT LIKE THIS",
      specNote:
        "This is a conceptual project (spec work) created to demonstrate a content direction. No brand collaboration is implied.",
      realNote:
        "This is real, self-published content from my own feed. No brand collaboration is implied — it's here to show my voice in action.",
    },
  },

  services: {
    kicker: "SERVICES",
    title: "LET'S MAKE SOMETHING PEOPLE WANT TO WATCH.",
    subtitle:
      "From a single UGC video to a full content package — here's what I can create for your brand.",
    titles: [
      "UGC Videos",
      "Product Photography",
      "Unboxing Experiences",
      "Product Demonstrations",
      "Reviews & Testimonials",
      "Lifestyle Content",
      "Social Media Creatives",
      "Creative Storytelling",
    ],
    cta: "LET'S TALK",
    items: [
      "Vertical, native-feeling videos made for feeds, not TV. Hooks in the first two seconds, personality all the way through, and a message your audience actually remembers.",
      "Clean, editorial-style stills that give your product presence — styled, shot and edited to fit your brand's aesthetic.",
      "The first impression is a moment. I turn opening your product into a ritual people want to watch until the last sheet of tissue paper.",
      "Show, don't tell. Clear, engaging demos that highlight features and benefits without ever feeling like an infomercial.",
      "Honest, first-person reviews that build trust. Real reactions, real opinions — the kind of content audiences actually believe.",
      "Your product woven into real, everyday moments: the morning routine, the night out, the quiet in-between.",
      "Platform-native creative for Instagram, TikTok and beyond — reels, carousels and concepts designed for each feed.",
      "Bigger ideas with a narrative arc. Concepts that give your brand a voice and a story worth following.",
    ],
  },

  process: {
    kicker: "MY PROCESS",
    title: "FROM FIRST HELLO TO FINAL CUT.",
    subtitle:
      "A simple, transparent way of working — so you always know what's happening and what comes next.",
    steps: [
      {
        title: "DISCOVER",
        description:
          "We talk about your brand, your product and the audience you want to reach. I ask questions — a lot of them.",
      },
      {
        title: "CONCEPT",
        description:
          "I develop an original creative direction: hooks, angles, references and a plan tailored to your goals.",
      },
      {
        title: "CREATE",
        description:
          "I produce the content — filming, styling and editing with an obsessive eye for detail.",
      },
      {
        title: "DELIVER",
        description:
          "You receive polished content adapted to every platform and format your brand needs.",
      },
    ],
  },

  personal: {
    kicker: "OFF-CAMERA",
    title: "THE PERSON BEHIND THE CONTENT.",
    subtitle:
      "Because personality is the product. A few frames from everyday life.",
    statements: [
      "Perpetually over-caffeinated.",
      "I rehearse lines in the shower and forget them on camera.",
      "My camera roll is 10% content, 90% outtakes.",
      "The best content feels like a DM, not an ad.",
    ],
    captions: [
      "golden hour is a personality trait",
      "outfit n°47 of the week",
      "location scouting (read: walking around)",
      "bts of absolutely everything",
    ],
  },

  contact: {
    kicker: "CONTACT",
    title: "YOUR BRAND DESERVES A LITTLE PERSONALITY.",
    subtitle:
      "Have an idea, a product or a project? Let's create something worth remembering.",
    availability: "Currently booking new collaborations",
    emailLabel: "EMAIL",
    whatsappLabel: "WHATSAPP",
    instagramLabel: "INSTAGRAM",
    form: {
      legend: "OR SEND A MESSAGE",
      name: "YOUR NAME",
      email: "YOUR EMAIL",
      message: "TELL ME ABOUT YOUR PROJECT",
      send: "SEND MESSAGE",
      sending: "SENDING…",
      success: "Message sent! I'll get back to you soon.",
      error:
        "Something went wrong. Please email me directly — I always reply.",
      notConfigured:
        "The form isn't connected yet. Opening your email app instead…",
      required: "Required",
    },
  },

  footer: {
    tagline: "MADE WITH PERSONALITY.",
    rights: "© {year} Edwin Ternera. All rights reserved.",
    backToTop: "BACK TO TOP",
    navLabel: "SITEMAP",
    socialLabel: "SOCIAL",
  },

  notFound: {
    title: "404",
    subtitle: "THIS PAGE WENT OFF-SCRIPT.",
    body: "The page you're looking for doesn't exist — but the good content is one click away.",
    cta: "TAKE ME HOME",
  },
};

export type Dictionary = typeof en;

export const es: Dictionary = {
  meta: {
    title: "TERNESITO® — Creador de Contenido UGC & Personal Brand",
    description:
      "Portafolio creativo de TERNESITO (Edwin Ternera): videos UGC, lifestyle, moda y storytelling. En Colombia, disponible para el mundo.",
  },

  nav: {
    about: "Sobre mí",
    work: "Trabajo",
    services: "Servicios",
    process: "Proceso",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
    openMenu: "Abrir menú",
  },

  hero: {
    titleLine1: "HOLA, SOY",
    titleLine2: "TERNESITO",
    supporting:
      "CREADOR DE CONTENIDO. MENTE CREATIVA. TU PRÓXIMA COLABORACIÓN FAVORITA.",
    location: "EN COLOMBIA",
    locationSeparator: "·",
    availability: "DISPONIBLE PARA EL MUNDO",
    ctaExplore: "EXPLORA MI MUNDO",
    ctaWork: "TRABAJEMOS JUNTOS",
    instagramLabel: "Sígueme en Instagram",
    scrollHint: "DESLIZA",
    marquee: [
      "CREADOR DE CONTENIDO",
      "MENTE CREATIVA",
      "CONTENIDO UGC Y DE MARCA",
      "TU PRÓXIMA COLABORACIÓN FAVORITA",
    ],
    floatingLabels: ["CREADOR UGC", "PERSONAL BRAND", "COLOMBIA → MUNDO"],
    sticker: "¡ABIERTO A COLABS!",
  },

  about: {
    kicker: "SOBRE MÍ",
    title: "MÁS QUE UN ROSTRO DETRÁS DE LA CÁMARA.",
    paragraphs: [
      "¡Hola! Soy Edwin, aunque en internet casi todos me conocen como *TERNESITO*. Soy creador de contenido colombiano con una obsesión (muy sana) por la buena luz, el buen café y un buen remate.",
      "Crecí fascinado por la moda, la cultura digital y por cómo un solo encuadre puede hacerte *sentir* algo. Esa fascinación se volvió oficio: contar historias que se sienten reales, se ven impecables y de verdad conectan.",
      "No hago contenido rígido ni guionizado. Hago *personalidad*: de la que hace que la gente deje de hacer scroll porque algo se siente humano. Ya sea una rutina de skincare, unos tenis o un gadget nuevo, mi trabajo es que tu producto se sienta parte de una vida real.",
      "Si eres una marca que quiere contenido con pulso — y un colaborador que llega con ideas, energía y entregas a tiempo — nos vamos a llevar bien.",
    ],
    signature: "— Edwin",
    annotations: {
      portrait: "ese soy yo →",
      secondary: "solo momentos reales",
      tertiary: "a base de café",
    },
    facts: [
      "CONTENIDO BILINGÜE · EN / ES",
      "UGC · FOTO · VIDEO",
      "EN COLOMBIA",
      "ABIERTO A COLABS",
    ],
  },

  categories: {
    all: "TODO",
    lifestyle: "LIFESTYLE",
    fashion: "MODA",
    beauty: "BELLEZA & SKINCARE",
    technology: "TECNOLOGÍA",
    food: "COMIDA & EXPERIENCIAS",
    reviews: "RESEÑAS DE PRODUCTO",
    unboxing: "UNBOXING",
    storytelling: "NARRATIVA CREATIVA",
  },

  work: {
    kicker: "TRABAJO SELECCIONADO",
    title: "UN POCO DE TODO. MUCHA PERSONALIDAD.",
    subtitle:
      "Proyectos conceptuales y formatos de contenido que creo para marcas — más algunos momentos reales de mi propio feed. El spec work está claramente etiquetado para que veas cómo podría verse tu producto en mi feed.",
    specBadge: "SPEC WORK",
    organicBadge: "CONTENIDO REAL",
    videoBadge: "VIDEO",
    photoBadge: "FOTO",
    viewProject: "VER PROYECTO",
    emptyState:
      "Aún no hay proyectos en esta categoría — siempre hay algo nuevo en cocina.",
    modal: {
      brand: "MARCA",
      category: "CATEGORÍA",
      format: "FORMATO",
      about: "SOBRE ESTE PROYECTO",
      close: "Cerrar",
      cta: "QUIERO UN PROYECTO ASÍ",
      specNote:
        "Este es un proyecto conceptual (spec work) creado para demostrar una dirección de contenido. No implica ninguna colaboración con una marca.",
      realNote:
        "Este es contenido real y autogestionado de mi propio feed. No implica ninguna colaboración con una marca — está aquí para mostrar mi voz en acción.",
    },
  },

  services: {
    kicker: "SERVICIOS",
    title: "HAGAMOS ALGO QUE LA GENTE QUIERA VER.",
    subtitle:
      "Desde un video UGC hasta un paquete completo de contenido: esto es lo que puedo crear para tu marca.",
    titles: [
      "Videos UGC",
      "Fotografía de Producto",
      "Experiencias de Unboxing",
      "Demostraciones de Producto",
      "Reseñas & Testimonios",
      "Contenido Lifestyle",
      "Creativos para Redes",
      "Narrativa Creativa",
    ],
    cta: "HABLEMOS",
    items: [
      "Videos verticales con feeling nativo, hechos para el feed y no para la televisión. Hook en los primeros dos segundos, personalidad de principio a fin y un mensaje que tu audiencia de verdad recuerda.",
      "Fotografía limpia y editorial que le da presencia a tu producto: producida, iluminada y editada para encajar con la estética de tu marca.",
      "La primera impresión es un momento. Convierto abrir tu producto en un ritual que la gente quiere ver hasta el último papel.",
      "Mostrar, no contar. Demos claras y atractivas que resaltan características y beneficios sin parecer un infomercial.",
      "Reseñas honestas en primera persona que construyen confianza. Reacciones y opiniones reales: el tipo de contenido que la audiencia de verdad cree.",
      "Tu producto tejido en momentos reales del día a día: la rutina de la mañana, la salida de noche, los ratos tranquilos de por medio.",
      "Creativos nativos para Instagram, TikTok y más: reels, carruseles y conceptos diseñados para cada feed.",
      "Ideas más grandes con arco narrativo. Conceptos que le dan a tu marca una voz y una historia que vale la pena seguir.",
    ],
  },

  process: {
    kicker: "MI PROCESO",
    title: "DEL PRIMER HOLA AL CORTE FINAL.",
    subtitle:
      "Una forma de trabajar simple y transparente, para que siempre sepas qué está pasando y qué sigue.",
    steps: [
      {
        title: "DESCUBRIR",
        description:
          "Hablamos de tu marca, tu producto y la audiencia que quieres alcanzar. Hago preguntas — muchas.",
      },
      {
        title: "CONCEPTO",
        description:
          "Desarrollo una dirección creativa original: hooks, ángulos, referencias y un plan a la medida de tus objetivos.",
      },
      {
        title: "CREAR",
        description:
          "Produzco el contenido: filmación, styling y edición con un ojo obsesivo por el detalle.",
      },
      {
        title: "ENTREGAR",
        description:
          "Recibes contenido pulido y adaptado a cada plataforma y formato que tu marca necesite.",
      },
    ],
  },

  personal: {
    kicker: "FUERA DE CÁMARA",
    title: "LA PERSONA DETRÁS DEL CONTENIDO.",
    subtitle:
      "Porque la personalidad es el producto. Unos cuantos fotogramas de la vida diaria.",
    statements: [
      "Cafeinado de manera perpetua.",
      "Ensayo frases en la ducha y las olvido frente a la cámara.",
      "Mi carrete es 10% contenido, 90% tomas fallidas.",
      "El mejor contenido se siente como un DM, no como un anuncio.",
    ],
    captions: [
      "la hora dorada es un rasgo de personalidad",
      "outfit n.º 47 de la semana",
      "escouting de locaciones (leáse: caminar por ahí)",
      "bts de absolutamente todo",
    ],
  },

  contact: {
    kicker: "CONTACTO",
    title: "TU MARCA MERECE UN POCO DE PERSONALIDAD.",
    subtitle:
      "¿Tienes una idea, un producto o un proyecto? Hagamos algo que valga la pena recordar.",
    availability: "Actualmente agendando nuevas colaboraciones",
    emailLabel: "CORREO",
    whatsappLabel: "WHATSAPP",
    instagramLabel: "INSTAGRAM",
    form: {
      legend: "O ENVÍA UN MENSAJE",
      name: "TU NOMBRE",
      email: "TU CORREO",
      message: "CUÉNTAME SOBRE TU PROYECTO",
      send: "ENVIAR MENSAJE",
      sending: "ENVIANDO…",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error:
        "Algo salió mal. Escríbeme directamente por correo — siempre respondo.",
      notConfigured:
        "El formulario aún no está conectado. Abriendo tu app de correo…",
      required: "Obligatorio",
    },
  },

  footer: {
    tagline: "HECHO CON PERSONALIDAD.",
    rights: "© {year} Edwin Ternera. Todos los derechos reservados.",
    backToTop: "VOLVER ARRIBA",
    navLabel: "MAPA",
    socialLabel: "SOCIAL",
  },

  notFound: {
    title: "404",
    subtitle: "ESTA PÁGINA SE SALIÓ DEL GUION.",
    body: "La página que buscas no existe — pero el buen contenido está a un clic.",
    cta: "Llévame al inicio",
  },
};

const dictionaries: Record<"en" | "es", Dictionary> = { en, es };

export function getDictionary(locale: "en" | "es"): Dictionary {
  return dictionaries[locale];
}
