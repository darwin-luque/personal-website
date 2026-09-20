"use client"

import AnimatedContent from "@/components/AnimatedContent"
import RollingNumber from "@/components/RollingNumber"
import { Card } from "@/components/ui/card"

function StatCounter({
  value,
  suffix,
  label,
  color,
}: {
  value: number
  suffix?: string
  label: string
  color: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-card/50 px-4 py-5 text-center">
      <span className="font-heading text-3xl leading-none font-bold md:text-4xl" style={{ color }}>
        <RollingNumber value={value} />
        {suffix}
      </span>
      <span className="text-xs text-muted-foreground md:text-sm">{label}</span>
    </div>
  )
}

const chapters = [
  {
    id: "ch-1",
    chapter: "Chapter 01",
    title: "Where it started",
    accent: "#22d3ee",
    paragraphs: [
      "Before backend APIs, I was the kid wiring sensors to robots. I studied mechatronics engineering and graduated with two research projects instead of one: an FPGA emulation of the Deutsch–Jozsa quantum algorithm, and a CNN that let a physical robot navigate autonomously.",
      "The lesson I didn't know I was learning: hard problems are usually just unfamiliar math plus unfamiliar tooling. Production systems turned out to be the same thing, with more Slack channels.",
    ],
    tags: ["FPGA", "Quantum emulation", "CNNs", "Robotics", "PyTorch", "MATLAB"],
  },
  {
    id: "ch-2",
    chapter: "Chapter 02",
    title: "The climb",
    accent: "#a78bfa",
    paragraphs: [
      "At CODE Exitos I went from developer to Tech Lead in two years, then Engineering Manager reporting to the CTO in three. I led 12 engineers building platforms for Wendy's, Takeda, Stellantis and Sifera.",
      "My favorite project was steering a legacy monolith into microservices — fewer 3 AM pages, 40% less downtime. I also brought in GitHub Actions + Docker pipelines that cut deployment times by 30%. Boring on purpose. Reliable in practice.",
    ],
    tags: ["Leadership", "Microservices", "CI/CD", "Mentoring", "NestJS", "REST & GraphQL"],
    stats: [
      { value: 40, suffix: "%", label: "less downtime after migration", color: "#a78bfa" },
      { value: 30, suffix: "%", label: "faster deployments with CI/CD", color: "#a78bfa" },
      { value: 25, suffix: "%", label: "productivity gained via mentoring", color: "#a78bfa" },
      { value: 12, suffix: "", label: "engineers led as manager", color: "#a78bfa" },
    ],
  },
  {
    id: "ch-3",
    chapter: "Chapter 03",
    title: "Now",
    accent: "#34d399",
    paragraphs: [
      "Today I'm Lead Software Engineer at FortressOS — promoted from Senior within 14 months. I lead a cross-functional team of 5 developers and 2 QA engineers, and I sit at the bridge between product and engineering: sprint planning, live stakeholder demos, translating 'business ask' into 'clean architecture'.",
      "Since taking over, sprint delivery went from 86% to 94% and team velocity from 6.5 to 7.8 points per sprint. I still personally ship 8.3 points per sprint at 96% completion across five shipped internal projects — leading by example isn't just a phrase, it's a commit history.",
    ],
    tags: ["Team leadership", "Stakeholder management", "Reliability", "Velocity"],
    stats: [
      { value: 94, suffix: "%", label: "sprint delivery (was 86%)", color: "#34d399" },
      { value: 7.8, suffix: "", label: "avg velocity / sprint (was 6.5)", color: "#34d399" },
      { value: 7, suffix: "", label: "devs + QA on my team", color: "#34d399" },
      { value: 14, suffix: " mo", label: "Senior → Lead promotion", color: "#34d399" },
    ],
  },
]

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <div className="flex flex-col gap-28">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="relative">
            <AnimatedContent distance={60} duration={0.7} threshold={0.15}>
              <div
                className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em]"
                style={{ color: chapter.accent }}
              >
                <span className="inline-block h-px w-8" style={{ background: chapter.accent }} />
                {chapter.chapter}
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">{chapter.title}</h2>
              <div className="flex flex-col gap-4">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="max-w-2xl leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {chapter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors duration-200"
                    style={{ borderColor: `${chapter.accent}33` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedContent>

            {chapter.stats && (
              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {chapter.stats.map((stat) => (
                  <StatCounter key={stat.label} {...stat} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatedContent distance={40} threshold={0.3}>
        <Card className="mt-24 border-primary/30 bg-primary/5 p-6 md:p-8">
          <p className="font-heading text-lg leading-relaxed md:text-xl">
            There&apos;s a version of my story that isn&apos;t in the résumé: the open-source
            packages with steady weekly downloads, the merged NestJS docs PR, the president-of-the-student-association
            era, and the food adventures I mention whenever someone asks about Honduras.{" "}
            <span className="text-primary">Keep scrolling</span> — or jump to the{" "}
            <a href="/resume-darwin-luque.pdf" className="text-primary underline underline-offset-4">
              résumé
            </a>
            .
          </p>
        </Card>
      </AnimatedContent>
    </section>
  )
}
