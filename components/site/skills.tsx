"use client"

import SpotlightCard from "@/components/SpotlightCard"
import { Code2, Database, GitBranch, Layers, ServerCog, ShieldCheck, Terminal, Users } from "lucide-react"

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    color: "#22d3ee",
    items: ["React", "Next.js", "Svelte", "React Native", "Tailwind"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    color: "#a78bfa",
    items: ["NestJS", "Express", "tRPC", "GraphQL", "REST", "Zod"],
  },
  {
    icon: Database,
    title: "Data",
    color: "#34d399",
    items: ["PostgreSQL", "MongoDB", "Drizzle", "Prisma", "Firebase"],
  },
  {
    icon: Layers,
    title: "Cloud & DevOps",
    color: "#fbbf24",
    items: ["AWS", "DigitalOcean", "Docker", "Kubernetes", "GitHub Actions", "Vercel"],
  },
  {
    icon: Terminal,
    title: "Languages",
    color: "#fb7185",
    items: ["TypeScript / JavaScript", "Go", "Python", "C#", "SQL"],
  },
  {
    icon: ShieldCheck,
    title: "The early days",
    color: "#38bdf8",
    items: ["PyTorch", "TensorFlow", "FPGA", "Robotics", "MATLAB"],
  },
]

const softSkills = [
  { icon: Users, text: "Leading cross-functional teams of up to 12 engineers" },
  { icon: GitBranch, text: "Owning sprint planning and stakeholder demos" },
  { icon: Code2, text: "Mentoring developers into seniors — 25% productivity lift" },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">The toolkit</p>
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">Skills I actually use</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SpotlightCard
            key={group.title}
            className="rounded-2xl border border-border bg-card/40 p-6"
            spotlightColor={`${group.color}26` as `rgba(${number}, ${number}, ${number}, ${number})`}
          >
            <group.icon className="mb-3 size-6" style={{ color: group.color }} />
            <h3 className="mb-3 font-heading text-lg font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border px-2.5 py-1 font-mono text-xs text-foreground/85 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderColor: `${group.color}55`, background: `${group.color}12` }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.background = `${group.color}2b`
                    event.currentTarget.style.borderColor = `${group.color}aa`
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.background = `${group.color}12`
                    event.currentTarget.style.borderColor = `${group.color}55`
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {softSkills.map((skill) => (
          <div
            key={skill.text}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-4 py-3 text-sm text-muted-foreground"
          >
            <skill.icon className="size-5 shrink-0 text-primary" />
            {skill.text}
          </div>
        ))}
      </div>
    </section>
  )
}
