import { Hero } from "@/components/homepage/hero";
import { Separator } from "@/components/ui/separator";
import { AboutMe } from "@/components/homepage/about-me";
import { ContactMe } from "@/components/homepage/contact-me";

export default async function Home() {
  return (
    <main className="flex-1">
      <div className="container relative">
        <section
          id="introduction"
          className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
        >
          <Hero />
        </section>
        <Separator />
        <section
          id="about-me"
          className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
        >
          <AboutMe />
        </section>
        <Separator />
        <section
          id="contact-me"
          className="mx-auto flex flex-col items-center gap-2 py-6 md:py-10 md:pb-6 lg:py-16 lg:pb-14"
        >
          <ContactMe />
        </section>
      </div>
    </main>
  );
}
