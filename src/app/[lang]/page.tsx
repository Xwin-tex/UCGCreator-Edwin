import { getDictionary } from "@/content/dictionaries";
import { hasLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Personal from "@/components/sections/Personal";
import Contact from "@/components/sections/Contact";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} dict={dict} />
      <About dict={dict.about} />
      <Work locale={lang} dict={dict} />
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <Personal dict={dict.personal} />
      <Contact locale={lang} dict={dict.contact} />
    </>
  );
}
