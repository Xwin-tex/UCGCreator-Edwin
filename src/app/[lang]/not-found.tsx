import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-svh flex-col items-center justify-center bg-carbon px-6 text-center text-cream">
      <p className="font-display text-[28vw] leading-none text-stroke-orange md:text-[16rem]">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight md:text-4xl">
        THIS PAGE WENT OFF-SCRIPT.
      </h1>
      <p className="mt-4 max-w-md text-cream/70">
        The page you&apos;re looking for doesn&apos;t exist — but the good
        content is one click away.
      </p>
      <Link
        href="/en"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-carbon transition-colors hover:bg-cream"
      >
        TAKE ME HOME
      </Link>
    </section>
  );
}
