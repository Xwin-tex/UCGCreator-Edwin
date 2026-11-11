/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit everything in this file first.
 * ─────────────────────────────────────────────────────────────
 *  Replace the placeholder values below (email, WhatsApp number,
 *  site URL, contact form endpoint) with real information.
 */

export const site = {
  /** Public, canonical URL of the deployed site (no trailing slash). */
  url: "https://ucgcreator-edwin.vercel.app",

  brand: "TERNESITO®",
  creator: "Edwin Ternera",
  handle: "@ternesitoou",
  role: "UGC Creator · Content Creator",

  location: {
    city: "Colombia",
    availability: "Worldwide",
  },

  /** CONTACT */
  contact: {
    email: "edwinternera2@gmail.com",
    /** WhatsApp number in international format, digits only. */
    whatsappNumber: "573126033059",
    /** Human-readable version shown on the site. */
    whatsappDisplay: "+57 312 603 3059",
    /** Optional webhook (Formspree, n8n, Make, your own API…) that
     *  receives the contact form as JSON POST. Also set it in .env.local
     *  as CONTACT_WEBHOOK_URL. Leave empty to disable the form. */
    formEndpoint: "",
  },

  social: {
    instagram: "https://www.instagram.com/ternesitoou/",
  },

  /** Shown as "BASED IN …" on the hero and about sections. */
  basedIn: "BASED IN COLOMBIA",
  basedInEs: "EN COLOMBIA",
  availableWorldwide: "AVAILABLE WORLDWIDE",
  availableWorldwideEs: "DISPONIBLE PARA EL MUNDO",
} as const;
