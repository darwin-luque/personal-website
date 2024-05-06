import { paraglide } from "@inlang/paraglide-next/plugin";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide"
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mms.businesswire.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/800x700",
      },
    ],
    dangerouslyAllowSVG: true,
  },
});

export default config;
