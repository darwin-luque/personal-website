import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Badge } from "@/components/ui/badge"
import { getPostSource, getAllSlugs } from "@/lib/blog"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostSource(slug)
  if (!post) return {}
  const { title, description, tags } = post.frontmatter as { title: string; description?: string; tags?: string[] }
  return {
    title: `${title} — Darwin Luque`,
    description,
    keywords: tags,
  }
}

function formatDate(iso: unknown) {
  const date = typeof iso === "string" || typeof iso === "number" ? new Date(iso) : null
  if (!date || Number.isNaN(date.getTime())) return ""
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostSource(slug)
  if (!post || post.frontmatter.draft === true) notFound()

  const { title, description, date, tags } = post.frontmatter as {
    title: string
    description?: string
    date?: string
    tags?: string[]
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {date && <time dateTime={date}>{formatDate(date)}</time>}
            {tags && (
              <div className="flex gap-1.5">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
        </header>

        <div
          className="prose-invert [--tw-prose-body:var(--color-zinc-300)] space-y-0
            [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-primary/50 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
            [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm
            [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold
            [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold
            [&_li]:text-muted-foreground [&_li]:marker:text-primary [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-6
            [&_p]:my-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_p]:text-base
            [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-muted [&_pre]:p-4
            [&_strong]:text-foreground [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6"
        >
          <MDXRemote source={post.content} />
        </div>
      </article>

      <footer className="mt-16 border-t border-border pt-8">
        <Link href="/blog" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
          ← All posts
        </Link>
      </footer>
    </main>
  )
}
