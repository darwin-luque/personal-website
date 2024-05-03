/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mms.businesswire.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default config;
