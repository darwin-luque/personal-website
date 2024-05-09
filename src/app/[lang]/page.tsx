import { Hero } from "@/components/homepage/hero";
import { Separator } from "@/components/ui/separator";
import { AboutMe } from "@/components/homepage/about-me";
import { ContactMe } from "@/components/homepage/contact-me";
import { getDictionary } from "@/lib/dictionaries";
import type { ParamsWithLang } from "@/lib/types";

export default async function Home({
  params: { lang },
}: {
  params: ParamsWithLang;
}) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex-1">
      <div className="container relative">
        <section
          id="introduction"
          className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
        >
          <Hero dict={dict} />
        </section>
        <Separator />
        <section
          id="about-me"
          className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
        >
          <AboutMe dict={dict} />
        </section>
        <Separator />
        <section
          id="contact-me"
          className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
        >
          <ContactMe dict={dict} />
        </section>
      </div>
    </main>
  );
}
