await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
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
      {
        protocol: "https",
        hostname: "copilot.microsoft.com",
        port: "",
        pathname: "/rp/**",
      },
      {
        protocol: "https",
        hostname: "codexitos.com",
        port: "",
        pathname: "/hubfs/**",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.unitec.edu",
        port: "",
        pathname: "/favicon/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default config;
