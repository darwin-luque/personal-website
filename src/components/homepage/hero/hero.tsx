import Image from "next/image";
import { type FC, Suspense } from "react";
import { Github, Link } from "lucide-react";
import { HeroGithubStats } from "./github-stats";
import { buttonVariants } from "@/components/ui/button";
import { HeroGithubStatsLoader } from "./github-stats/loader";
import type { PropsWithDictionary } from "@/lib/types";

export const Hero: FC<PropsWithDictionary> = ({ dict }) => (
  <div className="container py-12 lg:py-16">
    <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
      <div>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-x-2 rounded-full border px-3 text-sm transition">
            {dict.hero.badge}
          </span>
        </div>
        <div className="mx-auto mt-5 max-w-2xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {dict.hero.title}
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            {dict.hero.description}
          </p>
        </div>
        <div className="mt-7 grid w-full gap-3 sm:inline-flex">
          <Link href="/contact-me" className={buttonVariants({ size: "lg" })}>
            {dict.hero.contactMe}
          </Link>
        </div>
        <div className="mt-6 gap-x-5 py-5 lg:mt-10">
          <Suspense fallback={<HeroGithubStatsLoader />}>
            <HeroGithubStats dict={dict} />
          </Suspense>
          <div className="mt-5 flex items-center gap-4">
            <Github className="h-auto w-5" />
            <p className="prose text-lg">{dict.github.contributions}</p>
          </div>
        </div>
      </div>
      <div className="relative ms-4">
        <Image
          className="w-full rounded-md"
          src="https://placehold.co/800x700"
          alt="Image Description"
          width={800}
          height={700}
        />
      </div>
    </div>
  </div>
);
