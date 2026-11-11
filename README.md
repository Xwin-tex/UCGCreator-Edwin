# TERNESITO® — Personal Brand & UGC Creative Portfolio

Bilingual (EN/ES) editorial portfolio for **TERNESITO** (Edwin Ternera) — UGC creator & personal brand.

Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide React**.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /en (or /es)
npm run build    # production build
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Redirects to the visitor's language (`/en` default) |
| `/en` | English version |
| `/es` | Spanish version |

Language is persisted via the `ternesito-lang` cookie (set by the EN/ES switcher) and used by `proxy.ts` on the next visit. SEO metadata, `<html lang>` and Open Graph images are generated per language.

---

## ✏️ Replacing placeholder content (checklist)

All editable content lives in **`src/content/`** — you should almost never need to touch components.

### 1. Personal information & contact — `src/content/site.ts`
- `url` → the final deployed domain.
- `contact.email` → real email (currently a placeholder).
- `contact.whatsappNumber` / `whatsappDisplay` → real number.
- `social.instagram` → already points to [@ternesitoou](https://www.instagram.com/ternesitoou/).

### 2. Photographs & videos
Your real photos are already integrated, and the remaining slots use
AI-generated editorial illustrations matched to the site's palette (see table
below). Replace the 🤖 ones with your own photos keeping the **same filename**
(or update the paths in the components):

| File | Used in | Status |
| --- | --- | --- |
| `hero-portrait.jpg` | Hero portrait (main) | ✅ real photo |
| `about-01.jpg` | About main portrait + Hero back | ✅ real photo |
| `about-02.jpg` | About secondary | ✅ real photo |
| `about-03.jpg` | About detail | 🤖 AI illustration |
| `personal-01.jpg` | Personal touch polaroid | ✅ real photo |
| `personal-02..04.jpg` | Personal touch polaroids | 🤖 AI illustrations |
| `work-neon-natives.jpg` | Portfolio card | ✅ real photo |
| `work-*.jpg` (rest) | Portfolio bento grid | 🤖 AI illustrations |

The AI illustrations (🤖) were generated to match the site's palette (cream /
charcoal / orange) as **temporary stand-ins** — swap them for your own photos or
real project shots whenever you have them. They also have no real people's
likenesses and are always shown under the SPEC WORK badge.

For real photos, prefer `.jpg`/`.webp`; `next/image` will optimize them automatically.
If you update a photo, also update its `width`/`height` in the component or in
`src/content/projects.ts` so the layout doesn't shift.

**Portfolio videos:** two real organic reels are already live
(`public/videos/ugc-02.mp4`, `ugc-03.mp4`, used by the "Self-published"
projects). To swap or add more, edit `src/content/projects.ts`: set
`video: "/videos/my-video.mp4"` (and optionally `poster:`) on any project.
Vertical 9:16 MP4, H.264, muted-friendly. The card and modal automatically
switch to a video player.

### 3. Portfolio projects — `src/content/projects.ts`
- Projects without a brand (`isSpec: false`) are real, self-published organic content — the UI shows them with a "REAL CONTENT" badge instead of "SPEC WORK".
- Do not remove the SPEC WORK label from conceptual projects until a real collaboration replaces it.
- To add a real project: set `isSpec: false`, put the real brand in `brand`, and update `title`, `format`, `image`/`video` and the EN/ES descriptions.

### 4. Translations & copy — `src/content/dictionaries.ts`
Every user-facing string, EN and ES side by side. Keep both objects key-identical (TypeScript enforces it). Inside `about.paragraphs`, wrap words with `*asterisks*` to render them as serif italics.

### 5. Contact form
- Set `CONTACT_WEBHOOK_URL` in `.env.local` (see `.env.example`) to a Formspree/n8n/own-API endpoint.
- Without it, the form gracefully opens the visitor's email app instead.

### 6. Regenerating placeholders (no longer needed)
All image slots are filled (real photos + AI illustrations). The old generator
is kept only for reference:
```bash
node scripts/generate-placeholders.mjs
```

---

## Project structure

```
src/
  app/
    [lang]/            ← locale layout, page, OG image, not-found
    api/contact/       ← contact form endpoint
    sitemap.ts, robots.ts, global-not-found.tsx
    globals.css        ← design system (Tailwind 4 theme)
  components/
    sections/          ← Hero, About, Work, Services, Process, Personal, Contact, Footer
    ui/                ← Reveal (motion primitives), Marquee, SectionKicker
    Header, LanguageSwitcher, CustomCursor
  content/             ← site.ts · dictionaries.ts · projects.ts · services.ts
  lib/i18n.ts          ← locales, cookie name, helpers
proxy.ts               ← locale redirect (Next 16's middleware)
scripts/               ← placeholder generator (kept for reference)
```

## Accessibility & performance notes
- `prefers-reduced-motion` disables the marquee, float, parallax and custom cursor.
- Custom cursor only activates with a fine pointer (desktop).
- Semantic landmarks, `aria-live` form status, keyboard-closable modal/menu.
- Images use `next/image`; the OG image is generated per language via `next/og`.
