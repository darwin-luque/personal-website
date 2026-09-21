"use client"

import StarBorder from "@/components/StarBorder"
import { FileDown, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/site/icons"

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/40 px-6 py-14 text-center md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]"
        />

        <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">For recruiters</p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hiring? Let&apos;s make this easy.</h2>
        <p className="mx-auto mb-10 max-w-xl leading-relaxed text-muted-foreground">
          Lead full-stack engineer. Based in San Pedro Sula, Honduras — open to
          relocating to Canada or the US. Available to talk about products, metrics, and how your
          team ships faster.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <StarBorder
            as="div"
            color="#22d3ee"
            backgroundColor="#151a2b"
            borderColor="#2b3350"
            className="rounded-xl"
          >
            <a
              href="/resume-darwin-luque.pdf"
              download
              className="inline-flex items-center gap-2 font-medium text-foreground"
            >
              <FileDown className="size-4" />
              Download résumé (PDF)
            </a>
          </StarBorder>
          <a
            href="mailto:darwin.luque.98@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
          >
            <Mail className="size-4" />
            darwin.luque.98@gmail.com
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="https://linkedin.com/in/darwin-luque"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — darwin-luque"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
          >
            <LinkedinIcon className="size-4 text-primary" />
          </a>
          <a
            href="https://github.com/darwin-luque"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — darwin-luque"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
          >
            <GithubIcon className="size-4 text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
