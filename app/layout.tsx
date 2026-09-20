import type { Metadata } from "next"
import { Geist_Mono, Inter, Space_Grotesk, Fredoka, Nunito, Archivo_Black, Work_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "Darwin Luque — Lead Software Engineer | Full-Stack",
  description:
    "Lead full-stack engineer with 5+ years shipping production software for Wendy's, Takeda and Stellantis. Resilient backends, sharp frontends, and teams that ship faster. Open to relocation to Canada / US.",
  keywords: [
    "Darwin Luque",
    "Lead Software Engineer",
    "Full-Stack Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "NestJS",
    "React",
    "Next.js",
    "TypeScript",
    "microservices",
    "DevOps",
    "engineering manager",
  ],
  openGraph: {
    title: "Darwin Luque — Lead Software Engineer | Full-Stack",
    description:
      "Full-stack lead engineer. 5+ years, Wendy's/Takeda/Stellantis, quantum algorithms on FPGAs, and a habit of making platforms boring and reliable.",
    type: "website",
    url: "https://darwinluque.me",
    siteName: "Darwin Luque",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darwin Luque — Lead Software Engineer | Full-Stack",
    description: "Full-stack lead engineer. Reliable systems, faster teams.",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darwin Luque",
  jobTitle: "Lead Software Engineer",
  email: "mailto:darwin.luque.98@gmail.com",
  url: "https://darwinluque.me",
  sameAs: ["https://github.com/darwin-luque", "https://linkedin.com/in/darwin-luque"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Pedro Sula",
    addressCountry: "HN",
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "Microservices",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "DevOps",
    "Engineering Leadership",
  ],
  alumniOf: "Universidad Tecnológica Centroamericana",
  description:
    "Lead full-stack engineer with 5+ years of experience shipping production software for international clients such as Wendy's, Takeda, and Stellantis.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        spaceGrotesk.variable,
        fredoka.variable,
        nunito.variable,
        archivoBlack.variable,
        workSans.variable
      )}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link
          rel="alternate"
          type="application/pdf"
          href="/resume-darwin-luque.pdf"
          title="Darwin Luque — Résumé (PDF)"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
