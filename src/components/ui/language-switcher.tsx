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
import type { ParamsWithLang, PropsWithDictionary } from "@/lib/types";

export const LanguageSwitcher: FC<PropsWithDictionary<ParamsWithLang>> = ({
  dict,
  lang,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const langs = useMemo(
    () =>
      [
        {
          value: "en",
          label: `🇬🇧 ${dict.navbar.language.english}`,
        },
        {
          value: "es",
          label: `🇪🇸 ${dict.navbar.language.spanish}`,
        },
      ] as const,
    [dict.navbar.language.english, dict.navbar.language.spanish],
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
          <span className="sr-only">{dict.navbar.language.title}</span>
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
