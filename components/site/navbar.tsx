"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/#story", label: "Story" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-4 right-4 left-4 z-50 mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-border bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md md:px-6">
      <Link href="/" className="font-heading text-lg font-bold tracking-tight">
        darwin<span className="text-primary">.me</span>
      </Link>

      <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="transition-colors duration-200 hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </nav>

      <a
        href="/resume-darwin-luque.pdf"
        download
        className={cn(buttonVariants({ size: "lg" }), "h-9 rounded-xl px-4 text-sm")}
      >
        <FileDown data-icon="inline-start" className="size-4" />
        Résumé
      </a>
    </header>
  )
}
