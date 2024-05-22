"use client";

import { type FC } from "react";
import { Cpu, FileText, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@/lib/intl";
import { cn } from "@/lib/utils";
import { ListItem } from "./list-item";
import { ListItemContent } from "./list-item/content";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
    href: "/portfolio#testimonials",
    description: t("portfolio.testimonials.description"),
  },
  {
    title: t("portfolio.education.title"),
    href: "/portfolio#education",
    description: t("portfolio.education.description"),
  },
  {
    title: t("portfolio.skills.title"),
    href: "/portfolio#skills",
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
          <Cpu className="h-4 w-4 sm:h-6 sm:w-6" />
          <p className="text-base font-medium sm:text-lg">Darwin Luque</p>
        </Link>
        <div className="col-span-5 hidden md:block">
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
                      href="/#expertise"
                      title={t("aboutMe.myExpertise.title")}
                    >
                      {t("aboutMe.myExpertise.description")}
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
        <div className="col-span-2 ml-auto flex w-full items-center justify-end space-x-4 pr-4 lg:col-span-3">
          <Tooltip delayDuration={200}>
            <TooltipTrigger>
              <a
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "hidden h-10 w-10 space-x-2 p-0 sm:flex lg:h-10 lg:w-fit lg:px-4 lg:py-2",
                )}
                href="https://utfs.io/f/cf333d0b-71b9-46f1-b1f5-0b5ca20eb1a5-td3bos.pdf"
                download
              >
                <FileText className="h-[1.2rem] w-[1.2rem]" />
                <span className="hidden lg:inline">{t("resume.title")}</span>
              </a>
              <TooltipContent>
                <p>{t("resume.title")}</p>
              </TooltipContent>
            </TooltipTrigger>
            <ModeToggle />
            <LanguageSwitcher lang={lang} />
          </Tooltip>
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
            <SheetFooter>
              <p className="text-muted-foreground">
                Download my resume{" "}
                <a
                  className="font-bold"
                  href="https://utfs.io/f/cf333d0b-71b9-46f1-b1f5-0b5ca20eb1a5-td3bos.pdf"
                  download
                >
                  here
                </a>
              </p>
            </SheetFooter>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
