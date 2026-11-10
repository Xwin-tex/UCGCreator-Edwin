/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit everything in this file first.
 * ─────────────────────────────────────────────────────────────
 *  Replace the placeholder values below (email, WhatsApp number,
 *  site URL, contact form endpoint) with real information.
 */

export const site = {
  /** Public, canonical URL of the deployed site (no trailing slash). */
  url: "https://ternesito.com",

  brand: "TERNESITO®",
  creator: "Edwin Ternera",
  handle: "@ternesitoou",
  role: "UGC Creator · Content Creator",

  location: {
    city: "Colombia",
    availability: "Worldwide",
  },

  /** CONTACT — replace with real details. */
  contact: {
    /** Placeholder email. Replace with the real one. */
    email: "hola@ternesito.com",
    /** Placeholder WhatsApp number in international format, digits only. */
    whatsappNumber: "573000000000",
    /** Human-readable version shown on the site. */
    whatsappDisplay: "+57 300 000 0000",
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
