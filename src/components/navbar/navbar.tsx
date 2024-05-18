"use client";

import { useTranslations } from "next-intl";
import { Cpu } from "lucide-react";
import { type FC } from "react";
import { Link } from "@/lib/intl";
import { ListItem } from "./list-item";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const portfolioItems = (
  t: ReturnType<typeof useTranslations<string>>,
): { title: string; href: string; description: string }[] => [
  {
    title: t("portfolio.experience.title"),
    href: "/portfolio#experience",
    description: t("portfolio.experience.description"),
  },
  {
    title: t("portfolio.projects.title"),
    href: "/portfolio#projects",
    description: t("portfolio.projects.description"),
  },
  {
    title: t("portfolio.testimonials.title"),
    href: "/portfolio#projects",
    description: t("portfolio.testimonials.description"),
  },
  {
    title: t("portfolio.education.title"),
    href: "/portfolio#projects",
    description: t("portfolio.education.description"),
  },
  {
    title: t("portfolio.skills.title"),
    href: "/portfolio#projects",
    description: t("portfolio.skills.description"),
  },
];

export type NavbarProps = {
  lang: "en" | "es";
};

export const Navbar: FC<NavbarProps> = ({ lang }) => {
  const t = useTranslations("navbar");

  return (
    <div className="sticky top-0 z-50 grid h-16 max-h-max w-full grid-cols-12 items-center bg-background">
      <Link href="/" className="col-span-4 flex items-center space-x-4 pl-4">
        <Cpu className="h-6 w-6" />
        <p className="text-lg font-medium">Darwin Luque</p>
      </Link>
      <div className="col-span-6">
        <NavigationMenu>
          <NavigationMenuList className="w-full">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {t("aboutMe.title")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Cpu className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Darwin Luque
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {t("aboutMe.description")}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="/#introduction"
                    title={t("aboutMe.introduction.title")}
                  >
                    {t("aboutMe.introduction.description")}
                  </ListItem>
                  <ListItem
                    href="/#about-me"
                    title={t("aboutMe.aboutMe.title")}
                  >
                    {t("aboutMe.aboutMe.description")}
                  </ListItem>
                  <ListItem
                    href="/#contact-me"
                    title={t("aboutMe.contactMe.title")}
                  >
                    {t("aboutMe.contactMe.description")}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {t("portfolio.title")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {portfolioItems(t).map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-me" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t("contact.title")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="col-span-2 ml-auto flex items-center space-x-4 pr-4">
        <ModeToggle />
        <LanguageSwitcher lang={lang} />
      </div>
    </div>
  );
};
