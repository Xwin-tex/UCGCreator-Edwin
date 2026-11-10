"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import SectionKicker from "@/components/ui/SectionKicker";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error" | "fallback";

/** Accent the final word of a display headline in any language. */
function accentLastWord(title: string) {
  const words = title.trim().split(" ");
  const last = words.pop() ?? "";
  return (
    <>
      {words.join(" ") + "\u00A0"}
      <span className="text-orange">{last}</span>
    </>
  );
}

export default function Contact({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["contact"];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const whatsappHref = `https://wa.me/${site.contact.whatsappNumber}`;

  const mailto = useMemo(() => {
    const subject = `[${site.brand}] Collaboration inquiry`;
    return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = (await response.json()) as { ok: boolean; reason?: string };

      if (json.ok) {
        setStatus("success");
        form.reset();
      } else if (json.reason === "not-configured") {
        setStatus("fallback");
        window.location.href = mailto;
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const channels = [
    {
      label: dict.emailLabel,
      value: site.contact.email,
      href: mailto,
      icon: Mail,
    },
    {
      label: dict.whatsappLabel,
      value: site.contact.whatsappDisplay,
      href: whatsappHref,
      icon: MessageCircle,
    },
    {
      label: dict.instagramLabel,
      value: site.handle,
      href: site.social.instagram,
      icon: InstagramIcon,
    },
  ];

  return (
    <section
      id="contact"
      className="grain relative scroll-mt-24 bg-carbon py-24 text-cream md:py-36"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <SectionKicker light>{dict.kicker}</SectionKicker>

        <Reveal delay={0.08}>
          <h2
            id="contact-title"
            className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold uppercase leading-[0.98] tracking-tight"
          >
            {accentLastWord(dict.title)}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            {dict.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-cream/80">
            <Sparkles className="h-3.5 w-3.5 text-orange" />
            {dict.availability}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Channels */}
          <div>
            {channels.map(({ label, value, href, icon: Icon }, i) => (
              <Reveal key={label} delay={i * 0.06} y={16}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between gap-4 border-t border-cream/12 py-6 transition-colors last:border-b hover:bg-cream/5"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/20 transition-colors group-hover:border-orange group-hover:bg-orange group-hover:text-carbon">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block font-display text-[10px] font-bold uppercase tracking-[0.24em] text-cream/50">
                        {label}
                      </span>
                      <span className="mt-1 block font-display text-lg font-bold tracking-tight md:text-xl">
                        {value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-cream/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange" />
                </a>
              </Reveal>
            ))}
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-2xl border border-cream/15 bg-carbon-soft/60 p-6 md:p-8">
              <fieldset disabled={status === "sending"} className="disabled:opacity-60">
                <legend className="font-display text-[11px] font-bold uppercase tracking-[0.24em] text-cream/60">
                  {dict.form.legend}
                </legend>

                <div className="mt-6 grid gap-5">
                  <label className="block">
                    <span className="mb-2 block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">
                      {dict.form.name} *
                    </span>
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={dict.form.name}
                      className="w-full border-b border-cream/20 bg-transparent py-3 font-body text-cream placeholder:text-cream/30 focus:border-orange focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">
                      {dict.form.email} *
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={dict.form.email}
                      className="w-full border-b border-cream/20 bg-transparent py-3 font-body text-cream placeholder:text-cream/30 focus:border-orange focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block font-display text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">
                      {dict.form.message} *
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder={dict.form.message}
                      className="w-full resize-none border-b border-cream/20 bg-transparent py-3 font-body text-cream placeholder:text-cream/30 focus:border-orange focus:outline-none"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.18em] text-carbon transition-colors duration-300 hover:bg-cream disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? dict.form.sending : dict.form.send}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </fieldset>

              {/* Status messages (aria-live for screen readers) */}
              <p aria-live="polite" className="min-h-[1.5rem]">
                {status === "success" && (
                  <span className="mt-4 block text-sm font-medium text-sky">
                    {dict.form.success}
                  </span>
                )}
                {status === "error" && (
                  <span className="mt-4 block text-sm font-medium text-orange">
                    {dict.form.error}
                  </span>
                )}
                {status === "fallback" && (
                  <span className="mt-4 block text-sm font-medium text-cream/70">
                    {dict.form.notConfigured}
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
