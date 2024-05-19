import { ChevronDown, ChevronRightIcon } from "lucide-react";
import type { FC } from "react";
import { useTranslations } from "next-intl";
import { CoreValues } from "./core-values";

export const AboutMe: FC = () => {
  const t = useTranslations("aboutMe");

  return (
    <div className="py-12 md:container lg:py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="lg:w-3/4">
          <h2 className="scroll-m-20 md:border-b pb-2 text-center text-2xl font-semibold tracking-tight transition-colors first:mt-0 md:text-left md:text-3xl">
            {t("welcome")}
          </h2>
          <p className="mt-3 text-muted-foreground">
            {t("description", {
              plusYears: (new Date().getFullYear() - 2021).toString(),
            })}
          </p>
          <p className="mt-5">
            <span className="group inline-flex items-center gap-x-1 font-medium underline-offset-4">
              {t("seeMyCoreValues")}
              <ChevronRightIcon className="hidden h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1 md:inline" />
              <ChevronDown className="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-y-1 md:hidden" />
            </span>
          </p>
        </div>
        <CoreValues />
      </div>
    </div>
  );
};
