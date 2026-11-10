/**
 * Contact form endpoint.
 *
 * The form posts here; this route forwards the submission as JSON to
 * the webhook configured in CONTACT_WEBHOOK_URL (.env.local) — e.g.
 * a Formspree endpoint, an n8n/Make automation, or your own API.
 *
 * If no webhook is configured, the client falls back to a mailto link.
 */

export async function POST(request: Request) {
  const endpoint = process.env.CONTACT_WEBHOOK_URL;

  let name = "";
  let email = "";
  let message = "";

  try {
    const body = (await request.json()) as Record<string, unknown>;
    name = typeof body.name === "string" ? body.name.trim() : "";
    email = typeof body.email === "string" ? body.email.trim() : "";
    message = typeof body.message === "string" ? body.message.trim() : "";
  } catch {
    return Response.json(
      { ok: false, reason: "invalid-body" },
      { status: 400 },
    );
  }

  // Basic validation — keep in sync with the client form.
  if (!name || !email || !message) {
    return Response.json({ ok: false, reason: "missing-fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, reason: "invalid-email" }, { status: 400 });
  }

  if (!endpoint) {
    return Response.json(
      { ok: false, reason: "not-configured" },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message, source: "ternesito.com" }),
    });
    if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
  } catch (error) {
    console.error("[contact] webhook failed:", error);
    return Response.json({ ok: false, reason: "webhook-error" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
