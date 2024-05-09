import { LanguageProvider } from "@inlang/paraglide-next";
import { type AvailableLanguageTag, languageTag } from "@/paraglide/runtime.js";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Darwin Luque | Software Developer",
  description:
    "Explore the engineering portfolio of Darwin Luque, showcasing innovative projects, skills, and qualifications.",
  keywords: [
    "Darwin Luque",
    "Full-Stack Developer",
    "Web Development",
    "App Development",
    "Portfolio",
    "Projects",
    "Expertise",
  ],
  authors: { name: "Darwin Luque" },
  creator: "Darwin Luque",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Darwin Luque | Software Developer",
    description:
      "Explore the engineering portfolio of Darwin Luque, showcasing innovative projects, skills, and qualifications.",
    creator: "@dluque_98",
    images: ["https://nextjs.org/og.png"], // TODO: Add image
  },
  appleWebApp: {
    title: "Darwin Luque | Software Developer",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-touch-image.png",
      {
        url: "/apple-touch-image.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  category: "Software Development",
  manifest: "/site.webmanifest",
} satisfies Metadata;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-schema: light)", color: "hsl(222.2 47.4% 11.2%)" },
    { media: "(prefers-color-schema: dark)", color: "hsl(210 40% 98%)" },
  ],
} satisfies Viewport;

const direction: Record<AvailableLanguageTag, "ltr" | "rtl"> = {
  en: "ltr",
  es: "ltr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html
        lang={languageTag()}
        dir={direction[languageTag()]}
        suppressHydrationWarning
      >
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen max-w-[100vw] flex-col bg-background">
              <Navbar />
              {children}
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}
