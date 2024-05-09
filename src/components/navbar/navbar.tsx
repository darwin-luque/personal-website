"use client";

import { type FC } from "react";
import { Cpu } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ModeToggle } from "@/components/ui/mode-toggle";
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
import type { ParamsWithLang, PropsWithDictionary } from "@/lib/types";
import Link from "next/link";

const portfolioItems = (
  portfolioDict: PropsWithDictionary["dict"]["navbar"]["portfolio"],
): { title: string; href: string; description: string }[] => [
  {
    title: portfolioDict.experience.title,
    href: "/portfolio#experience",
    description: portfolioDict.experience.description,
  },
  {
    title: portfolioDict.projects.title,
    href: "/portfolio#projects",
    description: portfolioDict.projects.description,
  },
  {
    title: portfolioDict.testimonials.title,
    href: "/portfolio#testimonials",
    description: portfolioDict.testimonials.description,
  },
  {
    title: portfolioDict.education.title,
    href: "/portfolio#education",
    description: portfolioDict.education.description,
  },
  {
    title: portfolioDict.skills.title,
    href: "/portfolio#skills",
    description: portfolioDict.skills.description,
  },
];

export const Navbar: FC<PropsWithDictionary<ParamsWithLang>> = ({
  dict,
  lang,
}) => (
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
              {dict.navbar.aboutMe.title}
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
                        {dict.navbar.aboutMe.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/#introduction"
                  title={dict.navbar.aboutMe.introduction.title}
                >
                  {dict.navbar.aboutMe.introduction.description}
                </ListItem>
                <ListItem
                  href="/#about-me"
                  title={dict.navbar.aboutMe.aboutMe.title}
                >
                  {dict.navbar.aboutMe.aboutMe.description}
                </ListItem>
                <ListItem
                  href="/#contact-me"
                  title={dict.navbar.aboutMe.contactMe.title}
                >
                  {dict.navbar.aboutMe.contactMe.description}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {dict.navbar.portfolio.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {portfolioItems(dict.navbar.portfolio).map((component) => (
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
                {dict.navbar.contact.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div className="col-span-2 ml-auto flex items-center space-x-4 pr-4">
      <ModeToggle dict={dict} />
      <LanguageSwitcher lang={lang} dict={dict} />
    </div>
  </div>
);
