import type { PropsWithChildren } from "react";
import { getDictionary } from "@/lib/dictionaries";
import type { ParamsWithLang } from "@/lib/types";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { i18n } from "@/i18n-config";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: PropsWithChildren<{ params: ParamsWithLang }>) {
  const dict = await getDictionary(lang);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen max-w-[100vw] flex-col bg-background">
        <Navbar lang={lang} dict={dict} />
        {children}
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
