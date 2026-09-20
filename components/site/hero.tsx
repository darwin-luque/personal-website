"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { FileDown, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/site/icons"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pt-28 pb-16 md:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="size-3 text-primary" />
            San Pedro Sula, Honduras · open to relocating to Canada / US
          </p>

          <h1 className="text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            Darwin Luque
          </h1>

          <p className="mt-4 font-heading text-xl text-muted-foreground md:text-2xl">
            Lead Software Engineer. Full-stack by trade —{" "}
            <span className="text-primary">resilient backends</span>,{" "}
            <span className="text-accent">sharp frontends</span> — and teams that ship faster every
            sprint.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Five years of turning risky platforms into boring ones for clients like Wendy&apos;s,
            Takeda and Stellantis. Former mechatronics kid who emulated a quantum algorithm on an
            FPGA. These days I lead engineers and obsess over reliability metrics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume-darwin-luque.pdf"
              download
              className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-xl px-6 text-sm")}
            >
              <FileDown data-icon="inline-start" className="size-4" />
              Download résumé
            </a>
            <Link
              href="/#story"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-xl px-6 text-sm"
              )}
            >
              Read my story
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://github.com/darwin-luque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
            >
              <GithubIcon className="size-4" /> darwin-luque
            </a>
            <a
              href="https://linkedin.com/in/darwin-luque"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
            >
              <LinkedinIcon className="size-4" /> darwin-luque
            </a>
            <a
              href="mailto:darwin.luque.98@gmail.com"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
            >
              <Mail className="size-4" /> email
            </a>
          </div>
        </div>

        {/* Placeholder headshot — swap this block when you have the photo */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-xl" />
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-3xl border border-border bg-card/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot-placeholder.svg"
              alt="Portrait placeholder — replace with your headshot"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-4 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] text-muted-foreground backdrop-blur">
              placeholder · drop your headshot here
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
