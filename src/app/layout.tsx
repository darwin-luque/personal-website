import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { ThemeProvider } from "@/providers/theme";
import { TRPCReactProvider } from "@/trpc/react";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Footer } from "../components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <TRPCReactProvider>
            <div className="relative flex min-h-screen max-w-[100vw] flex-col bg-background">
              <Navbar />
              {children}
              <Footer />
            </div>
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
