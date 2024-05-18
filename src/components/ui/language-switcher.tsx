"use client";

import { Globe } from "lucide-react";
import { useMemo, type FC } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type LanguageSwitcherProps = {
  lang: "en" | "es";
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ lang }) => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("navbar.language");

  const langs = useMemo(
    () =>
      [
        {
          value: "en",
          label: `🇬🇧 ${t("english")}`,
        },
        {
          value: "es",
          label: `🇪🇸 ${t("spanish")}`,
        },
      ] as const,
    [t],
  );

  const parsedPathname = useMemo(() => {
    // remove locale from pathname
    return pathname.replace(lang, "");
  }, [pathname, lang]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("title")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={lang}
          onValueChange={(lang) => router.push(`${lang}/${parsedPathname}`)}
        >
          {langs.map((lang) => (
            <DropdownMenuRadioItem key={lang.value} value={lang.value}>
              {lang.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
