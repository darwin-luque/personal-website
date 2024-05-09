import type { NextConfig } from "next";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es"],
} satisfies NextConfig["i18n"];

export type Locale = (typeof i18n)["locales"][number];
