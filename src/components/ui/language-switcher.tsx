"use client";

import { Globe } from "lucide-react";
import { useMemo, type FC } from "react";
import { english, spanish, toggleLanguage } from "@/paraglide/messages";
import { usePathname, useRouter } from "@/lib/i18n";
import { languageTag } from "@/paraglide/runtime";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const langs = useMemo(
    () =>
      [
        {
          value: "en",
          label: `🇬🇧 ${english()}`,
        },
        {
          value: "es",
          label: `🇪🇸 ${spanish()}`,
        },
      ] as const,
    [],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{toggleLanguage()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={languageTag()}
          onValueChange={(lang) =>
            router.push(pathname, {
              locale: lang as (typeof langs)[number]["value"],
            })
          }
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
