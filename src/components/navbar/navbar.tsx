"use client";

import { type FC } from "react";
import { Link } from "@/lib/i18n";
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
import {
  skills,
  contact,
  aboutMe,
  projects,
  portfolio,
  contactMe,
  education,
  experience,
  testimonials,
  skillsDescription,
  projectsDescription,
  educationDescription,
  experienceDescription,
  navbarMainDescription,
  testimonialsDescription,
  navbarIntroductionTitle,
  navbarAboutMeDescription,
  navbarContactMeDescription,
  navbarIntroductionDescription,
} from "@/paraglide/messages";

const portfolioItems: { title: string; href: string; description: string }[] = [
  {
    title: experience(),
    href: "/portfolio#experience",
    description: experienceDescription(),
  },
  {
    title: projects(),
    href: "/portfolio#projects",
    description: projectsDescription(),
  },
  {
    title: testimonials(),
    href: "/portfolio#testimonials",
    description: testimonialsDescription(),
  },
  {
    title: education(),
    href: "/portfolio#education",
    description: educationDescription(),
  },
  {
    title: skills(),
    href: "/portfolio#skills",
    description: skillsDescription(),
  },
];

export const Navbar: FC = () => (
  <div className="sticky top-0 z-50 grid h-16 max-h-max w-full grid-cols-12 items-center bg-background">
    <Link href="/" className="col-span-4 flex items-center space-x-4 pl-4">
      <Cpu className="h-6 w-6" />
      <p className="text-lg font-medium">Darwin Luque</p>
    </Link>
    <div className="col-span-6">
      <NavigationMenu>
        <NavigationMenuList className="w-full">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{aboutMe()}</NavigationMenuTrigger>
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
                        {navbarMainDescription()}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/#introduction"
                  title={navbarIntroductionTitle()}
                >
                  {navbarIntroductionDescription()}
                </ListItem>
                <ListItem href="/#about-me" title={aboutMe()}>
                  {navbarAboutMeDescription()}
                </ListItem>
                <ListItem href="/#contact-me" title={contactMe()}>
                  {navbarContactMeDescription()}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{portfolio()}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {portfolioItems.map((component) => (
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
                {contact()}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <div className="col-span-2 ml-auto flex items-center space-x-4 pr-4">
      <ModeToggle />
      <LanguageSwitcher />
    </div>
  </div>
);
