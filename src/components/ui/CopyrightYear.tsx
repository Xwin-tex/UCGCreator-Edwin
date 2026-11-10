"use client";

import { useEffect, useState } from "react";

/**
 * Copyright year. Renders the build-time year during SSR and
 * self-corrects on the client so a statically prerendered page
 * stays current.
 */
export default function CopyrightYear() {
  // Build-safe initial value; corrected to the real year on mount.
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
