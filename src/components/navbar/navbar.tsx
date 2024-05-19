"use client";

import { type FC } from "react";
import { Cpu, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/intl";
import { ListItem } from "./list-item";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListItemContent } from "./list-item/content";
import { ScrollArea } from "../ui/scroll-area";

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
    <Sheet>
      <div className="sticky top-0 z-50 grid h-16 max-h-max w-full grid-cols-6 items-center bg-background md:grid-cols-12">
        <div className="block pl-4 md:hidden">
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
        </div>
        <Link
          href="/"
          className="col-span-3 flex items-center space-x-4 pl-4 md:col-span-4"
        >
          <Cpu className="h-6 w-6" />
          <p className="text-lg font-medium">Darwin Luque</p>
        </Link>
        <div className="col-span-6 hidden md:block">
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
                        <Link
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
                        </Link>
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
      <SheetContent className="w-screen" side="left">
        <ScrollArea className="h-full w-full">
          <div className="pr-5">
            <SheetHeader>
              <SheetTitle>
                <span>Darwin Luque</span>
              </SheetTitle>
              <SheetDescription>{t("aboutMe.description")}</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {t("aboutMe.title")}
                </h2>
                <div className="space-y-1">
                  <SheetClose asChild>
                    <ListItemContent
                      href="/#introduction"
                      title={t("aboutMe.introduction.title")}
                    >
                      {t("aboutMe.introduction.description")}
                    </ListItemContent>
                  </SheetClose>
                  <SheetClose asChild>
                    <ListItemContent
                      href="/#about-me"
                      title={t("aboutMe.aboutMe.title")}
                    >
                      {t("aboutMe.aboutMe.description")}
                    </ListItemContent>
                  </SheetClose>
                  <SheetClose asChild>
                    <ListItemContent
                      href="/contact-me"
                      title={t("aboutMe.contactMe.title")}
                    >
                      {t("aboutMe.contactMe.description")}
                    </ListItemContent>
                  </SheetClose>
                </div>
              </div>
              <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                  {t("portfolio.title")}
                </h2>
                <div className="space-y-1">
                  {portfolioItems(t).map((component) => (
                    <SheetClose key={component.title} asChild>
                      <ListItemContent
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItemContent>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </div>
            <SheetFooter />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
