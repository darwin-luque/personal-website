"use client";

import { useMemo, type FC } from "react";
import { Link, usePathname } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { Globe } from "lucide-react";
import { english, spanish, toggleLanguage } from "../../paraglide/messages";

export const LanguageSwitcher: FC = () => {
  const pathname = usePathname(); //make sure to use the one from `@/lib/i18n`

  // replace language code in the pathname
  const pathnameTrimmed = useMemo(() => {
    return pathname.replace(/(en|es)/, "");
  }, [pathname]);

  console.log(pathnameTrimmed);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{toggleLanguage()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={pathnameTrimmed} locale="en">
            {english()}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={pathnameTrimmed} locale="es">
            {spanish()}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
