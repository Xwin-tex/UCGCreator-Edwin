import { ImageResponse } from "next/og";

/**
 * Branded Open Graph image, generated per language.
 * Swap this for a real photograph (opengraph-image.jpg) whenever ready.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "TERNESITO® — Content Creator";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const tagline =
    lang === "es"
      ? "CREADOR DE CONTENIDO · EN COLOMBIA, PARA EL MUNDO"
      : "CONTENT CREATOR · BASED IN COLOMBIA, AVAILABLE WORLDWIDE";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F1E9",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#FF6333",
            }}
          />
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#B9D8FF",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontWeight: 700,
              color: "#171717",
              letterSpacing: -6,
              display: "flex",
            }}
          >
            TERNESITO®
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#171717",
              letterSpacing: 2,
              marginTop: 8,
              display: "flex",
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            height: 20,
            width: "100%",
            background: "#171717",
            display: "flex",
          }}
        />
      </div>
    ),
    size,
  );
}
