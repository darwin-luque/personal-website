"use client";

import Link from "next/link";
import { type FC } from "react";
import { Cpu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ListItem } from "./list-item";

const portfolio: { title: string; href: string; description: string }[] = [
  {
    title: "Projects",
    href: "/portfolio#projects",
    description:
      "A collection of projects I have worked on, including open-source projects.",
  },
  {
    title: "Testimonials",
    href: "/portfolio#testimonials",
    description:
      "What people say about me and my work. Testimonials from clients and colleagues.",
  },
  {
    title: "Education",
    href: "/portfolio#education",
    description:
      "My educational background, including courses, certifications, and degrees.",
  },
  {
    title: "Skills",
    href: "/portfolio#skills",
    description: "A list of skills I have acquired over the years.",
  },
];

export const Navbar: FC = () => {
  return (
    <div className="grid h-16 max-h-max w-screen grid-cols-12 items-center px-4">
      <div className="col-span-4 flex items-center space-x-4">
        <Cpu className="h-6 w-6" />
        <p className="text-lg font-medium">Darwin Luque</p>
      </div>
      <div className="col-span-6">
        <NavigationMenu>
          <NavigationMenuList className="w-full">
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
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
                          I am a software engineer who loves to build things.
                          Get to know me better.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/#introduction" title="Introduction">
                    A brief welcome message introducing myself.
                  </ListItem>
                  <ListItem href="/#about-me" title="About me">
                    A concise summary of who am I, my background, skills, and interests.
                  </ListItem>
                  <ListItem href="/#contact-me" title="Contact Me">
                    Let&apos;s talk.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {portfolio.map((component) => (
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
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="col-span-2 ml-auto flex items-center space-x-4">
        <ModeToggle />
      </div>
    </div>
  );
};
