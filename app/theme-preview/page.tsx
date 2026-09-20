import { Button } from "@/components/ui/button"

type ThemeProps = {
  letter: string
  name: string
  pitch: string
  pros: string[]
  cons: string[]
  style: React.CSSProperties
  children?: React.ReactNode
}

function ThemeCard({ letter, name, pitch, pros, cons, style }: ThemeProps) {
  return (
    <section
      className="rounded-3xl border p-6 md:p-10"
      style={{ background: style.background as string, color: style.color as string, ...style }}
    >
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-60">Option {letter}</p>
          <h2 className="text-2xl font-bold md:text-3xl">{name}</h2>
        </div>
        <p className="max-w-md text-sm opacity-80">{pitch}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Mini hero */}
        <div className="rounded-2xl border p-6 md:p-8" style={{ borderColor: "currentColor", opacity: 1 }}>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest opacity-70">
            San Pedro Sula · Open to Canada / US
          </p>
          <h3 className="mb-1 text-4xl font-bold leading-tight md:text-5xl">
            Darwin Luque
          </h3>
          <p className="mb-6 text-lg font-medium opacity-80">
            Lead Software Engineer — I break things <em>on purpose</em>, so they don&apos;t break in production.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" style={{ background: "var(--preview-cta)", color: "var(--preview-cta-fg)" }}>
              Download résumé
            </Button>
            <Button
              size="lg"
              variant="outline"
              style={{ borderColor: "currentColor", color: "inherit", background: "transparent" }}
            >
              Read the blog
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {[
              ["5+ yrs", "shipping"],
              ["94%", "sprint delivery"],
              ["12", "engineers led"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-xl border px-2 py-4" style={{ borderColor: "currentColor" }}>
                <p className="text-2xl font-bold">{num}</p>
                <p className="text-xs opacity-70">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog card + sample text */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl border p-5 transition-colors duration-200 cursor-pointer hover:opacity-90"
            style={{ borderColor: "currentColor" }}
          >
            <p className="mb-1 text-xs uppercase tracking-widest opacity-60">Engineering deep-dive</p>
            <h4 className="mb-2 text-lg font-bold">Monoliths, microservices, and the 40% less downtime</h4>
            <p className="text-sm opacity-75">
              How we migrated a legacy platform serving Wendy&apos;s, Takeda and Stellantis without taking it down.
            </p>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "currentColor" }}>
            <p className="mb-2 text-xs uppercase tracking-widest opacity-60">Sample heading · body</p>
            <p className={name === "Warm & Rounded" ? "font-[var(--font-fredoka)] text-xl" : name === "Bold Brutalism" ? "font-[var(--font-archivo-black)] text-xl" : "font-[var(--font-space-grotesk)] text-xl"}>
              Quantum algorithms on a $10 chip
            </p>
            <p className="mt-1 text-sm opacity-75">
              My thesis emulated the Deutsch–Jozsa algorithm on an FPGA. Yes, a quantum algorithm. No, not on a quantum
              computer — that&apos;s the fun part.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-2 text-sm md:grid-cols-2">
        <ul className="space-y-1">
          {pros.map((p) => (
            <li key={p}>+ {p}</li>
          ))}
        </ul>
        <ul className="space-y-1 opacity-80">
          {cons.map((c) => (
            <li key={c}>− {c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function ThemePreviewPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:px-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Pick your visual direction</h1>
        <p className="mt-2 text-muted-foreground">
          Same content, three personalities. Imagine each as your full homepage.
        </p>
      </header>

      <ThemeCard
        letter="A"
        name="Neon Dark Tech"
        pitch="Dark-mode first with electric cyan/violet accents. Says 'serious systems engineer who is also cool'. Motion and glow do the talking."
        pros={["Very 'modern backend engineer'", "Great with GSAP glow/scroll effects", "Tech-recruiter friendly"]}
        cons={["Dark sites are common in dev portfolios", "Needs strong contrast discipline"]}
        style={{
          ["--preview-cta" as string]: "#22d3ee",
          ["--preview-cta-fg" as string]: "#0b1220",
          background: "linear-gradient(160deg, oklch(0.16 0.02 265), oklch(0.13 0.03 285))",
          color: "#f1f5f9",
          fontFamily: "var(--font-space-grotesk), sans-serif",
        }}
      />

      <ThemeCard
        letter="B"
        name="Warm & Rounded"
        pitch="Cream background, rounded Fredoka headings, coral CTA. Friendlier and more human — the 'you'd grab coffee with this person' vibe."
        pros={["Approachable and memorable", "Fits the storytelling/fun brief best", "Less 'template-y' than dark tech"]}
        cons={["Slightly less 'hardcore engineer' signaling", "Needs care so it doesn't feel childish"]}
        style={{
          ["--preview-cta" as string]: "#f97316",
          ["--preview-cta-fg" as string]: "#ffffff",
          background: "#fff7ed",
          color: "#431407",
          fontFamily: "var(--font-nunito), sans-serif",
        }}
      />

      <ThemeCard
        letter="C"
        name="Bold Brutalism"
        pitch="Massive type, hard 2px borders, zero border-radius, one loud accent. Maximum memorability — nobody forgets this site."
        pros={["Unforgettable, very shareable", "Personality at 100%", "Great for huge kinetic typography"]}
        cons={["Polarizing — some recruiters may find it aggressive", "Harder to keep accessible"]}
        style={{
          ["--preview-cta" as string]: "#a3e635",
          ["--preview-cta-fg" as string]: "#1a2e05",
          background: "#fafafa",
          color: "#18181b",
          borderRadius: 0,
          fontFamily: "var(--font-work-sans), sans-serif",
        }}
      />

      <footer className="text-center text-sm text-muted-foreground">
        Tell me a letter (or mix: e.g. “A but with B’s headline font”). I&apos;ll build the real thing next.
      </footer>
    </main>
  )
}
