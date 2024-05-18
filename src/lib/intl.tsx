"use client";

import { forwardRef, type PropsWithChildren } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { useParams } from "next/navigation";
import { messages } from "../i18n";

const locales = Object.keys(messages) as (keyof typeof messages)[];

export type LinkProps = PropsWithChildren<
  NextLinkProps & {
    href: string;
  }
>;

const RefLink = forwardRef<
  HTMLAnchorElement,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
>(({ href, ...props }, ref) => {
  const params = useParams();

  let localizedHref = href;

  if (!locales.some((locale) => localizedHref.startsWith(`/${locale}`))) {
    const locale = locales.some((locale) => locale === params.locale)
      ? (params.locale as keyof typeof messages)
      : locales[0];

    localizedHref = `/${locale}${href}`;
  }

  return <NextLink {...props} href={localizedHref} ref={ref} />;
});

RefLink.displayName = "Link";

export const Link = RefLink;
