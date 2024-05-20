import Image from "next/image";
import { Github } from "lucide-react";
import { type FC, Suspense } from "react";
import { useTranslations } from "next-intl";
import { HeroGithubStats } from "./github-stats";
import { buttonVariants } from "@/components/ui/button";
import { HeroGithubStatsLoader } from "./github-stats/loader";
import { Link } from "@/lib/intl";

export const Hero: FC = () => {
  const t = useTranslations("hero");
  const [name, title] = t("title").split(":");

  return (
    <div className="py-12 md:container lg:py-16">
      <div className="grid gap-4 md:grid-cols-2 md:items-center md:gap-8 xl:gap-20">
        <div>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-x-2 rounded-full border px-3 text-sm transition">
              {t("badge")}
            </span>
          </div>
          <div className="mx-auto mt-5 max-w-2xl">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight md:text-left lg:text-5xl">
              {name}
              {": "}
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
            <p className="mt-3 text-center text-xl text-muted-foreground md:text-left">
              {t("description")}
            </p>
          </div>
          <div className="mt-7 grid w-full gap-3 sm:inline-flex">
            <Link href="/contact-me" className={buttonVariants({ size: "lg" })}>
              {t("contactMe")}
            </Link>
          </div>
          <div className="mt-6 flex flex-col-reverse gap-x-5 py-5 md:flex-col lg:mt-10">
            <Suspense fallback={<HeroGithubStatsLoader />}>
              <HeroGithubStats />
            </Suspense>
            <div className="my-5 flex items-center gap-4">
              <Github className="h-auto w-5" />
              <p className="prose text-lg">{t("github.contributions")}</p>
            </div>
          </div>
        </div>
        <div className="relative ms-4 hidden md:block">
          <Image
            className="aspect-[8/7] w-full rounded-md object-cover"
            src="https://utfs.io/f/4c8e4617-5fad-4174-9d8e-17452936e1dd-7c7qyo.jpeg"
            alt="Image Description"
            width={800}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};
